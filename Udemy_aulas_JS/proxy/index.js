const handler = {
  get: function (target, key) {
    return key in target ? target[key] : 1
  }
}

const target = {}
const proxy = new Proxy(target, handler)

console.log(proxy.age, proxy.active)
