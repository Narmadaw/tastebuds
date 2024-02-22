import './Header.scss';

const Header = () =>{
    return(
        <>
        <header className="header">
            <h1 className="header__logo-text">TasteBuds</h1>
        </header>
        <nav className="nav">
            <ul className='nav__list'>
                <li className='nav__list-item'>Home</li>
                <li className='nav__list-item'>Recipe Page</li>
                <li className='nav__list-item'>About</li>
                <li className='nav__list-item'>Contacts</li>
            </ul>
        </nav>
        </>
    )
}

export default Header;