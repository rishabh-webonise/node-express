const db = require('../services/db');

class Emp {
  constructor(emp_no, first_name, last_name, gender) {
    this.emp_no = emp_no;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
  }

  static getAll() {
    let sql = 'SELECT * FROM employees LIMIT 100;';
    return db.execute(sql);
  }

  static getByEmpno(emp_no) {
    let sql = `SELECT * FROM employees WHERE emp_no = ${emp_no};`;
    return db.execute(sql);
  }
}

module.exports = Emp;
