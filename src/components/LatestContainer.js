import React from 'react';
import Latest from './Latest';
import LatestTitle from './LatestTitle';
import PostBox from './PostBox';
import PageNumber from './PageNumber';
import "bootstrap"

const LatestContainer = ({movies ,getPage, pageCount}) => {
  return (
    <section id="latest">
      <LatestTitle/>
      <div className="post-container">
        {
          movies.length >=1 ? (
            movies.map((mov) =>{
              return(<PostBox key={mov.id} mov={mov}/>)
            })
          ): <h1 className='text-danger'>Not Found Data</h1>
        }
        
      </div>
      {
        movies.length ? (<PageNumber getPage={getPage} pageCount={pageCount}/>) : null
      }
      
    </section>
  )
}

export default LatestContainer
