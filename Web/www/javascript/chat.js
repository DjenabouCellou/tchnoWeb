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
      var affiche = $('#conversation').html('<div ><b>' + donnees[0].user + '</b>  ' + donnees[0].msg + '<br><span style="text-align:right">' + donnees[0].time + '</span><div>');
      while (i < donnees.length) {
        affiche = affiche.append('<div ><b>' + donnees[i].user + '</b>  <p>' + donnees[i].msg + '<p><span >' + donnees[i].time + '</span><div>');
        i++;
      }
    });
    $('#msg').val('');
    $('#msg').focus();
  }
});