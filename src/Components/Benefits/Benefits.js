import Karousel from "../Slider/Slider";
import pic2 from '../../images/pic2.svg'

function Benefits() {
    return(
        <div className="benefits inter-text">
            <h3 className="ferry-h3 mb-50">
                Почему именно мы
            </h3>
            <Karousel/>
            <img className="pic2" alt="pic2" src={pic2}/>
        </div>
    )
}

export default Benefits;