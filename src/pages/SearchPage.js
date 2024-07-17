import React from 'react'
import { Container, MoviesContent } from '../components/Main'
import { useSelector } from 'react-redux'

const SearchPage = () => {
  const searchData = useSelector((state)=>state.search.req);

    
  return (
    <>
     
        <div className="bg-black py-40 bg-opacity-90">
          <Container>
            <MoviesContent
              searchData={searchData}
              className={" grid grid-cols-2 gap-5 pr-10"}
            />
          </Container>
        </div>
    </>
  );
}

export default SearchPage
