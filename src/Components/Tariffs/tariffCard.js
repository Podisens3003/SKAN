import { tariffs } from "./dataTariffs";

function TariffCard() {

    const cards = tariffs.map(item => (
        <div key={item.rateName} className="card">
            <CardTitle infoTitle={item}/>
            <CardBody infoTitle={item} rateName={'Business'}/>
        </div>
    ));
    return (
        <div className="wrapper-cards">
            {cards}

        </div>
    )
}

export default TariffCard;

function CardTitle({infoTitle}) {
    let textColor = infoTitle.color === 'black'? 'white': 'black';
    return(
        <div className="tarif-card-title inter-text-18" 
            style={{backgroundColor: infoTitle.color, color: textColor, border: `${infoTitle.color} 2px solid`}}
            
        >
            <div className="tarif-card-title-content">
                <h4 className="inter-text-30">{infoTitle.rateName}</h4> 
                <p>{infoTitle.consumer}</p>
                <img className="picTariffs" alt='tariff-pic' src={infoTitle.img} />
            </div>
            
        </div>
    )
}

function CardBody({infoTitle, rateName}) {
    let isTarif = (rateName === infoTitle.rateName) ? true : false;
    console.log('infoTitle', infoTitle, 'rateName', rateName, 'isTarif', isTarif, 'tarif-card-body inter-text is-tarif-'+rateName)
    let credit =  <p>или <NumberFormatter cost={infoTitle.mounthCost}/>₽/мес. при рассрочке на 24 мес.</p>
    return(
        <div 
        className={isTarif ? ('tarif-card-body inter-text is-tarif-'+rateName) : 'tarif-card-body inter-text'}
        >
            {isTarif && (
                <span className="badge">Текущий тариф</span>
            )}

            <h4 className="inter-text-30">
                <NumberFormatter cost={infoTitle.cost}/>₽  <span className="decoration-prevcount"><NumberFormatter cost={infoTitle.prevCost}/>₽</span>
            </h4> 
            {infoTitle.mounthCost!== null && credit}

            <div>
                <span className="inter-text-20">В тариф входит:</span>
                <ul className="list-of-benefits">
                    {infoTitle.plans.map( item =>
                        <li>{item}</li>
                    )}
                </ul>
            </div>
            {/* поменять логику пропса в кнопку*/}
            <TariffBtn userTariff={'Business'} rateName={infoTitle.rateName}/>
        </div>
    )
}

function NumberFormatter({cost}) {
    let rub = new Intl.NumberFormat('ru', 
    // {style: 'currency', currency: 'RUB'}
    ).format(cost)
    return rub;
}

function TariffBtn({userTariff, rateName}) {
    let isTarif = userTariff === rateName;
    let textBtn = isTarif ? 'Перейти в личный кабинет' : 'Подробнее';
    let styleBtn= isTarif ? 'btn-fs-20-18 btn-default style-gray-btn inter-text' : 'btn-default style-btn btn-fs-20-18 inter-text';
    return(
        <button className={styleBtn}>{textBtn}</button>
    )

}