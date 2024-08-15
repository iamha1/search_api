import { useState } from 'react';
import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import SearchBar from './components/SearchBar'
import searchImages from './api';

function App() {
  const [image, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const resulu = await searchImages(term);

    setImages(result)
  }
  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={image}/>
  </div>
  )
}

export default App
