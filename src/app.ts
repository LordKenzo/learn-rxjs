import { Observable, Observer } from 'rxjs';
import { addValue } from './utility';
import { share } from 'rxjs/operators';

// There are multiple way to create an Observable
// 1. The create() accept a subscribe function with an observer param
// This is a cold observable
const observable = Observable.create((observer: Observer<string>) => {
  observer.next('Hello.');
  observer.next('How are you?');
  observer.error('Un errore!!!');
  observer.complete();
  observer.next('Never displayed');
});
// 2. We need to subscribe to consume the value
const observer = observable.subscribe(
  (data: string) => addValue(data),
  (err: any) => addValue(err, true),
  () => addValue('Completed'),
);

// We can add another observer with another subscription or we can add another observer to the previous one: observer.add(otherObserver), so we can stop to receive value with just one unsubscribe

// 3. We need to unsubscribe the subscription
observer.unsubscribe();
