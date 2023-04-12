const AmountOfSomeData = (props) => {
 return (<div>
    <h1>{props.amount}</h1>
    <h1>{props.name}</h1>
  </div>
  );
};

const UserDetails = (props) => {
  if(props.didClicked) {
  return (
    <div>
      <img src={props.userDetails.avatar_url} />
      <h1>
        {props.userDetails.login} / {props.userDetails.name}
      </h1>
      <AmountOfSomeData amount={props.userDetails.followers} name="Followers" />
      <AmountOfSomeData amount={props.userDetails.following} name="Following" />
      <AmountOfSomeData
        amount={props.userDetails.public_repos}
        name="Repositories"
      />
    </div>
  );
 } else return null
};
export default UserDetails;
