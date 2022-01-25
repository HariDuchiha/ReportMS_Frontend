import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { RouterModule } from '@angular/router';
import { FindReportComponent } from './find-report/find-report.component';
import { ViewAllReportComponent } from './view-all-report/view-all-report.component';
// import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    FindReportComponent,
    ViewAllReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    HttpClientModule,
    FormsModule,
    SiteFrameworkModule,
    RouterModule.forRoot([
      {path:'findReport', component: FindReportComponent },
      {path:'generateReport', component: ReportComponent},
      {path:'viewAllReport', component: ViewAllReportComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
