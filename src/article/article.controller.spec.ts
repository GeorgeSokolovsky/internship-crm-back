import { MockArticleService } from './mock/mock.article.service.mock';
import { Test } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';


describe('ArticleController', () => {
    let articleController: ArticleController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [ArticleController],
            providers: [{provide: ArticleService, useClass: MockArticleService}],
          }).compile();
    
        articleController = module.get<ArticleController>(ArticleController);
      });
    

    describe('findAll', () => {
        it('should return an array of articles', async () => {
            const result = ['test'];
            expect(await articleController.findAll()).toEqual(result);
        });
    });
});



