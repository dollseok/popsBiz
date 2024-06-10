const checkObjectBlank = (obj: Record<string, string>): boolean => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key].trim() === '') {
      return true;
    }
  }
  return false;
};

export { checkObjectBlank };
