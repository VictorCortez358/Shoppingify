import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    providers: [ListService],
    imports: [PrismaModule],
    controllers: [ListController],
})
export class ListModule {}
