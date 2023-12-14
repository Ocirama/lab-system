import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('./log/log.module').then(m => m.LogModule)
  },
  {
    path: 'sample',
    loadChildren: () =>
      import('./sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: 'log',
    loadChildren: () =>
      import('./log/log.module').then(m => m.LogModule)
  },
  {
    path: 'total-moisture-journal',
    loadChildren: () =>
      import('./journal/total-moisture-journal/total-moisture-journal.module').then(m => m.TotalMoistureJournalModule)
  },
  {
    path: 'general-moisture-journal',
    loadChildren: () =>
      import('./journal/general-moisture-journal/general-moisture-journal.module').then(m => m.GeneralMoistureJournalModule)
  },
  {
    path: 'ash-journal',
    loadChildren: () =>
      import('./journal/ash-journal/ash-journal.module').then(m => m.AshJournalModule)
  },
  {
    path: 'litesko',
    loadChildren: () =>
      import('./customers/Litesko/litesko.module').then(m => m.LiteskoModule)
  },
  {
    path: 'litesko-samples',
    loadChildren: () =>
      import('./customers/Litesko/litesko-samples/litesko-samples.module').then(m => m.LiteskoSamplesModule)
  },
  {
    path: 'tm-results',
    loadChildren: () =>
      import('./results/tm-results/tm-results.module').then(m => m.TmResultsModule)
  },
  {
    path: 'ac-results',
    loadChildren: () =>
      import('./results/ac-results/ac-results.module').then(m => m.AcResultsModule)
  },
  {
    path: 'cv-results',
    loadChildren: () =>
      import('./results/cv-results/cv-results.module').then(m => m.CvResultsModule)
  },
  {
    path: 'gm-results',
    loadChildren: () =>
      import('./results/gm-results/gm-results.module').then(m => m.GmResultsModule)
  },
  {
    path: 'full-results',
    loadChildren: () =>
      import('./results/full-results/full-results.module').then(m => m.FullResultsModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
