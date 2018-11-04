import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({providedIn:'root'})
export class PLatformDetectorService{
    constructor(@Inject(PLATFORM_ID) private platformID: string){}

    isPlatformBrowser(){
        return isPlatformBrowser(this.platformID);
    }
}