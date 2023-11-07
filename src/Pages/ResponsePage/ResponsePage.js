import searchIntro from "../../images/search-intro.svg";
import SliderGeneralSummary from "../../Components/Slider/SliderGeneralSummary";
import { useContext } from "react";
import { DocumentsContext } from "../../Providers/DocumentsProvider";

function ResponsePage() {
    const { documents } = useContext(DocumentsContext);
    return (
        <main className="main">
            <div className="intro">
                <div className="intro-content inter-text-20">
                    <h1 className="ferry-h4 mb-20">
                        Ищем. Скоро <br />
                        будут результаты
                    </h1>
                    <p className="inter-text-20 mb-70">
                        Поиск может занять некоторое время, <br />
                        просим сохранять терпение.
                    </p>
                </div>
                <figure>
                    <img src={searchIntro} alt="searchIntro" className="pic1" />
                </figure>
            </div>
            <SliderGeneralSummary />

            <div>
                <h5 className="ferry-h5 mb-50">Список документов</h5>

                {documents.map((item) => (
                    <div className="borders-shadow-form">
                        <h3>{item.ok.content.text}</h3>
                        <div>
                            {new DOMParser().parseFromString(
                                item.ok.content.markup,
                                "text/xml"
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ResponsePage;
