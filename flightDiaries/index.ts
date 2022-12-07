import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

// app.get('/ping', (req, res) => {
//     console.log('who pinged me?')
//     res.send('pong.')
// })

app.get('/api/ping', (req, res) => {
    console.log(req,res);
})

app.listen(PORT, () => {
    console.log(`Your application is running on port ${PORT}. You'd better go catch it.`)
})