// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;

    while (current.next) {
        if (current.value === current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
  return linkedList;
}

console.log(removeDuplicatesFromLinkedList({
  "head": "1",
  "nodes": [
    {"id": "1", "next": "1-2", "value": 1},
    {"id": "1-2", "next": "1-3", "value": 1},
    {"id": "1-3", "next": "2", "value": 1},
    {"id": "2", "next": "3", "value": 3},
    {"id": "3", "next": "3-2", "value": 4},
    {"id": "3-2", "next": "3-3", "value": 4},
    {"id": "3-3", "next": "4", "value": 4},
    {"id": "4", "next": "5", "value": 5},
    {"id": "5", "next": "5-2", "value": 6},
    {"id": "5-2", "next": null, "value": 6}
  ]
}))