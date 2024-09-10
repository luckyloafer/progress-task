import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CheckpointsComponent } from './components/checkpoints/checkpoints.component';

const routes: Routes = [
  {path:'', redirectTo:'/checkpoints',pathMatch:'full'},
  {path:'checkpoints',component:CheckpointsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
