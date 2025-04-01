import express from 'express';
import api from './api/index.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Welcome to my Rest API')
});

app.use('/api/v1', api);

export default app;