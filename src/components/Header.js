import { Navbar, NavbarBrand} from 'reactstrap';
import Dan from '../app/assets/img/Dan.jpg';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <h3>Dan Beto || Professional Disc Golfer</h3>
          <NavbarBrand href='/'>
            <img src={Dan} alt='portfolio image' className='port' /> 
          </NavbarBrand>
      </Navbar>
    )
}

export default Header;