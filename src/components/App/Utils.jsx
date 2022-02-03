

export default class Utils {
    static moneyDivider(penny) {
        let goldenCrowns = Math.trunc(parseFloat(penny / 240))

        let silverShilling = Math.trunc((parseFloat(penny) % 240) / 12)

        let copperPennies = Math.trunc((parseFloat(penny) % 240) % 12)

        let forDeamons = parseFloat((((penny % 240) % 12) - Math.floor(copperPennies)).toFixed(1))

        return {crowns: goldenCrowns, shillings: silverShilling, pennies: copperPennies, deamons: forDeamons}
        } 

}