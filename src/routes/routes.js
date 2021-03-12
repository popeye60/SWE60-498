const rootDir = require('../model/product');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'view', 'layout.html'));
});

module.exports = router;