const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
	"800845082776-41hqdjdqf42tfqjqqacko0kc811qf2c6.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "1d2a3ba157ae4d78d98d";
GITHUB_CLIENT_SECRET = "8b574ac2a57477286a30826a1814e548335b19bb";

FACEBOOK_APP_ID = "https is required";
FACEBOOK_APP_SECRET = "https is required";

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new GithubStrategy(
		{
			clientID: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			callbackURL: "/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
