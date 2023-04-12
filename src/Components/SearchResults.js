

const SearchResults = (props) => {
  return (
    <div className="small-item-div">
      {props.resultsFromApi.map((user, i) => (i < 5 ? (
        <div className="small-result">
          <img className="small-pic" src={user.avatar_url} />
          <h1>{user.login}</h1>
        </div>
      ) : null))}
    </div>
  );

};

export default SearchResults;
