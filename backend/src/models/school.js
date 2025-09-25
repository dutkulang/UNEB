import mongoose, {Schema, model} from "mongoose";


// create / add district as a separate table


const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [5, "School name must be greater than 5 characters"],
        maxLength: [50, "School name cna be longer than 50 characters"]
    },
    centerNumber :{
        type: Number,
        required: true,
        default: 1000
    },
    // location this can be state or district
    district: {
        type: String,

    },
    category:{
        type: String,
        enum: ['UPE', 'NUPE'],
        default: "NUPE"
    },
    status:{
        type: String,
        enum: [
            "active",
            "in active",
            "banned"
        ],
        default: "in active" 
    }
}, {
    timestamps: true
})

export const School = model("School", schoolSchema);