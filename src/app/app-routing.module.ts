import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  /*{
    path: '',
    component: HomeComponent
  },*/
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts/new',
    component: FormPostsComponent
  },
  {
    path: 'post/:id/comments',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
