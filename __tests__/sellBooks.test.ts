import sellBooks from '../src/sellBooks'

describe('sellBooks', () => {
  describe('discount', () => {
    test("add '!' to the end the designated number times", () => {
      expect(sellBooks.exaggerate('Yippee', 8)).toBe('Yippee!!!!!!!!')
    })
  })
})
