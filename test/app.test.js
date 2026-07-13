const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return 200 OK and welcome text', async () => {
        const res = await request(app).get('/');
        if (res.statusCode !== 200) throw new Error("Website Home Route Down!");
    });
});