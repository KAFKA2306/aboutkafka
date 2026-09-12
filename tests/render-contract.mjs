import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const CANONICAL_PROFILE_URL = 'https://github.com/KAFKA2306/KAFKA2306'
const FIXED_PROFILE_COUNT = /(?:\b\d[\d,.]*\s*(?:Stars|Followers|Following)\b|\b(?:Stars|Followers|Following)\s*\d[\d,.]*\b)/i
const PERSONAL_DISCORD_LINK = /https?:\/\/(?:www\.)?discordapp\.com\/users\//i

function verifyLegacyBoundary(markup) {
  assert.match(markup, /Legacy prototype/, 'rendered UI must show the legacy notice')
  assert.ok(
    markup.includes(`href="${CANONICAL_PROFILE_URL}"`),
    'rendered UI must link to the canonical profile',
  )
  assert.doesNotMatch(markup, FIXED_PROFILE_COUNT, 'rendered UI must not expose fixed profile counts')
  assert.doesNotMatch(markup, PERSONAL_DISCORD_LINK, 'rendered UI must not expose personal Discord user links')
}

function expectRejected(markup, messagePattern) {
  assert.throws(() => verifyLegacyBoundary(markup), messagePattern)
}

const vite = await createServer({
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx')
  const productionMarkup = renderToStaticMarkup(React.createElement(App))
  verifyLegacyBoundary(productionMarkup)

  // A source token is not completion evidence when it is absent from rendered output.
  const nonRenderedSource = `Legacy prototype ${CANONICAL_PROFILE_URL}`
  assert.match(nonRenderedSource, /Legacy prototype/)
  expectRejected('<main>Current profile placeholder</main>', /legacy notice/)

  // Forbidden content is rejected even when it comes from a component outside App.tsx.
  function ImportedLegacyPanel() {
    return React.createElement(
      'aside',
      null,
      React.createElement('span', null, 'Followers 42'),
      React.createElement('a', { href: 'https://discordapp.com/users/123' }, 'Old contact'),
    )
  }

  const importedMarkup = renderToStaticMarkup(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(App),
      React.createElement(ImportedLegacyPanel),
    ),
  )
  expectRejected(importedMarkup, /fixed profile counts/)

  console.log('Rendered legacy boundary contract: PASS')
} finally {
  await vite.close()
}
