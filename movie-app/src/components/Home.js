import {Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <>
            <h2>This is the home page</h2>
            <p>You can try opening a non  <Link to="/abc">existent URL</Link> and see the NotFound components for default routing</p>
            <p>Check also the path <Link to={"/params/123"}>parameters example</Link> linking to "/otherpage/32".</p>
        </>

    );
}

export default Home;