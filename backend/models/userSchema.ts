import { Schema, model, connect } from 'mongoose';
import { run } from 'node:test';

interface userSchema {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    avatar: string;
    domain: string;
    available: boolean;
}

const UserSchema = new Schema<userSchema>({
    id: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
});

const User = model<userSchema>('User', UserSchema);

export default User;