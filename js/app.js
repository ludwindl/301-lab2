'use strict';

function Horns(horn) {
  this.image_url = horn.image_url;
  this.title = horn.title;
  this.description = horn.description;
  this.keyword = horn.description;
  this.horns = horn.horns;
}

Horns.allHorns = [];

Horns.prototype.render = function () {
  $('main').append('<div class = "horns1"></div>');
  
  let hornClone = $('div[class = horns1]');
  let hornHtml = $('#photo-template').html();
  
  hornClone.html(hornHtml);
  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src', this.image_url).attr('width', '150px');
  hornClone.find('p').text(this.description);
  hornClone.removeClass('horns1');
  hornClone.attr('class', this.title);
}
 
Horns.readJson = () => {
  $.get('data/page-1.json', 'json')
    .then (data => {
      data.forEach(item =>{
        Horns.allHorns.push(new Horns(item));
      })
    })
    .then(Horns.loadHorns);
}

Horns.loadHorns = () => {
  Horns.allHorns.forEach(horn => horn.render());
};

$(() => Horns.readJson());



