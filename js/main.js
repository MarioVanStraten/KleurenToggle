const toggleMenu = function(){

    const navigationSide = document.querySelector('.navigation-side');

    navigationSide.classList.add('show-hide');

    const menuButton = document.querySelector('#menuButton');

    menuButton.addEventListener('click', function(){

        navigationSide.classList.toggle('show-hide');

    });

}

const buildMenu = function(){

    const menuBody = document.querySelector('.navigation-side ul');

    const menuItems = ['Home','Red','Green','Blue','Yellow','Purple'];

    menuItems.forEach(function(item){

        const listItem = document.createElement('li');

        const menuItem = menuBody.appendChild(listItem);

        menuItem.classList.add(item);

        const radioButton = document.createElement('input');

        radioButton.setAttribute('type','radio');

        radioButton.setAttribute('name','colors');

        radioButton.setAttribute('value',item);

        menuItem.appendChild(radioButton);

        const radioButtonLabel = document.createElement('label');

        radioButtonLabel.setAttribute('for',item);

        menuItem.appendChild(radioButtonLabel);

        radioButtonLabel.innerText = item;

    });

}

const selectColor = function(){

    const documentBody = document.querySelector('body');

    const navigationSide = document.querySelector('.navigation-side');

    const menuItemsList = document.querySelectorAll('.navigation-side ul li');

    const colorDisplay = document.querySelector('#colorName');

    colorDisplay.innerText = "Home";

    menuItemsList.forEach(function(item){

        item.addEventListener('click', function(){

            const pickedColor = this.innerText;

            const currentClass = documentBody.getAttribute('class');

            documentBody.classList.remove(currentClass);

            documentBody.classList.add(pickedColor);

            const thisRadioButton = this.firstChild;

            thisRadioButton.checked = true;

            navigationSide.classList.toggle('show-hide');

            colorDisplay.innerText = this.innerText;

        });

    });

}

const keyPressSelect = function(){

    const documentBody = document.querySelector('body');

    const colorDisplay = document.querySelector('#colorName');

    let menuRadio;

    document.addEventListener('keydown', function(event){

        const currentClass = documentBody.getAttribute('class');

        switch(event.code) {

            case 'Digit1':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Home');
                menuRadio = document.querySelector('input[value=Home]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Home";
                break;

            case 'Digit2':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Red');
                menuRadio = document.querySelector('input[value=Red]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Red";
                break;
            
            case 'Digit3':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Green');
                menuRadio = document.querySelector('input[value=Green]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Green";
                break;

            case 'Digit4':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Blue');
                menuRadio = document.querySelector('input[value=Blue]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Blue";
                break;

            case 'Digit5':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Yellow');
                menuRadio = document.querySelector('input[value=Yellow]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Yellow";
                break;

            case 'Digit6':
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Purple');
                menuRadio = document.querySelector('input[value=Purple]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Purple";
                break;
        
            default:
                documentBody.classList.remove(currentClass);
                documentBody.classList.add('Home');
                menuRadio = document.querySelector('input[value=Home]');
                menuRadio.checked = true;
                colorDisplay.innerText = "Home";
        }

    });

}

toggleMenu();
buildMenu();
selectColor();
keyPressSelect();