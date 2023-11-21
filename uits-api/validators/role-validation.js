exports.globalLogger = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, '*');
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    console.log(`${req.method} is called`);
    next();
};

exports.rolevalidation = (req, res, next) => {
    if (req.method == 'DELETE') {
        req.body.role == 'admin' ? next() : res.send('You are not valid for this operation.')
    } else {
        next();
    }
};