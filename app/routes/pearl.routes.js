var Pearl = require('../models/pearl');

module.exports = function (app, router) {

    router.route('/pearls')
        .post(function (req, res) {

            var pearl = new Pearl();
            pearl.when = req.body.when;
            pearl.who = req.body.who;
            pearl.for = req.body.for;
            pearl.pearl = req.body.pearl;

            pearl.save(function (err) {
                if (err)
                    res.status(409).send(err);

                res.status(201).json(pearl);
            });

        })
        .get(function (req, res) {
            Pearl.find(function (err, pearls) {
                if (err)
                    res.send(err);

                res.json(pearls);
            });
        });

    router.route('/pearls/:pearlId')
        .get(function (req, res) {
            Pearl.findById(req.params.pearlId, function (err, pearl) {
                if (err)
                    res.send(err);
                res.json(pearl);
            });
        })
        .put(function (req, res) {

            Pearl.findById(req.params.pearlId, function (err, pearl) {

                if (err)
                    res.send(err);

                pearl.when = req.body.when || pearl.when;
                pearl.who = req.body.who || pearl.who;
                pearl.for = req.body.for || pearl.for;
                pearl.pearl = req.body.pearl || pearl.pearl;

                pearl.save(function (err) {
                    if (err)
                        res.send(err);

                    res.status(200).json(pearl);
                });

            });
        })
        .delete(function (req, res) {
            Pearl.remove({
                _id: req.params.pearlId
            }, function (err, pearl) {
                if (err)
                    res.send(err);

                res.status(200).json({
                    message: 'Successfully deleted'
                });
            });
        });

}
