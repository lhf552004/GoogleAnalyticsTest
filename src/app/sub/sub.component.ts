import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../shared/google-analytics/analytics.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  userId: string;
  result: string;
  constructor(private analyticsService: AnalyticsService) {
    this.userId = this.analyticsService.userId;
   }

  ngOnInit() {
  }

  sendSub() {
    this.analyticsService.event('send',  { event_category: 'SubCategory', event_label: 'Sub_Test', value: 'Test Sub' });
    this.result = 'Sending event "Send", category: SubCategory, EventLabel: Sub_Test';
  }
}