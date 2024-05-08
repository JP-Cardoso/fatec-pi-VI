
const db = [];

export class UserRepository {

  save(user) {
    db.push(user);
    for (const data of db) {
      console.log(data);
    }
  }

}