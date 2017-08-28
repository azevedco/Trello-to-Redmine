var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
      text: 'Redmine Sync Board',
      callback: onBtnClick
    }, {
      // but of course, you could also just kick off to a url if that's your thing
      icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
      text: 'Just a URL',
      url: 'https://developers.trello.com',
      target: 'Trello Developer Site' // optional target for above url
    }];
  },
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
      text: 'Redmine Sync Card',
      callback: onBtnClick
    }];
  }
});

/*
  'board-buttons': function(t, options){
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Redmine Sync',
      callback: onBtnClick
    }];
  },
*/