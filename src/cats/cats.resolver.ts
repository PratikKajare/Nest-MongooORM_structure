import { Mutation, Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'helloo';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }
  @Mutation(() => [CatType])
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
