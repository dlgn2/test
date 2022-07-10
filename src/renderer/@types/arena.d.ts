/* eslint-disable prettier/prettier */

export interface UserInterface{
  _id?:String
  username?:String
  email?:String
  password?:String
  fullName?:String
  photo?:String
  friends?:Array<Object>
  balance?:Number
  teams?:Object
  tournaments?:Object
  challenges?:Object
}

export interface ChallengeMatchInterface{
  userID?: string;
  game_match_id?: string;
  game_name?: string;
  summoner_name?:string;
  puuid?: string;
}

export interface GameClientInterface {
  protocol: string,
  address: string,
  port: number,
  username: string,
  password: string
}

export interface UserRegisterInterface {
  email: string,
  username: string,
  password: string,
  fullName: string,
}
export interface userLoginInterface {
  email: string,
  password: string,
}

export interface profileInterface {
  username: string,
  photo:string,
  id:string
}
