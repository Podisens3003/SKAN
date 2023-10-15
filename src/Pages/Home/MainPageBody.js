import pic1 from '../../images/pic1.svg';
function MainPageBody(){
    return (
        <main className='main'>
            <Intro/>
            
        </main>
    )
}

function Intro() {
    return (
        <div className="intro">
            <div className='intro-content inter-text-20'>
                <h1 className="ferry-h1 mb-20">сервис по поиску <br/> 
                    публикаций <br/>
                    о компании <br/>
                    по его ИНН
                </h1>
                <p className='inter-text-20 mb-70'>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </p>
                <button className=''>Запросить данные</button>
            </div>
            <figure><img src={pic1} className='pic1'/></figure>
        </div>
    )
}
export default MainPageBody;