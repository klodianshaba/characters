import {DateService} from "../../core/services/date.service";

export interface CharacterInterface {
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
  name: string | null;
  role: string | null;
  description: string | null;
  age: number | null;
  personality: string | null;
  skills: string | null;
  createdAt: Date | null;
  creator: string | null;
  avatar: string | null;

  constructor(private character?: CharacterInterface) {
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
