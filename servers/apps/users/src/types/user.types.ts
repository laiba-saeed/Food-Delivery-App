/**
 * This file contains custom TypeScript types and interfaces used across the application.
 *
 * Purpose:
 * - Define the structure of complex data objects and responses.
 * - Ensure consistent and type-safe data handling throughout the application.
 * - Provide clear contracts for data structures, eObjectnhancing maintainability and readability.
 *
 * The types and interfaces defined in this file can be imported and used in various
 * modules, controllers, and services to enforce consistent data models and improve
 * type safety in the NestJS project.
 */

import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field()
  code?: string;
}

@ObjectType()
export class RegisterResponse {
  @Field(() => User, { nullable: true })
  user?: User | any;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class loginResponse {
  @Field(() => User)
  user: User;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
