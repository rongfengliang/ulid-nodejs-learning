const ulid = require("@kiosked/ulid")
for (let index = 0; index < 1000000; index++) {
    let id = ulid.ulid()
    console.log(id)
}

// let tempid = "01DHQX1VCKA258WSYT46JGCW3P"

// let gettime = ulid.decodeTime(tempid)

// console.log(gettime)