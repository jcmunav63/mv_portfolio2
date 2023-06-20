const array = [
  {
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
  },

  {
    title1: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    imagemov: './images/job2.png',
    imagedesk: './images/job2b.png',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    button: 'See Project',
  },

  {
    title1: 'Tonic',
    title2: 'FACEBOOK 360',
    imagemov: './images/job3.png',
    imagedesk: './images/job3b.png',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 degrees photos and videos on Gear VR.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    button: 'See Project',
  },

  {
    title1: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    imagemov: './images/job4.png',
    imagedesk: './images/job4b.png',
    work1: ['CANOPY', 'Back End Dev', '2015'],
    work2: ['Uber', 'Lead Developer', '2018'],
    descr1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descr2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techstack1: ['HTML', 'CSS', 'JavaScript'],
    techstack2: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    button: 'See Project',
  },
];


document.body.onload = function() {
  // alert('La página terminó de cargar');
  const grid2 = document.querySelector("#grid2");

  const par = document.createElement('p');
  par.innerHTML = "This is a paragraph!";
  par.className = 'about poppins';
  par.style.textAlign = "center";
  grid2.appendChild(par);

  const par3 = document.createElement('p');
  par3.innerHTML = "Screen width is " + screen.width;
  par3.className = 'about poppins';
  par3.style.textAlign = "center";
  grid2.appendChild(par3);

  if (screen.width < 768) {
    const par2 = document.createElement('p');
    par2.innerHTML = "This is another paragraph";
    par2.className = 'about poppins';
    par2.style.textAlign = "center";
    grid2.appendChild(par2);
    const div1 = document.createElement('div');
    div1.innerHTML = <img src= ${array[i].imgmov} alt="job card" class="work1-img grow">;
    

    for (let i = 0; i < array.length; i++) {
      {/* const jobCard = grid2.createElement('article');
      const jobCardDiv = grid2.createElement('div');
      jobCard.className = 'grid-1';
      jobCardDiv.className = 'work1';
      grid2.appendChild(jobCard);
      jobCardDiv.innerHTML = `<img src= ${array[i].imgmov} alt="job card" class="work1-img grow">
      <class="work1">
      <h2 class="work-text1 poppins">${array[i].title1}</h2>`;
      grid2.appendChild(jobCardDiv); */}
    }
  }


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
