import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../src/app';


describe("Index Test", () => {
    it('should always pass', () => {
        expect(true).to.equal(true);
    });

    it('should GET /user/get_username', async () => {
        const res = await request(app)
            .get('/user/get_username')
                .send({ userId: 1 });
        expect(res.status).to.equal(200);
    })
});