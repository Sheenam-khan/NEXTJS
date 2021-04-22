const { products, category } = require('../models');
const { too, ReS, ReE, TE, paginate } = require('./util');

const omit = require('lodash/omit');

export const createProduct = async param => {
  try {
    const [err, data] = await too(products.create(param));
    if (err) TE(err.message);
    if (data) return data;
  } catch (error) {
    TE(error.message);
  }
};

export const getProduct = async param => {
  let page, limit;
  page = parseInt(param['page']);
  limit = parseInt(param['limit']);
  if (!page) page = 1;
  if (!limit) limit = 20;
  const query = omit(param, ['page', 'limit']);
  try {
    const [err, allModules] = await too(
      products.findAndCountAll({
        where: Object.keys(query).length > 0 ? query : '',
        ...paginate(page, limit),
        include: [{ model: category }],
      }),
    );
    if (err) TE(err.message);
    if (!allModules) TE('SOMETHING WENT WRONG WHILE FETCHING');
    return allModules;
  } catch (error) {
    TE(error.message);
  }
};

export const updateProduct = async (param, id) => {
  try {
    const [err, data] = await too(
      products.update(param, { where: { id: id } }),
    );
    if (err) TE(err.message);
    if (!data) TE('Product ID not found');
    const [err1, data1] = await too(products.findOne({ where: { id: id } }));
    if (err1) TE(err1.message);
    if (!data1) TE('SOMETHING WENT WRONG WHILE FETCHING');
    return data1;
  } catch (error) {
    TE(error.message);
  }
};

export const deleteProduct = async id => {
  try {
    const [err, data] = await too(
      products.destroy({ where: { id: id }, include: [{ model: category }] }),
    );
    if (err) TE(err.message);
    if (!data) TE('Product ID not found');
    return data;
  } catch (error) {
    TE(error.message);
  }
};
