const array = [{
    title1: 'Tonic',
    title2: 'Tonic',
    imagemov: './images/job1.png',
    imagedesk: './images/job3b.png',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['CANOPY', 'Back End Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'css', 'JavaScript', 'JavaScript'],
    id: '1',
  },

  {
    title1: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    imagemov: '"./images/job2.png"',
    imagedesk: '"./images/job4b.png"',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    id: '2',
  },

  {
    title1: 'Tonic',
    title2: 'FACEBOOK 360',
    imagemov: '\"./images/job3.png\"',
    imagedesk: '"./images/job1b.png"',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 degrees photos and videos on Gear VR.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    id: '3',
  },

  {
    title1: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    imagemov: '"./images/job4.png"',
    imagedesk: '"./images/job2b.png"',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['Uber', 'Lead Developer', '2018'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    id: '4',
  }
];

// CREATE WORK SECTION
const grid = document.querySelector("#grid2");
grid.classList.add('grid-1b');
const grid1 = document.querySelector("#grid3");
grid1.classList.add('grid-1');

function loadGrids () {
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('rows');
    row.innerHTML += `
    <div class="photo2">
      <img class="work1b-img grow" alt="work 1" src= ${array[i].imagedesk}>
    </div>
    `;

    const div1 = document.createElement('div');
    div1.classList.add('work1b');
    div1.innerHTML += `

      <h2 class="work-text1b poppins">${array[i].title2}</h2>
      <ul class="flex1">
          <li><p class="canopy poppins">${array[i].work2[0]}</p></li>
          <li><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></li>
          <li><p class="bed poppins">${array[i].work2[1]}</p></li>
          <li><p><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></p></li>
          <li><p class="year poppins">${array[i].work2[2]}</p></li>
      </ul>
      <p class="desc2 poppins">${array[i].descr2}</p>
      <ul class="flex2">
        <li class="stack poppins">${array[i].techstack2[0]}</li>
        <li class="stack poppins">${array[i].techstack2[1]}</li>
        <li class="stack poppins">${array[i].techstack2[2]}</li>
        <li class="stack poppins">${array[i].techstack2[3]}</li>
      </ul>
      <nav>
        <button class="see-project poppins" id='${array[i].id}' >See project</button>
      </nav>
      `;

      if (i === 1 || i === 3) {
        row.classList.add('reverse');
      }

      grid.appendChild(row);
      row.appendChild(div1);
  };

  for (let i = 0; i < array.length; i += 1) {
    const work = document.createElement('div');
    work.classList.add('work1');
    work.innerHTML += `
    <div class="photo2">
      <img class="work1-img grow" alt="work 1" src= ${array[i].imagemov}>
    </div>
    <h2 class="work-text1 poppins">${array[i].title1}</h2>
    <ul class="flex1">
        <li><p class="canopy poppins">${array[i].work1[0]}</p></li>
        <li><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></li>
        <li><p class="bed poppins">${array[i].work1[1]}</p></li>
        <li><p><img class="dot" alt="" width="16px" height="16px" src="./images/dot1.png"></p></li>
        <li><p class="year poppins">${array[i].work1[2]}</p></li>
    </ul>
    <p class="desc2 poppins">${array[i].descr1}</p>
    <ul class="flex2">
      <li class="stack poppins">${array[i].techstack1[0]}</li>
      <li class="stack poppins">${array[i].techstack1[1]}</li>
      <li class="stack poppins">${array[i].techstack1[2]}</li>
    </ul>
    <nav>
      <button class="see-project poppins" id='${array[i].id}' >See project</button>
    </nav>
    `;

      grid1.appendChild(work);
  };
};

// MODAL WINDOW
const seeProject = document.querySelectorAll('.see-project');

const detailContainer = document.querySelector('.detail-container');
const detail = document.querySelector('.detail');
const btnClose = document.querySelector('.btn-close');
let rowArray = array[0];
console.log(rowArray);

function loadModal (buttonId) {

  // const buttonId = button.id;
  const html = `
    <h2 class="work-text1a poppins">${array[buttonId].title1}</h2>
    <ul class="flex1">
      <li><p class="canopy poppins">${array[buttonId].work1[0]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="bed poppins">${array[buttonId].work1[1]}</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/></li>
      <li><p class="year poppins">${array[buttonId].work1[2]}</p></li>
    </ul>
    <img class="img" alt="work1" width="" height="" src=${array[buttonId].imagemov}/>
    <div class="box">
      <p class="para poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s. Lorem ipsum dolor is simply dummy text of the printing and typesetting industry.</p>
      <p class="para poppins">Lorem ipsum dolor is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the releorem. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took 
      a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p>
      <ul class="flex2a">
        <li><p class="stack poppins">${array[buttonId].techstack1[0]}</p></li>
        <li><p class="stack poppins">${array[buttonId].techstack1[1]}</p></li>
        <li><p class="stack poppins">${array[buttonId].techstack1[2]}</p></li>
      </ul>
      <div class="btn-box">
        <a href="https://jcmunav63.github.io/mv_portfolio2/" class="linkButton see-project2 poppins" target="_blank" id="">See live<img src="./images/live-button.png" class="img-inbtn"></a>
        <a href="https://github.com/jcmunav63/mv_portfolio2" class="linkButton see-project2 poppins" target="_blank" id="">See source<img src="./images/github-button.svg" class="img-inbtn" height="18px" width="18px"></a>
      </div>
    </div>`;

    detail.insertAdjacentHTML('afterbegin', html);
    document.body.style.overflow = 'hidden';
    detailContainer.classList.add('show-detail');
};

// ONLOAD LISTENER
window.addEventListener("load", function(event) {

  loadGrids();

  const seeProject = document.querySelectorAll('.see-project');

  seeProject.forEach((button) => {
    button.addEventListener('click', () => {
      detail.innerHTML = "";
      // const buttonId = button.id;
      loadModal(button.id);
    })
  })

  btnClose.addEventListener('click', () => {
    detailContainer.classList.remove('show-detail');
    detail.innerHTML = "";
    document.body.style.overflow = 'auto';
  })

});

// detail.innerHTML = "";

// seeProject.forEach((button) => {
//   button.addEventListener('click', () => {
//     // console.log(e);
//     detail.innerHTML = "";
//     loadModal();
//   })
// })

// btnClose.addEventListener('click', () => {
//   detailContainer.classList.remove('show-detail');
//   detail.innerHTML = "";
// })
