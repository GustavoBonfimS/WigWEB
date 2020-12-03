import { Time } from '@angular/common';

export interface NotificationModel {
    autor: string;
    content: string;
    date: Date;
    time: Time;
}