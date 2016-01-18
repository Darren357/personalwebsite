/*
Author: Robert Hashemian
http://www.hashemian.com/

You can use this code in any manner so long as the author's
name, Web address and this disclaimer is kept intact. */
dt=new Date();
document.onreadystatechange=function() {
  if (document.readyState=="complete") {
    if ((PLT_Span=document.getElementById(PLT_DisplayElementID)) == null) {
      document.body.insertBefore(document.createElement("br"));
      PLT_Span = document.body.insertBefore(document.createElement("span"));
    }
    PLT_DisplayFormat = PLT_DisplayFormat.replace(/%%S%%/g, ((new Date() - dt)/1000));
    PLT_Span.style.Color = PLT_ForeColor;
    PLT_Span.style.backgroundColor = PLT_BackColor;
    PLT_Span.style.fontSize = PLT_FontPix + "px";
    PLT_Span.innerText = PLT_DisplayFormat;
  }
}
