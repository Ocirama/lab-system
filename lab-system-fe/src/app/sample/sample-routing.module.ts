import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SampleListComponent} from './sample-list/sample-list.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: SampleListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SampleRoutingModule {
}
