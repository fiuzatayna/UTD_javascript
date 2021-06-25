let express = require("express");
let router = express.Router();

const guideSeqs = require("../controllers/controller.js");

router.post('/api/guideSeq', guideSeqs.createGuideSeq);
router.get('/api/guideSeq/:id', guideSeqs.getGuideSeq);
router.get('/api/guideSeqs', guideSeqs.guideSeqs);
router.put('/api/guideSeq', guideSeqs.updateGuideSeq);
router.delete('/api/guideSeq/:id', guideSeqs.deleteGuideSeq);

module.exports = router;

