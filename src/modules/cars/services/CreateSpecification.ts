import { ISpecifationsRepository } from '../repositories/ISpecifationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecification {
  name: string;
  description: string;

  constructor(private specificationsRepository: ISpecifationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExits = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExits) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecification };
