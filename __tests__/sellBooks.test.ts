import sellBooks from '../src/sellBooks'

var Tome = sellBooks.Tome

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of one book and expect it to be 8', () => {
      //Given
      var books = [Tome.One]
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
      var books = [Tome.One, Tome.Two]
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
      var books = [Tome.One, Tome.Two, Tome.Three]
      var expectedPrice = 3 * 8 * 0.9
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(expectedPrice)
    })
  })
})

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of four differents books and expect it to be 25.6 (20% reduction)', () => {
      //Given
      var books = [Tome.One, Tome.Two, Tome.Three, Tome.Four]
      var expectedPrice = 4 * 8 * 0.8
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(expectedPrice)
    })
  })
})
