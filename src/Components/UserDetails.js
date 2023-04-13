import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
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
    <div className="user-details-container">
      <img className="imgInDetails"src={props.userDetails.avatar_url} />
      <h1>
        {props.userDetails.login} / {props.userDetails.name}
      </h1>
      <AmountOfSomeData amount={props.userDetails.followers} name="Followers" />
      <AmountOfSomeData amount={props.userDetails.following} name="Following" />
      <AmountOfSomeData amount={props.userDetails.public_repos} name="Repositories"/>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
 } else return null;

 
};
export default UserDetails;
