//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter()
		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;
