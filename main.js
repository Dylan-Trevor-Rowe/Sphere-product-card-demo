const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML = textToPrint;
  };

const stuff = [ 
   { 
    product: 'Fab 4',
    img:"https://www.sphererecordingconsoles.com/wp-content/uploads/2016/04/IMG_6816-300x200.jpg",
    description:'The Fab Four is an all discrete designed unit with four channels in one rack space. So why is it called the Fab Four? Because they are four fabulous mic pre’s in one box and are the exact replicas that John Hall designed for the original SPHERE consoles.',
    price: "$1200"
   },
//    {
//     product:'Fab 5',
//     img:"https://www.sphererecordingconsoles.com/wp-content/uploads/2018/05/IMG_3531.jpg",
//     description:"Introducing the Sphere Recording Console’s Fab 500 series mic pre an all discrete designed unit fits in any 500 series rack. Sphere consoles have been used by artists like The Rolling Stones, Cheap Trick, Boston, Ryan Adams, Marvin Gaye, Lynyard Skynyard and many more.",
//     price: "$699"

  
]; 

  const projectBuilder = (stuff) => {
    let domstring = '';
      for (let i = 0; i < stuff.length; i++) { 
    domstring += `<div class="sphere">
    <img src= '${stuff[i].img}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${stuff[i].product}</h5>
      <p class="card-text">${stuff[i].description}</p>
      <P> ${stuff[i].price}</p>
      <button type="button" class="btn btn-primary">Buy it Here!</button>
    </div>
  </div>`;
console.log(projectBuilder);

}
printToDom('projectCard', domstring);
  };

const init = () => {
    projectBuilder(stuff);
};
init();