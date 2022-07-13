import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
	return (
		<div className="tweet">
			<ProfileImage image={props.tweet.user.image} />

			<div className="body">
				<div className="top">
					<User userData={props.tweet.user} />
					<Timestamp time={props.tweet.timestamp} />
				</div>

				<Message message={props.tweet.message} />
				<Actions />
			</div>

			<a href="/">
				<i class="fa fa-ellipsis-h" aria-hidden="true" />
			</a>
		</div>
	);
}

export default Tweet;