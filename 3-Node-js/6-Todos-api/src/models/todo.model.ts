import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
    default: false,
  })
  completed?: boolean;

  @belongsTo(() => User)
  userName: string;


  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
