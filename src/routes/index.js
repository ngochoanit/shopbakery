const roleController= require('./roles')
const employeeRoute= require('./employees')
function route(app){
    
    app.use('/admin/position',roleController)
    app.use('/admin/employee',employeeRoute)
    app.get('/admin', function (req, res) {
        res.render('admin/index', { title: 'Admin', message: 'Chào Mừng Bạn Trở Lại' })
    })
}
module.exports= route;