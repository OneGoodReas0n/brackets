function check(str, bracketsConfig) {
  let wordCount = String(str).length
  for (let j = 0; j < bracketsConfig.length; j++) {
    let i = 0;
    while (i < String(str).length) {
      if (str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) {
        str = String(str).slice(0, i) + String(str).slice(i + 2);
        i++;
      }
      i++;
    }
  }
  if (String(str).length > 1 && wordCount !== String(str).length) {
    counter = String(str).length
    return check(str, bracketsConfig)
  }
  return String(str).length === 0 ? true : false
}

module.exports = check;

