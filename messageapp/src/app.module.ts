import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { HttpModule } from '@nestjs/axios';
import { TestapisController } from './testapis/testapis.controller';
import { TestapisService } from './testapis/testapis.service';


@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'nest',
      password: 'app',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje])
  ],
  controllers: [AppController, MensajesController, TestapisController],
  providers: [AppService, MensajesService, TestapisService],
})
export class AppModule {}
