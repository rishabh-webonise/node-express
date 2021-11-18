const Emp = require('../models/Emp');

exports.getAllEmployees = async (req, res, next) => {
  try {
    const [employees, _] = await Emp.getAll();
    res.json(employees);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getEmployeeByEmpno = async (req, res, next) => {
  try {
    const [employee, _] = await Emp.getByEmpno(req.params.emp_no);
    res.json(employee);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
