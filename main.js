const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;

const subscribe1 = document.getElementById('c1');
const subscribe2 = document.getElementById('c2');

class Observable {
  constructor() { this.observers = []; }

  subscribe() { this.observers.push(updateP1, updateP2); }

  notify(data) { this.observers.forEach(observer => observer(data)); }
}

const a = new Observable();
a.subscribe()

c1.addEventListener('keyup', e => {
  a.notify(e.target.value);
});

c2.addEventListener('keyup', e => {
  a.notify(e.target.value);
});