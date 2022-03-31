import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from "./Search"

const Home = ()=>{
    return(
        <>
        <div className="home">
       

        <div className="home-header">
        <div className="header-left">
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        </div>
        
        <div className="header-right">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon/>
        <AccountCircleIcon/>
        </div>
       


        </div>

        <div className="home-body">
        
        <img className="imgscr" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"  alt="" />

        
        
       
        <Search />
       
        
        </div>
        </div>
       

        </>
    )
}

export default Home;