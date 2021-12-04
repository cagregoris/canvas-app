const router = require("express").Router();
const pool = require("../db/db")
const authorize = require("../middleware/authorize");

router.post("/", async(req, res) => {
  try {

    // 1. Destructure the req.body (first name, last name, email, password)

    const { artwork_name, file_name, file_data, users_id } = req.body;

    // 2. Enter the new password inside our database

    const newPainting = await pool.query("INSERT INTO artwork (artwork_name, file_name, file_data, users_id) VALUES ($1, $2, $3, $4) RETURNING *", 
      [artwork_name, file_name, file_data, users_id]
    );

    
    return res.json(newPainting.rows[0]);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error")
  }
}) 

router.get("/", async(req, res) => {
  try {

    const gallery = await pool.query("SELECT * FROM artwork")


    return res.json(gallery.rows)
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error")
  }
})

module.exports = router;