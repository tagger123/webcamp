
if (window.innerWidth<461){
function toggleDisplay(d)
{
var onediv = document.getElementById(d);
var divs=['footer1','footer2','footer3','footer4'];
    for (var i=0;i<divs.length;i++)
    {
        document.getElementById(divs[i]).style.display='none';    
    }
    onediv.style.display = 'block';
}
}