const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const toSnakeCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();

const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const truncate = (str, length) => (str.length > length ? `${str.substring(0, length)}...` : str);

const isEmptyString = (str) => !str || str.trim().length === 0;

module.exports = { capitalize, toSnakeCase, toKebabCase, truncate, isEmptyString };
