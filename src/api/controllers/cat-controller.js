import {addCat, findCatById, listAllCats, deleteCatById, putCatById} from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New cat added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  // not implemented in this example, this is future homework
  const updateCat = putCatById(req.params.id, req.body);
  if (updateCat) {
    res.status(200).json({message: 'Cat item updated.', updateCat})
  } else {
    res.sendStatus(404);
  }
};

const deleteCat = (req, res) => {
  // not implemented in this example, this is future homework
  const deleteCat = deleteCatById(req.params.id);
  if (deleteCat) {
    res.status(200).json({message: 'Cat item deleted.'});
  } else {
    res.sendStatus(404);
  }
};

export {getCat, getCatById, postCat, putCat, deleteCat};