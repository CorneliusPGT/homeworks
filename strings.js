const setFirstLetter = (string) =>
  string.slice(0, 1).toUpperCase() + string.slice(1);

const setLimit = (string, limit) => {
  if (string.length > limit) {
    for (let i = limit - 1; i > -1; i--) {
      if (/[ ,.?!:;]/.test(string[i])) {
        return string.slice(0, i) + "...";
      }
    }
    return string.slice(0, limit) + "...";
  }
  return string;
};

const isSubstr = (s1, s2) => {
  if (s1.includes(s2) || s2.includes(s1)) return true;
  return false;
};
