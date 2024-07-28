import { select } from '@inquirer/prompts';
let score = 0;
let questions1 = [
    {
        questions: "What is the primary role of banks in the financial system?",
        options: ["Providing loans", "Accepting deposits", "Facilitating payments", "All of the above"],
        correctoption: "All of the above"
    }, { questions: "2. What type of account allows customers to earn interest on their savings while providing easy access to funds?",
        options: ["a) Fixed deposit account", "b) Current account", "c) Savings account", "d) Certificate of Deposit (CD)"],
        correctoption: "c) Savings account"
    },
    {
        questions: "What does the term “interest” refer to in banking?",
        options: [
            "The amount of money a bank charges for its services",
            "The rate at which a bank lends money to its customers",
            "The rate at which a bank pays customers for holding their money in an account",
            "The total balance in a bank account"
        ],
        correctoption: "The rate at which a bank pays customers for holding their money in an account"
    },
    {
        questions: "Which type of bank primarily focuses on providing financial advisory services, underwriting securities, and facilitating capital raising activities?",
        options: ["Commercial bank", "Investment bank", "Cooperative bank", "Development bank"],
        correctoption: "Investment bank"
    },
    {
        questions: "What is the role of central banks in the banking system?",
        options: [
            "To provide loans to individuals and businesses",
            "To offer retail banking services to customers",
            "To regulate and oversee the banking industry",
            "To issue currency and control monetary policy"
        ],
        correctoption: "To issue currency and control monetary policy"
    },
    {
        questions: "Which type of bank is owned and operated by its members, often serving specific communities or groups?",
        options: ["Investment bank", "Central bank", "Cooperative bank", "Commercial bank"],
        correctoption: "Cooperative bank"
    },
    {
        questions: "What does “ATM” stand for in the context of banking?",
        options: ["Automated Teller Machine", "Automatic Transaction Machine", "Advanced Transfer Module", "Access to Money"],
        correctoption: "Automated Teller Machine"
    },
    {
        questions: "What is the main function of a commercial bank?",
        options: [
            "To provide investment advisory services",
            "To offer financial services to businesses and individuals",
            "To regulate the banking industry",
            "To facilitate international trade transactions"
        ],
        correctoption: "To offer financial services to businesses and individuals"
    },
    {
        questions: "Which banking service allows customers to borrow money from the bank for personal or business purposes and repay it over time?",
        options: ["Debit card service", "Credit card service", "Loan service", "Insurance service"],
        correctoption: "Loan service"
    },
    {
        questions: "What is the process of moving money from one bank account to another called?",
        options: ["Deposit", "Withdrawal", "Transfer", "Investment"],
        correctoption: "Transfer"
    }
];
let test_game = true;
while (test_game == true) {
    console.log(`...............................................................`);
    console.log(`..........................Quiz Program.........................`);
    let quiz = await select({
        message: 'Select Options Given Below',
        choices: [
            { name: 'Start Game',
                value: '1',
                description: 'Start Quiz Game',
            },
            { name: 'Help',
                value: '2',
                description: 'Get Help On How To Play'
            },
            { name: 'Quit',
                value: '3',
                description: "Quit The Game",
            }
        ]
    });
    if (quiz == "1") {
        for (let i = 0; i < 10; i++) {
            let j = 0;
            console.log(questions1[i].questions);
            let choice = await select({
                message: 'Select Your Choice',
                choices: [
                    { name: 'A',
                        value: questions1[i].options[j],
                        description: questions1[i].options[j],
                    }, { name: 'B',
                        value: questions1[i].options[j + 1],
                        description: questions1[i].options[j + 1], },
                    { name: 'C',
                        value: questions1[i].options[j + 2],
                        description: questions1[i].options[j + 2], },
                    { name: 'D',
                        value: questions1[i].options[j + 3],
                        description: questions1[i].options[j + 3], }
                ]
            });
            if (choice == questions1[i].correctoption) {
                score++;
            }
        }
        console.log(`Your Total Score For The Quiz Was ${score}`);
        console.log(`You Can Retry Again Or Press Exit To Leave`);
    }
    if (quiz == "2") {
        console.log(`You Must Answer Correct From Four Given Multiple Choices, Each Correct Answer Gives You One Score`);
    }
    if (quiz == "3") {
        console.log(`Thank You For Attempting The Quiz`);
        test_game = false;
    }
}
