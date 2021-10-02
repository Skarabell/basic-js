import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = str + '';
  let repeatTimes = (options.repeatTimes || 1),
      separator = (options.separator || '+'),
      addition = (options.addition || '') + '',
      additionSeparator = (options.additionSeparator || '|'),
      additionRepeatTimes = (options.additionRepeatTimes || 1);

  if (options.addition === false) {
    addition = 'false';
  } else if (options.addition === null) {
    addition = 'null';
  }

  let arr = [],
      additionArr = [];

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str);
  }
  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(addition);
    }
  }
  return arr.map((e) => e + additionArr.join(additionSeparator)).join(separator);
}
