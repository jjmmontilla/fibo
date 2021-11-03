import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: any[] = [];
  public dataSource: any[] = [];
  public displayedColumns: string[] = ['id', 'title', 'body'];

  public postId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }


  ngOnInit(): void {

    this.postService.getPosts().then((resp: any) => {
      this.posts = resp;
      console.log('----------res-->', resp);
    });

  }

  search() {
    this.router.navigate([`/post/${this.postId}/comments`]);
  }

  createPost() {
    console.log('create post---->>>');

    this.router.navigate(['/posts/new']);
  }


}
