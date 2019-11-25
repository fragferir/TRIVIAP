const mongoose = require('mongoose');
// modelo de la respuesta con schema
const AnswerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isRight: { type: Boolean, default: false },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
});
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
