import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contactus } from './pages/contactus/contactus';
import { Service } from './pages/service/service';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'about',component:About},
    {path:'contactus',component:Contactus},
    {path:'service',component:Service},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home}
];
