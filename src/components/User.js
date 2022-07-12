// React Component <UserData />

function UserData(userData) {
    return (
      <div>
        <span className="name"> { userData.name } </span>
        <span className="handle">{ userData.handle }</span>
      </div>
    );
  }
  
  export default UserData;

