import FormSearch from "../../Components/FormConstructor/FormSearch";
import "../../Components/FormConstructor/Form.css";
import search from '../../images/searchForm.svg'
import { HistogramsContext } from "../../Providers/HistogramsProvider";
import { useContext } from "react";
import { DocumentsContext } from "../../Providers/DocumentsProvider";

function SearchPage() {
  const {setHistograms} = useContext(HistogramsContext);
  const {setIdDocuments} = useContext(DocumentsContext);


    return (
        <>
            <main className="main">
                <h2 className="ferry-h2 mb-25">
                Найдите необходимые <br/> данные в пару кликов.
                </h2>
                <p className="btn-fs-20-18 mb-50 inter-text-20">
                    Задайте параметры поиска.
                    <br />
                    Чем больше заполните, тем точнее поиск
                </p>
                <div className='displayFlexRow'>
                    <FormSearch setHistograms={setHistograms} setIdDocuments={setIdDocuments}/>
                    <img alt='search' src={search}/>
                </div>
                
            </main>
        </>
    );
}
export default SearchPage;
