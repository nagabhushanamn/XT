import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './memdb.datasource.json';

export class MemdbDataSource extends juggler.DataSource {
  static dataSourceName = 'memdb';

  constructor(
    @inject('datasources.config.memdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
