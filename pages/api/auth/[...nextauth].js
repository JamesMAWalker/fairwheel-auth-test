import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    // Providers.Auth0({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   domain: process.env.AUTH0_DOMAIN
    // }),
    // Providers.Email({
    //   Server: {
    //     host: '',
    //     port: '',
    //     auth: {
    //       user: '',
    //       pass: '',
    //     },
    //   },
    //   from: '',
    // }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
