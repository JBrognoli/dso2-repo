const User = require("../models/UserModel");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const emailAlreadyUsed = await User.findOne({ email: email });
    if (emailAlreadyUsed) {
      return res.json({ userExists: true, success: true });
    }

    User.create({ email, password }, function(err, user) {
      if (err) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  },

  readById(req, res) {
    const { id } = req.params;
    User.find({ _id: id }, null, { lean: true }, function(err, user) {
      if (err) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  },

  readAll(req, res) {
    User.find({}, null, { lean: true }, function(err, user) {
      if (err) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
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
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  },

  deleteById(req, res) {
    const { id } = req.params;

    User.findByIdAndRemove(id, function(err, user) {
      if (err) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  },

  login(req, res) {
    const { email, password } = req.body;
    console.log("fodase", req.body);
    User.findOne({ email: email, password: password }, function(err, user) {
      if (err && !user) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  },

  logout(req, res) {
    const id = req.params;

    User.find(id, {}, function(err, user) {
      if (err) {
        return res.json({ success: false });
      } else {
        return res.json({ user, success: true });
      }
    });
  }
};
