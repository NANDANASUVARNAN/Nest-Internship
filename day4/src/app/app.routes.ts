import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { SingleviewList } from './singleview-list/singleview-list';

export const routes: Routes = [
    {path:'product',component:Product},
    {path:'singleview-list/:titleid',component:SingleviewList}
    
    
];
