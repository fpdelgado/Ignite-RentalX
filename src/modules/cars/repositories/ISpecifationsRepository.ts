import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecifationsRepository, ICreateSpecificationDTO };
