import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';

@Module({
  // Configuring GraphQLModule with Apollo Federation driver
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,  // Using Apollo Federation to enable schema federation for the module
      autoSchemaFile: {
        federation: 2,
      }
    })
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
