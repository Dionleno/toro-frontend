import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthModule } from '@auth0/auth0-angular';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// **************************************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormatActionPipe } from './pipes/formatAction/format-action.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CheckingAccountComponent } from './components/checking-account/checking-account.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ClientsService } from './services/clients.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { SecureInterceptor } from './auth/secure-interceptor.service';
registerLocaleData(ptBr);
// **************************************************

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    FormatActionPipe,
    ToolbarComponent,
    CheckingAccountComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      ...env.auth,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: env.auth.audience,
      }, 
      cacheLocation: 'localstorage' as const,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${env.dev.serverUrl}/*`,
            tokenOptions: {
              authorizationParams: {
                audience: env.auth.audience,
                scope: 'openid profile email',
              }
            },
          },
        ]
      }
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecureInterceptor,
      multi: true,
    },
    ClientsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
