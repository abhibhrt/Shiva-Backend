const Brand = require('../models/brandModel.js');

const createDefault = async () => {
    try {
        const existingBrand = await Brand.findOne();
        if (!existingBrand) {
            const defaultBrand = new Brand({
                brand_name: "Shiva Enterprises",
                contact_info: {
                    mobile_number: "1234567890",
                    email: "contact@shivaenterprises.com",
                    address: "Default Address, City, State",
                    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.3539980117299!2d85.37332886160154!3d26.100155559257853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11fda384f865%3A0xf67e69317940cb55!2sShiva%20Enterprises%20E-RICKSHAW%20retailers!5e1!3m2!1sen!2sin!4v1749899239985!5m2!1sen!2sin"
                },
                social_media: {
                    instagram: "",
                    facebook: "",
                    whatsapp: ""
                },
                about: {
                    description: "Welcome to Shiva Enterprises - Your trusted partner in business"
                }
            });
            await defaultBrand.save();
            console.log('✅ Default brand created successfully');
        } else{
            console.log('✅ Brand Already Exists');
        }
    } catch (error) {
        console.error('Error creating default brand:', error);
    }
};

module.exports = createDefault;
