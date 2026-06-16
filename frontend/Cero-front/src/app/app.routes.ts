import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import {
  InformativaComponent
} from './features/informativa/informativa.component';
import { EcommerceComponent } from './features/ecommerce/ecommerce.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BlogComponent } from './features/blog/blog.component';
import { LandingComponent } from './features/landing/landing.component';
import { SaasComponent } from './features/saas/saas.component';
import { ReservasComponent } from './features/reservas/reservas.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'informativa',
    component: InformativaComponent
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },
  {
    path: 'saas',
    component: SaasComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
