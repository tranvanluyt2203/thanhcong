function search()
{
   document.getElementById("search").innerHTML = "Searching...";
}
function kiemtra()
{
    let pas1=document.getElementById("password_account").innerHTML,pas2=document.getElementById("rewrite_password_account").innerHTML;
    if (pas1!=pas2) window.alert("False");
    else window.alert("True");
}
function show_button(buy,detail)
{
    document.getElementById(buy).style.display="block";
    document.getElementById(detail).style.display="block";
}
function hide_button(buy,detail)
{
    document.getElementById(buy).style.display="none";
    document.getElementById(detail).style.display="none";
}
function show_text()
{
    document.getElementById("search").style.display="block";
}
function hide_text()
{
    document.getElementById("search").style.display="none";
}
let i=0;
function on_gio()
{
    i+=1;
    if (i%2==1)
    {
    document.getElementById("gio").style.display="block";
    }
    else
    document.getElementById("gio").style.display="none";
}