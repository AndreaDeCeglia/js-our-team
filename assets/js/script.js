// objects' container array
//each obj contains team member's infos
const team = [
    // first obj
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    // second obj
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    // third obj
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    // fourth obj
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    // fivth obj
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    // sixth obj
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    }
  ]

  console.log(`the array is :`, team);
  
  //console.log(`the array's values are :`, team[i]);
  //the last console.log is wrong 'couse i didn't defind 'i'
  // array's ending

  //imgs' path variable
  let path = `./../img/`;
  console.log(`the path in order to reach the images is :`, path);

  //loop for check the array's elements
  //in this case, objects
  for( let i=0; i<team.length; i++ ){
    // getting specific obj each loop
    let thisObject = team[i];
    console.log(`name is :`, thisObject.name, ` role is :`, thisObject.role, `img name is :`, thisObject.image);
  }