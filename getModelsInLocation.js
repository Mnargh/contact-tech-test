import moment from 'moment'

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

const calcModelAge = (dateOfBirth) => {
  const now = moment()
  const dob = moment(dateOfBirth)
  return now.diff(dob, 'years')
}

const filterDataByAge = (data, age) => {
  if (age) {
    return data.filter(model => {
      const modelAge = calcModelAge(model.date_of_birth)
      return modelAge == age
    })
  } 
  else return data
}

const displayFilterResults = (filterResults, location) => {
  filterResults.length ? filterResults.forEach(model => {
    console.log(model.name)
  }) : console.log(`No results were found for the location: ${location}`)
}

const getModelsInLocation = (data, location, age) => {
  // validate data
  validateIsJSON(data)
  // correct missing name data
  const filledData = fillMissingNames(data)
  // filter the data
  const filteredData = filterDataByAge(filterDataByLocation(filledData, location), age)
  // display the result
  displayFilterResults(filteredData, location)
}

export { getModelsInLocation, displayFilterResults, filterDataByLocation, fillMissingNames, calcModelAge, filterDataByAge }

getModelsInLocation(exampleData, 'Springfield')