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

  constructor(private postsService: PostsService ) {}

  ngOnInit() {
    this.paginate();
  }

  paginate(event?) {
    this.postsService.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts.push(...response.posts);

        if(event) {
          event.target.complete();
        }
        
        if (response.posts.length === 0) {
          event.target.disabled = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
