const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "**Name is required for registering"
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "**Email is required for registering"
        ],
        unique: true,
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "**Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [
            true,
            "**Password of at least 6 characters is required for registering"
        ],
        minlength: 6
    },
}, { timestamps: true });

// UserSchema.virtual('confirmPassword')
//     .get(() => this._confirmedPassword)
//     .set(value => this._confirmedPassword = value);

// UserSchema.pre('validate', function(next) {
//     if(this.password !== this.confirmPassword) {
//         this.invalidate('confirmedPassword', 'Passwords must match confirm password')
//     }
//     next();
// });

module.exports = mongoose.model('user', UserSchema);