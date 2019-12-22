const config = require('../controller/SettingControl');
const report = require('../controller/ReportControl');

const express = require('express');
const router = express.Router();

router
.route('/run')
.post(report.create_report)

router
.route('/settings')
.put(config.update_setting);

module.exports = router;