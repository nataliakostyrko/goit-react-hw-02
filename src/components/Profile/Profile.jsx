import React from "react";
import css from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={css.divProfile}>
    <div className={css.divCard}>
      <img className={css.imgUser} src={avatar} alt="User avatar" />
      <p className={css.pCardName}>{username}</p>
      <p className={css.pCard}>@{tag}</p>
      <p className={css.pCard}>{location}</p>
    </div>

    <ul className={css.ulStats}>
      <li className={css.liStats}>
        <span className={css.title}>Followers</span>
        <span className={css.info}>{followers}</span>
      </li>
      <li className={css.liStats}>
        <span className={css.title}>Views</span>
        <span className={css.info}>{views}</span>
      </li>
      <li className={css.liStats}>
        <span className={css.title}>Likes</span>
        <span className={css.info}>{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;