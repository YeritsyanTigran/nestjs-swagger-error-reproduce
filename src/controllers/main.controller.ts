import {Body, ClassSerializerInterceptor, Controller, Get, Patch, Post, UseInterceptors} from "@nestjs/common";
import {UserDto, UserPublicDto, UserUpdateDto} from "../dtos/user.dtos";

@Controller()
export class MainController {
    @Get('/private/user')
    @UseInterceptors(ClassSerializerInterceptor)
    private async getPrivateUser(): Promise<UserDto> {
        return {
            username: 'username',
            password: 'password',
        }
    }

    @Get('/public/user')
    @UseInterceptors(ClassSerializerInterceptor)
    private async getPublicUser(): Promise<UserPublicDto> {
        return {
            username: 'username',
        }
    }

    @Post("/user")
    private async create(@Body() user: UserDto) {
        console.log(user);
        return;
    }

    @Patch('/user')
    private async update(@Body() userUpdateDto: UserUpdateDto) {
        console.log(userUpdateDto);
    }
}
