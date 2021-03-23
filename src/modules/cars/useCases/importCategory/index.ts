import { CategoriesRepository } from '../../repositories/implementations/CategoriesReposirory';
import { ImportCateoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCateoryController(
  importCategoryUseCase
);

export { importCategoryController };
