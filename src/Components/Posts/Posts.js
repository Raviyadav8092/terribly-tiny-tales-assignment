import React, { useState, useEffect } from "react";
import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); 
        const data = await response.json();
        setPosts(data.posts);
        setProfile(data.profile);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const numberOfPosts = posts.length;

  return (
    <div className="container-fluid" id="top">
      <hr />
      <div className="container">
        <h3 id="po">{numberOfPosts} Posts</h3>
        {posts.map((post) => (
          <>
            <div className="row" id="map">
              <div className="col-11">
                <h3>{post.title}</h3>
              </div>
              <div className="col-1 text-end">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  style={{ color: "#fdf50d" }}
                />
              </div>
            </div>
            <div className="col-12" id="content">
              <p>{post.content}</p>
            </div>
            <div className="row">
              <div className="col-5">
                <p id="byname">
                  <span id="by">thought by</span> {profile.name}
                </p>
              </div>
              <div className="col-7 text-end">
                <p id="details">
                  {post.date +
                    " . " +
                    post.read_time +
                    " Read . " +
                    post.views +
                    " Views"}
                </p>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts;
