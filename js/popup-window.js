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

const grid = document.querySelector("#grid2");
grid.classList.add('grid-1b');

// function createJobs() {
//   const row = document.createElement('div');
//   row.classList.add('rows');
//   const div1 = document.createElement('div');
//   div1.classList.add('work1b');
//   div1.innerHTML += `
//     <div class="photo2">
//         <img class="work1b-img grow" alt="work 1" width="" height="" src="images/job3b.png">
//     </div>
//     <h2 class="work-text1b poppins">Tonic</h2>
//     <ul class="flex1">
//         <li><p class="canopy poppins">CANOPY</p></li>
//         <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"></li>
//         <li><p class="bed poppins">Back End Dev</p></li>
//         <li><p><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"></p></li>
//         <li><p class="year poppins">2015</p></li>
//     </ul>
//     <p class="desc2 poppins">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//     <ul class="flex2">
//         <li><p class="stack poppins">html</p></li>
//         <li><p class="stack poppins">css</p></li>
//         <li><p class="stack poppins">javascript</p></li>
//     </ul>
//     <nav>
//         <button type="button" class="see-project poppins">See project</button>
//     </nav>
//   `;
//   grid.appendChild(row);
//   row.appendChild(div1);
// };

// const grid = document.querySelector("#grid2");
// grid.classList.add('grid-1b');

window.addEventListener("load", function(event) {
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('rows');
    if (i === 0 || i === 2) {
      row.innerHTML += `
      <div class="photo2">
        <img class="work1b-img grow" alt="work 1" src= ${array[i].imagedesk}>
      </div>
      `;
    }
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
        row.innerHTML += `
        <div class="photo2">
          <img class="work1b-img grow" alt="work 1" src= ${array[i].imagedesk}>
        </div>
        `;
      }
      
      grid.appendChild(row);
      row.appendChild(div1);
  };

  if (screen.width < 768) {
    grid.classList.add('grid-1');
    for (let i = 0; i < array.length; i += 1) {
      // const row = document.createElement('div');
      // row.classList.add('rows');
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
        `;
        grid.appendChild(row);
        row.appendChild(div1);
    };
  };
});

addEventListener("resize", (event) => {
  if (screen.width < 768) {
    grid.classList.add('grid-1');
    for (let i = 0; i < array.length; i += 1) {
      // const row = document.createElement('div');
      // row.classList.add('rows');
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
        `;
        grid.appendChild(row);
        row.appendChild(div1);
    };
  };
});

const modal = document.getElementById('modal');
modal.classList.add('overlay');

function clickButtons (i) {
  modal.innerHTML = `
  <div class="">
    <div class="grid-1">
      <h2 class="frame-mobile-h2">${array[i].title2}</h2>
      <span id="close-modal" class="cancel1">&times;</span>
    </div>
  </div>
  `;

  const closeButton = document.getElementById('cancel1');
  closeButton.addEventListener('click', () => {
    modal.classList.add('overlay');
  });
}

const buttons = document.querySelectorAll('.see-project');

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    modal.classList.remove('show');
    clickButtons(i);
  });
});

