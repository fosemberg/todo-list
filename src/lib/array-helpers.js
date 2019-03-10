import {SORTED_BY} from '../constants';

export const sortBy = (isDesc) => (type, field) => {
  switch (type) {
    case "date" :
      return (a, b) =>
        isDesc
        ? new Date(a[field]) - new Date(b[field])
        : new Date(b[field]) - new Date(a[field]);
    case "string" :
      return (a, b) => (
        isDesc
          ? a[field] > b[field]
          : a[field] < b[field]
      ) ? -1 : 1;
    default:
      return (a, b) =>
        isDesc
          ? a[field] - b[field]
          : b[field] - a[field];
  }
}

export const sortFunction = (sort, isDesc = false) => {
  const sortByWithDesc = sortBy(isDesc);
  return (sort === SORTED_BY.TITLE)
    ? sortByWithDesc("string", SORTED_BY.TITLE)
    : (sort === SORTED_BY.DESCRIPTION)
      ? sortByWithDesc("string", SORTED_BY.DESCRIPTION)
      : sortByWithDesc("date", "timestamp")
  }