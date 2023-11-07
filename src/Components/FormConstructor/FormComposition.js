import { useContext, useState } from "react";
import GetAuthorisationToken from "../APISkan/getAuthorisation";
import { AuthContext } from "../../Providers/AuthProvider";
import google from '../../images/Google.svg';
import facebook from '../../images/Facebook.svg';
import yandex from '../../images/Yandex.svg';
import { useNavigate } from "react-router-dom";


function FormComponent() {
    let isSignIn = window.location.pathname === '/sign-in' ? true : false;
    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const {isAuth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const sendAuthRequest = () => {
        const mockData = {
            login:'sf_student1',
            password:'4i2385j'
        }

        GetAuthorisationToken(mockData)
            .then((res) => {
                console.log(res.data);
                setAuth(!isAuth);
                localStorage.setItem('token', JSON.stringify(res.data))
                setErrorMessage('');
                navigate("/");
            })
            .catch(error => setErrorMessage(error.response.data.message))
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        updateSubmitButtonState(event.target.value, password);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        updateSubmitButtonState(inputValue, event.target.value);
    };

    const updateSubmitButtonState = (inputValue, password) => {
        const phoneRegex = /^(\+7|8)\d{10}$/;
        const minUsernameLength = 4;
          
        if ((phoneRegex.test(inputValue) || inputValue.length >= minUsernameLength) && password) {
          // Если данные валидны и пароль не пустой
          setSubmitButtonDisabled(false);
        } else {
          // Если хотя бы одно поле пустое или данные не валидны
          setSubmitButtonDisabled(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const phoneRegex = /^(\+7|8)\d{10}$/;
        const minUsernameLength = 4;
    

        if (phoneRegex.test(inputValue)) {
                  // Введен номер телефона
            setErrorMessage('');
            console.log('Номер телефона:', inputValue);
        } else if (inputValue.length >= minUsernameLength && !/^(\+7|8)/.test(inputValue)) {
                  // Введен логин
            setErrorMessage('');
            console.log('Логин:', inputValue, inputValue.length);
        } else {
                  // Введенное значение не соответствует ни номеру телефона, ни логину
            setErrorMessage('Введите корректные данные');
        }
        console.log('ui', !errorMessage)
        // if ((phoneRegex.test(inputValue) || inputValue.length >= minUsernameLength) && password) {
        if ((!errorMessage) && !!password) {
            sendAuthRequest();
          // Обработка отправки данных
            console.log('Данные успешно отправлены');
        } else {
            setErrorMessage('Заполните все поля формы');
            return;
        }
    };
    return (
            <form className="borders-shadow-form mb-80 span-3" onSubmit={handleSubmit}>
                <div className="displayFlexRow">
                    <a className={`authorisation inter-16-14 from-link ${isSignIn && 'from-link-active'}`} href='/sign-in'>Войти</a>
                    <a className=" from-link inter-16-14" href='tt'>Зарегистрироваться</a>
                </div>
                <InputForm 
                    value={inputValue} 
                    changeValue={handleInputChange} 
                    pass={password} 
                    changePassword={handlePasswordChange}
                    errorMessage={errorMessage}
                />
                <BtnForm submitButtonDisabled={submitButtonDisabled}/>
                <a href='#' className="get-new-pass mt-15">Восстановить пароль</a>
                <AutoLoginBtns/>
            </form>
  );
}
export default FormComponent;

function InputForm({ value, changeValue, pass, changePassword, errorMessage }) {
    let errorStyle = errorMessage.length ? 'error-input-shadow': '';
  return (

    <div className="wrapper-inputs">
      {/* <div> */}
        <fieldset>
          <legend className="inter-16-14">Логин или номер телефона: </legend>
          <input 
            onChange={(event)=>changeValue(event)}
            className={`inputForm login ${errorStyle}`}
            type="text"
            name="phone_number_or_login"
            placeholder="+7 (999) 999-99-99 or login"
            value={value}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </fieldset>
      {/* </div> */}
      
      {/* <div> */}
        <fieldset>
          <legend className="inter-16-14">Пароль:</legend>
          <input 
            className="inputForm"
            type="password" 
            name="password" 
            placeholder="pass" 
            value={pass}
            onChange={(event)=>changePassword(event)}
          />
        </fieldset>
      {/* </div> */}
    </div>
  );
}

function BtnForm({submitButtonDisabled}) {
  return (
    <input type='submit' className={` inter-16-14 style-btn btn-default ${ submitButtonDisabled && 'btn-disabled'}`} disabled={submitButtonDisabled} value='Войти'/>
  )
}

function AutoLoginBtns() {
  const iconsAutoLoginBtns = [google, facebook, yandex];
  return (
    <>
      <p className="inter-16-14">Войти через:</p>
      <div className="displayFlexRow mt-15">
        {iconsAutoLoginBtns.map((item) => (
          <button type='button' className="icon-btn-auth ">
            <img alt='icon' src={item}/>
          </button>
        ))}
      </div>
      

    </>
  );
}



  

