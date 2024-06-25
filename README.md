This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Repro for next/font not preloading fonts used in dynamic imports

In the repository, we have a component called A, which is dynamically imported and uses Nunito Sans font. Even though this import is resolved on server side, next/font does not add it's preload in server side generated HTML.
