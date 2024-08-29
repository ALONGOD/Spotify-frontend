// Guidlines:
// *. currently no better API than youtube...
// *. no need for song store, it is part of the station

// Pages, Cmps:
// HomePage render 2 stations => link StationDetails
// Add station
// AppPlayer (initially rendered at StationDetails, later in footer)
//   Smart component - connected to store:
//   -. stationModule.currentlyPlayingUrl
//   -. stationModule.dispatch(nextSong)
// Filtering
// StationList, StationPreview
// StationDetails - Make it amazing
// D & D Later....

export const stations = [
  {
    _id: '5cksxjas89xjsa8xjsa8jxs01',
    name: 'Chill Vibes',
    description: 'A relaxing playlist perfect for unwinding and de-stressing. Calm your mind with ambient and chill tracks.',
    imgUrl:
      'https://res.cloudinary.com/dh73ujhyv/image/upload/v1724082806/jevy3fwzckfd94pnyifz.webp',
    tags: ['Chill', 'Relaxing'],
    createdBy: {
      id: 'u102',
      fullname: 'Sam Smith',
      imgUrl: 'https://i.imgur.com/6OLS5bF.jpeg',
    },
    likedByUsers: ['{user-id1}', '{user-id2}'],
    songs: [
      {
        id: 'UfcAVejslrU',
        title: 'Weightless',
        artist: 'Marconi Union',
        album: 'Weightless (Ambient Transmissions Vol. 2)',
        url: 'https://youtu.be/UfcAVejslrU',
        imgUrl: ['https://i.ytimg.com/vi/UfcAVejslrU/mqdefault.jpg'],
        addedAt: 162521795262,
        duration: '8:00',
      },
      {
        id: '13EifDb4GYs',
        title: 'Porcelain',
        artist: 'Moby',
        album: 'Play',
        url: 'https://youtu.be/13EifDb4GYs',
        imgUrl: ['https://i.ytimg.com/vi/13EifDb4GYs/mqdefault.jpg'],
        addedAt: 162521795265,
        duration: '4:01',
      },
      {
        id: '6vQpW9XRiyM',
        title: 'The Numbers',
        artist: 'Radiohead',
        album: 'A Moon Shaped Pool',
        url: 'https://youtu.be/6vQpW9XRiyM',
        imgUrl: ['https://i.ytimg.com/vi/6vQpW9XRiyM/mqdefault.jpg'],
        addedAt: 162521795272,
        duration: '5:45',
      },
      {
        id: 'rVeMiVU77wo',
        title: 'Breezeblocks',
        artist: 'Alt-J',
        album: 'An Awesome Wave',
        url: 'https://youtu.be/rVeMiVU77wo',
        imgUrl: ['https://i.ytimg.com/vi/rVeMiVU77wo/mqdefault.jpg'],
        addedAt: 162521795274,
        duration: '3:47',
      },
      {
        id: 'TWcyIpul8OE',
        title: 'Holocene',
        artist: 'Bon Iver',
        album: 'Bon Iver',
        url: 'https://youtu.be/TWcyIpul8OE',
        imgUrl: ['https://i.ytimg.com/vi/TWcyIpul8OE/mqdefault.jpg'],
        addedAt: 162521795275,
        duration: '5:44',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs02',
    name: 'Workout Energy',
    description: 'Get pumped up with high-energy tracks that will keep you motivated during your workouts.',
    imgUrl:
      'https://res.cloudinary.com/dh73ujhyv/image/upload/v1724083027/rfft1keoyporqtgpv8w8.webp',
    tags: ['Workout', 'Energetic'],
    createdBy: {
      id: 'u103',
      fullname: 'Jane Doe',
      imgUrl: 'https://i.imgur.com/5ZMXSYg.jpeg',
    },
    likedByUsers: ['{user-id3}', '{user-id4}'],
    songs: [
      {
        id: 'btPJPFnesV4',
        title: 'Eye of the Tiger',
        artist: 'Survivor',
        album: 'Eye of the Tiger',
        url: 'https://www.youtube.com/watch?v=btPJPFnesV4',
        imgUrl: ['https://i.ytimg.com/vi/btPJPFnesV4/mqdefault.jpg'],
        addedAt: 162521795270,
        duration: '4:04',
      },
      {
        id: '_Yhyp-_hX2s',
        title: 'Lose Yourself',
        artist: 'Eminem',
        album: '8 Mile Soundtrack',
        url: 'https://www.youtube.com/watch?v=_Yhyp-_hX2s',
        imgUrl: ['https://i.ytimg.com/vi/_Yhyp-_hX2s/mqdefault.jpg'],
        addedAt: 162521795271,
        duration: '5:26',
      },
      {
        id: 'VDvr08sCPOc',
        title: 'Remember the Name',
        artist: 'Fort Minor',
        album: 'The Rising Tied',
        url: 'https://youtu.be/VDvr08sCPOc',
        imgUrl: ['https://i.ytimg.com/vi/VDvr08sCPOc/mqdefault.jpg'],
        addedAt: 162521795272,
        duration: '3:48',
      },
      {
        id: 'PsO6ZnUZI0g',
        title: 'Stronger',
        artist: 'Kanye West',
        album: 'Graduation',
        url: 'https://youtu.be/PsO6ZnUZI0g',
        imgUrl: ['https://i.ytimg.com/vi/PsO6ZnUZI0g/mqdefault.jpg'],
        addedAt: 162521795273,
        duration: '5:12',
      },
      {
        id: '2zNSgSzhBfM',
        title: "Can't Hold Us",
        artist: 'Macklemore & Ryan Lewis',
        album: 'The Heist',
        url: 'https://youtu.be/2zNSgSzhBfM',
        imgUrl: ['https://i.ytimg.com/vi/2zNSgSzhBfM/mqdefault.jpg'],
        addedAt: 162521795274,
        duration: '4:18',
      },
      {
        id: 'L53gjP-TtGE',
        title: 'Power',
        artist: 'Kanye West',
        album: 'My Beautiful Dark Twisted Fantasy',
        url: 'https://youtu.be/L53gjP-TtGE',
        imgUrl: ['https://i.ytimg.com/vi/L53gjP-TtGE/mqdefault.jpg'],
        addedAt: 162521795275,
        duration: '4:52',
      },
      {
        id: 'yd8jh9QYfEs',
        title: "Don't Stop the Music",
        artist: 'Rihanna',
        album: 'Good Girl Gone Bad',
        url: 'https://youtu.be/yd8jh9QYfEs',
        imgUrl: ['https://i.ytimg.com/vi/yd8jh9QYfEs/mqdefault.jpg'],
        addedAt: 162521795278,
        duration: '4:27',
      },
      {
        id: 't2NgsJrrAyM',
        title: 'Alive',
        artist: 'Sia',
        album: 'This Is Acting',
        url: 'https://youtu.be/t2NgsJrrAyM',
        imgUrl: ['https://i.ytimg.com/vi/t2NgsJrrAyM/mqdefault.jpg'],
        addedAt: 162521795279,
        duration: '4:23',
      },
      {
        id: '7wtfhZwyrcc',
        title: 'Believer',
        artist: 'Imagine Dragons',
        album: 'Evolve',
        url: 'https://youtu.be/7wtfhZwyrcc',
        imgUrl: ['https://i.ytimg.com/vi/7wtfhZwyrcc/mqdefault.jpg'],
        addedAt: 162521795280,
        duration: '3:24',
      },
      {
        id: 'CevxZvSJLk8',
        title: 'Roar',
        artist: 'Katy Perry',
        album: 'PRISM',
        url: 'https://youtu.be/CevxZvSJLk8',
        imgUrl: ['https://i.ytimg.com/vi/CevxZvSJLk8/mqdefault.jpg'],
        addedAt: 162521795281,
        duration: '3:42',
      },
      {
        id: '0NKUpo_xKyQ',
        title: 'Titanium',
        artist: 'David Guetta ft. Sia',
        album: 'Nothing but the Beat',
        url: 'https://youtu.be/0NKUpo_xKyQ',
        imgUrl: ['https://i.ytimg.com/vi/0NKUpo_xKyQ/mqdefault.jpg'],
        addedAt: 162521795282,
        duration: '4:05',
      },
      {
        id: 'tg00YEETFzg',
        title: 'We Found Love',
        artist: 'Rihanna ft. Calvin Harris',
        album: 'Talk That Talk',
        url: 'https://youtu.be/tg00YEETFzg',
        imgUrl: ['https://i.ytimg.com/vi/tg00YEETFzg/mqdefault.jpg'],
        addedAt: 162521795283,
        duration: '3:35',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs03',
    name: 'Party Hits',
    description: 'Turn up the volume with these upbeat party anthems that will keep the dance floor moving all night long.',
    imgUrl:
      'https://res.cloudinary.com/dh73ujhyv/image/upload/v1724083048/mtoempa1met6lv2tc6bh.webp',
    tags: ['Party', 'Upbeat'],
    createdBy: {
      id: 'u104',
      fullname: 'John Doe',
      imgUrl: 'https://i.imgur.com/TRVS3gj.jpeg',
    },
    likedByUsers: ['{user-id5}', '{user-id6}'],
    songs: [
      {
        id: 'FGBhQbmPwH8',
        title: 'One More Time',
        artist: 'Daft Punk',
        album: 'Discovery',
        url: 'https://www.youtube.com/watch?v=FGBhQbmPwH8',
        imgUrl: ['https://i.ytimg.com/vi/FGBhQbmPwH8/mqdefault.jpg'],
        addedAt: 162521795278,
        duration: '5:20',
      },
      {
        id: 'KQ6zr6kCPj8',
        title: 'Party Rock Anthem',
        artist: 'LMFAO',
        album: 'Sorry for Party Rocking',
        url: 'https://www.youtube.com/watch?v=KQ6zr6kCPj8',
        imgUrl: ['https://i.ytimg.com/vi/KQ6zr6kCPj8/mqdefault.jpg'],
        addedAt: 162521795279,
        duration: '6:16',
      },
      {
        id: 'OPf0YbXqDm0',
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        album: 'Uptown Special',
        url: 'https://youtu.be/OPf0YbXqDm0',
        imgUrl: ['https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg'],
        addedAt: 162521795280,
        duration: '4:31',
      },
      {
        id: 'ru0K8uYEZWw',
        title: "Can't Stop the Feeling!",
        artist: 'Justin Timberlake',
        album: 'Trolls Soundtrack',
        url: 'https://youtu.be/ru0K8uYEZWw',
        imgUrl: ['https://i.ytimg.com/vi/ru0K8uYEZWw/mqdefault.jpg'],
        addedAt: 162521795281,
        duration: '3:56',
      },
      {
        id: 'y6Sxv-sUYtM',
        title: 'Happy',
        artist: 'Pharrell Williams',
        album: 'G I R L',
        url: 'https://youtu.be/y6Sxv-sUYtM',
        imgUrl: ['https://i.ytimg.com/vi/y6Sxv-sUYtM/mqdefault.jpg'],
        addedAt: 162521795282,
        duration: '4:07',
      },
      {
        id: 'uSD4vsh1zDA',
        title: 'I Gotta Feeling',
        artist: 'The Black Eyed Peas',
        album: 'The E.N.D.',
        url: 'https://youtu.be/uSD4vsh1zDA',
        imgUrl: ['https://i.ytimg.com/vi/uSD4vsh1zDA/mqdefault.jpg'],
        addedAt: 162521795283,
        duration: '4:49',
      },
      {
        id: '4NRXx6U8ABQ',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        url: 'https://youtu.be/4NRXx6U8ABQ',
        imgUrl: ['https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg'],
        addedAt: 162521795284,
        duration: '3:22',
      },
      {
        id: 'TUVcZfQe-Kw',
        title: 'Levitating',
        artist: 'Dua Lipa ft. DaBaby',
        album: 'Future Nostalgia',
        url: 'https://youtu.be/TUVcZfQe-Kw',
        imgUrl: ['https://i.ytimg.com/vi/TUVcZfQe-Kw/mqdefault.jpg'],
        addedAt: 162521795285,
        duration: '3:23',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs04',
    name: 'Acoustic Bliss',
    description: 'Soothing acoustic tracks for a mellow and calming listening experience, perfect for relaxation or background music.',
    imgUrl:
      'https://res.cloudinary.com/dpoa9lual/image/upload/v1724575596/acoustic_music_bliss_nxakba.jpg',
    tags: ['Acoustic', 'Soothing'],
    createdBy: {
      id: 'u105',
      fullname: 'Emily Clark',
      imgUrl: 'https://i.imgur.com/JQkW0e4.jpeg',
    },
    likedByUsers: ['{user-id7}', '{user-id8}'],
    songs: [
      {
        id: 'ssdgFoHLwnk',
        title: 'Skinny Love',
        artist: 'Bon Iver',
        album: 'For Emma, Forever Ago',
        url: 'https://youtu.be/ssdgFoHLwnk',
        imgUrl: ['https://i.ytimg.com/vi/ssdgFoHLwnk/mqdefault.jpg'],
        addedAt: 162521795286,
        duration: '3:59',
      },
      {
        id: 'RBumgq5yVrA',
        title: 'Let Her Go',
        artist: 'Passenger',
        album: 'All the Little Lights',
        url: 'https://youtu.be/RBumgq5yVrA',
        imgUrl: ['https://i.ytimg.com/vi/RBumgq5yVrA/mqdefault.jpg'],
        addedAt: 162521795287,
        duration: '4:15',
      },
      {
        id: 'UAWcs5H-qgQ',
        title: 'The A Team',
        artist: 'Ed Sheeran',
        album: '+',
        url: 'https://youtu.be/UAWcs5H-qgQ',
        imgUrl: ['https://i.ytimg.com/vi/UAWcs5H-qgQ/mqdefault.jpg'],
        addedAt: 162521795288,
        duration: '4:18',
      },
      {
        id: '8inJtTG_DuU',
        title: 'Bloom',
        artist: 'The Paper Kites',
        album: 'Woodland',
        url: 'https://youtu.be/8inJtTG_DuU',
        imgUrl: ['https://i.ytimg.com/vi/8inJtTG_DuU/mqdefault.jpg'],
        addedAt: 162521795289,
        duration: '3:33',
      },
      {
        id: 'zvCBSSwgtg4',
        title: 'Ho Hey',
        artist: 'The Lumineers',
        album: 'The Lumineers',
        url: 'https://youtu.be/zvCBSSwgtg4',
        imgUrl: ['https://i.ytimg.com/vi/zvCBSSwgtg4/mqdefault.jpg'],
        addedAt: 162521795290,
        duration: '2:42',
      },
      {
        id: '1vrEljMfXYo',
        title: 'Take Me Home, Country Roads',
        artist: 'John Denver',
        album: 'Poems, Prayers & Promises',
        url: 'https://youtu.be/1vrEljMfXYo',
        imgUrl: ['https://i.ytimg.com/vi/1vrEljMfXYo/mqdefault.jpg'],
        addedAt: 162521795292,
        duration: '3:17',
      },
      {
        id: 'GsPq9mzFNGY',
        title: 'Let It Go',
        artist: 'James Bay',
        album: 'Chaos and the Calm',
        url: 'https://youtu.be/GsPq9mzFNGY',
        imgUrl: ['https://i.ytimg.com/vi/GsPq9mzFNGY/mqdefault.jpg'],
        addedAt: 162521795294,
        duration: '4:19',
      },
      {
        id: 'y8AWFf7EAc4',
        title: 'Hallelujah',
        artist: 'Jeff Buckley',
        album: 'Grace',
        url: 'https://youtu.be/y8AWFf7EAc4',
        imgUrl: ['https://i.ytimg.com/vi/y8AWFf7EAc4/mqdefault.jpg'],
        addedAt: 162521795296,
        duration: '6:53',
      },
      {
        id: 'Man4Xw8Xypo',
        title: 'Blackbird',
        artist: 'The Beatles',
        album: 'The Beatles (White Album)',
        url: 'https://youtu.be/Man4Xw8Xypo',
        imgUrl: ['https://i.ytimg.com/vi/Man4Xw8Xypo/mqdefault.jpg'],
        addedAt: 162521795298,
        duration: '2:18',
      },
      {
        id: 'JxPj3GAYYZ0',
        title: 'Tears In Heaven',
        artist: 'Eric Clapton',
        album: 'Rush (Soundtrack)',
        url: 'https://youtu.be/JxPj3GAYYZ0',
        imgUrl: ['https://i.ytimg.com/vi/JxPj3GAYYZ0/mqdefault.jpg'],
        addedAt: 162521795299,
        duration: '4:33',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs07',
    name: '90s Music Mix',
    description: 'A nostalgic collection of 90s hits, featuring classic tracks that defined an era of music.',
    imgUrl:
      'https://res.cloudinary.com/dpoa9lual/image/upload/v1724576310/90s_music_mix_acafql.jpg',
    tags: ['90s', 'Classic Hits'],
    createdBy: {
      id: 'u108',
      fullname: 'Lisa Johnson',
      imgUrl: 'https://i.imgur.com/lhthbwE.jpeg',
    },
    likedByUsers: ['{user-id13}', '{user-id14}'],
    songs: [
      {
        id: 'hTWKbfoikeg',
        title: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        album: 'Nevermind',
        url: 'https://youtu.be/hTWKbfoikeg',
        imgUrl: ['https://i.ytimg.com/vi/hTWKbfoikeg/mqdefault.jpg'],
        addedAt: 162521795310,
        duration: '5:01',
      },
      {
        id: 'bx1Bh8ZvH84',
        title: 'Wonderwall',
        artist: 'Oasis',
        album: "(What's the Story) Morning Glory?",
        url: 'https://youtu.be/bx1Bh8ZvH84',
        imgUrl: ['https://i.ytimg.com/vi/bx1Bh8ZvH84/mqdefault.jpg'],
        addedAt: 162521795311,
        duration: '4:39',
      },
      {
        id: 'xwtdhWltSIg',
        title: 'Losing My Religion',
        artist: 'R.E.M.',
        album: 'Out of Time',
        url: 'https://youtu.be/xwtdhWltSIg',
        imgUrl: ['https://i.ytimg.com/vi/xwtdhWltSIg/mqdefault.jpg'],
        addedAt: 162521795312,
        duration: '4:29',
      },
      {
        id: 'C-u5WLJ9Yk4',
        title: '...Baby One More Time',
        artist: 'Britney Spears',
        album: '...Baby One More Time',
        url: 'https://youtu.be/C-u5WLJ9Yk4',
        imgUrl: ['https://i.ytimg.com/vi/C-u5WLJ9Yk4/mqdefault.jpg'],
        addedAt: 162521795313,
        duration: '3:57',
      },
      {
        id: '4fndeDfaWCg',
        title: 'I Want It That Way',
        artist: 'Backstreet Boys',
        album: 'Millennium',
        url: 'https://youtu.be/4fndeDfaWCg',
        imgUrl: ['https://i.ytimg.com/vi/4fndeDfaWCg/mqdefault.jpg'],
        addedAt: 162521795314,
        duration: '3:33',
      },
      {
        id: 'FrLequ6dUdM',
        title: 'No Scrubs',
        artist: 'TLC',
        album: 'FanMail',
        url: 'https://youtu.be/FrLequ6dUdM',
        imgUrl: ['https://i.ytimg.com/vi/FrLequ6dUdM/mqdefault.jpg'],
        addedAt: 162521795315,
        duration: '3:34',
      },
      {
        id: 'FHG2oizTlpY',
        title: 'My Heart Will Go On',
        artist: 'Celine Dion',
        album: 'Let\'s Talk About Love',
        url: 'https://youtu.be/FHG2oizTlpY',
        imgUrl: ['https://i.ytimg.com/vi/FHG2oizTlpY/mqdefault.jpg'],
        addedAt: 162521795316,
        duration: '4:40',
      },
      {
        id: 'GuJQSAiODqI',
        title: 'Vogue',
        artist: 'Madonna',
        album: 'I\'m Breathless',
        url: 'https://youtu.be/GuJQSAiODqI',
        imgUrl: ['https://i.ytimg.com/vi/GuJQSAiODqI/mqdefault.jpg'],
        addedAt: 162521795317,
        duration: '4:53',
      },
      {
        id: 'CD-E-LDc384',
        title: 'Enter Sandman',
        artist: 'Metallica',
        album: 'Metallica',
        url: 'https://youtu.be/CD-E-LDc384',
        imgUrl: ['https://i.ytimg.com/vi/CD-E-LDc384/mqdefault.jpg'],
        addedAt: 162521795318,
        duration: '5:32',
      },
      {
        id: '3JWTaaS7LdU',
        title: 'I Will Always Love You',
        artist: 'Whitney Houston',
        album: 'The Bodyguard: Original Soundtrack Album',
        url: 'https://youtu.be/3JWTaaS7LdU',
        imgUrl: ['https://i.ytimg.com/vi/3JWTaaS7LdU/mqdefault.jpg'],
        addedAt: 162521795319,
        duration: '4:31',
      },
      {
        id: 'VV1XWJN3nJo',
        title: 'Torn',
        artist: 'Natalie Imbruglia',
        album: 'Left of the Middle',
        url: 'https://youtu.be/VV1XWJN3nJo',
        imgUrl: ['https://i.ytimg.com/vi/VV1XWJN3nJo/mqdefault.jpg'],
        addedAt: 162521795320,
        duration: '4:05',
      },
      {
        id: 'oKOtzIo-uYw',
        title: 'Killing Me Softly With His Song',
        artist: 'The Fugees',
        album: 'The Score',
        url: 'https://youtu.be/oKOtzIo-uYw',
        imgUrl: ['https://i.ytimg.com/vi/oKOtzIo-uYw/mqdefault.jpg'],
        addedAt: 162521795321,
        duration: '4:50',
      },
      {
        id: 'F2AitTPI5U0',
        title: 'Black or White',
        artist: 'Michael Jackson',
        album: 'Dangerous',
        url: 'https://youtu.be/F2AitTPI5U0',
        imgUrl: ['https://i.ytimg.com/vi/F2AitTPI5U0/mqdefault.jpg'],
        addedAt: 162521795322,
        duration: '6:23',
      },
      {
        id: 'gJLIiF15wjQ',
        title: 'Wannabe',
        artist: 'Spice Girls',
        album: 'Spice',
        url: 'https://youtu.be/gJLIiF15wjQ',
        imgUrl: ['https://i.ytimg.com/vi/gJLIiF15wjQ/mqdefault.jpg'],
        addedAt: 162521795323,
        duration: '2:53',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs06',
    name: 'Indie Mix',
    description: 'A blend of indie and alternative tracks that will take you on a musical journey through the best of indie music.',
    imgUrl:
      'https://res.cloudinary.com/dpoa9lual/image/upload/v1724575612/indie-music-mix_x5vsog.jpg',
    tags: ['Indie', 'Alternative'],
    createdBy: {
      id: 'u107',
      fullname: 'Sarah Lee',
      imgUrl: 'https://i.imgur.com/Oeh2k1J.jpeg',
    },
    likedByUsers: ['{user-id11}', '{user-id12}'],
    songs: [
      {
        id: 'ma9I9VBKPiw',
        title: 'Fluorescent Adolescent',
        artist: 'Arctic Monkeys',
        album: 'Favourite Worst Nightmare',
        url: 'https://youtu.be/ma9I9VBKPiw',
        imgUrl: ['https://i.ytimg.com/vi/ma9I9VBKPiw/mqdefault.jpg'],
        addedAt: 162521795303,
        duration: '3:12',
      },
      {
        id: 'Y5fBdpreJiU',
        title: 'Somebody Told Me',
        artist: 'The Killers',
        album: 'Hot Fuss',
        url: 'https://youtu.be/Y5fBdpreJiU',
        imgUrl: ['https://i.ytimg.com/vi/Y5fBdpreJiU/mqdefault.jpg'],
        addedAt: 162521795304,
        duration: '3:17',
      },
      {
        id: 'iWOyfLBYtuU',
        title: 'Dog Days Are Over',
        artist: 'Florence + The Machine',
        album: 'Lungs',
        url: 'https://youtu.be/iWOyfLBYtuU',
        imgUrl: ['https://i.ytimg.com/vi/iWOyfLBYtuU/mqdefault.jpg'],
        addedAt: 162521795305,
        duration: '4:12',
      },
      {
        id: '51V1VMkuyx0',
        title: 'Young Folks',
        artist: 'Peter Bjorn and John',
        album: "Writer's Block",
        url: 'https://youtu.be/51V1VMkuyx0',
        imgUrl: ['https://i.ytimg.com/vi/51V1VMkuyx0/mqdefault.jpg'],
        addedAt: 162521795306,
        duration: '4:38',
      },
      {
        id: '-nwdjQmc_N8',
        title: 'Electric Feel',
        artist: 'MGMT',
        album: 'Oracular Spectacular',
        url: 'https://youtu.be/-nwdjQmc_N8',
        imgUrl: ['https://i.ytimg.com/vi/-nwdjQmc_N8/mqdefault.jpg'],
        addedAt: 162521795307,
        duration: '3:50',
      },
      {
        id: 'bpOSxM0rNPM',
        title: 'Do I Wanna Know?',
        artist: 'Arctic Monkeys',
        album: 'AM',
        url: 'https://youtu.be/bpOSxM0rNPM',
        imgUrl: ['https://i.ytimg.com/vi/bpOSxM0rNPM/mqdefault.jpg'],
        addedAt: 162521795308,
        duration: '4:23',
      },
      {
        id: '4BJDNw7o6so',
        title: 'Lisztomania',
        artist: 'Phoenix',
        album: 'Wolfgang Amadeus Phoenix',
        url: 'https://youtu.be/4BJDNw7o6so',
        imgUrl: ['https://i.ytimg.com/vi/4BJDNw7o6so/mqdefault.jpg'],
        addedAt: 162521795309,
        duration: '4:02',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs12',
    name: 'Bar Mitzvah Playlist',
    description: 'A fun and energetic playlist perfect for Bar Mitzvah celebrations.',
    imgUrl: 'https://res.cloudinary.com/dpoa9lual/image/upload/v1724842306/BarMitzvah_playlist_cover_scc7jm.webp',
    tags: ['Bar Mitzvah', 'Party'],
    createdBy: {
      id: 'u113',
      fullname: 'David Cohen',
      imgUrl: 'https://i.imgur.com/aHfOlyE.jpeg',
    },
    likedByUsers: ['{user-id23}', '{user-id24}'],
    songs: [
      {
        id: 'kJQP7kiw5Fk',
        title: 'Despacito',
        artist: 'Luis Fonsi ft. Daddy Yankee',
        album: 'VIDA',
        url: 'https://youtu.be/kJQP7kiw5Fk',
        imgUrl: ['https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg'],
        addedAt: 162521795305,
        duration: '4:42',
      },
      {
        id: '2Vv-BfVoq4g',
        title: 'Perfect',
        artist: 'Ed Sheeran',
        album: 'Divide',
        url: 'https://youtu.be/2Vv-BfVoq4g',
        imgUrl: ['https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg'],
        addedAt: 162521795306,
        duration: '4:23',
      },
      {
        id: '6Mgqbai3fKo',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        album: 'Divide',
        url: 'https://youtu.be/6Mgqbai3fKo',
        imgUrl: ['https://i.ytimg.com/vi/6Mgqbai3fKo/mqdefault.jpg'],
        addedAt: 162521795307,
        duration: '3:54',
      },
      {
        id: 'D1PvIWdJ8xo',
        title: 'Happy',
        artist: 'Pharrell Williams',
        album: 'G I R L',
        url: 'https://youtu.be/D1PvIWdJ8xo',
        imgUrl: ['https://i.ytimg.com/vi/D1PvIWdJ8xo/mqdefault.jpg'],
        addedAt: 162521795310,
        duration: '4:07',
      },
      {
        id: 'pXRviuL6vMY',
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        album: 'Blurryface',
        url: 'https://youtu.be/pXRviuL6vMY',
        imgUrl: ['https://i.ytimg.com/vi/pXRviuL6vMY/mqdefault.jpg'],
        addedAt: 162521795311,
        duration: '3:46',
      },
      {
        id: 'kJQP7kiw5Fk',
        title: 'Can\'t Stop The Feeling!',
        artist: 'Justin Timberlake',
        album: 'Trolls (Original Motion Picture Soundtrack)',
        url: 'https://youtu.be/kJQP7kiw5Fk',
        imgUrl: ['https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg'],
        addedAt: 162521795312,
        duration: '3:57',
      },
      {
        id: 'KQ6zr6kCPj8',
        title: 'Party Rock Anthem',
        artist: 'LMFAO',
        album: 'Sorry for Party Rocking',
        url: 'https://youtu.be/KQ6zr6kCPj8',
        imgUrl: ['https://i.ytimg.com/vi/KQ6zr6kCPj8/mqdefault.jpg'],
        addedAt: 162521795314,
        duration: '4:23',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs14',
    name: 'Romantic Moments',
    description: 'A collection of timeless romantic tracks, perfect for setting the mood.',
    imgUrl: 'https://res.cloudinary.com/dpoa9lual/image/upload/v1724842122/Romantic_moments_playlist_jn03cb.png',
    tags: ['Romantic', 'Love Songs'],
    createdBy: {
      id: 'u102',
      fullname: 'musicLover123',
      imgUrl: 'https://i.imgur.com/5ZMXSYg.jpeg',
    },
    likedByUsers: ['{user-id27}', '{user-id28}'],
    songs: [
      {
        id: 'izGwDsrQ1eQ',
        title: 'Careless Whisper',
        artist: 'George Michael',
        album: 'Make It Big',
        url: 'https://youtu.be/izGwDsrQ1eQ',
        imgUrl: ['https://i.ytimg.com/vi/izGwDsrQ1eQ/mqdefault.jpg'],
        addedAt: 162521795315,
        duration: '5:02',
      },
      {
        id: '1AJmKkU5POA',
        title: 'Perfect',
        artist: 'Ed Sheeran',
        album: 'Divide',
        url: 'https://youtu.be/1AJmKkU5POA',
        imgUrl: ['https://i.ytimg.com/vi/1AJmKkU5POA/mqdefault.jpg'],
        addedAt: 162521795316,
        duration: '4:23',
      },
      {
        id: 'YQHsXMglC9A',
        title: 'Hello',
        artist: 'Adele',
        album: '25',
        url: 'https://youtu.be/YQHsXMglC9A',
        imgUrl: ['https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg'],
        addedAt: 162521795317,
        duration: '6:07',
      },
      {
        id: 'p0p1fjLPjYQ',
        title: 'All of Me',
        artist: 'John Legend',
        album: 'Love in the Future',
        url: 'https://youtu.be/p0p1fjLPjYQ',
        imgUrl: ['https://i.ytimg.com/vi/p0p1fjLPjYQ/mqdefault.jpg'],
        addedAt: 162521795318,
        duration: '5:00',
      },
      {
        id: 'hLQl3WQQoQ0',
        title: 'Someone Like You',
        artist: 'Adele',
        album: '21',
        url: 'https://youtu.be/hLQl3WQQoQ0',
        imgUrl: ['https://i.ytimg.com/vi/hLQl3WQQoQ0/mqdefault.jpg'],
        addedAt: 162521795319,
        duration: '4:45',
      },
      {
        id: 'Ho32Oh6b4jc',
        title: 'Unchained Melody',
        artist: 'The Righteous Brothers',
        album: 'Just Once in My Life',
        url: 'https://youtu.be/Ho32Oh6b4jc',
        imgUrl: ['https://i.ytimg.com/vi/Ho32Oh6b4jc/mqdefault.jpg'],
        addedAt: 162521795320,
        duration: '3:38',
      },
      {
        id: 'hLQl3WQQoQ0',
        title: 'Your Song',
        artist: 'Elton John',
        album: 'Elton John',
        url: 'https://youtu.be/hLQl3WQQoQ0',
        imgUrl: ['https://i.ytimg.com/vi/hLQl3WQQoQ0/mqdefault.jpg'],
        addedAt: 162521795321,
        duration: '4:08',
      },
      {
        id: 'aWmkuH1k7uA',
        title: 'Just the Way You Are',
        artist: 'Bruno Mars',
        album: 'Doo-Wops & Hooligans',
        url: 'https://youtu.be/aWmkuH1k7uA',
        imgUrl: ['https://i.ytimg.com/vi/aWmkuH1k7uA/mqdefault.jpg'],
        addedAt: 162521795322,
        duration: '3:40',
      },
      {
        id: '2Vv-BfVoq4g',
        title: 'Can’t Help Falling In Love',
        artist: 'Elvis Presley',
        album: 'Blue Hawaii',
        url: 'https://youtu.be/2Vv-BfVoq4g',
        imgUrl: ['https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg'],
        addedAt: 162521795324,
        duration: '3:00',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs16',
    name: 'Classic Rock Anthems',
    description: 'A collection of timeless rock anthems that defined generations.',
    imgUrl: 'https://res.cloudinary.com/dpoa9lual/image/upload/v1724842435/classical_rock_cover_vcxzpn.webp',
    tags: ['Classic Rock', 'Rock'],
    createdBy: {
      id: 'u102',
      fullname: 'musicLover123',
      imgUrl: 'https://i.imgur.com/5ZMXSYg.jpeg',
    },
    likedByUsers: ['{user-id31}', '{user-id32}'],
    songs: [
      {
        id: 'JQ2DVwSVIIo',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        url: 'https://youtu.be/JQ2DVwSVIIo',
        imgUrl: ['https://i.ytimg.com/vi/JQ2DVwSVIIo/mqdefault.jpg'],
        addedAt: 162521795335,
        duration: '5:55',
      },
      {
        id: 'gGdGFtwCNBE',
        title: 'Sweet Child O\' Mine',
        artist: 'Guns N\' Roses',
        album: 'Appetite for Destruction',
        url: 'https://youtu.be/gGdGFtwCNBE',
        imgUrl: ['https://i.ytimg.com/vi/gGdGFtwCNBE/mqdefault.jpg'],
        addedAt: 162521795336,
        duration: '5:56',
      },
      {
        id: 'eFTLKWw542g',
        title: 'Born to Run',
        artist: 'Bruce Springsteen',
        album: 'Born to Run',
        url: 'https://youtu.be/eFTLKWw542g',
        imgUrl: ['https://i.ytimg.com/vi/eFTLKWw542g/mqdefault.jpg'],
        addedAt: 162521795339,
        duration: '4:31',
      },
      {
        id: 'xbhCPt6PZIU',
        title: 'Back In Black',
        artist: 'AC/DC',
        album: 'Back In Black',
        url: 'https://youtu.be/xbhCPt6PZIU',
        imgUrl: ['https://i.ytimg.com/vi/xbhCPt6PZIU/mqdefault.jpg'],
        addedAt: 162521795342,
        duration: '4:15',
      },
      {
        id: 'HgzGwKwLmgM',
        title: 'Living on a Prayer',
        artist: 'Bon Jovi',
        album: 'Slippery When Wet',
        url: 'https://youtu.be/HgzGwKwLmgM',
        imgUrl: ['https://i.ytimg.com/vi/HgzGwKwLmgM/mqdefault.jpg'],
        addedAt: 162521795343,
        duration: '4:09',
      },
    ],
  },
  {
    _id: '5cksxjas89xjsa8xjsa8jxs20',
    name: 'Easy Listening',
    description: 'Smooth and easy tracks perfect for a relaxing day.',
    imgUrl: 'https://res.cloudinary.com/dpoa9lual/image/upload/v1724842442/easy_listening_cover_fkakta.webp',
    tags: ['Easy Listening', 'Relaxing'],
    createdBy: {
      id: 'u102',
      fullname: 'musicLover123',
      imgUrl: 'https://i.imgur.com/5ZMXSYg.jpeg',
    },
    likedByUsers: ['{user-id39}', '{user-id40}'],
    songs: [
      {
        id: 'xwtdhWltSIg',
        title: 'Losing My Religion',
        artist: 'R.E.M.',
        album: 'Out of Time',
        url: 'https://youtu.be/xwtdhWltSIg',
        imgUrl: ['https://i.ytimg.com/vi/xwtdhWltSIg/mqdefault.jpg'],
        addedAt: 162521795376,
        duration: '4:29',
      },
      {
        id: 'l5aZJBLAu1E',
        title: 'Just the Two of Us',
        artist: 'Grover Washington Jr. & Bill Withers',
        album: 'Winelight',
        url: 'https://youtu.be/l5aZJBLAu1E',
        imgUrl: ['https://i.ytimg.com/vi/l5aZJBLAu1E/mqdefault.jpg'],
        addedAt: 162521795377,
        duration: '7:20',
      },
      {
        id: '9WbCfHutDSE',
        title: 'How Deep Is Your Love',
        artist: 'Bee Gees',
        album: 'Saturday Night Fever',
        url: 'https://youtu.be/9WbCfHutDSE',
        imgUrl: ['https://i.ytimg.com/vi/9WbCfHutDSE/mqdefault.jpg'],
        addedAt: 162521795379,
        duration: '4:05',
      },
      {
        id: 'ZpDQJnI4OhU',
        title: 'Something',
        artist: 'The Beatles',
        album: 'Abbey Road',
        url: 'https://youtu.be/ZpDQJnI4OhU',
        imgUrl: ['https://i.ytimg.com/vi/ZpDQJnI4OhU/mqdefault.jpg'],
        addedAt: 162521795380,
        duration: '3:01',
      },
      {
        id: 'eEep67akIn4',
        title: 'Sittin’ On The Dock of the Bay',
        artist: 'Otis Redding',
        album: 'The Dock of the Bay',
        url: 'https://youtu.be/eEep67akIn4',
        imgUrl: ['https://i.ytimg.com/vi/eEep67akIn4/mqdefault.jpg'],
        addedAt: 162521795381,
        duration: '2:46',
      },
      {
        id: 'V1bFr2SWP1I',
        title: 'What a Wonderful World',
        artist: 'Louis Armstrong',
        album: 'What a Wonderful World',
        url: 'https://youtu.be/V1bFr2SWP1I',
        imgUrl: ['https://i.ytimg.com/vi/V1bFr2SWP1I/mqdefault.jpg'],
        addedAt: 162521795383,
        duration: '2:19',
      },
      {
        id: 'IXdNnw99-Ic',
        title: 'Wonderful Tonight',
        artist: 'Eric Clapton',
        album: 'Slowhand',
        url: 'https://youtu.be/IXdNnw99-Ic',
        imgUrl: ['https://i.ytimg.com/vi/IXdNnw99-Ic/mqdefault.jpg'],
        addedAt: 162521795384,
        duration: '3:45',
      },
    ],
  }
];


export const user = {
  _id: 'u102',
  username: 'musicLover123',
  img: 'https://example.com/user-img.jpg',
  likedSongsStation: {
    _id: 'liked-songs',
    type: 'likedSongs',
    name: 'Liked Songs',
    imgUrl: 'https://res.cloudinary.com/di6tqrg5y/image/upload/v1724325482/dfgeyhzzwh9yoeircgup.jpg',
    songs: [
      {
        id: 's1001',
        title: 'Cissy Strut',
        artist: 'The Meters',
        album: 'Funky Monks',
        url: 'youtube/song.mp4',
        imgUrl: ['https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg'],
        addedAt: 162521765262,
        duration: '3:00',
      },
      {
        id: 'mUkfiLj5oxs',
        title: 'Pass The Peas',
        artist: "The JB's",
        album: 'Funky Monks',
        url: 'youtube/song.mp4',
        imgUrl: ['https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg'],
        addedAt: 162521765262,
        duration: '2:30',
      },
      {
        id: 'qJ5F2P5tYmE',
        title: 'Superstition',
        artist: 'Stevie Wonder',
        album: 'Talking Book',
        url: 'youtube/song.mp4',
        imgUrl: ['https://i.ytimg.com/vi/qJ5F2P5tYmE/mqdefault.jpg'],
        addedAt: 162521775262,
        duration: '4:26',
      },

      {
        id: 'l8A7O4u4L9w',
        title: 'Give Up the Funk',
        artist: 'Parliament',
        album: 'Mothership Connection',
        url: 'youtube/song.mp4',
        imgUrl: ['https://i.ytimg.com/vi/l8A7O4u4L9w/mqdefault.jpg'],
        addedAt: 162521785262,
        duration: '5:45',
      },
      {
        id: 'WwSRA2p4He0',
        title: 'Dance to the Music',
        artist: 'Sly & The Family Stone',
        album: 'Dance to the Music',
        url: 'youtube/song.mp4',
        imgUrl: ['https://i.ytimg.com/vi/WwSRA2p4He0/mqdefault.jpg'],
        addedAt: 162521795262,
        duration: '3:00',
      },
    ],
  },
  likedStations: [
    {
      id: '5cksxjas89xjsa8xjsa8jxs01',
      name: 'Chill Vibes',
      creator: 'Sam Smith',
      img: ['https://res.cloudinary.com/dh73ujhyv/image/upload/v1724082806/jevy3fwzckfd94pnyifz.webp'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs03',
      name: 'Party Hits',
      creator: 'John Doe',
      img: ['https://res.cloudinary.com/dh73ujhyv/image/upload/v1724083048/mtoempa1met6lv2tc6bh.webp'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs04',
      name: 'Acoustic Bliss',
      creator: 'Emily Clark',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724575596/acoustic_music_bliss_nxakba.jpg'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs06',
      name: 'Indie Mix',
      creator: 'Sarah Lee',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724575612/indie-music-mix_x5vsog.jpg'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs07',
      name: '90s Music Mix',
      creator: 'Lisa Johnson',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724576310/90s_music_mix_acafql.jpg'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs12',
      name: 'Bar Mitzvah Playlist',
      creator: 'David Cohen',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724842306/BarMitzvah_playlist_cover_scc7jm.webp'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs14',
      name: 'Romantic Moments',
      creator: 'musicLover123',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724842122/Romantic_moments_playlist_jn03cb.png'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs16',
      name: 'Classic Rock Anthems',
      creator: 'musicLover123',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724842435/classical_rock_cover_vcxzpn.webp'],
    },
    {
      id: '5cksxjas89xjsa8xjsa8jxs20',
      name: 'Easy Listening',
      creator: 'musicLover123',
      img: ['https://res.cloudinary.com/dpoa9lual/image/upload/v1724842442/easy_listening_cover_fkakta.webp'],
    },
  ],
}
