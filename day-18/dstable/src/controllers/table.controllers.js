const { getDB } = require('../models/table.models');
const { ObjectId } = require('mongodb');

async function addDepartment(req, res) {
  const db = getDB();
  const { dname } = req.body;
  
  // Logging the received body
  console.log("Request Body:", req.body);

  if (!dname) {
    return res.status(400).json({ error: "dname is required" });
  }
  try {
    const result = await db.collection('department').insertOne({ dname });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addUser(req, res) {
  const db = getDB();
  const { username, deptid } = req.body;
  try {
    const department = await db.collection('department').findOne({ _id: new ObjectId(deptid) });
    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }
    const result = await db.collection('user').insertOne({ username, deptid: department._id });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUsersWithDepartments(req, res) {
  const db = getDB();
  try {
    const result = await db.collection('user').aggregate([
      {
        $lookup: {
          from: 'department',
          localField: 'deptid',
          foreignField: '_id',
          as: 'departmentDetails'
        }
      }
    ]).toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { addDepartment, addUser, getUsersWithDepartments };
