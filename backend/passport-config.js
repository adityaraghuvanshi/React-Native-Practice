const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const oracledb = require('oracledb');

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const connection = await oracledb.getConnection();

    try {
      const result = await connection.execute(
        `SELECT * FROM users WHERE username = :username AND password = :password`,
        [username, password]
      );

      if (result.rows.length > 0) {
        const user = result.rows[0];
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect username or password' });
      }
    } catch (error) {
      return done(error);
    } finally {
      await connection.close();
    }
  }
));

passport.serializeUser((user, done) => {
  // Serialize user data
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // Deserialize user data
  const connection = await oracledb.getConnection();

  try {
    const result = await connection.execute(
      'SELECT * FROM users WHERE id = :id',
      [id]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error);
  } finally {
    await connection.close();
  }
});
