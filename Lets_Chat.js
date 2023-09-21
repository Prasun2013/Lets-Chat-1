function addUser()
{
    user_input = document.getElementById("user_input").value;

    localStorage.setItem("user_input" , user_input);

    window.location = "Lets_Chat_Room.html";
}