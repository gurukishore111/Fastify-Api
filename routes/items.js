const items = require('../Item');
const {
  getItem,
  getItems,
  addItem,
  deleteItem,
  updateItem,
} = require('../controller/item');

const ItemSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};
//options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: ItemSchema,
      },
    },
  },
  handler: getItems,
};
//options for get single item
const getItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
  handler: getItem,
};
//adding options for item
const postItemOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: ItemSchema,
    },
  },
  handler: addItem,
};

const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
  handler: updateItem,
};

function itemRoutes(app, options, done) {
  // get all items
  app.get('/items', getItemsOptions);
  // get single item
  app.get('/item/:id', getItemOptions);
  //add item
  app.post('/items', postItemOptions);
  //delete Item
  app.delete('/item/:id', deleteItemOptions);
  //update Item
  app.put('/item/:id', updateItemOptions);
  done();
}

module.exports = itemRoutes;
