import mongoose, {Schema, SchemaTypes, model} from "mongoose";

const studentSchema = new Schema({
    fullName:{
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        maxLength: [30, "Characters length should not execude 50"],
        minLength: [6, "Characters length must be 6 or greater"]
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ["male", 'female', 'not specified'],
        default: "not specified"
    },
    // this should be a table on its owm
    nationality: {
        type: String,
        trim:true,
        lowercase: true,
        default: 'south Sudanese'
    },
    school :{
        // type: SchemaTypes.ObjectId
        type: String
    },
    year:{
        type: Number,
        length: 4
    }
}, {
    timestamps: true
})

export const Student = model("Students", studentSchema);