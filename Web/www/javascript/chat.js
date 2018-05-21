$(function() {
  afficheConversation();

  $('#envoyer').click(function() {
    var nom = $('#username').val();
    var message = $('#msg').val();
    $.get('../htbin/chatsend.py', {
      'username': nom,
      'msg': message
    }, afficheConversation);
  });



  function afficheConversation() {
    $.getJSON('../htbin/chatget.py', function(donnees) {
      var i = 1;
      var affiche = $('#conversation').html('<div class="conteneur"><span class="user">' + donnees[0].user + '</span>  <span class="msg">' + donnees[0].msg + '</span><br><span class="time">' + donnees[0].time + '</span> <span class="date">' + donnees[0].date + '<div>');
      while (i < donnees.length) {
        affiche = affiche.append('<div class="conteneur"><span class="user">' + donnees[i].user + '</span>  <span class="msg">' + donnees[i].msg + '</span><br><span class="time">' + donnees[i].time + '</span> <span class="date">' + donnees[i].date + '<div>');
        i++;
      }
    });
    $('#msg').val('');
    $('#msg').focus();
  }
});