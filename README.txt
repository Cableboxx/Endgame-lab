ENDGAME LAB — INSTALLABLE WEBSITE PACKAGE

WHAT YOU GET
- 14 original/standard endgame practice positions
- Mobile chessboard and legal move validation via chess.js
- Stockfish 17.1 Lite opponent (browser worker, downloaded from jsDelivr)
- Four engine skill settings, saved progress, retry, undo, promotion
- Web app manifest, icon, service worker for app shell caching

HOW TO PUBLISH (FREE)
1. Unzip this folder.
2. Create a free GitHub repository and upload all files at the repository root.
3. In repository Settings > Pages, choose Deploy from a branch, main, /(root).
4. Open the resulting HTTPS website in Safari on your iPhone.
5. Tap Share > Add to Home Screen.

IMPORTANT LIMITATIONS
- This package has NOT been tested on a real iPhone or against the remote engine files.
- An internet connection is needed for chess.js and the Stockfish files; the app shell alone is cached.
- The Stockfish worker may need changes if the CDN package's worker initialization API differs.
- Endgame positions are practice examples, not verified tablebase-perfect puzzles.
- Completion is currently counted on delivering checkmate, not achieving a tablebase win/draw.
- Syzygy tablebase integration is NOT included. It would require an API/service and connectivity.
- Stockfish is open-source GPLv3 software. If redistributing its binaries, comply with the license.
