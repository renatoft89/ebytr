require('dotenv').config();
const app = require('./api');

const PORT = process.env.PORT || 3002;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Online Port: ', PORT, `http://localhost:${PORT}/`));
