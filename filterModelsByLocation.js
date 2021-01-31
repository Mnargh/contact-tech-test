const exampleData = require('./fixtures/models.json');

const fillMissingNamesData = (data) => {
  try {
    return data.map(model => (
      model.name ? model : { ...model, name: 'No name entered' }
    ))
  } catch (error) {
    console.log(err)
  }
}

const filterModelsByLocation = (data, location) => {
  const updatedData = fillMissingNamesData(data)

  return updatedData.filter(model => {
    const modelLocation = model.location.toString()
    return modelLocation.toLowerCase() == location.toLowerCase()
  })
}

const displayFilterResults = (data, location) => {
  const results = filterModelsByLocation(data, location)

  results.length ? results.forEach(model => {
    console.log(model.name)
  }) : console.log(`No results were found for the location: ${location}`)
}

module.exports = {
  fillMissingNamesData,
  filterModelsByLocation,
  displayFilterResults
}

displayFilterResults(exampleData, 'Springfield')