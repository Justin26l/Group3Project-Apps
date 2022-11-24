import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  public base_url = "http://localhost"

  constructor(
    @Inject("base_url") var1 : string // from => app > app.module.ts > providers
  ) { 
    this.base_url = var1;
  }
}
