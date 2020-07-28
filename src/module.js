console.log("module working")

async function start() {
  return await Promise.resolve('aaadaa')
}

start()
    .then(console.log)
