import inquirer from "inquirer"
import { number,input } from '@inquirer/prompts';
import { select } from '@inquirer/prompts';
let program=true
while(program==true){
console.log(`WELCOME TO THE CALCULATOR APP:`)
const number1 =await input({
    message:'Enter First Number'
  })
  
  const number2=await input({
    message:'Enter Second Number'
  })
  let number_1:number=parseInt(number1)
  let number_2:number=parseInt(number2)
  const operator=await select({
    message:'Select an Operator Down Below',

    choices:[
        {   name:'Addition (+)',
            value:'+',
            description:'Adding Two Numbers',

        },
        {
            name:'Subtraction (-)',
            value:'-',
            description:'Subtracting Two Numbers',
        },
        {   name:'Division (/)',
            value:'/',
            description:'Division Of Two Numbers',

        },
        {   name:'Multiplication (*)',
            value:'*',
            description:'Multiplication Of Two Numbers',

        },
    ]
  })
  if(operator=="+"){
    console.log(`The ANSWER IS  '${number_1+number_2}'`)
  }
  else if(operator=="-"){
    console.log(`The ANSWER IS  '${number_1-number_2}'`)
  }
  else if(operator=="/"){
    console.log(`The ANSWER IS  '${number_1/number_2}'`)
  }
  else if(operator=="*"){
    console.log(`The ANSWER IS  '${number_1*number_2}'`)
  }
  console.log(`To Continue The Program Press:\n 1.Continue \n 2.Exit`)
  const num_input=await input({
    message:''
  })
  while(num_input!="1"&&num_input!="2"){
    console.log("Invalid Input")
  }
  if(num_input=="1"){
    continue
  }
  else if(num_input=="2"){
    program=false
    console.log(`Thank You So Much For Using This Calculator`)
  }
  
}
  
  
  
  
  
