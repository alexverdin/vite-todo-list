import '../styles/checkmark.css';
import PropTypes from 'prop-types';
import imageSrc from '../assets/checkmark.svg';

const CheckMark = ({done}) => {
    return( done ? 
        <div>
            <img className='checkmark-size' src={imageSrc} alt='checkmark' />
        </div>
        : <div className='checkmark-size'/>
    )
}

CheckMark.propTypes = {
    imageSrc: PropTypes.text,
    done: PropTypes.bool
}

export default CheckMark;