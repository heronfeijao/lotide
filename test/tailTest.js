const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(tail([1, 2, 3, 4, 5])[0], 2);
assertEqual(tail([1, 2, 3, 4, 5])[1], 3);
assertEqual(tail([1, 2, 3, 4, 5])[2], 4);
assertEqual(tail([1, 2, 3, 4, 5])[3], 5);