const User=require ('../models/Users')

class EmpolyeeController{
    // [GET]
    index(req,res,next){
        User.find({type:true})
            .then(empolyees =>{
               res.render('admin/layouts/employees/employee',{title:'ấ',message:'ádas',empolyees})
            })
            .catch(next)
    }
}
module.exports= new EmpolyeeController();