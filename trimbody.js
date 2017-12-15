var TrimBody = function(req, res, next){
    if(req.headers['content-type'] === 'application/json'){
        traverse(req.body);
    }
    next();
}
var traverse = function (o) {
    for (var i in o) {
        if (o[i] !== null && typeof(o[i])=="object") {
            traverse(o[i]);
        }else{
            o[i] = o[i].trim();
        }
    }
}
module.exports = TrimBody;