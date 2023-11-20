import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faEye,
  faHeart,
  faGem,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

function About() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        setProfile(data.profile);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);
  const style = {
    height: "250px",
  };
  return (
      <>
      <img
        src={profile.background}
        class="img-fluid col-12 img-height-md"
        style={style}
        alt="background"
      ></img>
    <div className="container-fluid">
      
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img
                src={profile.pic}
                className="img-fluid col-8"
                id="image"
                alt="Responsive image"
              />
            </div>
            <div className="col-7" id="name">
              <p className="h3">
                {profile.name}{" "}
                <FontAwesomeIcon icon={faGem} style={{ color: "#7808b5" }} />{" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ "--fa-secondary-color": "#08e7f7" }}
                />
              </p>
              <div className="row">
                <div className="col-4">
                  <button type="button" className="btn btn-secondary bot">
                    {profile.followers}
                  </button>
                  <p className="h6">Followers</p>
                </div>
                <div className="col-4 text-center">
                  <button type="button" className="btn btn-secondary bot">
                    {profile.following}
                  </button>
                  <p className="h6">Following</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container" id="position">
            <p className="h4">{profile.position}</p>
            <p>
              <a
                class="link-offset-2 link-underline link-underline-opacity-0"
                href="#"
              >
                {profile.link}
              </a>
            </p>
            <div className="row">
              <div className="col-2 likes">
                <FontAwesomeIcon icon={faStar} style={{ color: "#276fec" }} />
                {" " + profile.stars}
              </div>
              <div className="col-2 likes">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  style={{ color: "#fdf50d" }}
                />
                {" " + profile.likes}
              </div>
              <div className="col-2 likes">
                <FontAwesomeIcon icon={faEye} />
                {" " + profile.views}
              </div>
              <div className="col-2 likes">
                <FontAwesomeIcon
                  icon={faHeart}
                  beatFade
                  style={{ color: "#ec0404" }}
                />
                {" " + profile.hearts}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
export default About;
