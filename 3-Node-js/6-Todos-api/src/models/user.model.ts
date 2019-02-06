import { Entity, model, property, hasMany } from '@loopback/repository';
import { Todo } from './todo.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @hasMany(() => User)
  todos?: Todo[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}
