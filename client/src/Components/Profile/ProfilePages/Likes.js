import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { likeAndUnlike } from "../../../actions/auth";
import { getCity } from "../../../actions/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Likes = ({ likes, likeAndUnlike, getCity, history }) => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const [likeHovered, setLikeHoveres] = useState({
    item: null,
  });

  const handleMouseEnter = (index) => {
    if (likeHovered.item === index) return;
    setLikeHoveres({ item: index });
  };

  const handleMouseLevae = (index) => {
    if (likeHovered.item === index) {
      setLikeHoveres({ item: null });
    }
  };

  const handleShowCity = (country, state, city) => {
    getCity(country, state, city);
    history.push("/pollution");
  };

  const myLikes = likes.map((like, index) => (
    <div className="likes-item" key={index}>
      <div
        className="likes-item-icon"
        onClick={() =>
          likeAndUnlike(like.country, like.state, like.city, like.pl)
        }
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLevae(index)}
      >
        {likeHovered.item === index ? (
          <FontAwesomeIcon icon={faStarRegular} />
        ) : (
          <FontAwesomeIcon icon={faStarSolid} />
        )}
      </div>
      <div
        className="likes-item-text"
        onClick={() => handleShowCity(like.country, like.state, like.city)}
      >
        <h1>{like.pl.miasto}</h1>
        <p>
          {like.pl.panstwo} {"//"} {like.pl.stan}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="profile-title">Obserwowane Miasta</h1>
      <div className="likes-container">{myLikes}</div>
    </>
  );
};

Likes.propTypes = {
  likeAndUnlike: PropTypes.func.isRequired,
  getCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  likes: state.auth.user.likes,
});

export default connect(mapStateToProps, { likeAndUnlike, getCity })(
  withRouter(Likes)
);
