import { number,input,select } from '@inquirer/prompts';
    let game_run=true
    GAME:while(game_run==true){
    let random_number=Math.floor(Math.random() * 100) + 1;
    let choices=10
    
    const menu=await select({
        message:'------------Number Guessing Game---------------',
        choices:[
            {name:'New Game',
            value:'1',
            description:'Start A New Game',
            },
            {
                name:'Rules',
                value:'2',
                description:'How To Play'

            },
            {
               name:'Exit',
               value:'3',
               description:'Exit The Game'
            }

        ]
    })
    if(menu=="1"){
        console.log(`Welcome! You Must Guess A Random Number Between 1 And 100 \n`)
        while(choices>0){
        let number1=await input({
            message:'Write Your Guessed Number',
        })
        let num_1=parseInt(number1)
        if(num_1>random_number){
            console.log(`Your Number Is Greater, Try Again !`)
            choices--
            console.log(`You Have ${choices} chances remaining`)
        }
        else if(num_1<random_number){
            console.log(`Your Number Is Lesser, Try Again !`)
            choices--
            console.log(`You Have ${choices} chances remaining`)
        }
        else{
            console.log(`You Guessed The Right Number!!`)
            continue GAME
        }
    }


    }
    else if(menu=="2"){
        console.log(`\t In The Number Guessing Game, You Will Have Ten Choices To Guess The Right Number And Win The Game \n 
            Additionaly You Will Be Given Certain Hints To Make It Easier For You To Guess The Number
            `)
    }
    else if(menu=="3"){
        console.log("Thank You So Much For Playing The Game!!!")
        game_run=false
    }
    }    
