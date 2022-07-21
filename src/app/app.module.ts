import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { PersistenceService } from './shared/services/persistance.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { YourFeedModule } from "./your-feed/your-feed.module";
import { TagFeedModule } from "./tag-feed/tag-feed.module";
import { ArticleModule } from "./article/article.module";
import { CreateArticleModule } from "./create-article/create-article.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    TopBarModule,
    CreateArticleModule, // strict order for routing
    ArticleModule // strict order for routing
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
