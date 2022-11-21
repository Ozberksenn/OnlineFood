import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findAll() {
    return `This action returns all articles`;
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    `This action updates a #${id} article`;
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    `This action removes a #${id} article`;
    return this.prisma.article.delete({ where: { id } });
  }
}
