import { Directive,inject,input,effect, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'})
  private authErvice = inject(AuthService)
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)
  constructor() { 

    effect(()=>{
      if(this.authErvice.activePermission()===this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainerRef.clear();
      }
    })

  }

}