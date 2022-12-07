import express from 'express';
import diaryRouter from './routes/diaries';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors())

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('Ping');
    res.send('pong');
})

app.use('/api/diaries', diaryRouter);

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. You'd better go catch it. haha.`)
});