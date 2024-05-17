import {CreateUserDto} from "./create-user.dto";

export interface UserDto extends CreateUserDto {
  id: number;
}
