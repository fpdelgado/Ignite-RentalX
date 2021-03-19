import { CategoriesRepository } from '../../repositories/implementations/CategoriesReposirory';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const catogoriesRepository = CategoriesRepository.getInstance();
const createCagoryUseCase = new CreateCategoryUseCase(catogoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCagoryUseCase
);

export { createCategoryController };
