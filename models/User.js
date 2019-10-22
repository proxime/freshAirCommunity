const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    avatar: {
        type: Number,
        required: true,
        default: 0,
    },
    likes: [
        {
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            pl: {
                miasto: {
                    type: String
                },
                stan: {
                    type: String,
                },
                panstwo: {
                    type: String
                }
            }
        }
    ]
});

module.exports = User = mongoose.model('user', UserSchema);