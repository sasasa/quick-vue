export default function ({ pinia, app, store, options }) {
  store.counter = localStorage['quick_vue'] ?
    JSON.parse(localStorage['quick_vue']) : 0
  const unsubscribe = store.$onAction(({ name, store, args, after, onError }) => {
    after(result => {
      localStorage['quick_vue'] = JSON.stringify(store.counter)
    })
    onError(error => {
      console.log(error)
    })
  })
}