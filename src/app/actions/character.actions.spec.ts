import * as fromCharacter from './character.actions';

describe('loadCharacters', () => {
  it('should return an action', () => {
    expect(fromCharacter.loadCharacters().type).toBe('[Character] Load Characters');
  });
});
