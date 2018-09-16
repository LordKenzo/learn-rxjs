import { Observable, Observer } from 'rxjs';

// There are multiple way to create an Observable
// 1. The create() accept a subscribe function with an observer param
const observable = Observable.create((observer: Observer<string>) => {
  observer.next('Hello');
});
// 2. We need to subscribe to consume the value
observable.subscribe((data: string) => addValue(data));

// Utility function to display Observable value
function addValue(value: any) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  const output = document.getElementById('output');
  if (output) {
    output.appendChild(node);
  }
}
