
import { AppContext } from "../App.js";

const SearchContainer = () => {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search GitHub User..."
            className="search-input"
            onChange={(e) => value(e.target.value)}
          ></input>
          <button className="search-btn btn btn-dark">Search</button>
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default SearchContainer;
