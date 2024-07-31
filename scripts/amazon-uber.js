
  let result = document.querySelector('.test-btn');

if (result.classList.contains('js-button')) {
  console.log('Yes, it has it.');
} else {
  console.log('No it does not.') 
}


  function triButton(userValue) {

    let gamingFn = document.querySelector('.gaming-function');
    let musicFn = document.querySelector('.music-function');
    let techFn = document.querySelector('.tech-function');
    
    if (userValue === 'Gaming') {

      if (!gamingFn.classList.contains('is-toggled')) {
          gamingFn.classList.add('is-toggled');
          musicFn.classList.remove('is-toggled');
          techFn.classList.remove('is-toggled');
      
       } else  {
            gamingFn.classList.remove('is-toggled');
       }

    } else if (userValue === 'Music') {

        if (!musicFn.classList.contains('is-toggled')) {
            musicFn.classList.add('is-toggled');
            gamingFn.classList.remove('is-toggled');
            techFn.classList.remove('is-toggled');

        } else  {
            musicFn.classList.remove('is-toggled');
        }

    } else if (userValue === 'Tech') {

        if (!techFn.classList.contains('is-toggled')) {
            techFn.classList.add('is-toggled');
            musicFn.classList.remove('is-toggled');
            gamingFn.classList.remove('is-toggled');

        } else {
            techFn.classList.remove('is-toggled');
        }

    }

  }
