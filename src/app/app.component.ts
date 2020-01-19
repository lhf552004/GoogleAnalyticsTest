import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import pdfMake from "pdfmake/build/pdfmake";
import { environment } from 'src/environments/environment';
import pdfFonts from './vfs_fonts.js';
import { AnalyticsService } from './shared/google-analytics/analytics.service';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  closeResult: string;

  userId: string;

  constructor(private route: ActivatedRoute, private router: Router, private analyticsService: AnalyticsService) {
    this.analyticsService.init();
    this.userId = this.analyticsService.userId;
    this.analyticsService.setUserId();
  }

  setUserId() {
    this.analyticsService.userId = this.userId;
    this.analyticsService.setUserId();
  }

  send() {
    this.analyticsService.event('send', { event_category: 'Home', event_label: 'Test', value: 'Test haha', user_id: this.userId });
  }

  showSub() {
    this.router.navigate(['sub'], { relativeTo: this.route });
  }
}