const Login = () => {
	const google = () => {
		window.open("http://localhost:5000/auth/google", "_self");
	};

	const github = () => {
		window.open("http://localhost:5000/auth/github", "_self");
	};

	const facebook = () => {
		window.open("http://localhost:5000/auth/facebook", "_self");
	};

	return (
		<div className='login'>
			{/* <h1 className='loginTitle'>Choose a Login Method</h1> */}
			<div className='wrapper'>
				<div className='left'>
					<div className='loginButton google' onClick={google}>
						<img
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
							alt='google-icon'
							className='icon'></img>
						Google
					</div>
					<div className='loginButton facebook' onClick={facebook}>
						<img
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg'
							alt='facebook-icon'
							className='icon'></img>
						Facebook
					</div>
					<div className='loginButton github' onClick={github}>
						<img
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
							className='icon'></img>
						Github
					</div>
				</div>
				<div className='center'>
					<div className='line' />
					<div className='or'>OR</div>
				</div>
				<div className='right'>
					<input type='text' placeholder='Username' />
					<input type='text' placeholder='Password' />
					<button className='submit'>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
