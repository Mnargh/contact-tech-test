const { filterModelsByLocation, displayFilterResults, fillMissingNamesData } = require('./filterModelsByLocation');
const exampleData = require('./fixtures/models.json');
const emptyDetailsData = require('./fixtures/emptyDetailsData.json');

test('Auto fills if no name entered in input data, ', () => {
  expect(fillMissingNamesData(emptyDetailsData)).toEqual(
    [
      {
        "name": "No name entered",
        "location": "Los Angeles",
        "date_of_birth": "1980-03-19"
      },
      {
        "name": "Bart Simpson",
        "location": "New York",
        "date_of_birth": "1980-03-19"
      }
    ]
  )
})

test('FilterModelsByLocation returns expected data given a location and multiple matches', () => {
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

  const fillMissingNamesData = jest.fn();
  fillMissingNamesData.mockReturnValueOnce(exampleData).mockReturnValueOnce(exampleData).mockReturnValueOnce(exampleData);

  expect(filterModelsByLocation(exampleData, 'springfield')).toEqual(expectedResult)
  expect(filterModelsByLocation(exampleData, 'Springfield')).toEqual(expectedResult)
  expect(filterModelsByLocation(exampleData, 'SpringField')).toEqual(expectedResult)
})

test('Logs the correct output from filtered models data', () => {
  console.log = jest.fn()
  displayFilterResults(exampleData, 'Springfield')

  expect(console.log.mock.calls[0][0]).toBe('Homer Simpson')
  expect(console.log.mock.calls[1][0]).toBe('Krusty the Clown')
})

test('Outputs message if no results were found for input location', () => {
  console.log = jest.fn()
  displayFilterResults(exampleData, 'London')

  expect(console.log.mock.calls[0][0]).toBe('No results were found for the location: London')
})

