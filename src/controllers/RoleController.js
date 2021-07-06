const Role= require('../models/Roles');
class RoleController{
    //[GET]
    index(req,res,next){
        Role.find()
            .then((roles)=>{
                res.render('admin/layouts/roles/role', { title: 'Admin', message: 'Chào Mừng Bạn Trở Lại', roles})
                return;
            })
            .catch(next)
       
    }
}
module.exports = new RoleController();