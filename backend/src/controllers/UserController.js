const User = require("../models/UserModel");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const emailAlreadyUsed = await User.findOne({ email: email });
    if (emailAlreadyUsed) {
      return res.json(userExists);
    }

    User.create({ email, password }, function(err, user) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json(user);
      }
    });
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
    User.find({}, null, { lean: true }, function(err, user) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json(user);
      }
    });
  },

  update(req, res) {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { lean: true, new: true }, function(
      err,
      user
    ) {
      if (err) {
        console.log("err", err);
      } else {
        return res.json(user);
      }
    });
  },

  deleteById(req, res) {
    const { id } = req.params;

    User.findByIdAndRemove(id, function(err, user) {
      if(err) {
        console.log('err', err);
      } else {
        return res.json(user);
      }
    })
  }
};
