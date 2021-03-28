import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container'>
            <h2>Home</h2>
            <Link to='/parks'>Parks</Link>
        </div>
    )
}

export default Home;