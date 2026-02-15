const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  await page.setContent(`
    <html>
    <body style="margin:0; background:#000; display:flex; align-items:center; justify-content:center; width:1200px; height:630px; font-family:'Courier New',monospace;">
      <div style="text-align:center;">
        <div style="margin-bottom:24px;">
          <svg width="120" height="120" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="34" rx="18" ry="22" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.2"/>
            <ellipse cx="24" cy="28" rx="5" ry="3" fill="none" stroke="#00ffff" stroke-width="1.2"/>
            <ellipse cx="40" cy="28" rx="5" ry="3" fill="none" stroke="#00ffff" stroke-width="1.2"/>
            <line x1="32" y1="30" x2="32" y2="38" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>
            <path d="M25 42 Q32 48 39 42" fill="none" stroke="#ff00ff" stroke-width="1.2"/>
            <circle cx="24" cy="28" r="1.2" fill="#00ffff"/>
            <circle cx="40" cy="28" r="1.2" fill="#00ffff"/>
          </svg>
        </div>
        <div style="font-size:48px; font-weight:700; letter-spacing:16px; color:rgba(255,255,255,0.9); margin-bottom:16px;">
          FACE MIRROR
        </div>
        <div style="font-size:16px; letter-spacing:4px; color:rgba(255,255,255,0.35);">
          MEDIAPIPE FACE LANDMARKER × 468 POINTS
        </div>
      </div>
    </body>
    </html>
  `);

  await page.screenshot({ path: 'assets/ogp.png' });
  console.log('OGP image generated: assets/ogp.png');
  await browser.close();
})();
