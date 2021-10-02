import './App.css';
import Book from './components/Book';
import bookdata from './bookdata'
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
function App() {

  const [books, setBooks] = useState([])
  const [clickedIndex, setClickedIndex] = useState(0)
  useEffect(() => {
    setBooks(bookdata)
  }, [])

  const handleClick = (index) => {

    setClickedIndex(index)
    if (index === 0) {
      setBooks(bookdata)
    } else {
      const filteredBooks = bookdata.filter(book => book.category === categories[index])
      setBooks(filteredBooks)
    }
  }
  const categories = ["All", "Computer Science", "Action and Adventure", "Science Fiction"]
  console.log(books)
  return (
    <div>
      <header>
        <h1>Favorite Books</h1>
      </header>
      <hr />
      <main>
        <section className="hero">
          <div className="wrapper">
            <p className="tag">THE NEW BOOKS STORE</p>
            <h3> Favorite Books of the 2021</h3>
            <button className="btn-see-more">See More</button>
          </div>
          <figure>
            <img width="400px" src="/assets/images/hero-image.jpg" alt="hero "></img>
          </figure>
        </section>
        <section className="books">
          <div className="categories">
            <ul className="category-list">
              {categories.map((cat, index) => {
                return <li key={cat} className={`category-item ${index === clickedIndex ? "active-category" : ""}`} onClick={() => handleClick(index)}> {cat}</li>
              })}
            </ul>
          </div>
          <div className="book-list">
            {
              books.map(book => <Book title={book.title} author={book.author} descriptions={book.descriptions} category={book.category} path={book.path} rating={book.rating} />)
            }
          </div>
        </section>
      </main>
      {<Footer />}
    </div>
  );
}

export default App;
