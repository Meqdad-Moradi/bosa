import { ProjectExplorerService } from './../../services/project-explorer.service';
import { ISideNavAction } from './../../interfaces/side-nave';
import { IProjectExplorer } from './../../interfaces/IProjectExplorer';
import { SideNavActionService } from './../../services/side-nav-action.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrls: ['./side-nave.component.css'],
})
export class SideNaveComponent implements OnInit {
  actionNavData: ISideNavAction[] = [];
  projectExplorerData: IProjectExplorer[] = [];
  customId!: number;
  listOpen: boolean = false;

  constructor(
    private sideNavActionService: SideNavActionService,
    private projectExplorerService: ProjectExplorerService
  ) {}

  ngOnInit(): void {
    this.getActionData();
    this.getExplorerData();
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
}
