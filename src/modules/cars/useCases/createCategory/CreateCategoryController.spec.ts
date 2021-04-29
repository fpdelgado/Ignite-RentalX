import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe('Create category controller', async () => {
  it('test', async () => {
    await request(app).get('/cars/available').expect(200);
  });
});
