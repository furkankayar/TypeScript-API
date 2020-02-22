import { expect } from 'chai';
import { agent as request } from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/models/index';


describe("Index Test", () => {
    it('should always pass', () => {
        expect(true).to.equal(true);
    });
});

describe("User Test", () => {
    
    before((done) => {
        sequelize.sync()
            .then(() => {
                done();
            });
    });
  

    it('should POST /user/new_user', async () => {
        const res = await request(app)
            .post('/user/new_user')
                .send({ 
                    nickname: 'testMan',
                    name: 'Testtest'
                });
        expect(res.status).to.equal(200);
        expect(res.body.error).to.equal(false);
    });

    it('should GET /user/get_username', async () => {
        const res = await request(app)
            .get('/user/get_username')
                .send({ 
                    userId: 1 
                });
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal(1);
        expect(res.body.name).to.equal("Testtest");
        expect(res.body.nickname).to.equal("testMan");

    });
});