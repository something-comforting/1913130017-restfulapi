const obj = {
  name: "Thitiwat",
  nickname: "Unn",
  hobby: ["Sleep", "Play games"],
  address: "1771/1 Pattanakarn Road, Suan Luang",
  province: {
    name: "Bangkok",
    postcode: "10250"
  },
}

const println = () => {
  const {nickname,hobby,province} = obj
  console.log(`"My nickname is ${nickname}, My hobby is ${hobby.toString().replace(",",", ")}\nand my postcode is ${province.postcode}"`)
}

println()
