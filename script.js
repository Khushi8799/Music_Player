const music=new Audio('audio/m1.mp3');
const songs=[
    {
        id: '1',
        songName: `On My Way <br />
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/p1.jpg"
    },
    {
        id: '2',
        songName: `Pasoori <br />
        <div class="subtitle">Ali Sethi x Shae Gill</div>`,
        poster: "img/p2.jpg"
    },
    {
        id: '3',
        songName: `Phir Kabhi <br />
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/p3.jpg"
    },
    {
        id: '4',
        songName: `Duniya <br />
        <div class="subtitle">Akhil x Dhwani Bhanushali</div>`,
        poster: "img/p4.jpg"
    },
    {
        id: '5',
        songName: `Jeene laga hoon <br />
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/p5.jpg"
    },
    {
        id: '6',
        songName: `Tujhmai Rab Dikhta hai <br />
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/p6.jpg"
    },
    {
        id: '7',
        songName: `Perfect <br />
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/p7.jpg"
    },
    {
        id: '8',
        songName: `Abhi mujhmai kahi  <br />
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "img/p8.jpg"
    },
     {
        id: '9',
        songName: `Morni Banke <br />
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/p9.jpg"
    },
    {
        id: '10',
        songName: `Aakhon Mai Teri <br />
        <div class="subtitle">KK</div>`,
        poster: "img/p10.jpg"
    },
    {
        id: '11',
        songName: `Chale Aana <br />
        <div class="subtitle">Aramaan Malik</div>`,
        poster: "img/p11.jpg"
    },
    {
        id: '12',
        songName: `Jash-e-Bahara <br />
        <div class="subtitle">A.R Rehman</div>`,
        poster: "img/p12.jpg"
    },
    {
        id: '13',
        songName: `Chogada Tara <br />
        <div class="subtitle">Darshan Raval</div>`,
        poster: "img/p13.jpg"
    },
    {
        id: '14',
        songName: `Chahu Mai Yana <br />
        <div class="subtitle">Palak Muchhal</div>`,
        poster: "img/p14.jpg"
    },
    {
        id: '15',
        songName: `Lag Jaa Gale <br/>
        <div class="subtitle">Lata Mangeshkar</div>`,
        poster: "img/p15.jpg"
    },
    {
        id: '16',
        songName: `Naino Wale ne <br />
        <div class="subtitle">Neeti Mohan</div>`,
        poster: "img/p16.jpg"
    },
    {
        id: '17',
        songName: `Bolna <br />
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/p17.jpg"
    },
    {
        id: '18',
        songName: `Chaand Baaliyan <br />
        <div class="subtitle">Aditya A</div>`,
        poster: "img/p18.jpg"
    },
    {
        id: '19',
        songName: `Photograph <br />
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "img/p19.jpg"
    },
    {
        id: '20',
        songName: `Little Bit More <br />
        <div class="subtitle">Suriel Hess</div>`,
        poster: "img/p20.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

//search_data_start

let search_results=document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const{id,songName,poster}=element;
    let card=document.createElement('a');
    card.classList.add('card');
    card.href="#" + id;
    card.innerHTML=` <img src="${poster}" alt="">
    <div class="content">
     ${songName}
    </div>
    `;
    search_results.appendChild(card);
    
});

let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase();
    let items=search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
       let as=items[index].getElementsByClassName('content')[0];
        let text_value=as.textContent || as.innerHTML;
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display="flex";
        } else {
            items[index].style.display="none";
        }
        if (input.value==0) {
            search_results.style.display="none";
        } else {
            search_results.style.display="";
        }
    }
})

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementsByClassName('wave')[0];
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
    }
    else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active1');
    }
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}


const makeAllBackgrounds=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background= 'rgb(105, 105, 170, .0)';
    })
}


let index=0;
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src= `audio/m${index}.mp3`;
        download_music.href=`audio/m${index}.mp3`;
        poster_master_play.src=`img/p${index}.jpg`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })
        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
           
        wave.classList.add('active1');
        // music.addEventListener('ended',()=>{
        // masterPlay.classList.add('bi-play-fill');
        // masterPlay.classList.remove('bi-pause-fill');
        // wave.classList.remove('active1');
        // })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170, .1)';
    })
})

let currentstart=document.getElementById('currentstart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min=Math.floor(music_dur/60);
    let sec=Math.floor(music_dur%60);
    if (sec<10) {
        sec=`0${sec}`;
    }
    currentEnd.innerText=`${min}:${sec}`;
    let min1=Math.floor(music_curr/60);
    let sec1=Math.floor(music_curr%60);
    if (sec1<10) {
        sec1=`0${sec1}`;
    }
    currentstart.innerText=`${min1}:${sec1}`;

    let progressbar=parseInt((music.currentTime/music.duration)*100);
    seek.value=progressbar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
})
const next_music=()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    if (index==songs.length) {
        index==0;
    }
    index++;
    music.src= `audio/m${index}.mp3`;
    download_music.href=`audio/m${index}.mp3`; 
    poster_master_play.src=`img/p${index}.jpg`;
    music.play();
    let song_title=songs.filter((ele)=>{
        return ele.id==index;
    })
    song_title.forEach(ele=>{
        let {songName}=ele;
        title.innerHTML=songName;
        download_music.setAttribute('download',songName);
    })
    makeAllBackgrounds();
   
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170,.1)';
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
}

const repeat_music=()=>{
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        index;
        music.src= `audio/m${index}.mp3`;
        download_music.href=`audio/m${index}.mp3`; 
        poster_master_play.src=`img/p${index}.jpg`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })
        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        })
        makeAllBackgrounds();
       
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170,.1)';
        makeAllPlays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    }

    const random_music=()=>{
            masterPlay.classList.add('bi-pause-fill');
            wave.classList.add('active1');
            if (index==songs.length) {
                index==0;
            }
            index=Math.floor((Math.random()*songs.length)+1);
            music.src= `audio/m${index}.mp3`;
            download_music.href=`audio/m${index}.mp3`; 
            poster_master_play.src=`img/p${index}.jpg`;
            music.play();
            let song_title=songs.filter((ele)=>{
                return ele.id==index;
            })
            song_title.forEach(ele=>{
                let {songName}=ele;
                title.innerHTML=songName;
                download_music.setAttribute('download',songName);
            })
            makeAllBackgrounds();
           
            Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170,.1)';
            makeAllPlays();
            document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
            document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
        }

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_dot=document.getElementById('vol_dot');
let vol_bar=document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if (vol.value==0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value>0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value>50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if (index<1) {
       index=Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src= `audio/m${index}.mp3`;
    download_music.href=`audio/m${index}.mp3`;
        poster_master_play.src=`img/p${index}.jpg`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })
        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName)
        })
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');
       makeAllBackgrounds();
       Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170, .1)';
})


next.addEventListener('click',()=>{
    index-=0;
    index+=1;
    if (index>Array.from(document.getElementsByClassName('songItem')).length) {
       index=1;
    }

    music.src= `audio/m${index}.mp3`;
    download_music.href=`audio/m${index}.mp3`;
        poster_master_play.src=`img/p${index}.jpg`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })
        song_title.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
        })
       
        makeAllPlays();
       document.getElementById(`${index}`).classList.remove('bi-play-fill');
       document.getElementById(`${index}`).classList.add('bi-pause-fill');
       makeAllBackgrounds();
       Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background= 'rgb(105, 105, 170, .1)';
       
       
})

let shuffle=document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="repeat";
            break;
         case "repeat":
                shuffle.classList.remove('bi-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML="random";
                break;
        case "random":
                    shuffle.classList.remove('bi-repeat');
                    shuffle.classList.add('bi-music-note-beamed');
                    shuffle.classList.remove('bi-shuffle');
                    shuffle.innerHTML="next";
                    break;
    }
});
music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;
    switch (b) {
        case "repeat":
            repeat_music();  
            break;
            case "next":
                next_music();  
                break;
                case "random":
                    random_music();  
                    break;
    }
})
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft+=330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft-=330;
});
