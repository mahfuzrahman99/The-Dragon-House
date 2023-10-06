import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='mx-auto text-center'>
           <div className='flex justify-center'>
           <img src={logo} alt="" />
           </div>
           <p>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;