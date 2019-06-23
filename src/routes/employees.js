const router = require('express').Router()
const dbpool = require('../config/database')
const sworm = require('sworm')
const db = sworm.db(dbpool)

router.get('/employees', async (req, res) => {
    var emp = await db.query('select * from employees')
    res.send(emp)
})

router.get('/employees/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params)
    var emp = await db.query('select * from employees where employee_id in (@id)', { id: sworm.unescape(id) })
    res.send(emp)
})

router.get('/employees/update/:id&:salary', async (req, res) => {
    const { id, salary } = req.params
    await db.statement('update employees set salary = (@salary) where employee_id = (@id)', { id: sworm.unescape(id), salary: sworm.unescape(salary) })
    res.send('salary updated')
})

router.post('/employees/update/', async (req, res) => {
    const { id, salary } = req.body
    console.log(req.body)
    await db.statement('update employees set salary = (@salary) where employee_id = (@id)', { id: sworm.unescape(id), salary: sworm.unescape(salary) })
    res.send('salary updated')
})

module.exports = router