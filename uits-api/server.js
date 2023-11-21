const express = require('express');
const cors = require('cors');
const { rolevalidation, globalLogger } = require('./validators/role-validation');
const app = express()

app.use([cors(), express.json(), globalLogger, rolevalidation]);
// app.use(express.json());
// app.use(globalLogger);
// app.use(rolevalidation);
app.use('/api/v1', require('./routes/router'));

app.listen('3000', () => console.log('Express is runing on port 3000'));