import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
    imports: [PrismaModule],
    providers: [ItemService],
    controllers: [ItemController],
})

export class ItemModule {}