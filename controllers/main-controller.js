const db = require('../db');

const viewAllProducts = async (req, res) => {
    try {
        const sql = `SELECT p.created_at, p.delivery,p.description ,p.created_at, p.id,p.img_url , 
        p.name product,p.price ,p.quantity ,p.img_url , 
        c.name category,
        u.user_name seller, u.company_name , u.adress , u.logo_url , u.email , u.phone
        FROM product p 
        join category c ON p.category_id=c.id
        join users u ON p.seller_id=u.id`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};


const productDetails = async (req, res) => {
    try {
        const sql = `
        SELECT p.created_at, p.delivery,p.description ,p.created_at, p.id,p.img_url ,p.name product,p.price ,p.quantity ,p.img_url , p.newprice,
        c.name category,
        u.user_name seller, u.company_name , u.adress , u.logo_url , u.email , u.phone
        FROM product p
        join category c ON p.category_id=c.id
        join users u ON p.seller_id=u.id
        Having p.id='${req.params.id}'`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            results[0].newprice = results[0].price * 0.85
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const viewCategories = async (req, res) => {
    try {
        const sql = `SELECT * FROM category`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const viewProducts = async (req, res) => {
    try {
        const sql = `SELECT * FROM product WHERE product.category_id = "${req.params.i}"`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const searchProducts = async (req, res) => {
    try {
        const sql = `SELECT * FROM product WHERE name LIKE '%${req.params.i}%'`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const discounted = async (req, res) => {
    try {
        const sql = `SELECT * FROM product WHERE newprice IS NOT NULL`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const newProducts = async (req, res) => {
    try {
        const sql = `SELECT * FROM product WHERE created_at > '${req.params.i}' `;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

const freeDelivery = async (req, res) => {
    try {
        const sql = `SELECT * FROM product WHERE delivery=0`;
        const query = db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    viewAllProducts,
    productDetails,
    viewCategories,
    viewProducts,
    searchProducts,
    discounted,
    newProducts,
    freeDelivery,
}

