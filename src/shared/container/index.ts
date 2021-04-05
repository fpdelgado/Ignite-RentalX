import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/account/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/account/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesReposirory';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecifationsRepository';
import { ISpecifationsRepository } from '../../modules/cars/repositories/ISpecifationsRepository';

// IcategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

// ISpecifationsRepository
container.registerSingleton<ISpecifationsRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
