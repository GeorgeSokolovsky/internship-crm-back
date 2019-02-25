import { mockArticle, mockArticlesArray } from './mock.article';
import { Article } from '../interfaces/article.interface';

export class MockArticleService {
  async findByCategory(categoryId: string): Promise<Article[]> {
    return !categoryId
      ? mockArticlesArray
      : mockArticlesArray.filter(article => article.category === categoryId);
  }

  async findById(id: string): Promise<Article> {
    return mockArticle;
  }
}
