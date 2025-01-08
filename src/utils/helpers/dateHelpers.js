const moment = require('moment');

const formatDate = (date, format = 'YYYY-MM-DD') => moment(date).format(format);

const isPastDate = (date) => moment(date).isBefore(moment());

const addDays = (date, days) => moment(date).add(days, 'days').toDate();

const timeAgo = (date) => moment(date).fromNow();

module.exports = { formatDate, isPastDate, addDays, timeAgo };
