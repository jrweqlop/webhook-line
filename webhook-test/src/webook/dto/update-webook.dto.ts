import { PartialType } from '@nestjs/mapped-types';
import { CreateWebookDto } from './create-webook.dto';

export class UpdateWebookDto extends PartialType(CreateWebookDto) {}
