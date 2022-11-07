type nums = 0 | 1| -1

function compare(num1 : number , num2 : number ) : nums {
    if (num1 === num2){
      return 0
    } else if (num1 > num2) {
      return 1
    } else {
      return -1
    }
}


console.log(compare(23,32))
console.log(compare(33,32))
console.log(compare(23,23))

let article : [number, string , boolean ] = [ 12, "sadf" , true] 

 const [id , title , published ] = article


 function logging (msg : string) :void {
  console.log(msg)
  return ;
 }

 console.log(logging('asdfasdfsdf'))


enum levels {
  kids = 9 , 
  easy = 12 , 
  mudium = 15, 
  hard = 20
}

let lvl :string = "Easy"


if (lvl === "Easy") {
  console.log(`the level is ${lvl} and the number of sec is ${levels.easy}`)
}


