import {Component, effect} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";
import {DummyService} from "../../services/dummy.service";
import {ActivatedRoute, Router} from "@angular/router";

interface SongNode {
  name: string;
  id: number;
  children?: SongNode[];
}

interface SongFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
}

@Component({
  selector: 'saved-songs',
  templateUrl: './saved-songs.component.html',
  styleUrls: ['./saved-songs.component.scss']
})
export class SavedSongsComponent {

  TREE_DATA: SongNode[] = [];

  private _transformer = (node: SongNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id
    };
  }

  treeControl = new FlatTreeControl<SongFlatNode>(
      node => node.level,
      node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private dummyService: DummyService,
              private router: Router,
              private route: ActivatedRoute) {
    dummyService.getSongs().then(songs => {
      songs.forEach(song => {
        let artistNode = this.TREE_DATA.find(node => node.name === song.artist);
        if (!artistNode) {
          artistNode = { name: song.artist, children: [], id: -1 };
          this.TREE_DATA.push(artistNode);
        }
        artistNode.children?.push({ name: song.title, id: song.id });
      });
      this.dataSource.data = this.TREE_DATA;
    });
  }

  hasChild = (_: number, node: SongFlatNode) => node.expandable;

  handleSongClick(node: SongFlatNode) {
    this.router.navigate([`song/${node.id}`], {relativeTo: this.route});
  }
}
