import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

const routes: Routes = [
  { path:"custom", component: CustomSnackbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
