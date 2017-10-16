var User = require('../models/user');

module.exports = function(router){

    // routes  to add a new user //

    router.post('/users',function(req,res) {

        res.send("user created");
        var user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        user.role = req.body.role ;

        user.save(function(err){
            if(err){
                res.json({ success: false,message:'Username already exists'});
            }else{
                res.json({ success:true,message:'user created'});
            }}
        );

    });

   
    router.post('/authenticate',function(req,res){
        var str = "user" ;
        User.findOne({ username:req.body.username }).select('name username password email role ').exec(function(err,user){
            if(err) throw err ;

            if(!user){
                res.json({ success: false , message:'could not authenticate'});
            } else if(user){
                var isValidPassword = user.comparePassword(req.body.password);
                if(!isValidPassword){
                    res.json({ success: false , message:'Wrong password'});

                }else if(!Math.abs(str.localeCompare(req.body.role))){
                    res.json({ success: true , message:'User Authenticated' ,flag:'user'});
                }
                else
                    res.json({ success:true , message:'Admin authenticated' ,flag:'admin'});
            }
        })
    });

    return router ;
};