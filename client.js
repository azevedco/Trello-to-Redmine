var getCardData = function (t, opts) {
    
    return t.card('all')
    .then(function (card) {
        console.log(JSON.stringify(card, null, 2));
    });

};

var getBoardData = function (t, opts) {
  
    return t.board('all')
    .then(function(board) {
        console.log(JSON.stringify(board, null, 2));
    });
    
};

var getListData = function (t, opts) {
    return t.lists('all')
    .then(function(lists) {
        console.log(JSON.stringify(lists, null, 2));
    });
}

window.TrelloPowerUp.initialize({
//    'board-buttons': function(t, options ){
//        return [{
//            icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
//            text: 'Redmine Sync Board',
//            callback: test
//        }];
//    },
    'card-buttons': function(t, options) {
        return [{
            icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
            text: 'Redmine Sync Card',
            callback: getCardData//function (t, opts) { console.log('Do something else pleaasase'); }
        }, 
        {
            // but of course, you could also just kick off to a url if that's your thing
            icon: 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg',
            text: 'Just a URL',
            url: 'https://developers.trello.com',
            target: 'Trello Developer Site' // optional target for above url
        }];
    },
    'board-buttons': function(t, options){
        return [{
          icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
          text: 'Redmine Sync',
          callback: getBoardData
        },{
            
            icon: 'https://www.reddoorshelter.ca/sites/default/files/success-icon.png',
            text: 'Display List Data',
            callback: getListData
            
        }];
    },
    'authorization-status': function(t, options){
        // return a promise that resolves to the object with
        // a property 'authorized' being true/false
        // you can also return the object synchronously if you know
        // the answer synchronously
        return new TrelloPowerUp.Promise((resolve) => resolve({ authorized: true }));
    }
});

/*
  
*/