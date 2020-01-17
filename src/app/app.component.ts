import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import pdfMake from "pdfmake/build/pdfmake";
import { environment } from 'src/environments/environment';
import pdfFonts from './vfs_fonts.js';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeResult: string;

  userId: string = 'dadf683d-ca61-4e86-a9de-9e92bc100a99';

  constructor(private router: Router) {
    this.init();
  }

  send() {
    console.log('Send test event');
    this.event('test',  { event_category: 'NavigationNode', event_label: 'Test', value: 'Test haha', user_id: this.userId });
  }

  // Trigger a custom event (Not route related) to Google Analytics
  public event(eventName: string, params: {}) {
    //this.setUserId();
    gtag('event', environment.googleAnalyticsKey, eventName, params);
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
    gtag('config', environment.googleAnalyticsKey, {
      'user_id': this.userId
    });
    gtag('set', {'user_id': this.userId});
    console.log('Set User Id');
  }

  private listenForRouteChanges() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsKey, {
          'page_path': event.urlAfterRedirects,
          'user_id': this.userId
        });
        console.log('Sending Google Analytics hit for route', event.urlAfterRedirects);
        console.log('Property ID', environment.googleAnalyticsKey);
      }
    });
  }
}