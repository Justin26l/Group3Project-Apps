import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
<<<<<<< HEAD
  
   

=======
  {
    path: 'menu-category/:cat',
    loadChildren: () => import('./menu-category/menu-category.module').then( m => m.MenuCategoryPageModule)
  }
>>>>>>> f2baa78cd68845287e59daabc417937b22271719

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
