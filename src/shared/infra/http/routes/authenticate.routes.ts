import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUSerController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUSerController.handle);

export { authenticateRoutes };
