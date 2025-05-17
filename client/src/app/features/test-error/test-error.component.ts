import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-error',
  imports: [
    MatButton
  ],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors?: string[];
  get404Error() {
    this.http.get(this.baseUrl + 'buggy/notfound').subscribe({
      next: Response => console.log(Response),
      error: Error => console.log(Error)
    })
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: Response => console.log(Response),
      error: Error => console.log(Error)
    })
  }

  get401Error() {
    this.http.get(this.baseUrl + 'buggy/unauthorized').subscribe({
      next: Response => console.log(Response),
      error: Error => console.log(Error)
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/internalerror').subscribe({
      next: Response => console.log(Response),
      error: Error => console.log(Error)
    })
  }

  get400ValidationError() {
    this.http.get(this.baseUrl + 'buggy/validationerror', {}).subscribe({
      next: Response => console.log(Response),
      error: Error => this.validationErrors = Error;
      
    })
  }
}
