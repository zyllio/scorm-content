function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iu358FhS26":
        Script1();
        break;
      case "6HydN1vdFio":
        Script2();
        break;
  }
}

function Script1()
{
  //enableQuiz
$.post('/formations/securite/enableQuiz',
{
'_method': 'PUT'
},
function(data)
{
if(data.code == 'error')
{
alert(data.message);
return false;
}
});
}

function Script2()
{
  //storeQuiz
var player = GetPlayer();
var score = player.GetVar("scorePercent");

$.post('/formations/securite/results',
{
'scorePercent': score
},
function(data)
{
if(data.code == 'error')
{
alert(data.message);
return false;
}
});
}

