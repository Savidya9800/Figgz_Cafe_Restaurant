const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: function() {
            return !this.googleId; // Password not required if user signs in with Google
        },
        minlength: 6,
        select: false
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true // Allows multiple documents without googleId
    },
    avatar: {
        type: String // Store Google profile picture URL
    },
    role: {
        type: String,
        enum: ['customer', 'staff', 'admin'],
        default: 'customer'
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be longer than 20 characters']
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: {
            type: String,
            default: 'AUS'
        }
    },
    birthday: {
        type: String
    },
    favoriteFood: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true
});

// Encrypt password using bcrypt
userSchema.pre('save', async function(next) {
    // Only hash password if it exists and is modified
    if (!this.isModified('password') || !this.password) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function(enteredPassword) {
    if (!this.password) return false; // No password set (Google user)
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
