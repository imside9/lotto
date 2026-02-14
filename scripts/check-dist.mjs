import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const distDir = join(root, 'dist')
const distIndex = join(distDir, 'index.html')
const distHeaders = join(distDir, '_headers')

function fail(message) {
  console.error(`check:dist failed - ${message}`)
  process.exit(1)
}

if (!existsSync(distDir)) {
  fail('dist directory is missing')
}

if (!existsSync(distIndex)) {
  fail('dist/index.html is missing')
}

const html = readFileSync(distIndex, 'utf8')
if (html.includes('/src/main.tsx')) {
  fail('dist/index.html still points to /src/main.tsx')
}

if (!/\/assets\/[^"]+\.js/.test(html)) {
  fail('dist/index.html does not reference built JS assets')
}

if (!existsSync(distHeaders)) {
  fail('dist/_headers is missing')
}

const headers = readFileSync(distHeaders, 'utf8')
if (!headers.includes('/assets/*.js')) {
  fail('dist/_headers does not define JS headers')
}

console.log('check:dist passed')
