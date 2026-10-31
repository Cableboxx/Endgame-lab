// Stockfish GPL-3.0 chess engine loaded from a public CDN.
// On first use, network access is required. The upstream engine license applies.
const engine='https://cdn.jsdelivr.net/npm/stockfish@17.1.0/bin/stockfish-17.1-lite-single.js';
const wasm='https://cdn.jsdelivr.net/npm/stockfish@17.1.0/bin/stockfish-17.1-lite-single.wasm';
const queued=[];let loaded=false;
self.Module={locateFile:(name)=>name.endsWith('.wasm')?wasm:name};
self.onmessage=(event)=>{if(!loaded){queued.push(event.data);return;}if(typeof self.onEngineMessage==='function')self.onEngineMessage(event.data);else queued.push(event.data)};
try{
 // The official Stockfish browser build installs its own message handler.
 importScripts(engine);
 const upstream=self.onmessage;
 self.onEngineMessage=(msg)=>upstream({data:msg});
 loaded=true;
 for(const msg of queued)self.onEngineMessage(msg);
 queued.length=0;
}catch(e){self.postMessage('engine-error');}
