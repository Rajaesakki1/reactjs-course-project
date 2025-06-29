import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/Course">Home</Link></li>
                 <li><Link to="/Bar">about</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;