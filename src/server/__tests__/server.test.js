import app from '../serverForTest.js';
const request = require("supertest");

describe("GET / test", ()=>{
    test("status code should be 200", async (done)=> {
        const response = await request(app).get("/").expect(200);
        done();
      });
  });
