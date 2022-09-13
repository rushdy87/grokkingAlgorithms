class Voted {
  constructor() {
    this.votters = {};
  }

  check_voter(name) {
    if (this.votters[name]) {
      return 'kick them out!';
    }
    this.addVoter(name);
    return 'let them vote!';
  }

  addVoter(name) {
    this.votters[name] = true;
  }
}

const voted = new Voted();

console.log(voted.check_voter('Ali'));
console.log(voted.check_voter('Ali'));
console.log(voted.check_voter('Mohammed'));
