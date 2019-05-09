export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: '1-month', price: 9.95 },
        { id: 2, name: '3-months', price: 19.95 },
        { id: 3, name: '1-year', price: 49.95 },
      ]),
  });
}
