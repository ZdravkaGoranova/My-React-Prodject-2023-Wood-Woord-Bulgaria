const mongoose = require('mongoose');
// title,
// description,
// picture,
// price,
// type,
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [4, 'Title should be at least 4 characters!'],
        required: true,

    },
    description: {
        type: String,
        required: true,
        minLength: [15, 'Description should be at least 15 characters!'],

    },
    picture: {
        type: String,
        required: true,
        match: [/^http[s]?:\/\//, 'Invalid URL']
        // minLength: [5, 'Picture should be start whit http or https!'],

    },
    price: {
        type: Number,
        required: true,
        min: 1,
        //  minLength: [1, 'Price should be at least 1 characters!'],

    },
    type: {
        type: String,
        enum: {
            values: ['Spoons', 'Crockery', 'Sculptures', 'Furnitures', 'Toolboxes', 'Оther'],
            message: 'Invalid type',
        },
        required: true,
    },


    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],

    //или
    // buyers: {
    //     type: [mongoose.Types.ObjectId],
    //     default: [],
    //     ref: 'User'
    // },

});


const Publication = mongoose.model('Products', bookSchema);

module.exports = Products;