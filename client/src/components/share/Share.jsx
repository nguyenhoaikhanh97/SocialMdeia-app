import "./share.css";
import {PermMedia,EmojiEmotions,VideoCall,Movie} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input type="text" className="shareInput" placeholder="What's your mind?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCall htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Live</span>
            </div>
            <div className="shareOption">
              <Movie htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Video</span>
            </div>
            <div className="shareOption">
              <PermMedia htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Photo</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="yellow" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
