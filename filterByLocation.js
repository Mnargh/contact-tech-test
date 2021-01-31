const exampleData = require('./fixtures/models.json');

const filterByLocation = (modelsData, location) => {
  return modelsData.filter(model => {
    return model.location.toString().toLowerCase() == location.toLowerCase()
  })
}

const displayFilterResults = (modelsData, location) => {
  filterByLocation(modelsData, location).forEach(model => {
    console.log(model.name)
  })
}

displayFilterResults(exampleData, 'Springfield')

module.exports = {
  filterByLocation: filterByLocation,
  displayFilterResults: displayFilterResults
}