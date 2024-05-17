import {CreateUserDto} from "../dtos/create-user.dto";
import * as fs from "fs";
import {UserDto} from "../dtos/user.dto";
import * as path from "path";

const USER_DATA_PATH = path.join(process.cwd(), 'src/data/users.json');

export const saveUser = (userBody: CreateUserDto): UserDto => {

  const restOfUsers = getUsers();

  // save user
  const newUser: UserDto = {
    ...userBody,
    id: restOfUsers.length + 1,
  }
  const updatedUsers = [...restOfUsers, newUser];

  fs.writeFileSync(USER_DATA_PATH, JSON.stringify(updatedUsers));

  return newUser;
}


export const getUsers = (): UserDto[] => {
  // Check if users json file exists
  if (!fs.existsSync(USER_DATA_PATH)) {
    fs.writeFileSync(USER_DATA_PATH, "[]");
  }

  return (JSON.parse(fs.readFileSync(USER_DATA_PATH).toString()) as unknown as UserDto[]) || [];
}
