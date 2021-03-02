import moment from 'moment';

export const fetchCopyrighhtDate = new Date().getFullYear();

export const formatDate = (value) => {
  const inputDateString = String(value);

  return moment(inputDateString).format('Do MMM YYYY');
};
