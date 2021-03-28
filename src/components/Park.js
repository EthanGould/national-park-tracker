import './styles/Park.css';
import Map from './GoogleMap';
import Activities from './Activities';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';

const Park = ({ parks, onHeart }) => {
    let match = useRouteMatch('/parks/:id');
    let park = parks.filter((park) => { return park.id === match.params.id })[0];

    return (
        <>
            <div className="park__banner" style={{backgroundImage: `url("${park.images[0].url}"`}}></div>
            { park ?
                <div className="park container">
                    <div className="park__col">
                        <div className='park__details'>
                            <h2 className='park__header'>{park.fullName}
                                <button onClick={() => onHeart(park.id)} className={`park__heart ${park.isHearted ? 'filled' : ''}`}>{park.isHearted ? <FaHeart /> : <FaRegHeart/> }</button>
                            </h2>
                            <FaRegCompass /><h3 className="park__subheader">About</h3>
                            <p className="park__desc">{park.description}</p>
                            <FaTag /><h3 className="park__subheader">Tags</h3>
                            <Activities activities={park.activities} />
                        </div>
                    </div>
                    <div className="park__col">
                        <Map lat={park.latitude} long={park.longitude} />
                    </div>
                </div>
            : '404 - The park you are looking for is lost!'
            }
        </>
    )
}

export default Park;