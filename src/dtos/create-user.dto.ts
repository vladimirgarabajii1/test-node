import {AccountType} from "../types/account.type";

export interface CreateUserDto {
  name: string;
  password: string;
  serverAddress: string;
  type: AccountType;
  serverPath?: string;
  port?: number;
  useSsl?: boolean;
}
