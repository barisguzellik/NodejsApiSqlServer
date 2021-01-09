var express = require('express');
var router = express.Router();
const { poolPromise, sql } = require('../db');


router.get('/product', async (req, res) => {
    try {
        const pool = await poolPromise;
        const queryResult = await pool.request()
            .query('SELECT * FROM [Product]');

        res.send({ success: true, result: queryResult.recordsets[0] });
    }
    catch (err) {
        res.status(500);
        res.send(JSON.stringify({ success: false, message: err.message }));
    }
})

module.exports = router;