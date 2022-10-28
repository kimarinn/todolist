export default class Date {

    constructor() {

        this.monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        this.dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }

        getDate (today) {
            return today.getDate()
        }

        getMonth (today) {
            return today.getMonth()
        }

        getDay (today) {
            return today.getDay()
        }

        dateFormat (today) {
            let day = this.dayArray[today.getDay()]
            let date = this.getDate(today)
            let month = this.monthArray[today.getMonth()]
            return day + "," + date + " " + month
        }

    }
