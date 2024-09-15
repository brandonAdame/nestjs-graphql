import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  @Field({ nullable: false })
  firstname: string;

  @Field({ nullable: false })
  lastname: string;

  @Field(() => Int)
  age: number;
}
