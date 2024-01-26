const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
	"800845082776-41hqdjdqf42tfqjqqacko0kc811qf2c6.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "http://www.example.com/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
