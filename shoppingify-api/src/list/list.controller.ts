import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ListService } from './list.service';
import { ListShopping } from '@prisma/client';

@Controller('list')
export class ListController {
    constructor(private listService: ListService) {}

    @Get()
    async getAllList() {
        return this.listService.getAllList();
    }

    @Get(':id')
    async getListById(@Param('id') id: string) {
        return this.listService.getListById(Number(id));
    }

    @Post()
    async createList(@Body() data: ListShopping) {
        return this.listService.createList(data);
    }

    @Put(':id')
    async updateList(@Param('id') id: string, @Body() data: ListShopping) {
        return this.listService.updateList(Number(id), data);
    }
}
