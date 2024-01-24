const Login = () => {
	return (
		<div className='login'>
			{/* <h1 className='loginTitle'>Choose a Login Method</h1> */}
			<div className='wrapper'>
				<div className='left'>
					<div className='loginButton google'>
						<img
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
							alt='google-icon'
							className='icon'></img>
						Google
					</div>
					<div className='loginButton facebook'>
						<img
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg'
							alt='facebook-icon'
							className='icon'></img>
						Facebook
					</div>
					<div className='loginButton github'>
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
