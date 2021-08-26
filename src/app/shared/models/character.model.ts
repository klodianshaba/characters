import {DateService} from "../../core/services/date.service";
import {SkillModel} from "./skill.model";

export interface CharacterInterface {
  id: number;
  name: string;
  role: string;
  description: string;
  age: number;
  personality: string;
  skills: SkillModel[];
  createdAt: Date;
  creator: string;
  avatar: string | ArrayBuffer;
}


export class CharacterModel{
  id: number;
  name: string;
  role: string;
  description: string;
  age: number ;
  personality: string ;
  skills: SkillModel[];
  createdAt: Date ;
  creator: string ;
  avatar: string | ArrayBuffer;

  constructor(private init?: CharacterInterface) {
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
    Object.assign(this,init);
  }
}
