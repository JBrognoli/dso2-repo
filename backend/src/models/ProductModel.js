let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: "Name is required"
  },
  price: {
    type: Schema.Types.String,
    required: "Order is required",
  },
  description: {
    type: Schema.Types.String
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: 'Owner is required',
    ref: "User"
  },
  publishedAt: {
    type: Schema.Types.String
  },
  image: {
    type: Schema.Types.String
  },
  unities: {
    type: Schema.Types.String
  }
});

ProductSchema.pre('find', function() {
  this.populate('owner');
})

module.exports = mongoose.model("Product", ProductSchema);
