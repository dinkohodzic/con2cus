import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component'; 
import { ProductsComponent } from './products/products.component'; 
import { ServicesComponent } from './services/services.component'; 
import { JobsComponent } from './jobs/jobs.component'; 
import { ContactComponent } from './contact/contact.component'; 

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
   data: { page: '' }
},
{
  path:'about',
  component: AboutComponent,
  data: { page: 'about' }
},
{
  path:'products',
  component: ProductsComponent,
  data: { page: 'products' }
},
{
  path:'services',
  component: ServicesComponent,
  data: { page: 'services' }
},
{
  path:'jobs',
  component: JobsComponent,
  data: { page: 'jobs' }
},
{
  path:'contact',
  component: ContactComponent,
  data: { page: 'contact' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
