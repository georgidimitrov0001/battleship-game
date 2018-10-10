const SHIP_TYPES = {
  CARRIER: 'Carrier',
  BATTLESHIP: 'Battleship',
  CRUISER: 'Cruiser',
  DESTROYER: 'Destroyer',
  SUBMARINE: 'Submarine'
};

const SHIP_SIZES = {
  [SHIP_TYPES.CARRIER]: 5,
  [SHIP_TYPES.BATTLESHIP]: 4,
  [SHIP_TYPES.CRUISER]: 3,
  [SHIP_TYPES.DESTROYER]: 2,
  [SHIP_TYPES.SUBMARINE]: 1
};

const MIN_ROWS_COUNT = 5;
const MAX_ROWS_COUNT = 26;

const MIN_COLS_COUNT = 5;
const MAX_COLS_COUNT = 50;

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const RECURSIVE_LIMIT = 50000;

module.exports = {
  SHIP_TYPES,
  SHIP_SIZES,
  MIN_ROWS_COUNT,
  MAX_ROWS_COUNT,
  MIN_COLS_COUNT,
  MAX_COLS_COUNT,
  LETTERS,
  RECURSIVE_LIMIT
};
