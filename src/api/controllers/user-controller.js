import {addUser, findUserById, listAllUsers, putUserById, deleteUserById} from "../models/user-model.js";

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
  const result = addUser(req.body);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putUser = (req, res) => {
    // not implemented in this example, this is future homework
    const updateUser = putUserById(req.params.id, req.body);
    if (updateUser) {
      res.sendStatus(200).json({message: 'User item updated.'})
    } else {
      res.sendStatus(404);
    }
  };

const deleteUser = (req, res) => {
    // not implemented in this example, this is future homework
    const deleteUser = deleteUserById(req.params.id);
    if (deleteUser) {
      res.sendStatus(200).json({message: 'User item deleted.'});
    } else {
      res.sendStatus(404);
    }
  };

export {getUser, getUserById, postUser, putUser, deleteUser};