const computePrice = (books: string[]): number => {
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
      return 0
  }
}

export default {
  computePrice,
}
