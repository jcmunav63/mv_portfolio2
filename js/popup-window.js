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
    techstack2: ['html', 'css', 'JavaScript'],
    button: 'See Project',
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
    button: 'See Project',
    id: '2',
  },

  {
    title1: 'Tonic',
    title2: 'FACEBOOK 360',
    imagemov: '"./images/job3.png"',
    imagedesk: '"./images/job1b.png"',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 degrees photos and videos on Gear VR.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    button: 'See Project',
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
    button: 'See Project',
    id: '4',
  }
];

// CREATE WORK SECTION
const grid = document.querySelector("#grid2");
grid.classList.add('grid-1b');

window.addEventListener("load", function(event) {
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('rows');
    // if (i % 2 === 0) {
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
        <button class="see-project poppins" id="${array[i].id}" >See project</button>
      </nav>
      `;

      if (i === 1 || i === 3) {
        row.classList.add('reverse');
      }

      grid.appendChild(row);
      row.appendChild(div1);
  };

  const gridm = document.querySelector("#grid3");
  /* if (screen.width < 768) {
    gridm.classList.add('grid-1');
    for (let i = 0; i < array.length; i += 1) {
      const div1 = document.createElement('div');
      div1.classList.add('work1');
      div1.innerHTML += `
        <div class="photo1">
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
          <button class="see-project poppins" id="${array[i].id}" >See project</button>
        </nav>
        `;
        gridm.appendChild(row);
        row.appendChild(div1);
    };
  }; */
});

// POPUP WORK DETAILS WINDOW
const modal = document.getElementById('modal');
modal.classList.add('overlay');

function showModal (i) {
  modal.innerHTML = `
  <div class="works">
    <div class="grid-1">
      <h2 class="work-text1b">${array[i].title2}</h2>
      <p id="close-modal" id="cancel1" class="cancel1">&times;</p>
    </div>
  </div>
  `;
  document.body.appendChild(modal);
  modal.classList.add('show');

  const closeButton = document.getElementById('cancel1');
  closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
  });
}

const seeButtons = document.querySelectorAll('.see-project');
console.log(seeButtons);
seeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showModal(button.id);
  });
});

// array.forEach((job) => {
//   const project = document.getElementById(job.id);
//   project.addEventListener('click', () => {
//     showModal(job);
//   });
// });
