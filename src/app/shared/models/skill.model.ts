export interface SkillInterface {
  value: string;
}

export class SkillModel {
  value: string;
  constructor(private overwrite: SkillInterface) {
    this.value = overwrite.value;
  }
}
