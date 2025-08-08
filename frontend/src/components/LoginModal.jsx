import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleLoginButton from './GoogleLoginButton';
import { useAuth } from '../contexts/AuthContext';

const LoginModal = ({ isOpen, onClose, onSignInSuccess }) => {
    const { login } = useAuth();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    // Validation functions
    const validateName = (name) => {
        if (!name) return 'Name is required';
        if (!/^[A-Za-z\s]{2,}$/.test(name)) return 'Enter a valid name (letters only, min 2 chars)';
        return '';
    };
    const validateEmail = (email) => {
        if (!email) return 'Email is required';
        // Simple email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address';
        return '';
    };
    const validatePassword = (password) => {
        if (!password) return 'Password is required';
        if (password.length < 5) return 'Password must be at least 5 characters';
        return '';
    };
    const validatePhone = (phone) => {
        if (!phone) return '';
        if (!/^\d+$/.test(phone)) return 'Phone number must contain only numbers';
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        // For phone, allow only numbers
        if (name === 'phone') {
            newValue = value.replace(/[^\d]/g, '');
        }
        setFormData({
            ...formData,
            [name]: newValue
        });
        setError('');

        // Real-time validation
        let errorMsg = '';
        if (name === 'name') errorMsg = validateName(newValue);
        if (name === 'email') errorMsg = validateEmail(newValue);
        if (name === 'password') errorMsg = validatePassword(newValue);
        if (name === 'phone') errorMsg = validatePhone(newValue);
        setFormErrors({
            ...formErrors,
            [name]: errorMsg
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate all fields before submit
        let errors = { ...formErrors };
        if (!isLoginMode) {
            errors.name = validateName(formData.name);
            errors.phone = validatePhone(formData.phone);
        }
        errors.email = validateEmail(formData.email);
        errors.password = validatePassword(formData.password);
        setFormErrors(errors);

        // If any error exists, prevent submit
        const hasError = Object.values(errors).some((msg) => msg);
        if (hasError) return;

        setLoading(true);
        try {
            const endpoint = isLoginMode ? '/api/auth/login' : '/api/auth/register';
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                login(data.user, data.token);
                onClose();
                setFormData({ name: '', email: '', password: '', phone: '' });
                setFormErrors({ name: '', email: '', password: '', phone: '' });
                if (onSignInSuccess) onSignInSuccess();
            } else {
                setError(data.message || 'Authentication failed');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = (user) => {
        onClose();
        console.log('Google login successful:', user);
    };

    const handleGoogleError = (error) => {
        setError(error || 'Google sign-in failed');
    };

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
        setError('');
        setFormData({ name: '', email: '', password: '', phone: '' });
        setFormErrors({ name: '', email: '', password: '', phone: '' });
    };

    if (!isOpen) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center z-50 p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header */}
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {isLoginMode ? 'Welcome Back' : 'Create Account'}
                                </h2>
                                <p className="text-gray-600">
                                    {isLoginMode ? 'Sign in to your account' : 'Join Figgz Cafe Restaurant'}
                                </p>
                            </div>

                            {/* Google Login Button */}
                            <div className="mb-6">
                                <GoogleLoginButton
                                    onSuccess={handleGoogleSuccess}
                                    onError={handleGoogleError}
                                />
                            </div>

                            {/* Divider */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                    {error}
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {!isLoginMode && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required={!isLoginMode}
                                            className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                            placeholder="Enter your full name"
                                        />
                                        {formErrors.name && <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                        placeholder="Enter your email"
                                    />
                                    {formErrors.email && <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        minLength={5}
                                        className={`w-full px-3 py-2 border ${formErrors.password ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                        placeholder="Enter your password"
                                    />
                                    {formErrors.password && <p className="text-xs text-red-600 mt-1">{formErrors.password}</p>}
                                </div>

                                {!isLoginMode && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-2 border ${formErrors.phone ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                                            placeholder="Enter your phone number"
                                        />
                                        {formErrors.phone && <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        isLoginMode ? 'Sign In' : 'Create Account'
                                    )}
                                </button>
                            </form>

                            {/* Switch Mode */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                                    <button
                                        onClick={toggleMode}
                                        className="text-amber-600 hover:text-amber-700 font-medium"
                                    >
                                        {isLoginMode ? 'Sign up' : 'Sign in'}
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LoginModal;
