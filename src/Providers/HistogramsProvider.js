import moment from "moment";
import { createContext, useState } from "react";

export const HistogramsContext = createContext();

const HistogramsProvider = ({ children }) => {
    const [histograms, setHistograms] = useState([]);

    const onSetHistograms = (payload) => {
        let resultHistogramsData = [];

        payload.data.forEach((histogramGroup) => {
            if (histogramGroup.histogramType === "totalDocuments") {
                resultHistogramsData = [...histogramGroup.data];
            }

            if (histogramGroup.histogramType === "riskFactors") {
                resultHistogramsData.forEach((totalDocumentsHistogram) => {
                    histogramGroup.data.forEach((riskFactorsHistogram) => {
                        if (
                            totalDocumentsHistogram.date ===
                            riskFactorsHistogram.date
                        ) {
                            totalDocumentsHistogram.riskFactors =
                                riskFactorsHistogram.value;
                        }
                    });
                });
            }
        });

        resultHistogramsData = resultHistogramsData
            .map((histogram) => ({
                ...histogram,
                date: moment(histogram.date).format("MM-DD-YYYY"),
            }))
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        setHistograms(resultHistogramsData);
    };

    return (
        <HistogramsContext.Provider
            value={{
                histograms,
                setHistograms: (data) => onSetHistograms(data),
            }}
        >
            {children}
        </HistogramsContext.Provider>
    );
};
export default HistogramsProvider;
