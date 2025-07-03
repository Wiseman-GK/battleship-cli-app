import {testBoard, board4x4, board5x5, board6x6, /*  cLarge, cSmall, */ small, large } from './boards&ships.js';
import {playBoard} from './battleships.js';

let count = 0;

function convert (board, debug) {
  let remade = remake(board);
  const keys = Object.keys(remade);
  for (let g = 0; g < board.length; g++){
    const subArr = board[g];
    for (let r = 0; r < subArr.length; r++){
      if (debug === true){
        if (board[g][r].id === 0){
          if (board[g][r].hit === true){
            remade[keys[g]].push('X');
          } else {
            remade[keys[g]].push('-');
          }
        } else if (board[g][r].id === 1){
          if (board[g][r].hit === true){
            remade[keys[g]].push('!');
          } else {
            remade[keys[g]].push('L');
          }
        } else if (board[g][r].id === 2){
          if (board[g][r].hit === true){
            remade[keys[g]].push('!');
          } else {
            remade[keys[g]].push('S');
          }
        }
      } else {
        if (board[g][r].id === 0){
          if (board[g][r].hit === true){
            remade[keys[g]].push('X');
          } else {
            remade[keys[g]].push('-');
          }
        } else if (board[g][r].id === 1){
          if (board[g][r].hit === true){
            remade[keys[g]].push('!');
          } else {
            remade[keys[g]].push('-');
          }
        } else if (board[g][r].id === 2){
          if (board[g][r].hit === true){
            remade[keys[g]].push('!');
          } else {
            remade[keys[g]].push('-');
          }
        }
      }
    }
  }
  return remade;
}
function remake (board){
  if (board.length == 3){
    return {A:[],B:[],C:[]};
  } else if (board.length == 4){
    return {A:[],B:[],C:[],D:[]};
  } else if (board.length == 5){
    return {A:[],B:[],C:[],D:[],E:[]};
  } else if (board.length == 6){
    return {A:[],B:[],C:[],D:[],E:[],F:[]};
  }
}

function ships (input){
  let arr = input.split(' ');
  let shipArr = [];
  for(let g = 0; g < Number(arr[0]); g++){
    if (arr[1] === 'small'){
      shipArr.push(small());
    } else if (arr[1] === 'large'){
      shipArr.push(large());
    }
  }
  return shipArr
}

function boardConvert (board){
  if (board === 'board4x4'){
    return board4x4;
  } else if (board === 'board5x5'){
    return board5x5;
  } else if (board === 'board6x6'){
    return board6x6
  }
}

function placeShips(board, ships) {
  for (const ship of ships) {
    let placed = false;
    while (!placed) {
      const isHorizontal = Math.random() < 0.5;
      const row = Math.floor(Math.random() * board.length);
      const col = Math.floor(Math.random() * board[0].length);
      let validPlacement = true;
      const shipCoords = [];
      if (isHorizontal) {
        if (col + ship.size > board[0].length) {
          validPlacement = false;
        } else {
          for (let i = 0; i < ship.size; i++) {
            if (board[row][col + i].id !== 0) {
              validPlacement = false;
              break;
            }
            shipCoords.push([row, col + i]);
          }
        }
      } else {
        if (row + ship.size > board.length) {
          validPlacement = false;
        } else {
          for (let i = 0; i < ship.size; i++) {
            if (board[row + i][col].id !== 0) {
              validPlacement = false;
              break;
            }
            shipCoords.push([row + i, col]);
          }
        }
      }
      if (validPlacement) {
        for (const [r, c] of shipCoords) {
          board[r][c] = ship;
        }
        placed = true;
      }
    }
  }
  return board;
}

function setCount (board){
  for (let g = 0; g < board.length; g++){
    for (let r = 0; r <board[g].length; r++){
      if (board[g][r].id !== 0){
        count += 1;
      }
    }
  }
}

function tarConvert(tar){ // this function converts the choice from the target function into indexes for the function below
  let ref = tar.split('');
  if(ref[0] === 'A'){
    ref[0] = 0;
  } else if (ref[0] === 'B'){
    ref[0] = 1;
  } else if (ref[0] === 'C'){
    ref[0] = 2;
  } else if (ref[0] === 'D'){
    ref[0] = 3;
  } else if (ref[0] === 'E'){
    ref[0] = 4;
  } else if (ref[0] === 'F'){
    ref[0] = 5;
  }
  ref[1] = Number(ref[1]);
  console.log(ref);
 hitOrMiss(playBoard, ref[0], ref[1]);
}

function hitOrMiss (board, row, col){ //this function targets the objects
  if (board[row][col].hit === false){
    board[row][col].hit = true;
    if (board[row][col].id !== 0){
      count -= 1;
    }
    return board;
  } else {
    return console.log('This locations has already been hit, try again.');
  }
}

export {convert, ships, placeShips, boardConvert, setCount, hitOrMiss, count, tarConvert};