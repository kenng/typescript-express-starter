import request from 'supertest';
import app from '../src/app';

describe('API test suite', () => {
  test('/hello should return "Hello World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.text).toEqual('Hello World!');
  });
});
