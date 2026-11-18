import fs from 'fs';
import path from 'path';

console.log('=== SEO INFRASTRUCTURE FINAL AUDIT ===\n');

// 1. Check Homepage static links
const indexHtml = fs.readFileSync('docs/.vitepress/dist/index.html', 'utf8');
const aRegex = /<a\b[^>]*href=["']([^"']+)["']/g;
let homeLinks = [];
let m;
while ((m = aRegex.exec(indexHtml)) !== null) {
  homeLinks.push(m[1]);
}
console.log('1. Homepage Static <a> Links Count:', homeLinks.length);
console.log('   Sample nav links:', homeLinks.slice(0, 8));

// 2. Check Sitemap
const sitemap = fs.readFileSync('docs/.vitepress/dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x => x[1]);
console.log('\n2. Sitemap Status:');
console.log('   Total URLs:', urls.length);
console.log('   Contains 404?', urls.some(u => u.includes('404')));
console.log('   All start with https://airporttuijian.blog/?', urls.every(u => u.startsWith('https://airporttuijian.blog/')));

// 3. Check Robots.txt
const robots = fs.readFileSync('docs/.vitepress/dist/robots.txt', 'utf8');
console.log('\n3. Robots.txt Content:');
console.log(robots.trim());

// 4. Check HTML Head and Meta on representative pages
function checkPageHead(relPath) {
  const file = path.join('docs/.vitepress/dist', relPath);
  if (!fs.existsSync(file)) return { file: relPath, exists: false };
  const html = fs.readFileSync(file, 'utf8');
  return {
    file: relPath,
    exists: true,
    title: html.match(/<title>([^<]+)<\/title>/)?.[1] || null,
    canonical: html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)?.[1] || null,
    robots: html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i)?.[1] || null,
    ogTitle: html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i)?.[1] || null,
    ogUrl: html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i)?.[1] || null,
    twitterCard: html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i)?.[1] || null,
    schemas: [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)].length,
    h1: html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || null
  };
}

const sampled = [
  'index.html',
  'airport/index.html',
  'vpn/index.html',
  'clash/index.html',
  'brands/index.html',
  'about/index.html',
  'methodology/index.html'
];

console.log('\n4. Sample Pages SEO Head Audit:');
sampled.forEach(p => {
  const res = checkPageHead(p);
  console.log(`\nPage: [${res.file}]`);
  console.log(`  Title: ${res.title}`);
  console.log(`  H1: ${res.h1}`);
  console.log(`  Canonical: ${res.canonical}`);
  console.log(`  Robots: ${res.robots}`);
  console.log(`  OG URL: ${res.ogUrl}`);
  console.log(`  OG Title: ${res.ogTitle}`);
  console.log(`  Schemas count: ${res.schemas}`);
});
