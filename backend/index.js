const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

const port = 3000;

app.use(
	cookieSession({
		name: "session",
		keys: ["nosiema"],
		maxAge: 24 * 60 * 60 * 1000,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.listen(port, () => {
	console.log("Server is running. Port: " + port);
});
