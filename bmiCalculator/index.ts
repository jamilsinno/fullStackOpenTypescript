import express from 'express';
import { bmiCalculator } from './bmiCalculator';
import { calculator } from '../calculator';
import { exerciseCalculator } from './exerciseCalculator'
const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get(`/bmi`, (req, res)=>{
    // console.log(req)
  if (!isNaN(Number(req.query.height)) && !isNaN(Number(req.query.weight))) {
    res.json({
        weight: Number(req.query.weight),
        height: Number(req.query.height),
        bmi: bmiCalculator(Number(req.query.weight), Number(req.query.height))
    });
  } else {
        res.json({
            error: 'malformatted parameters'
        });
    }
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  if ( !value1 || isNaN(Number(value1))){
    return res.status(400).send({ error: 'Not a number'});
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(value1, value2, op);
  return res.send(result);
});

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body

  if ( !target || isNaN(Number(target)) || !daily_exercises){
    return res.status(400).send({ error: 'malformatted parameters'});
  }

  try{
    return res.send(exerciseCalculator(req.body.daily_exercises, req.body.target))
  } catch {
    return res.send({ error: 'malformatted parameters' })
  }
})
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, You'd better go catch it. Ha. Ha.`);
});