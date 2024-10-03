/* Resolver in NestJS is responsible for managing the interaction between GraphQL queries/mutations/subscriptions 
and the application logic, handling how data is retrieved, created, or updated. */

// import { UseFilters } from "@nestjs/common";
import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { RegisterDto } from "./dto/user.dto";
import { RegisterResponse } from "./types/user.types";
import { BadRequestException } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Resolver('User')
// @UseFilters
export class UserResolver {
    constructor (
        private readonly userService: UsersService
    ) {}

    /* @Mutation is used to define operations that change or manipulate data (create, update, delete) 
    in a GraphQL API within a NestJS application. */
    @Mutation(() => RegisterResponse)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
    ) : Promise<RegisterResponse> {
        if (registerDto.name || registerDto.email || registerDto.password) {
            throw new BadRequestException('Please fill all the fields.')
        }

        const user = await this.userService.register(registerDto);

        return { user };
    }

    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers();
    }
}