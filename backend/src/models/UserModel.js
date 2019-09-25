let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: 'Email is requerid',
    unique: true
  },
  password: {
    type: Schema.Types.String,
    required: 'Password is required',
  },
  name: {
    type: Schema.Types.String,
  },
  surname: {
    type: Schema.Types.String,
  },
  profilePhoto: {
    type: Schema.Types.String,
  },
  phone: {
    type: Schema.Types.String
  },
  products: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
  },
  buys: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }]
  }
});

UserSchema.pre('findOne', function () {
  this.populate('products');
  this.populate('buys');
});

UserSchema.pre('findOneAndUpdate', function() {
  this.populate('products')
  this.populate('buys')
})

module.exports = mongoose.model('User', UserSchema);