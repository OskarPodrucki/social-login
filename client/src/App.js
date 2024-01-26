import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./css/app.css";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			fetch("http://localhost:5000/auth/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "appliaction/json",
					"Content-Type": "appliaction/json",
					"Access-Control-Allow_credentails": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					throw new Error("authentication failed");
				})
				.then((resObject) => {
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);

	console.log(user)

	return (
		<BrowserRouter>
			<div>
				<Navbar user={user} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/login'
						element={user ? <Navigate to='/' /> : <Login />}
					/>
					<Route
						path='/post/:id'
						element={user ? <Post /> : <Navigate to='/login' />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
