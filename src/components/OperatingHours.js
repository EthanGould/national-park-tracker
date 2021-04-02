const OperatingHours = ({ hours }) => {
    const today = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date());
    // const todaysHours = hours[0].standardHours[today.toLowerCase()];
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    return (
        <ul className="park__desc">
        {
            days.map((day, i) => {
                return  <li key={i} className={day === today ? 'park__hour today' : 'park__hour'}><span>{day}:</span> <span>{hours[0].standardHours[day.toLowerCase()]}</span></li>
            })
        }
        </ul>
    )
}

export default OperatingHours;