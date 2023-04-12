import axios from "axios";

const SearchResults = (props) => {
    const getUserDetails = (url) => {
       axios
        .get(url)
        .then((res) => {
            props.setUserDetails(res.data);
            if(props.didClicked === false)
            props.setDidClick(true);
          });
    }
  return (
    <div className="small-item-div">
      {props.resultsFromApi.map((user, i) =>
        i < 5 ? (
          <div className="small-result" onClick={() => getUserDetails(user.url)}>
            <img className="small-pic" src={user.avatar_url} />
            <h1>{user.login}</h1>
          </div>
        ) : null
      )}
    </div>
  );
};

export default SearchResults;
