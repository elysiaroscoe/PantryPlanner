const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} must be present"],
            minlength: [3, "{PATH} must be at least 3 characters"],
            maxlength: [255, "{PATH} must be no more than 255 characters"],
        },
        email: {
            type: String,
            required: [true, "{PATH} must be present"],
            minlength: [6, "{PATH} must be at least 6 characters"],
            maxlength: [255, "{PATH} must be no more than 255 characters"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }
        },
        //will validate confirm password client side
        password: {
            type: String,
            required: [true, "{PATH} must be present"],
            minlength: [8, "{PATH} must be at least 8 characters"],
            maxlength: [1024, "{PATH} must be no more than 1024 characters"],
        },
    },
    { timestamps: true }
)


//bcrypt with 10 salt rounds
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});


const User = mongoose.model('User', UserSchema);
module.exports = User;