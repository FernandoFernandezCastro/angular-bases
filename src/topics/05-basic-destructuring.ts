interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details:{
        author: 'Ed Sheeran',
        year: 2015
    }
}

/*console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Duration: ', audioPlayer.details.author);*/

const{song:anotherSong, songDuration:duration, details:detalle} = audioPlayer;

const {author: authorDes} = detalle;

/*console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', authorDes);*/

const dbz: string[] = ['Goku','Vegeta','Trunk'];

console.log('Personaje 3: ',dbz[2]);

const [, veg, trunks='No encontrado']: string[]=['Goku','Vegeta'];

console.log('Personaje 2: ',veg);
console.log('Personaje 3: ',trunks);



export {};