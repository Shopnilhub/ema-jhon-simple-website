import React from 'react'

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello World')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>
        Refarence Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  )
}

export default Book
