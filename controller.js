Model = require('./model');

exports.index = function(req, res)
{
    Model.get(function(err,contact) {
        if(err)
        {
            res.json({
                status: "error",
                message: err
            });
        }
        else
        {
            res.json({
                status: "Success",
                message: "Contacts retrieved successfully",
                data: contact
            });
        }
    });
};

exports.new = function(req, res) {
    console.log(req.body);
    var contact = new Model();
    contact.name=req.body.name ? req.body.name : contact.name;
    contact.gender=req.body.gender;
    contact.email=req.body.email;
    contact.phone=req.body.phone;
    
    contact.save(function(err){
        if(err)
        {
            res.json(err);
        }
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

exports.view = function(req, res){
    Model.findById(req.params.contact_id, function (err, contact) {
        if(err) 
        {
            res.send(err);
        }
        else{
            res.json({
                message: 'Contact details loading..',
                data: contact
            });
        }
    });
};

exports.update = function(req, res)
{
    Model.findById(req.params.contact_id, function(err, contact)
    {
        if(err)
        {
            res.send(err);
        }
        
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.phone = req.body.phone;
        contact.email = req.body.email;

        contact.save(function(err){
            if(err)
            {
                res.json(err);
            }
            res.json({
                mesage: 'Contact details updates',
                data: contact
            });
        });
    });
};

exports.delete = function(req, res) {
    Model.remove({
        _id: req.params.contact_id
    }, function(err, contact) {
        if(err)
        {
            res.send(err);
        }
        else{
            res.json({
                status: "success",
                message: 'Contact deleted',
                deletedMessage: contact
            });
        }
    });
};
