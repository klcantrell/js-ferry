import Fastify from 'fastify'

const fastify = Fastify();

const MILLISECONDS_IN_A_DAY = 8.64e+7;

const SUMMARIES = [
  'Freezing',
  'Bracing',
  'Chilly',
  'Cool',
  'Mild',
  'Warm',
  'Balmy',
  'Hot',
  'Sweltering',
  'Scorching',
];

fastify.get('/weatherforecast', async (request, reply) => {
  return [1, 2, 3, 4, 5].map((index) => {
    const temperatureC = randomNumber(-20, 55);
    const tempereatureF = Math.round(32 + (temperatureC / 0.5556));
    return {
      date: new Date(Date.now() + index * MILLISECONDS_IN_A_DAY).toLocaleDateString(),
      temperatureC,
      tempereatureF,
      summary: SUMMARIES[randomNumber(0, SUMMARIES.length - 1)],
    };
  });
})

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

start();
