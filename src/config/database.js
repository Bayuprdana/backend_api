let mysql = require('mysql2');
const { connect } = require('../routers/kategori');
 
const pool = mysql.createPool({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'pengaduan_DB'
 }).promise()
 
 async function GetJenisAll() {
  try { 
    const [result] = await pool.query(
      'SELECT * FROM kategori_pengaduan',
      []
  )
  return result;
    
  } catch (error) {
    console.log(error)
        return {
            status: "Filed"
        }
  }
 
}

module.exports = { 
  GetJenisAll
}; 