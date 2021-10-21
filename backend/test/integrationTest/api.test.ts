import request from "supertest";
import app from '../../src/app';
import { UserRequest } from '../../src/models/User';
import faker from "faker";
let { expect } = require('chai');
let randomEmail = faker.internet.email();

describe('GET /api/plants', () => {
    it('It should return with 200 when GET /api/plants is called', done => {
        request(app)
            .get('/api/plants')
            .expect(200)
            .end(function (err, res) {
                done();
                if (err) throw err;
            })
    });

    it('should return a JSON response when GET /api/plants is called', done => {
        request(app)
            .get('/api/plants')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                done();
                if (err) throw err;
            });
    });

    it('should return plants when GET /api/plants is called', done => {
        request(app)
            .get('/api/plants')
            .end(function (err, res) {
                expect(res.body).to.exist;
                done();
                if (err) throw err;
            });
    });
    it('should return more than 0 plant when GET /api/plants is called', done => {
        request(app)
            .get('/api/plants')
            .end(function (err, res) {
                expect(res.body.length).gt(0);
                done();
                if (err) throw err;
            });
    });

    it('should return proper plant when GET /api/plants is called', done => {
        request(app)
            .get('/api/plants')
            .end(function (err, res) {
                const plant = res.body[0];
                expect(plant.plantId).to.exist;
                expect(plant.userId).to.exist;
                expect(plant.plantName).to.exist;
                expect(plant.plantType).to.exist;
                expect(plant.description).to.exist;
                expect(plant.light).to.exist;
                expect(plant.medium).to.exist;
                expect(plant.waterconditions).to.exist;
                expect(plant.plantImage).to.exist;
                expect(plant.vote).to.exist;
                done();
                if (err) throw err;
            });
    });
});

describe('POST /api/register', () => {
    it('It should return with 400 and this error message: Email is required when called without email.', async () => {
        const mockBody: UserRequest =
        {
            email: "",
            name: "Ali",
            password: "12345678"
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Email is required.');
        expect(status).equal(400);
    });

    it('It should return with 400 and this error message: Password must be at least 8 characters. when called short password.', async () => {
        const mockBody: UserRequest =
        {
            email: "ahmadali.ghaffari@gmail.com",
            name: "Ali",
            password: "ds"
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Password must be at least 8 characters.');
        expect(status).equal(400);
    })

    it('It should return with 400 and this error message: Name is required. when called without name', async () => {
        const mockBody: UserRequest =
        {
            email: "ali@email.com",
            name: "",
            password: "12345678"
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Name is required.');
        expect(status).equal(400);
    });

    it('It should return with 400 and this error message: Email is already taken when an already taken email is called', async () => {
        const mockBody: UserRequest =
        {
            email: "Ali@gmail.com",
            name: "Ali",
            password: "12345678"
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Email is already taken');
        expect(status).equal(400);
    });

    it('It should return with 400 and this error message: Name, email and password are required. when all ot the input fields are empty.', async () => {
        const mockBody: UserRequest =
        {
            email: "",
            name: "",
            password: ""
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Name, email and password are required.');
        expect(status).equal(400);
    });

    it('It should return with 400 and this error message: Password is required. when calls without password.', async () => {
        const mockBody: UserRequest =
        {
            email: "ali@gmail.com",
            name: "The Knight",
            password: ""
        };
        const result = await request(app).post('/api/register').send(mockBody);
        const { status, message } = result.body;
        expect(message).equal('Password is required.');
        expect(status).equal(400);
    });

    it('It should return with 200 ', async () => {
        const mockBody: UserRequest = {
            email: randomEmail,
            name: "Krishna",
            password: "krishna7"
        };

        const result = await request(app).post('/api/register').send(mockBody);
        const { id, email } = result.body;
        expect(id).to.exist;
        expect(email).equal(randomEmail);
    });
});
