function Animal(nome) {
	this.nome = nome || 'Sem nome';
}

var animalPrototipo = {
  fazerBarulho: function () {
    throw 'Deve ser implementado';
  }
};
Animal.prototype = animalPrototipo;

function Cao(nome) {
  Animal.call(this, nome);
}

var caoPrototipo = {
  fazerBarulho: function () {
    return this.nome + ' ------ AUAUAUAU!';
  }
};
caoPrototipo.prototype = Animal.prototype;
Cao.prototype = caoPrototipo;

function Gato(nome) {
  Animal.call(this, nome);
}

var gatoPrototipo = {
  fazerBarulho: function () {
    return this.nome + ' ------ MIAUUUUUU!';
  }
};
gatoPrototipo.prototype = Animal.prototype;
Gato.prototype = gatoPrototipo;

var gato = new Gato('GATO');
var cao = new Cao('CACHORRO');

/*console.log(gato.fazerBarulho());
console.log(cao.fazerBarulho());*/

function Manada(){
	this.lista = [];
}
var manadaPrototipo = {
	adicionarAnimal(animal){
		this.lista.push(animal);
	},
	
	imprimirAnimal: function () {
		throw 'Deve ser implementado';
	}
