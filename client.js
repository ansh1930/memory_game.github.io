window.preve

document.addEventListener('DOMContentLoaded', () =>{

ALL_IMAGES = [
    // {
    // name:'default',
    // img:'Images/default.png'
    // },
    // C#
    {
        name:'C#',
        img:'Images/C_sharp.png'
    },
    // java
    {
        name:'java',
        img:'Images/java.jpg'
    },
    // PHP
    {
        name:'PHP',
        img:'Images/PHP.png'
    },
    // C
    {
        name:'C',
        img:'Images/C.png'
    },
    // JS
    {
        name:'JS',
        img:'Images/JS.png'
    },
    // python
    {
        name:'python',
        img:'Images/python.png'
    },
    // React
    {
        name:'React',
        img:'Images/React.webp'
    },
    // Swift
    {
        name:'Swift',
        img:'Images/Swift.jpg'
    },
    // C#
    {
        name:'C#',
        img:'Images/C_sharp.png'
    },
    // java
    {
        name:'java',
        img:'Images/java.jpg'
    },
    // PHP
    {
        name:'PHP',
        img:'Images/PHP.png'
    },
    // C
    {
        name:'C',
        img:'Images/C.png'
    },
    // JS
    {
        name:'JS',
        img:'Images/JS.png'
    },
    // python
    {
        name:'python',
        img:'Images/python.png'
    },
    // React
    {
        name:'React',
        img:'Images/React.webp'
    },
    // Swift
    {
        name:'Swift',
        img:'Images/Swift.jpg'
    }
]


ALL_IMAGES.sort(() => 0.5 - Math.random())

let flips_card=[];
let filps_class=[];

let moves = 0;
let Flips = document.getElementById('flip_to')

function createBoard(){
    
    
    
    ALL_IMAGES.forEach(element => {
        

        let main_game = document.querySelector('.main_card')

        let card = document.createElement('div')
        card.classList.add('card')
    
        let inner_card = document.createElement('div')
        inner_card.classList.add('inner_card')
        // inner_card.classList.toggle('card_flip')
    
        let front = document.createElement('div')
        front.classList.add('front_img')
        let front_img=document.createElement('img')
        front_img.setAttribute('src','Images/default.png')
        front_img.setAttribute('name','default')
    
        let back = document.createElement('div')
        back.classList.add('back_img')
        let back_img=document.createElement('img')
        back_img.classList.add('res_img')
        back_img.setAttribute('src',element.img)
        back_img.setAttribute('name',element.name)
    
        front.appendChild(front_img)
        back.appendChild(back_img)
        inner_card.appendChild(front)
        inner_card.appendChild(back)
        card.appendChild(inner_card)
        main_game.appendChild(card)

        function display(){
            this.classList.toggle('card_flip')
        }

        inner_card.addEventListener('click',display)
        setTimeout(inner_card.addEventListener('click',Filped_card),5000)
        // inner_card.addEventListener('click',Filped_card)
    


         function Filped_card(){
            // console.log(this)
            let CARDS = this.childNodes[1].childNodes[0].getAttribute('name')
            let CARDS_class = this
            flips_card.push(CARDS)
            filps_class.push(CARDS_class)
            console.log(flips_card)
            console.log(filps_class)
            // console.log(name)
            setTimeout(Match_status,1000)
        }

        function NO_FLIP(){
            moves++;
            Flips.innerHTML=moves;
        }

        // game timer
            var second = 0, minute = 0; hour = 0;
            var timer = document.getElementById("time_to");
            var interval;
            function startTimer(){
                // console.log(timer)
                interval = setInterval(function(){
                    timer.innerHTML = minute+"mins "+second+"secs";
                    second++;
                    if(second == 60){
                        minute++;
                        second=0;
                    }
                    if(minute == 60){
                        hour++;
                        minute = 0;
                    }
                },1000);
            }

        function Match_status(){
            len = flips_card.length
            if(len === 2){
                if(flips_card[0]==flips_card[1]){
                    filps_class[0].classList.add('match')
                    filps_class[1].classList.add('match')

                    console.log('true')
                    flips_card=[]
                    filps_class=[]
                    NO_FLIP();
                    console.log(flips_card)
                }
                else{
                    let AB = document.querySelectorAll('.inner_card')
                    AB.forEach(data=>{
                        data.classList.remove('card_flip')
                    })
                    console.log('false')
                    flips_card=[]
                    filps_class=[]
                    NO_FLIP();
                    console.log(flips_card)
                }

            }
        }

        function match(){
            // this.classList.add('')
        }

        function unmatch(){
            this.classList.add('unmatch')
            window.setTimeout(5000,this.classList.remove('unmatch'))
        }


        startTimer();
    });
}
createBoard();























})