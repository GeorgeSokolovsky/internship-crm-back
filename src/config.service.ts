import * as config from '../config.json';
import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class ConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
            uri: `mongodb://${config.db.user}:${config.db.password}@${config.db.uri}`,
        }
    }
}