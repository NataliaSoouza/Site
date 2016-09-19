/* Função que um radio button, muda itens do select tipo*/
var opcoes = {
    instituicao: {
        values: ['fundamentalmedio', 'tecnico', 'superior'],
        html: ['Fundamental/Médio', 'Técnico', 'Superior']
    },
    saude: {
        values: ['clinica',  'hospital'],
        html: ['Clínica', 'Hospital']
    },
    geral: {
        values: ['shoppings', 'parques', 'compras', 'bares'],
        html: ['Shoppings', 'Parques', 'Compras', 'Bares/Pubs']
    },
	
	apoio: {
		values: ['local de apoio'],
        html: ['Local de apoio']
	},
	
	rh: {
		values: ['recursos humanos'],
        html: ['Recursos Humanos']
	},
};
var $select = $('select#tipos');
$('.campo input').on('change', function() {
    var options = opcoes[this.value];
    $select.html('');
    options.values.forEach(function(value, i) {
        var el = $('<option/>', {
            value: value,
			html: options.html[i]
        });
        $select.append(el);
    });
});

/* Função que ao selecionar Outros (itens do local) mostra input*/
function mostraCampo( el )
{
  var inputOutros = document.getElementById('outros');
  if (el.value === 'Outros'){ 
   	  inputOutros.style.display = "block";
  }
  else {
      inputOutros.style.display = "none";
  }
}

