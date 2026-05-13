const React = require('react')

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    React.createElement('link', {
      key: 'font-preconnect-googleapis',
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    }),
    React.createElement('link', {
      key: 'font-preconnect-gstatic',
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    }),
    React.createElement('link', {
      key: 'google-fonts',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@1,6..72,300;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap',
    }),
  ])
}
