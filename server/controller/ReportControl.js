const tempSetting = require('./setting');

const create_report = (req, res) => {
  if (!tempSetting) {
    res.status(400).end();
    return;
  }
  const report = tempSetting
  res.send(report);
}

module.exports = {
  create_report,
};



  