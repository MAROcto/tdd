import sellBooks from '../src/sellBooks'

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of one book and expect it to be 8', () => {
      //Given
      var books = ['Tome 1']
      var expectedPrice = 8
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(expectedPrice)
    })
  })
})

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of two differents books and expect it to be 15.2 (5% reduction)', () => {
      //Given
      var books = ['Tome 1', 'Tome 2']
      var expectedPrice = 2 * 8 * 0.95
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(expectedPrice)
    })
  })
})

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of three differents books and expect it to be 21.6 (10% reduction)', () => {
      //Given
      var books = ['Tome 1', 'Tome 2', 'Tome 3']
      var expectedPrice = 3 * 8 * 0.9
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(expectedPrice)
    })
  })
})
