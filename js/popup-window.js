const array = [{
    title1: 'Tonic',
    title2: 'Tonic',
    imagemov: './images/job1.png',
    imagedesk: './images/job1b.png',
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
    imagedesk: '"./images/job2b.png"',
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
    imagedesk: '"./images/job3b.png"',
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
    imagedesk: '"./images/job4b.png"',
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

function createJobs() {
  const div = document.createElement('div');
  div.classList.add('work1b');
  div.innerHTML += `
  <div class="rows">
    <div class="photo1">
        <img class="work1b-img grow" alt="work 1" width="" height="" src="images/job3b.png">
    </div>
    <div class="work1b">
        <h2 class="work-text1b poppins">Tonic</h2>
        <ul class="flex1">
            <li><p class="canopy poppins">CANOPY</p></li>
            <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"></li>
            <li><p class="bed poppins">Back End Dev</p></li>
            <li><p><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"></p></li>
            <li><p class="year poppins">2015</p></li>
        </ul>
        <p class="desc2 poppins">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
        <ul class="flex2">
            <li><p class="stack poppins">html</p></li>
            <li><p class="stack poppins">css</p></li>
            <li><p class="stack poppins">javascript</p></li>
        </ul>
        <nav>
            <button type="button" class="see-project poppins">See project</button>
        </nav>
    </div>
  </div>
  `;
  grid.appendChild(div);
};

/* <div>
    <div class="photo2">
      <h3>A photo here...</h3>
      <img class="work1-img grow" src='${array.imagedesk}'/>
      <img class="work1b-img grow" alt="work 1" width="" height="" src="images/job3b.png">
    </div>
    <h3 class="work-text1b poppins">${array["title2"]}</h3>
    <ul class="flex2">
      <li><p class="canopy poppins">Uber</p></li>
      <li><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png" /></li>
      <li><p class="bed poppins">Lead Developer</p></li>
      <li><p><img class="dot" alt="" width="16px" height="16px" src="images/dot1.png" /></p></li>
      <li><p class="year poppins">2018</p></li>
    </ul>
    <p class="desc2 poppins">${array["work2"]}</p>
    <ul class="flex2">
      <li class="stack poppins">HTML</li>
      <li class="stack poppins">CSS</li>
      <li class="stack poppins">JavaScript</li>
      <li class="stack poppins"></li>
    </ul>
    <nav>
      <button class="see-project poppins" id="${array.id}" >See project</button>
    </nav>
  </div> */

window.onload = array.forEach(createJobs);

  if (screen.width < 768) {
    const par4 = document.createElement('p');
    par4.innerHTML = "This is another paragraph";
    par4.className = 'about poppins';
    par4.style.textAlign = "center";
    grid.appendChild(par4);
    
    // const div1 = document.createElement('div');
    // div1.innerHTML = `<img src= ${array[0].imagemov} alt="job card" class="work1-img grow">`;
    // div1.appendChild(img1);
    // grid2.appendChild(div1);

  }

    // grid2.appendChild(par2);

    // const div1 = document.createElement('div');
    // div1.innerHTML = `<img src= ${array[i].imgmov} alt="job card" class="work1-img grow">`;
    

    // for (let i = 0; i < array.length; i++) {
      /* const jobCard = grid2.createElement('article');
      const jobCardDiv = grid2.createElement('div');
      jobCard.className = 'grid-1';
      jobCardDiv.className = 'work1';
      grid2.appendChild(jobCard);
      jobCardDiv.innerHTML = `<img src= ${array[i].imgmov} alt="job card" class="work1-img grow">
      <class="work1">
      <h2 class="work-text1 poppins">${array[i].title1}</h2>`;
  //     grid2.appendChild(jobCardDiv); */
  //   }
  // }


  // if (screen.width < 768) {
//     for (let i = 0; i < array.length; i += 1) {
//       const jobCard = document.createElement('article');
//       const jobCardDiv = document.createElement('div');
//       cards.appendChild(jobCard);
//       jobCard.className = 'grid-1';
//       jobCardDiv.className = 'work1';
//       jobCardDiv.innerHTML = `<img src= ${array[i].imgmov} alt="job card" class="work1-img grow">
//       < class="work1">
//         <h2 class="work-text1 poppins">${array[i].title1}</h2>
//         <ul class="flex1">
//           <li><p class="canopy poppins">${array[i].work1[0]}</p></li>
//           <li>
//             <img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/>
//           </li>
//           <li><p class="bed poppins">${array[i].work1[1]}</p></li>
//           <li>
//             <img class="dot" alt="" width="16px" height="16px" src="images/dot1.png"/>
//           </li>
//           <li><p class="year poppins">${array[i].work1[2]}</p></li>
//         </ul>
//         <p class="desc2 poppins">${array[i].descr1}</p>
//         <ul class="float1">
//           <li><p class="stack poppins">${array[i].techstack1[0]}</p></li>
//           <li><p class="stack poppins">${array[i].techstack1[1]}</p></li>
//           <li><p class="stack poppins">${array[i].techstack1[2]}</p></li>
//         </ul>
//         <button class="see-project poppins" id="1">${cardetails[i].button}</button>
//       </div>`;
//       cards.appendChild(jobCardDiv);
//     }
//   // } else {

//   // }
// }

