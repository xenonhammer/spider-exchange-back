import {toComparePassword, toCryptPasswordSync} from "@src/utils";
import {v4 as uuidV4} from 'uuid'

const userList = [
  {
    id: 'e669a709-bc99-41a6-9042-f23ad19eab18',
    login: 'xenon',
    name: 'aliev',
    password: '$2a$10$Ab5HiGZTfKgf5rpHU4ZXqOlyJvdeMj0geDmzhL.VquXjholQ51v6u',
    token: '',
  }
]

export default class User {
  public readonly id: string;
  public readonly login: string;
  protected password: string;
  public readonly createdAt: string;
  
  constructor(login: string, password: string) {
    this.id = uuidV4();
    this.login = login;
    this.password = toCryptPasswordSync(password);
    this.createdAt = new Date().toISOString();
    
    
  }
  
  static readonly findByCredentials = (login: string, password: string) => {
    return userList.find(user => user.login === login && toComparePassword(password, user.password));
  }
  
}

