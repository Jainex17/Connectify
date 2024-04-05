import { Schema, model, connect } from 'mongoose';

interface teamSchema {
    id: number;
    name: string;
    description: string;
    members: number[];
}

const TeamSchema = new Schema<teamSchema>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: [Number],
        required: true
    }
});

const Team = model<teamSchema>('Team', TeamSchema);

export default Team;