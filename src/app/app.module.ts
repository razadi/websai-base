import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { DaterangepickerModule } from 'angular-2-daterangepicker';
// rutas
import { APP_ROUTES } from './app.routes';
// modules
import { PagesModule } from './pages/pages.module';
// 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NofoundComponent } from './shared/nofound/nofound.component';

// import { SearchembPipe } from './pipes/search/searchemb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // DaterangepickerModule,
    FormsModule,
    // ReactiveFormsModule,
    APP_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
