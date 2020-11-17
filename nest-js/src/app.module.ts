import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
const mockAppService = {
  
}
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useValue: mockAppService
    }
  ],
})
export class AppModule {}
