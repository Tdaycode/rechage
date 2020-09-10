function recharge() {
    let que = prompt("Welcome, top up your Airtime \n 1. Airtime Self \n 2. Airtime others \n 3.  Data \n 4.  Data transfer")


    if (que == 1) {
        let amount = prompt("Enter amount")
        alert("confirm" + " " + "#" +
            amount)
        alert("you have successfully recharge" + " " + "#" +
            amount)
    } else if (que == 2) {
        let amount = prompt("Enter amount")
        let rNumber = prompt("Enter reciver number")
        alert("Confirm to recharge" + " " + rNumber + "?")
        alert("Successfully recharged" + " " + rNumber)
    } else if (que == 3) {
        let networkT = prompt("1. MTN \n 2. GLO \n 3.  AIRTEL \n 4.  ETISALAT")
        if (networkT == 1 || networkT == 2 || networkT == 3 || networkT == 4) {
            let gidT = prompt("1. 1GB \n 2. 2GB \n 3.  5GB \n 4.  10GB")
            switch (gidT) {
                case 1:
                    alert("successfully bought 1GB")
                    break;
                case 2:
                    alert("successfully bought 2GB")
                    break;
                case 3:
                    alert("successfully bought 5GB")
                    break;
                case 4:
                    alert("successfully bought 10GB")
                    break;
                default:

                    break;
            }
        }
    }
}
recharge()