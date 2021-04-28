export function clear(){

    const fieldsetCount = document.getElementsByTagName("fieldset").length; // количество fieldset
    const fieldsetList = document.getElementsByTagName("fieldset");

    for(let i = 0; i < fieldsetCount; i++){
        
        fieldsetList[i].elements.namedItem('name_s').nodeValue = "";
        fieldsetList[i].elements.namedItem('count').nodeValue = "";
        fieldsetList[i].elements.namedItem('select_ed').nodeValue = "";
    }
}
