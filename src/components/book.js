import React from 'react'
import BookImage from './book-image'
import niceDate from '../utils/make-nice-date'

const Book = (props) => {
  return(
    <div>
      <h3>{ props.title }</h3>
      <h4>By { props.author }</h4>
      <p>Published At: { niceDate(props.publishedAt) }</p>
      <BookImage
        title={ props.title }
        imageUrl={ props.imageUrl }/>
      <a href="#" className="button">
        <i className="fa fa-university"></i> Buy Now!
      </a>
    </div>
  )
}

export default Book