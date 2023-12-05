import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationJoinErrorsPipe} from "./validation-join-errors.pipe";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationJoinErrorsPipe({
        transform: true, // not only validate, but also return result of plainToClass
        validateCustomDecorators: true, // allow the validation pipe to work with custom decorators, i.e. @RequestHeaders()
    }));
    await app.listen(3000);
}

bootstrap();
