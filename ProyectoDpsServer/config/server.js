module.exports = ({ env }) => ({
  host: env('HOST', '192.168.1.28'),
  port: env.int('PORT', 8082),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2566084d2ab6a6d5a6fa9fc1beaf0ffc'),
    },
  },
});
