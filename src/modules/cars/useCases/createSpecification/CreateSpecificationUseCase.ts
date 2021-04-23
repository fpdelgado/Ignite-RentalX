import { inject, injectable } from 'tsyringe';

import { ISpecifationsRepository } from '@modules/cars/repositories/ISpecifationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  name: string;
  description: string;

  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecifationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExits = await this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExits) {
      throw new AppError('Specification already exists!');
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
