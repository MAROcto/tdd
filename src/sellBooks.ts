enum Tome {
  One = 'Tome 1',
  Two = 'Tome 2',
  Three = 'Tome 3',
  Four = 'Tome 4',
  Five = 'Tome 5',
}

const computePrice = (books: Tome[]): number => {
  switch (books.length) {
    case 1:
      return 8
    case 2:
      return 15.2
    case 3:
      return 21.6
    case 4:
      return 25.6
    default:
      return -1
  }
}

export default {
  Tome,
  computePrice,
}
