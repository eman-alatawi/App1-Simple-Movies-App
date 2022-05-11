import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
const Container = styled.div`
  background-color: #fff;
  width: 20rem;
  height: 35rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h4 {
    text-align: center;
  }

  p {
    height: 8rem;
    overflow-y: scroll;
    padding: 1rem;
    text-align: justify;
    line-height: 2.2rem;
  }
`;

const ImageConatiner = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;
  }
`;

const Movie = ({ movie }) => {
  return (
    <Container>
      <h4>
        {movie.title} | {movie.release_Date}
      </h4>
      <ImageConatiner>
        <img src={movie.poster_src} />
      </ImageConatiner>
      <p>{movie.description}</p>
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired, 
}

Movie.defaultProps = {
  movie: {
    movie_id: 0,
    title: "Default Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnum quam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil",
    release_Date: 2000,
    poster_src: "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg",
  }
}

export default Movie;
