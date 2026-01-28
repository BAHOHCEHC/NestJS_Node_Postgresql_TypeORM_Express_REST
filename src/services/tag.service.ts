import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['tag1', 'tag2', 'tag3', 'tag4'];
  }
}
