const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined)/*(!(date instanceof Date))*/ return ('Unable to determine the time of year!');
  try {
    date.toDateString();
  } catch {
    throw Error('Invalid date!');
  }
  /*Object.prototype.toString.call(date) !== '[object Date]' || date.getMilliseconds()===0 || date.getMonth()===NaN || Date.prototype.toDateString.call(date) !== date.toDateString())|| date.toString()!==Date.prototype.toDateString.call(date) {throw new Error ('Invalid date!');}*/
  
    let month1 = date.getMonth();
    let result = season(month1);
    return result;
  /*для определения сезона по месяцу*/
  function season (month) {
    let seasonOfYear = '';
    if (0<=month<=1 || month==11) {seasonOfYear = 'winter';} 
    if (month>=2 && month<=4) {seasonOfYear = 'spring';} 
    if (month>=5 && month<=7) {seasonOfYear = 'summer';} 
    if (month>=8 && month<=10) {seasonOfYear = 'autumn'};
    return (seasonOfYear);
  }
    
}

module.exports = {
  getSeason
};
