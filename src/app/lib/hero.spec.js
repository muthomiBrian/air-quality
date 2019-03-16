const chai = require('chai');
const Hero = require('./hero');

const { expect } = chai;

describe('Hero', () => {
  global.document = {
    createElement: () => {
      return {
        alt: '',
        classList: {
          add: () => {},
        },
        appendChild: () => {},
      };
    },
  };

  const main = {
    appendChild: () => { },
  };

  const hero = new Hero(main);
  hero.setHero({
    hero_1_image: 'testUrl',
    hero_1_title: '',
  });

  it('should provide a method to set the imageUrl and title', () => {
    expect(hero.imageUrl).to.equal('testUrl');
  });

  it('should provide a method to render the hero image and title', () => {
    expect(typeof hero.render).to.equal('function');
  });

  it('should show 404 when there is no data', () => {
    expect(typeof hero.render404).to.equal('function');
  });
});
