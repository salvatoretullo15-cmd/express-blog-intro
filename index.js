const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// In-memory posts array
const posts = [
	{
		id: 1,
		title: 'Benvenuto al mio blog',
		content: 'Questo è il primo post del mio blog. Qui racconterò le mie avventure con Node e Express.',
		image: '/images/post1.svg',
		tags: ['intro', 'node', 'express']
	},
	{
		id: 2,
		title: 'Imparare Express',
		content: 'Express rende semplice mettere in piedi un server HTTP in pochissime righe di codice.',
		image: '/images/post2.svg',
		tags: ['express', 'server']
	},
	{
		id: 3,
		title: 'Routing e Middleware',
		content: 'In questo post vediamo come funzionano le route e i middleware in Express.',
		image: '/images/post3.svg',
		tags: ['routing', 'middleware']
	},
	{
		id: 4,
		title: 'Asset statici',
		content: 'Configurare gli asset statici permette di servire immagini, CSS e JS facilmente.',
		image: '/images/post4.svg',
		tags: ['static', 'assets']
	},
	{
		id: 5,
		title: 'Prossimi passi',
		content: 'Aggiungeremo persistenza, upload immagini e paginazione.',
		image: '/images/post5.svg',
		tags: ['roadmap', 'features']
	}
];

// Root route
app.get('/', (req, res) => {
	res.send('Server del mio blog');
});

// Bacheca route
app.get('/bacheca', (req, res) => {
	res.json({ posts });
});

app.listen(PORT, () => {
	console.log(`Server avviato su http://localhost:${PORT}`);
});
