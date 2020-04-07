import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  isDisabled: boolean = false;

  constructor(private postsService: PostsService ) {}

  ngOnInit() {
    this.paginate();
  }

  doRefresh(event) {
    this.paginate(event, true);
    this.posts = [];
    this.isDisabled = false;
  }

  paginate(event?, pull: boolean = false) {
    this.postsService.getPosts(pull).subscribe(
      (response) => {
        console.log(response);
        this.posts.push(...response.posts);

        if(event) {
          event.target.complete();
        }

        if (response.posts.length === 0) {
          this.isDisabled = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
