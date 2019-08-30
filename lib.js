/*자바스크립트 파일*/
function over(obj){obj.src="b.jpg";}
function out(obj){obj.src="c.jpg";}
function evalParseIntIsNaN(){
    var res = evel("2*3+4*6");
    document.write("eval(\"2*3+4*6\")는 " + res + "<br>");
    var m = parseInt("32");
    document.write("parseInt(\"32\")는 "+m+"<br>");
    var n = parseInt("0x32");
    document.write("parseInt(\"0x32\")는 "+n+"<br><br>");

    n = parseInt("hello");
    if(isNaN(n))document.write("hello는 숫자가아닙니다.");
}