// React Component <ProfileImage />

function ProfileImage(props) {
    return (
      <img
        src={ props.tweet.user.image }
        alt="example"
      />
    );
  }
  
  export default ProfileImage;

