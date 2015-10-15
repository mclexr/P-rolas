module.exports = function (app, router) {

    router.use(function (req, res, next) {
        res.header("Content-Type", "application/json; charset=utf-8");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

}
