import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { JwtService } from "./core/auth/services/jwt.service";
import { UserService } from "./core/auth/services/user.service";
import { apiInterceptor } from "./core/interceptors/api.interceptor";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";
import { errorInterceptor } from "./core/interceptors/error.interceptor";
import { EMPTY } from "rxjs";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./core/in-memory-data.service";
import { provideClientHydration } from "@angular/platform-browser";

export function initAuth(jwtService: JwtService, userService: UserService) {
  return jwtService.getToken() ? userService.getCurrentUser() : EMPTY;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([apiInterceptor, tokenInterceptor, errorInterceptor])
    ),
    provideAppInitializer(() =>
      initAuth(inject(JwtService), inject(UserService))
    ),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ),
  ],
};
