// React Component <Message />

function Message(props) {
    return (
        <div>
            <span className="message"> { props.tweet.message } </span>
        </div>
    );
}

export default Message;

