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
    unique: true
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
});
module.exports = mongoose.model('User', UserSchema);