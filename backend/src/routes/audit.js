const express = require('express');
const router = express.Router();

let auditLogs = [];

router.get('/', (req, res) => {
  try {
    res.json({ success: true, data: auditLogs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch audit logs' });
  }
});

router.post('/', (req, res) => {
  try {
    const { action, entity_type, entity_id, changes } = req.body;
    const newLog = {
      id: auditLogs.length + 1,
      user_id: 1,
      action,
      entity_type,
      entity_id,
      changes,
      timestamp: new Date()
    };
    auditLogs.push(newLog);
    res.status(201).json({ success: true, data: newLog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create audit log' });
  }
});

module.exports = router;
