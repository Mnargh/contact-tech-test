const filterByLocation = (modelsData, location) => {
  return modelsData.filter(model => {
    return model.location.toString().toLowerCase() == location.toLowerCase()
  })
}

module.exports = filterByLocation;