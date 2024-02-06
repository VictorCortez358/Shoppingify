import { Injectable } from "@nestjs/common";
import { Item } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class ItemService {
    constructor(private prismaService: PrismaService) { }

    async getAllItems(): Promise<Item[]> {
        return this.prismaService.item.findMany();
    }

    async getItemById(id: number): Promise<Item> {
        return this.prismaService.item.findUnique({
            where: {
                id: id
            },
        })
    }

    async createItem(data: Item): Promise<Item> {
        return this.prismaService.item.create({
            data: data,
        })
    }

    async deleteItem(id: number): Promise<Item> {
        return this.prismaService.item.delete({
            where: {
                id: id
            }
        })
    }

    async addItemToList(itemId: number, listId: number): Promise<void> {
        await this.prismaService.listShopping.update({
            where: {
                id: listId,
            },
            data: {
                items: {
                    connect: {
                        id: itemId,
                    },
                },  
            },
        });
    }

}