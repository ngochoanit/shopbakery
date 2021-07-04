const Position= require('../models/Positions');
console.log(Position)
class PositionContainer{
    //[GET]
    index(req,res){
        Position.find({},(err,positions)=>{
            if(!err){
                res.render('admin/layouts/position/position', { title: 'Admin', message: 'Chào Mừng Bạn Trở Lại', positions: positions})
                return;
            }
            else{
                res.status(400).send('Bad Request')
            }
        })
       
    }
}
module.exports = new PositionContainer();