# Svelte-static-adapter

Repro for [https://github.com/sveltejs/kit/issues/4528](https://github.com/sveltejs/kit/issues/4528)

This repro works. The Static adapter issue only seems to appear after sveltekit `1.0.0-next.326` or later (?)

Reproduce:

1. `npm init svelte test-static-adapter-versions`
2. edit versions:
   - "@sveltejs/adapter-static": "^1.0.0-next.30"
   - "@sveltejs/kit": "1.0.0-next.326",
3. Remove code that cn't be prerendered (todo list, etc)
4. npm run build
5. Navigate to:

[http://localhost:3031/test-static-adapter-versions](http://localhost:3031/test-static-adapter-versions)
