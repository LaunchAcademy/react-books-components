const niceDate = (timestampString) => {
  let date = new Date(parseInt(timestampString))
  return date.toDateString()
}

export default niceDate