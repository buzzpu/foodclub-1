'use strict';

exports.readPost = function(req, res, next) {
};

exports.createPost = function(req, res, next) {
    var workflow = req.app.utility.workflow(req, res);
    var title = req.query.title;
    var message = req.query.message;
    
    workflow.on('validate', function(){
       workflow.outcom.data = {
           name: 'buzz'
       }
    });
    workflow.emit('reponse');
};

exports.readPostById = function(req, res, next) {

};

exports.readPostBySubject = function(req, res, next) {

};

exports.updatePost = function(req, res, next) {

}

exports.publish = function(req, res, next) {

}

exports.unpublish = function(req, res, next) {

}
