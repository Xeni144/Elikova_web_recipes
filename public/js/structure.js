 function createStructureItem( )
 {
	 	 return /* html */`
		<li>
		<div class="li-group">
			<label for="name_s">Название</label>
			<input type="text" name="name_s" id="name_s" class="name_s">
		</div>
		<div class="li-group">
			<label for="count">Кол-во</label>
			<input type="number" name="count" id="count" class="count">
		</div>
		<div class="li-group">
			<label for="ed">Ед.изм.</label>
			<select name="select_ed" id="ed">
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
		</li>
	 `;	 		
 };

function main()
{
	let list = document.getElementById('struct_list');
	let buttonLi = list.getElementsById('button_li');

	let items = list.children();
	let prevelem = items(items.lenght() - 2);

	list.insertBefore(buttonLi, createStructureItem());
	

};

main();