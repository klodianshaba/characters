import * as fromCharacter from './characters.actions';

describe('loadCharacters', () => {
  it('should return an action', () => {
    expect(fromCharacter.loadCharacters().type).toBe('[Character] Load Characters');
  });
});
