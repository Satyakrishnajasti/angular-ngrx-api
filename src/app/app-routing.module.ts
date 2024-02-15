import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumsPageComponent } from './core/pages/albums-page/albums-page.component';
import { CommentsPageComponent } from './core/pages/comments-page/comments-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'albums',
        component: AlbumsPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'comments',
        component: CommentsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
