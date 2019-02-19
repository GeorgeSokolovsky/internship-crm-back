import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [MongooseModule.forRootAsync({
    useClass: ConfigService
  }), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
