import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service.js';

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(() => String, { name: 'authenticateAppUser'})
    async authenticateAppUser(@Args('email') email: string, @Args('pwd') pwd: string) {
        return await this.usersService.authenticateAppUser(email, pwd);
    }
}
