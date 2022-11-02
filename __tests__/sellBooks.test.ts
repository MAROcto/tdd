import sellBooks from '../src/sellBooks'

describe('sellBooks', () => {
  describe('computePrice', () => {
    test('Compute the price of one book.', () => {
      //Given
      var books = ['Tome 1']
      //When
      var computedPrice = sellBooks.computePrice(books)
      //Then
      expect(computedPrice).toBe(sellBooks.bookPrice)
    })
  })
})
