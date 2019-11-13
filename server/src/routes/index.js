const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');


router.use('/api', apiRoutes);


// if (process.env.NODE_ENV === 'production'){
//     router.use((req, res) => {
//         res.sendFile(path.join(__dirname, ""))
//     })
// }

module.exports = router;