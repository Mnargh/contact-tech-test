import {
  fillMissingNames,
  filterDataByLocation,
  displayFilterResults,
  getModelsInLocation
} from './getModelsInLocation';

import * as exampleJSON from './fixtures/models.json';
// const exampleData = { exampleJSON }
import * as emptyDetailsData from './fixtures/emptyDetailsData.json';
// const { emptyDetailsData } = emptyDetailsJSON

test.only('Auto fills if no name entered in input data, ', () => {
  console.log(emptyDetailsData)

  // expect(fillMissingNames(emptyDetailsData)).toEqual(
  //   [
  //     {
  //       "name": "No name entered",
  //       "location": "Los Angeles",
  //       "date_of_birth": "1980-03-19"
  //     },
  //     {
  //       "name": "Bart Simpson",
  //       "location": "New York",
  //       "date_of_birth": "1980-03-19"
  //     }
  //   ]
  // )
})

// test('FilterDataByLocation returns expected data given a location and multiple matches', () => {
//   const expectedResult = [
//     {
//       "name": "Homer Simpson",
//       "location": "Springfield",
//       "date_of_birth": "1956-05-12"
//     },
//     {
//       "name": "Krusty the Clown",
//       "location": "SpringField",
//       "date_of_birth": "1957-10-29"
//     }
//   ]

//   expect(filterDataByLocation(exampleData, 'springfield')).toEqual(expectedResult)
//   expect(filterDataByLocation(exampleData, 'Springfield')).toEqual(expectedResult)
//   expect(filterDataByLocation(exampleData, 'SpringField')).toEqual(expectedResult)
// })

// test('Logs the correct output from filtered models data', () => {

//   const exampleFilteredData = [
//     {
//       "name": "Homer Simpson",
//       "location": "Springfield",
//       "date_of_birth": "1956-05-12"
//     },
//     {
//       "name": "Krusty the Clown",
//       "location": "SpringField",
//       "date_of_birth": "1957-10-29"
//     }
//   ]

//   console.log = jest.fn()
//   displayFilterResults(exampleFilteredData)

//   expect(console.log.mock.calls[0][0]).toBe('Homer Simpson')
//   expect(console.log.mock.calls[1][0]).toBe('Krusty the Clown')
// })

// test('Outputs message if no results were found for input location', () => {
//   console.log = jest.fn()
//   displayFilterResults([], 'London')

//   expect(console.log.mock.calls[0][0]).toBe('No results were found for the location: London')
// })

// test('getModelsInLocation outputs correct names given some models data', () => {
//   console.log = jest.fn()
//   getModelsInLocation(exampleData, 'Springfield')
//   expect(console.log.mock.calls[0][0]).toBe('Homer Simpson')
//   expect(console.log.mock.calls[1][0]).toBe('Krusty the Clown')
// })

