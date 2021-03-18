import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecifationsRepository';
import { CreateSpecification } from '../modules/cars/services/CreateSpecification';

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificaionService = new CreateSpecification(
    specificationRepository
  );

  createSpecificaionService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoutes };
