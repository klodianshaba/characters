import {DateService} from "../../core/services/date.service";

export interface CharacterInterface {
  id: number;
  name: string;
  role: string;
  description: string;
  age: number;
  personality: string;
  skills: string;
  createdAt: Date;
  creator: string;
  avatar: string;
}


export class CharacterModel{
  id: number;
  name: string;
  role: string;
  description: string;
  age: number ;
  personality: string ;
  skills: string ;
  createdAt: Date ;
  creator: string ;
  avatar: string ;

  constructor(private character?: CharacterInterface) {
    this.id = null;
    this.name = null;
    this.role = null;
    this.description = null;
    this.age = null;
    this.personality = null;
    this.skills = null;
    this.createdAt = null;
    this.creator = null;
    this.avatar = null;
    Object.assign(this,character);
  }
}
