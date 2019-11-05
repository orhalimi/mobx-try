import { action, computed, observable } from "mobx"
class IncomeDomainStore {
    @observable incomeBeforeTax = 0
    @action setIncome (incomeAmount) {
        this.incomeBeforeTax = parseInt(incomeAmount)
    }
    @computed get calculatedTaxPercentage () {
        return this.incomeBeforeTax < 20000 ? 10 : 20
    }
    @computed get calculatedIncomeAfterTax () {
        if (this.incomeBeforeTax < 20000) {
          return this.incomeBeforeTax * 0.9
        }
        return this.incomeBeforeTax * 0.8
    }
  }
export default IncomeDomainStore