import ImageList from './components/ImageList';
import ImageShow from './components/ImageShow';
import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (term) => {
    console.log('search for me: ', term)
  }
  
  return (
    <div>
    
      <SearchBar onSubmit={handleSubmit} />
  </div>
  )
}

export default App
