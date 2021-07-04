const positionRoute= require('./positions')
function route(app){
    
    app.use('/admin/position',positionRoute)
    app.get('/admin', function (req, res) {
        res.render('admin/index', { title: 'Admin', message: 'Chào Mừng Bạn Trở Lại' })
    })
}
module.exports= route;