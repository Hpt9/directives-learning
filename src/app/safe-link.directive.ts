import { Directive,ElementRef,inject,input } from "@angular/core";

@Directive({
    selector : 'a[appSafeLink]',
    standalone: true,
    host : {
        '(click)' : 'onWantToLeave($event)'
    }
})

export class SafeLinkDirective{
    queryParam = input('myApp');
    private hostElRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    constructor(){
        console.log("safelink drective is ready")
    }

    onWantToLeave(event: MouseEvent){
        if(window.confirm("Do you want to leave app?")){
            const address = (event.target as HTMLAnchorElement).href;
            this.hostElRef.nativeElement.href  = address + '?from=' + this.queryParam()
            return
        }else{
        event.preventDefault()
        }

    }
}