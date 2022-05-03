import React from 'react'
import "./newsfeed.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function NewsFeed() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='title'>Crypto Dashboard</div>
    <hr className='Separation'></hr>
    <h2>News Feed</h2>

        <Slider {...settings}>

        <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
  
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div> 
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div> 
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
  <div className='card'>
            <img className='wid' src="https://dltlabsweb-media.s3.amazonaws.com/images/Teck news post  Mining3-e1ca2c25-6992-44d7-b827-27090ce64425.png"></img>
          <div class="container">
    <h4><b>Teck partners on germanium traceability initiative with DLT Labs</b></h4> 
    <p>Teck Resources is the latest company to explore the use of blockchain technology to track minerals through the supply chain, from production to final product. The diversified miner is teaming up with Toronto-based DLT Labs to trace germanium, a critical mineral that is found at Teck’s Red Dog zinc-lead mine in Alaska. The pilot project will support Teck’s sustainability strategy goal to develop a product passport, providing traceability into the raw materials supply chain beyond Germanium.</p> 
  </div>
  </div>
        </Slider>
    </>
  )
}

export default NewsFeed