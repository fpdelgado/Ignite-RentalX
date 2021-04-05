import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ISpecifationsRepository } from '../../repositories/ISpecifationsRepository';

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
