
const db = [];

export class UserRepository {

  save(params) {
    db.push(params);
    const result = db.find((user) => user.password === "0");
    if(!result) {
      return null
    }
    return "ok"
  }

}