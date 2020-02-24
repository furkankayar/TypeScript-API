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
  

    it('should POST /user/register', async () => {

        const res = await request(app)
            .post('/user/register')
                .send({ 
                    username: 'furkank',
                    password: '123123fk',
                    email: 'furkan.kayar@ceng.deu.edu.tr'
                });
        expect(res.status).to.equal(200);
        expect(res.body.error).to.equal(false);
    }).timeout(5000);
});