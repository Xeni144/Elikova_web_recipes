function createStructureItem()
{
    return /* html */`
        <fieldset form="struct_form">
            <div>
                <label for="name_s">Название</label>
                <input type="text" name="name_s" class="name_s">
            </div>
            <div>
                <label for="count">Кол-во</label>
                <input type="number" name="count" class="count" min="0" step="0.1">
            </div>
            <div>
                <label for="select_ed">Ед.изм.</label>
                <select name="select_ed">
                    <option value="value1" selected>мл.</option>
                    <option value="value3">л.</option>
                    <option value="value4">ст.</option>
                    <option value="value5">ч.л</option>
                    <option value="value6">с.л</option>
                    <option value="value7">д.л</option>
                    <option value="value8">гр.</option>
                    <option value="value9">кг.</option>
                    <option value="value10">уп.</option>
                    <option value="value11">шт.</option>
                </select>
            </div>
        </fieldset>
    `;	 		
};

export function addElem(){

    const list = <HTMLElement>document.getElementsByTagName("UL")[0]; // элемент ul
    const childrenCount = list.getElementsByTagName("li").length; // количество li

    const buttonAdd = <HTMLButtonElement>list.getElementsByTagName("LI")[childrenCount - 2]; // кнопка добавить

    buttonAdd.onclick = function(){

        const newLi = <HTMLLIElement>document.createElement("LI"); // создаем новый элемент
        newLi.innerHTML = createStructureItem();  // заносим в него html код

        list.insertBefore(newLi, buttonAdd);
    }
};

