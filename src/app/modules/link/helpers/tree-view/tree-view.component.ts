import { Output, EventEmitter, Input } from "@angular/core";
import * as _ from "lodash";

import { Component } from "@angular/core";
import { ICategory } from "src/app/modules/models/category.interface";
@Component({
  selector: "app-tree-view",
  templateUrl: "./tree-view.component.html",
  styleUrls: ["./tree-view.component.css"]
})
export class TreeViewComponent {

  @Input() enableNested: boolean;


  // the item that is selected.
  selectedItem;
  // the new node title text box value.
  newNodeTitle;
  // indicator of category edit mode.
  editMode: boolean = false;

  // create node event emitter object.
  @Output("onNodeCreate") newNodeEventEmitter = new EventEmitter();
  // edit node event emitter object.
  @Output("onNodeEdit") editNodeEventEmitter = new EventEmitter();
  // remove node event emitter object.
  @Output("onNodeRemove") removeNodeEventEmitter = new EventEmitter();

  // selected node event emitter, emit an event when a node has been selected with the node object.
  @Output('onNodeSelect') selectNodeEmitter = new EventEmitter();

  // main data to be showed as a tree.
  @Input() data: ICategory[];


  // ready for adding new node.
  readyToAddNewNode(item) {
    // exit from edit mode.
    this.editMode = false;
    // make item selected.
    this.selectedItem = item;
  }

  // submit the changes to new node title.
  newNodeTitleSubmit(e, node) {
    // return if the pressed key is not "ENTER" key.
    if (e.keyCode !== 13) return;
    // decide with action should call.
    if (this.editMode) this.editNode(node);
    else this.addNewNode(this.newNodeTitle);
    this.selectedItem = undefined;
  }

  // add new node;
  addNewNode(parent) {
    if(typeof parent === 'string') parent = {title: parent};
    // make empty array if items doesn't exists.
    parent.children = parent.children || [];
    // make new node object.
    const newNodeObject = { title: this.newNodeTitle };
    // append new node to the parent.
    parent.children.push(newNodeObject);
    // clear new node title text box;
    this.newNodeTitle = "";
    // emit the new node event.
    this.newNodeEventEmitter.emit(newNodeObject);
  }

  // prepare to edit node.
  prepareNodeEdit(node) {
    // enable edit mode.
    this.editMode = true;

    // make node selected.
    this.selectedItem = node;
    this.selectNodeEmitter.emit(node);

    // set node title to edit text box.
    this.newNodeTitle = node.title;
  }

  // edit node.
  editNode(node) {
    // set node title to new title.
    node.title = this.newNodeTitle;
    // clear the new title text box.
    this.newNodeTitle = "";
    // emit the node edit event.
    this.editNodeEventEmitter.emit(node);
  }

  // remove node handler.
  remove(node) {
    // remove node from the tree.
    this.data = this.removeFromTree(this.data, node.title);
    // emit the remove node event.
    this.removeNodeEventEmitter.emit();
  }

  // remove node from tree in dom.
  private removeFromTree(arr: ICategory[], childNameToRemove) {
    arr = arr.filter(a => a.title !== childNameToRemove)
    return arr;
  }
}
