import Job from "./Jobs";

export default class Freelancer implements Job {
  title: string;
  location: string;
  salary: number;
  id: string;

  constructor(title: string, location: string, salary: number, id: string) {
    this.title = title
    this.location = location
    this.salary = salary
    this.id = id
  }
}
