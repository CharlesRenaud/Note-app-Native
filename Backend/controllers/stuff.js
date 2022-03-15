// in controllers/stuff.js
const Note = require('../models/note');

exports.createNote = (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    text: req.body.text,
    quote: req.body.quote,
    userId: req.body.userId,
    rate: req.body.rate
  });
  note.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneNote = (req, res, next) => {
  Note.findOne({
    _id: req.params.id
  }).then(
    (note) => {
      res.status(200).json(note);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyNote = (req, res, next) => {
  const note = new Note({
    _id: req.params.id,
    title: req.body.title,
    text: req.body.text,
    quote: req.body.quote,
    rate: req.body.rate,
    userId: req.body.userId

  });
  Note.updateOne({_id: req.params.id}, note).then(
    () => {
      res.status(201).json({
        message: 'Note updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteNote = (req, res, next) => {
    Note.findOne({_id: req.params.id}).then(
        (note) => {
            if (!note) {
                res.status(404).json({
                    error: new Error('No such Note')
                });
            }
            if(note.userId !== req.auth.userId) {
                req.status(401).json({
                    error: new Error('Requete Pas Autorisé')
                });
            }
            Note.deleteOne({_id: req.params.id}).then(
                () => {
                res.status(200).json({
                    message: 'Note Deleted!'
                });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                    error: error
                });
                }
            );
        }
    )
};

exports.getAllNote = (req, res, next) => {
  Note.find().then(
    (notes) => {
      res.status(200).json(notes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getUserNotes = (req, res, next) => {
  Note.find({"userId":req.params.id }).then(
    (notes) => {
      res.status(200).json(notes);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};