import { useContext, useEffect, useRef, useState } from 'react';
import './styleSlider.css';
import Loader from '../ComponentsOfEachPage/Loader';
import { HistogramsContext } from '../../Providers/HistogramsProvider';
// import arrowPrev from '../../images/arrow.svg'
// import arrowNext from '../../images/arrow-next.svg'


const SliderGeneralSummary = () => {
    const sliderTrack = useRef(null );
    const [slides, setSlides] = useState(null);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const [position, setPosition] = useState(0);
    const { histograms } = useContext(HistogramsContext);

    useEffect(() => {
        console.log('result histo', histograms);
        setSlides(histograms)
    }, [histograms]);

    useEffect(()=>{
       
        let sliderItems = sliderTrack?.current?.childNodes;
        if(!!sliderItems){
            sliderItems.forEach((elem) => {
                elem.style = `transform: translateX(${position}px)`
            });
        }
    },[sliderTrack, position])
    
    const prevHandler = () => {
        console.log('pos prev', position)
        if(position >= 0) {
            setPrev(true);
        } else {
            setPosition(position+137)
            setPrev(false);
        }
    };
    
    const nextHandler = () => {
        if(position <= -(slides.length*137-sliderTrack.current.offsetWidth)){
            setNext(true);
            setPrev(false);
        }else{
            setPrev(false);
            setPosition(position-137);
        }
    };
    return(
        <div className='mb-109'>
            <div className='mb-20'>
                <h5 className='ferry-h5 mb-17'>Общая сводка</h5>
                <p style={{color: '#949494'}} className='inter-text-18'>Найдено {!!slides && slides.reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0)} вариантов</p>
            </div>
            <div className='slider-container'>
                <div className='header-slider slide-flex-center inter-text-20'>
                    <span className='header-slider-title'>Период</span>
                    <span className='header-slider-title'>Всего</span>
                    <span className='header-slider-title'>Риски</span>
                </div>
                <div className="slider-containerTrack" ref={sliderTrack}>
                    {!!slides && slides.map((item) => (
                        <div key={item.value} className="slider-item slide-flex-center inter-text-18">
                            <span >{item.date}</span>
                            <span >{item.value}</span>
                            <span >{item.riskFactors}</span>
                        </div>
                    )) || <div className='loader-container'><Loader></Loader><span className='inter-text-18'>Загружаем данные</span></div>}
                </div>
                <button className='slider-button button-prev' onClick={prevHandler} disabled={prev}></button>
                <button className='slider-button button-next' onClick={nextHandler} disabled={next}></button>

            </div>
        </div> 
    )
}
export default SliderGeneralSummary;