angular.module('starter.services', [])

.factory('Trocadores', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var trocadores = [{
    id: 0,
    nome: 'Airton Cabral',
    qtdTrocada: '5',
    foto: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    nome: 'André Santos',
    qtdTrocada: '5',
    foto: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    nome: 'Vinicius Eloy',
    qtdTrocada: '4',
    foto: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    nome: 'Tiago Silva',
    qtdTrocada: '3',
    foto: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    nome: 'Conrado Souza',
    qtdTrocada: '0',
    foto: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 2,
    nome: 'Luiz Lomanto',
    qtdTrocada: '3',
    foto: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    nome: 'Breno Queiros',
    qtdTrocada: '2',
    foto: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    nome: 'Elenfe Silva',
    qtdTrocada: '1',
    foto: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return trocadores;
    },
    remove: function(trocador) {
      trocadores.splice(trocadores.indexOf(trocador), 1);
    },
    get: function(trocadorId) {
      for (var i = 0; i < trocadores.length; i++) {
        if (trocadores[i].id === parseInt(trocadorId)) {
          return trocadores[i];
        }
      }
      return null;
    }
  };
});
