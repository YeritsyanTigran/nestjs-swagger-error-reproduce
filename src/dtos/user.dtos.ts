import {Exclude, Expose} from "class-transformer";
import {IsString} from "class-validator";
import {OmitType} from "@nestjs/swagger";

@Exclude()
export class UserPublicDto {
    @Expose() @IsString()
    username: string;
}

@Exclude()
export class UserDto extends UserPublicDto {
    @Expose() @IsString()
    password: string;
}

@Exclude()
export class UserUpdateDto extends OmitType(UserDto, ['password']) {

}
