function quad(a,b,c){
  if(a==0) return "Неверные значений"; // ВЫВОД - ТЕКСТА
  var D=b*b-4*a*c; // ДИСКРИМИНАНТ
  var x1,x2;
  if(D>0){
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
    return "Значения: a="+a+", b="+b+", c="+c+"\nКорни уравнения: x1="+x1+", x2="+x2+"\nДискриминант(D)="+D+";"
  } else if(D==0){// ЕСЛИ РАВЕН 0 СЧИТАЕМ x1
    x1=-b/(2*a);
    return "Значения: a="+a+", b="+b+", c="+c+"\nКорень уравнения: x="+x1+"\nДискриминант(D)="+D+";"
  } else if(D<0) return "Значения: a="+a+", b="+b+", c="+c+"\nОтрицательный дискриминант-корней нет\nДискриминант(D)="+D+";"
}
function prog(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
  var result = quad(a,b,c);
  document.getElementById('result').textContent = result; //ВЫВОД НА ЭКРАН
  document.getElementById('otvet').style.display = 'block';
}
