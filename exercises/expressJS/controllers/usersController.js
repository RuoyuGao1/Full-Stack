const users = require("../data/users.json");

let userList = [...users];

function getUsers(req, res) {
    res.json(userList);
}

function getUserById(req, res) {
    const user = userList.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
}

function createUser(req, res) {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({ message: "Please provide name, age and course" });
    }

    const newUser = {
        id: userList.length ? userList[userList.length - 1].id + 1 : 1,
        name,
        age,
        course
    };

    userList.push(newUser);
    res.status(201).json(newUser);
}

function updateUser(req, res) {
    const user = userList.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.course = req.body.course || user.course;

    res.json(user);
}

function deleteUser(req, res) {
    const user = userList.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    userList = userList.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted" });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};