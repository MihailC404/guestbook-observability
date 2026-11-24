import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 15,
  duration: '40s',
};

export default function () {
  http.get('http://localhost:8000/health');
  sleep(0.1);
}
