// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-post-post-jsx": () => import("./../../src/templates/Post/post.jsx" /* webpackChunkName: "component---src-templates-post-post-jsx" */),
  "component---src-templates-tag-tag-jsx": () => import("./../../src/templates/Tag/tag.jsx" /* webpackChunkName: "component---src-templates-tag-tag-jsx" */)
}

