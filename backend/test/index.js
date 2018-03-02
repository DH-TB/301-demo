import request from 'supertest';
// import '../server/tools/refreshMongo';

describe('paperTest', () => {
    let app;
    beforeEach((done) => {
        app = require('../app');
        done();
    });

    it('GET All Papers', (done) => {
        request(app)
            .get('/api/papers')
            .expect(200)
            .end(done);
    });
});


