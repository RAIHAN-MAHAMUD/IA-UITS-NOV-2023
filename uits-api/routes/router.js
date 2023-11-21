const { getUsers, getUserById, createUser, updateUser, deleteUser, deleteUsers } = require('../controlers/user-controller');

const router = require('express').Router();

// router.get('/users', getUsers)
// router.post('/users', createUser)
// router.delete('/users', deleteUsers)
router.route('/users').get(getUsers).post(createUser).delete(deleteUsers);

// router.get('/user/:id', getUserById)
// router.put('/user/:id', updateUser)
// router.delete('/user/:id', deleteUser)
router.route('/user/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;