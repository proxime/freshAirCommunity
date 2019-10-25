module.exports = (state) => {
    switch (state) {
        case "Greater Poland":
            return "Wielkopolska";
        case "Lesser Poland Voivodeship":
            return "Małopolska";
        case "Lodz Voivodeship":
            return "Łódzkie";
        case "Lower Silesia":
            return "Dolny Śląsk";
        case "Lublin":
            return "Lubelskie";
        case "Lubusz":
            return "Lubuskie";
        case "Mazovia":
            return "Mazowsze";
        case "Opole Voivodeship":
            return "Opolskie";
        case "Podlasie":
            return "Podlaskie";
        case "Pomerania":
            return "Pomorskie";
        case "Silesia":
            return "Śląsk";
        case "Subcarpathian Voivodeship":
            return "Podkarpackie";
        case "Swietokrzyskie":
            return "Świętokrzyskie";
        case "Warmia-Masuria":
            return "Warmia i Mazury";
        case "West Pomerania":
            return "Zachodnio-pomorskie";
        case "England":
            return "Anglia";
        case "Northern Ireland":
            return "Irlandia Północna";
        case "Scotland":
            return "Szkocja";
        case "Wales":
            return "Walia";
        default:
            return state;
    }
}