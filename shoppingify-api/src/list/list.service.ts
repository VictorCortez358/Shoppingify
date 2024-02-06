import { Injectable } from '@nestjs/common';
import { ListShopping } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListService {

    constructor(private prismaService: PrismaService) {}

    async getAllList(): Promise<ListShopping[]> {
        return this.prismaService.listShopping.findMany({
            include: {
                items: true
            }
        });
    }

    async getListById(id: number): Promise<ListShopping> {
        return this.prismaService.listShopping.findUnique({
            where: {
                id: id
            },
            include: {
                items: true
            }
        });
    }

    async createList(data: ListShopping): Promise<ListShopping> {
        return this.prismaService.listShopping.create({
            data: data
        });
    }

    async updateList(id: number, data: ListShopping): Promise<ListShopping> {
        return this.prismaService.listShopping.update({
            where: {
                id: id
            },
            data: data,
            include: {
                items: true
            }
        });
    }

    
}
