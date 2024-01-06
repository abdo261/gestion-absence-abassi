export const isEmpty = (value='')=>value.trim().length>=3

export const containsSpecialChars = (value = '') => {
    const specialChars = /[^A-Za-z0-9-_\s]/g; 
    return specialChars.test(value);
  };