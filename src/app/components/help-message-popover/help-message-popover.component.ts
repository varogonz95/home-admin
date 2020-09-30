import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-help-message-popover',
    templateUrl: './help-message-popover.component.html',
    styleUrls: ['./help-message-popover.component.scss'],
})
export class HelpMessagePopoverComponent implements OnInit {

    @Input()
    public title: string

    @Input()
    public content: string

    constructor() { }

    ngOnInit() { }

}
