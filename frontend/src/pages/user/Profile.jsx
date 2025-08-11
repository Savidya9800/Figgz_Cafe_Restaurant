import React, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FloatingDock } from "../../components/ui/aceternity/floating-dock";
import Footer from "../../components/Footer";
import { DatePickerDemo } from "../../components/DatePicker"; // Adjusted import path
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from "../../components/ui/shadcn/alert-dialog";

// Icons for floating dock
const HomeIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const Profile = () => {
  const { user, token, logout, login } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  // Address is an object in backend, flatten for form
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    street: user?.address?.street || "",
    city: user?.address?.city || "",
    state: user?.address?.state || "",
    zipCode: user?.address?.zipCode || "",
    country: user?.address?.country || "AUS",
    birthday: user?.birthday || "",
    favoriteFood: user?.favoriteFood || "",
    avatar: user?.avatar || ""
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    favoriteFood: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  // Auto-hide for save alert
  useEffect(() => {
    if (showSaveAlert) {
      const timer = setTimeout(() => setShowSaveAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSaveAlert]);
  // Address validation
  // Address validation (not required)
  const validateStreet = (street) => {
    if (!street) return '';
    if (street.length < 2) return 'Street must be at least 2 characters';
    return '';
  };
  const validateCity = (city) => {
    if (!city) return '';
    if (!/^[A-Za-z\s]+$/.test(city)) return 'City must contain only letters and spaces';
    return '';
  };
  const validateState = (state) => {
    if (!state) return '';
    if (!/^[A-Za-z\s]+$/.test(state)) return 'State must contain only letters and spaces';
    return '';
  };
  const validateZipCode = (zip) => {
    if (!zip) return '';
    if (!/^\d{3,10}$/.test(zip)) return 'Zip Code must be 3-10 digits';
    return '';
  };
  const validateCountry = (country) => {
    if (!country) return '';
    if (!/^[A-Za-z\s]+$/.test(country)) return 'Country must contain only letters and spaces';
    return '';
  };
  const [loading, setLoading] = useState(false);
  const [showSignOutSuccess, setShowSignOutSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [signOutDialogOpen, setSignOutDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Fetch user profile from backend
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success && data.data) {
          setFormData({
            name: data.data.name || "",
            email: data.data.email || "",
            phone: data.data.phone || "",
            street: data.data.address?.street || "",
            city: data.data.address?.city || "",
            state: data.data.address?.state || "",
            zipCode: data.data.address?.zipCode || "",
            country: (data.data.address?.country && data.data.address?.country !== 'USA') ? data.data.address.country : 'AUS',
            birthday: data.data.birthday || "",
            favoriteFood: data.data.favoriteFood || "",
            avatar: data.data.avatar || ""
          });
          login(data.data, token); // update context
        }
      } catch (err) {
        // handle error
      }
      setLoading(false);
    };
    if (token) fetchProfile();
  }, [token]);

  // Validation functions
  const validateName = (name) => {
    if (!name) return 'Name is required';
    if (!/^[A-Za-z\s]{2,}$/.test(name)) return 'Enter a valid name (letters only, min 2 chars)';
    return '';
  };
  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address';
    return '';
  };
  const validatePhone = (phone) => {
    if (!phone) return '';
    if (!/^\d+$/.test(phone)) return 'Phone number must contain only numbers';
    return '';
  };
  const validateBirthday = (birthday) => {
    if (!birthday) return '';
    const today = new Date().toISOString().split('T')[0];
    if (birthday > today) return 'Birthday cannot be in the future';
    return '';
  };
  const validateFavoriteFood = (food) => {
    if (!food) return '';
    if (!/^[A-Za-z\s,]+$/.test(food)) return 'Favorite food must be a string (letters, spaces, commas)';
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
      [name]: newValue,
    });

    // Real-time validation
    let errorMsg = '';
    if (name === 'name') errorMsg = validateName(newValue);
    if (name === 'email') errorMsg = validateEmail(newValue);
    if (name === 'phone') errorMsg = validatePhone(newValue);
    if (name === 'birthday') errorMsg = validateBirthday(newValue);
    if (name === 'favoriteFood') errorMsg = validateFavoriteFood(newValue);
    if (name === 'street') errorMsg = validateStreet(newValue);
    if (name === 'city') errorMsg = validateCity(newValue);
    if (name === 'state') errorMsg = validateState(newValue);
    if (name === 'zipCode') errorMsg = validateZipCode(newValue);
    if (name === 'country') errorMsg = validateCountry(newValue);
    setFormErrors({
      ...formErrors,
      [name]: errorMsg
    });
  };

  const handleSave = async () => {
    // Validate all fields before save
    let errors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      birthday: validateBirthday(formData.birthday),
      favoriteFood: validateFavoriteFood(formData.favoriteFood),
      street: validateStreet(formData.street),
      city: validateCity(formData.city),
      state: validateState(formData.state),
      zipCode: validateZipCode(formData.zipCode),
      country: validateCountry(formData.country)
    };
    setFormErrors(errors);
    const hasError = Object.values(errors).some((msg) => msg);
    if (hasError) return;

    setLoading(true);
    try {
      // Ensure country is always 'AUS' if empty or not set
      const countryValue = formData.country && formData.country.trim() ? formData.country : 'AUS';
      // Reconstruct address object for backend
      const payload = {
        ...formData,
        country: countryValue,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: countryValue
        }
      };
      const res = await fetch(`${API_URL}/api/auth/me`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success && data.data) {
        setFormData({
          name: data.data.name || "",
          email: data.data.email || "",
          phone: data.data.phone || "",
          street: data.data.address?.street || "",
          city: data.data.address?.city || "",
          state: data.data.address?.state || "",
          zipCode: data.data.address?.zipCode || "",
          country: (data.data.address?.country && data.data.address?.country !== 'USA') ? data.data.address.country : 'AUS',
          birthday: data.data.birthday || "",
          favoriteFood: data.data.favoriteFood || "",
          avatar: data.data.avatar || ""
        });
        login(data.data, token); // update context
  setShowSaveAlert(true);
      }
      setIsEditing(false);
    } catch (err) {
      // handle error
    }
    setLoading(false);
  };

  const handleCancel = () => {
    // Reset to last saved user data
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      street: user?.address?.street || "",
      city: user?.address?.city || "",
      state: user?.address?.state || "",
      zipCode: user?.address?.zipCode || "",
      country: (user?.address?.country && user?.address?.country !== 'USA') ? user.address.country : 'AUS',
      birthday: user?.birthday || "",
      favoriteFood: user?.favoriteFood || "",
      avatar: user?.avatar || ""
    });
    setIsEditing(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const floatingDockItems = [
    { title: "Home", icon: <HomeIcon />, href: "/" },
    { title: "Profile", icon: <ProfileIcon />, href: "/profile" },
    { title: "My Orders", icon: <OrdersIcon />, href: "/my-orders" },
    { title: "Menu", icon: <MenuIcon />, href: "/order" },
    { title: "Contact", icon: <ContactIcon />, href: "/contact" },
  ];

  // Auto-hide for save alert
  useEffect(() => {
    if (showSaveAlert) {
      const timer = setTimeout(() => setShowSaveAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showSaveAlert]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {/* MUI Snackbar Alert */}
        <AnimatePresence>
          {showSaveAlert && (
            <motion.div
              className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 border border-green-600 bg-white text-green-800 px-6 py-3 rounded-lg shadow-lg z-50"
              style={{ minWidth: 320 }}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28, duration: 0.5 }}
            >
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Profile changes saved successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Logo - About Us Page Position */}
        <div className="absolute top-5 left-10 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-20">
              <div className="flex-shrink-0">
                <Link to="/" className="block cursor-pointer">
                  <img
                    src="/src/assets/logo2.png"
                    alt="Figgz Cafe"
                    className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-20"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="relative inline-block mt-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-[#CB3A1A] to-[#CB3A1A]/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#111111] mb-2">
              Welcome, {user?.name || "Food Lover"}!
            </h1>
            <p className="text-lg text-[#74787C]">
              Manage your profile and preferences
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#CB3A1A] to-[#CB3A1A]/80 px-8 py-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Profile Information
                </h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#111111] mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
                    Personal Details
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#CB3A1A] focus:border-transparent transition-all`}
                        />
                        {formErrors.name && <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {formData.name || "Not provided"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                        />
                        {formErrors.email && <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {formData.email || "Not provided"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                          placeholder="Enter your phone number"
                        />
                        {formErrors.phone && <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {formData.phone || "Not provided"}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Additional Info
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 mb-2 border ${formErrors.street ? 'border-red-400' : 'border-gray-300'} rounded-lg`}
                          placeholder="Street"
                        />
                        {formErrors.street && <p className="text-xs text-red-600 mb-2">{formErrors.street}</p>}
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 mb-2 border ${formErrors.city ? 'border-red-400' : 'border-gray-300'} rounded-lg`}
                          placeholder="City"
                        />
                        {formErrors.city && <p className="text-xs text-red-600 mb-2">{formErrors.city}</p>}
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 mb-2 border ${formErrors.state ? 'border-red-400' : 'border-gray-300'} rounded-lg`}
                          placeholder="State"
                        />
                        {formErrors.state && <p className="text-xs text-red-600 mb-2">{formErrors.state}</p>}
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 mb-2 border ${formErrors.zipCode ? 'border-red-400' : 'border-gray-300'} rounded-lg`}
                          placeholder="Zip Code"
                        />
                        {formErrors.zipCode && <p className="text-xs text-red-600 mb-2">{formErrors.zipCode}</p>}
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border ${formErrors.country ? 'border-red-400' : 'border-gray-300'} rounded-lg`}
                          placeholder="Country"
                        />
                        {formErrors.country && <p className="text-xs text-red-600 mb-2">{formErrors.country}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {[
                          formData.street,
                          formData.city,
                          formData.state,
                          formData.zipCode,
                          formData.country
                        ].filter(Boolean).join(', ') || "Not provided"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Birthday
                    </label>
                    {isEditing ? (
                      <>
                        <DatePickerDemo
                          value={formData.birthday}
                          onChange={(date) => {
                            handleInputChange({
                              target: {
                                name: "birthday",
                                value: date,
                              },
                            });
                          }}
                          error={formErrors.birthday}
                          onlyPast={true}
                        />
                        {formErrors.birthday && <p className="text-xs text-red-600 mt-1">{formErrors.birthday}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {formData.birthday
                          ? new Date(formData.birthday).toLocaleDateString()
                          : "Not provided"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Favorite Food
                    </label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="favoriteFood"
                          value={formData.favoriteFood}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${formErrors.favoriteFood ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                          placeholder="What's your favorite dish?"
                        />
                        {formErrors.favoriteFood && <p className="text-xs text-red-600 mt-1">{formErrors.favoriteFood}</p>}
                      </>
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-800">
                        {formData.favoriteFood || "Not provided"}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="mt-8 flex gap-4 justify-end">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#CB3A1A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#CB3A1A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">12</h3>
              <p className="text-[#74787C] mb-3">Total Orders</p>
              <button
                onClick={() => (window.location.href = "/my-orders")}
                className="text-[#CB3A1A] text-sm font-medium hover:underline"
              >
                View Orders →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">8</h3>
              <p className="text-[#74787C] mb-3">Favorite Items</p>
              <button
                onClick={() => (window.location.href = "/order")}
                className="text-[#CB3A1A] text-sm font-medium hover:underline"
              >
                Order Now →
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">$245</h3>
              <p className="text-[#74787C] mb-3">Total Spent</p>
              <button
                onClick={() => (window.location.href = "/my-orders")}
                className="text-[#CB3A1A] text-sm font-medium hover:underline"
              >
                View History →
              </button>
            </div>
          </motion.div>

          {/* Logout Button */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <AlertDialog open={signOutDialogOpen} onOpenChange={setSignOutDialogOpen}>
              <AlertDialogTrigger asChild>
                <button
                  className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 shadow-lg mr-4"
                >
                  Sign Out
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sign Out</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to sign out?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <button
                      onClick={async () => {
                        try {
                          await fetch(`${API_URL}/api/auth/logout`, {
                            headers: { 'Authorization': `Bearer ${token}` }
                          });
                        } catch (e) {}
                        logout();
                        setSignOutDialogOpen(false);
                        setShowSignOutSuccess(true);
                        setTimeout(() => {
                          setShowSignOutSuccess(false);
                          navigate("/");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 1200);
                      }}
                    >
                      Yes, Sign Out
                    </button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
              <AlertDialogTrigger asChild>
                <button className="px-8 py-3 bg-gray-200 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-200 shadow-lg">
                  Delete Account
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Account</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <button
                      onClick={async () => {
                        try {
                          await fetch(`${API_URL}/api/auth/me`, {
                            method: 'DELETE',
                            headers: { 'Authorization': `Bearer ${token}` }
                          });
                        } catch (e) {}
                        logout();
                        setDeleteDialogOpen(false);
                        setShowDeleteSuccess(true);
                        setTimeout(() => {
                          setShowDeleteSuccess(false);
                          navigate("/");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 1200);
                      }}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Yes, Delete
                    </button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </motion.div>
          {showSignOutSuccess && (
            <motion.div
              className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 border border-green-600 bg-white text-green-800 px-6 py-3 rounded-lg shadow-lg z-50"
              style={{ minWidth: 320 }}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28, duration: 0.5 }}
            >
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Signed out successfully!</span>
            </motion.div>
          )}
          {showDeleteSuccess && (
            <motion.div
              className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 border border-red-600 bg-white text-red-700 px-6 py-3 rounded-lg shadow-lg z-50"
              style={{ minWidth: 320 }}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28, duration: 0.5 }}
            >
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Account deleted successfully!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Floating Dock */}
        <FloatingDock
          items={floatingDockItems}
          desktopClassName="fixed right-8 top-1/2 transform -translate-y-1/2 flex-col h-auto w-16 py-4"
          mobileClassName="fixed bottom-8 right-8"
        />

        <Footer />
      </div>
    </>
  );
};

export default Profile;
