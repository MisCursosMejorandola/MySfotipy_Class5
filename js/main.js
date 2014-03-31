Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',		// Lista no ordenada
	className: 'item border-bottom',

	render: function() {
		var song = this.model;
		var name = song.get('name');
		var author = song.get('author');

		// Instanciamiento jQuery en Backbone para un elemento html
		this.$el.html("<span>" + author + "</span> - <span>" + name + "</span>");
	}
});

// Lo instanciamos globalmente
window.Sfotipy = Sfotipy;