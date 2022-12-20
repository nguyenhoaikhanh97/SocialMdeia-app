import "./sidebar.css";
import { KeyboardArrowDown, LocalActivity ,Bookmark, People,Flag ,Diversity3, VideoLibrary,Storefront,Restore,PendingActions } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <People className="sidebarIcon"/>
            <span className="sidebarListIconText">Friend</span>
          </li>
          <li className="sidebarListItem">
            <PendingActions className="sidebarIcon"/>
            <span className="sidebarListIconText">History</span>
          </li>
          <li className="sidebarListItem">
            <Diversity3 className="sidebarIcon"/>
            <span className="sidebarListIconText">Group</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon"/>
            <span className="sidebarListIconText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon"/>
            <span className="sidebarListIconText">MarketPlace</span>
          </li>
          <li className="sidebarListItem">
            <Restore className="sidebarIcon"/>
            <span className="sidebarListIconText">Memmori</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListIconText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Flag className="sidebarIcon"/>
            <span className="sidebarListIconText">FanPages</span>
          </li>
          <li className="sidebarListItem">
            <LocalActivity className="sidebarIcon"/>
            <span className="sidebarListIconText">Event</span>
          </li>
        </ul>
        <div className="sidebarShowmore">
          <button className="sidebarButton">
            <KeyboardArrowDown className="sidebarShowmoreIcon"/>
          </button>
          <span className="sidebarShowmoreText">Show More</span>
        </div>
        
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Lukaku</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
