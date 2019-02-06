import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User} from '../models';
import {MemdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userName
> {
  constructor(
    @inject('datasources.memdb') dataSource: MemdbDataSource,
  ) {
    super(User, dataSource);
  }
}
