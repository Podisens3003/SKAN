import spinner from '../../images/icon-spinner.svg'

function Loader() {
    return(
        <div className="spinner">
            <img alt="spinner" src={spinner} />
        </div>
    )
}

export default Loader;