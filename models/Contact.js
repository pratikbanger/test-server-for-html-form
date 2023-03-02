const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

const contactDetail = mongoose.model('contactDetail', ContactSchema);
contactDetail.createIndexes();
module.exports = contactDetail