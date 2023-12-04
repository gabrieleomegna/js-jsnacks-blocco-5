// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


const browserWindow = {
    tab: ["Facebook",'Twitter', "GitHub", "Gmail", 'Yahoo', 'Bing', 'YouTube', 'Corriere'],
    activeTab: 0
};


socialList = ['facebook', 'twitter', 'github', 'youtube'];
browserWindow.tab = browserWindow.tab.filter((element) => {
    if (!socialList.includes(element.toLowerCase())) {
        return true;
    }
});

console.log(browserWindow)