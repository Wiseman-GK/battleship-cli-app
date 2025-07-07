import readlineSync from 'readline-sync';
const rs = readlineSync;
import {convert, ships, placeShips, boardConvert, setCount, tarConvert, count} from './process.js'

const boardSelect = intro();
const shipSelect = select();
let playBoard = placeShips(boardConvert(boardSelect), ships(shipSelect));
setCount(playBoard);
let tar;


function intro(){
  console.log("Welcome to Battleship!")
  const boards = ['board4x4', 'board5x5', 'board6x6'];
  const query = `Please choose a board:\n1. ${boards[0]}\n2. ${boards[1]}\n3. ${boards[2]}\nEnter your choice (1-3): `;
  const choice = rs.question(query);
  let selectedOption;
    if (choice >= 1 && choice <= boards.length) {
        selectedOption = boards[choice - 1];
        console.log(`You selected: ${selectedOption}`);
    } else {
        console.log('Invalid choice. Please try again.');
    }
  return selectedOption;
}

function select(){
  if (boardSelect === 'board4x4'){
    const ships = ['1 large', '1 small'];
    const query = `Please choose a ship set:\n1. ${ships[0]}\n2. ${ships[1]}\nEnter your choice (1-2): `;
    const choice = rs.question(query);
    let selectedOption;
    if (choice >= 1 && choice <= ships.length) {
        selectedOption = ships[choice - 1];
        console.log(`You selected: ${selectedOption}`);
    } else {
        console.log('Invalid choice. Please try again.');
    }
    return selectedOption;
  } else if (boardSelect === 'board5x5'){
    const ships = ['1 large', '2 small'];
    const query = `Please choose a ship set:\n1. ${ships[0]}\n2. ${ships[1]}\nEnter your choice (1-2): `;
    const choice = rs.question(query);
    let selectedOption;
    if (choice >= 1 && choice <= ships.length) {
        selectedOption = ships[choice - 1];
        console.log(`You selected: ${selectedOption}`);
    } else {
        console.log('Invalid choice. Please try again.');
    }
    return selectedOption;
  } else if (boardSelect === 'board6x6'){
    const ships = ['2 large', '2 small'];
    const query = `Please choose a ship set:\n1. ${ships[0]}\n2. ${ships[1]}\nEnter your choice (1-2): `;
    const choice = rs.question(query);
    let selectedOption;
    if (choice >= 1 && choice <= ships.length) {
        selectedOption = ships[choice - 1];
        console.log(`You selected: ${selectedOption}`);
    } else {
        console.log('Invalid choice. Please try again.');
    }
    return selectedOption;
  }
}



function printBoard (board, debug){
  console.table(convert(board, debug));
}
printBoard(playBoard, false);

while (count !== 0){
  (function target (){
    if (boardSelect === 'board4x4'){
      const choice = rs.question('Select a space to attack: ', {limit: ['A0', 'A1', 'A2', 'A3', 'B0', 'B1', 'B2', 'B3', 'C0', 'C1', 'C2', 'C3', 'D0', 'D1', 'D2', 'D3']});
      tar = choice;
    } else if (boardSelect === 'board5x5'){
      const choice = rs.question('Select a space to attack: ', {limit: ['A0', 'A1', 'A2', 'A3', 'A4', 'B0', 'B1', 'B2', 'B3', 'B4', 'C0', 'C1', 'C2', 'C3', 'C4', 'D0',
         'D1', 'D2', 'D3', 'D4', 'E0', 'E1', 'E2', 'E3', 'E4']});
      tar = choice;
    } else if (boardSelect === 'board6x6'){
      const choice = rs.question('Select a space to attack: ', {limit: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'C0', 'C1', 'C2', 'C3',
         'C4', 'C5', 'D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'E0', 'E1', 'E2', 'E3', 'E4', 'E5', 'F0', 'F1', 'F2', 'F3', 'F4', 'F5']});
      tar = choice;
    }
  })();
  tarConvert(tar);
  console.clear();
  printBoard(playBoard, false);
}

if (count === 0){
  console.log(`
  ========================================
  __   _______ _   _   _    _ _____ _   _
  \\ \\ / /  _  | | | | | |  | |_   _| \\ | |
   \\ V /| | | | | | | | |  | | | | |  \\| |
    \\ / | | | | | | | | |/\\| | | | | . ' |
    | | \\ \\_/ / |_| | \\  /\\  /_| |_| |\\  |
    \\_/  \\___/ \\___/   \\/  \\/ \\___/\\_| \\_/
  ========================================
  `);
}

export {playBoard};