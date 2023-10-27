import '../styles/checkmark.css';
import PropTypes from 'prop-types';
import check from '../assets/checkmark.svg';

const CheckMark = () => {
    return(
        <div>
            <img className='img-size' src={check} alt='checkmark' />
        </div>
        
    )
}

CheckMark.propTypes = {
    imageSrc: PropTypes.text
}

export default CheckMark;