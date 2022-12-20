import "./online.css";


export default function Online({user}) {
  return (
    <li className="rightbarList">
        <div className="rightbarProfileImgContent">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
