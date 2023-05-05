import "./App.css";

import SearchContainer from "./Components/SearchContainer";
import SearchResults from "./Components/SearchResults";
import UserDètails from "./Components/UserDetails";

import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

function App() {
  const [input, setInput] = useState(" ");
  const [resultsFromApi, setResultsFromApi] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [didClicked, setDidClick] = useState(false)

  const config = {
    headers:{
      Authorization: "Bearer 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"
    }
  };
  useEffect(() => {
    if (input !== " ") {
      axios
        .get(`https://api.github.com/search/users?q=${input}`, config)
        .then((res) => {
          console.log(res.data);
          setResultsFromApi(res.data.items);
        });
    }
  }, [input]);

  return (
    <div className="App">
      <AppContext.Provider value={setInput}>
        <SearchContainer />
        <SearchResults 
         resultsFromApi={resultsFromApi}
         setUserDetails={setUserDetails}
         setDidClick={setDidClick}
         didClicked={didClicked}
         />
        <userDetails 
        userDetails={userDetails} 
        didClicked={didClicked}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
