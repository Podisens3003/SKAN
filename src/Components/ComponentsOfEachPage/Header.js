import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import logoW from "../../images/logoWhite.svg";
import avatar from "../../images/avatar.svg";
import menu from "../../images/menu-mobil.svg";
import close from "../../images/close.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "./Loader";

function Header() {
  const navItem = ["Главная", "Тарифы", "FAQ"];
  const links = ["/", "/sign-in", ""];
  const { isAuth, setAuth } = useContext(AuthContext);
  let userName = "Алексей А.";
  let logMassage = "success routing";

  return (
    <header>
      <div className="header">
        <Logo img={logo} alt={"logotype"} />

        <div className="desktop-link-wrapper">
          <NavigationBar
            navItem={navItem}
            linkItem={links}
            clickLink={() => console.log(logMassage)}
            open={logMassage}
          />
          {isAuth && <CompanyLimitInfo />}
          {(isAuth && (
            <UserInfo name={userName} isAuth={isAuth} setAuth={setAuth} />
          )) || (
            <LoginToAccount
              clickLink={() => console.log(logMassage)}
              open={logMassage}
            />
          )}
        </div>

        <div className="mobile-link-wrapper">
          {isAuth && <CompanyLimitInfo />}
          <ModalWindow
            navItem={navItem}
            linkItem={links}
            isAuth={isAuth}
            setAuth={setAuth}
            name={userName}
          />
        </div>
      </div>
    </header>
  );
}

export function Logo({ img, alt }) {
  return <img className="logo" src={img} alt={alt} />;
}

function CompanyLimitInfo() {
  return (
    <div className="info-limit">
      <Loader/>
    </div>
  );
}

function UserInfo({ name, isAuth, setAuth }) {
  return (
    <div className="avatar-wrapper">
      <div>
        <span>{name}</span>
        <LogOut isAuth={isAuth} setAuth={setAuth} />
      </div>

      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

function ModalWindow({ navItem, linkItem, isAuth, setAuth, name }) {
  const [open, setOpen] = React.useState(false);
  const closeModalOnclick = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="menu modal-window">
      <button className="menu-btn" onClick={closeModalOnclick}>
        <img alt="menu" src={menu} />
      </button>
      {open && (
        <div className="overlay">
          <Logo img={logoW} alt={"logotype"} />
          <button className="menu-btn" onClick={closeModalOnclick}>
            <img alt="close" src={close} />
          </button>

          <div className="modal">
            <NavigationBar
              navItem={navItem}
              linkItem={linkItem}
              clickLink={closeModalOnclick}
              open={open}
            />
          </div>
          {(isAuth && (
            <UserInfo name={name} isAuth={isAuth} setAuth={setAuth} />
          )) || <LoginToAccount clickLink={closeModalOnclick} open={open} />}
        </div>
      )}
    </div>
  );
}

function NavigationBar({ navItem, linkItem, clickLink, open }) {
  let links = navItem.map((navTitle, index) => (
    <li key={linkItem[index]} className="nav-item">
      <Link to={linkItem[index]} onClick={() => clickLink(open)}>
        {navTitle}
      </Link>
    </li>
  ));

  return <ul className="nav-bar">{links}</ul>;
}

function LoginToAccount({ clickLink, open }) {
  return (
    <div className="login-to-account">
      <Link to="/sign-in" className="registration">
        Зарегистрироваться
      </Link>
      <div className="separator" />
      <button className="sign-in-btn main-text-style">
        <Link to="/sign-in" onClick={() => clickLink(open)}>
          Войти
        </Link>
      </button>
    </div>
  );
}

function LogOut({ isAuth, setAuth }) {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setAuth(!isAuth);
  };
  return (
    <button className="log-out main-text-style" onClick={handleLogOut}>
      Выйти
    </button>
  );
}

export default Header;
