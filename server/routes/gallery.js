const router = require("express").Router();
const pool = require("../db/db")
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');


// router.use(fileUpload());

// router.post("/", async(req, res) => {
//   try {
//     const {name, data} = req.files.pic;

//     await pool.query("INSERT INTO artwork (artwork_name, file_data, users_id) VALUES ($1, $2, $3) RETURNING *", 
//       [artwork_name, file_data, users_id]
//     );

//     res.sendStatus(200)

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json("Server Error")
//   }
// })

router.post("/", async(req, res) => {
  try {

    // 1. Destructure the req.body (first name, last name, email, password)

    const { artwork_name, file_data, users_id } = req.body;

    // 2. Enter the new password inside our database

    await pool.query("INSERT INTO artwork (artwork_name, file_data, users_id) VALUES ($1, $2, $3) RETURNING *", 
      [artwork_name, file_data, users_id]
    );

    
    res.sendStatus(200)
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error")
  }
}) 

router.get("/img/:id", async(req, res) => {
  try {
    const id = req.params.id
    console.log(id)
    const img = await pool.query("SELECT * FROM artwork WHERE artwork_id = $1", [id])

    if (img) {
      return res.json(img.rows[0].file_data)
      
    } else {
      res.send("No image with that id")
    }
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error")
  }
})

// router.get("/", async(req, res) => {
//   try {

//     const gallery = await pool.query("SELECT * FROM artwork")


//     return res.json(gallery.rows)
    
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json("Server Error")
//   }
// })

module.exports = router;