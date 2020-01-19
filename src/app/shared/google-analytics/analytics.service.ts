import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  userId: string = 'dadf683d-ca61-4e86-a9de-9e92bc100a89';

  constructor(private router: Router) { }

  // Trigger a custom event (Not route related) to Google Analytics
  public event(eventName: string, params: {}) {
    //this.setUserId();
    gtag('event', environment.googleAnalyticsKey, eventName, params);
    console.log('Send event: ', eventName, params);
    console.log('User Id', this.userId);
  }

  public init() {
    // Listen to route changes
    this.listenForRouteChanges();

    // Add scripts
    try {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.googleAnalyticsKey;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '` + environment.googleAnalyticsKey + `', {'send_page_view': false});
      `;
      document.head.appendChild(script2);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

  setUserId() {
    console.log('Set user Id', this.userId);
    gtag('config', environment.googleAnalyticsKey, {
      'user_id': this.userId
    });
    gtag('set', {'user_id': this.userId});
  }

  private listenForRouteChanges() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsKey, {
          'page_path': event.urlAfterRedirects
        });
        console.log('Sending Google Analytics hit for route', event.urlAfterRedirects);
        console.log('Property ID', environment.googleAnalyticsKey);
      }
    });
  }
}