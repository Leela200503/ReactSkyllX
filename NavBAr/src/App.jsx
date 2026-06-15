import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [srcData, setSrcData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const res = await fetch("https://dummyjson.com/products");
        const result = await res.json();

        setData(result.products);
        setSrcData(result.products); // Store original data for search
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar setData={setData} srcData={srcData} />

      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <img
            src="https://media.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="Loading"
            className="w-20 h-20"
          />
        </div>
      ) : (
        <Products metadata={data} setData={setData} />
      )}
    </div>
  );
}

export default App;