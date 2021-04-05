import { Router } from 'express';

import { AuthenticateUserController } from '../modules/account/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUSerController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUSerController.handle);

export { authenticateRoutes };
