'use strict';

exports = module.exports = function(app, mongoose) {
  var postSchema = new mongoose.Schema({
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    userCreated: { //記錄使用者資訊 01092016
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' },
      time: { type: Date, default: Date.now }
    }
  });
  app.db.model('post', noteSchema);
};
