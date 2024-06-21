const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes'); 

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);

module.exports = router