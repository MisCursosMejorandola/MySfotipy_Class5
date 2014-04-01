Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

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

	render: function() {
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}

	add: function (e) {
		alert:(this.model.get("name"));
	},
});

// Instanciamos el objeto globalmente
window.Sfotipy = Sfotipy;