var Conference = require('../models/conference');


module.exports = function(router){

    // routes  to add a new user //



    router.post('/conferences',function(req,res) {

        res.send("conference created");
        var conf = new Conference();
        conf.name = req.body.name;
        conf.venue = req.body.venue;
        conf.date = req.body.date;
        conf.topic = req.body.topic;



        conf.save(function(err){
            if(err){
                res.json({ success: false,message:'conference already exists'});
            }else{
                res.json({ success:true,message:'confernce created'});
            }}
        );

    });

    router.get('/conferences',function(req,res){
        Conference.find(function (err,conferences) {
            if(err) res.send(err);
            res.json(conferences);
        })
    });

    return router ;
};