
const exampleData = require('./fixtures/models.json');

const validateIsJSON = (data => {
  try {
    JSON.parse(JSON.stringify(data));
    // example data file is imported as Javascript object and errors with JSON.stringify
    return true;
  } catch (err) {
    console.error(err)
  }
})

const fillMissingNames = (data) => {
  try {
    return data.map(model => (
      model.name ? model : { ...model, name: 'No name entered' }
    ))
  } catch (error) {
    console.error(error)
  }
}

const filterDataByLocation = (data, location) => {
  return data.filter(model => {
    const modelLocation = model.location.toString()
    return modelLocation.toLowerCase() == location.toLowerCase()
  })
}

const displayFilterResults = (filterResults, location) => {
  filterResults.length ? filterResults.forEach(model => {
    console.log(model.name)
  }) : console.log(`No results were found for the location: ${location}`)
}

const getModelsInLocation = (data, location) => {
  // validate data
  validateIsJSON(data)
  // correct missing name data
  const filledData = fillMissingNames(data)
  // filter the data
  const filteredData = filterDataByLocation(filledData, location)
  // display the result
  displayFilterResults(filteredData, location)
}

export { getModelsInLocation, displayFilterResults, filterDataByLocation, fillMissingNames }

getModelsInLocation(exampleData, 'Springfield')