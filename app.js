const bar = 5
const foo = bar

const work = new Promise((resolve, reject)=>{
  resolve('some data')
})
work.then(data=>{
  console.log(data)
})
