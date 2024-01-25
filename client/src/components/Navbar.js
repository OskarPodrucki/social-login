import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
	return (
		<div className='navbar'>
			<span className='logo'>
				<Link className='link' to='/'>
					Login app
				</Link>
			</span>
			{user ? (
				<ul className='list'>
					<li className='listItem'>
						<img
							src='https://media.tenor.com/t3dLLNaI50oAAAAM/cat-cats.gif'
							alt='avatar'
							className='avatar'
						/>
					</li>
					<li className='listItem'>Oskar Podrucki</li>
					<li className='listItem'>Logout</li>
				</ul>
			) : (
				<Link className='link' to='login '>
					Login
				</Link>
			)}
		</div>
	);
};

export default Navbar;
