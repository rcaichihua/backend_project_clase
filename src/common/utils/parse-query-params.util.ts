/* eslint-disable @typescript-eslint/no-explicit-any */
export const parseQueryParams = (query: { [key: string]: any }) => {
  const filters: { [key: string]: any } = {};
  Object.keys(query).forEach((key) => {
    filters[key] = isNaN(+query[key]) ? query[key] : +query[key];
  });
  return filters;
};
