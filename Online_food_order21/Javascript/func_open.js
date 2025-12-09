//function used in back button

function func_Open(page) 
{
   if(page == "breakfast")
   {	
    window.open("Breakfast_Menu.html");
    localStorage.setItem('userid', un);
    window.close();
    return true;
    }
    else if(page == "lunch")
    {
    window.open("Lunch_Menu.html");
    localStorage.setItem('userid', un);
    window.close();
    return true;
    }
    else if(page == "dinner")
    {
    window.open("Dinner_Menu.html");
    localStorage.setItem('userid', un);
    window.close();
    return true;
    }
}
