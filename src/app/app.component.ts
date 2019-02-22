import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compiler';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer)
  {
    this.matIconRegistry.addSvgIcon(
      `login`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/avatar.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `signup`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/clipboard.svg")
    );
  }
}
