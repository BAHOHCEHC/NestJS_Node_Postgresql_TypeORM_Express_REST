import { TagService } from '@app/services/tag.service';
import { TagController } from '@app/tag/tag.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
