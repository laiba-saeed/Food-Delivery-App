import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

@Module({
  // Importing the GraphQL module and configuring it with Apollo Gateway
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver, // Specify that we are using Apollo Gateway as the driver for the GraphQL module
      gateway: {
        // Configuration for the Apollo Gateway
        supergraphSdl: new IntrospectAndCompose({
          // The supergraph SDL (schema definition language) is being composed by introspecting the subgraphs
          subgraphs: [],  // List of subgraphs to be introspected and composed for federation.
        }),
      },
    }),
  ],
  controllers: [],
  providers: [AppService, ConfigService, JwtService],
})
export class AppModule {}
