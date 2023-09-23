let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function getDayOfweek() {
    const n = +prompt("Input a number");
    if (!isNaN(n)) {
        const lang = prompt("Which language do you want to choose? ru, ua, en");
        let dayOfweek = "";
        switch (lang) {
            case "en":
                dayOfweek = en[n];
                break;
            case "ru":
                dayOfweek = ru[n];
                break;
            case "ua":
                dayOfweek = ua[n];
                break;
            default:
                alert("Input a language properly!");
        }
        if (dayOfweek !== "") {
            alert(dayOfweek);
        }
    } else {
        alert("You must input a number!");
    }
}