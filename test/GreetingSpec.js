/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

  const greeting = new Greeting();

  it('Can say hello', () => {
    const message = greeting.hello();
    expect(message).to.be.equal('Welcome, Guest!');
  });

  it('Should say bye', () => {
  	expect(greeting.bye().to.be.equal('bye'))
  })

});
