import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        username: "john_doe",
        email: "john.doe@example.com",
        bio: "I'm a software engineer",
        image: "https://i.pravatar.cc/150?u=1",
        token: "your_jwt_token",
      },
      {
        id: 2,
        username: "jane_doe",
        email: "jane.doe@example.com",
        bio: "I'm a freelance graphic designer",
        image: "https://i.pravatar.cc/150?u=2",
        token: null,
      },
      {
        id: 3,
        username: "admin",
        email: "admin@example.com",
        bio: "I'm an admin",
        image: "https://i.pravatar.cc/150?u=3",
      },
    ];

    const user = users.find((user) => user.email === "john.doe@example.com");

    return { users, user };
  }
}
