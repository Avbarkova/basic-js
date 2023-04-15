const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  let res = [];
  if (!Array.isArray(array)) throw new Error ("'arr' parameter must be an instance of the Array!");
if (Array.isArray(array)) {
  if (array[0] === '--discard-prev' || array[0] === '--double-prev' || array[0]===NaN )  {
      array.slice(1);}
  if (array[array.length-1] === '--discard-next' || array[array.length-1] === '--double-next') {
    array.pop();
  }
  for (let i=0; i<array.length; i++) {
    if (array[i]!=='--double-prev' && array[i]!=='--double-next' && array[i]!=='--discard-next' && array[i]!=='--discard-prev' && typeof(array[i]) != 'undefined') {
      res.push(array[i]);
    } else {
      if (array[i]==='--double-prev') {if(array[i-2]!=='--discard-next') {res.push(array[i-1]);}}
      else {
        if (array[i]==='--double-next') {res.push(array[i+1]);}
        else {
          if (array[i]==='--discard-next') {i=i+1;} 
          else {if (array[i-2]!=='--discard-next') res.pop();}
        }
      }
    }
  }
}
  return res = res.filter(function(val) {
    return !(typeof val == "undefined");});
}

module.exports = {
  transform
};
