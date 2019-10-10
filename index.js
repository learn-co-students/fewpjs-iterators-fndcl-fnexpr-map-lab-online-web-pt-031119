const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function (tutorial) {
//    return tutorial.toUpperCase();
//  });

 // const titleCased = tutorials.map(tutorial) => {
 //   return tutorial.toUpperCase();
 // }



 // const titleCased = tutorial => {
 //   return tutorials.map(function(tutorial) {
 //     tutorial.toUpperCase();
 //   })
 // };
//
// const titleCased = tutorials.map(function(tutorial) {
//   return tutorial.toUpperCase();
// });



const titleCased = tutorial => {
   return tutorials.map(line => {
    // let capitalizedWords = tutorial.split(' ').map(word => {
    //   word[0].toUpperCase() + word.slice(1);
    let words = line.split(' ');
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  });
};

 
 // const titleCased = () => {
 //   return tutorials
 // }
// array2 = array2.map(function (e) {
//     return e.toUpperCase()
// });




 // let doubled = arr.map(num => {
 //     return num * 2;
 // });


 // var result = arr.map(person => ({ value: person.id, text: person.name }));
 // console.log(result)


//
//    const activatedRobots = robots.map(function (robot) {
//     return Object.assign({}, robot, {
//       modes: robot.modes * 2,
//       isActivated: true,
//     });
//   });const activatedRobots = robots.map(function (robot) {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   });
// });
