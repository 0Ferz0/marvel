import Img from './error.gif'

const ErrorMessage = () => {
    return (
        <img src={Img} alt={'Error'} style={{
            display: 'block', width: '250px',
            height: '250px', objectFit: 'contain', margin: "0 auto"
        }} />)
}

export default ErrorMessage
