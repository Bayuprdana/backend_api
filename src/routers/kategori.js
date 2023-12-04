const { Router } = require("express");
const { GetJenisAll } = require('../config/database') 

const router = Router()
router.get('/getallcategory', async(req, res, next) => {
    let row = await GetJenisAll()
    res.send(row)
})

module.exports = router