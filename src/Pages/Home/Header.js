import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../images/logo.svg';
import logoW from '../../images/logoWhite.svg';
import avatar from '../../images/avatar.svg'
import menu from '../../images/menu-mobil.svg'
import close from '../../images/close.svg'
import spinner from '../../images/icon-spinner.svg'


function Header() {
    const navItem = ['Главная', 'Тарифы', 'FAQ'];
    let isLogin = true;
    
    let isLargeScreen = true;
    
    
    let userName = 'Алексей А.'; 

    return (
        <header>
            <div className='header'>
            <Logo img={logo} alt={'logotype'}/>
                
                <div className='desktop-link-wrapper'>
                    {/* <Logo img={logo} alt={'logotype'}/> */}
                    <NavigationBar navItem={navItem}/> 
                    <CompanyLimitInfo/>
                    {(isLogin) && (<UserInfo name={userName}/>) || (<LoginToAccount/>)}

                    
                </div>
                        
                <div className='mobile-link-wrapper'>
                    {/* <Logo img={logo} alt={'logotype'}/> */}

                    <CompanyLimitInfo/>

                    {/* {isLogin && 
                        (<CompanyLimitInfo/>) && 
                        (<UserInfo/>)} */}
                                    
                    {/* <UserInfo/> */}
                    <ModalWindow navItem={navItem} />
                </div>
                

                
            </div>
        </header>
    );  
}

export function Logo({img, alt}) {
    return (
        <img className='logo' src={img} alt={alt}/>
    )
}

function NavigationBar({navItem}) {
    return (
        <ul className='nav-bar'>
            {navItem.map((item, key) => 
                <li key={key} className='nav-item'>{item}</li>
            )}
        </ul>
    )
}

function CompanyLimitInfo() {
    return (
        <div className='info-limit'>
            <div className="spinner"><img src={spinner} /></div>

        </div>
    )
}

function LoginToAccount() {
    return(
        <div className='login-to-account'>
            <a href='#' className='registration'>Зарегистрироваться</a>
            <div className='separator'/>
            <button className='sign-in-btn main-text-style'>Войти</button>
        </div>
    )
}

function UserInfo({name}) {
    return (
        <div className='avatar-wrapper'>
            <div>
                <span>{name}</span>
                <button className='log-out registration main-text-style'>Выйти</button>
            </div>
           
            <div className='avatar'><img src={avatar} alt='avatar'/></div>
        </div>
        
    )
}

function ModalWindow({navItem}) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='menu modal-window'>
            <button className='menu-btn' onClick={ () => setOpen((open)=> !open)}><img src={menu}/></button>
            {
                open && (
                    <div className='overlay'>
                        
                        <Logo img={logoW}  alt={'logotype'}/>
                        <button className='menu-btn' onClick={ () => setOpen((open)=> !open)}><img src={close}/></button>
                        
                        
                        <div className='modal'>
                            <NavigationBar navItem={navItem}/>
                        </div>
                        <LoginToAccount/>
                        
                    </div>
                )
            }
            
        </div>
    
    )
}
export default Header;