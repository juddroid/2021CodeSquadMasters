const haystack = 'hello';
const needle = 'll';

function strStr(haystack, needle) {
  let result = 0;
  if (needle.length === 0) {
    return result;
  }

  if (haystack.includes(needle)) {
    result = haystack.indexOf(needle);
  } else {
    result = -1;
  }

  return result;
}

strStr(haystack, needle);
