const minoes = {
  fill : {
    shape: [[0]],
    color: 'transparent'
  },
  I : {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: '#1FB7EA'
  },
  L : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    color: '#F9A287'
  },
  J : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    color: '#207AD5'
  },
  O : {
    shape: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    color: '#FFDA85'
  },
  T : {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    color: '#625BC2'
  },
  Z : {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '#F26989'
  },
  S : {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '#72C07B'
  },
  DOT : {
    shape: [
      [1]
    ],
    color: '#44CFCB'
  },
  I2 : {
    shape: [
      [1, 0],
      [1, 0],
    ],
    color: '#8A84E2'
  },
  I3 : {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    color: '#E2A1CC'
  },
  V : {
    shape: [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
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