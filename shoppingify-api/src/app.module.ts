import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ListModule, ItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
