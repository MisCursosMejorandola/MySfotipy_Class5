// Definicion del namespace
Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

// Coleccion
Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
});

Sfotipy.SongView = Backbone.View.extend({
	// Captura de eventos - Clic en Botones
	events: {
		// 'EVENTO SELECTOR': 'FUNCION'
		'click .action.icon-add': 'add'
	},

	tagName: 'li',		// Lista no ordenada
	
	className: 'item border-bottom',
	
	// Jalamos el template html
	template: Handlebars.compile($("#song-template").html()),

	// Renderizacion automatica cuando cambia el modelo
	initialize: function() {
		this.listenTo(this.model, "change", this.render, this);
	},

	// Renderiza la vista para actualizar los cambios
	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},

	add: function (e) {
		alert(this.model.get("name"));
	}
});

// Rutas de la aplicacion
Sfotipy.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"album/:name": "album",
		"profile/:username": "profile"
	},

	// Ruta por defecto
	index: function() {
		console.log("Estoy en el index");
	},

	album: function() {
		console.log("Album" + name);
	},

	profile: function() {
		console.log("Username" + username);
	}
});

// Instanciamiento del enrutador
Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();

// Instanciamos el objeto globalmente
window.Sfotipy = Sfotipy;