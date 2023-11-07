import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dataSlider from './dataSlider';
import './styleSlider.css';


function Karousel() {
    const data = dataSlider.map(item => (
            <div key={item.id} className="slider">
                <div className="slider-top">
                    <img src={item.path} alt={item.iconAlt}/>
                </div>
            <div className='slider-bottom'><p>{item.benefit}</p></div>
            </div>  
    ));
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1224,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          
        ]
    };
    // console.log(data);
    return (
        <div className='wrapper-slider mb-50'>
            <Slider {...settings}>
                {data}
                {data}
            </Slider>
        </div>
    )
}

export default Karousel;

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "block",
        opacity: "1",
      }}
      onClick={onClick}
    />
  );
}