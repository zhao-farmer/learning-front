let obj = {
    a: 1,
  };
  Object.assign(obj, undefined) === obj; // true
  Object.assign(obj, null) === obj; // true