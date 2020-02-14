const users = [];

module.exports = class User {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
  }

  save() {
    users.push(this);
  }

  static getAll() {
    return users;
  }
}
