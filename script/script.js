
    
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
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
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'),
    additionaExpensesItem = document.querySelector('.additional_expenses-item'),
    incomeItem = document.querySelectorAll('.income-items'),
    titleAmount = document.querySelector('.period-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

const buttonStart = document.getElementById('start'),
      buttonCancel = document.getElementById('cancel'),
      buttonWithTag = document.getElementsByTagName('button'),
      incomePlus = buttonWithTag[0],
      expensesPlus = buttonWithTag[1],
      depositCheck = document.querySelector('#deposit-check');


function AppData () {
    this.income = {},
    this.incomeMonth = 0,
    this.addIncome = [],
    this.expenses = {},
    this.addExpenses = [],
    this.deposit = false,
    this.percentDeposit = 0,
    this.moneyDeposit = 0,
    this.budget= 0,
    this.budgetDay = 0, 
    this.budgetMonth = 0,
    this.expensesMonth = 0
};

let appData = new AppData();

AppData.prototype.start = function() {
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();

    this.getAdd(additionaExpensesItem, true, this.addExpenses);
    this.getAdd(additionalIncomeItem, false, this.addIncome)

    this.getTargetMonth();
    this.calcPeriod();

    this.getBudget();
    this.showResult();

    buttonStart.style.display = 'none';
    buttonCancel.style.display = 'block';
    this.disabledInput();
};

AppData.prototype.getBudget = function() {
    this.budgetMonth = this.budget +this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
    this.budgetDay = Math.floor(this.budgetMonth / 30);  
};

AppData.prototype.getTargetMonth = function() {
    return Math.ceil(targetAmountValue.value / this.budgetMonth);
   
};

AppData.prototype.getExpensesMonth = function() {   
    for(let key in this.expenses) {
        this.expensesMonth += +this.expenses[key]; 
    }                         
};

AppData.prototype.showResult = function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcPeriod();
}; 

AppData.prototype.getExpenses = function() {
    expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = cashExpenses;
        }
    }); 
};

AppData.prototype.addBlock = function(items, buttonPlus, querySelector){
    let clone = items[0].cloneNode(true);
    items[0].parentNode.insertBefore(clone, buttonPlus);
    if(items = document.querySelectorAll(querySelector)) {
        if(items.length === 3) {
            buttonPlus.style.display = 'none';
        }
    }
    
};

AppData.prototype.getIncome = function() {
    incomeItem.forEach((item) => {
        let itemIncome =item.querySelector('.income-title').value;
        let incomeAmount = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && incomeAmount !== '') {
            this.income[itemIncome] = incomeAmount;
        }
    });

    for(let key in this.income) {
        this.incomeMonth += +this.income[key];
    }

};

AppData.prototype.getAdd = function(a, b, c){
    if(b == true) {
        a = a.value.split(', ');
    }
        a.forEach((item) => {
            if(b == true) {
                item = item.trim();
            } 
            else {
                item = item.value.trim();
            }           
            if(item !== '') {
                c.push(item);
            }
        });
};

AppData.prototype.getInfoDeposit = function() {
    if(!this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
};

AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;       
};

AppData.prototype.changePeriod = function(){
    titleAmount.textContent = periodSelect.value;  

    let res = this.budgetMonth * periodSelect.value;
    incomePeriodValue.value = res;
};

AppData.prototype.disabledInput = function() {

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
};

AppData.prototype.reset = function(){
    location.reload();
};

AppData.prototype.eventsListeners = function() {
    expensesPlus.addEventListener('click', () => {
        this.addBlock(expensesItems, expensesPlus, '.expenses-items');
    }); 

    incomePlus.addEventListener('click', () => {
        this.addBlock(incomeItem, incomePlus, '.income-items');
    });

    periodSelect.addEventListener('click', appData.changePeriod.bind(appData));

    buttonCancel.addEventListener('click', appData.reset.bind(appData));

    depositCheck.addEventListener('change', function() {
        if(depositCheck.checked){
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = 'true';
            depositBank.addEventListener('change', function() {
                let selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === 'other') {
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                }
                else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            })
        }
        else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            this.deposit = 'false';
        }
    })


    var bindFuncStart = appData.start.bind(appData);

    buttonStart.setAttribute('disabled', 'disabled');
    buttonStart.style.background = '#cccccc';
    salaryAmount.addEventListener('input', function() {
        buttonStart.removeAttribute('disabled');
        buttonStart.style.background = '#353a43';
        buttonStart.addEventListener('click', bindFuncStart );   
    });

};

appData.eventsListeners();









