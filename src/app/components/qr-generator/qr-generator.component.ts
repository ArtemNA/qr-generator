import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
import { DownloadQrService } from '../../services/download-qr.service';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QrGeneratorComponent {
  formGroup = this.fb.group({
    qrInput: this.fb.control(''),
    errorCorrectionLevel: this.fb.control('M' as QRCodeErrorCorrectionLevel)
  });
  correctionLevelInfo: string = 'Each QR code has one of four levels (of error correction): L, M, Q, H. The level determines the percentage of the total QR code that is allowed to be dirty or damaged without being unable to read. Level L can be dirty/damaged for up to 7%, level M 15%, level Q 25%, level H 30%.';

  constructor(private readonly fb: NonNullableFormBuilder, private readonly downloadQRService: DownloadQrService) {}

  get qrInput(): FormControl<string> {
    return this.formGroup.controls.qrInput;
  }

  get errorCorrectionLevel(): FormControl<QRCodeErrorCorrectionLevel> {
    return this.formGroup.controls.errorCorrectionLevel;
  }

  downloadQRCode(qr: QRCodeComponent) {
    this.downloadQRService.saveAsImage(qr);
  }

  clear(): void {
    this.qrInput.setValue('');
  }
}
