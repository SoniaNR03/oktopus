import React, { PureComponent } from "react";
import profileIcon from "../../assets/icons/profile-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

// Profile Component
function handleProfilePress() {
  console.log("Profile Pressed");
}
type Props_profile = {
  name: string;
  email: string;
};

type Props_addProfileButton = {
  handleAddProfile: () => void;
};

function Profile({ name, email }: Props_profile) {
  return (
    <div className="profile-button" onClick={handleProfilePress}>
      <img className="profile_icon" src={profileIcon} height="86" width="86" />
      <div className="text-profile-container">
        <p className="h3_regular">{name}</p>
        <p className="h3_regular">{email}</p>
      </div>
    </div>
  );
}

// Profile Button Component
function AddProfileButton({ handleAddProfile }: Props_addProfileButton) {
  return (
    <div className="profile-button" onClick={handleAddProfile}>
      <img
        className="profile_icon"
        src={addIcon}
        height="86"
        width="86"
        alt="Add Icon"
      />
      <div className="text-profile-container">
        <p className="h3_regular">Add User</p>
      </div>
    </div>
  );
}

export default function Accounts() {
  const [ProfileList, setProfileList] = useState<Props_profile[]>([]);
  const navigate = useNavigate();

  function handleAddProfile() {
    navigate("/login");

    const newProfile = {
      name: "New User",
      email: "newUser@gmail.com",
    };
    setProfileList([...ProfileList, newProfile]);
  }

  const [WHeight, setWHeight] = useState(
    window.innerHeight - (24 * 2 + 24 * 2 + 16 * 2 + 168)
  );

  const handleResize = () => {
    const newWHeight = window.innerHeight - (24 * 2 + 24 * 2 + 16 * 2 + 168);
    setWHeight(newWHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  window.addEventListener("resize", handleResize);
  return (
    <div className="account_container">
      <ul className="profile_side">
        <h2 className="h2_heavy" id="account_title">
          Account
        </h2>
        <hr />
        <div
          className="profile_list_i"
          style={{
            maxHeight: `${WHeight}px`,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflowY: "scroll",
          }}
        >
          {" "}
          {ProfileList.map((profile: Props_profile) => (
            <li key={profile.email}>
              <Profile name={profile.name} email={profile.email} />
            </li>
          ))}
        </div>
      </ul>
      <AddProfileButton handleAddProfile={handleAddProfile} />
    </div>
  );
}
