const extractIdFromUrl = (url: string): string => {
  const lastSlashIndex = url.lastIndexOf('/');

  const idWithQueryString = url.substring(lastSlashIndex + 1);

  const id = idWithQueryString.split('?')[0];

  return id;
};

export { extractIdFromUrl };
