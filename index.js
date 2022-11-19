const datefns = require('date-fns')
console.log(datefns.format(new Date(),"MM/dd/yyyy"))

const user = {
  name: "Thitiwat",
  salary: 1_000_000,
  address: {
    province: "Bangkok",
    postcode: 10250
  }
}

const showData = () => `${user.name}`

const showData2 = () => {
  const info = 'My name is'
  return `${info} ${user.name}`
}

const sum = (a,b) => a+b

console.log(showData())
