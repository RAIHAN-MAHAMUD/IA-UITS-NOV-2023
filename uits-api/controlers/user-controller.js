const users = [
    {
        id: 101,
        name: "John",
        age: 20,
        marks: {
            science: 70,
            math: 75,
        },
    },
    {
        id: 102,
        name: "Tom",
        age: 15,
        marks: {
            science: 80,
            math: 85,
        },
    },
];


exports.getUsers = (req, res) => {
    res.status(200).json({
        IsSuccess: true,
        TotalCount: users.length,
        Data: users
    });
};

exports.getUserById = (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    res.status(200).json({
        IsSuccess: true,
        TotalCount: user.length,
        Data: user
    });
};

exports.createUser = (req, res) => {
    users.push(req.body);
    res.status(200).json({
        IsSuccess: true,
        TotalCount: users.length,
        Data: req.body
    });
};

exports.updateUser = (req, res) => {
    let index = users.findIndex(user => user.name = req.params.name);
    users.splice(index, 1, req.body);
    res.send('successful');
};

exports.deleteUsers = (req, res) => {
    users = [];
    res.send('successful');
};

exports.deleteUser = (req, res) => {
    let index = users.findIndex(user => user.name = req.params.name);
    users.splice(index - 1, 1);
    res.send('successful');
};
