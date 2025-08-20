import { PartialType } from '@nestjs/swagger';
import { CreateSwaagerDto } from './create-swaager.dto';

export class UpdateSwaagerDto extends PartialType(CreateSwaagerDto) {}
