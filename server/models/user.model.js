import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    givenName:{
        type: String,
    },
    familyName:{
        type: String,
    },
    nickName:{
        type: String,
    },
    name:{
        type: String,
    },
    picture:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    emailVerified:{
        type: Boolean,
    },
    sub:{
        type: String,
    },
    gender:{
        type: String,
    },
    mobile:{
        type: String,
    }, 
    DOB:{
        type: Date,
    },
    age:{
        type: Number,
    },
    provider:{
        type: String,
    },
}, {timestamps: true});

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
    );
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    );
};

export const User = mongoose.model('User', userSchema);