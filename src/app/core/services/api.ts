import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  readonly baseUrl = '';
  private httpClient = inject(HttpClient);

  get<T>(url: string) {
    return this.httpClient.get<T>(this.baseUrl+'/'+url);
  }

  post<TRequest,TResponse>(url: string, data: TRequest) {
    return this.httpClient.post<TResponse>(this.baseUrl+'/'+url, data);
  }

}
