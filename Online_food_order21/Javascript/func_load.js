//function used to load the user name

function fn_load()
{
	let retrievedValue = localStorage.getItem('userid');
	//alert(retrievedValue);
	document.getElementById('usr_name').value = "Welcome "+retrievedValue;
}

