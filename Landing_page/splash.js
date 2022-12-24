<script type = "text/javascript"/>
window.onload=timeout;
function timeout(){
    window.setTimeout("redirect(),5000")
}
function redirect(){
    window.location="www.google.com"
    return
}

<body onload = "timeout()"/>
