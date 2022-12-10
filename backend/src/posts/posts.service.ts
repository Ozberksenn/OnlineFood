import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.posts.findMany({ include: { Users: true } });
  }
  async createPost(input: any) {
    const sendPost = await this.prisma.posts.create({
      data: {
        post_image: input.post_image,
        comment: input.comment,
        author_id: input.author_id,
      },
    });
    console.log(sendPost);
  }
}
