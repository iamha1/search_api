import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID tu96K91EhvVRmXk1W7MVoswsOlLqkTNGx7gVqLk1lI0'
            },
            params: {
                query: term
            }
    });
    console.log(response.data.results)
    return response.data.results
};

export default searchImages