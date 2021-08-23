export class CharacterModel{
  name: string | null;
  role: string | null;
  description: string | null;
  age: number | null;
  personality: string | null;
  skills: string | null;
  createdAt: string | null;
  creator: string | null;
  avatar: string | null;

  constructor() {
    this.name = null;
    this.role = null;
    this.description = null;
    this.age = null;
    this.personality = null;
    this.skills = null;
    this.createdAt = null;
    this.creator = null;
    this.avatar = null;
  }
}
