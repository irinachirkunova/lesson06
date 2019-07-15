let buttonStart = document.getElementById('start'),
    buttonCancel = document.getElementById('cancel'),

    buttonWithTag = document.getElementsByTagName('button'),
    incomePlus = buttonWithTag[0],
    expensesPlus = buttonWithTag[1],

    checkBox = document.querySelector('#deposit-check'),

    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    inputAddIncomeOne = additionalIncomeItem[0],
    inputAddIncomeTwo = additionalIncomeItem[1],

    inputsByClass = document.getElementsByClassName('result-total'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue =document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    targetAmountValue = document.getElementsByClassName('target-amount')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],

    all = document.querySelectorAll('input'),
    salaryAmount = document.querySelector('.salary-amount'),
    
    expTitle = all[5],
    //expensesAmount = document.querySelector('.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    addExp = all[7],
    target = all[11],
    periodSelect = document.querySelector('.period-select'),
    additionaExpensesItem = document.querySelector('.additional_expenses-item'),
    incomeItem = document.querySelectorAll('.income-items'),
    titleAmount = document.querySelector('.period-amount');

let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();

       
        this.getTargetMonth();
        this.calcPeriod();

        this.getBudget();
        this.showResult();

        buttonStart.style.display = 'none';
        buttonCancel.style.display = 'block';
        this.disabledInput();

        console.log(this);
    },
   
    getBudget: function() {
        this.budgetMonth = this.budget +this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);  
    }, 
    getTargetMonth: function() {
        return Math.ceil(targetAmountValue.value / this.budgetMonth);
       
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
    showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        //appData.changePeriod();
        incomePeriodValue.value = this.calcPeriod();


    },
    addExpensesBlock: function(){
        //let expensesItems = document.querySelectorAll('.expenses-items');
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        }); 
    },
    addIncomeBlock: function(){
        //let expensesItems = document.querySelectorAll('.expenses-items');
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }

        console.log(this);
    },
    getIncome: function() {
        incomeItem.forEach(function(item){
            let itemIncome =item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && incomeAmount !== '') {
                appData.income[itemIncome] = incomeAmount;
            }
        });

        for(let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }

    },
    getAddExpenses: function() {
        let addExpenses = additionaExpensesItem.value.split(', ');
        addExpenses.forEach(function(item) {
            item = item.trim();
            if(item !== '') {
                 appData.addExpenses.push(item);
            }
        });

    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    getInfoDeposit: function() {
        if(this.deposit) {
            do{
                this.percentDeposit = prompt('Kакой годовой процент?', '10');
            }
            while(!isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);
           
            do{
                this.moneyDeposit = prompt('Kакая сумма заложена?', 10000);
            } 
            while(isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
            
        }
    },
    calcPeriod: function(){

        return this.budgetMonth * periodSelect.value;
       
    },
    changePeriod: function(){
        titleAmount.textContent = periodSelect.value;  

        let res = this.budgetMonth * periodSelect.value;
        incomePeriodValue.value = res;
    },
    disabledInput: function() {

        for (var i = 0; i < 12; i++) {
            all[i].disabled = true;
          }
  
          for(let i = 0; i < incomeItem.length; i++) {
  
              for(let j = 0; j < incomeItem[i].children.length; j++) {
             
                  incomeItem[i].children[j].setAttribute('disabled', 'disabled');
              }  
  
          }
  
          for(let i = 0; i < expensesItems.length; i++) {
              
              for(let j = 0; j < expensesItems[i].children.length; j++) {
             
                  expensesItems[i].children[j].setAttribute('disabled', 'disabled');
              }  
  
          } 
    },
    reset: function(){
        location.reload();
    }
};

expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));

var bindFuncStart = appData.start.bind(appData);

buttonStart.setAttribute('disabled', 'disabled');
buttonStart.style.background = '#cccccc';
salaryAmount.addEventListener('input', function() {
    buttonStart.removeAttribute('disabled');
    buttonStart.style.background = '#353a43';
    buttonStart.addEventListener('click', bindFuncStart );   
});

periodSelect.addEventListener('click', appData.changePeriod.bind(appData));

buttonCancel.addEventListener('click', appData.reset.bind(appData));






