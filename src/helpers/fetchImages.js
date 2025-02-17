const client_id = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";
const baseUrl = `https://api.unsplash.com/search1/photos?client_id=${client_id}`;


const fetchImages = async (query, page) => {
  const res = await fetch(`${baseUrl}&page=${page}&per_page=10&query=${query}`);
  if (!res.ok) {
    throw new Error(`HTTP error! Status : ${res.status}`)
  }
  return await res.json();
}

export default fetchImages;
