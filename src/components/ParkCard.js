import './styles/ParkCard.css';
import StatesMap from '../data/States.json';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { useRouteMatch, Link } from 'react-router-dom';

const ParkCard = ({ park, onHeart, onPress }) => {
    let match = useRouteMatch();

    return (
        <li className='park-card'>
            {park.images.length ?
                <div className="park-card__img-wrap"><img className='park-card__img' alt={park.images[0].altText} src={park.images[0].url}/></div>
            :'No IMAGE'}
            <div className='park-card__top'>
                <Link to={`${match.url}/${park.id}`}><h2 className='park-card__header'>{park.fullName}</h2></Link>
                <button onClick={() => onHeart(park.id)} className={`park__heart ${park.isHearted ? 'filled' : ''}`}>{park.isHearted ? <FaHeart /> : <FaRegHeart/> }</button>
            </div>
            <p className='park-card__desc'>{park.description.substr(0, 225)}...</p>
            <p>Location: <span className='park-card__location'>{getStatesFullName(park.states)}</span></p>
            <p>Entry Fee: <span className='park-card__location'>{park.entranceFees[0].cost === '0.00' ? 'Free!' : `$${park.entranceFees[0].cost}`}</span></p>
        </li>
    )
}

// Converts a list of state code into the full name of the states
const getStatesFullName = (states) => {
    let stateNames = ''
    states.split(',').map((code) => { return stateNames += `${StatesMap[code]}, ` });
    return stateNames.replace(/,\s*$/, '');
}

export default ParkCard