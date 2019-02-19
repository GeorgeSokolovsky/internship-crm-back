import { DBUrl } from './DBUrl';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [MongooseModule.forRoot(DBUrl.getUrl('ds141815.mlab.com:41815/internship-crm')), NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
