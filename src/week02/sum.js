const arr = [1, 2, 3, 4, 5];
const result_reduce = arr.reduce(
(pre, value) => pre + value,
0,
);

const result_map = arr.map(
(value) => value * 10,
);

const result_filter = arr.filter(
(value) => (value >= 3),
);



console.log(`${result_filter}`)