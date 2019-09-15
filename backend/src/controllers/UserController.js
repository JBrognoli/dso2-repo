const User = require("../models/UserModel");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const emailAlreadyUsed = await User.findOne({ email: email });

    if (emailAlreadyUsed) {
      return res.json(userExists);
    }

    const user = await User.create({ email, password });
;
    return res.json(user);
  },

  async readById(req, res) {
    const { id } = req.params;

    const user = await User.find({_id: id}, null, {lean: true}, function(err, user) {
      return res.json(user);
    })
    return res.json(user);
  },

  async readAll(req, res) {
    const users = await User.find({}, null, { lean: true });
    return res.json(users);
  },

  async update(req, res) {
    const { id } = req.params;
    const updatedUser = User.findByIdAndUpdate(id, req.body, {lean: true, new: true}, function(err, user) {
      return res.json(updatedUser)
    })
    return res.json(updatedUser)
  }
};
