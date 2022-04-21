import { Component, HostListener, OnInit } from '@angular/core';
import { RedditApiService } from 'src/app/Services/reddit-api.service';
import { PostData } from 'src/app/Types/types';

@Component({
  selector: 'app-reddit-list-container',
  templateUrl: './reddit-list-container.component.html',
  styleUrls: ['./reddit-list-container.component.css'],
})
export class RedditListContainerComponent implements OnInit {
  public posts: any = [];
  public responseData: string[] = [];
  private marginOfError = 20;
  public currentSearchValue: string = 'aww';
  private perviousSearchValue: string = '';

  // Here we check on every scroll event if the current scroll position is about the same as the page height
  // ( +-20, because the scroll postion is very unlikely to be exactly the same as the page height, so I added a margin of error )
  // so if the page is scrolled down we call the getPosts() method
  @HostListener('window:scroll')
  onWindowScroll() {
    if (
      window.innerHeight + window.scrollY > document.body.offsetHeight &&
      window.innerHeight + window.scrollY <
        document.body.offsetHeight + this.marginOfError
    ) {
      this.getPosts();
    }
  }

  constructor(private redditApi: RedditApiService) {}
  // On init we get the initial 25 posts
  ngOnInit(): void {
    this.getPosts();
  }

  // The getPosts method populates the posts array filtering the data received from the request
  // and also gets the AFTER property value from the request and uses it in the next request to load additional related posts
  //  on init we load the posts with the "aww" query;
  // I had to make a clumsy setTimeout because I had to click the search button twice in order to update the page, and I couldn't find a better solution in time
  getPosts() {
    if (this.perviousSearchValue !== this.currentSearchValue) {
      this.posts = [];
    }
    this.perviousSearchValue = this.currentSearchValue;

    this.redditApi.getPosts(this.currentSearchValue).subscribe((data) => {
      this.redditApi.after = data.data.after;
    });
    setTimeout(() => {
      this.redditApi.getPosts(this.currentSearchValue).subscribe((data) => {
        const responseData = data;
        responseData.data.children.forEach((post: PostData) => {
          this.posts.push(post);
        });
        this.redditApi.after = responseData.data.after;
      });
    }, 500);
  }
}
