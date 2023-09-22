
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'
const Header = ({ OpenSidebar }) => {
    const design = (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <BsSearch className='icon' />
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div>
        </header>
    );

    return design;
};

export default Header;