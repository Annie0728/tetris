const minoes = {
  0 : {
    shape: [[0]],
    className: 0,
    color: '#32363D'
  },
  I : {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    className: "I",
    color: '#1FB7EA'
  },
  L : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    className: "L",
    color: '#F9A287'
  },
  J : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    className: "J",
    color: '#207AD5'
  },
  O : {
    shape: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    className: "O",
    color: '#FFDA85'
  },
  T : {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    className: "T",
    color: '#625BC2'
  },
  Z : {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    className: "Z",
    color: '#F26989'
  },
  S : {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    className: "S",
    color: '#72C07B'
  },
  DOT : {
    shape: [
      [1]
    ],
    className: "DOT",
    color: '#44CFCB'
  },
  I2 : {
    shape: [
      [1, 0],
      [1, 0],
    ],
    className: "I2",
    color: '#8A84E2'
  },
  I3 : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    className: "I3",
    color: '#E2A1CC'
  },
  V : {
    shape: [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
    className: "V",
    color: '#D373B3'
  }
};

const randomMino = () => {
  var keys = ['I', 'L', 'J', 'O', 'S', 'Z', 'T'];
  var random = keys[Math.floor(Math.random() * keys.length)];

  return minoes[random];
};

const randomWackyMino = () => {
  var keys = ['I', 'L', 'J', 'O', 'S', 'Z', 'T', 'DOT', 'I2', 'I3', 'V'];
  var random = keys[Math.floor(Math.random() * keys.length)];

  return minoes[random];
};

export {minoes, randomMino, randomWackyMino};