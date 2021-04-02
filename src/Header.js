import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptonsOutllinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt="fb-logo"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook " />
        </div>
      </div>
      <div className="header__middle">
        <div className="header_options header_options--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_options">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_options">
          <SubscriptonsOutllinedIcon fontSize="large" />
        </div>
        <div className="header_options">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_options">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header_info">
          <Avatar src="data:image/jpeg;base64,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" />
          <h4>Sejal Narigara</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
