import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ProjectExplorerService } from './../../services/project-explorer.service';
import { ISideNavAction } from './../../interfaces/side-nave';
import { IProjectExplorer } from './../../interfaces/IProjectExplorer';
import { SideNavActionService } from './../../services/side-nav-action.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.css'],
})
export class SideNaveComponent implements OnInit, OnDestroy {
  actionNavData: ISideNavAction[] = [];
  projectExplorerData: IProjectExplorer[] = [];
  customId!: number;
  listOpen: boolean = false;

  isSmallScreen: boolean = false;
  subscribedObserver!: Subscription;

  constructor(
    private sideNavActionService: SideNavActionService,
    private projectExplorerService: ProjectExplorerService,
    private breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getActionData();
    this.getExplorerData();

    // detect screen size
    this.subscribedObserver = this.breakPointObserver
      .observe(['(max-width: 850px)'])
      .subscribe((result: BreakpointState) => {
        this.isSmallScreen = result.matches;
      });
  }

  getActionData(): void {
    this.sideNavActionService
      .renderData()
      .subscribe((result) => (this.actionNavData = result));
  }

  getExplorerData(): void {
    this.projectExplorerService
      .renderData()
      .subscribe((result) => (this.projectExplorerData = result));
  }

  lastId?: number;

  toggleSideNave(item: IProjectExplorer): void {
    this.customId = item.id;
  }

  ngOnDestroy(): void {
    this.subscribedObserver.unsubscribe();
  }
}
