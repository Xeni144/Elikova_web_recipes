
// возвращает массив из пунктов состава
export function elemStructure(){
    const fieldsetCount = document.getElementsByTagName("fieldset").length; // количество fieldset
    const fieldsetList = document.getElementsByTagName("fieldset");
    let arrayFieldset:Array<object> = [];

    for(let i = 0; i < fieldsetCount; i++){

        const nameField = fieldsetList[i].elements.namedItem('name_s');
        const countField = fieldsetList[i].elements.namedItem('count');
        const edField = fieldsetList[i].elements.namedItem('select_ed');

        let objectArr: object = {
            name : nameField.nodeValue,
            countEd : countField.nodeValue,
            ed : edField.nodeValue,
        }
        arrayFieldset.push(objectArr);
    }
    console.log(arrayFieldset);
    return arrayFieldset;
};