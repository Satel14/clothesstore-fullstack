import React from 'react'
import '../../style/style.scss'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home_page">
            <img src="https://static.wixstatic.com/media/84770f_b0d1ca3c05e149bba7b5162140ff3356~mv2.jpg/v1/fill/w_1743,h_859,fp_0.33_0.2,q_90/84770f_b0d1ca3c05e149bba7b5162140ff3356~mv2.jpg" alt="main" />
            <div className="page_second">
            <Link to="/product" className="button_page">В магазин</Link>
            </div>
        </div>
        
    )
}

export default Home
