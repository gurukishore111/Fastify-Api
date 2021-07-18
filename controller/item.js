let items = require('../Item');
const { v4: uuidv4 } = require('uuid');

const getItems = (req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  let item = items.find((item) => item.id === id);
  reply.send(item);
};

const addItem = (req, reply) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };
  //   items = [...items, item];
  items.push(item);
  reply.code(201).send(item);
};

const updateItem = (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;

  items = items.map((item) => {
    return item.id === id ? { id, name } : item;
  });
  let item = items.find((item) => item.id === id);
  reply.send(item);
};

const deleteItem = (req, reply) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== id);
  reply.send({
    message: `Item ${id} deleted successfully`,
  });
};

module.exports = {
  getItem,
  getItems,
  addItem,
  deleteItem,
  updateItem,
};
