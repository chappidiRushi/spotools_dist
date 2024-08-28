import{T as ae,Za as oe,a as h,b as S,c as ne,e as a,f as $,nd as q}from"./chunk-RDDOURY4.js";var pe={APP_NAME:"Spotools",BASE_URL:"http://localhost:3000",PLAYLIST_WARN_SIZE:500},W;function ce(){return W===void 0&&(W=oe(!1)),W}function ue(i){return a(this,null,function*(){let e=ce();try{return e.set(!0),{result:yield i(),error:null}}catch(t){let s="Unknown Error occurred";return t instanceof Error?s=t.message:typeof t=="string"?s=t:typeof t=="object"&&t!==null&&(s=JSON.stringify(t)),console.error("Error occurred:",t),{error:s,result:null}}finally{e.set(!1)}})}function he(i){return i.error!==null}var c=class{api;constructor(e){this.api=e}getRequest(e){return a(this,null,function*(){return yield this.api.makeRequest("GET",e)})}postRequest(e,t,s=void 0){return a(this,null,function*(){return yield this.api.makeRequest("POST",e,t,s)})}putRequest(e,t,s=void 0){return a(this,null,function*(){return yield this.api.makeRequest("PUT",e,t,s)})}deleteRequest(e,t){return a(this,null,function*(){return yield this.api.makeRequest("DELETE",e,t)})}paramsFor(e){let t=new URLSearchParams;for(let s of Object.getOwnPropertyNames(e))(e[s]||e[s]===0||!e[s]&&typeof e[s]=="boolean")&&t.append(s,e[s].toString());return[...t].length>0?`?${t.toString()}`:""}};var C=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return yield this.getRequest(`albums/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`albums${s}`)).albums})}tracks(e,t,s,r){let o=this.paramsFor({market:t,limit:s,offset:r});return this.getRequest(`albums/${e}/tracks${o}`)}};var A=class extends c{get(e){return a(this,null,function*(){if(typeof e=="string")return this.getRequest(`artists/${e}`);let t=this.paramsFor({ids:e});return(yield this.getRequest(`artists${t}`)).artists})}albums(e,t,s,r,o){let n=this.paramsFor({include_groups:t,market:s,limit:r,offset:o});return this.getRequest(`artists/${e}/albums${n}`)}topTracks(e,t){let s=this.paramsFor({market:t});return this.getRequest(`artists/${e}/top-tracks${s}`)}relatedArtists(e){return this.getRequest(`artists/${e}/related-artists`)}};var F=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return this.getRequest(`audiobooks/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`audiobooks${s}`)).audiobooks})}getAudiobookChapters(e,t,s,r){let o=this.paramsFor({market:t,limit:s,offset:r});return this.getRequest(`audiobooks/${e}/chapters${o}`)}};var v=class extends c{getCategories(e,t,s,r){let o=this.paramsFor({country:e,locale:t,limit:s,offset:r});return this.getRequest(`browse/categories${o}`)}getCategory(e,t,s){let r=this.paramsFor({country:t,locale:s});return this.getRequest(`browse/categories/${e}${r}`)}getNewReleases(e,t,s){let r=this.paramsFor({country:e,limit:t,offset:s});return this.getRequest(`browse/new-releases${r}`)}getFeaturedPlaylists(e,t,s,r,o){let n=this.paramsFor({country:e,locale:t,timestamp:s,limit:r,offset:o});return this.getRequest(`browse/featured-playlists${n}`)}getPlaylistsForCategory(e,t,s,r){let o=this.paramsFor({country:t,limit:s,offset:r});return this.getRequest(`browse/categories/${e}/playlists${o}`)}};var P=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return this.getRequest(`chapters/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`chapters${s}`)).chapters})}};var E=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return this.getRequest(`episodes/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`episodes${s}`)).episodes})}};var I=class extends c{get(e){let t=this.paramsFor(e);return this.getRequest(`recommendations${t}`)}genreSeeds(){return this.getRequest("recommendations/available-genre-seeds")}};var U=class extends c{getAvailableMarkets(){return this.getRequest("markets")}};var B=class extends c{getPlaybackState(e,t){let s=this.paramsFor({market:e,additional_types:t});return this.getRequest(`me/player${s}`)}getAvailableDevices(){return this.getRequest("me/player/devices")}getCurrentlyPlayingTrack(e,t){let s=this.paramsFor({market:e,additional_types:t});return this.getRequest(`me/player/currently-playing${s}`)}getRecentlyPlayedTracks(e,t){let s={limit:e};t&&(t.type==="before"?s.before=t.timestamp:t.type==="after"&&(s.after=t.timestamp));let r=this.paramsFor(s);return this.getRequest(`me/player/recently-played${r}`)}getUsersQueue(){return this.getRequest("me/player/queue")}transferPlayback(e,t){return a(this,null,function*(){if(e.length>1)throw new Error("Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request");yield this.putRequest("me/player",{device_ids:e,play:t})})}startResumePlayback(e,t,s,r,o){return a(this,null,function*(){let n=this.paramsFor({device_id:e});yield this.putRequest(`me/player/play${n}`,{context_uri:t,uris:s,offset:r,positionMs:o})})}pausePlayback(e){return a(this,null,function*(){let t=this.paramsFor({device_id:e});yield this.putRequest(`me/player/pause${t}`)})}skipToNext(e){return a(this,null,function*(){let t=this.paramsFor({device_id:e});yield this.postRequest(`me/player/next${t}`)})}skipToPrevious(e){return a(this,null,function*(){let t=this.paramsFor({device_id:e});yield this.postRequest(`me/player/previous${t}`)})}seekToPosition(e,t){return a(this,null,function*(){let s=this.paramsFor({position_ms:e,device_id:t});yield this.putRequest(`me/player/seek${s}`)})}setRepeatMode(e,t){return a(this,null,function*(){let s=this.paramsFor({state:e,device_id:t});yield this.putRequest(`me/player/repeat${s}`)})}setPlaybackVolume(e,t){return a(this,null,function*(){let s=this.paramsFor({volume_percent:e,device_id:t});yield this.putRequest(`me/player/volume${s}`)})}togglePlaybackShuffle(e,t){return a(this,null,function*(){let s=this.paramsFor({state:e,device_id:t});yield this.putRequest(`me/player/shuffle${s}`)})}addItemToPlaybackQueue(e,t){return a(this,null,function*(){let s=this.paramsFor({uri:e,device_id:t});yield this.postRequest(`me/player/queue${s}`)})}};var L=class extends c{getPlaylist(e,t,s,r){let o=this.paramsFor({market:t,fields:s,additional_types:r?.join(",")});return this.getRequest(`playlists/${e}${o}`)}getPlaylistItems(e,t,s,r,o,n){let l=this.paramsFor({market:t,fields:s,limit:r,offset:o,additional_types:n?.join(",")});return this.getRequest(`playlists/${e}/tracks${l}`)}changePlaylistDetails(e,t){return a(this,null,function*(){yield this.putRequest(`playlists/${e}`,t)})}movePlaylistItems(e,t,s,r){return this.updatePlaylistItems(e,{range_start:t,range_length:s,insert_before:r})}updatePlaylistItems(e,t){return this.putRequest(`playlists/${e}/tracks`,t)}addItemsToPlaylist(e,t,s){return a(this,null,function*(){yield this.postRequest(`playlists/${e}/tracks`,{position:s,uris:t})})}removeItemsFromPlaylist(e,t){return a(this,null,function*(){yield this.deleteRequest(`playlists/${e}/tracks`,t)})}getUsersPlaylists(e,t,s){let r=this.paramsFor({limit:t,offset:s});return this.getRequest(`users/${e}/playlists${r}`)}createPlaylist(e,t){return this.postRequest(`users/${e}/playlists`,t)}getPlaylistCoverImage(e){return this.getRequest(`playlists/${e}/images`)}addCustomPlaylistCoverImage(e,t){return a(this,null,function*(){let s="";if(t instanceof Buffer)s=t.toString("base64");else if(t instanceof HTMLCanvasElement)s=t.toDataURL("image/jpeg").split(";base64,")[1];else if(t instanceof HTMLImageElement){let r=document.createElement("canvas");r.width=t.width,r.height=t.height;let o=r.getContext("2d");if(!o)throw new Error("Could not get canvas context");o.drawImage(t,0,0),s=r.toDataURL("image/jpeg").split(";base64,")[1]}else if(typeof t=="string")s=t;else throw new Error("ImageData must be a Buffer, HTMLImageElement, HTMLCanvasElement, or string containing a base64 encoded jpeg");yield this.addCustomPlaylistCoverImageFromBase64String(e,s)})}addCustomPlaylistCoverImageFromBase64String(e,t){return a(this,null,function*(){yield this.putRequest(`playlists/${e}/images`,t,"image/jpeg")})}};var j=class extends c{execute(e,t,s,r,o,n){return a(this,null,function*(){let l=this.paramsFor({q:e,type:t,market:s,limit:r,offset:o,include_external:n});return yield this.getRequest(`search${l}`)})}};var O=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return this.getRequest(`shows/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`shows${s}`)).shows})}episodes(e,t,s,r){let o=this.paramsFor({market:t,limit:s,offset:r});return this.getRequest(`shows/${e}/episodes${o}`)}};var _=class extends c{get(e,t){return a(this,null,function*(){if(typeof e=="string"){let o=this.paramsFor({market:t});return this.getRequest(`tracks/${e}${o}`)}let s=this.paramsFor({ids:e,market:t});return(yield this.getRequest(`tracks${s}`)).tracks})}audioFeatures(e){return a(this,null,function*(){if(typeof e=="string")return this.getRequest(`audio-features/${e}`);let t=this.paramsFor({ids:e});return(yield this.getRequest(`audio-features${t}`)).audio_features})}audioAnalysis(e){return this.getRequest(`audio-analysis/${e}`)}};var g={access_token:"emptyAccessToken",token_type:"",expires_in:0,refresh_token:"",expires:-1};function m(i){return i===g}var M=class extends c{profile(e){return this.getRequest(`users/${e}`)}};var N=class extends c{albums;audiobooks;episodes;playlists;shows;tracks;constructor(e){super(e),this.albums=new K(e),this.audiobooks=new G(e),this.episodes=new Q(e),this.playlists=new Y(e),this.shows=new Z(e),this.tracks=new X(e)}profile(){return this.getRequest("me")}topItems(e,t,s,r){let o=this.paramsFor({time_range:t,limit:s,offset:r});return this.getRequest(`me/top/${e}${o}`)}followedArtists(e,t){let s=this.paramsFor({type:"artist",after:e,limit:t});return this.getRequest(`me/following${s}`)}followArtistsOrUsers(e,t){return a(this,null,function*(){let s=this.paramsFor({type:t});yield this.putRequest(`me/following${s}`,{ids:e})})}unfollowArtistsOrUsers(e,t){return a(this,null,function*(){let s=this.paramsFor({type:t});yield this.deleteRequest(`me/following${s}`,{ids:e})})}followsArtistsOrUsers(e,t){let s=this.paramsFor({ids:e,type:t});return this.getRequest(`me/following/contains${s}`)}};var K=class extends c{savedAlbums(e,t,s){let r=this.paramsFor({limit:e,offset:t,market:s});return this.getRequest(`me/albums${r}`)}saveAlbums(e){return a(this,null,function*(){yield this.putRequest("me/albums",e)})}removeSavedAlbums(e){return a(this,null,function*(){yield this.deleteRequest("me/albums",e)})}hasSavedAlbums(e){let t=this.paramsFor({ids:e});return this.getRequest(`me/albums/contains${t}`)}},G=class extends c{savedAudiobooks(e,t){let s=this.paramsFor({limit:e,offset:t});return this.getRequest(`me/audiobooks${s}`)}saveAudiobooks(e){return a(this,null,function*(){yield this.putRequest("me/audiobooks",e)})}removeSavedAudiobooks(e){return a(this,null,function*(){yield this.deleteRequest("me/audiobooks",e)})}hasSavedAudiobooks(e){let t=this.paramsFor({ids:e});return this.getRequest(`me/audiobooks/contains${t}`)}},Q=class extends c{savedEpisodes(e,t,s){let r=this.paramsFor({market:e,limit:t,offset:s});return this.getRequest(`me/episodes${r}`)}saveEpisodes(e){return a(this,null,function*(){yield this.putRequest("me/episodes",e)})}removeSavedEpisodes(e){return a(this,null,function*(){yield this.deleteRequest("me/episodes",e)})}hasSavedEpisodes(e){let t=this.paramsFor({ids:e});return this.getRequest(`me/episodes/contains${t}`)}},Y=class extends c{playlists(e,t){let s=this.paramsFor({limit:e,offset:t});return this.getRequest(`me/playlists${s}`)}follow(e){return a(this,null,function*(){yield this.putRequest(`playlists/${e}/followers`)})}unfollow(e){return a(this,null,function*(){yield this.deleteRequest(`playlists/${e}/followers`)})}isFollowing(e,t){let s=this.paramsFor({ids:t});return this.getRequest(`playlists/${e}/followers/contains${s}`)}},Z=class extends c{savedShows(e,t){let s=this.paramsFor({limit:e,offset:t});return this.getRequest(`me/shows${s}`)}saveShows(e){let t=this.paramsFor({ids:e});return this.putRequest(`me/shows${t}`)}removeSavedShows(e,t){let s=this.paramsFor({ids:e,market:t});return this.deleteRequest(`me/shows${s}`)}hasSavedShow(e){let t=this.paramsFor({ids:e});return this.getRequest(`me/shows/contains${t}`)}},X=class extends c{savedTracks(e,t,s){let r=this.paramsFor({limit:e,offset:t,market:s});return this.getRequest(`me/tracks${r}`)}saveTracks(e){return a(this,null,function*(){yield this.putRequest("me/tracks",e)})}removeSavedTracks(e){return a(this,null,function*(){yield this.deleteRequest("me/tracks",e)})}hasSavedTracks(e){let t=this.paramsFor({ids:e});return this.getRequest(`me/tracks/contains${t}`)}};var z=class{static get current(){return this.hasSubtleCrypto?window.crypto:this.tryLoadNodeWebCrypto()}static get hasSubtleCrypto(){return typeof window<"u"&&typeof window.crypto<"u"&&typeof window.crypto.subtle<"u"}static tryLoadNodeWebCrypto(){try{let{webcrypto:e}=ne("crypto");return e}catch(e){throw e}}};var u=class i{static refreshCachedAccessToken(e,t){return a(this,null,function*(){let s=yield i.refreshToken(e,t.refresh_token);return i.toCachable(s)})}static toCachable(e){return e.expires&&e.expires===-1?e:S(h({},e),{expires:this.calculateExpiry(e)})}static calculateExpiry(e){return Date.now()+e.expires_in*1e3}static refreshToken(e,t){return a(this,null,function*(){let s=new URLSearchParams;s.append("client_id",e),s.append("grant_type","refresh_token"),s.append("refresh_token",t);let r=yield fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s}),o=yield r.text();if(!r.ok)throw new Error(`Failed to refresh token: ${r.statusText}, ${o}`);return JSON.parse(o)})}static generateCodeVerifier(e){let t="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++)t+=s.charAt(Math.floor(Math.random()*s.length));return t}static generateCodeChallenge(e){return a(this,null,function*(){let t=new TextEncoder().encode(e),s=yield z.current.subtle.digest("SHA-256",t),r=[...new Uint8Array(s)];return(typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(String.fromCharCode.apply(null,r))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")})}};var ee=(()=>{class i{clientId;clientSecret;scopes;static cacheKey="spotify-sdk:ClientCredentialsStrategy:token";configuration=null;get cache(){return this.configuration.cachingStrategy}constructor(t,s,r=[]){this.clientId=t,this.clientSecret=s,this.scopes=r}setConfiguration(t){this.configuration=t}getOrCreateAccessToken(){return a(this,null,function*(){return yield this.cache.getOrCreate(i.cacheKey,()=>a(this,null,function*(){let s=yield this.getTokenFromApi();return u.toCachable(s)}),s=>a(this,null,function*(){let r=yield this.getTokenFromApi();return u.toCachable(r)}))})}getAccessToken(){return a(this,null,function*(){return yield this.cache.get(i.cacheKey)})}removeAccessToken(){this.cache.remove(i.cacheKey)}getTokenFromApi(){return a(this,null,function*(){let t={grant_type:"client_credentials",scope:this.scopes.join(" ")},s=Object.keys(t).map(p=>p+"="+t[p]).join("&"),r=typeof Buffer<"u",o=`${this.clientId}:${this.clientSecret}`,n=r?Buffer.from(o).toString("base64"):btoa(o),l=yield fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${n}`},body:s});if(l.status!==200)throw new Error("Failed to get access token.");return yield l.json()})}}return i})();var ie=(()=>{class i{clientId;redirectUri;scopes;static cacheKey="spotify-sdk:ImplicitGrantStrategy:token";configuration=null;get cache(){return this.configuration.cachingStrategy}constructor(t,s,r){this.clientId=t,this.redirectUri=s,this.scopes=r}setConfiguration(t){this.configuration=t}getOrCreateAccessToken(){return a(this,null,function*(){return yield this.cache.getOrCreate(i.cacheKey,()=>a(this,null,function*(){let s=yield this.redirectOrVerifyToken();return u.toCachable(s)}),s=>a(this,null,function*(){return u.refreshCachedAccessToken(this.clientId,s)}))})}getAccessToken(){return a(this,null,function*(){return yield this.cache.get(i.cacheKey)})}removeAccessToken(){this.cache.remove(i.cacheKey)}redirectOrVerifyToken(){return a(this,null,function*(){let t=new URLSearchParams(window.location.hash.substring(1)),s=t.get("access_token");if(s)return Promise.resolve({access_token:s,token_type:t.get("token_type")??"",expires_in:parseInt(t.get("expires_in")??"0"),refresh_token:t.get("refresh_token")??"",expires:Number(t.get("expires"))||0});var o=(this.scopes??[]).join(" ");let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("response_type","token"),n.append("redirect_uri",this.redirectUri),n.append("scope",o);let l="https://accounts.spotify.com/authorize?"+n.toString();return this.configuration.redirectionStrategy.redirect(l),g})}}return i})();var D=(()=>{class i{clientId;redirectUri;scopes;static cacheKey="spotify-sdk:AuthorizationCodeWithPKCEStrategy:token";configuration=null;get cache(){return this.configuration.cachingStrategy}constructor(t,s,r){this.clientId=t,this.redirectUri=s,this.scopes=r}setConfiguration(t){this.configuration=t}getOrCreateAccessToken(){return a(this,null,function*(){return yield this.cache.getOrCreate(i.cacheKey,()=>a(this,null,function*(){let s=yield this.redirectOrVerifyToken();return u.toCachable(s)}),s=>a(this,null,function*(){return u.refreshCachedAccessToken(this.clientId,s)}))})}getAccessToken(){return a(this,null,function*(){return yield this.cache.get(i.cacheKey)})}removeAccessToken(){this.cache.remove(i.cacheKey)}redirectOrVerifyToken(){return a(this,null,function*(){let s=new URLSearchParams(window.location.search).get("code");if(s){let r=yield this.verifyAndExchangeCode(s);return this.removeCodeFromUrl(),r}return this.redirectToSpotify(),g})}redirectToSpotify(){return a(this,null,function*(){let t=u.generateCodeVerifier(128),s=yield u.generateCodeChallenge(t),r={verifier:t,expiresOnAccess:!0};this.cache.setCacheItem("spotify-sdk:verifier",r);let o=yield this.generateRedirectUrlForUser(this.scopes,s);yield this.configuration.redirectionStrategy.redirect(o)})}verifyAndExchangeCode(t){return a(this,null,function*(){let r=(yield this.cache.get("spotify-sdk:verifier"))?.verifier;if(!r)throw new Error("No verifier found in cache - can't validate query string callback parameters.");return yield this.configuration.redirectionStrategy.onReturnFromRedirect(),yield this.exchangeCodeForToken(t,r)})}removeCodeFromUrl(){let t=new URL(window.location.href);t.searchParams.delete("code");let s=t.search?t.href:t.href.replace("?","");window.history.replaceState({},document.title,s)}generateRedirectUrlForUser(t,s){return a(this,null,function*(){let r=t.join(" "),o=new URLSearchParams;return o.append("client_id",this.clientId),o.append("response_type","code"),o.append("redirect_uri",this.redirectUri),o.append("scope",r),o.append("code_challenge_method","S256"),o.append("code_challenge",s),`https://accounts.spotify.com/authorize?${o.toString()}`})}exchangeCodeForToken(t,s){return a(this,null,function*(){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("grant_type","authorization_code"),r.append("code",t),r.append("redirect_uri",this.redirectUri),r.append("code_verifier",s);let o=yield fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r}),n=yield o.text();if(!o.ok)throw new Error(`Failed to exchange code for token: ${o.statusText}, ${n}`);return JSON.parse(n)})}}return i})();var w=class{deserialize(e){return a(this,null,function*(){let t=yield e.text();return t.length>0?JSON.parse(t):null})}};var k=class{validateResponse(e){return a(this,null,function*(){switch(e.status){case 401:throw new Error("Bad or expired token. This can happen if the user revoked a token or the access token has expired. You should re-authenticate the user.");case 403:let t=yield e.text();throw new Error(`Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...). Unfortunately, re-authenticating the user won't help here. Body: ${t}`);case 429:throw new Error("The app has exceeded its rate limits.");default:if(!e.status.toString().startsWith("20")){let s=yield e.text();throw new Error(`Unrecognised response code: ${e.status} - ${e.statusText}. Body: ${s}`)}}})}};var R=class{handleErrors(e){return a(this,null,function*(){return!1})}};var b=class{redirect(e){return a(this,null,function*(){document.location=e.toString()})}onReturnFromRedirect(){return a(this,null,function*(){})}};var d=class{storage;updateFunctions;autoRenewInterval;autoRenewWindow;constructor(e,t=new Map,s=0,r=2*60*1e3){this.storage=e,this.updateFunctions=t,this.autoRenewInterval=s,this.autoRenewWindow=r,this.autoRenewInterval>0&&setInterval(()=>this.autoRenewRenewableItems(),this.autoRenewInterval)}getOrCreate(e,t,s){return a(this,null,function*(){s&&this.updateFunctions.set(e,s);let r=yield this.get(e);if(r)return r;let o=yield t();if(!o)throw new Error("Could not create cache item");return m(o)||this.setCacheItem(e,o),o})}get(e){return a(this,null,function*(){let t=this.storage.get(e),s=t?JSON.parse(t):null;if(this.itemDueToExpire(s)&&this.updateFunctions.has(e)){let r=this.updateFunctions.get(e);yield this.tryUpdateItem(e,s,r),t=this.storage.get(e),s=t?JSON.parse(t):null}return s?s.expires&&(s.expires===-1||s.expires<=Date.now())?(this.remove(e),null):(s.expiresOnAccess&&s.expiresOnAccess===!0&&this.remove(e),s):null})}set(e,t,s){let r=Date.now()+s,o=S(h({},t),{expires:r});this.setCacheItem(e,o)}setCacheItem(e,t){let s=JSON.stringify(t);this.storage.set(e,s)}remove(e){this.storage.remove(e)}itemDueToExpire(e){return!e||!e.expires?!1:e.expires-Date.now()<this.autoRenewWindow}autoRenewRenewableItems(){return a(this,null,function*(){this.updateFunctions.forEach((e,t)=>a(this,null,function*(){let s=yield this.get(t);s&&e&&this.itemDueToExpire(s)&&(yield this.tryUpdateItem(t,s,e))}))})}tryUpdateItem(e,t,s){return a(this,null,function*(){try{let r=yield s(t);r&&this.setCacheItem(e,r)}catch(r){console.error(r)}})}};var x=class extends d{constructor(){super(new te)}};var te=class{get(e){return localStorage.getItem(e)}set(e,t){localStorage.setItem(e,t)}remove(e){localStorage.removeItem(e)}};var T=class extends d{constructor(){super(new se)}};var se=class{cache=new Map;get(e){return this.cache.get(e)??null}set(e,t){this.cache.set(e,t)}remove(e){this.cache.delete(e)}};var H=class{clientId;accessToken;refreshTokenAction;constructor(e,t,s){this.clientId=e,this.accessToken=t,this.refreshTokenAction=s||u.refreshCachedAccessToken,this.accessToken.expires||(this.accessToken.expires=u.calculateExpiry(this.accessToken))}setConfiguration(e){}getOrCreateAccessToken(){return a(this,null,function*(){if(this.accessToken.expires&&this.accessToken.expires<=Date.now()){let e=yield this.refreshTokenAction(this.clientId,this.accessToken);this.accessToken=e}return this.accessToken})}getAccessToken(){return a(this,null,function*(){return this.accessToken})}removeAccessToken(){this.accessToken={access_token:"",token_type:"",expires_in:0,refresh_token:"",expires:0}}};var re=(()=>{class i{sdkConfig;static rootUrl="https://api.spotify.com/v1/";authenticationStrategy;albums;artists;audiobooks;browse;chapters;episodes;recommendations;markets;player;playlists;shows;tracks;users;search;currentUser;constructor(t,s){this.sdkConfig=this.initializeSdk(s),this.albums=new C(this),this.artists=new A(this),this.audiobooks=new F(this),this.browse=new v(this),this.chapters=new P(this),this.episodes=new E(this),this.recommendations=new I(this),this.markets=new U(this),this.player=new B(this),this.playlists=new L(this),this.shows=new O(this),this.tracks=new _(this),this.users=new M(this),this.currentUser=new N(this);let r=new j(this);this.search=r.execute.bind(r),this.authenticationStrategy=t,this.authenticationStrategy.setConfiguration(this.sdkConfig)}makeRequest(t,s,r=void 0,o=void 0){return a(this,null,function*(){try{let n=yield this.authenticationStrategy.getOrCreateAccessToken();if(m(n))return console.warn("No access token found, authenticating now."),null;let l=n?.access_token,f=i.rootUrl+s,p={method:t,headers:{Authorization:`Bearer ${l}`,"Content-Type":o??"application/json"},body:r?typeof r=="string"?r:JSON.stringify(r):void 0};this.sdkConfig.beforeRequest(f,p);let y=yield this.sdkConfig.fetch(f,p);return this.sdkConfig.afterRequest(f,p,y),y.status===204?null:(yield this.sdkConfig.responseValidator.validateResponse(y),this.sdkConfig.deserializer.deserialize(y))}catch(n){if(!(yield this.sdkConfig.errorHandler.handleErrors(n)))throw n;return null}})}initializeSdk(t){let s=typeof window<"u",r={fetch:(o,n)=>fetch(o,n),beforeRequest:(o,n)=>{},afterRequest:(o,n,l)=>{},deserializer:new w,responseValidator:new k,errorHandler:new R,redirectionStrategy:new b,cachingStrategy:s?new x:new T};return h(h({},r),t)}switchAuthenticationStrategy(t){this.authenticationStrategy=t,this.authenticationStrategy.setConfiguration(this.sdkConfig),this.authenticationStrategy.getOrCreateAccessToken()}authenticate(){return a(this,null,function*(){let t=yield this.authenticationStrategy.getOrCreateAccessToken();return{authenticated:t.expires>Date.now()&&!m(t),accessToken:t}})}getAccessToken(){return a(this,null,function*(){return this.authenticationStrategy.getAccessToken()})}logOut(){this.authenticationStrategy.removeAccessToken()}static withUserAuthorization(t,s,r=[],o){let n=new D(t,s,r);return new i(n,o)}static withClientCredentials(t,s,r=[],o){let n=new ee(t,s,r);return new i(n,o)}static withImplicitGrant(t,s,r=[],o){let n=new ie(t,s,r);return new i(n,o)}static withAccessToken(t,s,r){let o=new H(t,s);return new i(o,r)}static performUserAuthorization(t,s,r,o,n){return a(this,null,function*(){let l=new D(t,s,r),p=yield new i(l,n).authenticationStrategy.getOrCreateAccessToken();return m(p)||(typeof o=="string"?(console.log("Posting access token to postback URL."),yield fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})):yield o(p)),{authenticated:p.expires>Date.now()&&!m(p),accessToken:p}})}}return i})();var Us=(()=>{let e=class e{constructor(){this.clientId="cffd066e684f4b0f826e746e4d693f5a",this.redirectUri=`${window.location.origin}/callback`,this.scope=["playlist-modify-private","playlist-modify-public","playlist-read-collaborative","playlist-read-private","streaming","ugc-image-upload","user-follow-modify","user-follow-read","user-library-modify","user-library-read","user-modify-playback-state","user-read-currently-playing","user-read-email","user-read-playback-position","user-read-playback-state","user-read-private","user-read-recently-played","user-top-read"],this.SA=re.withUserAuthorization(this.clientId,this.redirectUri,this.scope)}login(){return a(this,null,function*(){yield this.SA.currentUser.profile()})}getUser(){return a(this,null,function*(){return this.SA||this.login(),this.user?this.user:this.setUser()})}setUser(){return a(this,null,function*(){let s=yield this.SA.currentUser.profile();if(!s)throw new Error("unable to fetch user.");return this.user=s,s})}fetchMyPlaylists(s=0){return a(this,null,function*(){return yield this.SA.currentUser.playlists.playlists(50,s)})}deletePlaylist(s){return a(this,null,function*(){yield this.SA.currentUser.playlists.unfollow(s)})}getPlaylist(s){return a(this,null,function*(){return yield this.SA.playlists.getPlaylist(s)})}getAllPlaylistItems(s,r){return a(this,null,function*(){let o=[],n=Math.ceil(r/50),l=[];for(let p=0;p<n;p++)l.push(this.SA.playlists.getPlaylistItems(s,void 0,void 0,50,p*50));return(yield Promise.all(l)).forEach(p=>{o.push(...p.items)}),o})}getUserLikedItems(){return a(this,null,function*(){let s=[],r=0;do{let o=yield this.SA.currentUser.tracks.savedTracks(50,s.length,void 0);r=o.total,s.push(...o.items)}while(s.length<r);return s})}removeSongFromPlaylist(s,r){return a(this,null,function*(){if(r.length===0)return!1;let o=r.map(V=>({uri:V})),n=q(o,100);try{for(var l=$(n),f,p,y;f=!(p=yield l.next()).done;f=!1){let V=p.value;yield this.SA.playlists.removeItemsFromPlaylist(s,{tracks:V})}}catch{y=[p]}finally{try{f&&(p=l.return)&&(yield p.call(l))}finally{if(y)throw y[0]}}return!0})}getArtists(s){return a(this,null,function*(){let r=[],o=q(s,50),n=[];try{for(var f=$(o),p,y,V;p=!(y=yield f.next()).done;p=!1){let J=y.value;n.push(this.SA.artists.get(J))}}catch{V=[y]}finally{try{p&&(y=f.return)&&(yield y.call(f))}finally{if(V)throw V[0]}}return(yield Promise.all(n)).forEach(J=>{r.push(...J)}),console.log("totalArr",r),r})}createPlaylist(s){return a(this,null,function*(){let r=yield this.getUser();if(!r)throw new Error("Unable to find the UserId");return yield this.SA.playlists.createPlaylist(r.id,{name:s,collaborative:!1,description:"Created By spotools",public:!0})})}addTracksToPlaylist(s,r){return a(this,null,function*(){let o=q(r,100);try{for(var n=$(o),l,f,p;l=!(f=yield n.next()).done;l=!1){let y=f.value;yield this.SA.playlists.addItemsToPlaylist(s,y)}}catch{p=[f]}finally{try{l&&(f=n.return)&&(yield f.call(n))}finally{if(p)throw p[0]}}return!0})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ae({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{pe as a,ce as b,ue as c,he as d,Us as e};
