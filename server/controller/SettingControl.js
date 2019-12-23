const temp_setting = require('./setting');

const update_setting = (req, res) => {
    const new_setting = {
      number_of_eggs: req.body.number_of_eggs,
      sequence: req.body.sequence,
      rotation_amount: req.body.rotation_amount,
    }

    Object.assign(temp_setting, new_setting)
    res.send(req.body)
}

module.exports = {
  update_setting,
};