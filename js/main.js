Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',		// Lista no ordenada
	className: 'item border-bottom',
	// Jalamos el template html
	template: Handlebars.compile($("#song-template").html()),

	render: function() {
		// var song = this.model;
		// var name = song.get('name');
		// var author = song.get('author');

		// Instanciamiento jQuery en Backbone para un elemento html
		// this.$el.html("<span>" + author + "</span> - <span>" + name + "</span>");
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}
});

// Instanciamos el objeto globalmente
window.Sfotipy = Sfotipy;