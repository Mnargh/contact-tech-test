const filterModule = require('./filterByLocation');
const exampleData = require('./fixtures/models.json');

const filterByLocation = filterModule.filterByLocation;
const displayFilterResults = filterModule.displayFilterResults;


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

test('Logs the correct output from filtered models data', () => {
  console.log = jest.fn()
  displayFilterResults(exampleData, 'Springfield')

  expect(console.log.mock.calls[0][0]).toBe('Homer Simpson')
  expect(console.log.mock.calls[1][0]).toBe('Krusty the Clown')
})