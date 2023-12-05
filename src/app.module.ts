import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MainController} from "./controllers/main.controller";

@Module({
  imports: [],
  controllers: [AppController, MainController],
  providers: [AppService],
})
export class AppModule {}
