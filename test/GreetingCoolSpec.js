/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import GreetingCool from '../src/GreetingCool';

describe('GreetingCool', () => {

  const greeting = new GreetingCool();

  it('Can say hello the cool way!', () => {
    const message = greeting.hello();
    expect(message).to.be.equal('Welcome, blah!');
  });

  it('Can say bye also', () => {
    const message = greeting.bye();
    expect(message).to.be.equal('Bye, blah!');
  });

});
