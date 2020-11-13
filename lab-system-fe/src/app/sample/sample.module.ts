import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleListComponent} from './sample-list/sample-list.component';
import {
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule, MatSortModule,
    MatTableModule, MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SampleRoutingModule} from './sample-routing.module';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import {MatTableExporterModule} from 'mat-table-exporter';



@NgModule({
  declarations: [SampleListComponent, SampleModalComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatPaginatorModule,
        SampleRoutingModule,
        MatToolbarModule,
        MatTableExporterModule,
        MatSortModule
    ],
  entryComponents: [
    SampleModalComponent
  ]
})
export class SampleModule {
}
