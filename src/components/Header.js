import './styles/Header.css'
import { FaMountain } from 'react-icons/fa';
import { FaSearchLocation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ onChange, showSearch, resetState, minimal }) => {
    return (
        <header className={`header ${minimal ? 'header--thin' : ''}`}>
            <h1><Link to='/parks' onClick={resetState}>National Park Tracker<span> <FaMountain /></span></Link></h1>
            { showSearch ?
                <form className='header__form'>
                    <input className='header__search' placeholder='Find your favorites' onChange={(e) => onChange(e.target.value)}/>
                    <FaSearchLocation />
                </form>
            : ''}
        </header>
    )
}

export default Header