import React from 'react'
import "./SearchPage.css"
import { useStateValue } from './StateProvider';
import useGoogle from './useGoogle';
import { Link } from 'react-router-dom'
import Search from './Search';
import Response from './response'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogle(term);
  // let dataB = Response;
  // console.log(Response)
  
  // console.log(Response.items)


  return (
    <>
      <div className="searchPage">
        <div className="page-header">
          <Link to='/'>
            <img className="imgscr" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
          </Link>
          <div className='header-body'>
            <Search val />
            <div className="search-options">
              <div className="option-left">
                <div className="option">
                  <SearchIcon />
                  <Link to="/all">
                    All
                  </Link>
                </div>
                <div className="option">
                  <DescriptionIcon />
                  <Link to="/description">
                    News
                  </Link>
                </div>
                <div className="option">
                  <ImageIcon />
                  <Link to="/image">
                    Images
                  </Link>
                </div>
                <div className="option">
                  <LocalOfferIcon />
                  <Link to="/shop">
                    Shop
                  </Link>
                </div>
                <div className="option">
                  <LocationOnIcon />
                  <Link to="/Location">
                    Maps
                  </Link>
                </div>
                <div className="option">
                  <MoreVertIcon />
                  <Link to="/more">
                    More
                  </Link>
                </div>
              </div>
              <div className="option-right">
                <div className="option">
                  <Link to="/setting">Settings</Link>
                </div>
                <div className="option">
                  <Link to="/tool">Tools</Link>
                </div>
              </div>
            </div>
          </div>

        </div>


        {term && (
        <div className="page-result">
          <p className="result-count">About 2,94,00,00,000 result ({data?.searchInformation.formattedSearchTime} seconds) for  </p>

          {data?.items.map((item, id) =>{
            return(
              <div className='search-result'>
              <a href={item.link}>
              {item.displayLink}
              </a>
              <a className='result-title' href={item.link}>
              {item.title}
              </a>
              <p className='result-snippet'>{item.snippet}</p>


              </div>
            )
          })}
    
        </div>

        )}
      </div>
    </>
  )
}

export default SearchPage