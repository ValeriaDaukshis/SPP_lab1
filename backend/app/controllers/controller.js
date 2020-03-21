var mongoose = require('mongoose'),
    Task = mongoose.model('tasks');

exports.getAllTasks = function(req, res){
    Task.find({},function(err, result){
        if (err) 
            res.status(500).send({'error':'An error has occurred'});
        else
            res.status(200).send(result);
    });
}

exports.getTaskById = function(req, res){
    Task.findById(req.params.id, function(err, task) {
        if (err) {
            res.status(500).send({'error':'An error has occurred'});
        } else {
            res.status(200).send(task);
        }
     });
}

exports.createTask = function(req, res){
    let json = JSON.stringify(req.body);
    let data = JSON.parse(json);
    //const note = createNewObj(req);
    const note = { 
        name: data.name, 
        deadline: data.deadline, 
        details: data.details, 
        isMade: data.isMade, 
    };

    var new_task = new Task(note);
        new_task.save(function(err, task) {
        if (err) 
          res.status(500).send({ 'error': 'An error has occurred' }); 
         else 
          res.status(201);
    });
}
    
exports.updateTask = function(req, res){

    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
        if (err) {
            res.status(500).send({'error':'An error has occurred'});
        } else {
            res.status(200).send(task);
        } 
    });
}

exports.changeTaskStatus = function(req, res){
    const statusBool = req.params.statusBool;

    req.body.status = statusBool;

    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
        if (err) {
            res.status(500).send({'error':'An error has occurred'});
        } else {
            res.status(200).send(task);
        } 
    });
}   

exports.deleteTask = function(req, res){
    Task.remove({_id: req.params.id}, function(err, task) {
        if (err) {
        res.status(500).send({'error':'An error has occurred'});
        } else {
        res.status(201);
        } 
    });
}