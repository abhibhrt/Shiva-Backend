const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name: {
        type: String,
        required: true,
        trim: true,
    },
    contact_info: {
        mobile_number: {
            type: String, 
            required: true, 
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        address: {
            type: String,
            required: true,
        },
        map:{
            type:String
        }
    },
    social_media: {
        instagram: {
            type: String,
            default: '',
        },
        facebook: {
            type: String,
            default: '',
        },
        whatsapp: {
            type: String,
            default: '',
        },
    },
    about: {
        description: {
            type: String,
            required: true,
        },
    },
}, {
    timestamps: true,
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports =  Brand;