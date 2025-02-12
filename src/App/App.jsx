import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";

function App() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
