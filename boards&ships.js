const testBoard = [
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
];

const board4x4 = [
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
];

const board5x5 = [
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
];

const board6x6 = [
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
  [
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
    {type: "empty", id: 0, hit: false},
  ],
];

/* const large = {type: "large", id: 1, size: 3, hit: false};   //the original objects
const small = {type: "small", id: 2, size: 2, hit: false}; */
/* const cLarge = JSON.parse(JSON.stringify(large));   //one of the two cloning methods i attempted
const cSmall = JSON.parse(JSON.stringify(small)); */

const large = () => ({ type: "large", id: 1, size: 3, hit: false });
const small = () => ({ type: "small", id: 2, size: 2, hit: false });


export {testBoard, board4x4, board5x5, board6x6, /* cLarge, cSmall, */ small, large};