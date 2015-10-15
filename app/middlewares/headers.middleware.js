module.exports = function (app, router) {

    router.use(function (req, res, next) {
        res.header("Content-Type", "application/json; charset=utf-8");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, X-authentication, X-client");
        next();
    });

}
