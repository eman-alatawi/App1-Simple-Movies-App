import React from 'react'
import Movie from './Movie'
import movies from '../moviesData'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
`


const MoviesList = () => {

  const moviesList = movies.map(movie => (
    <Movie key={movie.movie_id} movie={movie}/>
  ))

  // const findMovies = movies.filter(movie => movie.release_Date === 2022)

  // const moviesList = findMovies.map(movie => (
  //   <Movie key={movie.movie_id} movie={movie}/>
  // ))
  
  return (
    <Container>
      {moviesList}
    </Container>
  )
}



export default MoviesList