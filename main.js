// ESERCIZIO 1  23/10/2023

// TENTATIVO N.1 (FUNZIONANTE)

// let garage = {
//     "automobili" : [
//         {"brand" : "Renault", "modello" : "Twingo, Aygo, Aurig"},
//         {"brand" : "Audi", "modello" : "A4, A6, A7"},
//         {"brand" : "Opel", "modello" : "Corsa, Agila, Astra"},
//         {"brand" : "Nissan", "modello" : "Qashqai, Juke, Nuovo Qashqai"},
//     ],
//     "showModelli" : function (brand) {
//         let autotrovata = false
//         this.automobili.forEach(automobile => {
//             if (brand == automobile.brand) {
//                 console.log(automobile.modello)
//                 autotrovata=true
                
//             }
//         });
//         if (autotrovata==false) {
//             console.log(`Quest'auto non è disponibile: ${brand}`);
//         }
//     }
// }

// let autodatrovare = prompt("Cerca la tua automobile")

// garage.showModelli(autodatrovare);



let garage = {
    "automobili" : [
        {"brand" : "Renault", "modello" : ["Twingo", "Aygo"]},
        {"brand" : "Audi", "modello" : ["A6", "A4" , "A8"]},
        {"brand" : "Opel", "modello" : ["Corsa", "Agila", "Astra"]},
        {"brand" : "Nissan", "modello" : ["Qashqai", "Juke"]},
    ],
    "showModelli" : function (brand) {
        let autotrovata = false
        this.automobili.forEach(automobile => {
            if (brand == automobile.brand) {
                console.log(automobile.modello)
                autotrovata=true
                
            }
        });
        if (autotrovata==false) {
            console.log(`Quest'auto non è disponibile: ${brand}`);
        }
    }
}

let autodatrovare = prompt("Cerca la tua automobile")

garage.showModelli(autodatrovare);