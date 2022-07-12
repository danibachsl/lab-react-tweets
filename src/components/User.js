// React Component <UserData />

function UserData(props) {
    return (
      <div>
        <span className="name"> { props.tweet.user.name } </span>
        <span className="handle">{ props.tweet.user.handle }</span>
      </div>
    );
  }
  
  export default UserData;

