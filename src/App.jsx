import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/addBook';
import booksData from './booksData';
import './App.css';

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/add-book" element={<AddBook addBook={addBook} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;