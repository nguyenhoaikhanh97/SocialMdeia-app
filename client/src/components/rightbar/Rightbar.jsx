import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>D. De Ruy</b> and <b>3 other friends </b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAds" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((e) =>(
            <Online key = {e.id} user = {e} />
          ))};
        </ul>
      </div>
    </div>
  )
}
