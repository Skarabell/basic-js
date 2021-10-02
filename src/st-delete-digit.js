import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let digit = String(n).split('');
    let min = digit[0];
    let index = 0;
    for (let i = 1; i < digit.length; i++) {
        if (digit[i] < min) {
            min = digit[i];
            index = i;
        }
    }
    digit.splice(index, 1);
    return +digit.join('');
}
