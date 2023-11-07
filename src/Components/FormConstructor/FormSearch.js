import moment from "moment/moment";
import { useEffect, useState } from "react";
import { checkboxesData } from "./checkboxesData";
import GetAnalytics from "../APISkan/getAnalytics";
import { useNavigate } from "react-router-dom";
import GetIdDocuments from "../APISkan/getIdDocuments";

function FormSearch({setHistograms, setIdDocuments}) {
  const [inn, setInn] = useState("");
  const [errorMessageINN, setErrorMessageINN] = useState("");

  const [limit, setLimit] = useState("");
  const [errorMessageLimit, setErrorMessageLimit] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessageDate, setErrorMessageDate] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const checkboxesValue = {
    maxFullness: null,
    inBusinessNews: null,
    onlyMainRole: null,
    onlyWithRiskFactors: null,
    isTechNews: null,
    isAnnouncement: null,
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(checkboxesValue);
    sendSearchRequest();
  };

  const sendSearchRequest = ()=>{
    const params = {
      startDate: moment(startDate).format(),
      endDate: moment(endDate).format(),
      inn: inn,
      limit: +limit,
      tonality: document.querySelector('select').value,
      ...checkboxesValue
    }
    GetIdDocuments(params)
    .then((res)=>{
      setIdDocuments(res)
    })
    .catch(error=> console.log(error))

    GetAnalytics(params)
      .then((res)=>{
        setHistograms(res.data);
        navigate('/search-response')
      })
      .catch(error => setErrorMessageINN(error.response.data.message))
      
  };

  useEffect(() => {
    if (!!inn && !!limit && !!startDate && !!endDate) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [inn, limit, startDate, endDate]);

  const handleVadidateInn = (event) => {
    setInn(event.target.value);

    if (validateINN(event.target.value)) {
      console.log("ИНН валиден");
      setErrorMessageINN("");
      return true;
    } else {
      setErrorMessageINN("ИНН невалиден");
      return false;
    }
  };

  const handleVadidateLimit = (event) => {
    if (0 < +event.target.value && +event.target.value <= 1000) {
      console.log("Лимит валиден");
      setLimit(event.target.value);
      setErrorMessageLimit("");
      return true;
    } else {
      setErrorMessageLimit("Лимит невалиден");
      return false;
    }
  };

  const handleVadidateDate = (start, end) => {
    let now = new Date();
    setStartDate(start);
    setEndDate(end);
    console.log("startDate 2 i", moment(start).format());
    console.log("endDate 2 i", moment(end).format());
    if (
      Date.parse(now) >= Date.parse(start) &&
      Date.parse(now) >= Date.parse(end) &&
      Date.parse(start) < Date.parse(end)
    ) {
      setErrorMessageDate("");
      return true;
    } else {
      setErrorMessageDate("Введите корректные данные");
      return false;
    }
  };
  
  return (
    <>
      <form
        className="inter-text-18 borders-shadow-form mb-80 center grid-two-col "
        onSubmit={handleSubmit}
      >
        <div className="wrapper-inputs">
          <fieldset>
            <legend>ИНН компании*</legend>
            <input
              type="number"
              className={!!errorMessageINN ? ("inputForm mb-30 error-input-shadow") : ("inputForm mb-30")}
              value={inn}
              onChange={handleVadidateInn}
            />

            {!!errorMessageINN && (
              <p style={{ color: "red" }}>{errorMessageINN}</p>
            )}
          </fieldset>

          <fieldset>
            <legend>Тональность</legend>
            <select className="inputForm mb-30">
              <option value="any" selected>
                Любая
              </option>
              <option value="negative">позитивная</option>
              <option value="positive">негативная</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Количество документов в выдаче *</legend>
            <input
              type="number"
              className={!!errorMessageLimit ? ("inputForm mb-30 error-input-shadow") : ("inputForm mb-30")}
              value={limit}
              onChange={handleVadidateLimit}
            />

            {!!errorMessageLimit && (
              <p style={{ color: "red" }}>{errorMessageLimit}</p>
            )}
          </fieldset>

          <fieldset>
            <legend>Диапазон поиска</legend>
            <div className="grid-two-col gap-col-20">
              <div>
                <input
                  type="date"
                  id="start-date"
                  className={!!errorMessageDate ? ("inputForm mb-30 error-input-shadow") : ("inputForm mb-30")}
                  value={startDate}
                  onChange={(e) => handleVadidateDate(e.target.value, endDate)}
                />
              </div>
              <div>
                <input
                  type="date"
                  id="end-date"
                  className={!!errorMessageDate ? ("inputForm mb-30 error-input-shadow") : ("inputForm mb-30")}
                  value={endDate}
                  onChange={(e) => handleVadidateDate(startDate, e.target.value)}
                />
              </div>
              
            </div>
            {!!errorMessageDate && (
              <p style={{ color: "red" }}>{errorMessageDate}</p>
            )}
          </fieldset>
        </div>

        <div className="search-second-col">
          <div className="wrapper-checkboxes">
            {checkboxesData.map((item) => (
              <div className="mb-20">
                <input
                  type="checkbox"
                  name={item.name}
                  // className={checkboxesValue[item.name] ? ("inputForm ml-17") : ("inputForm mb-30")}
                  onChange={(event) => {
                    checkboxesValue[item.name] = event.target.checked;
                  }}
                />
                <label htmlFor={item.name} 
                  className="ml-17"
                 >{item.description}</label>
              </div>
            ))}
          </div>
          <div className="search-second-col">
            <input
              type="submit"
              className={` mb-20 inter-16-14 style-btn btn-default ${
                submitButtonDisabled && "btn-disabled"
              }`}
              disabled={submitButtonDisabled}
            ></input>
            <span className="caption">* Обязательные к заполнению поля</span>
          </div>
          
        </div>
      </form>
    </>
  );
}

export default FormSearch;

function validateINN(inn) {
  const innRegex = /^(?:(\d{10})|(\d{12}))$/;
  console.log(inn.length);
  if (!innRegex.test(inn)) {
    return false;
  }

  const coefficients = [[2, 4, 10, 3, 5, 9, 4, 6, 8], [7, 2, 4, 10, 3, 5, 9, 4, 6, 8], [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]];

  let lengthINN = inn.length;
 

  const controlSum = (inn, lengthINN, coefficientUsed) => (
    String(inn
      .slice(0, lengthINN)
      .split("")
      .map(Number)
      .reduce((acc, digit, index) => acc + digit * coefficientUsed[index], 0) %
    11)
  )

  if (inn.length === 12){
    const lastDigit1 = inn[inn.length - 1];
    const lastDigit2 = inn[inn.length - 2];
    const controlSum1 = [];
    for(let i = 1; i <= 2; i++){
      controlSum1.push(controlSum(inn, lengthINN-i, coefficients[3-i]))
      // console.log('controlSum1', controlSum1, 'lastDigit1', lastDigit1, 'lastDigit2', lastDigit2)
    }
    return controlSum1[0][controlSum1[0].length-1] === lastDigit1 && controlSum1[1][controlSum1[1].length - 1] === lastDigit2
  } else if (inn.length === 10){
    // console.log('controlSum10', controlSum(inn, lengthINN-1, coefficients[0]), 'lastDigit1', inn[inn.length-1])
    let controlSum1 = controlSum(inn, lengthINN-1, coefficients[0]);
    return  controlSum1[controlSum1.length - 1]=== inn[inn.length-1];
  } else {
    return false;
  }
 
}
