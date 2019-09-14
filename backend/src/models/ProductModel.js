import User from './UserModel'

let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: 'Name is required',
  },
  price: {
    type: Schema.Types.Number,
    required: 'Order is required',
    unique: true
  },
  description: {
      type: Schema.Types.String,
  },
  owner: {
      type: Schema.Types.ObjectId,
      ref: User
  },
  publishedAt: {
      type: Schema.Types.String
  },
  image: {
      type: Schema.Types.String
  }
});
module.exports = mongoose.model('Product', ProdutSchema);