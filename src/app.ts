import { Observable, Observer } from 'rxjs';

// There are multiple way to create an Observable
// 1. The create() accept a subscribe function with an observer param
const observable = Observable.create((observer: Observer<string>) => {
  observer.next('Hello.');
  observer.next('How are you?');
  observer.error('Un errore!!!');
  observer.complete();
  observer.next('Never displayed');
});
// 2. We need to subscribe to consume the value
observable.subscribe(
  (data: string) => addValue(data),
  (err: any) => addValue(err, true),
  () => addValue('Completed'),
);

// Utility function to display Observable value
function addValue(value: any, err: boolean = false) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  let output;
  if (err) {
    output = document.getElementById('error');
  } else {
    output = document.getElementById('output');
  }

  if (output) {
    output.appendChild(node);
  }
}
