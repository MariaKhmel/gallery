const client_id = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";
const baseUrl = `https://api.unsplash.com/search?client_id=${client_id}`;


const fetchImages = async (query, page) => {
  const res = await fetch(`${baseUrl}&page=${page}&per_page=20&query=${query}`);
  const data = await res.json();
  return data;

}

export default fetchImages;
