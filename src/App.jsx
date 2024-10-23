
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time =>{
   const newReadingTime = readingtime + time;
   setReadingTime(newReadingTime)
  }
 
  return (
    <>
       <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarks={handleAddToBookmarks}
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} 
      readingtime ={readingtime }
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
