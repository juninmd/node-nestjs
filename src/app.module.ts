import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassificationController } from './classification/classification.controller';

@Module({
  imports: [],
  controllers: [AppController, ClassificationController],
  providers: [AppService],
})
export class AppModule {}
