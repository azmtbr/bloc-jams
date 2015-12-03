
vgit@github.com:matstc/bloc-jams-2.gitar albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };


var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

var albumKoni = {
	name: 'I\'m a great dog',
	artist: 'Koni Bear',
	label: 'Woof Records',
	year: '2010',
	albumArtUrl: 'assets/images/album_covers/Koni1.JPG',
	songs: [
		{ name: 'Woof and so much more', length: '3:54' },
		{ name: 'I\'m a pup and I just don\'t care', length: '3:55' },
		{ name: 'Dogs are so great!', length: '3:56' },
		{ name: 'Dog songs would sound pretty much the same.', length: '3:57' },
		{ name: 'I\'m hungry now. Goodbye.', length: '3:58' }
	]
	
}

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var setCurrentAlbum = function(album) {
     
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     
     albumSongList.innerHTML = '';
 
    
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
 	
	 var albumArray = [albumKoni, albumMarconi, albumPicasso];
	 var index = 0;

	 document.getElementsByClassName('album-cover-art')[0].addEventListener("click", function(event) {
	 	setCurrentAlbum(albumArray[index]);
		index++;
		if (index == albumArray.length) {
			index = 0;
		}
	 });
 };
