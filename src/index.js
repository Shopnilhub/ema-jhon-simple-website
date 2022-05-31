import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
import { data } from './books'
import Book from './Book'
import { greeting } from './testing/testing'
//Setup Vers

function Booklist() {
  console.log(greeting)
  return (
    <section className='bookList'>
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'I am Bangladesh')
//   )
// }
