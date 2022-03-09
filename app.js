const pages =[
    {
        page:'Home',
        navigate: homePage
    },
    {
        page:'About',
        navigate: about
    },
    {
        page:'Interact',
        navigate: interesting
    }
]


function navButton(pg, pr, nv){
    let button = document.createElement('button')
    button.innerHTML=pg
    button.style.position='relative'
    button.style.top='25%'
    button.style.left="45%"
    button.addEventListener('click', function(){
        document.querySelector(".wrapper").innerHTML = ''
        nv()
    })
    pr.appendChild(button)
    
}


function navigation(){
    let nav=document.createElement('nav')
    let wrapper =document.createElement('div')
    wrapper.classList.add('wrapper')
    nav.style.backgroundColor='blue'
    nav.style.height='80px'
    for (obj of pages){
        navButton(obj.page, nav ,obj.navigate)
    }
    document.body.appendChild(nav)
    document.body.appendChild(wrapper)
    
}



function homePage(){
    let home = document.createElement('h1')
    home.innerHTML="Home Page"
    document.querySelector(".wrapper").appendChild(home)
    
}

function about(){
    let about = document.createElement('h1')
    about.innerHTML="About Page"
    let name = document.createElement('h3')
    name.innerHTML="James"
    document.querySelector(".wrapper").appendChild(about)
    document.querySelector(".wrapper").appendChild(name)

    
}

function interesting(){
    let interesting = document.createElement('h1')
    interesting.innerHTML = "Interact Page"
    document.querySelector(".wrapper").appendChild(interesting)
    
    
    let counter = 0
    let interact_button = document.createElement('button')
    interact_button.innerHTML = 'Click Me'
    interact_button.addEventListener('click', function(){
        counter = counter + 1
        document.querySelector('#changeMe').innerHTML = ''
        counter_text.innerHTML = 'Counter: ' + counter
        document.querySelector('#changeMe').appendChild(counter_text)
        console.log(counter)

    })
    document.querySelector(".wrapper").appendChild(interact_button)
    let counter_div = document.createElement('div')
    counter_div.id = 'changeMe'
    let counter_text = document.createElement('p')
    counter_text.innerHTML = 'Counter: ' + counter
    document.querySelector(".wrapper").appendChild(counter_div)
    document.querySelector("#changeMe").appendChild(counter_text)
}



navigation()
homePage()