
/* Завдання 1*/
/*window.onload = function() {
    let url = window.location.href; 
    let screenWidth = window.screen.width; 
    let screenHeight = window.screen.height; 

    alert("URL сторінки: " + url + "\nРозміри екрану: " + screenWidth + "x" + screenHeight);
  };


/* Завдання 2*/
/*document.addEventListener('DOMContentLoaded', function() {
  let tagName = prompt("Введіть назву тегу:");
  
  if (tagName) { 
    let elements = document.getElementsByTagName(tagName);
    
    if (elements.length === 0) { 
      alert("Тег '" + tagName + "' не знайдено в документі.");
    } else { 
      Array.from(elements).forEach(function(element) {
        alert("Зміст тегу '" + tagName + "': " + element.textContent);
      });
    }
  } else {
    alert("Ви не ввели назву тегу.");
  }
});
*/

/* Завдання 3*/
/*document.addEventListener('DOMContentLoaded', function() {
  let userResponse = confirm("задати колір тексту синім а фон жовтим?");

  if (userResponse) {
    let elements = document.querySelectorAll('.work');
    elements.forEach(function(element) {
      element.style.color = 'blue';
      element.style.backgroundColor = 'yellow';
    });
  } else {
    alert("Місія відмінена");
  }
});*/

/* Завдання 4*/

/*let newWindow;

document.getElementById('open').addEventListener('click', function() {
    newWindow = window.open('https://lpnu.ua/', 'newWindow', 'height=300,width=500,location=yes,scrollbars=yes,toolbar=yes');
});

document.getElementById('close').addEventListener('click', function() {
    if (newWindow) {
        newWindow.close();
    }
});
*/
let newWindow;
function openLink() {
  let address = prompt("Введіть адресу:");
  if (address) {
     newWindow = window.open(address, 'window', 'height=500,width=500');
    if (!newWindow) {
      alert('Не вдалося відкрити вікно. Перевірте налаштування браузера.');
    }
  }
}

document.getElementById('close').addEventListener('click', function closeWindow() {
    newWindow.close();
});