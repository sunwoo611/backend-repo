const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '192.168.0.9',
    port: 3306,
    user: 'ksw',
    password: 'tjsdn020501!',
    database: 'train',
});

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data);
        const [result] = await conn.query(sql);
        return result;
    } finally {
        conn.release();
    }
};

module.exports = { runQuery };