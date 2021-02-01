const exampleData = require('./fixtures/models.json');

const validateIsJSON = (data => {
  try {
    JSON.parse(data);
    return true;
  } catch {
    console.error('Data not in JSON format')
  }
})

const fillMissingNamesData = (data) => {
  try {
    return data.map(model => (
      model.name ? model : { ...model, name: 'No name entered' }
    ))
  } catch (error) {
    console.error(err)
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

const filterModelsByLocation = (data, location) => {
  // validate data
  validateIsJSON(data)
  // correct missing name data
  const filledData = fillMissingNamesData(data)
  // filter the data
  const filteredData = filterDataByLocation(filledData, location)
  // display the result
  displayFilterResults(filteredData, location)
}

module.exports = {
  validateIsJSON,
  fillMissingNamesData,
  filterDataByLocation,
  displayFilterResults,
  filterModelsByLocation
}

filterModelsByLocation(exampleData, 'Springfield')