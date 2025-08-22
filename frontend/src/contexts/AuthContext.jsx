import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertTokenExpired from '../components/AlertTokenExpired';
import LoginModal from '../components/LoginModal';
import { createContext as createReactContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Context to allow global control of login modal
export const LoginModalContext = createReactContext({ openLoginModal: () => {} });

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    const [showTokenExpired, setShowTokenExpired] = useState(false);
    const [openLoginModalCallback, setOpenLoginModalCallback] = useState(() => () => {});

    // On mount, check auth and set user/token/loading
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        let isExpired = false;
        if (storedToken) {
            try {
                const decoded = jwtDecode(storedToken);
                if (decoded.exp && Date.now() >= decoded.exp * 1000) {
                    isExpired = true;
                }
            } catch (e) {
                isExpired = true;
            }
        }
        if (storedToken && storedUser && !isExpired) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        } else if (isExpired) {
            logout();
            setShowTokenExpired(true);
        }
        setLoading(false);
    }, []);

    // Real-time expiration detection: set timer whenever token changes
    useEffect(() => {
        if (!token) return;
        let timeout;
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp) {
                const msUntilExpire = decoded.exp * 1000 - Date.now();
                if (msUntilExpire > 0) {
                    timeout = setTimeout(() => {
                        logout();
                        setShowTokenExpired(true);
                    }, msUntilExpire);
                } else {
                    // Already expired
                    logout();
                    setShowTokenExpired(true);
                }
            }
        } catch (e) {
            logout();
            setShowTokenExpired(true);
        }
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [token]);

    // Login function
    const login = (userData, userToken) => {
        // Check if token is expired before logging in
        let isExpired = false;
        if (userToken) {
            try {
                const decoded = jwtDecode(userToken);
                if (decoded.exp && Date.now() >= decoded.exp * 1000) {
                    isExpired = true;
                }
            } catch (e) {
                isExpired = true;
            }
        }
        if (isExpired) {
            logout();
            setShowTokenExpired(true);
            return;
        }
        setUser(userData);
        setToken(userToken);
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    // Google Sign In
    const googleSignIn = async (googleToken) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/google`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: googleToken }),
            });

            const data = await response.json();

            if (data.success) {
                login(data.user, data.token);
                return { success: true, user: data.user };
            } else {
                throw new Error(data.message || 'Google sign-in failed');
            }
        } catch (error) {
            console.error('Google sign-in error:', error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        token,
        login,
        logout,
        googleSignIn,
        loading,
        isAuthenticated: !!user
    };

    // State to control global login modal
    const [showGlobalLoginModal, setShowGlobalLoginModal] = useState(false);

    return (
        <AuthContext.Provider value={value}>
            <LoginModalContext.Provider value={{ setOpenLoginModalCallback }}>
                <div className={showGlobalLoginModal ? 'blur-sm transition-all duration-300' : ''}>
                    {children}
                </div>
                <AlertTokenExpired open={showTokenExpired} onSignIn={() => {
                    setShowTokenExpired(false);
                    setShowGlobalLoginModal(true);
                }} />
                <LoginModal isOpen={showGlobalLoginModal} onClose={() => setShowGlobalLoginModal(false)} />
            </LoginModalContext.Provider>
        </AuthContext.Provider>
    );
};
