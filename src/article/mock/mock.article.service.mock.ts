import { mockArtilce, mockArtilcesArray } from './mock.article';
import { Article } from '../interfaces/article.interface';

export class MockArticleService {
  async findByCategory(categoryId: string): Promise<Article[]> {
    return !categoryId
      ? mockArtilcesArray
      : mockArtilcesArray.filter(artilce => artilce.category === categoryId);
  }

  async findById(id: string): Promise<Article> {
    return mockArtilce;
  }
}
