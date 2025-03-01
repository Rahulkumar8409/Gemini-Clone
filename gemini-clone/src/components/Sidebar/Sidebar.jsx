import React, { useContext, useState } from "react";

import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../contex/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPromt,newChat}=useContext(Context)

  const loadPrompt=async(prompt)=>{
    setRecentPromt(prompt);
    await onSent(prompt);
  }




  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
        ></img>
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon}></img>
          {extended ? <p>new chat</p> : null}
        </div>
        {extended ? 
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon}></img>
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
         : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon}></img>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon}></img>
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
