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

let myObj : {
  username : string, 
  id : number,
  hire? : boolean,
  skills : {
    one : string,
    two : string, 
    three: string  }   
}
 = {
  username: 'mahmoud', 
  id : 1,
  hire : true, 
  skills :{
    one : "html",
    two : "css" , 
    three: "js"
  }
}



console.log(myObj.hire)
console.log(myObj.id)
console.log(myObj.username)
console.log(myObj.skills.three)


myObj.hire = false
myObj.id = 23
myObj.username = "ahmed "



console.log(myObj.hire)
console.log(myObj.id)
console.log(myObj.username)
console.log(myObj.skills.one)
console.log(myObj.skills.two)


interface user  {
  username : string,
  id : number, 
  country : string,
  language : string
} 

let user : user ={
  username: 'Mahmoud',
  id : 23, 
  country : "Egypt" ,
  language : "Arabic"
}


function getData(data: user ) {
  return `my name is ${data.username} , id is ${data.id} , language is ${data.language} and my country is ${data.country}`
}

console.log(getData(user))
console.log(getData({username :"Ahmed ", id: 32, language:  "English",country : "Egypt"}))
