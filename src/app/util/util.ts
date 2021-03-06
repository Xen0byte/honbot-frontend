import { Pipe, PipeTransform } from '@angular/core';

export function getSkillBracket(averageScore: number) {
  if (averageScore >= 31) {
    return 'Very High';
  }
  if (averageScore >= 28) {
    return 'High';
  }
  return 'Normal';
}

@Pipe({ name: 'skillBracket' })
export class SkillBracketPipe implements PipeTransform {
  transform(value: number | string) {
    if (!value || typeof value !== 'number') {
      return '';
    }
    return getSkillBracket(value);
  }
}

export function getQuality(quailty: number) {
  if (quailty >= .7) {
    return 'Very High';
  }
  if (quailty >= .6) {
    return 'High';
  }
  if (quailty >= .5) {
    return 'Normal';
  }
  return 'Low';
}

export function isRanked(mode = '') {
  return mode.startsWith('Season') || mode === 'Ranked';
}
