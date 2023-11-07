import { useContext } from "react";
import { HistogramsContext } from "../../Providers/HistogramsProvider";
import pic1 from "../../images/pic1.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // TODO: udolit'

// const mockBackendResponse = {
//     "data": [
//         {
//             "data": [
//                 {
//                     "date": "2023-10-01T03:00:00+03:00",
//                     "value": 1666
//                 },
//                 {
//                     "date": "2023-11-01T03:00:00+03:00",
//                     "value": 3911
//                 }
//             ],
//             "histogramType": "totalDocuments"
//         },
//         {
//             "data": [
//                 {
//                     "date": "2023-10-01T03:00:00+03:00",
//                     "value": 17
//                 },
//                 {
//                     "date": "2023-11-01T03:00:00+03:00",
//                     "value": 59
//                 }
//             ],
//             "histogramType": "riskFactors"
//         }
//     ]
// };

function Intro({ isAuth }) {
//   const navigate = useNavigate();

    // const { histograms, setHistograms } = useContext(HistogramsContext);

    return (
        <div className="intro mb-109">
            <div className="intro-content inter-text-20">
                <h1 className="ferry-h1 mb-20">
                    сервис по поиску <br />
                    публикаций <br />
                    о компании <br />
                    по его ИНН
                </h1>

                <p className="inter-text-20 mb-70">
                    Комплексный анализ публикаций, получение данных в формате
                    PDF на электронную почту.
                </p>
                {/* <button // TODO: udolit'
                    onClick={() => {setHistograms(mockBackendResponse); navigate('/search-response')}}
                    className="btn-default style-btn btn-fs-22-20 inter-text">
                        Ну типа запросить данные
                </button> */}
                {isAuth && (
                    <button className="btn-default style-btn btn-fs-22-20 inter-text">
                        <Link to="/search">Запросить данные</Link>
                    </button>
                )}
            </div>
            <figure>
                <img src={pic1} alt="pic1" className="pic1" />
            </figure>
        </div>
    );
}
export default Intro;
