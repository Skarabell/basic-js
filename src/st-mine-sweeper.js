import {NotImplementedError} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let row = matrix.length;
    let column = matrix[0].length;
    let counter;
    const result = [];

    for (let i = 0; i < row; i++) {
        result[i] = new Array(column);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            counter = 0;
            if (i - 1 >= 0 && j - 1 >= 0) if (matrix[i - 1][j - 1]) counter++;
            if (i - 1 >= 0) if (matrix[i - 1][j]) counter++;
            if (i - 1 >= 0 && j + 1 < column) if (matrix[i - 1][j + 1]) counter++;
            if (j - 1 >= 0) if (matrix[i][j - 1]) counter++;
            if (j + 1 < column) if (matrix[i][j + 1]) counter++;
            if (i + 1 < row && j - 1 >= 0) if (matrix[i + 1][j - 1]) counter++;
            if (i + 1 < row) if (matrix[i + 1][j]) counter++;
            if (i + 1 < row && j + 1 < column) if (matrix[i + 1][j + 1]) counter++;
            console.log(`result[${i}][${j}] = ${counter}`);
            result[i][j] = counter;
        }
    }
    return result;
}
