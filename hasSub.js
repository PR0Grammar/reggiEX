/*
  Checks if a substring occurs within a string (CASE SENSITIVE)

  hasSub('one$', '43 #thisisaone$test') => true

  hasSub('one$', 'thisisonetest 4#@') => false
*/

function hasSub(subString, string) {
  const re = new RegExp(subString, 'g');
  return re.test(string);
}

export default hasSub;