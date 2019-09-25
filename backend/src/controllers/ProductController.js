const Product = require("../models/ProductModel");
const User = require("../models/UserModel");

module.exports = {
  
  async create(req, res) {
    console.log('reqparams', req.params);
    console.log('reqbody', req.body);
  
    const { id } = req.params;
    const { name, price, description, image, unities } = req.body
    const item = {
      name,
      price,
      description,
      owner: id,
      image,
      unities
    }
    Product.create(item, function(err, product) {
      if (err) {
        console.log("err", err);
      } else {  
        User.findOneAndUpdate(
          { _id: id },
          { $push: { products: product._id.toString() } },
          { lean: true, new: true },
          function(err, user) {
            if (err) {
              console.log(err);
            } else {
              console.log(user);
              return res.json(user);
            }
          }
        );
      }
    });
  },

  async buy(req, res) {
    const { id } = req.params;
    console.log(id)
    const { itemId } = req.body;
    console.log(itemId)

    Product.findById(itemId, function (err, product) {
      if(err) {
        console.log(err)
      } else {
        User.findOneAndUpdate(
          {_id: id },
          {$push: { buys: product._id.toString()}},
          { lean: true, new: true},
          function (err, user) {
            if(err) {
              console.log(err)
            } else {
              console.log(user);
              return res.json(user);
            }

          }
        )
      }
    })
  },
  
  readById(req, res) {
    const { id } = req.params;
    User.find({ _id: id }, null, { lean: true }, function(err, user) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json(user);
      }
    });
  },

  readAll(req, res) {
    Product.find({}, null, { lean: true }, function(err, products) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json(products);
      }
    });
  },

  update(req, res) {
    const { id } = req.params;
    console.log(req.body);
    Product.findByIdAndUpdate(id, req.body, { lean: true, new: true }, function(
      err,
      product
    ) {
      if (err) {
        console.log("err", err);
      } else {
        console.log(product)
        return res.json(product);
      }
    });
  },

  deleteById(req, res) {
    const { id } = req.params;
    Product.findByIdAndRemove(id, function(err, product) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json({product, success: true});
      }
    });
  },
};
