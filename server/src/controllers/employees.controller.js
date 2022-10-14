import { pool } from "./../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee')
  res.json(rows)
}

export const getEmployee = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM employee WHERE idEmployee = ?', [req.params.id])
  // console.log(rows);

  if (rows.length <= 0) return res.status(404).json({
    message: "Employee not found"
  })
  res.json(rows[0])
}

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body
  const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name, salary])
  res.send({
    id: rows.insertId,
    name,
    salary,
  })
}

export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body
  console.log(id, name, salary);

  const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE idEmployee = ?', [name, salary, id])

  if (result.affectedRows === 0) return res.status(404).json({
    message: "Employee not found"
  })

  const [rows] = await pool.query('SELECT * FROM employee WHERE idEmployee = ?', [id])

  // console.log(result);
  res.json(rows[0])

}

export const deleteEmployee = async (req, res) => {
  const [result] = await pool.query('DELETE FROM employee WHERE idEmployee=?;', [req.params.id])
  // console.log(result);

  if (result.affectedRows <= 0) return res.status(404).json({

    message: "Employee not found"
  })
  res.sendStatus(204)
}
