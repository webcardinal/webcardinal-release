const e=(e,t)=>new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e),t=(t,r)=>e(t,r)?t.substr(r.length):t,r=e=>"/"===e.charAt(e.length-1)?e.slice(0,-1):e,n=e=>"/"===e.charAt(0)?e:"/"+e,o=e=>"/"===e.charAt(0)?e.substr(1):e,a=e=>{const{pathname:t,search:r,hash:n}=e;let o=t||"/";return r&&"?"!==r&&(o+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(o+="#"===n.charAt(0)?n:"#"+n),o},s=e=>"/"===e.charAt(0),c=e=>Math.random().toString(36).substr(2,e),i=(e,t)=>{for(let r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()},l=(e,t)=>{if(e===t)return!0;if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(((e,r)=>l(e,t[r])));const r=typeof e;if(r!==typeof t)return!1;if("object"===r){const r=e.valueOf(),n=t.valueOf();if(r!==e||n!==t)return l(r,n);const o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((r=>l(e[r],t[r])))}return!1},u=(e,t)=>e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&l(e.state,t.state),f=(e,t,r,n)=>{let o;"string"==typeof e?(o=(e=>{let t=e||"/",r="",n="";const o=t.indexOf("#");-1!==o&&(n=t.substr(o),t=t.substr(0,o));const a=t.indexOf("?");return-1!==a&&(r=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===r?"":r,hash:"#"===n?"":n,query:{},key:""}})(e),void 0!==t&&(o.state=t)):(o=Object.assign({pathname:""},e),o.search&&"?"!==o.search.charAt(0)&&(o.search="?"+o.search),o.hash&&"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash),void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}var a;return o.key=r,n?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=((e,t="")=>{let r,n=t&&t.split("/")||[],o=0;const a=e&&e.split("/")||[],c=e&&s(e),l=t&&s(t),u=c||l;if(e&&s(e)?n=a:a.length&&(n.pop(),n=n.concat(a)),!n.length)return"/";if(n.length){const e=n[n.length-1];r="."===e||".."===e||""===e}else r=!1;for(let e=n.length;e>=0;e--){const t=n[e];"."===t?i(n,e):".."===t?(i(n,e),o++):o&&(i(n,e),o--)}if(!u)for(;o--;o)n.unshift("..");!u||""===n[0]||n[0]&&s(n[0])||n.unshift("");let f=n.join("/");return r&&"/"!==f.substr(-1)&&(f+="/"),f})(o.pathname,n.pathname)):o.pathname=n.pathname:o.pathname||(o.pathname="/"),o.query=(a=o.search||"")?(/^[?#]/.test(a)?a.slice(1):a).split("&").reduce(((e,t)=>{let[r,n]=t.split("=");return e[r]=n?decodeURIComponent(n.replace(/\+/g," ")):"",e}),{}):{},o};export{n as a,c as b,f as c,t as d,a as e,o as f,e as h,u as l,r as s,l as v}