import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  InMemoryDbService,
  RequestInfo,
  RequestInfoUtilities,
  ResponseOptions,
  STATUS,
} from "angular-in-memory-web-api";
import { Observable, of } from "rxjs";

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

    const profiles = [
      {
        id: 1,
        username: "john_doe",
        bio: "I'm a software engineer",
        image: "https://i.pravatar.cc/150?u=1",
        following: true
      },
      {
        id: 2,
        username: "jane_doe",
        bio: "I'm a freelance graphic designer",
        image: "https://i.pravatar.cc/150?u=2",
        following: true
      },
      {
        id: 3,
        username: "admin",
        bio: "I'm an admin",
        image: "https://i.pravatar.cc/150?u=3",
        following: false
      },
    ];

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
          username: "john_doe",
          bio: "I work at statefarm",
          image: "https://i.pravatar.cc/?u=3",
          following: false,
        },
        offset: 0,
        limit: 10,
        isFeed: true
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
          username: "jane_doe",
          bio: "I work at statefarm",
          image: "https://i.pravatar.cc/?u=2",
          following: false,
        },
        offset: 0,
        limit: 10,
        isFeed: true
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
          username: "john_doe",
          bio: "I work at statefarm",
          image: "https://i.pravatar.cc/150?u=1",
          following: false,
        },
        offset: 0,
        limit: 10,
        isFeed: true
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
          username: "jane_doe",
          bio: "I work at statefarm",
          image: "https://i.pravatar.cc/?u=4",
          following: false,
        },
        offset: 0,
        limit: 10
      },
      {
        slug: "feed-how-to-build-a-react-drag-and-drop-file-upload-ui",
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
          username: "admin",
          bio: "I work at statefarm",
          image: "https://i.pravatar.cc/?u=5",
          following: false,
        },
        offset: 0,
        limit: 10
      },
    ];

    const articlesCount = articles.length;

    const tags = [
      "react",
      "redux",
      "javascript",
      "node",
      "css",
      "html",
      "python",
      "java",
      "c++",
      "c",
      "go",
      "ruby",
      "php",
      "swift",
      "kotlin",
      "scala",
      "dart",
      "rust",
      "elixir",
      "haskell",
      "coffeescript",
      "perl",
      "r",
      "matlab",
      "fortran",
      "lua",
      "groovy",
      "bash",
      "powershell",
      "sql",
      "nosql",
      "mongodb",
      "postgresql",
      "mysql",
      "redis",
      "memcached",
      "elasticsearch",
      "kafka",
      "rabbitmq",
      "docker",
      "kubernetes",
      "aws",
      "azure",
      "google-cloud",
      "firebase",
      "google-analytics",
      "google-tag-manager",
    ];

    const db = {
      users,
      user: { user },
      profiles,
      articles: { articles: articles, articlesCount: articlesCount },
      tags: { tags },
    };

    return db;
  }

  get(reqInfo: RequestInfo): Observable<ResponseOptions> {
    let data = reqInfo.collection;
    const id = reqInfo.id;
    const query = reqInfo.query;
    const url = reqInfo.url;

    // tslint:disable-next-line:triple-equals
    if (id != undefined && id !== "" && id !== "feed" && id !== "slug") {
      data = this.findById(data, id);
    } else if (query) {

      if (id === "feed") {
        query.set("isFeed", ["true"]);
      }

      data = this.applyQuery(data, query);
    }

    if (!data) {
      return this.createErrorResponseOptions(
        url,
        STATUS.NOT_FOUND,
        `'${reqInfo.collectionName}' with id='${id}' not found`,
        reqInfo.utils
      );
    }

    return reqInfo.utils.createResponse$(() => ({
      body: this.clone(data),
      headers: reqInfo.headers,
      status: STATUS.OK,
      url: url
    }));
  }

  /**
   * Find first instance of item in collection by `item.id`
   * @param data
   * @param id
   */
  protected findById<T extends { id: any, slug: any, username: any }>(
    data: T | T[],
    id: any
  ): T | undefined {

    if (!Array.isArray(data)) { // { a:1, b: []}
      // { b:[] }
      data = (Object.entries(data)[0][1] as any[]);
    }

    return data.find((item: T) => item.id === id || item.slug === id || item.username === id);
  }

  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  protected applyQuery(data: any | any[], query: Map<string, string[]>): any | any[] {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    const conditions: { name: string; rx: RegExp }[] = [];
    const caseSensitive = undefined;
    query.forEach((value: string[], name: string) => {
      value.forEach((v) =>
        conditions.push({ name, rx: new RegExp(decodeURI(v), caseSensitive) })
      );
    });

    const len = conditions.length;
    if (!len) {
      return data;
    }

    if (!Array.isArray(data)) { // { a:1, b: []}
      // { a:1 }                                                 // { b:[] }
      data[Object.entries(data)[0][0]] = this.filterCollection(Object.entries(data)[0][1] as any[], conditions, len);
      return data;
    }

    return this.filterCollection(data, conditions, len);
  }

  protected filterCollection(collection: any[], conditions: any[], len: number): any[] {
    // AND the RegExp conditions
    return collection.filter((row) => {
      let ok = true;
      let i = len;
      while (ok && i) {
        i -= 1;
        const cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }
      return ok;
    });
  }

  protected clone(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }

  protected createErrorResponseOptions(
    url: string,
    status: number,
    message: string,
    utils: RequestInfoUtilities
  ): Observable<ResponseOptions> {

    return utils.createResponse$(() => (
      {
        body: { error: `${message}` },
        url: url,
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        status: status,
      }
    ))
  }
}
