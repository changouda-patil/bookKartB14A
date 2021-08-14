import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const appRoutes: Routes = [
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
