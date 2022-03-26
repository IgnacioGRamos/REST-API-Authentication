import { model, Schema, Document} from 'mongoose'
import bcrypt from 'bcrypt'


export interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt()
})