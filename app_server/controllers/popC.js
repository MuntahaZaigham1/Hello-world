
var mongoose = require("mongoose");
var payment = mongoose.model("payment1");
console.log('1');
module.exports.savePop=function(req,res)
{
    console.log('12');

    let newPayment=new payment({
        movie_name:req.params.movie_name,
        //cinema_name:req.params.cinema_name,
    
    
 //select_seats:req.params.select_seats,
    //seat_type:req.params.seat_type,
    //city:req.params.city

     } );
    newPayment.save((err,payment)=>{
        if(err)
        {
            res.json({msg: 'failed to select'+err});
        }
        else{
          
            res.json({msg: 'selected succesfully'});
        }
    });
    
};

module.exports.nothing = function(req, res) {
    console.log('1');
    res.render("pop", {
       
    });
};