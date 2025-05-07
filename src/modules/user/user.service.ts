import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        searchFor: data.searchFor,
        gender: data.gender,
        bio: data.bio,
        phone: data.phone,
        phoneVerified: data.phoneVerified,
        emailVerified: data.emailVerified,
        username: data.username,
        photos: {
          create: data.photos ?? [],
        },
        interests: {
          create: data.interests ?? [],
        },
      },
      include: {
        photos: true,
        interests: true,
      },
    });
    return user;
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        bio: true,
        interests: true,
        username: true,
        gender: true,
        photos: true,
        emailVerified: true,
      },
    });
    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        ...data,
        photos: {
          deleteMany: data.photosToDelete
            ? { id: { in: data.photosToDelete } }
            : [], // Exclui as fotos enviadas para remoção
          create: data.photos ? data.photos.map((photo) => ({ ...photo })) : [], // Adiciona novas fotos
        },
        interests: {
          deleteMany: data.interestsToDelete
            ? { id: { in: data.interestsToDelete } }
            : [], // Exclui os interesses enviados para remoção
          create: data.interests
            ? data.interests.map((interest) => ({ ...interest }))
            : [], // Adiciona novos interesses
        },
      },
    });
  }
}
