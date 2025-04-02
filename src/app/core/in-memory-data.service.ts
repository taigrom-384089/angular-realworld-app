import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
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
        token: "your_jwt_token_1",
      },
      {
        id: 3,
        username: "admin",
        email: "admin@example.com",
        bio: "I'm an admin",
        image: "https://i.pravatar.cc/150?u=3",
        token: "your_jwt_token_2",
      },
    ];

    const user = users.find((user) => user.email === "john.doe@example.com");

    const articles = [
      {
        slug: "how-to-learn-angular",
        title: "How to learn Angular",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nisi. Curabitur a diam euismod, ultricies lorem non, luctus velit. Sed auctor, nisl id aliquet ultricies, nunc ante ultricies enim, sed commodo ipsum lorem vel orci. Sed auctor, nisl id aliquet ultricies, nunc ante ultricies enim, sed commodo ipsum lorem vel orci. Sed auctor, nisl id aliquet ultricies, nunc ante ultricies enim, sed commodo ipsum lorem vel orci.",
        tagList: ["angular", "frontend"],
        createdAt: new Date("2021-01-01"),
        updatedAt: new Date("2021-01-01"),
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
      {
        slug: "how-to-learn-react",
        title: "How to learn React",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu velit sodales faucibus vel a urna. Ut dignissim risus at libero varius, eget lacinia enim aliquet. Ut bibendum, diam vel feugiat tincidunt, sem mi ultrices diam, et ultricies velit sapien nec velit. Morbi sit amet odio sed sem interdum pretium. Praesent sed magna ut sem interdum pretium. Praesent sed magna ut sem interdum pretium. Curabitur in metus id ligula tempor interdum. Mauris vulputate velit sed velit interdum, sed ultricies velit aliquet. Sed id nunc id metus hendrerit interdum. Sed id nunc id metus hendrerit interdum.",
        tagList: ["react", "redux", "javascript"],
        createdAt: "2020-03-10T04:37:25.000Z",
        updatedAt: "2020-03-10T04:37:25.000Z",
        favorited: true,
        favoritesCount: 99,
        author: {
          username: "stema",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
      {
        slug: "how-to-build-a-react-drag-and-drop-file-upload-ui",
        title: "How to build a React drag and drop file upload UI",
        description:
          "In this video, I'll show you how to build a drag and drop file upload UI in React.",
        body: "In this video, I'll show you how to build a drag and drop file upload UI in React.",
        tagList: ["react", "redux", "javascript"],
        createdAt: "2020-03-10T04:37:25.000Z",
        updatedAt: "2020-03-10T04:37:25.000Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "stema",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
      {
        slug: "how-to-build-a-react-drag-and-drop-file-upload-ui",
        title: "How to build a React drag and drop file upload UI",
        description:
          "In this video, I'll show you how to build a drag and drop file upload UI in React.",
        body: "In this video, I'll show you how to build a drag and drop file upload UI in React.",
        tagList: ["react", "redux", "javascript"],
        createdAt: "2020-03-10T04:37:25.000Z",
        updatedAt: "2020-03-10T04:37:25.000Z",
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "stema",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
    ];

    const articlesCount = articles.length;

    const tags = ['react', 'redux', 'javascript', 'node', 'css', 'html', 'python', 'java', 'c++', 'c', 'go', 'ruby', 'php', 'swift', 'kotlin', 'scala', 'dart', 'rust', 'elixir', 'haskell', 'coffeescript', 'perl', 'r', 'matlab', 'fortran', 'lua', 'groovy', 'bash', 'powershell', 'sql', 'nosql', 'mongodb', 'postgresql', 'mysql', 'redis', 'memcached', 'elasticsearch', 'kafka', 'rabbitmq', 'docker', 'kubernetes', 'aws', 'azure', 'google-cloud', 'firebase', 'google-analytics', 'google-tag-manager'];


    const db = { 
      users, 
      user: {user}, 
      articles: { articles: articles, articlesCount: articlesCount }, 
      tags: { tags } 
    };

    return db;
  }
}
