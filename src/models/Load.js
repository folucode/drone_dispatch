const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const LoadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  droneId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Drone',
  },
});

const Load = mongoose.model('Load', LoadSchema);
module.exports = Load;
