import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

import uploadConfig from '../../../../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post('/', createUserController.handle);

userRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle
);

export { userRoutes };
