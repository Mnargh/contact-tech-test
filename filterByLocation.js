const exampleData = require('./fixtures/models.json');

const filterModelsByLocation = (data, location) => (
  data.filter(model => {
    const modelLocation = model.location.toString()
    return modelLocation.toLowerCase() == location.toLowerCase()
  })
)

const displayFilterResults = (data, location) => {
  const results = filterModelsByLocation(data, location)

  results.length ? results.forEach(model => {
    console.log(model.name)
  }) : console.log(`No results were found for the location: ${location}`)
}

displayFilterResults(exampleData, 'Springfield')

module.exports = {
  filterByLocation: filterModelsByLocation,
  displayFilterResults: displayFilterResults
}