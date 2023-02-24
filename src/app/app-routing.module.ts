import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrGeneratorComponent } from './components/qr-generator/qr-generator.component';

const routes: Routes = [
  {
    path: 'qr-generate',
    component: QrGeneratorComponent,
    title: 'QR Code generator'
  },
  {
    path: '',
    redirectTo: 'qr-generate',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'qr-generate',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
