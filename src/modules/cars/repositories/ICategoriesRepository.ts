import { Category } from '../model/Category';

// DTO - data transfer object
interface ICategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICategoryDTO };
