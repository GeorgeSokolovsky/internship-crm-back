import { MockArticleService } from './mock/mock.article.service.mock';
import {
  mockArticle,
  mockArticlesArray,
  mockArticlesArrayFiltered,
} from './mock/mock.article';
import { SearchQuery } from './interfaces/search-query.interface';
import { Test } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

describe('ArticleController', () => {
  let articleController: ArticleController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [{ provide: ArticleService, useClass: MockArticleService }],
    }).compile();

    articleController = module.get<ArticleController>(ArticleController);
  });

  describe('find', () => {
    it('should return an array of articles', async () => {
      const query: SearchQuery = { categoryId: '' };
      expect(await articleController.findByCategory(query)).toEqual(
        mockArticlesArray,
      );
    });

    it('should return an array of articles with category id 1', async () => {
      const query: SearchQuery = { categoryId: '1' };
      expect(await articleController.findByCategory(query)).toEqual(
        mockArticlesArrayFiltered,
      );
    });

    it('should return an empty array', async () => {
      const query: SearchQuery = { categoryId: '154534' };
      expect(await articleController.findByCategory(query)).toEqual([]);
    });

    it('should return the article', async () => {
      const id = '59459sdfg9453';
      expect(await articleController.findById(id)).toEqual(mockArticle);
    });
  });
});
