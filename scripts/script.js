'use scrict';

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?', 1635);
            console.log(money);
        }
        while(isNaN(money) || money == '' || money == null);
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: +money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);  
    }, 
    getTargetMonth: function() {
        let result = Math.ceil(appData.mission / appData.budgetMonth);
        let response;
        if(result > 0) {
            return response = ("за какой период будет достигнута цель: " + result);
        }
        else {
            return response = ("Цель не будет достигнута");
        }
    }, 
    getExpensesMonth: function() {   
        for(let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key]; 
        }                         
    }, 
    getStatusIncome: function() {
        let response;
        if(appData.budgetDay > 800) {
            return response = ("Высокий уровень доход");
            }
            else if(appData.budgetDay > 300 && appData.budgetDay <= 800) {
            return response = ("Средний уровень дохода");
            }
            else if(appData.budgetDay >= 0 && appData.budgetDay <= 300){
            return response = ("Низкий уровень дохода");
            }
            else {
            return response = ("Что то пошло не так");
            }    
    },  
    asking: function() {

        if(confirm('Есть ли у вас у вас дополнительный заработок?')){
            let itemIncome;
            do{
                itemIncome = prompt('Kакой у вас дополнительный заработок?', "freelance");
            }
            while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);
           
            let cashIncome;
            do{
                cashIncome = prompt('Cколько в месяц вы на этом зарабатываете?', 10000);
            } 
            while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
            appData.income[itemIncome] = cashIncome;
        }

        let addExp; 
        do{
            addExp = prompt('Перечислите возможные расходы за рассчитываемый период через запятую: ', 'milk coffee butter');
            appData.addExpenses = addExp.split(' ');
            let a = [];
            for(let item of appData.addExpenses) {
                a.push(item.charAt(0).toUpperCase() + item.substring(1));
            }
            console.log(a);
        }
        while(!isNaN(addExp) || addExp === '' || addExp === null)

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for(let i = 0; i < 2; i++) {
                let question;
                do {
                    question = prompt("Какие обязательные ежемесячные расходы у вас есть?");
                }
                while(!isNaN(question) || question === '' || question === null);

                let result;
                do{
                    result = prompt("Во сколько это обойдется?"); 

                } 
                while(isNaN(result) || result === '' || result === null);
                    appData.expenses[question] = result;                
                           
        } 
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            do{
                appData.percentDeposit = prompt('Kакой годовой процент?', '10');
            }
            while(!isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
           
            do{
                appData.moneyDeposit = prompt('Kакая сумма заложена?', 10000);
            } 
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
console.log("Расходы за месяц: " + appData.expensesMonth);
appData.getBudget();
console.log("За какой период будет достигнута цель (в месяцах): " + appData.getTargetMonth());
console.log("Уровень дохода за месяц: " + appData.budgetMonth);
console.log("Уровень дохода за день : " + appData.budgetDay);
console.log(appData.getStatusIncome());

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
}

//appData.getInfoDeposit();














       




 

  

