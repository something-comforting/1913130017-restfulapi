const users = [{
    name: "Thitiwat",
    nickname: "Unn",
    hobby: ["Sleep","Play games"],
    address: "1771/1 Pattanakarn Road, Suan Luang",
    province: {
      name: "Bangkok",
      postcode: "10250"
    }
  },{
    name: "Phurit",
    nickname: "Phu",
    hobby: ["Write code"],
    address: "1771/1 Pattanakarn Road, Suan Luang",
    province: {
      name: "Bangkok",
      postcode: "10250"
    }
  },{
    name: "Fah",
    nickname: "Sky",
    hobby: ["Doing good deed"],
    address: "1771/1 Pattanakarn Road, Suan Luang",
    province: {
      name: "Bangkok",
      postcode: "10250"
    }
  },
]

const str = ({ nickname, hobby, province }) => `"My nickname is ${nickname}, My hobby is ${hobby.toString()}\nand my postcode is ${province.postcode}"\n`

const printArr = (users) => {
  for (user of users) {
    console.log(str(user))
  }
}

printArr(users)
