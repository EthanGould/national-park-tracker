import './styles/Activity.css';

const Activities = ({ activities }) => {
    return (
        <div className="activities">
            { activities.map((activity, i) => ( <span key={i} className="activities__item">${activity.name}</span> )) }
        </div>
    )
}

export default Activities;
