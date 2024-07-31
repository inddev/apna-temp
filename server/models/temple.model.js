import mongoose, {Schema} from "mongoose";

const templeSchema = new Schema({
    temple_website:{
        type: String,
    },
    temple_district:{
        type: String,
    },
    temple_state:{
        type: String,
    },
    temple_url:{
        type: String,
    },
    temple_coordinates:{
        type: String,
    },
    temple_country:{
        type: String,
    },
    temple_poets:[{
        type: String,
    }],
    temple_name:{
        type: String,
    },
    temple_images:[{
        type: String,
    }],
    temple_imp_festivals:[{
        type: String,
    }],
    temple_arch_style:[{
        type: String,
    }],
    temple_locale:{
        type: String,
    },
    temple_summary:{
        type: String,
    },
}, {timestamps: true});

export const Temple = mongoose.model('Temple', templeSchema);