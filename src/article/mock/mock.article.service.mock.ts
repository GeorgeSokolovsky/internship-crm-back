import { mockArtilce, mockArtilcesArray } from './mock.article';
import { Article } from '../interfaces/article.interface';

export class MockArticleService {
  findByCategory(id: string): Promise<Article[]> {
    const result = !id
      ? mockArtilcesArray
      : mockArtilcesArray.filter(artilce => artilce.category === id);
    return Promise.resolve(result);
  }

  findById(id: string): Promise<Article> {
    return Promise.resolve(mockArtilce);
  }
}
