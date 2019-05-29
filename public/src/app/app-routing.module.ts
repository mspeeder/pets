import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { NofoundComponent} from './nofound/nofound.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  {path: 'pets', component: PetsComponent },
  {path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component: DetailComponent},
  { path: 'pets/:id/edit', component: EditComponent},
  { path: '**', component:  NofoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
