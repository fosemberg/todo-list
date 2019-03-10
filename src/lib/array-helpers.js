import {SORTED_BY} from '../constants';

export const sortBy = (type, field, isReverse = false) => {
  switch (type) {
    case "date" :
      return (a, b) => new Date(b[field]) - new Date(a[field]);
    case "string" :
      return (a, b) => (
        isReverse
          ? a[field] > b[field]
          : a[field] < b[field]
      ) ? -1 : 1;
    default:
      return (a, b) => b[field] - a[field];
  }
}

export const sortFunction = sort =>
  (sort === SORTED_BY.TITLE)
    ? sortBy("string", SORTED_BY.TITLE)
    : (sort === SORTED_BY.DESCRIPTION)
      ? sortBy("string", SORTED_BY.DESCRIPTION)
      : sortBy("date", "timestamp")