import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(() => Int)
  age: number;

  @Field()
  createdDate: string;
}
