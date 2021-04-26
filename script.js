// Dark Mood

var myElement = document.getElementsByTagName('p');

function moon(){
    document.getElementById('back').style.backgroundColor = '#1f2937';
    document.getElementById('sun').style.display = 'inline';
    document.getElementById('moon').style.display = 'none';

    for (i = 0 ; i < (myElement.length) ;i++){

        document.getElementsByClassName('p_text')[i].style.color = '#fff';

    }

    
}

function sun(){
    document.getElementById('back').style.backgroundColor = 'white';
    document.getElementById('sun').style.display = 'none';
    document.getElementById('moon').style.display = 'inline';

    for (i = 0 ; i < (myElement.length) ;i++){

        document.getElementsByClassName('p_text')[i].style.color = 'black';

    }

    document.querySelector('footer .container p').style.color = '#88a393';
    
}

// NAV BAR

window.addEventListener('scroll', function(){
    var header = document.getElementById('headnav');
    header.classList.toggle('sticky', window.scrollY > 140);
    document.querySelector('.top-list').classList.toggle('fixed' ,  window.scrollY > 0);
})

// Drop list

var listIcon = document.querySelector('i.fas.fa-list-ul'),
    hiddenIcon = document.querySelector('i.fas.fa-times'),
    listBar = document.querySelector('.top-list');


listIcon.onclick = function(){

    listIcon.style.display = 'none';
    hiddenIcon.style.display = 'inline';
    listBar.style.display = 'inline';
    
}

hiddenIcon.onclick = function(){

    hiddenIcon.style.display = 'none';
    listIcon.style.display = 'inline';  
    listBar.style.display = 'none' ;   

}

