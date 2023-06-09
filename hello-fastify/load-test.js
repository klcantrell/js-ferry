import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '5m',
};

export default function() {
  http.get('http://hello-fastify.eastus.cloudapp.azure.com/weatherforecast');
}
