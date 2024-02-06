import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ItemService } from "./item.service";
import { Item } from "@prisma/client";


@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) { }

    @Get()
    async getAllItems() {
        return this.itemService.getAllItems();
    }

    @Get(':id')
    async getItemById(@Param('id') id: string) {
        return this.itemService.getItemById(Number(id));
    }

    @Post()
    async createItem(@Body() data: Item) {
        return this.itemService.createItem(data);
    }

    @Post(':itemId/add-to-list/:listId')
    async addItemToList(
        @Param('itemId') itemId: string,
        @Param('listId') listId: string,
    ): Promise<void> {
        await this.itemService.addItemToList(Number(itemId), Number(listId));
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string) {
        return this.itemService.deleteItem(Number(id));
    }

}