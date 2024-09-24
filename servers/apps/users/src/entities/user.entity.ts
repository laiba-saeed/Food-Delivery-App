/**
 * Entity class representing a database table schema using an ORM like TypeORM.
 * Entities define the structure of the database table and provide methods
 * for interacting with the database, including CRUD operations. They map
 * class properties to table columns and handle data persistence and retrieval.
 */
import { ObjectType, Field, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Avatars {
  @Field()
  id: string;

  @Field()
  public_id: string;

  @Field()
  url: string;

  @Field()
  userId: string;
}

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => Avatars, { nullable: true })
  avatar?: Avatars | null;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
