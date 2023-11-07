import { createContext, useState } from "react";
import GetDocuments from "../Components/APISkan/getDocuments";

export const DocumentsContext = createContext();

const DocumentsProvider = ({ children }) => {
    const [documents, setDocuments] = useState([]);
    const [idDocuments, setIdDocuments] = useState([]);


    const onSetId = (payload) => {
        let idDocumentsArray = [];
        payload.data.items.forEach((documentInfo) => {
            idDocumentsArray.push(documentInfo.encodedId)
        });
        setIdDocuments(idDocumentsArray);
        GetDocuments(idDocumentsArray)
        .then((res)=>{
            console.log('docs', res.data);
            setDocuments(res.data)
        })
        .catch(error => console.log(error))
    };

    return (
        <DocumentsContext.Provider
            value={{
                idDocuments,
                setIdDocuments: (data) => onSetId(data),
                documents,
                setDocuments,
            }}
        >
            {children}
        </DocumentsContext.Provider>
    );
};
export default DocumentsProvider;
