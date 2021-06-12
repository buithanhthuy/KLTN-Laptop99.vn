const config = {
  database: {
    connection:'postgres://postgres:010265@127.0.0.1:5432/ecommerce',
  },
  api: {
    host: "localhost",
    port: 3000,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
