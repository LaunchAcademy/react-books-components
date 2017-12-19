import React from 'react'
import Book from './book'
import bookData from '../data/book-data'

const BookList = (props) => {

  let bookItems = bookData.map((book) => {
    return <Book title={ book.title }
      publishedAt={ book.publishedAt }
      author={ book.author }
      imageUrl={ book.imageUrl }
    />

    // return <Book {...bookData} />
  })

  return (
    <div>
      { bookItems }
    </div>
  )
}

export default BookList