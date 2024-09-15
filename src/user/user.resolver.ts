import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewUserInput } from './NewUserInput.dto.js';
import { UserService } from './user.service.js';
import { User } from './user.model.js';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }

    return user;
  }

  @Query((returns) => [User])
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Mutation((returns) => User)
  async addNewUser(@Args('newUser') newUserInput: NewUserInput): Promise<User> {
    const newUser = await this.userService.addNewUser(newUserInput);

    return newUser;
  }

  @Mutation((returns) => Boolean)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    return this.userService.deleteRecordById(id);
  }

  @Mutation((returns) => Boolean)
  async deleteAllUsers(): Promise<boolean> {
    return this.userService.deleteAllRecords();
  }
}
