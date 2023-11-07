import '../../Components/FormConstructor/Form.css'
import Characters from '../../images/Characters.svg'
import FormComponent from "../../Components/FormConstructor/FormComposition";

function Authorisation() {
    return(
        <main className="main">
            <div className='wrapper-auth-form'>
                <h2 className='ferry-h2 span-1'> 
                    Для оформления подписки на тариф, 
                    необходимо авторизоваться.
                </h2>
                <div className='span-2'><img alt='Characters' src={Characters}></img></div>
                
                <FormComponent/>
            </div>
            
        </main>
    )
};

export default Authorisation;