const mongoose = require('mongoose');
// email: "",
// username: "",
// password: "",
// confirmPassword: "",

const userShema = new mongoose.Schema({
    email: {
        type: String,
        //minLength: 10, 

        required: [true, 'address is required!'],

    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
       // minLength: 4, 
    },

    password: {
        type: String,
        required: [true, 'Password is required!'],
       // minLength: 3,
    },
 
    myPublications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Products',
    }],
 
});

//userShema.virtual('confirmPassword').set;

const User = mongoose.model('User', userShema);

module.exports = User;



  // }, {
    //     virtuals: {
    //         confirmPassword: {
    //             set(value) {
    //                 if (this.password !== value) {
    //                     throw new mongoose.Error('Password missmatch!');
    //                 }
    //             }
    //         }
    //     }

//});

//userShema.virtual('confirmPassword').set;