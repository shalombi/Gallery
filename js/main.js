console.log('Starting up');

const gNames = ['sokoban', 'spaceInvaders', 'ballBoard', 'todoApp', 'bookShop', 'calculator', 'chess', 'inPicture', 'secret']
const cardProperty = {
  sokoban: {
    description: 'puzzle video game genre in which the player pushes crates or boxes around in a warehouse. ',
    intro: ' amazing puzzle video game',
    features: 'including special and fun features',
    category: 'game',
    date: 'August 2022',
    link: 'https://shalombi.github.io/sokoban/'


  },
  // <a href="https://shalombi.github.io/sokoban/"></a>
  spaceInvaders: {
    description: 'Space Invaders[b] is a 1978 shoot em up arcade game developed by Tomohiro Nishikado.',
    intro: 'Save the earth from the aliens',
    features: 'including special and fun features',
    category: 'game',
    date: 'September 2022',
    link: 'https://shalombi.github.io/space-invader/'
  },

  ballBoard: {
    description: 'A game where the player has to eat balls in order to win, including special and fun features',
    intro: 'eat balls  ',
    features: 'including special and fun features',
    category: 'game',
    date: 'August 2022',
    link: 'https://shalombi.github.io/ball-board/'
  },
  todoApp: {
    description: 'A compact application for building tasks, including saving in local memory',
    intro: 'productivity app for building tasks ',
    category: 'productivity',
    date: 'October 2022',
    link: 'https://shalombi.github.io/todo-app/'
  },
  bookShop:
  {
    description: 'A compact application for a bookstore.',
    intro: 'Mange your own bookstore',
    category: 'marketing',
    date: 'October 2022',
    link: 'https://shalombi.github.io/book-shop/',
  },
  calculator:
  {
    description: 'Pocket calculator, now on your computer screen',
    intro: 'Pocket calculator',
    category: 'productivity',
    date: 'September 2022',


  },

  chess: {
    description: 'Chess game, options for moving pieces in the game',
    intro: 'Chess game',
    category: 'productivity',
    date: 'September 2022',
    link: 'https://shalombi.github.io/chess/',

  },
  inPicture: {
    description: 'Picture quiz',
    intro: 'Picture quiz',
    category: 'game',
    date: 'September 2022',
    link: 'https://shalombi.github.io/ex_picture/',

  },
  secret: {
    description: 'A compact website with the ability to lock content and move from page to page',
    intro: 'secret site',
    category: 'productivity',
    date: 'October 2022',
    link: 'https://shalombi.github.io/safe-content/',
  },


}

// console.log(cardProperty[gNames[0]].description);// const gRfers
// const gTiles
/* <h2>${Object.keys(cardProperty)[index]}</h2 >   */

// function createProject(names, tiles, refers) { }


// renderPortfolio(gProjects)
// renderProjects()
// renderModal()

// function renderPortfolio(projects) { }
// function renderProjects() {
//   const elContainerProjects = document.querySelector('.projects-container')
//   var strHTML = `

// <div class="container">
//   <div class="row">
//     <div class="col-lg-12 text-center">
//       <h2 class="section-heading">Portfolio</h2>
//       <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
//     </div>
//   </div>

//   <div class="row">`

//   strHTML += gNames.map((project, index) =>

//     `<div class="col-md-4 col-sm-6 portfolio-item">
//   <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//     <div class="portfolio-hover">
//       <div class="portfolio-hover-content">
//         <i class="fa fa-plus fa-3x"></i>
//       </div>
//     </div>
//     <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
//   </a>

//   <div class="portfolio-caption">
//     <h4>Threads</h4>
//     <p class="text-muted">Illustration</p>
//   </div>
// </div>
// `)


//   strHTML += ` </div>
// </div>
// `

//   console.log(strHTML);
//   elContainerProjects.innerHTML = strHTML
// }

renderPortfolio(gNames)
function renderPortfolio(names) {
  var strHTML = ''
  for (var index = 0; index < names.length; index++) {
    strHTML += `
  \n<div class="col-md-4 col-sm-6 portfolio-item">
  \n<a class="portfolio-link" data-toggle="modal" href="#portfolioModal${index + 1}">

\n<div class="portfolio-hover" onclick="renderModal()">
  \n<div class="portfolio-hover-content">
  \n<i class="fa fa-plus fa-3x"></i>
  \n</div>
  \n</div>
  \n<img class="project-img" src="img/portfolio/${names[index]}.jpg" alt="">
  
  \n</a>
  \n<div class="portfolio-caption">
  \n<h4>${names[index]}</h4>
  \n<p class="text-muted">${cardProperty[gNames[index]].intro}</p>
  \n</div>
  \n</div>`
  }
  document.querySelector('.projects').innerHTML = strHTML
}




function renderModal(idx) {
  // var strHTML = ''
  const elContaunerModal = document.querySelector('.modal-container')

  var strHTML = gNames.map((project, index) =>
    `
  <div class = "portfolio-modal modal fade" id = "portfolioModal${index + 1}" tabindex = "-1" role = "dialog" aria-hidden = "true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
       <div class="lr">
         <div class="rl"></div>
       </div>
    </div>
      <div class = "container">
      <div class = "row">
      <div class = "col-lg-8 mx-auto">
      <div class = "modal-body">

      <h2>${gNames[index]}</h2>

  <p class   = "item-intro text-muted" >${cardProperty[gNames[index]].intro}</p>
  <img class = "img-fluid d-block mx-auto" src = "img/portfolio/${gNames[index]}.jpg" alt = "">

  <p> 
      
       ${cardProperty[gNames[index]].description}
  </p>

  <ul class = "list-inline">
      <li> Date : ${cardProperty[gNames[index]].date}</li>
      <li> Client  : Threads</li>
      <li> Category : ${cardProperty[gNames[index]].category} </li>
  </ul>

  <a  href="${cardProperty[gNames[index]].link}">Go to gitHub Link</a>



  
  <button class = "btn btn-primary" 
  data-dismiss = "modal"
  type = "button">
  <i class = "fa fa-times">
  </i>
  Close Project
  </button>
        
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>

</div>
    `

  )

  // strHTML.innerText = 
  // console.log(modals);
  // strHTML = modals
  elContaunerModal.innerHTML = strHTML.join('')


}
const redirectToSecret = () => {
  //todo: check if need to clean the local storage
  window.location = 'contact.html'
}