const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllNote);
router.get('/:id', auth, stuffCtrl.getOneNote);
router.post('/', auth, stuffCtrl.createNote);
router.put('/:id', auth, stuffCtrl.modifyNote);
router.delete('/:id', auth, stuffCtrl.deleteNote);
router.get('/userId/:id', auth, stuffCtrl.getUserNotes);


module.exports = router;

