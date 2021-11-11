export const environment = {
  production: false,
   firebaseConfig:{
    apiKey: "AIzaSyDBUcXgWHr9-uAle8GQwgdc8JTWEY5wC5w",
    authDomain: "treinandofirebase-e5fb1.firebaseapp.com",
    projectId: "treinandofirebase-e5fb1",
    storageBucket: "treinandofirebase-e5fb1.appspot.com",
    messagingSenderId: "43768733951",
    appId: "1:43768733951:web:e2ce7892f072427bb06cca",
    measurementId: "G-XPZPFRTXXR",
  },

  baseUrl: 'https://api-content.ingresso.com/v0/',
  title: 'OsascoCines'
};

export const ingressoApi = {

  partner: '/partnership/faetec_felipedosantos',

  allTheaters: '/v0/theaters/city/42',
  allMovie: '/v0/events/city/42',
  comingSoon: '/v0/templates/soon/42',
  Highlights: '/v0/templates/highlights/42',
  movie: '/v0/events/',
  movieSessions: '/v0/sessions/city/42/event/',
  theater: '/v0/theaters/',
  theaterSessions: '/v0/sessions/city/42/theater/'
};