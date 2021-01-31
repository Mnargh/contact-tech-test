const filterByLocation = require('./filterByLocation');
const exampleData = require('./fixtures/models.json');


test('FilterByLocation returns expected data given a location and multiple matches', () => {
  const expectedResult = [
    {
      "name": "Homer Simpson",
      "location": "Springfield",
      "date_of_birth": "1956-05-12"
    },
    {
      "name": "Krusty the Clown",
      "location": "SpringField",
      "date_of_birth": "1957-10-29"
    }
  ]

  expect(filterByLocation(exampleData, 'springfield')).toEqual(expectedResult)
  expect(filterByLocation(exampleData, 'Springfield')).toEqual(expectedResult)
  expect(filterByLocation(exampleData, 'SpringField')).toEqual(expectedResult)
})