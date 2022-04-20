import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditListItemComponent } from './Components/reddit-list-item/reddit-list-item.component';
import { RedditListContainerComponent } from './Components/reddit-list-container/reddit-list-container.component';
import { RedditApiService } from './Services/reddit-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RedditListItemComponent,
    RedditListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RedditApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
