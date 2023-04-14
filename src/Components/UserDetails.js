import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const AmountOfSomeData = (props) => {
  return (
    <div className="row-in-ud">
      <h1 className="text-in-user-details">{props.amount}</h1>
      <h1 className="text-in-user-details">{props.name}</h1>
    </div>
  );
};

const UserDetails = (props) => {
  if (props.didClicked) {
    return (
      <div className="user-details-container">
        <img className="imgInDetails" src={props.userDetails.avatar_url} />
        <h1 class="text-in-user-details row-in-ud">
          {props.userDetails.login} / {props.userDetails.name}
        </h1>
        <div className="components-div-in-ud">
          <AmountOfSomeData
            amount={props.userDetails.followers}
            name="Followers"
          />
          <AmountOfSomeData
            amount={props.userDetails.following}
            name="Following"
          />
          <AmountOfSomeData
            amount={props.userDetails.public_repos}
            name="Repositories"
          />
        </div>
        <a href={`https://twitter.com/${props.userDetails.twitter_username}`}>
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href={props.userDetails.html_url}>
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </div>
    );
  } else return null;
};
export default UserDetails;
