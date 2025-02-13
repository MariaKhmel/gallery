import fetchImages from "../helpers/fetchImages";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";

function App() {
  const onSubmit = async (query) => {
    const images = await fetchImages(query, 1);
    console.log(images);
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
