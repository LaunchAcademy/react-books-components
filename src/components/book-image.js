import React from 'react'

const BookImage = (props) => {
  return (
    <img src={ props.imageUrl}
      alt={ `${props.title} cover` }
    />
  )
}

export default BookImage