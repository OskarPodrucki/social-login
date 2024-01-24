const Navbar = () => {
    return ( 
        <div className="navbar">
            <span className="logo">Login app</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://media.tenor.com/t3dLLNaI50oAAAAM/cat-cats.gif" alt="avatar" className="avatar"/>
                </li>
                <li className="listItem">Oskar Podrucki</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
     );
}
 
export default Navbar;