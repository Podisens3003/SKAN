import axios from "axios";

const url = "https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms";

function GetAnalytics(
    params
) {
    const payload = {
        issueDateInterval: {
            startDate: params.startDate,
            endDate: params.endDate,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: params.inn,
                        maxFullness: params.maxFullness,
                        inBusinessNews: params.inBusinessNews,
                    },
                ],
                onlyMainRole: params.onlyMainRole,
                tonality: params.tonality,
                onlyWithRiskFactors: params.onlyWithRiskFactors,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                },
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            },
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        },
        attributeFilters: {
            excludeTechNews: !params.isTechNews,
            excludeAnnouncements: !params.isAnnouncement,
            excludeDigests: true,
        },
        similarMode: "duplicates",
        limit: params.limit,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
    };

    const bearerToken = JSON.parse(localStorage.getItem("token")).accessToken;
    const config = {
        headers: { Authorization: `Bearer ${bearerToken}` },
    };

    return axios.post(url, payload, config);
}

export default GetAnalytics;
