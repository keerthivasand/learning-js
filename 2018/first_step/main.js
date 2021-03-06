var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

var insertX = [ 'Willy the Goblin',
                'Big Daddy',
                'Father Christmas'];
var insertY = [ 'the soup kitchen',
                'Disneyland',
                'the White House'];
var insertZ = ['spontaneously combusted',
                'melted into a puddle on the sidewalk',
                'turned into a slug and crawled alone'];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}
randomize.addEventListener('click', result);
function result() {
    var newstory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newstory = newstory.replace(':insertx:',xItem);
    newstory = newstory.replace(':insertx:',xItem);
    newstory = newstory.replace(':inserty:',yItem);
    newstory = newstory.replace(':insertz:',zItem);

  if(customName.value != '') {
    var name = customName.value;
    newstory = newstory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.043) + "stone";
    var temperature =  Math.round(94/2) + "degree";
    newstory = newstory.replace('300 pounds',weight);
    newstory = newstory.replace('94 farenheit',temperature)

  }

  story.textContent = newstory;
  story.style.visibility = 'visible';
}


