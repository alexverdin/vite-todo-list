import '../styles/header.css';
import PropTypes from 'prop-types';

const Header = ({counter}) => {

    return(
        <div>
            <h1 className="card-header-title header">
                Hay {counter} tareas
            </h1>
        </div>
    )
};

Header.propTypes = {
    counter: PropTypes.number
}

Header.defaultProps = {
    counter: 0
}

export default Header;