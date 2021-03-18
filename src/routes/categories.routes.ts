import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesReposirory';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get('/', (req, res) => {
  return res.status(200).json(categoryRepository.list());
});

export { categoriesRoutes };
