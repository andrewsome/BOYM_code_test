const temp_setting = require('./setting');

const create_report = (req, res) => {
  if (!temp_setting) {
    res.status(400).end();
    return;
  }
  const report = temp_setting
  res.send(report);
}

module.exports = {
  create_report,
};



  