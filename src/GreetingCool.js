import Greeting from './Greeting.js';
//import Greeting from 'Greeting';

class GreetingCool extends Greeting {
  constructor() {
    super('blah');
  }
  bye() {
    return `Bye, ${this.name}!`;
  }
}

export default GreetingCool;
