Reveal.initialize({
  transition: 'none',
  overview: false,
  progress: false,
  autoSlide: 0,
  controlsLayout: 'edges',
  controlsBackArrows: 'hidden',
  dependencies: [
    { src: '../plugin/markdown/marked.js' },
    { src: '../plugin/markdown/markdown.js' },
    { src: '../plugin/notes/notes.js', async: true },
    { src: '../plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});

Reveal.addEventListener( 'ready', function( event ) {
  Reveal.slide(1, 0);
  Reveal.configure({ transition: 'slide' });
});