import { ErrorComponent } from './500/error.component';
import { PageNoFoundComponent } from './404/page-no-found.component'
import {NgModule} from '@angular/core';
import { IndexSystemErrorsComponent } from './index-system-errors/index-system-errors.component';
import {SystemErrorsRoutesModule} from './system-errors.route';




@NgModule({
  imports: [
    SystemErrorsRoutesModule,
  ],
  declarations: [
    IndexSystemErrorsComponent,
    PageNoFoundComponent,
    ErrorComponent
  ],
  providers: [
  ]
})

export class SystemErrorsModule { }
