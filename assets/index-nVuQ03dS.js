(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function r5(t,e={}){const{fees:r=t.fees,formatters:n=t.formatters,serializers:i=t.serializers}=e;return{...t,fees:r,formatters:n,serializers:i}}const a7="1.19.9",c7=t=>t,Pf=t=>t,l7=()=>`viem@${a7}`;class be extends Error{constructor(e,r={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:l7()});const n=r.cause instanceof be?r.cause.details:(o=r.cause)!=null&&o.message?r.cause.message:r.details,i=r.cause instanceof be&&r.cause.docsPath||r.docsPath;this.message=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${r.docsSlug?`#${r.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join(`
`),r.cause&&(this.cause=r.cause),this.details=n,this.docsPath=i,this.metaMessages=r.metaMessages,this.shortMessage=e}walk(e){return n5(this,e)}}function n5(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?n5(t.cause,e):e?null:t}class u7 extends be{constructor({max:e,min:r,signed:n,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class f7 extends be{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class d7 extends be{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function di(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function lr(t){return di(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function os(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,n=0;for(let i=0;i<r.length-1&&r[e==="left"?i:r.length-i-1].toString()==="0";i++)n++;return r=e==="left"?r.slice(n):r.slice(0,r.length-n),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}class i5 extends be{constructor({offset:e,position:r,size:n}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o5 extends be{constructor({size:e,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Ya(t,{dir:e,size:r=32}={}){return typeof t=="string"?po(t,{dir:e,size:r}):h7(t,{dir:e,size:r})}function po(t,{dir:e,size:r=32}={}){if(r===null)return t;const n=t.replace("0x","");if(n.length>r*2)throw new o5({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function h7(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new o5({size:t.length,targetSize:r,type:"bytes"});const n=new Uint8Array(r);for(let i=0;i<r;i++){const o=e==="right";n[o?i:r-i-1]=t[o?i:t.length-i-1]}return n}const p7=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Ki(t,e={}){return typeof t=="number"||typeof t=="bigint"?qe(t,e):typeof t=="string"?lp(t,e):typeof t=="boolean"?s5(t,e):ul(t,e)}function s5(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(No(r,{size:e.size}),Ya(r,{size:e.size})):r}function ul(t,e={}){let r="";for(let i=0;i<t.length;i++)r+=p7[t[i]];const n=`0x${r}`;return typeof e.size=="number"?(No(n,{size:e.size}),Ya(n,{dir:"right",size:e.size})):n}function qe(t,e={}){const{signed:r,size:n}=e,i=BigInt(t);let o;n?r?o=(1n<<BigInt(n)*8n-1n)-1n:o=2n**(BigInt(n)*8n)-1n:typeof t=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&r?-o-1n:0;if(o&&i>o||i<s){const c=typeof t=="bigint"?"n":"";throw new u7({max:o?`${o}${c}`:void 0,min:`${s}${c}`,signed:r,size:n,value:`${t}${c}`})}const a=`0x${(r&&i<0?(1n<<BigInt(n*8))+BigInt(i):i).toString(16)}`;return n?Ya(a,{size:n}):a}const g7=new TextEncoder;function lp(t,e={}){const r=g7.encode(t);return ul(r,e)}const m7=new TextEncoder;function Eo(t,e={}){return typeof t=="number"||typeof t=="bigint"?b7(t,e):typeof t=="boolean"?w7(t,e):di(t)?up(t,e):Ri(t,e)}function w7(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(No(r,{size:e.size}),Ya(r,{size:e.size})):r}const Ti={zero:48,nine:57,A:65,F:70,a:97,f:102};function Qg(t){if(t>=Ti.zero&&t<=Ti.nine)return t-Ti.zero;if(t>=Ti.A&&t<=Ti.F)return t-(Ti.A-10);if(t>=Ti.a&&t<=Ti.f)return t-(Ti.a-10)}function up(t,e={}){let r=t;e.size&&(No(r,{size:e.size}),r=Ya(r,{dir:"right",size:e.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);const i=n.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const c=Qg(n.charCodeAt(a++)),l=Qg(n.charCodeAt(a++));if(c===void 0||l===void 0)throw new be(`Invalid byte sequence ("${n[a-2]}${n[a-1]}" in "${n}").`);o[s]=c*16+l}return o}function b7(t,e){const r=qe(t,e);return up(r)}function Ri(t,e={}){const r=m7.encode(t);return typeof e.size=="number"?(No(r,{size:e.size}),Ya(r,{dir:"right",size:e.size})):r}function No(t,{size:e}){if(lr(t)>e)throw new d7({givenSize:lr(t),maxSize:e})}function kf(t,e={}){const{signed:r}=e;e.size&&No(t,{size:e.size});const n=BigInt(t);if(!r)return n;const i=(t.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return n<=o?n:n-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function y7(t,e={}){let r=t;if(e.size&&(No(r,{size:e.size}),r=os(r)),os(r)==="0x00")return!1;if(os(r)==="0x01")return!0;throw new f7(r)}function Tr(t,e={}){return Number(kf(t,e))}function fp(t,e={}){let r=up(t);return e.size&&(No(r,{size:e.size}),r=os(r,{dir:"right"})),new TextDecoder().decode(r)}const a5={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function c5(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Tr(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Tr(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?a5[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function l5(t){var r;const e=(r=t.transactions)==null?void 0:r.map(n=>typeof n=="string"?n:c5(n));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function Rn(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}const v7={"0x0":"reverted","0x1":"success"};function E7(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>Rn(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Tr(t.transactionIndex):null,status:t.status?v7[t.status]:null,type:t.type?a5[t.type]||t.type:null}}const x7={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Tf(t){return{...t,gas:typeof t.gas<"u"?qe(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?qe(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?qe(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?qe(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?qe(t.nonce):void 0,type:typeof t.type<"u"?x7[t.type]:void 0,value:typeof t.value<"u"?qe(t.value):void 0}}class fl extends be{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class qh extends be{constructor({blockNumber:e,chain:r,contract:n}){super(`Chain "${r.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let _7=class extends be{constructor({chain:e,currentChainId:r}){super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${r}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class C7 extends be{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class u5 extends be{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const f5={gwei:9,wei:18},A7={ether:-9,wei:9},S7={ether:-18,gwei:-9};function $0(t,e){let r=t.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(e,"0");let[i,o]=[r.slice(0,r.length-e),r.slice(r.length-e)];return o=o.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${o?`.${o}`:""}`}function Vr(t,e="wei"){return $0(t,A7[e])}class sa extends be{constructor({cause:e,message:r}={}){var i;const n=(i=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(sa,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(sa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class N0 extends be{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${Vr(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(N0,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Gh extends be{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${Vr(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Gh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Vh extends be{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Vh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Kh extends be{constructor({cause:e,nonce:r}={}){super([`Nonce provided for the transaction ${r?`(${r}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Kh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Zh extends be{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Zh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Jh extends be{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Jh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Yh extends be{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Yh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Xh extends be{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Xh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Qh extends be{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Qh,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class M0 extends be{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${Vr(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${Vr(n)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(M0,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class If extends be{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const P7=/^0x[a-fA-F0-9]{40}$/;function Aa(t){return P7.test(t)}function Bi(t){return typeof t[0]=="string"?dp(t):k7(t)}function k7(t){let e=0;for(const i of t)e+=i.length;const r=new Uint8Array(e);let n=0;for(const i of t)r.set(i,n),n+=i.length;return r}function dp(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function T7(t,e){const r=t.exec(e);return r==null?void 0:r.groups}const e3=/^tuple(?<array>(\[(\d*)\])*)$/;function e1(t){let e=t.type;if(e3.test(t.type)&&"components"in t){e="(";const r=t.components.length;for(let i=0;i<r;i++){const o=t.components[i];e+=e1(o),i<r-1&&(e+=", ")}const n=T7(e3,t.type);return e+=`)${(n==null?void 0:n.array)??""}`,e1({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function Ac(t){let e="";const r=t.length;for(let n=0;n<r;n++){const i=t[n];e+=e1(i),n!==r-1&&(e+=", ")}return e}function I7(t){return t.type==="function"?`function ${t.name}(${Ac(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${Ac(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${Ac(t.inputs)})`:t.type==="error"?`error ${t.name}(${Ac(t.inputs)})`:t.type==="constructor"?`constructor(${Ac(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function Be(t,e,r){return n=>{var i;return((i=t[e.name||r])==null?void 0:i.call(t,n))??e(t,n)}}function Cs(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new z7(t.type);return`${t.name}(${$f(t.inputs,{includeName:e})})`}function $f(t,{includeName:e=!1}={}){return t?t.map(r=>$7(r,{includeName:e})).join(e?", ":","):""}function $7(t,{includeName:e}){return t.type.startsWith("tuple")?`(${$f(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class N7 extends be{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class t3 extends be{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class hp extends be{constructor({data:e,params:r,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${$f(r,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=r,this.size=n}}class Nf extends be{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class M7 extends be{constructor({expectedLength:e,givenLength:r,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class O7 extends be{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${lr(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class D7 extends be{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class d5 extends be{constructor(e,{docsPath:r}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class R7 extends be{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class B7 extends be{constructor(e,{docsPath:r}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class r3 extends be{constructor(e,{docsPath:r}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class O0 extends be{constructor(e,{docsPath:r}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class L7 extends be{constructor(e,{docsPath:r}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class U7 extends be{constructor({expectedSize:e,givenSize:r}){super(`Expected bytes${e}, got bytes${r}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class fs extends be{constructor({abiItem:e,data:r,params:n,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${$f(n,{includeName:!0})})`,`Data:   ${r} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=r,this.params=n,this.size=i}}class Xa extends be{constructor({abiItem:e,param:r}){super([`Expected a topic for indexed event parameter${r.name?` "${r.name}"`:""} on event "${Cs(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class F7 extends be{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class j7 extends be{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class W7 extends be{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class z7 extends be{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class H7 extends be{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function q7(t){let e=!0,r="",n=0,i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&n++,a===")"&&n--,!!e){if(n===0){if(a===" "&&["event","function",""].includes(i))i="";else if(i+=a,a===")"){o=!0;break}continue}if(a===" "){t[s-1]!==","&&r!==","&&r!==",("&&(r="",e=!1);continue}i+=a,r+=a}}if(!o)throw new be("Unable to normalize signature.");return i}const h5=t=>{const e=typeof t=="string"?t:I7(t);return q7(e)},G7=t=>h5(t);function n3(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function p5(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function i3(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function V7(t,e){p5(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const qu=BigInt(2**32-1),o3=BigInt(32);function K7(t,e=!1){return e?{h:Number(t&qu),l:Number(t>>o3&qu)}:{h:Number(t>>o3&qu)|0,l:Number(t&qu)|0}}function Z7(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:s}=K7(t[i],e);[r[i],n[i]]=[o,s]}return[r,n]}const J7=(t,e,r)=>t<<r|e>>>32-r,Y7=(t,e,r)=>e<<r|t>>>32-r,X7=(t,e,r)=>e<<r-32|t>>>64-r,Q7=(t,e,r)=>t<<r-32|e>>>64-r;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const e9=t=>t instanceof Uint8Array,t9=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),r9=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!r9)throw new Error("Non little-endian hardware is not supported");function n9(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function g5(t){if(typeof t=="string"&&(t=n9(t)),!e9(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class i9{clone(){return this._cloneInto()}}function o9(t){const e=n=>t().update(g5(n)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}const[m5,w5,b5]=[[],[],[]],s9=BigInt(0),Sc=BigInt(1),a9=BigInt(2),c9=BigInt(7),l9=BigInt(256),u9=BigInt(113);for(let t=0,e=Sc,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],m5.push(2*(5*n+r)),w5.push((t+1)*(t+2)/2%64);let i=s9;for(let o=0;o<7;o++)e=(e<<Sc^(e>>c9)*u9)%l9,e&a9&&(i^=Sc<<(Sc<<BigInt(o))-Sc);b5.push(i)}const[f9,d9]=Z7(b5,!0),s3=(t,e,r)=>r>32?X7(t,e,r):J7(t,e,r),a3=(t,e,r)=>r>32?Q7(t,e,r):Y7(t,e,r);function h9(t,e=24){const r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let s=0;s<10;s++)r[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=r[c],u=r[c+1],f=s3(l,u,1)^r[a],p=a3(l,u,1)^r[a+1];for(let b=0;b<50;b+=10)t[s+b]^=f,t[s+b+1]^=p}let i=t[2],o=t[3];for(let s=0;s<24;s++){const a=w5[s],c=s3(i,o,a),l=a3(i,o,a),u=m5[s];i=t[u],o=t[u+1],t[u]=c,t[u+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=f9[n],t[1]^=d9[n]}r.fill(0)}class pp extends i9{constructor(e,r,n,i=!1,o=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=n,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n3(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=t9(this.state)}keccak(){h9(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){i3(this);const{blockLen:r,state:n}=this;e=g5(e);const i=e.length;for(let o=0;o<i;){const s=Math.min(r-this.pos,i-o);for(let a=0;a<s;a++)n[this.pos++]^=e[o++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:n,blockLen:i}=this;e[n]^=r,r&128&&n===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){i3(this,!1),p5(e),this.finish();const r=this.state,{blockLen:n}=this;for(let i=0,o=e.length;i<o;){this.posOut>=n&&this.keccak();const s=Math.min(n-this.posOut,o-i);e.set(r.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n3(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(V7(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:n,outputLen:i,rounds:o,enableXOF:s}=this;return e||(e=new pp(r,n,i,s,o)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=o,e.suffix=n,e.outputLen=i,e.enableXOF=s,e.destroyed=this.destroyed,e}}const p9=(t,e,r)=>o9(()=>new pp(e,t,r)),g9=p9(1,136,256/8);function Or(t,e){const r=e||"hex",n=g9(di(t,{strict:!1})?Eo(t):t);return r==="bytes"?n:Ki(n)}const m9=t=>Or(Eo(t)),gp=t=>m9(G7(t));function or(t,e,r,{strict:n}={}){return di(t,{strict:!1})?b9(t,e,r,{strict:n}):w9(t,e,r,{strict:n})}function y5(t,e){if(typeof e=="number"&&e>0&&e>lr(t)-1)throw new i5({offset:e,position:"start",size:lr(t)})}function v5(t,e,r){if(typeof e=="number"&&typeof r=="number"&&lr(t)!==r-e)throw new i5({offset:r,position:"end",size:lr(t)})}function w9(t,e,r,{strict:n}={}){y5(t,e);const i=t.slice(e,r);return n&&v5(i,e,r),i}function b9(t,e,r,{strict:n}={}){y5(t,e);const i=`0x${t.replace("0x","").slice((e??0)*2,(r??t.length)*2)}`;return n&&v5(i,e,r),i}function uu(t,e){if(t.length!==e.length)throw new D7({expectedLength:t.length,givenLength:e.length});const r=y9({params:t,values:e}),n=wp(r);return n.length===0?"0x":n}function y9({params:t,values:e}){const r=[];for(let n=0;n<t.length;n++)r.push(mp({param:t[n],value:e[n]}));return r}function mp({param:t,value:e}){const r=Mf(t.type);if(r){const[n,i]=r;return E9(e,{length:n,param:{...t,type:i}})}if(t.type==="tuple")return S9(e,{param:t});if(t.type==="address")return v9(e);if(t.type==="bool")return _9(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const n=t.type.startsWith("int");return C9(e,{signed:n})}if(t.type.startsWith("bytes"))return x9(e,{param:t});if(t.type==="string")return A9(e);throw new F7(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function wp(t){let e=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?e+=32:e+=lr(a)}const r=[],n=[];let i=0;for(let o=0;o<t.length;o++){const{dynamic:s,encoded:a}=t[o];s?(r.push(qe(e+i,{size:32})),n.push(a),i+=lr(a)):r.push(a)}return Bi([...r,...n])}function v9(t){if(!Aa(t))throw new fl({address:t});return{dynamic:!1,encoded:po(t.toLowerCase())}}function E9(t,{length:e,param:r}){const n=e===null;if(!Array.isArray(t))throw new W7(t);if(!n&&t.length!==e)throw new M7({expectedLength:e,givenLength:t.length,type:`${r.type}[${e}]`});let i=!1;const o=[];for(let s=0;s<t.length;s++){const a=mp({param:r,value:t[s]});a.dynamic&&(i=!0),o.push(a)}if(n||i){const s=wp(o);if(n){const a=qe(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?Bi([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Bi(o.map(({encoded:s})=>s))}}function x9(t,{param:e}){const[,r]=e.type.split("bytes"),n=lr(t);if(!r){let i=t;return n%32!==0&&(i=po(i,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:Bi([po(qe(n,{size:32})),i])}}if(n!==parseInt(r))throw new O7({expectedSize:parseInt(r),value:t});return{dynamic:!1,encoded:po(t,{dir:"right"})}}function _9(t){return{dynamic:!1,encoded:po(s5(t))}}function C9(t,{signed:e}){return{dynamic:!1,encoded:qe(t,{size:32,signed:e})}}function A9(t){const e=lp(t),r=Math.ceil(lr(e)/32),n=[];for(let i=0;i<r;i++)n.push(po(or(e,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Bi([po(qe(lr(e),{size:32})),...n])}}function S9(t,{param:e}){let r=!1;const n=[];for(let i=0;i<e.components.length;i++){const o=e.components[i],s=Array.isArray(t)?i:o.name,a=mp({param:o,value:t[s]});n.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?wp(n):Bi(n.map(({encoded:i})=>i))}}function Mf(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const P9=t=>Or(Eo(t)),bp=t=>or(P9(h5(t)),0,4);function fu({abi:t,args:e=[],name:r}){const n=di(r,{strict:!1}),i=t.filter(o=>n?o.type==="function"?bp(o)===r:o.type==="event"?gp(o)===r:!1:"name"in o&&o.name===r);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((a,c)=>{const l="inputs"in o&&o.inputs[c];return l?t1(a,l):!1}))return o}return i[0]}}function t1(t,e){const r=typeof t,n=e.type;switch(n){case"address":return Aa(t);case"bool":return r==="boolean";case"function":return r==="string";case"string":return r==="string";default:return n==="tuple"&&"components"in e?Object.values(e.components).every((i,o)=>t1(Object.values(t)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?r==="number"||r==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?r==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)?Array.isArray(t)&&t.every(i=>t1(i,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function du({abi:t,eventName:e,args:r}){var a;let n=t[0];if(e&&(n=fu({abi:t,args:r,name:e}),!n))throw new r3(e,{docsPath:"/docs/contract/encodeEventTopics"});if(n.type!=="event")throw new r3(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=Cs(n),o=gp(i);let s=[];if(r&&"inputs"in n){const c=(a=n.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),l=Array.isArray(r)?r:Object.values(r).length>0?(c==null?void 0:c.map(u=>r[u.name]))??[]:[];l.length>0&&(s=(c==null?void 0:c.map((u,f)=>Array.isArray(l[f])?l[f].map((p,b)=>c3({param:u,value:l[f][b]})):l[f]?c3({param:u,value:l[f]}):null))??[])}return[o,...s]}function c3({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return Or(Eo(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new H7(t.type);return uu([t],[e])}function Of(t,{method:e}){var n,i;const r={};return t.transport.type==="fallback"&&((i=(n=t.transport).onResponse)==null||i.call(n,({method:o,response:s,status:a,transport:c})=>{a==="success"&&e===o&&(r[s]=c.request)})),o=>r[o]||t.request}async function E5(t,{address:e,abi:r,args:n,eventName:i,fromBlock:o,strict:s,toBlock:a}){const c=Of(t,{method:"eth_newFilter"}),l=i?du({abi:r,args:n,eventName:i}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?qe(o):o,toBlock:typeof a=="bigint"?qe(a):a,topics:l}]});return{abi:r,args:n,eventName:i,id:u,request:c(u),strict:s,type:"event"}}function yn(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function Mo({abi:t,args:e,functionName:r}){let n=t[0];if(r&&(n=fu({abi:t,args:e,name:r}),!n))throw new O0(r,{docsPath:"/docs/contract/encodeFunctionData"});if(n.type!=="function")throw new O0(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=Cs(n),o=bp(i),s="inputs"in n&&n.inputs?uu(n.inputs,e??[]):void 0;return dp([o,s??"0x"])}const x5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},k9={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},T9={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function yp(t,e){const r=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),n=Or(Ri(r),"bytes"),i=(e?r.substring(`${e}0x`.length):r).split("");for(let o=0;o<40;o+=2)n[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(n[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Dn(t,e){if(!Aa(t))throw new fl({address:t});return yp(t,e)}function Df(t,e){if(e==="0x"&&t.length>0)throw new Nf;if(lr(e)&&lr(e)<32)throw new hp({data:e,params:t,size:lr(e)});return I9({data:e,params:t})}function I9({data:t,params:e}){const r=[];let n=0;for(let i=0;i<e.length;i++){if(n>=lr(t))throw new hp({data:t,params:e,size:lr(t)});const o=e[i],{consumed:s,value:a}=da({data:t,param:o,position:n});r.push(a),n+=s}return r}function da({data:t,param:e,position:r}){const n=Mf(e.type);if(n){const[o,s]=n;return N9(t,{length:o,param:{...e,type:s},position:r})}if(e.type==="tuple")return B9(t,{param:e,position:r});if(e.type==="string")return R9(t,{position:r});if(e.type.startsWith("bytes"))return O9(t,{param:e,position:r});const i=or(t,r,r+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return D9(i,{param:e});if(e.type==="address")return $9(i);if(e.type==="bool")return M9(i);throw new j7(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function $9(t){return{consumed:32,value:yp(or(t,-20))}}function N9(t,{param:e,length:r,position:n}){if(!r){const s=Tr(or(t,n,n+32,{strict:!0})),a=Tr(or(t,s,s+32,{strict:!0}));let c=0;const l=[];for(let u=0;u<a;++u){const f=da({data:or(t,s+32),param:e,position:c});c+=f.consumed,l.push(f.value)}return{value:l,consumed:32}}if(D0(e)){const s=Mf(e.type),a=!(s!=null&&s[0]);let c=0;const l=[];for(let u=0;u<r;++u){const f=Tr(or(t,n,n+32,{strict:!0})),p=da({data:or(t,f),param:e,position:a?c:u*32});c+=p.consumed,l.push(p.value)}return{value:l,consumed:32}}let i=0;const o=[];for(let s=0;s<r;++s){const a=da({data:t,param:e,position:n+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function M9(t){return{consumed:32,value:y7(t)}}function O9(t,{param:e,position:r}){const[n,i]=e.type.split("bytes");if(!i){const s=Tr(or(t,r,r+32,{strict:!0})),a=Tr(or(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:or(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:or(t,r,r+parseInt(i),{strict:!0})}}function D9(t,{param:e}){const r=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?kf(t,{signed:r}):Tr(t,{signed:r})}}function R9(t,{position:e}){const r=Tr(or(t,e,e+32,{strict:!0})),n=Tr(or(t,r,r+32,{strict:!0}));return n===0?{consumed:32,value:""}:{consumed:32,value:fp(os(or(t,r+32,r+32+n,{strict:!0})))}}function B9(t,{param:e,position:r}){const n=e.components.length===0||e.components.some(({name:s})=>!s),i=n?[]:{};let o=0;if(D0(e)){const s=Tr(or(t,r,r+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const c=e.components[a],l=da({data:or(t,s),param:c,position:o});o+=l.consumed,i[n?a:c==null?void 0:c.name]=l.value}return{consumed:32,value:i}}for(let s=0;s<e.components.length;++s){const a=e.components[s],c=da({data:t,param:a,position:r+o});o+=c.consumed,i[n?s:a==null?void 0:a.name]=c.value}return{consumed:o,value:i}}function D0(t){var n;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(n=t.components)==null?void 0:n.some(D0);const r=Mf(t.type);return!!(r&&D0({...t,type:r[1]}))}function L9({abi:t,data:e}){const r=or(e,0,4);if(r==="0x")throw new Nf;const i=[...t||[],k9,T9].find(o=>o.type==="error"&&r===bp(Cs(o)));if(!i)throw new d5(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Df(i.inputs,or(e,4)):void 0,errorName:i.name}}const Dr=(t,e,r)=>JSON.stringify(t,(n,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof e=="function"?e(n,o):o},r);function _5({abiItem:t,args:e,includeFunctionName:r=!0,includeName:n=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map((i,o)=>`${n&&i.name?`${i.name}: `:""}${typeof e[o]=="object"?Dr(e[o]):e[o]}`).join(", ")})`}function vp(t,e="wei"){return $0(t,f5[e])}function hu(t){const e=Object.entries(t).map(([n,i])=>i===void 0||i===!1?null:[n,i]).filter(Boolean),r=e.reduce((n,[i])=>Math.max(n,i.length),0);return e.map(([n,i])=>`  ${`${n}:`.padEnd(r+1)}  ${i}`).join(`
`)}class U9 extends be{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class F9 extends be{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",hu(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class j9 extends be{constructor(e,{account:r,docsPath:n,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p}){var v;const b=hu({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:r==null?void 0:r.address,to:f,value:typeof p<"u"&&`${vp(p)} ${((v=i==null?void 0:i.nativeCurrency)==null?void 0:v.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Vr(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Vr(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Vr(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class C5 extends be{constructor({blockHash:e,blockNumber:r,blockTag:n,hash:i,index:o}){let s="Transaction";n&&o!==void 0&&(s=`Transaction at block time "${n}" at index "${o}"`),e&&o!==void 0&&(s=`Transaction at block hash "${e}" at index "${o}"`),r&&o!==void 0&&(s=`Transaction at block number "${r}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class A5 extends be{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class W9 extends be{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class S5 extends be{constructor(e,{account:r,docsPath:n,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p}){var A;const b=r?yn(r):void 0,v=hu({from:b==null?void 0:b.address,to:f,value:typeof p<"u"&&`${vp(p)} ${((A=i==null?void 0:i.nativeCurrency)==null?void 0:A.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Vr(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Vr(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Vr(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",v].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Ep extends be{constructor(e,{abi:r,args:n,contractAddress:i,docsPath:o,functionName:s,sender:a}){const c=fu({abi:r,args:n,name:s}),l=c?_5({abiItem:c,args:n,includeFunctionName:!1,includeName:!1}):void 0,u=c?Cs(c,{includeName:!0}):void 0,f=hu({address:i&&c7(i),function:u,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:o,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=r,this.args=n,this.cause=e,this.contractAddress=i,this.functionName=s,this.sender=a}}class r1 extends be{constructor({abi:e,data:r,functionName:n,message:i}){let o,s,a,c;if(r&&r!=="0x")try{s=L9({abi:e,data:r});const{abiItem:u,errorName:f,args:p}=s;if(f==="Error")c=p[0];else if(f==="Panic"){const[b]=p;c=x5[b]}else{const b=u?Cs(u,{includeName:!0}):void 0,v=u&&p?_5({abiItem:u,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[b?`Error: ${b}`:"",v&&v!=="()"?`       ${[...Array((f==null?void 0:f.length)??0).keys()].map(()=>" ").join("")}${v}`:""]}}catch(u){o=u}else i&&(c=i);let l;o instanceof d5&&(l=o.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${n}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${n}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class z9 extends be{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class xp extends be{constructor({data:e,message:r}){super(r||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Kc extends be{constructor({body:e,details:r,headers:n,status:i,url:o}){super("HTTP request failed.",{details:r,metaMessages:[i&&`Status: ${i}`,`URL: ${Pf(o)}`,e&&`Request body: ${Dr(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=i,this.url=o}}class H9 extends be{constructor({body:e,details:r,url:n}){super("WebSocket request failed.",{details:r,metaMessages:[`URL: ${Pf(n)}`,`Request body: ${Dr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class _p extends be{constructor({body:e,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${Pf(n)}`,`Request body: ${Dr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code}}class n1 extends be{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Pf(r)}`,`Request body: ${Dr(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const q9=-1;class Yr extends be{constructor(e,{code:r,docsPath:n,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:n,metaMessages:i||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof _p?e.code:r??q9}}class Qa extends Yr{constructor(e,r){super(e,r),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class dl extends Yr{constructor(e){super(e,{code:dl.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(dl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class hl extends Yr{constructor(e){super(e,{code:hl.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(hl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class pl extends Yr{constructor(e){super(e,{code:pl.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(pl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class gl extends Yr{constructor(e){super(e,{code:gl.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(gl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Sa extends Yr{constructor(e){super(e,{code:Sa.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Sa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class ds extends Yr{constructor(e){super(e,{code:ds.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(ds,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class ml extends Yr{constructor(e){super(e,{code:ml.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(ml,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Pa extends Yr{constructor(e){super(e,{code:Pa.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Pa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class wl extends Yr{constructor(e){super(e,{code:wl.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(wl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class bl extends Yr{constructor(e){super(e,{code:bl.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(bl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class yl extends Yr{constructor(e){super(e,{code:yl.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(yl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class vl extends Yr{constructor(e){super(e,{code:vl.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(vl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Gr extends Qa{constructor(e){super(e,{code:Gr.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Gr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class El extends Qa{constructor(e){super(e,{code:El.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(El,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class xl extends Qa{constructor(e){super(e,{code:xl.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(xl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class _l extends Qa{constructor(e){super(e,{code:_l.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(_l,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Cl extends Qa{constructor(e){super(e,{code:Cl.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Cl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Li extends Qa{constructor(e){super(e,{code:Li.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Li,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class G9 extends Yr{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const V9=3;function Al(t,{abi:e,address:r,args:n,docsPath:i,functionName:o,sender:s}){const{code:a,data:c,message:l,shortMessage:u}=t instanceof xp?t:t instanceof be?t.walk(p=>"data"in p)||t.walk():{},f=t instanceof Nf?new z9({functionName:o}):[V9,Sa.code].includes(a)&&(c||l||u)?new r1({abi:e,data:typeof c=="object"?c.data:c,functionName:o,message:u??l}):t;return new Ep(f,{abi:e,args:n,contractAddress:r,docsPath:i,functionName:o,sender:s})}class ec extends be{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class K9 extends be{constructor(e,{account:r,docsPath:n,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p}){var v;const b=hu({from:r==null?void 0:r.address,to:f,value:typeof p<"u"&&`${vp(p)} ${((v=i==null?void 0:i.nativeCurrency)==null?void 0:v.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Vr(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Vr(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Vr(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function Cp(t,e){const r=(t.details||"").toLowerCase(),n=t.walk(i=>i.code===sa.code);return n instanceof be?new sa({cause:t,message:n.details}):sa.nodeMessage.test(r)?new sa({cause:t,message:t.details}):N0.nodeMessage.test(r)?new N0({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Gh.nodeMessage.test(r)?new Gh({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Vh.nodeMessage.test(r)?new Vh({cause:t,nonce:e==null?void 0:e.nonce}):Kh.nodeMessage.test(r)?new Kh({cause:t,nonce:e==null?void 0:e.nonce}):Zh.nodeMessage.test(r)?new Zh({cause:t,nonce:e==null?void 0:e.nonce}):Jh.nodeMessage.test(r)?new Jh({cause:t}):Yh.nodeMessage.test(r)?new Yh({cause:t,gas:e==null?void 0:e.gas}):Xh.nodeMessage.test(r)?new Xh({cause:t,gas:e==null?void 0:e.gas}):Qh.nodeMessage.test(r)?new Qh({cause:t}):M0.nodeMessage.test(r)?new M0({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new If({cause:t})}function Z9(t,{docsPath:e,...r}){const n=(()=>{const i=Cp(t,r);return i instanceof If?t:i})();return new K9(n,{docsPath:e,...r})}function Ap(t,{format:e}){if(!e)return{};const r={};function n(o){const s=Object.keys(o);for(const a of s)a in t&&(r[a]=t[a]),o[a]&&typeof o[a]=="object"&&!Array.isArray(o[a])&&n(o[a])}const i=e(t||{});return n(i),r}function pu(t){const{account:e,gasPrice:r,maxFeePerGas:n,maxPriorityFeePerGas:i,to:o}=t,s=e?yn(e):void 0;if(s&&!Aa(s.address))throw new fl({address:s.address});if(o&&!Aa(o))throw new fl({address:o});if(typeof r<"u"&&(typeof n<"u"||typeof i<"u"))throw new U9;if(n&&n>2n**256n-1n)throw new N0({maxFeePerGas:n});if(i&&n&&i>n)throw new M0({maxFeePerGas:n,maxPriorityFeePerGas:i})}class J9 extends be{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Sp extends be{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class Y9 extends be{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Vr(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class X9 extends be{constructor({blockHash:e,blockNumber:r}){let n="Block";e&&(n=`Block at hash "${e}"`),r&&(n=`Block at number "${r}"`),super(`${n} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function xo(t,{blockHash:e,blockNumber:r,blockTag:n,includeTransactions:i}={}){var u,f,p;const o=n??"latest",s=i??!1,a=r!==void 0?qe(r):void 0;let c=null;if(e?c=await t.request({method:"eth_getBlockByHash",params:[e,s]}):c=await t.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!c)throw new X9({blockHash:e,blockNumber:r});return(((p=(f=(u=t.chain)==null?void 0:u.formatters)==null?void 0:f.block)==null?void 0:p.format)||l5)(c)}async function Pp(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function Q9(t,e){return P5(t,e)}async function P5(t,e){var o,s,a;const{block:r,chain:n=t.chain,request:i}=e||{};if(typeof((o=n==null?void 0:n.fees)==null?void 0:o.defaultPriorityFee)=="function"){const c=r||await Be(t,xo,"getBlock")({});return n.fees.defaultPriorityFee({block:c,client:t,request:i})}else if(typeof((s=n==null?void 0:n.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=n==null?void 0:n.fees)==null?void 0:a.defaultPriorityFee;try{const c=await t.request({method:"eth_maxPriorityFeePerGas"});return kf(c)}catch{const[c,l]=await Promise.all([r?Promise.resolve(r):Be(t,xo,"getBlock")({}),Be(t,Pp,"getGasPrice")({})]);if(typeof c.baseFeePerGas!="bigint")throw new Sp;const u=l-c.baseFeePerGas;return u<0n?0n:u}}async function eE(t,e){return i1(t,e)}async function i1(t,e){var p,b;const{block:r,chain:n=t.chain,request:i,type:o="eip1559"}=e||{},s=await(async()=>{var v,A;return typeof((v=n==null?void 0:n.fees)==null?void 0:v.baseFeeMultiplier)=="function"?n.fees.baseFeeMultiplier({block:r,client:t,request:i}):((A=n==null?void 0:n.fees)==null?void 0:A.baseFeeMultiplier)??1.2})();if(s<1)throw new J9;const c=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),l=v=>v*BigInt(Math.ceil(s*c))/BigInt(c),u=r||await Be(t,xo,"getBlock")({});if(typeof((b=n==null?void 0:n.fees)==null?void 0:b.estimateFeesPerGas)=="function")return n.fees.estimateFeesPerGas({block:r,client:t,multiply:l,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Sp;const v=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await P5(t,{block:u,chain:n,request:i}),A=l(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??A+v,maxPriorityFeePerGas:v}}return{gasPrice:(i==null?void 0:i.gasPrice)??l(await Be(t,Pp,"getGasPrice")({}))}}async function k5(t,{address:e,blockTag:r="latest",blockNumber:n}){const i=await t.request({method:"eth_getTransactionCount",params:[e,n?qe(n):r]});return Tr(i)}function tE(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new F9({transaction:t})}async function Rf(t,e){const{account:r=t.account,chain:n,gas:i,nonce:o,type:s}=e;if(!r)throw new ec;const a=yn(r),c=await Be(t,xo,"getBlock")({blockTag:"latest"}),l={...e,from:a.address};if(typeof o>"u"&&(l.nonce=await Be(t,k5,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof s>"u")try{l.type=tE(l)}catch{l.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(l.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:f}=await i1(t,{block:c,chain:n,request:l});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<f)throw new Y9({maxPriorityFeePerGas:f});l.maxPriorityFeePerGas=f,l.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new Sp;const{gasPrice:u}=await i1(t,{block:c,chain:n,request:l,type:"legacy"});l.gasPrice=u}return typeof i>"u"&&(l.gas=await Be(t,kp,"estimateGas")({...l,account:{address:a.address,type:"json-rpc"}})),pu(l),l}async function kp(t,e){var i,o,s;const r=e.account??t.account;if(!r)throw new ec({docsPath:"/docs/actions/public/estimateGas"});const n=yn(r);try{const{accessList:a,blockNumber:c,blockTag:l,data:u,gas:f,gasPrice:p,maxFeePerGas:b,maxPriorityFeePerGas:v,nonce:A,to:_,value:N,...P}=n.type==="local"?await Rf(t,e):e,D=(c?qe(c):void 0)||l;pu(e);const R=(s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format,w=(R||Tf)({...Ap(P,{format:R}),from:n.address,accessList:a,data:u,gas:f,gasPrice:p,maxFeePerGas:b,maxPriorityFeePerGas:v,nonce:A,to:_,value:N}),H=await t.request({method:"eth_estimateGas",params:D?[w,D]:[w]});return BigInt(H)}catch(a){throw Z9(a,{...e,account:n,chain:t.chain})}}async function rE(t,{abi:e,address:r,args:n,functionName:i,...o}){const s=Mo({abi:e,args:n,functionName:i});try{return await Be(t,kp,"estimateGas")({data:s,to:r,...o})}catch(a){const c=o.account?yn(o.account):void 0;throw Al(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:c==null?void 0:c.address})}}const l3="/docs/contract/decodeEventLog";function gu({abi:t,data:e,strict:r,topics:n}){const i=r??!0,[o,...s]=n;if(!o)throw new R7({docsPath:l3});const a=t.find(v=>v.type==="event"&&o===gp(Cs(v)));if(!(a&&"name"in a)||a.type!=="event")throw new B7(o,{docsPath:l3});const{name:c,inputs:l}=a,u=l==null?void 0:l.some(v=>!("name"in v&&v.name));let f=u?[]:{};const p=l.filter(v=>"indexed"in v&&v.indexed);for(let v=0;v<p.length;v++){const A=p[v],_=s[v];if(!_)throw new Xa({abiItem:a,param:A});f[A.name||v]=nE({param:A,value:_})}const b=l.filter(v=>!("indexed"in v&&v.indexed));if(b.length>0){if(e&&e!=="0x")try{const v=Df(b,e);if(v)if(u)f=[...f,...v];else for(let A=0;A<b.length;A++)f[b[A].name]=v[A]}catch(v){if(i)throw v instanceof hp?new fs({abiItem:a,data:v.data,params:v.params,size:v.size}):v}else if(i)throw new fs({abiItem:a,data:"0x",params:b,size:0})}return{eventName:c,args:Object.values(f).length>0?f:void 0}}function nE({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(Df([t],e)||[])[0]}async function Tp(t,{address:e,blockHash:r,fromBlock:n,toBlock:i,event:o,events:s,args:a,strict:c}={}){const l=c??!1,u=s??(o?[o]:void 0);let f=[];u&&(f=[u.flatMap(b=>du({abi:[b],eventName:b.name,args:a}))],o&&(f=f[0]));let p;return r?p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:r}]}):p=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof n=="bigint"?qe(n):n,toBlock:typeof i=="bigint"?qe(i):i}]}),p.map(b=>{var v;try{const{eventName:A,args:_}=u?gu({abi:u,data:b.data,topics:b.topics,strict:l}):{eventName:void 0,args:void 0};return Rn(b,{args:_,eventName:A})}catch(A){let _,N;if(A instanceof fs||A instanceof Xa){if(l)return;_=A.abiItem.name,N=(v=A.abiItem.inputs)==null?void 0:v.some(P=>!("name"in P&&P.name))}return Rn(b,{args:N?[]:{},eventName:_})}}).filter(Boolean)}async function T5(t,{abi:e,address:r,args:n,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:c}){const l=o?fu({abi:e,name:o}):void 0,u=l?void 0:e.filter(f=>f.type==="event");return Be(t,Tp,"getLogs")({address:r,args:n,blockHash:i,event:l,events:u,fromBlock:s,toBlock:a,strict:c})}const Wd="/docs/contract/decodeFunctionResult";function tc({abi:t,args:e,functionName:r,data:n}){let i=t[0];if(r&&(i=fu({abi:t,args:e,name:r}),!i))throw new O0(r,{docsPath:Wd});if(i.type!=="function")throw new O0(void 0,{docsPath:Wd});if(!i.outputs)throw new L7(i.name,{docsPath:Wd});const o=Df(i.outputs,n);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const iE="modulepreload",oE=function(t){return"/"+t},u3={},ka=function(e,r,n){if(!r||r.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=oE(o),o in u3)return;u3[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":iE,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},o1=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],I5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],$5=[...I5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],sE=[...I5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],f3=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],d3=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],aE=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],cE="0x82ad56cb";function rc({blockNumber:t,chain:e,contract:r}){var i;const n=(i=e==null?void 0:e.contracts)==null?void 0:i[r];if(!n)throw new qh({chain:e,contract:{name:r}});if(t&&n.blockCreated&&n.blockCreated>t)throw new qh({blockNumber:t,chain:e,contract:{name:r,blockCreated:n.blockCreated}});return n.address}function lE(t,{docsPath:e,...r}){const n=(()=>{const i=Cp(t,r);return i instanceof If?t:i})();return new S5(n,{docsPath:e,...r})}const zd=new Map;function Ip({fn:t,id:e,shouldSplitBatch:r,wait:n=0,sort:i}){const o=async()=>{const u=c();s();const f=u.map(({args:p})=>p);f.length!==0&&t(f).then(p=>{var b;i&&Array.isArray(p)&&p.sort(i);for(let v=0;v<u.length;v++){const{pendingPromise:A}=u[v];(b=A.resolve)==null||b.call(A,[p[v],p])}}).catch(p=>{var b;for(let v=0;v<u.length;v++){const{pendingPromise:A}=u[v];(b=A.reject)==null||b.call(A,p)}})},s=()=>zd.delete(e),a=()=>c().map(({args:u})=>u),c=()=>zd.get(e)||[],l=u=>zd.set(e,[...c(),u]);return{flush:s,async schedule(u){const f={},p=new Promise((A,_)=>{f.resolve=A,f.reject=_});return(r==null?void 0:r([...a(),u]))&&o(),c().length>0?(l({args:u,pendingPromise:f}),p):(l({args:u,pendingPromise:f}),setTimeout(o,n),p)}}}async function Bf(t,e){var N,P,M,D;const{account:r=t.account,batch:n=!!((N=t.batch)!=null&&N.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:p,to:b,value:v,...A}=e,_=r?yn(r):void 0;try{pu(e);const W=(i?qe(i):void 0)||o,w=(D=(M=(P=t.chain)==null?void 0:P.formatters)==null?void 0:M.transactionRequest)==null?void 0:D.format,X=(w||Tf)({...Ap(A,{format:w}),from:_==null?void 0:_.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:p,to:b,value:v});if(n&&uE({request:X}))try{return await fE(t,{...X,blockNumber:i,blockTag:o})}catch(L){if(!(L instanceof u5)&&!(L instanceof qh))throw L}const te=await t.request({method:"eth_call",params:W?[X,W]:[X]});return te==="0x"?{data:void 0}:{data:te}}catch(R){const W=dE(R),{offchainLookup:w,offchainLookupSignature:H}=await ka(()=>import("./ccip-xcEcR3BD.js"),__vite__mapDeps([]));if((W==null?void 0:W.slice(0,10))===H&&b)return{data:await w(t,{data:W,to:b})};throw lE(R,{...e,account:_,chain:t.chain})}}function uE({request:t}){const{data:e,to:r,...n}=t;return!(!e||e.startsWith(cE)||!r||Object.values(n).filter(i=>typeof i<"u").length>0)}async function fE(t,e){var A;const{batchSize:r=1024,wait:n=0}=typeof((A=t.batch)==null?void 0:A.multicall)=="object"?t.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!t.chain)throw new u5;l=rc({blockNumber:i,chain:t.chain,contract:"multicall3"})}const f=(i?qe(i):void 0)||o,{schedule:p}=Ip({id:`${t.uid}.${f}`,wait:n,shouldSplitBatch(_){return _.reduce((P,{data:M})=>P+(M.length-2),0)>r*2},fn:async _=>{const N=_.map(D=>({allowFailure:!0,callData:D.data,target:D.to})),P=Mo({abi:o1,args:[N],functionName:"aggregate3"}),M=await t.request({method:"eth_call",params:[{data:P,to:l},f]});return tc({abi:o1,args:[N],functionName:"aggregate3",data:M||"0x"})}}),[{returnData:b,success:v}]=await p({data:s,to:c});if(!v)throw new xp({data:b});return b==="0x"?{data:void 0}:{data:b}}function dE(t){if(!(t instanceof be))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function _o(t,{abi:e,address:r,args:n,functionName:i,...o}){const s=Mo({abi:e,args:n,functionName:i});try{const{data:a}=await Be(t,Bf,"call")({data:s,to:r,...o});return tc({abi:e,args:n,functionName:i,data:a||"0x"})}catch(a){throw Al(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:i})}}async function hE(t,{abi:e,address:r,args:n,dataSuffix:i,functionName:o,...s}){const a=s.account?yn(s.account):void 0,c=Mo({abi:e,args:n,functionName:o});try{const{data:l}=await Be(t,Bf,"call")({batch:!1,data:`${c}${i?i.replace("0x",""):""}`,to:r,...s});return{result:tc({abi:e,args:n,functionName:o,data:l||"0x"}),request:{abi:e,address:r,args:n,dataSuffix:i,functionName:o,...s}}}catch(l){throw Al(l,{abi:e,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const Hd=new Map,h3=new Map;let pE=0;function nc(t,e,r){const n=++pE,i=()=>Hd.get(t)||[],o=()=>{const u=i();Hd.set(t,u.filter(f=>f.id!==n))},s=()=>{const u=h3.get(t);i().length===1&&u&&u(),o()},a=i();if(Hd.set(t,[...a,{id:n,fns:e}]),a&&a.length>0)return s;const c={};for(const u in e)c[u]=(...f)=>{var b,v;const p=i();if(p.length!==0)for(const A of p)(v=(b=A.fns)[u])==null||v.call(b,...f)};const l=r(c);return typeof l=="function"&&h3.set(t,l),s}async function R0(t){return new Promise(e=>setTimeout(e,t))}function mu(t,{emitOnBegin:e,initialWaitTime:r,interval:n}){let i=!0;const o=()=>i=!1;return(async()=>{let a;e&&(a=await t({unpoll:o}));const c=await(r==null?void 0:r(a))??n;await R0(c);const l=async()=>{i&&(await t({unpoll:o}),await R0(n),l())};l()})(),o}const gE=new Map,mE=new Map;function wE(t){const e=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),r=e(t,gE),n=e(t,mE);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}async function bE(t,{cacheKey:e,cacheTime:r=1/0}){const n=wE(e),i=n.response.get();if(i&&r>0&&new Date().getTime()-i.created.getTime()<r)return i.data;let o=n.promise.get();o||(o=t(),n.promise.set(o));try{const s=await o;return n.response.set({created:new Date,data:s}),s}finally{n.promise.clear()}}const yE=t=>`blockNumber.${t}`;async function wu(t,{cacheTime:e=t.cacheTime,maxAge:r}={}){const n=await bE(()=>t.request({method:"eth_blockNumber"}),{cacheKey:yE(t.uid),cacheTime:r??e});return BigInt(n)}async function Lf(t,{filter:e}){const r="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in e&&e.abi?gu({abi:e.abi,data:i.data,topics:i.topics,strict:r}):{eventName:void 0,args:void 0};return Rn(i,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof fs||s instanceof Xa){if("strict"in e&&e.strict)return;a=s.abiItem.name,c=(o=s.abiItem.inputs)==null?void 0:o.some(l=>!("name"in l&&l.name))}return Rn(i,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function Uf(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function vE(t,{abi:e,address:r,args:n,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){return(typeof c<"u"?c:t.transport.type!=="webSocket")?(()=>{const v=Dr(["watchContractEvent",r,n,i,t.uid,o,l]),A=u??!1;return nc(v,{onLogs:a,onError:s},_=>{let N,P,M=!1;const D=mu(async()=>{var R;if(!M){try{P=await Be(t,E5,"createContractEventFilter")({abi:e,address:r,args:n,eventName:o,strict:A})}catch{}M=!0;return}try{let W;if(P)W=await Be(t,Lf,"getFilterChanges")({filter:P});else{const w=await Be(t,wu,"getBlockNumber")({});N&&N!==w?W=await Be(t,T5,"getContractEvents")({abi:e,address:r,args:n,eventName:o,fromBlock:N+1n,toBlock:w,strict:A}):W=[],N=w}if(W.length===0)return;if(i)_.onLogs(W);else for(const w of W)_.onLogs([w])}catch(W){P&&W instanceof ds&&(M=!1),(R=_.onError)==null||R.call(_,W)}},{emitOnBegin:!0,interval:l});return async()=>{P&&await Be(t,Uf,"uninstallFilter")({filter:P}),D()}})})():(()=>{let v=!0,A=()=>v=!1;return(async()=>{try{const _=o?du({abi:e,eventName:o,args:n}):[],{unsubscribe:N}=await t.transport.subscribe({params:["logs",{address:r,topics:_}],onData(P){var D;if(!v)return;const M=P.result;try{const{eventName:R,args:W}=gu({abi:e,data:M.data,topics:M.topics,strict:u}),w=Rn(M,{args:W,eventName:R});a([w])}catch(R){let W,w;if(R instanceof fs||R instanceof Xa){if(u)return;W=R.abiItem.name,w=(D=R.abiItem.inputs)==null?void 0:D.some(X=>!("name"in X&&X.name))}const H=Rn(M,{args:w?[]:{},eventName:W});a([H])}},onError(P){s==null||s(P)}});A=N,v||A()}catch(_){s==null||s(_)}})(),A})()}function N5({chain:t,currentChainId:e}){if(!t)throw new C7;if(e!==t.id)throw new _7({chain:t,currentChainId:e})}function EE(t,{docsPath:e,...r}){const n=(()=>{const i=Cp(t,r);return i instanceof If?t:i})();return new j9(n,{docsPath:e,...r})}async function Sl(t){const e=await t.request({method:"eth_chainId"});return Tr(e)}async function $p(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Np(t,e){var A,_,N,P;const{account:r=t.account,chain:n=t.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p,...b}=e;if(!r)throw new ec({docsPath:"/docs/actions/wallet/sendTransaction"});const v=yn(r);try{pu(e);let M;if(n!==null&&(M=await Be(t,Sl,"getChainId")({}),N5({currentChainId:M,chain:n})),v.type==="local"){const w=await Be(t,Rf,"prepareTransactionRequest")({account:v,accessList:i,chain:n,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p,...b});M||(M=await Be(t,Sl,"getChainId")({}));const H=(A=n==null?void 0:n.serializers)==null?void 0:A.transaction,X=await v.signTransaction({...w,chainId:M},{serializer:H});return await Be(t,$p,"sendRawTransaction")({serializedTransaction:X})}const D=(P=(N=(_=t.chain)==null?void 0:_.formatters)==null?void 0:N.transactionRequest)==null?void 0:P.format,W=(D||Tf)({...Ap(b,{format:D}),accessList:i,data:o,from:v.address,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:p});return await t.request({method:"eth_sendTransaction",params:[W]})}catch(M){throw EE(M,{...e,account:v,chain:e.chain||void 0})}}async function xE(t,{abi:e,address:r,args:n,dataSuffix:i,functionName:o,...s}){const a=Mo({abi:e,args:n,functionName:o});return await Be(t,Np,"sendTransaction")({data:`${a}${i?i.replace("0x",""):""}`,to:r,...s})}async function _E(t,{chain:e}){const{id:r,name:n,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:qe(r),chainName:n,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const s1=256;let Gu=s1,Vu;function CE(t=11){if(!Vu||Gu+t>s1*2){Vu="",Gu=0;for(let e=0;e<s1;e++)Vu+=(256+Math.random()*256|0).toString(16).substring(1)}return Vu.substring(Gu,Gu+++t)}function M5(t){const{batch:e,cacheTime:r=t.pollingInterval??4e3,key:n="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=t,a=t.chain,c=t.account?yn(t.account):void 0,{config:l,request:u,value:f}=t.transport({chain:a,pollingInterval:o}),p={...l,...f},b={account:c,batch:e,cacheTime:r,chain:a,key:n,name:i,pollingInterval:o,request:u,transport:p,type:s,uid:CE()};function v(A){return _=>{const N=_(A);for(const M in b)delete N[M];const P={...A,...N};return Object.assign(P,{extend:v(P)})}}return Object.assign(b,{extend:v(b)})}function O5(t,{delay:e=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof e=="function"?e({count:a,error:l}):e;u&&await R0(u),s({count:a+1})};try{const l=await t();i(l)}catch(l){if(a<r&&await n({count:a,error:l}))return c({error:l});o(l)}};s()})}const D5=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Kc&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function AE(t,{retryDelay:e=150,retryCount:r=3}={}){return async n=>O5(async()=>{try{return await t(n)}catch(i){const o=i;switch(o.code){case dl.code:throw new dl(o);case hl.code:throw new hl(o);case pl.code:throw new pl(o);case gl.code:throw new gl(o);case Sa.code:throw new Sa(o);case ds.code:throw new ds(o);case ml.code:throw new ml(o);case Pa.code:throw new Pa(o);case wl.code:throw new wl(o);case bl.code:throw new bl(o);case yl.code:throw new yl(o);case vl.code:throw new vl(o);case Gr.code:throw new Gr(o);case El.code:throw new El(o);case xl.code:throw new xl(o);case _l.code:throw new _l(o);case Cl.code:throw new Cl(o);case Li.code:throw new Li(o);case 5e3:throw new Gr(o);default:throw i instanceof be?i:new G9(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Kc){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*e},retryCount:r,shouldRetry:({error:i})=>!D5(i)})}function Ff({key:t,name:e,request:r,retryCount:n=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:t,name:e,request:r,retryCount:n,retryDelay:i,timeout:o,type:s},request:AE(r,{retryCount:n,retryDelay:i}),value:a}}function Mp(t,e={}){const{key:r="custom",name:n="Custom Provider",retryDelay:i}=e;return({retryCount:o})=>Ff({key:r,name:n,request:t.request.bind(t),retryCount:e.retryCount??o,retryDelay:i,type:"custom"})}function p3(t,e={}){const{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=e;return({chain:a,pollingInterval:c=4e3,timeout:l})=>{let u=t,f=()=>{};const p=Ff({key:r,name:n,async request({method:b,params:v}){const A=async(_=0)=>{const N=u[_]({chain:a,retryCount:0,timeout:l});try{const P=await N.request({method:b,params:v});return f({method:b,params:v,response:P,transport:N,status:"success"}),P}catch(P){if(f({error:P,method:b,params:v,transport:N,status:"error"}),D5(P)||_===u.length-1)throw P;return A(_+1)}};return A()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:b=>f=b,transports:u.map(b=>b({chain:a,retryCount:0}))});if(i){const b=typeof i=="object"?i:{};SE({chain:a,interval:b.interval??c,onTransports:v=>u=v,sampleCount:b.sampleCount,timeout:b.timeout,transports:u,weights:b.weights})}return p}}function SE({chain:t,interval:e=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:c=.3}=s,l=[],u=async()=>{const f=await Promise.all(o.map(async v=>{const A=v({chain:t,retryCount:0,timeout:i}),_=Date.now();let N,P;try{await A.request({method:"net_listening"}),P=1}catch{P=0}finally{N=Date.now()}return{latency:N-_,success:P}}));l.push(f),l.length>n&&l.shift();const p=Math.max(...l.map(v=>Math.max(...v.map(({latency:A})=>A)))),b=o.map((v,A)=>{const _=l.map(R=>R[A].latency),P=1-_.reduce((R,W)=>R+W,0)/_.length/p,M=l.map(R=>R[A].success),D=M.reduce((R,W)=>R+W,0)/M.length;return D===0?[0,A]:[c*P+a*D,A]}).sort((v,A)=>A[0]-v[0]);r(b.map(([,v])=>o[v])),await R0(e),u()};u()}class R5 extends be{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function PE(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const g3=PE();function B5(t,{errorInstance:e=new Error("timed out"),timeout:r,signal:n}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;r>0&&(s=setTimeout(()=>{n?a.abort():o(e)},r)),i(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(e),o(a)}finally{clearTimeout(s)}})()})}let a1=0;async function kE(t,{body:e,fetchOptions:r={},timeout:n=1e4}){var a;const{headers:i,method:o,signal:s}=r;try{const c=await B5(async({signal:u})=>await fetch(t,{...r,body:Array.isArray(e)?Dr(e.map(p=>({jsonrpc:"2.0",id:p.id??a1++,...p}))):Dr({jsonrpc:"2.0",id:e.id??a1++,...e}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(n>0?u:void 0)}),{errorInstance:new n1({body:e,url:t}),timeout:n,signal:!0});let l;if((a=c.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?l=await c.json():l=await c.text(),!c.ok)throw new Kc({body:e,details:Dr(l.error)||c.statusText,headers:c.headers,status:c.status,url:t});return l}catch(c){throw c instanceof Kc||c instanceof n1?c:new Kc({body:e,details:c.message,url:t})}}const qd=new Map;async function Gd(t){let e=qd.get(t);if(e)return e;const{schedule:r}=Ip({id:t,fn:async()=>{const o=new g3(t),s=new Map,a=new Map,c=({data:u})=>{const f=JSON.parse(u),p=f.method==="eth_subscription",b=p?f.params.subscription:f.id,v=p?a:s,A=v.get(b);A&&A({data:u}),p||v.delete(b)},l=()=>{qd.delete(t),o.removeEventListener("close",l),o.removeEventListener("message",c)};return o.addEventListener("close",l),o.addEventListener("message",c),o.readyState===g3.CONNECTING&&await new Promise((u,f)=>{o&&(o.onopen=u,o.onerror=f)}),e=Object.assign(o,{requests:s,subscriptions:a}),qd.set(t,e),[e]}}),[n,[i]]=await r();return i}function TE(t,{body:e,onResponse:r}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new H9({body:e,url:t.url,details:"Socket is closed."});const n=a1++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&n!==s.id||(r==null||r(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,i),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(n,i),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:n})),t}async function IE(t,{body:e,timeout:r=1e4}){return B5(()=>new Promise(n=>ha.webSocket(t,{body:e,onResponse:n})),{errorInstance:new n1({body:e,url:t.url}),timeout:r})}const ha={http:kE,webSocket:TE,webSocketAsync:IE};function $E(t,e={}){const{batch:r,fetchOptions:n,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:f=0}=typeof r=="object"?r:{},p=e.retryCount??c,b=l??e.timeout??1e4,v=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!v)throw new R5;return Ff({key:i,name:o,async request({method:A,params:_}){const N={method:A,params:_},{schedule:P}=Ip({id:`${t}`,wait:f,shouldSplitBatch(W){return W.length>u},fn:W=>ha.http(v,{body:W,fetchOptions:n,timeout:b}),sort:(W,w)=>W.id-w.id}),M=async W=>r?P(W):[await ha.http(v,{body:W,fetchOptions:n,timeout:b})],[{error:D,result:R}]=await M(N);if(D)throw new _p({body:N,error:D,url:v});return R},retryCount:p,retryDelay:s,timeout:b,type:"http"},{fetchOptions:n,url:t})}}function Op(t,e){var n,i,o;if(!(t instanceof be))return!1;const r=t.walk(s=>s instanceof r1);return r instanceof r1?!!(((n=r.data)==null?void 0:n.errorName)==="ResolverNotFound"||((i=r.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=r.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&r.reason===x5[50]):!1}function L5(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return di(e)?e:null}function g0(t){let e=new Uint8Array(32).fill(0);if(!t)return ul(e);const r=t.split(".");for(let n=r.length-1;n>=0;n-=1){const i=L5(r[n]),o=i?Eo(i):Or(Ri(r[n]),"bytes");e=Or(Bi([e,o]),"bytes")}return ul(e)}function NE(t){return`[${t.slice(2)}]`}function ME(t){const e=new Uint8Array(32).fill(0);return t?L5(t)||Or(Ri(t)):ul(e)}function jf(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const r=new Uint8Array(Ri(e).byteLength+2);let n=0;const i=e.split(".");for(let o=0;o<i.length;o++){let s=Ri(i[o]);s.byteLength>255&&(s=Ri(NE(ME(i[o])))),r[n]=s.length,r.set(s,n+1),n+=s.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}async function OE(t,{blockNumber:e,blockTag:r,coinType:n,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=rc({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=Mo({abi:d3,functionName:"addr",...n!=null?{args:[g0(i),BigInt(n)]}:{args:[g0(i)]}}),c=await Be(t,_o,"readContract")({address:s,abi:$5,functionName:"resolve",args:[Ki(jf(i)),a],blockNumber:e,blockTag:r});if(c[0]==="0x")return null;const l=tc({abi:d3,args:n!=null?[g0(i),BigInt(n)]:void 0,functionName:"addr",data:c[0]});return l==="0x"||os(l)==="0x00"?null:l}catch(a){if(Op(a,"resolve"))return null;throw a}}class DE extends be{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Pc extends be{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Dp extends be{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class RE extends be{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const BE=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,LE=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,UE=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,FE=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function jE(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const r=e.headers.get("content-type");return r==null?void 0:r.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(r=>{const n=new Image;n.onload=()=>{r(!0)},n.onerror=()=>{r(!1)},n.src=t})}}function m3(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function U5({uri:t,gatewayUrls:e}){const r=UE.test(t);if(r)return{uri:t,isOnChain:!0,isEncoded:r};const n=m3(e==null?void 0:e.ipfs,"https://ipfs.io"),i=m3(e==null?void 0:e.arweave,"https://arweave.net"),o=t.match(BE),{protocol:s,subpath:a,target:c,subtarget:l=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",f=s==="ipfs:/"||a==="ipfs/"||LE.test(t);if(t.startsWith("http")&&!u&&!f){let b=t;return e!=null&&e.arweave&&(b=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:b,isOnChain:!1,isEncoded:!1}}if((u||f)&&c)return{uri:`${n}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${i}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let p=t.replace(FE,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new Dp({uri:t})}function F5(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new DE({data:t});return t.image||t.image_url||t.image_data}async function WE({gatewayUrls:t,uri:e}){try{const r=await fetch(e).then(i=>i.json());return await Rp({gatewayUrls:t,uri:F5(r)})}catch{throw new Dp({uri:e})}}async function Rp({gatewayUrls:t,uri:e}){const{uri:r,isOnChain:n}=U5({uri:e,gatewayUrls:t});if(n||await jE(r))return r;throw new Dp({uri:e})}function zE(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[r,n,i]=e.split("/"),[o,s]=r.split(":"),[a,c]=n.split(":");if(!o||o.toLowerCase()!=="eip155")throw new Pc({reason:"Only EIP-155 supported"});if(!s)throw new Pc({reason:"Chain ID not found"});if(!c)throw new Pc({reason:"Contract address not found"});if(!i)throw new Pc({reason:"Token ID not found"});if(!a)throw new Pc({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:i}}async function HE(t,{nft:e}){if(e.namespace==="erc721")return _o(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return _o(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new RE({namespace:e.namespace})}async function qE(t,{gatewayUrls:e,record:r}){return/eip155:/i.test(r)?GE(t,{gatewayUrls:e,record:r}):Rp({uri:r,gatewayUrls:e})}async function GE(t,{gatewayUrls:e,record:r}){const n=zE(r),i=await HE(t,{nft:n}),{uri:o,isOnChain:s,isEncoded:a}=U5({uri:i,gatewayUrls:e});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const l=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(l);return Rp({uri:F5(u),gatewayUrls:e})}let c=n.tokenID;return n.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),WE({gatewayUrls:e,uri:o.replace(/(?:0x)?{id}/,c)})}async function j5(t,{blockNumber:e,blockTag:r,name:n,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=rc({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await Be(t,_o,"readContract")({address:s,abi:$5,functionName:"resolve",args:[Ki(jf(n)),Mo({abi:f3,functionName:"text",args:[g0(n),i]})],blockNumber:e,blockTag:r});if(a[0]==="0x")return null;const c=tc({abi:f3,functionName:"text",data:a[0]});return c===""?null:c}catch(a){if(Op(a,"resolve"))return null;throw a}}async function VE(t,{blockNumber:e,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:o}){const s=await Be(t,j5,"getEnsText")({blockNumber:e,blockTag:r,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await qE(t,{record:s,gatewayUrls:n})}catch{return null}}async function KE(t,{address:e,blockNumber:r,blockTag:n,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=rc({blockNumber:r,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{return(await Be(t,_o,"readContract")({address:o,abi:sE,functionName:"reverse",args:[Ki(jf(s))],blockNumber:r,blockTag:n}))[0]}catch(a){if(Op(a,"reverse"))return null;throw a}}async function ZE(t,{blockNumber:e,blockTag:r,name:n,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=rc({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await Be(t,_o,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Ki(jf(n))],blockNumber:e,blockTag:r});return s}async function JE(t){const e=Of(t,{method:"eth_newBlockFilter"}),r=await t.request({method:"eth_newBlockFilter"});return{id:r,request:e(r),type:"block"}}async function W5(t,{address:e,args:r,event:n,events:i,fromBlock:o,strict:s,toBlock:a}={}){const c=i??(n?[n]:void 0),l=Of(t,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap(p=>du({abi:[p],eventName:p.name,args:r}))],n&&(u=u[0]));const f=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof o=="bigint"?qe(o):o,toBlock:typeof a=="bigint"?qe(a):a,...u.length?{topics:u}:{}}]});return{abi:c,args:r,eventName:n?n.name:void 0,fromBlock:o,id:f,request:l(f),strict:s,toBlock:a,type:"event"}}async function z5(t){const e=Of(t,{method:"eth_newPendingTransactionFilter"}),r=await t.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:e(r),type:"transaction"}}async function YE(t,{address:e,blockNumber:r,blockTag:n="latest"}){const i=r?qe(r):void 0,o=await t.request({method:"eth_getBalance",params:[e,i||n]});return BigInt(o)}async function XE(t,{blockHash:e,blockNumber:r,blockTag:n="latest"}={}){const i=r!==void 0?qe(r):void 0;let o;return e?o=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):o=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[i||n]}),Tr(o)}async function QE(t,{address:e,blockNumber:r,blockTag:n="latest"}){const i=r!==void 0?qe(r):void 0,o=await t.request({method:"eth_getCode",params:[e,i||n]});if(o!=="0x")return o}function ex(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(r=>BigInt(r)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(r=>r.map(n=>BigInt(n)))}}async function tx(t,{blockCount:e,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){const o=r?qe(r):void 0,s=await t.request({method:"eth_feeHistory",params:[qe(e),o||n,i]});return ex(s)}async function rx(t,{filter:e}){const r=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in e&&e.abi?gu({abi:e.abi,data:i.data,topics:i.topics,strict:r}):{eventName:void 0,args:void 0};return Rn(i,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof fs||s instanceof Xa){if("strict"in e&&e.strict)return;a=s.abiItem.name,c=(o=s.abiItem.inputs)==null?void 0:o.some(l=>!("name"in l&&l.name))}return Rn(i,{args:c?[]:{},eventName:a})}}).filter(Boolean)}const nx=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,ix=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function ox({domain:t,message:e,primaryType:r,types:n}){const i=typeof t>"u"?{}:t,o={EIP712Domain:Z5({domain:i}),...n};K5({domain:i,message:e,primaryType:r,types:o});const s=["0x1901"];return i&&s.push(sx({domain:i,types:o})),r!=="EIP712Domain"&&s.push(H5({data:e,primaryType:r,types:o})),Or(Bi(s))}function sx({domain:t,types:e}){return H5({data:t,primaryType:"EIP712Domain",types:e})}function H5({data:t,primaryType:e,types:r}){const n=q5({data:t,primaryType:e,types:r});return Or(n)}function q5({data:t,primaryType:e,types:r}){const n=[{type:"bytes32"}],i=[ax({primaryType:e,types:r})];for(const o of r[e]){const[s,a]=V5({types:r,name:o.name,type:o.type,value:t[o.name]});n.push(s),i.push(a)}return uu(n,i)}function ax({primaryType:t,types:e}){const r=Ki(cx({primaryType:t,types:e}));return Or(r)}function cx({primaryType:t,types:e}){let r="";const n=G5({primaryType:t,types:e});n.delete(t);const i=[t,...Array.from(n).sort()];for(const o of i)r+=`${o}(${e[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return r}function G5({primaryType:t,types:e},r=new Set){const n=t.match(/^\w*/u),i=n==null?void 0:n[0];if(r.has(i)||e[i]===void 0)return r;r.add(i);for(const o of e[i])G5({primaryType:o.type,types:e},r);return r}function V5({types:t,name:e,type:r,value:n}){if(t[r]!==void 0)return[{type:"bytes32"},Or(q5({data:n,primaryType:r,types:t}))];if(r==="bytes")return n=`0x${(n.length%2?"0":"")+n.slice(2)}`,[{type:"bytes32"},Or(n)];if(r==="string")return[{type:"bytes32"},Or(Ki(n))];if(r.lastIndexOf("]")===r.length-1){const i=r.slice(0,r.lastIndexOf("[")),o=n.map(s=>V5({name:e,type:i,types:t,value:s}));return[{type:"bytes32"},Or(uu(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:r},n]}function K5({domain:t,message:e,primaryType:r,types:n}){const i=n,o=(s,a)=>{for(const c of s){const{name:l,type:u}=c,f=u,p=a[l],b=f.match(ix);if(b&&(typeof p=="number"||typeof p=="bigint")){const[_,N,P]=b;qe(p,{signed:N==="int",size:parseInt(P)/8})}if(f==="address"&&typeof p=="string"&&!Aa(p))throw new fl({address:p});const v=f.match(nx);if(v){const[_,N]=v;if(N&&lr(p)!==parseInt(N))throw new U7({expectedSize:parseInt(N),givenSize:lr(p)})}const A=i[f];A&&o(A,p)}};if(i.EIP712Domain&&t&&o(i.EIP712Domain,t),r!=="EIP712Domain"){const s=i[r];o(s,e)}}function Z5({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Vd="/docs/contract/encodeDeployData";function J5({abi:t,args:e,bytecode:r}){if(!e||e.length===0)return r;const n=t.find(o=>"type"in o&&o.type==="constructor");if(!n)throw new N7({docsPath:Vd});if(!("inputs"in n))throw new t3({docsPath:Vd});if(!n.inputs||n.inputs.length===0)throw new t3({docsPath:Vd});const i=uu(n.inputs,e);return dp([r,i])}const lx=`Ethereum Signed Message:
`;function ux(t,e){const r=typeof t=="string"?Ri(t):t.raw instanceof Uint8Array?t.raw:Eo(t.raw),n=Ri(`${lx}${r.length}`);return Or(Bi([n,r]),e)}function fx(t,e){let[r,n="0"]=t.split(".");const i=r.startsWith("-");if(i&&(r=r.slice(1)),n=n.replace(/(0+)$/,""),e===0)Math.round(+`.${n}`)===1&&(r=`${BigInt(r)+1n}`),n="";else if(n.length>e){const[o,s,a]=[n.slice(0,e-1),n.slice(e-1,e),n.slice(e)],c=Math.round(+`${s}.${a}`);c>9?n=`${BigInt(o)+BigInt(1)}0`.padStart(o.length+1,"0"):n=`${o}${c}`,n.length>e&&(n=n.slice(1),r=`${BigInt(r)+1n}`),n=n.slice(0,e)}else n=n.padEnd(e,"0");return BigInt(`${i?"-":""}${r}${n}`)}function dx(t,e="wei"){return fx(t,f5[e])}function hx(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function px(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Tr(t.nonce):void 0,storageProof:t.storageProof?hx(t.storageProof):void 0}}async function gx(t,{address:e,blockNumber:r,blockTag:n,storageKeys:i}){const o=n??"latest",s=r!==void 0?qe(r):void 0,a=await t.request({method:"eth_getProof",params:[e,i,s||o]});return px(a)}async function mx(t,{address:e,blockNumber:r,blockTag:n="latest",slot:i}){const o=r!==void 0?qe(r):void 0;return await t.request({method:"eth_getStorageAt",params:[e,i,o||n]})}async function Bp(t,{blockHash:e,blockNumber:r,blockTag:n,hash:i,index:o}){var u,f,p;const s=n||"latest",a=r!==void 0?qe(r):void 0;let c=null;if(i?c=await t.request({method:"eth_getTransactionByHash",params:[i]}):e?c=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,qe(o)]}):(a||s)&&(c=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,qe(o)]})),!c)throw new C5({blockHash:e,blockNumber:r,blockTag:s,hash:i,index:o});return(((p=(f=(u=t.chain)==null?void 0:u.formatters)==null?void 0:f.transaction)==null?void 0:p.format)||c5)(c)}async function wx(t,{hash:e,transactionReceipt:r}){const[n,i]=await Promise.all([Be(t,wu,"getBlockNumber")({}),e?Be(t,Bp,"getBlockNumber")({hash:e}):void 0]),o=(r==null?void 0:r.blockNumber)||(i==null?void 0:i.blockNumber);return o?n-o+1n:0n}async function c1(t,{hash:e}){var i,o,s;const r=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!r)throw new A5({hash:e});return(((s=(o=(i=t.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||E7)(r)}async function bx(t,e){var A;const{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=e,c=n??(typeof((A=t.batch)==null?void 0:A.multicall)=="object"&&t.batch.multicall.batchSize||1024);let l=a;if(!l){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");l=rc({blockNumber:i,chain:t.chain,contract:"multicall3"})}const u=[[]];let f=0,p=0;for(let _=0;_<s.length;_++){const{abi:N,address:P,args:M,functionName:D}=s[_];try{const R=Mo({abi:N,args:M,functionName:D});p+=(R.length-2)/2,c>0&&p>c&&u[f].length>0&&(f++,p=(R.length-2)/2,u[f]=[]),u[f]=[...u[f],{allowFailure:!0,callData:R,target:P}]}catch(R){const W=Al(R,{abi:N,address:P,args:M,docsPath:"/docs/contract/multicall",functionName:D});if(!r)throw W;u[f]=[...u[f],{allowFailure:!0,callData:"0x",target:P}]}}const b=await Promise.allSettled(u.map(_=>Be(t,_o,"readContract")({abi:o1,address:l,args:[_],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),v=[];for(let _=0;_<b.length;_++){const N=b[_];if(N.status==="rejected"){if(!r)throw N.reason;for(let M=0;M<u[_].length;M++)v.push({status:"failure",error:N.reason,result:void 0});continue}const P=N.value;for(let M=0;M<P.length;M++){const{returnData:D,success:R}=P[M],{callData:W}=u[_][M],{abi:w,address:H,functionName:X,args:te}=s[v.length];try{if(W==="0x")throw new Nf;if(!R)throw new xp({data:D});const L=tc({abi:w,args:te,data:D,functionName:X});v.push(r?{result:L,status:"success"}:L)}catch(L){const h=Al(L,{abi:w,address:H,args:te,docsPath:"/docs/contract/multicall",functionName:X});if(!r)throw h;v.push({error:h,result:void 0,status:"failure"})}}}if(v.length!==s.length)throw new be("multicall results mismatch");return v}const yx="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function vx(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function Ex(t,e){const r=di(t)?Eo(t):t,n=di(e)?Eo(e):e;return vx(r,n)}async function Y5(t,{address:e,hash:r,signature:n,...i}){const o=di(n)?n:Ki(n);try{const{data:s}=await Be(t,Bf,"call")({data:J5({abi:aE,args:[e,r,o],bytecode:yx}),...i});return Ex(s??"0x0","0x1")}catch(s){if(s instanceof S5)return!1;throw s}}async function xx(t,{address:e,message:r,signature:n,...i}){const o=ux(r);return Y5(t,{address:e,hash:o,signature:n,...i})}async function _x(t,{address:e,signature:r,message:n,primaryType:i,types:o,domain:s,...a}){const c=ox({message:n,primaryType:i,types:o,domain:s});return Y5(t,{address:e,hash:c,signature:r,...a})}function X5(t,{emitOnBegin:e=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:o,pollingInterval:s=t.pollingInterval}){const a=typeof o<"u"?o:t.transport.type!=="webSocket";let c;return a?(()=>{const f=Dr(["watchBlockNumber",t.uid,e,r,s]);return nc(f,{onBlockNumber:n,onError:i},p=>mu(async()=>{var b;try{const v=await Be(t,wu,"getBlockNumber")({cacheTime:0});if(c){if(v===c)return;if(v-c>1&&r)for(let A=c+1n;A<v;A++)p.onBlockNumber(A,c),c=A}(!c||v>c)&&(p.onBlockNumber(v,c),c=v)}catch(v){(b=p.onError)==null||b.call(p,v)}},{emitOnBegin:e,interval:s}))})():(()=>{let f=!0,p=()=>f=!1;return(async()=>{try{const{unsubscribe:b}=await t.transport.subscribe({params:["newHeads"],onData(v){var _;if(!f)return;const A=kf((_=v.result)==null?void 0:_.number);n(A,c),c=A},onError(v){i==null||i(v)}});p=b,f||p()}catch(b){i==null||i(b)}})(),p})()}async function Cx(t,{confirmations:e=1,hash:r,onReplaced:n,pollingInterval:i=t.pollingInterval,timeout:o}){const s=Dr(["waitForTransactionReceipt",t.uid,r]);let a,c,l,u=!1;return new Promise((f,p)=>{o&&setTimeout(()=>p(new W9({hash:r})),o);const b=nc(s,{onReplaced:n,resolve:f,reject:p},v=>{const A=Be(t,X5,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(_){if(u)return;let N=_;const P=M=>{A(),M(),b()};try{if(l){if(e>1&&(!l.blockNumber||N-l.blockNumber+1n<e))return;P(()=>v.resolve(l));return}if(a||(u=!0,await O5(async()=>{a=await Be(t,Bp,"getTransaction")({hash:r}),a.blockNumber&&(N=a.blockNumber)},{delay:({count:M})=>~~(1<<M)*200,retryCount:6}),u=!1),l=await Be(t,c1,"getTransactionReceipt")({hash:r}),e>1&&(!l.blockNumber||N-l.blockNumber+1n<e))return;P(()=>v.resolve(l))}catch(M){if(a&&(M instanceof C5||M instanceof A5))try{c=a;const R=(await Be(t,xo,"getBlock")({blockNumber:N,includeTransactions:!0})).transactions.find(({from:w,nonce:H})=>w===c.from&&H===c.nonce);if(!R||(l=await Be(t,c1,"getTransactionReceipt")({hash:R.hash}),e>1&&(!l.blockNumber||N-l.blockNumber+1n<e)))return;let W="replaced";R.to===c.to&&R.value===c.value?W="repriced":R.from===R.to&&R.value===0n&&(W="cancelled"),P(()=>{var w;(w=v.onReplaced)==null||w.call(v,{reason:W,replacedTransaction:c,transaction:R,transactionReceipt:l}),v.resolve(l)})}catch(D){P(()=>v.reject(D))}else P(()=>v.reject(M))}}})})})}function Ax(t,{blockTag:e="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:c=t.pollingInterval}){const l=typeof a<"u"?a:t.transport.type!=="webSocket",u=s??!1;let f;return l?(()=>{const v=Dr(["watchBlocks",t.uid,r,n,u,c]);return nc(v,{onBlock:i,onError:o},A=>mu(async()=>{var _;try{const N=await Be(t,xo,"getBlock")({blockTag:e,includeTransactions:u});if(N.number&&(f!=null&&f.number)){if(N.number===f.number)return;if(N.number-f.number>1&&r)for(let P=(f==null?void 0:f.number)+1n;P<N.number;P++){const M=await Be(t,xo,"getBlock")({blockNumber:P,includeTransactions:u});A.onBlock(M,f),f=M}}(!(f!=null&&f.number)||e==="pending"&&!(N!=null&&N.number)||N.number&&N.number>f.number)&&(A.onBlock(N,f),f=N)}catch(N){(_=A.onError)==null||_.call(A,N)}},{emitOnBegin:n,interval:c}))})():(()=>{let v=!0,A=()=>v=!1;return(async()=>{try{const{unsubscribe:_}=await t.transport.subscribe({params:["newHeads"],onData(N){var D,R,W;if(!v)return;const M=(((W=(R=(D=t.chain)==null?void 0:D.formatters)==null?void 0:R.block)==null?void 0:W.format)||l5)(N.result);i(M,f),f=M},onError(N){o==null||o(N)}});A=_,v||A()}catch(_){o==null||o(_)}})(),A})()}function Sx(t,{address:e,args:r,batch:n=!0,event:i,events:o,onError:s,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){const f=typeof c<"u"?c:t.transport.type!=="webSocket",p=u??!1;return f?(()=>{const A=Dr(["watchEvent",e,r,n,t.uid,i,l]);return nc(A,{onLogs:a,onError:s},_=>{let N,P,M=!1;const D=mu(async()=>{var R;if(!M){try{P=await Be(t,W5,"createEventFilter")({address:e,args:r,event:i,events:o,strict:p})}catch{}M=!0;return}try{let W;if(P)W=await Be(t,Lf,"getFilterChanges")({filter:P});else{const w=await Be(t,wu,"getBlockNumber")({});N&&N!==w?W=await Be(t,Tp,"getLogs")({address:e,args:r,event:i,events:o,fromBlock:N+1n,toBlock:w}):W=[],N=w}if(W.length===0)return;if(n)_.onLogs(W);else for(const w of W)_.onLogs([w])}catch(W){P&&W instanceof ds&&(M=!1),(R=_.onError)==null||R.call(_,W)}},{emitOnBegin:!0,interval:l});return async()=>{P&&await Be(t,Uf,"uninstallFilter")({filter:P}),D()}})})():(()=>{let A=!0,_=()=>A=!1;return(async()=>{try{const N=o??(i?[i]:void 0);let P=[];N&&(P=[N.flatMap(D=>du({abi:[D],eventName:D.name,args:r}))],i&&(P=P[0]));const{unsubscribe:M}=await t.transport.subscribe({params:["logs",{address:e,topics:P}],onData(D){var W;if(!A)return;const R=D.result;try{const{eventName:w,args:H}=gu({abi:N,data:R.data,topics:R.topics,strict:p}),X=Rn(R,{args:H,eventName:w});a([X])}catch(w){let H,X;if(w instanceof fs||w instanceof Xa){if(u)return;H=w.abiItem.name,X=(W=w.abiItem.inputs)==null?void 0:W.some(L=>!("name"in L&&L.name))}const te=Rn(R,{args:X?[]:{},eventName:H});a([te])}},onError(D){s==null||s(D)}});_=M,A||_()}catch(N){s==null||s(N)}})(),_})()}function Px(t,{batch:e=!0,onError:r,onTransactions:n,poll:i,pollingInterval:o=t.pollingInterval}){return(typeof i<"u"?i:t.transport.type!=="webSocket")?(()=>{const l=Dr(["watchPendingTransactions",t.uid,e,o]);return nc(l,{onTransactions:n,onError:r},u=>{let f;const p=mu(async()=>{var b;try{if(!f)try{f=await Be(t,z5,"createPendingTransactionFilter")({});return}catch(A){throw p(),A}const v=await Be(t,Lf,"getFilterChanges")({filter:f});if(v.length===0)return;if(e)u.onTransactions(v);else for(const A of v)u.onTransactions([A])}catch(v){(b=u.onError)==null||b.call(u,v)}},{emitOnBegin:!0,interval:o});return async()=>{f&&await Be(t,Uf,"uninstallFilter")({filter:f}),p()}})})():(()=>{let l=!0,u=()=>l=!1;return(async()=>{try{const{unsubscribe:f}=await t.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!l)return;const b=p.result;n([b])},onError(p){r==null||r(p)}});u=f,l||u()}catch(f){r==null||r(f)}})(),u})()}function kx(t){return{call:e=>Bf(t,e),createBlockFilter:()=>JE(t),createContractEventFilter:e=>E5(t,e),createEventFilter:e=>W5(t,e),createPendingTransactionFilter:()=>z5(t),estimateContractGas:e=>rE(t,e),estimateGas:e=>kp(t,e),getBalance:e=>YE(t,e),getBlock:e=>xo(t,e),getBlockNumber:e=>wu(t,e),getBlockTransactionCount:e=>XE(t,e),getBytecode:e=>QE(t,e),getChainId:()=>Sl(t),getContractEvents:e=>T5(t,e),getEnsAddress:e=>OE(t,e),getEnsAvatar:e=>VE(t,e),getEnsName:e=>KE(t,e),getEnsResolver:e=>ZE(t,e),getEnsText:e=>j5(t,e),getFeeHistory:e=>tx(t,e),estimateFeesPerGas:e=>eE(t,e),getFilterChanges:e=>Lf(t,e),getFilterLogs:e=>rx(t,e),getGasPrice:()=>Pp(t),getLogs:e=>Tp(t,e),getProof:e=>gx(t,e),estimateMaxPriorityFeePerGas:e=>Q9(t,e),getStorageAt:e=>mx(t,e),getTransaction:e=>Bp(t,e),getTransactionConfirmations:e=>wx(t,e),getTransactionCount:e=>k5(t,e),getTransactionReceipt:e=>c1(t,e),multicall:e=>bx(t,e),prepareTransactionRequest:e=>Rf(t,e),readContract:e=>_o(t,e),sendRawTransaction:e=>$p(t,e),simulateContract:e=>hE(t,e),verifyMessage:e=>xx(t,e),verifyTypedData:e=>_x(t,e),uninstallFilter:e=>Uf(t,e),waitForTransactionReceipt:e=>Cx(t,e),watchBlocks:e=>Ax(t,e),watchBlockNumber:e=>X5(t,e),watchContractEvent:e=>vE(t,e),watchEvent:e=>Sx(t,e),watchPendingTransactions:e=>Px(t,e)}}function w3(t){const{key:e="public",name:r="Public Client"}=t;return M5({...t,key:e,name:r,type:"publicClient"}).extend(kx)}function Tx(t,{abi:e,args:r,bytecode:n,...i}){const o=J5({abi:e,args:r,bytecode:n});return Np(t,{...i,data:o})}async function Ix(t){var r;return((r=t.account)==null?void 0:r.type)==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(n=>yp(n))}async function $x(t){return await t.request({method:"wallet_getPermissions"})}async function Nx(t){return(await t.request({method:"eth_requestAccounts"})).map(r=>Dn(r))}async function Mx(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function Ox(t,{account:e=t.account,message:r}){if(!e)throw new ec({docsPath:"/docs/actions/wallet/signMessage"});const n=yn(e);if(n.type==="local")return n.signMessage({message:r});const i=typeof r=="string"?lp(r):r.raw instanceof Uint8Array?Ki(r.raw):r.raw;return t.request({method:"personal_sign",params:[i,n.address]})}async function Dx(t,e){var l,u,f,p;const{account:r=t.account,chain:n=t.chain,...i}=e;if(!r)throw new ec({docsPath:"/docs/actions/wallet/signTransaction"});const o=yn(r);pu({account:o,...e});const s=await Be(t,Sl,"getChainId")({});n!==null&&N5({currentChainId:s,chain:n});const a=(n==null?void 0:n.formatters)||((l=t.chain)==null?void 0:l.formatters),c=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||Tf;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(f=t.chain)==null?void 0:f.serializers)==null?void 0:p.transaction}):await t.request({method:"eth_signTransaction",params:[{...c(i),chainId:qe(s),from:o.address}]})}async function Rx(t,{account:e=t.account,domain:r,message:n,primaryType:i,types:o}){if(!e)throw new ec({docsPath:"/docs/actions/wallet/signTypedData"});const s=yn(e),a={EIP712Domain:Z5({domain:r}),...o};if(K5({domain:r,message:n,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:r,primaryType:i,types:a,message:n});const c=Dr({domain:r??{},primaryType:i,types:a,message:n},(l,u)=>di(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[s.address,c]})}async function Bx(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:qe(e)}]})}async function Lx(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function Ux(t){return{addChain:e=>_E(t,e),deployContract:e=>Tx(t,e),getAddresses:()=>Ix(t),getChainId:()=>Sl(t),getPermissions:()=>$x(t),prepareTransactionRequest:e=>Rf(t,e),requestAddresses:()=>Nx(t),requestPermissions:e=>Mx(t,e),sendRawTransaction:e=>$p(t,e),sendTransaction:e=>Np(t,e),signMessage:e=>Ox(t,e),signTransaction:e=>Dx(t,e),signTypedData:e=>Rx(t,e),switchChain:e=>Bx(t,e),watchAsset:e=>Lx(t,e),writeContract:e=>xE(t,e)}}function Lp(t){const{key:e="wallet",name:r="Wallet Client",transport:n}=t;return M5({...t,key:e,name:r,transport:o=>n({...o,retryCount:0}),type:"walletClient"}).extend(Ux)}function Fx(t,e={}){const{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=e;return({chain:o,retryCount:s,timeout:a})=>{var f;const c=e.retryCount??s,l=a??e.timeout??1e4,u=t||((f=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:f[0]);if(!u)throw new R5;return Ff({key:r,name:n,async request({method:p,params:b}){const v={method:p,params:b},A=await Gd(u),{error:_,result:N}=await ha.webSocketAsync(A,{body:v,timeout:l});if(_)throw new _p({body:v,error:_,url:u});return N},retryCount:c,retryDelay:i,timeout:l,type:"webSocket"},{getSocket(){return Gd(u)},async subscribe({params:p,onData:b,onError:v}){const A=await Gd(u),{result:_}=await new Promise((N,P)=>ha.webSocket(A,{body:{method:"eth_subscribe",params:p},onResponse(M){if(M.error){P(M.error),v==null||v(M.error);return}if(typeof M.id=="number"){N(M);return}M.method==="eth_subscription"&&b(M.params)}}));return{subscriptionId:_,async unsubscribe(){return new Promise(N=>ha.webSocket(A,{body:{method:"eth_unsubscribe",params:[_]},onResponse:N}))}}}})}}const jx=r5({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),pa=r5({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Q5=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},Mi=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function B0(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e6(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}var t6={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function o(c,l,u,f,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var b=new i(u,f||c,p),v=r?r+l:l;return c._events[v]?c._events[v].fn?c._events[v]=[c._events[v],b]:c._events[v].push(b):(c._events[v]=b,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new n:delete c._events[l]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],u,f;if(this._eventsCount===0)return l;for(f in u=this._events)e.call(u,f)&&l.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},a.prototype.listeners=function(l){var u=r?r+l:l,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var p=0,b=f.length,v=new Array(b);p<b;p++)v[p]=f[p].fn;return v},a.prototype.listenerCount=function(l){var u=r?r+l:l,f=this._events[u];return f?f.fn?1:f.length:0},a.prototype.emit=function(l,u,f,p,b,v){var A=r?r+l:l;if(!this._events[A])return!1;var _=this._events[A],N=arguments.length,P,M;if(_.fn){switch(_.once&&this.removeListener(l,_.fn,void 0,!0),N){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,u),!0;case 3:return _.fn.call(_.context,u,f),!0;case 4:return _.fn.call(_.context,u,f,p),!0;case 5:return _.fn.call(_.context,u,f,p,b),!0;case 6:return _.fn.call(_.context,u,f,p,b,v),!0}for(M=1,P=new Array(N-1);M<N;M++)P[M-1]=arguments[M];_.fn.apply(_.context,P)}else{var D=_.length,R;for(M=0;M<D;M++)switch(_[M].once&&this.removeListener(l,_[M].fn,void 0,!0),N){case 1:_[M].fn.call(_[M].context);break;case 2:_[M].fn.call(_[M].context,u);break;case 3:_[M].fn.call(_[M].context,u,f);break;case 4:_[M].fn.call(_[M].context,u,f,p);break;default:if(!P)for(R=1,P=new Array(N-1);R<N;R++)P[R-1]=arguments[R];_[M].fn.apply(_[M].context,P)}}return!0},a.prototype.on=function(l,u,f){return o(this,l,u,f,!1)},a.prototype.once=function(l,u,f){return o(this,l,u,f,!0)},a.prototype.removeListener=function(l,u,f,p){var b=r?r+l:l;if(!this._events[b])return this;if(!u)return s(this,b),this;var v=this._events[b];if(v.fn)v.fn===u&&(!p||v.once)&&(!f||v.context===f)&&s(this,b);else{for(var A=0,_=[],N=v.length;A<N;A++)(v[A].fn!==u||p&&!v[A].once||f&&v[A].context!==f)&&_.push(v[A]);_.length?this._events[b]=_.length===1?_[0]:_:s(this,b)}return this},a.prototype.removeAllListeners=function(l){var u;return l?(u=r?r+l:l,this._events[u]&&s(this,u)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a})(t6);var Wx=t6.exports;const zx=bu(Wx);var Up=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Nt=(t,e,r)=>(Up(t,e,"read from private field"),r?r.call(t):e.get(t)),Wr=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Pl=(t,e,r,n)=>(Up(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),pr=(t,e,r)=>(Up(t,e,"access private method"),r),Fp=class extends zx{constructor({chains:t=[pa,jx],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...r}=t.blockExplorers??{};if(e)return[e.url,...Object.values(r).map(n=>n.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function Hx(t){var r;if(!t)return"Injected";const e=n=>{if(n.isApexWallet)return"Apex Wallet";if(n.isAvalanche)return"Core Wallet";if(n.isBackpack)return"Backpack";if(n.isBifrost)return"Bifrost Wallet";if(n.isBitKeep)return"BitKeep";if(n.isBitski)return"Bitski";if(n.isBlockWallet)return"BlockWallet";if(n.isBraveWallet)return"Brave Wallet";if(n.isCoin98)return"Coin98 Wallet";if(n.isCoinbaseWallet)return"Coinbase Wallet";if(n.isDawn)return"Dawn Wallet";if(n.isDefiant)return"Defiant";if(n.isDesig)return"Desig Wallet";if(n.isEnkrypt)return"Enkrypt";if(n.isExodus)return"Exodus";if(n.isFordefi)return"Fordefi";if(n.isFrame)return"Frame";if(n.isFrontier)return"Frontier Wallet";if(n.isGamestop)return"GameStop Wallet";if(n.isHaqqWallet)return"HAQQ Wallet";if(n.isHyperPay)return"HyperPay Wallet";if(n.isImToken)return"ImToken";if(n.isHaloWallet)return"Halo Wallet";if(n.isKuCoinWallet)return"KuCoin Wallet";if(n.isMathWallet)return"MathWallet";if(n.isNovaWallet)return"Nova Wallet";if(n.isOkxWallet||n.isOKExWallet)return"OKX Wallet";if(n.isOneInchIOSWallet||n.isOneInchAndroidWallet)return"1inch Wallet";if(n.isOpera)return"Opera";if(n.isPhantom)return"Phantom";if(n.isPortal)return"Ripio Portal";if(n.isRabby)return"Rabby Wallet";if(n.isRainbow)return"Rainbow";if(n.isSafePal)return"SafePal Wallet";if(n.isStatus)return"Status";if(n.isSubWallet)return"SubWallet";if(n.isTalisman)return"Talisman";if(n.isTally)return"Taho";if(n.isTokenPocket)return"TokenPocket";if(n.isTokenary)return"Tokenary";if(n.isTrust||n.isTrustWallet)return"Trust Wallet";if(n.isTTWallet)return"TTWallet";if(n.isXDEFI)return"XDEFI Wallet";if(n.isZeal)return"Zeal";if(n.isZerion)return"Zerion";if(n.isMetaMask)return"MetaMask"};if((r=t.providers)!=null&&r.length){const n=new Set;let i=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${i}`,i+=1),n.add(a)}const o=[...n];return o.length?o:o[0]??"Injected"}return e(t)??"Injected"}var m0,jp=class extends Fp{constructor({chains:t,options:e}={}){const r={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers&&i.providers.length>0?i.providers[0]:i},...e};super({chains:t,options:r}),this.id="injected",Wr(this,m0,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Dn(i[0])})},this.onChainChanged=i=>{const o=B0(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const n=r.getProvider();if(typeof r.name=="string")this.name=r.name;else if(n){const i=Hx(n);r.name?this.name=r.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:t}={}){var e;try{const r=await this.getProvider();if(!r)throw new Mi;r.on&&(r.on("accountsChanged",this.onAccountsChanged),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const n=await r.request({method:"eth_requestAccounts"}),i=Dn(n[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(r){throw this.isUserRejectedRequestError(r)?new Gr(r):r.code===-32002?new Pa(r):r}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new Mi;const e=await t.request({method:"eth_accounts"});return Dn(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new Mi;return t.request({method:"eth_chainId"}).then(B0)}async getProvider(){const t=this.options.getProvider();return t&&Pl(this,m0,t),Nt(this,m0)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Lp({account:r,chain:n,transport:Mp(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Mi;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n,i,o;const e=await this.getProvider();if(!e)throw new Mi;const r=qe(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(c=>c.id===t);if(!a)throw new Q5({chainId:t,connectorId:this.id});if(s.code===4902||((i=(n=s==null?void 0:s.data)==null?void 0:n.originalError)==null?void 0:i.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new Gr(new Error("User rejected switch after adding network."));return a}catch(c){throw new Gr(c)}throw this.isUserRejectedRequestError(s)?new Gr(s):new Li(s)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){const i=await this.getProvider();if(!i)throw new Mi;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}isUserRejectedRequestError(t){return t.code===4001}};m0=new WeakMap;var Wp=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Kd=(t,e,r)=>(Wp(t,e,"read from private field"),r?r.call(t):e.get(t)),Zd=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Ku=(t,e,r,n)=>(Wp(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),qx=(t,e,r)=>(Wp(t,e,"access private method"),r),Gx={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Vx=t=>(e,r,n)=>{const i=n.subscribe;return n.subscribe=(s,a,c)=>{let l=s;if(a){const u=(c==null?void 0:c.equalityFn)||Object.is;let f=s(n.getState());l=p=>{const b=s(p);if(!u(f,b)){const v=f;a(f=b,v)}},c!=null&&c.fireImmediately&&a(f,f)}return i(l)},t(e,r,n)},Kx=Vx;function Zx(t,e){let r;try{r=t()}catch{return}return{getItem:i=>{var o;const s=c=>c===null?null:JSON.parse(c,e==null?void 0:e.reviver),a=(o=r.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>r.setItem(i,JSON.stringify(o,e==null?void 0:e.replacer)),removeItem:i=>r.removeItem(i)}}const kl=t=>e=>{try{const r=t(e);return r instanceof Promise?r:{then(n){return kl(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return kl(n)(r)}}}},Jx=(t,e)=>(r,n,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,N)=>({...N,..._}),...e},s=!1;const a=new Set,c=new Set;let l;try{l=o.getStorage()}catch{}if(!l)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(..._)},n,i);const u=kl(o.serialize),f=()=>{const _=o.partialize({...n()});let N;const P=u({state:_,version:o.version}).then(M=>l.setItem(o.name,M)).catch(M=>{N=M});if(N)throw N;return P},p=i.setState;i.setState=(_,N)=>{p(_,N),f()};const b=t((..._)=>{r(..._),f()},n,i);let v;const A=()=>{var _;if(!l)return;s=!1,a.forEach(P=>P(n()));const N=((_=o.onRehydrateStorage)==null?void 0:_.call(o,n()))||void 0;return kl(l.getItem.bind(l))(o.name).then(P=>{if(P)return o.deserialize(P)}).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==o.version){if(o.migrate)return o.migrate(P.state,P.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return P.state}).then(P=>{var M;return v=o.merge(P,(M=n())!=null?M:b),r(v,!0),f()}).then(()=>{N==null||N(v,void 0),s=!0,c.forEach(P=>P(v))}).catch(P=>{N==null||N(void 0,P)})};return i.persist={setOptions:_=>{o={...o,..._},_.getStorage&&(l=_.getStorage())},clearStorage:()=>{l==null||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>A(),hasHydrated:()=>s,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(c.add(_),()=>{c.delete(_)})},A(),v||b},Yx=(t,e)=>(r,n,i)=>{let o={storage:Zx(()=>localStorage),partialize:A=>A,version:0,merge:(A,_)=>({..._,...A}),...e},s=!1;const a=new Set,c=new Set;let l=o.storage;if(!l)return t((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...A)},n,i);const u=()=>{const A=o.partialize({...n()});return l.setItem(o.name,{state:A,version:o.version})},f=i.setState;i.setState=(A,_)=>{f(A,_),u()};const p=t((...A)=>{r(...A),u()},n,i);let b;const v=()=>{var A,_;if(!l)return;s=!1,a.forEach(P=>{var M;return P((M=n())!=null?M:p)});const N=((_=o.onRehydrateStorage)==null?void 0:_.call(o,(A=n())!=null?A:p))||void 0;return kl(l.getItem.bind(l))(o.name).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==o.version){if(o.migrate)return o.migrate(P.state,P.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return P.state}).then(P=>{var M;return b=o.merge(P,(M=n())!=null?M:p),r(b,!0),u()}).then(()=>{N==null||N(b,void 0),b=n(),s=!0,c.forEach(P=>P(b))}).catch(P=>{N==null||N(void 0,P)})};return i.persist={setOptions:A=>{o={...o,...A},A.storage&&(l=A.storage)},clearStorage:()=>{l==null||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:A=>(a.add(A),()=>{a.delete(A)}),onFinishHydration:A=>(c.add(A),()=>{c.delete(A)})},o.skipHydration||v(),b||p},Xx=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Gx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Jx(t,e)):Yx(t,e),Qx=Xx;var e_={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const b3=t=>{let e;const r=new Set,n=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const f=e;e=l??typeof u!="object"?u:Object.assign({},e,u),r.forEach(p=>p(e,f))}},i=()=>e,a={setState:n,getState:i,subscribe:c=>(r.add(c),()=>r.delete(c)),destroy:()=>{(e_?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return e=t(n,i,a),a},t_=t=>t?b3(t):b3;function r6(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[n,i]of t)if(!Object.is(i,e.get(n)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(e,r[n])||!Object.is(t[r[n]],e[r[n]]))return!1;return!0}function r_(t,e,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const f of t){let p=!1;for(const b of e){const v=b(f);v&&(p=!0,c.some(({id:A})=>A===f.id)||(c=[...c,v.chain]),l[f.id]=[...l[f.id]||[],...v.rpcUrls.http],v.rpcUrls.webSocket&&(u[f.id]=[...u[f.id]||[],...v.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:f})=>{const p=c.find(A=>A.id===f)??t[0],b=l[p.id];if(!b||!b[0])throw new Error(`No providers configured for chain "${p.id}"`);const v=w3({batch:r,chain:p,transport:p3(b.map(A=>$E(A,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(v,{chains:c})},webSocketPublicClient:({chainId:f})=>{const p=c.find(A=>A.id===f)??t[0],b=u[p.id];if(!b||!b[0])return;const v=w3({batch:r,chain:p,transport:p3(b.map(A=>Fx(A,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:n});return Object.assign(v,{chains:c})}}}var n_=class extends Error{constructor({activeChain:t,targetChain:e}){super(`Chain mismatch: Expected "${e}", received "${t}".`),this.name="ChainMismatchError"}},i_=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},o_=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},s_=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},a_=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},l1=(t,{find:e,replace:r})=>t&&e(t)?r(t):typeof t!="object"?t:Array.isArray(t)?t.map(n=>l1(n,{find:e,replace:r})):t instanceof Object?Object.entries(t).reduce((n,[i,o])=>({...n,[i]:l1(o,{find:e,replace:r})}),{}):t;function c_(t){const e=JSON.parse(t);return l1(e,{find:n=>typeof n=="string"&&n.startsWith("#bigint."),replace:n=>BigInt(n.replace("#bigint.",""))})}function l_(t){return{accessList:t.accessList,account:t.account,blockNumber:t.blockNumber,blockTag:t.blockTag,data:t.data,gas:t.gas,gasPrice:t.gasPrice,maxFeePerGas:t.maxFeePerGas,maxPriorityFeePerGas:t.maxPriorityFeePerGas,nonce:t.nonce,to:t.to,value:t.value}}function y3(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(S7[t])}function v3(t,e){return t.slice(0,e).join(".")||"."}function E3(t,e){const{length:r}=t;for(let n=0;n<r;++n)if(t[n]===e)return n+1;return 0}function u_(t,e){const r=typeof t=="function",n=typeof e=="function",i=[],o=[];return function(a,c){if(typeof c=="object")if(i.length){const l=E3(i,this);l===0?i[i.length]=this:(i.splice(l),o.splice(l)),o[o.length]=a;const u=E3(i,c);if(u!==0)return n?e.call(this,a,c,v3(o,u)):`[ref=${v3(o,u)}]`}else i[0]=c,o[0]=a;return r?t.call(this,a,c):c}}function f_(t,e,r,n){return JSON.stringify(t,u_((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(e==null?void 0:e(i,s))||s},n),r??void 0)}var d_={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function h_({deserialize:t=c_,key:e="wagmi",serialize:r=f_,storage:n}){return{...n,getItem:(i,o=null)=>{const s=n.getItem(`${e}.${i}`);try{return s?t(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)n.removeItem(`${e}.${i}`);else try{n.setItem(`${e}.${i}`,r(o))}catch(s){console.error(s)}},removeItem:i=>n.removeItem(`${e}.${i}`)}}var x3="store",Ys,jc,u1,n6,p_=class{constructor({autoConnect:t=!1,connectors:e=[new jp],publicClient:r,storage:n=h_({storage:typeof window<"u"?window.localStorage:d_}),logger:i={warn:console.warn},webSocketPublicClient:o}){var l,u;Zd(this,u1),this.publicClients=new Map,this.webSocketPublicClients=new Map,Zd(this,Ys,void 0),Zd(this,jc,void 0),this.args={autoConnect:t,connectors:e,logger:i,publicClient:r,storage:n,webSocketPublicClient:o};let s="disconnected",a;if(t)try{const f=n.getItem(x3),p=(l=f==null?void 0:f.state)==null?void 0:l.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(u=p==null?void 0:p.chain)==null?void 0:u.id}catch{}const c=typeof e=="function"?e():e;c.forEach(f=>f.setStorage(n)),this.store=t_(Kx(Qx(()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:x3,storage:n,partialize:f=>{var p,b;return{...t&&{data:{account:(p=f==null?void 0:f.data)==null?void 0:p.account,chain:(b=f==null?void 0:f.data)==null?void 0:b.chain}},chains:f==null?void 0:f.chains}},version:2}))),this.storage=n,Ku(this,jc,n==null?void 0:n.getItem("wallet")),qx(this,u1,n6).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Ku(this,Ys,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Kd(this,Ys))return;Ku(this,Ys,!0),this.setState(r=>{var n;return{...r,status:(n=r.data)!=null&&n.account?"reconnecting":"connecting"}});const t=Kd(this,jc)?[...this.connectors].sort(r=>r.id===Kd(this,jc)?-1:1):this.connectors;let e=!1;for(const r of t){if(!r.ready||!r.isAuthorized||!await r.isAuthorized())continue;const i=await r.connect();this.setState(o=>({...o,connector:r,chains:r==null?void 0:r.chains,data:i,status:"connected"})),e=!0;break}return e||this.setState(r=>({...r,data:void 0,status:"disconnected"})),Ku(this,Ys,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(r=>r.setStorage(this.args.storage)),this.setState(r=>({...r,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,this.publicClients.set(t??-1,e),e}setPublicClient(t){var r,n;const e=(n=(r=this.data)==null?void 0:r.chain)==null?void 0:n.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var r,n;const e=(n=(r=this.data)==null?void 0:r.chain)==null?void 0:n.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};Ys=new WeakMap;jc=new WeakMap;u1=new WeakSet;n6=function(){const t=a=>{this.setState(c=>({...c,data:{...c.data,...a}}))},e=()=>{this.clearState()},r=a=>{this.setState(c=>({...c,error:a}))};this.store.subscribe(({connector:a})=>a,(a,c)=>{var l,u,f,p,b,v;(l=c==null?void 0:c.off)==null||l.call(c,"change",t),(u=c==null?void 0:c.off)==null||u.call(c,"disconnect",e),(f=c==null?void 0:c.off)==null||f.call(c,"error",r),a&&((p=a.on)==null||p.call(a,"change",t),(b=a.on)==null||b.call(a,"disconnect",e),(v=a.on)==null||v.call(a,"error",r))});const{publicClient:n,webSocketPublicClient:i}=this.args;(typeof n=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var c;return(c=a==null?void 0:a.chain)==null?void 0:c.id},a=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var f1;function g_(t){const e=new p_(t);return f1=e,e}function xi(){if(!f1)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return f1}async function _3({chainId:t,connector:e}){const r=xi(),n=r.connector;if(n&&e.id===n.id)throw new o_;try{r.setState(o=>({...o,status:"connecting"}));const i=await e.connect({chainId:t});return r.setLastUsedConnector(e.id),r.setState(o=>({...o,connector:e,chains:e==null?void 0:e.chains,data:i,status:"connected"})),r.storage.setItem("connected",!0),{...i,connector:e}}catch(i){throw r.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function i6(){const t=xi();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var m_=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],w_=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Oo({chainId:t}={}){const e=xi();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function o6({chainId:t}={}){var n,i;return await((i=(n=xi().connector)==null?void 0:n.getWalletClient)==null?void 0:i.call(n,{chainId:t}))||null}async function b_({abi:t,address:e,args:r,chainId:n,dataSuffix:i,functionName:o,walletClient:s,...a}){const c=Oo({chainId:n}),l=s??await o6({chainId:n});if(!l)throw new Mi;n&&c6({chainId:n});const{account:u,accessList:f,blockNumber:p,blockTag:b,gas:v,gasPrice:A,maxFeePerGas:_,maxPriorityFeePerGas:N,nonce:P,value:M}=l_(a),{result:D,request:R}=await c.simulateContract({abi:t,address:e,functionName:o,args:r,account:u||l.account,accessList:f,blockNumber:p,blockTag:b,dataSuffix:i,gas:v,gasPrice:A,maxFeePerGas:_,maxPriorityFeePerGas:N,nonce:P,value:M}),W=t.filter(w=>"name"in w&&w.name===o);return{mode:"prepared",request:{...R,abi:W,chainId:n},result:D}}async function y_({chainId:t,contracts:e,blockNumber:r,blockTag:n,...i}){const o=Oo({chainId:t});if(!o.chains)throw new s_;if(t&&o.chain.id!==t)throw new i_({chainId:t});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:e})}async function v_({address:t,account:e,chainId:r,abi:n,args:i,functionName:o,blockNumber:s,blockTag:a}){return Oo({chainId:r}).readContract({abi:n,address:t,account:e,functionName:o,args:i,blockNumber:s,blockTag:a})}async function E_({contracts:t,blockNumber:e,blockTag:r,...n}){const{allowFailure:i=!0}=n;try{const o=Oo(),s=t.reduce((u,f,p)=>{const b=f.chainId??o.chain.id;return{...u,[b]:[...u[b]||[],{contract:f,index:p}]}},{}),a=()=>Object.entries(s).map(([u,f])=>y_({allowFailure:i,chainId:parseInt(u),contracts:f.map(({contract:p})=>p),blockNumber:e,blockTag:r})),c=(await Promise.all(a())).flat(),l=Object.values(s).flatMap(u=>u.map(({index:f})=>f));return c.reduce((u,f,p)=>(u&&(u[l[p]]=f),u),[])}catch(o){if(o instanceof Ep)throw o;const s=()=>t.map(a=>v_({...a,blockNumber:e,blockTag:r}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function ga(t){const e=await o6({chainId:t.chainId});if(!e)throw new Mi;t.chainId&&c6({chainId:t.chainId});let r;if(t.mode==="prepared")r=t.request;else{const{chainId:i,mode:o,...s}=t;r=(await b_(s)).request}return{hash:await e.writeContract({...r,chain:t.chainId?{id:t.chainId}:null})}}async function x_({address:t,chainId:e,formatUnits:r,token:n}){const i=xi(),o=Oo({chainId:e});if(n){const l=async({abi:u})=>{const f={abi:u,address:n,chainId:e},[p,b,v]=await E_({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[t]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:b,formatted:$0(p??"0",y3(r??b)),symbol:v,value:p}};try{return await l({abi:m_})}catch(u){if(u instanceof Ep){const{symbol:f,...p}=await l({abi:w_});return{symbol:fp(os(f,{dir:"right"})),...p}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:t}),c=s.find(l=>l.id===o.chain.id);return{decimals:(c==null?void 0:c.nativeCurrency.decimals)??18,formatted:$0(a??"0",y3(r??18)),symbol:(c==null?void 0:c.nativeCurrency.symbol)??"ETH",value:a}}function Ui(){const{data:t,connector:e,status:r}=xi();switch(r){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function Tl(){var i,o,s,a;const t=xi(),e=(o=(i=t.data)==null?void 0:i.chain)==null?void 0:o.id,r=t.chains??[],n=[...((s=t.publicClient)==null?void 0:s.chains)||[],...r].find(c=>c.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...n,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:r}}async function s6({chainId:t}){const{connector:e}=xi();if(!e)throw new Mi;if(!e.switchChain)throw new a_({connector:e});return e.switchChain(t)}function a6(t,{selector:e=r=>r}={}){const r=xi(),n=()=>t(Ui());return r.subscribe(({data:o,connector:s,status:a})=>e({address:o==null?void 0:o.account,connector:s,status:a}),n,{equalityFn:r6})}function __(t,{selector:e=r=>r}={}){const r=xi(),n=()=>t(Tl());return r.subscribe(({data:o,chains:s})=>{var a;return e({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},n,{equalityFn:r6})}async function C_({name:t,chainId:e}){const{normalize:r}=await ka(()=>import("./index-GT8939XP.js"),__vite__mapDeps([]));return await Oo({chainId:e}).getEnsAvatar({name:r(t)})}async function A_({address:t,chainId:e}){return Oo({chainId:e}).getEnsName({address:Dn(t)})}async function ma({chainId:t,confirmations:e=1,hash:r,onReplaced:n,timeout:i=0}){const o=Oo({chainId:t}),s=await o.waitForTransactionReceipt({hash:r,confirmations:e,onReplaced:n,timeout:i});if(s.status==="reverted"){const a=await o.getTransaction({hash:s.transactionHash}),c=await o.call({...a,gasPrice:a.type!=="eip1559"?a.gasPrice:void 0,maxFeePerGas:a.type==="eip1559"?a.maxFeePerGas:void 0,maxPriorityFeePerGas:a.type==="eip1559"?a.maxPriorityFeePerGas:void 0}),l=fp(`0x${c.substring(138)}`);throw new Error(l)}return s}function c6({chainId:t}){var i,o;const{chain:e,chains:r}=Tl(),n=e==null?void 0:e.id;if(n&&t!==n)throw new n_({activeChain:((i=r.find(s=>s.id===n))==null?void 0:i.name)??`Chain ${n}`,targetChain:((o=r.find(s=>s.id===t))==null?void 0:o.name)??`Chain ${t}`})}const S_=Symbol(),C3=Object.getPrototypeOf,d1=new WeakMap,P_=t=>t&&(d1.has(t)?d1.get(t):C3(t)===Object.prototype||C3(t)===Array.prototype),k_=t=>P_(t)&&t[S_]||null,A3=(t,e=!0)=>{d1.set(t,e)};var L0={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Jd=t=>typeof t=="object"&&t!==null,io=new WeakMap,Wc=new WeakSet,T_=(t=Object.is,e=(l,u)=>new Proxy(l,u),r=l=>Jd(l)&&!Wc.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),n=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},i=new WeakMap,o=(l,u,f=n)=>{const p=i.get(l);if((p==null?void 0:p[0])===u)return p[1];const b=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return A3(b,!0),i.set(l,[u,b]),Reflect.ownKeys(l).forEach(v=>{if(Object.getOwnPropertyDescriptor(b,v))return;const A=Reflect.get(l,v),_={value:A,enumerable:!0,configurable:!0};if(Wc.has(A))A3(A,!1);else if(A instanceof Promise)delete _.value,_.get=()=>f(A);else if(io.has(A)){const[N,P]=io.get(A);_.value=o(N,P(),f)}Object.defineProperty(b,v,_)}),Object.preventExtensions(b)},s=new WeakMap,a=[1,1],c=l=>{if(!Jd(l))throw new Error("object required");const u=s.get(l);if(u)return u;let f=a[0];const p=new Set,b=(X,te=++a[0])=>{f!==te&&(f=te,p.forEach(L=>L(X,te)))};let v=a[1];const A=(X=++a[1])=>(v!==X&&!p.size&&(v=X,N.forEach(([te])=>{const L=te[1](X);L>f&&(f=L)})),f),_=X=>(te,L)=>{const h=[...te];h[1]=[X,...h[1]],b(h,L)},N=new Map,P=(X,te)=>{if((L0?"production":void 0)!=="production"&&N.has(X))throw new Error("prop listener already exists");if(p.size){const L=te[3](_(X));N.set(X,[te,L])}else N.set(X,[te])},M=X=>{var te;const L=N.get(X);L&&(N.delete(X),(te=L[1])==null||te.call(L))},D=X=>(p.add(X),p.size===1&&N.forEach(([L,h],C)=>{if((L0?"production":void 0)!=="production"&&h)throw new Error("remove already exists");const I=L[3](_(C));N.set(C,[L,I])}),()=>{p.delete(X),p.size===0&&N.forEach(([L,h],C)=>{h&&(h(),N.set(C,[L]))})}),R=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),w=e(R,{deleteProperty(X,te){const L=Reflect.get(X,te);M(te);const h=Reflect.deleteProperty(X,te);return h&&b(["delete",[te],L]),h},set(X,te,L,h){const C=Reflect.has(X,te),I=Reflect.get(X,te,h);if(C&&(t(I,L)||s.has(L)&&t(I,s.get(L))))return!0;M(te),Jd(L)&&(L=k_(L)||L);let $=L;if(L instanceof Promise)L.then(O=>{L.status="fulfilled",L.value=O,b(["resolve",[te],O])}).catch(O=>{L.status="rejected",L.reason=O,b(["reject",[te],O])});else{!io.has(L)&&r(L)&&($=c(L));const O=!Wc.has($)&&io.get($);O&&P(te,O)}return Reflect.set(X,te,$,h),b(["set",[te],L,I]),!0}});s.set(l,w);const H=[R,A,o,D];return io.set(w,H),Reflect.ownKeys(l).forEach(X=>{const te=Object.getOwnPropertyDescriptor(l,X);"value"in te&&(w[X]=l[X],delete te.value,delete te.writable),Object.defineProperty(R,X,te)}),w})=>[c,io,Wc,t,e,r,n,i,o,s,a],[I_]=T_();function Ur(t={}){return I_(t)}function Do(t,e,r){const n=io.get(t);(L0?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let i;const o=[],s=n[3];let a=!1;const l=s(u=>{if(o.push(u),r){e(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&e(o.splice(0))}))});return a=!0,()=>{a=!1,l()}}function $L(t,e){const r=io.get(t);(L0?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[n,i,o]=r;return o(n,i(),e)}function Il(t){return Wc.add(t),t}function Fn(t,e,r,n){let i=t[e];return Do(t,()=>{const o=t[e];Object.is(i,o)||r(i=o)},n)}const zc={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},$e={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=navigator.userAgent.toLowerCase();return $e.isMobile()&&t.includes("android")},isIos(){const t=navigator.userAgent.toLowerCase();return $e.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=zc.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=zc.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+zc.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...n)=>{function i(){t(...n)}r&&clearTimeout(r),r=setTimeout(i,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if($e.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(t,e){if(!$e.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((r,n)=>{const i=new Image;i.onload=r,i.onerror=n,i.crossOrigin="anonymous",i.src=t});return Promise.race([e,$e.wait(2e3)])},formatBalance(t,e){var n;let r;if(t==="0")r="0.000";else if(typeof t=="string"){const i=Number(t);i&&(r=(n=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return r?`${r} ${e}`:"0.000"},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return zc.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return $e.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return $e.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return $e.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}},tr=Ur({isConnected:!1}),St={state:tr,subscribe(t){return Do(tr,()=>t(tr))},subscribeKey(t,e){return Fn(tr,t,e)},setIsConnected(t){tr.isConnected=t},setCaipAddress(t){tr.caipAddress=t,tr.address=t?$e.getPlainAddress(t):void 0},setBalance(t,e){tr.balance=t,tr.balanceSymbol=e},setProfileName(t){tr.profileName=t},setProfileImage(t){tr.profileImage=t},setAddressExplorerUrl(t){tr.addressExplorerUrl=t},resetAccount(){tr.isConnected=!1,tr.caipAddress=void 0,tr.address=void 0,tr.balance=void 0,tr.balanceSymbol=void 0,tr.profileName=void 0,tr.profileImage=void 0,tr.addressExplorerUrl=void 0}};class zp{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).json()}async getBlob({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).blob()}async post({body:e,headers:r,...n}){const i=this.createUrl(n);return(await fetch(i,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:r,...n}){const i=this.createUrl(n);return(await fetch(i,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:r,...n}){const i=this.createUrl(n);return(await fetch(i,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:r}){const n=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([i,o])=>{o&&n.searchParams.append(i,o)}),n}}const Yd="WALLETCONNECT_DEEPLINK_CHOICE",S3="@w3m/recent",P3="@w3m/connected_wallet_image_url",hn={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Yd,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(Yd);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Yd)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=hn.getRecentWallets();e.find(n=>n.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(S3,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(S3);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(P3,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(P3)}catch{console.info("Unable to set Connected Wallet Image Url")}}},eo=Ur({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),go={state:eo,subscribeNetworkImages(t){return Do(eo.networkImages,()=>t(eo.networkImages))},subscribeKey(t,e){return Fn(eo,t,e)},setWalletImage(t,e){eo.walletImages[t]=e},setNetworkImage(t,e){eo.networkImages[t]=e},setConnectorImage(t,e){eo.connectorImages[t]=e},setTokenImage(t,e){eo.tokenImages[t]=e}},kc=Ur({connectors:[]}),pn={state:kc,subscribeKey(t,e){return Fn(kc,t,e)},setConnectors(t){kc.connectors=t.map(e=>Il(e))},addConnector(t){kc.connectors.push(Il(t))},getConnectors(){return kc.connectors}},Tc=Ur({open:!1,selectedNetworkId:void 0}),Ta={state:Tc,subscribe(t){return Do(Tc,()=>t(Tc))},set(t){Object.assign(Tc,{...Tc,...t})}},Cr=Ur({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),zt={state:Cr,subscribeKey(t,e){return Fn(Cr,t,e)},_getClient(){if(!Cr._client)throw new Error("NetworkController client not set");return Cr._client},setClient(t){Cr._client=Il(t)},setCaipNetwork(t){Cr.caipNetwork=t,Ta.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){Cr.caipNetwork=t,Ta.set({selectedNetworkId:t==null?void 0:t.id}),Cr.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){Cr.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();Cr.supportsAllNetworks=t.supportsAllNetworks,Cr.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),Cr.caipNetwork=t},resetNetwork(){Cr.isDefaultCaipNetwork||(Cr.caipNetwork=void 0),Cr.approvedCaipNetworkIds=void 0,Cr.supportsAllNetworks=!0}},Qr=Ur({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),bt={state:Qr,subscribeKey(t,e){return Fn(Qr,t,e)},setProjectId(t){Qr.projectId=t},setIncludeWalletIds(t){Qr.includeWalletIds=t},setExcludeWalletIds(t){Qr.excludeWalletIds=t},setFeaturedWalletIds(t){Qr.featuredWalletIds=t},setTokens(t){Qr.tokens=t},setTermsConditionsUrl(t){Qr.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Qr.privacyPolicyUrl=t},setCustomWallets(t){Qr.customWallets=t},setEnableAnalytics(t){Qr.enableAnalytics=t},setSdkVersion(t){Qr.sdkVersion=t},setMetadata(t){Qr.metadata=t}},$_=$e.getApiUrl(),Zn=new zp({baseUrl:$_}),N_="40",k3="4",Nr=Ur({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),st={state:Nr,subscribeKey(t,e){return Fn(Nr,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=bt.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _fetchWalletImage(t){const e=`${Zn.baseUrl}/getWalletImage/${t}`,r=await Zn.getBlob({path:e,headers:st._getApiHeaders()});go.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${Zn.baseUrl}/public/getAssetImage/${t}`,r=await Zn.getBlob({path:e,headers:st._getApiHeaders()});go.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${Zn.baseUrl}/public/getAssetImage/${t}`,r=await Zn.getBlob({path:e,headers:st._getApiHeaders()});go.setConnectorImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=zt.state,e=t==null?void 0:t.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>st._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=pn.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>st._fetchConnectorImage(r)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=bt.state;if(t!=null&&t.length){const{data:e}=await Zn.get({path:"/getWallets",headers:st._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):k3,include:t==null?void 0:t.join(",")}});e.sort((n,i)=>t.indexOf(n.id)-t.indexOf(i.id));const r=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(r.map(n=>st._fetchWalletImage(n))),Nr.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=bt.state,n=[...e??[],...r??[]].filter(Boolean),{data:i,count:o}=await Zn.get({path:"/getWallets",headers:st._getApiHeaders(),params:{page:"1",entries:k3,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),s=hn.getRecentWallets(),a=i.map(l=>l.image_id).filter(Boolean),c=s.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>st._fetchWalletImage(l))),Nr.recommended=i,Nr.count=o??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:n}=bt.state,i=[...Nr.recommended.map(({id:c})=>c),...r??[],...n??[]].filter(Boolean),{data:o,count:s}=await Zn.get({path:"/getWallets",headers:st._getApiHeaders(),params:{page:String(t),entries:N_,include:e==null?void 0:e.join(","),exclude:i.join(",")}}),a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>st._fetchWalletImage(c)),$e.wait(300)]),Nr.wallets=[...Nr.wallets,...o],Nr.count=s>Nr.count?s:Nr.count,Nr.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:r}=bt.state;Nr.search=[];const{data:n}=await Zn.get({path:"/getWallets",headers:st._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),i=n.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>st._fetchWalletImage(o)),$e.wait(300)]),Nr.search=n},prefetch(){Nr.prefetchPromise=Promise.race([Promise.allSettled([st.fetchFeaturedWallets(),st.fetchRecommendedWallets(),st.fetchNetworkImages(),st.fetchConnectorImages()]),$e.wait(3e3)])}},M_=$e.getAnalyticsUrl(),O_=new zp({baseUrl:M_}),D_=["MODAL_CREATED"],zs=Ur({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Pt={state:zs,subscribe(t){return Do(zs,()=>t(zs))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=bt.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _sendAnalyticsEvent(t){try{if(D_.includes(t.data.event)||typeof window>"u")return;await O_.post({path:"/e",headers:Pt._getApiHeaders(),body:{eventId:$e.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){zs.timestamp=Date.now(),zs.data=t,bt.state.enableAnalytics&&Pt._sendAnalyticsEvent(zs)}},br=Ur({view:"Connect",history:["Connect"]}),Ve={state:br,subscribeKey(t,e){return Fn(br,t,e)},push(t,e){t!==br.view&&(br.view=t,br.history.push(t),br.data=e)},reset(t){br.view=t,br.history=[t]},replace(t){br.history.length>1&&br.history.at(-1)!==t&&(br.view=t,br.history[br.history.length-1]=t)},goBack(){if(br.history.length>1){br.history.pop();const[t]=br.history.slice(-1);t&&(br.view=t)}}},Zu=Ur({open:!1}),gr={state:Zu,subscribeKey(t,e){return Fn(Zu,t,e)},async open(t){await st.state.prefetchPromise,t!=null&&t.view?Ve.reset(t.view):St.state.isConnected?Ve.reset("Account"):Ve.reset("Connect"),Zu.open=!0,Ta.set({open:!0}),Pt.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Zu.open=!1,Ta.set({open:!1}),Pt.sendEvent({type:"track",event:"MODAL_CLOSE"})}},R_=$e.getBlockchainApiUrl(),T3=new zp({baseUrl:R_}),l6={fetchIdentity({caipChainId:t,address:e}){return T3.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:bt.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:r}){const n=r?{cursor:r}:{};return T3.get({path:`/v1/account/${t}/history?projectId=${e}`,params:n})}},Ii=Ur({message:"",variant:"success",open:!1}),gn={state:Ii,subscribeKey(t,e){return Fn(Ii,t,e)},showSuccess(t){Ii.message=t,Ii.variant="success",Ii.open=!0},showError(t){Ii.message=t,Ii.variant="error",Ii.open=!0},hide(){Ii.open=!1}},rr=Ur({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),kn={state:rr,subscribe(t){return Do(rr,()=>t(rr))},async fetchTransactions(t){const{projectId:e}=bt.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");rr.loading=!0;try{const r=await l6.fetchTransactions({account:t,projectId:e,cursor:rr.next}),n=this.filterSpamTransactions(r.data),i=[...rr.transactions,...n];rr.loading=!1,rr.transactions=i,rr.transactionsByYear=this.groupTransactionsByYear(rr.transactionsByYear,n),rr.empty=i.length===0,rr.next=r.next?r.next:void 0}catch{Pt.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:rr.next}}),gn.showError("Failed to fetch transactions"),rr.loading=!1,rr.empty=!0}},groupTransactionsByYear(t={},e=[]){const r=t;return e.forEach(n=>{var o;const i=new Date(n.metadata.minedAt).getFullYear();r[i]||(r[i]=[]),(o=r[i])==null||o.push(n)}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(n=>{var i;return((i=n.nft_info)==null?void 0:i.flags.is_spam)===!0}))},resetTransactions(){rr.transactions=[],rr.transactionsByYear={},rr.loading=!1,rr.empty=!1,rr.next=void 0}},hr=Ur({wcError:!1,buffering:!1}),yt={state:hr,subscribeKey(t,e){return Fn(hr,t,e)},_getClient(){if(!hr._client)throw new Error("ConnectionController client not set");return hr._client},setClient(t){hr._client=Il(t)},connectWalletConnect(){hr.wcPromise=this._getClient().connectWalletConnect(t=>{hr.wcUri=t,hr.wcPairingExpiry=$e.getPairingExpiry()})},async connectExternal(t){var e,r;await((r=(e=this._getClient()).connectExternal)==null?void 0:r.call(e,t))},checkInstalled(t){var e,r;return(r=(e=this._getClient()).checkInstalled)==null?void 0:r.call(e,t)},resetWcConnection(){hr.wcUri=void 0,hr.wcPairingExpiry=void 0,hr.wcPromise=void 0,hr.wcLinking=void 0,hr.recentWallet=void 0,kn.resetTransactions(),hn.deleteWalletConnectDeepLink()},setWcLinking(t){hr.wcLinking=t},setWcError(t){hr.wcError=t,hr.buffering=!1},setRecentWallet(t){hr.recentWallet=t},setBuffering(t){hr.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},cn=Ur({status:"uninitialized"}),Jn={state:cn,subscribeKey(t,e){return Fn(cn,t,e)},subscribe(t){return Do(cn,()=>t(cn))},_getClient(){if(!cn._client)throw new Error("SIWEController client not set");return cn._client},setSIWEClient(t){cn._client=Il(t),cn.status="ready"},setNonce(t){cn.nonce=t},setStatus(t){cn.status=t},setMessage(t){cn.message=t},setSession(t){cn.session=t}},Hs=Ur({themeMode:"dark",themeVariables:{}}),un={state:Hs,subscribe(t){return Do(Hs,()=>t(Hs))},setThemeMode(t){Hs.themeMode=t},setThemeVariables(t){Hs.themeVariables={...Hs.themeVariables,...t}}},nr={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return go.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return go.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return go.state.connectorImages[t.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w0=globalThis,Hp=w0.ShadowRoot&&(w0.ShadyCSS===void 0||w0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qp=Symbol(),I3=new WeakMap;let u6=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==qp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Hp&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=I3.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&I3.set(r,e))}return e}toString(){return this.cssText}};const Xn=t=>new u6(typeof t=="string"?t:t+"",void 0,qp),Me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new u6(r,t,qp)},B_=(t,e)=>{if(Hp)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=w0.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},$3=Hp?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Xn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:L_,defineProperty:U_,getOwnPropertyDescriptor:F_,getOwnPropertyNames:j_,getOwnPropertySymbols:W_,getPrototypeOf:z_}=Object,mo=globalThis,N3=mo.trustedTypes,H_=N3?N3.emptyScript:"",Xd=mo.reactiveElementPolyfillSupport,Zc=(t,e)=>t,U0={toAttribute(t,e){switch(e){case Boolean:t=t?H_:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Gp=(t,e)=>!L_(t,e),M3={attribute:!0,type:String,converter:U0,reflect:!1,hasChanged:Gp};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),mo.litPropertyMetadata??(mo.litPropertyMetadata=new WeakMap);let Xs=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=M3){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&U_(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=F_(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??M3}static _$Ei(){if(this.hasOwnProperty(Zc("elementProperties")))return;const e=z_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Zc("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zc("properties"))){const r=this.properties,n=[...j_(r),...W_(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift($3(i))}else e!==void 0&&r.push($3(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$E_)==null||r.delete(e)}_$ES(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return B_(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:U0).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:U0;this._$Em=i,this[i]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,n,i=!1,o){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Gp)(i?o:this[e],r))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$E_)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}};Xs.elementStyles=[],Xs.shadowRootOptions={mode:"open"},Xs[Zc("elementProperties")]=new Map,Xs[Zc("finalized")]=new Map,Xd==null||Xd({ReactiveElement:Xs}),(mo.reactiveElementVersions??(mo.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jc=globalThis,F0=Jc.trustedTypes,O3=F0?F0.createPolicy("lit-html",{createHTML:t=>t}):void 0,f6="$lit$",ao=`lit$${(Math.random()+"").slice(9)}$`,d6="?"+ao,q_=`<${d6}>`,hs=document,$l=()=>hs.createComment(""),Nl=t=>t===null||typeof t!="object"&&typeof t!="function",h6=Array.isArray,G_=t=>h6(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Qd=`[ 	
\f\r]`,Ic=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D3=/-->/g,R3=/>/g,Ko=RegExp(`>|${Qd}(?:([^\\s"'>=/]+)(${Qd}*=${Qd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B3=/'/g,L3=/"/g,p6=/^(?:script|style|textarea|title)$/i,g6=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),pe=g6(1),ve=g6(2),ps=Symbol.for("lit-noChange"),Qt=Symbol.for("lit-nothing"),U3=new WeakMap,ts=hs.createTreeWalker(hs,129);function m6(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return O3!==void 0?O3.createHTML(e):e}const V_=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=Ic;for(let a=0;a<r;a++){const c=t[a];let l,u,f=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Ic?u[1]==="!--"?s=D3:u[1]!==void 0?s=R3:u[2]!==void 0?(p6.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Ko):u[3]!==void 0&&(s=Ko):s===Ko?u[0]===">"?(s=i??Ic,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Ko:u[3]==='"'?L3:B3):s===L3||s===B3?s=Ko:s===D3||s===R3?s=Ic:(s=Ko,i=void 0);const b=s===Ko&&t[a+1].startsWith("/>")?" ":"";o+=s===Ic?c+q_:f>=0?(n.push(l),c.slice(0,f)+f6+c.slice(f)+ao+b):c+ao+(f===-2?a:b)}return[m6(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};let h1=class w6{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=e.length-1,c=this.parts,[l,u]=V_(e,r);if(this.el=w6.createElement(l,n),ts.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=ts.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(f6)){const p=u[s++],b=i.getAttribute(f).split(ao),v=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:v[2],strings:b,ctor:v[1]==="."?Z_:v[1]==="?"?J_:v[1]==="@"?Y_:Wf}),i.removeAttribute(f)}else f.startsWith(ao)&&(c.push({type:6,index:o}),i.removeAttribute(f));if(p6.test(i.tagName)){const f=i.textContent.split(ao),p=f.length-1;if(p>0){i.textContent=F0?F0.emptyScript:"";for(let b=0;b<p;b++)i.append(f[b],$l()),ts.nextNode(),c.push({type:2,index:++o});i.append(f[p],$l())}}}else if(i.nodeType===8)if(i.data===d6)c.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(ao,f+1))!==-1;)c.push({type:7,index:o}),f+=ao.length-1}o++}}static createElement(e,r){const n=hs.createElement("template");return n.innerHTML=e,n}};function Ia(t,e,r=t,n){var s,a;if(e===ps)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Nl(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Ia(t,i._$AS(t,e.values),i,n)),e}let K_=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??hs).importNode(r,!0);ts.currentNode=i;let o=ts.nextNode(),s=0,a=0,c=n[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Vp(o,o.nextSibling,this,e):c.type===1?l=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(l=new X_(o,this,e)),this._$AV.push(l),c=n[++a]}s!==(c==null?void 0:c.index)&&(o=ts.nextNode(),s++)}return ts.currentNode=hs,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},Vp=class b6{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ia(this,e,r),Nl(e)?e===Qt||e==null||e===""?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):e!==this._$AH&&e!==ps&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):G_(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qt&&Nl(this._$AH)?this._$AA.nextSibling.data=e:this.$(hs.createTextNode(e)),this._$AH=e}g(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=h1.createElement(m6(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new K_(i,this),a=s.u(this.options);s.p(r),this.$(a),this._$AH=s}}_$AC(e){let r=U3.get(e.strings);return r===void 0&&U3.set(e.strings,r=new h1(e)),r}T(e){h6(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new b6(this.k($l()),this.k($l()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Wf=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Qt}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Ia(this,e,r,0),s=!Nl(e)||e!==this._$AH&&e!==ps,s&&(this._$AH=e);else{const a=e;let c,l;for(e=o[0],c=0;c<o.length-1;c++)l=Ia(this,a[n+c],r,c),l===ps&&(l=this._$AH[c]),s||(s=!Nl(l)||l!==this._$AH[c]),l===Qt?e=Qt:e!==Qt&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}s&&!i&&this.O(e)}O(e){e===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Z_=class extends Wf{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Qt?void 0:e}},J_=class extends Wf{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Qt)}},Y_=class extends Wf{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Ia(this,e,r,0)??Qt)===ps)return;const n=this._$AH,i=e===Qt&&n!==Qt||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==Qt&&(n===Qt||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}},X_=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ia(this,e)}};const eh=Jc.litHtmlPolyfillSupport;eh==null||eh(h1,Vp),(Jc.litHtmlVersions??(Jc.litHtmlVersions=[])).push("3.1.0");const Q_=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new Vp(e.insertBefore($l(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let De=class extends Xs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Q_(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ps}};var Qw;De._$litElement$=!0,De.finalized=!0,(Qw=globalThis.litElementHydrateSupport)==null||Qw.call(globalThis,{LitElement:De});const th=globalThis.litElementPolyfillSupport;th==null||th({LitElement:De});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let Yc,wo,bo;function eC(t,e){Yc=document.createElement("style"),wo=document.createElement("style"),bo=document.createElement("style"),Yc.textContent=wa(t).core.cssText,wo.textContent=wa(t).dark.cssText,bo.textContent=wa(t).light.cssText,document.head.appendChild(Yc),document.head.appendChild(wo),document.head.appendChild(bo),y6(e)}function y6(t){wo&&bo&&(t==="light"?(wo.removeAttribute("media"),bo.media="enabled"):(bo.removeAttribute("media"),wo.media="enabled"))}function tC(t){Yc&&wo&&bo&&(Yc.textContent=wa(t).core.cssText,wo.textContent=wa(t).dark.cssText,bo.textContent=wa(t).light.cssText)}function wa(t){return{core:Me`
      :root {
        --w3m-color-mix-strength: ${Xn(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Xn((t==null?void 0:t["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Xn((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Xn((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Xn((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:Me`
      :root {
        --w3m-color-mix: ${Xn((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Xn((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:Me`
      :root {
        --w3m-color-mix: ${Xn((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Xn((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const We=Me`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,ur=Me`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Kp=Me`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function rC(t,e){const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(i){customElements.get(t)||customElements.define(t,i)}}}function nC(t,e){return customElements.get(t)||customElements.define(t,e),e}function ye(t){return function(r){return typeof r=="function"?nC(t,r):rC(t,r)}}const iC=Me`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var oC=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let p1=class extends De{render(){return pe`<slot></slot>`}};p1.styles=[We,iC];p1=oC([ye("wui-card")],p1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sC={attribute:!0,type:String,converter:U0,reflect:!1,hasChanged:Gp},aC=(t=sC,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(n==="setter"){const{name:s}=r;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+n)};function oe(t){return(e,r)=>typeof r=="object"?aC(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zp(t){return oe({...t,state:!0,attribute:!1})}const cC=Me`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,lC=ve`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,uC=ve`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,fC=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,dC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,hC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,pC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,gC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,mC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,wC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,bC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,yC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,vC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,EC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,xC=ve`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,_C=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,CC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,AC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,SC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,PC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,kC=ve` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,TC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,IC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,$C=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,NC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,MC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,OC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,DC=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,RC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,BC=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,LC=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,UC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,FC=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,jC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,WC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,zC=ve`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,HC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,qC=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,GC=ve` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,VC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,KC=ve`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ZC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,JC=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,YC=ve`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,XC=ve`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,QC=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,eA=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tA=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,rA=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,nA=ve`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,iA=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,oA=ve`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,sA=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var zf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const aA={allWallets:lC,appStore:uC,chromeStore:xC,apple:fC,arrowBottom:dC,arrowLeft:hC,arrowRight:pC,arrowTop:gC,browser:mC,checkmark:wC,chevronBottom:bC,chevronLeft:yC,chevronRight:vC,chevronTop:EC,clock:_C,close:CC,compass:SC,coinPlaceholder:AC,copy:PC,cursor:kC,desktop:TC,disconnect:IC,discord:$C,etherscan:NC,extension:MC,externalLink:OC,facebook:DC,filters:RC,github:BC,google:LC,helpCircle:UC,infoCircle:FC,mail:jC,mobile:WC,networkPlaceholder:zC,nftPlaceholder:HC,off:qC,playStore:GC,qrCode:VC,refresh:KC,search:ZC,swapHorizontal:JC,swapHorizontalBold:YC,swapVertical:XC,telegram:QC,twitch:eA,twitter:tA,twitterIcon:rA,wallet:iA,walletConnect:oA,walletPlaceholder:nA,warningCircle:sA};let $a=class extends De{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,pe`${aA[this.name]}`}};$a.styles=[We,Kp,cC];zf([oe()],$a.prototype,"size",void 0);zf([oe()],$a.prototype,"name",void 0);zf([oe()],$a.prototype,"color",void 0);$a=zf([ye("wui-icon")],$a);const cA=Me`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Jp=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ml=class extends De{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return pe`<img src=${this.src} alt=${this.alt} />`}};Ml.styles=[We,Kp,cA];Jp([oe()],Ml.prototype,"src",void 0);Jp([oe()],Ml.prototype,"alt",void 0);Ml=Jp([ye("wui-image")],Ml);const lA=Me`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var uA=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let g1=class extends De{render(){return pe`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};g1.styles=[We,lA];g1=uA([ye("wui-loading-hexagon")],g1);const fA=Me`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Yp=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ol=class extends De{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,pe`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ol.styles=[We,fA];Yp([oe()],Ol.prototype,"color",void 0);Yp([oe()],Ol.prototype,"size",void 0);Ol=Yp([ye("wui-loading-spinner")],Ol);const dA=Me`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var v6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let j0=class extends De{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,i=116+n,o=245+n,s=360+n*1.75;return pe`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};j0.styles=[We,dA];v6([oe({type:Number})],j0.prototype,"radius",void 0);j0=v6([ye("wui-loading-thumbnail")],j0);const hA=Me`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Hf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Na=class extends De{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,pe`<slot></slot>`}};Na.styles=[hA];Hf([oe()],Na.prototype,"width",void 0);Hf([oe()],Na.prototype,"height",void 0);Hf([oe()],Na.prototype,"borderRadius",void 0);Na=Hf([ye("wui-shimmer")],Na);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E6={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},x6=t=>(...e)=>({_$litDirective$:t,values:e});let _6=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pA=x6(class extends _6{constructor(t){var e;if(super(t),t.type!==E6.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.st)!=null&&n.has(o))&&this.it.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.it)o in e||(r.remove(o),this.it.delete(o));for(const o in e){const s=!!e[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return ps}}),gA=Me`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var qf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ma=class extends De{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,pe`<slot class=${pA(e)}></slot>`}};Ma.styles=[We,gA];qf([oe()],Ma.prototype,"variant",void 0);qf([oe()],Ma.prototype,"color",void 0);qf([oe()],Ma.prototype,"align",void 0);Ma=qf([ye("wui-text")],Ma);const mA=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,wA=ve`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,bA=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,yA=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,vA=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,EA=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,xA=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,_A=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,CA=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,AA=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,SA=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,PA=ve`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,kA=ve`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,TA=Me`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var C6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const IA={browser:mA,dao:wA,defi:bA,defiAlt:yA,eth:vA,layers:EA,lock:xA,login:_A,network:CA,nft:AA,noun:SA,profile:PA,system:kA};let W0=class extends De{constructor(){super(...arguments),this.name="browser"}render(){return pe`${IA[this.name]}`}};W0.styles=[We,TA];C6([oe()],W0.prototype,"name",void 0);W0=C6([ye("wui-visual")],W0);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=t=>t??Qt,Ot={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:n}){return t.length<=e+r?t:n==="end"?`${t.substring(0,e)}...`:n==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(r),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(n,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,n=e>>8&255,i=e&255;return[r,n,i]},tintColor(t,e){const[r,n,i]=t,o=Math.round(r+(255-r)*e),s=Math.round(n+(255-n)*e),a=Math.round(i+(255-i)*e);return[o,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},$A=Me`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var nn=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Br=class extends De{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ot.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ot.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ot.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ot.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ot.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ot.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ot.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ot.getSpacingStyles(this.margin,3)};
    `,pe`<slot></slot>`}};Br.styles=[We,$A];nn([oe()],Br.prototype,"flexDirection",void 0);nn([oe()],Br.prototype,"flexWrap",void 0);nn([oe()],Br.prototype,"flexBasis",void 0);nn([oe()],Br.prototype,"flexGrow",void 0);nn([oe()],Br.prototype,"flexShrink",void 0);nn([oe()],Br.prototype,"alignItems",void 0);nn([oe()],Br.prototype,"justifyContent",void 0);nn([oe()],Br.prototype,"columnGap",void 0);nn([oe()],Br.prototype,"rowGap",void 0);nn([oe()],Br.prototype,"gap",void 0);nn([oe()],Br.prototype,"padding",void 0);nn([oe()],Br.prototype,"margin",void 0);Br=nn([ye("wui-flex")],Br);const NA=Me`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Gf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Oa=class extends De{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return pe`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",pe`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ot.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Oa.styles=[We,NA];Gf([oe()],Oa.prototype,"imageSrc",void 0);Gf([oe()],Oa.prototype,"alt",void 0);Gf([oe()],Oa.prototype,"address",void 0);Oa=Gf([ye("wui-avatar")],Oa);const MA=Me`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Zi=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Bn=class extends De{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",n=r?"12%":"16%",i=r?"xxs":"3xl",o=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let c=`var(--wui-color-${this.backgroundColor})`;return a?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(c=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${a||o?"100%":n};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,pe` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Bn.styles=[We,ur,MA];Zi([oe()],Bn.prototype,"size",void 0);Zi([oe()],Bn.prototype,"backgroundColor",void 0);Zi([oe()],Bn.prototype,"iconColor",void 0);Zi([oe()],Bn.prototype,"iconSize",void 0);Zi([oe()],Bn.prototype,"background",void 0);Zi([oe({type:Boolean})],Bn.prototype,"border",void 0);Zi([oe()],Bn.prototype,"borderColor",void 0);Zi([oe()],Bn.prototype,"icon",void 0);Bn=Zi([ye("wui-icon-box")],Bn);const OA=Me`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var As=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Fi=class extends De{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return pe`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${ss(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ot.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?pe`<wui-image src=${this.networkSrc}></wui-image>`:pe`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return pe`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Fi.styles=[We,ur,OA];As([oe()],Fi.prototype,"networkSrc",void 0);As([oe()],Fi.prototype,"avatarSrc",void 0);As([oe()],Fi.prototype,"balance",void 0);As([oe({type:Boolean})],Fi.prototype,"disabled",void 0);As([oe({type:Boolean})],Fi.prototype,"isProfileName",void 0);As([oe()],Fi.prototype,"address",void 0);Fi=As([ye("wui-account-button")],Fi);const DA=Me`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var yu=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let gs=class extends De{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),pe` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?pe`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:pe`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};gs.styles=[We,DA];yu([oe()],gs.prototype,"size",void 0);yu([oe()],gs.prototype,"name",void 0);yu([oe()],gs.prototype,"imageSrc",void 0);yu([oe()],gs.prototype,"walletIcon",void 0);gs=yu([ye("wui-wallet-image")],gs);const RA=Me`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var A6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const rh=4;let z0=class extends De{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<rh;return pe`${this.walletImages.slice(0,rh).map(({src:r,walletName:n})=>pe`
          <wui-wallet-image
            size="inherit"
            imageSrc=${r}
            name=${ss(n)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(rh-this.walletImages.length)].map(()=>pe` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};z0.styles=[We,RA];A6([oe({type:Array})],z0.prototype,"walletImages",void 0);z0=A6([ye("wui-all-wallets-image")],z0);const BA=Me`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ic=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Co=class extends De{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return pe`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?pe`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:pe``}};Co.styles=[We,ur,BA];ic([oe()],Co.prototype,"size",void 0);ic([oe({type:Boolean})],Co.prototype,"disabled",void 0);ic([oe({type:Boolean})],Co.prototype,"fullWidth",void 0);ic([oe({type:Boolean})],Co.prototype,"loading",void 0);ic([oe()],Co.prototype,"variant",void 0);Co=ic([ye("wui-button")],Co);const S6=ve`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,LA=Me`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var P6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let H0=class extends De{constructor(){super(...arguments),this.type="wallet"}render(){return pe`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?pe` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${S6}`:pe`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};H0.styles=[We,ur,LA];P6([oe()],H0.prototype,"type",void 0);H0=P6([ye("wui-card-select-loader")],H0);const UA=ve`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,FA=Me`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var vu=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ms=class extends De{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,pe`${this.templateVisual()} ${e?UA:S6}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:pe`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ms.styles=[We,FA];vu([oe()],ms.prototype,"size",void 0);vu([oe()],ms.prototype,"name",void 0);vu([oe()],ms.prototype,"imageSrc",void 0);vu([oe({type:Boolean})],ms.prototype,"selected",void 0);ms=vu([ye("wui-network-image")],ms);const jA=Me`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var oc=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ao=class extends De{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return pe`
      <button data-selected=${ss(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?pe`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ss(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:pe`
      <wui-wallet-image size="md" imageSrc=${ss(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Ao.styles=[We,ur,jA];oc([oe()],Ao.prototype,"name",void 0);oc([oe()],Ao.prototype,"type",void 0);oc([oe()],Ao.prototype,"imageSrc",void 0);oc([oe({type:Boolean})],Ao.prototype,"disabled",void 0);oc([oe({type:Boolean})],Ao.prototype,"selected",void 0);Ao=oc([ye("wui-card-select")],Ao);const WA=Me`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var sc=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let So=class extends De{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return pe`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Ot.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?pe`<wui-image src=${this.imageSrc}></wui-image>`:null}};So.styles=[We,ur,WA];sc([oe()],So.prototype,"variant",void 0);sc([oe()],So.prototype,"imageSrc",void 0);sc([oe({type:Boolean})],So.prototype,"disabled",void 0);sc([oe()],So.prototype,"icon",void 0);sc([oe()],So.prototype,"href",void 0);So=sc([ye("wui-chip")],So);const zA=Me`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Xp=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Dl=class extends De{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return pe`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?pe`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Dl.styles=[We,ur,zA];Xp([oe()],Dl.prototype,"size",void 0);Xp([oe({type:Boolean})],Dl.prototype,"loading",void 0);Dl=Xp([ye("wui-connect-button")],Dl);const HA=Me`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Vf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Da=class extends De{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return pe`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Da.styles=[We,ur,HA];Vf([oe({type:Boolean})],Da.prototype,"disabled",void 0);Vf([oe()],Da.prototype,"label",void 0);Vf([oe()],Da.prototype,"buttonLabel",void 0);Da=Vf([ye("wui-cta-button")],Da);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qA=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xc=(t,e)=>{var n;const r=t._$AN;if(r===void 0)return!1;for(const i of r)(n=i._$AO)==null||n.call(i,e,!1),Xc(i,e);return!0},q0=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},k6=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),KA(e)}};function GA(t){this._$AN!==void 0?(q0(this),this._$AM=t,k6(this)):this._$AM=t}function VA(t,e=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=r;o<n.length;o++)Xc(n[o],!1),q0(n[o]);else n!=null&&(Xc(n,!1),q0(n));else Xc(this,t)}const KA=t=>{t.type==E6.CHILD&&(t._$AP??(t._$AP=VA),t._$AQ??(t._$AQ=GA))};let ZA=class extends _6{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),k6(this),this.isConnected=e._$AU}_$AO(e,r=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),r&&(Xc(this,e),q0(this))}setValue(e){if(qA(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T6=()=>new JA;let JA=class{};const nh=new WeakMap,I6=x6(class extends ZA{render(t){return Qt}update(t,[e]){var n;const r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=(n=t.options)==null?void 0:n.host,this.ot(this.lt=t.element)),Qt}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let r=nh.get(e);r===void 0&&(r=new WeakMap,nh.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return typeof this.G=="function"?(t=nh.get(this.ct??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),YA=Me`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ss=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ji=class extends De{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=T6()}render(){const e=`wui-size-${this.size}`;return pe` ${this.templateIcon()}
      <input
        ${I6(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${ss(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?pe`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};ji.styles=[We,ur,YA];Ss([oe()],ji.prototype,"size",void 0);Ss([oe()],ji.prototype,"icon",void 0);Ss([oe({type:Boolean})],ji.prototype,"disabled",void 0);Ss([oe()],ji.prototype,"placeholder",void 0);Ss([oe()],ji.prototype,"type",void 0);Ss([oe()],ji.prototype,"keyHint",void 0);ji=Ss([ye("wui-input-text")],ji);const XA=Me`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var $6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let G0=class extends De{render(){return pe`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?pe`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};G0.styles=[We,XA];$6([oe()],G0.prototype,"errorMessage",void 0);G0=$6([ye("wui-email-input")],G0);const QA=Me`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Eu=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ws=class extends De{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ws.styles=[We,ur,Kp,QA];Eu([oe()],ws.prototype,"size",void 0);Eu([oe({type:Boolean})],ws.prototype,"disabled",void 0);Eu([oe()],ws.prototype,"icon",void 0);Eu([oe()],ws.prototype,"iconColor",void 0);ws=Eu([ye("wui-icon-link")],ws);const eS=Me`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var N6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let V0=class extends De{constructor(){super(...arguments),this.icon="copy"}render(){return pe`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};V0.styles=[We,ur,eS];N6([oe()],V0.prototype,"icon",void 0);V0=N6([ye("wui-input-element")],V0);const tS=Me`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var M6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let K0=class extends De{constructor(){super(...arguments),this.disabled=!1}render(){return pe`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};K0.styles=[We,ur,tS];M6([oe({type:Boolean})],K0.prototype,"disabled",void 0);K0=M6([ye("wui-input-numeric")],K0);const rS=Me`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Qp=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Rl=class extends De{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Rl.styles=[We,ur,rS];Qp([oe({type:Boolean})],Rl.prototype,"disabled",void 0);Qp([oe()],Rl.prototype,"color",void 0);Rl=Qp([ye("wui-link")],Rl);const nS=Me`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var _i=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let mn=class extends De{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return pe`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ss(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return pe`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return pe`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",r=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:r;return pe`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?pe`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:pe``}chevronTemplate(){return this.chevron?pe`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};mn.styles=[We,ur,nS];_i([oe()],mn.prototype,"icon",void 0);_i([oe()],mn.prototype,"iconSize",void 0);_i([oe()],mn.prototype,"variant",void 0);_i([oe()],mn.prototype,"iconVariant",void 0);_i([oe({type:Boolean})],mn.prototype,"disabled",void 0);_i([oe()],mn.prototype,"imageSrc",void 0);_i([oe()],mn.prototype,"alt",void 0);_i([oe({type:Boolean})],mn.prototype,"chevron",void 0);_i([oe({type:Boolean})],mn.prototype,"loading",void 0);mn=_i([ye("wui-list-item")],mn);var m1;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(m1||(m1={}));const iS=Me`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Ps=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Wi=class extends De{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,r]=this.images,n=(e==null?void 0:e.type)==="NFT",i=r!=null&&r.url?r.type==="NFT":n,o=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${o};
    --local-right-border-radius: ${s};
    `,pe`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,r]=this.images,n=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||r!=null&&r.url)?pe`<div class="swap-images-container">
        ${e!=null&&e.url?pe`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${r!=null&&r.url?pe`<wui-image src=${r.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?pe`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:n==="NFT"?pe`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:pe`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",r;return r=this.getIcon(),this.status&&(e=this.getStatusColor()),r?pe`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Wi.styles=[iS];Ps([oe()],Wi.prototype,"type",void 0);Ps([oe()],Wi.prototype,"status",void 0);Ps([oe()],Wi.prototype,"direction",void 0);Ps([oe()],Wi.prototype,"onlyDirectionIcon",void 0);Ps([oe()],Wi.prototype,"images",void 0);Ps([oe()],Wi.prototype,"secondImage",void 0);Wi=Ps([ye("wui-transaction-visual")],Wi);const oS=Me`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Ro=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let hi=class extends De{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return pe`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${m1[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var r;const e=(r=this.descriptions)==null?void 0:r[0];return e?pe`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var r;const e=(r=this.descriptions)==null?void 0:r[1];return e?pe`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};hi.styles=[We,oS];Ro([oe()],hi.prototype,"type",void 0);Ro([oe()],hi.prototype,"descriptions",void 0);Ro([oe()],hi.prototype,"date",void 0);Ro([oe()],hi.prototype,"onlyDirectionIcon",void 0);Ro([oe()],hi.prototype,"status",void 0);Ro([oe()],hi.prototype,"direction",void 0);Ro([oe()],hi.prototype,"images",void 0);hi=Ro([ye("wui-transaction-list-item")],hi);const sS=Me`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var aS=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let w1=class extends De{render(){return pe`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};w1.styles=[We,sS];w1=aS([ye("wui-transaction-list-item-loader")],w1);const cS=Me`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var O6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Z0=class extends De{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,pe`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Z0.styles=[We,cS];O6([oe()],Z0.prototype,"variant",void 0);Z0=O6([ye("wui-tag")],Z0);const lS=Me`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Ci=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let wn=class extends De{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?pe` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?pe` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?pe`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?pe`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?pe`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?pe`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};wn.styles=[We,ur,lS];Ci([oe({type:Array})],wn.prototype,"walletImages",void 0);Ci([oe()],wn.prototype,"imageSrc",void 0);Ci([oe()],wn.prototype,"name",void 0);Ci([oe()],wn.prototype,"tagLabel",void 0);Ci([oe()],wn.prototype,"tagVariant",void 0);Ci([oe()],wn.prototype,"icon",void 0);Ci([oe()],wn.prototype,"walletIcon",void 0);Ci([oe({type:Boolean})],wn.prototype,"disabled",void 0);Ci([oe({type:Boolean})],wn.prototype,"showAllWallets",void 0);wn=Ci([ye("wui-list-wallet")],wn);const uS=Me`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var D6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let J0=class extends De{constructor(){super(...arguments),this.logo="google"}render(){return pe`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};J0.styles=[We,uS];D6([oe()],J0.prototype,"logo",void 0);J0=D6([ye("wui-logo")],J0);const fS=Me`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var e2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Bl=class extends De{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return pe`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Bl.styles=[We,ur,fS];e2([oe()],Bl.prototype,"logo",void 0);e2([oe({type:Boolean})],Bl.prototype,"disabled",void 0);Bl=e2([ye("wui-logo-select")],Bl);const dS=Me`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var t2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ll=class extends De{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return pe`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?pe`<wui-image src=${this.imageSrc}></wui-image>`:pe`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ll.styles=[We,ur,dS];t2([oe()],Ll.prototype,"imageSrc",void 0);t2([oe({type:Boolean})],Ll.prototype,"disabled",void 0);Ll=t2([ye("wui-network-button")],Ll);const hS=Me`
  :host {
    position: relative;
    display: block;
  }
`;var R6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Y0=class extends De{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,r)=>{const n=e.target,i=this.getInputElement(n),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(e.key)&&e.preventDefault();const s=i.selectionStart;switch(e.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":i.value===""?this.focusInputField("prev",r):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",r):i.value="";break}},this.focusInputField=(e,r)=>{if(e==="next"){const n=r+1,i=this.numerics[n<this.length?n:r],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(e==="prev"){const n=r-1,i=this.numerics[n>-1?n:r],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return pe`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,r)=>pe`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,r)}
              @keydown=${n=>this.handleKeyDown(n,r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,r){const n=e.target,i=this.getInputElement(n);if(i){const o=i.value;e.inputType==="insertFromPaste"?this.handlePaste(i,o,r):Ot.isNumber(o)&&e.data?(i.value=e.data,this.focusInputField("next",r)):i.value=""}}handlePaste(e,r,n){const i=r[0];if(i&&Ot.isNumber(i)){e.value=i;const s=r.substring(1);if(n+1<this.length&&s.length){const a=this.numerics[n+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,n+1)}else this.focusInputField("next",n)}else e.value=""}getInputElement(e){var r;return(r=e.shadowRoot)!=null&&r.querySelector("input")?e.shadowRoot.querySelector("input"):null}};Y0.styles=[We,hS];R6([oe({type:Number})],Y0.prototype,"length",void 0);Y0=R6([ye("wui-otp")],Y0);var xu={},pS=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},B6={},on={};let r2;const gS=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];on.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};on.getSymbolTotalCodewords=function(e){return gS[e]};on.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};on.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');r2=e};on.isKanjiModeEnabled=function(){return typeof r2<"u"};on.toSJIS=function(e){return r2(e)};var Kf={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},t.from=function(n,i){if(t.isValid(n))return n;try{return e(n)}catch{return i}}})(Kf);function L6(){this.buffer=[],this.length=0}L6.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var mS=L6;function _u(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}_u.prototype.set=function(t,e,r,n){const i=t*this.size+e;this.data[i]=r,n&&(this.reservedBit[i]=!0)};_u.prototype.get=function(t,e){return this.data[t*this.size+e]};_u.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};_u.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var wS=_u,U6={};(function(t){const e=on.getSymbolSize;t.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,o=e(n),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},t.getPositions=function(n){const i=[],o=t.getRowColCoords(n),s=o.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||i.push([o[a],o[c]]);return i}})(U6);var F6={};const bS=on.getSymbolSize,F3=7;F6.getPositions=function(e){const r=bS(e);return[[0,0],[r-F3,0],[0,r-F3]]};var j6={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,c=0,l=null,u=null;for(let f=0;f<o;f++){a=c=0,l=u=null;for(let p=0;p<o;p++){let b=i.get(f,p);b===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=b,a=1),b=i.get(p,f),b===u?c++:(c>=5&&(s+=e.N1+(c-5)),u=b,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},t.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let c=0;c<o-1;c++){const l=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},t.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,c=0;for(let l=0;l<o;l++){a=c=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(l,u),u>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&s++}return s*e.N3},t.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let c=0;c<s;c++)o+=i.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*e.N4};function r(n,i,o){switch(n){case t.Patterns.PATTERN000:return(i+o)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(i+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return i*o%2+i*o%3===0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}t.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)o.isReserved(c,a)||o.xor(c,a,r(i,c,a))},t.getBestMask=function(i,o){const s=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){o(l),t.applyMask(l,i);const u=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(l,i),u<c&&(c=u,a=l)}return a}})(j6);var Zf={};const uo=Kf,Ju=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Yu=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Zf.getBlocksCount=function(e,r){switch(r){case uo.L:return Ju[(e-1)*4+0];case uo.M:return Ju[(e-1)*4+1];case uo.Q:return Ju[(e-1)*4+2];case uo.H:return Ju[(e-1)*4+3];default:return}};Zf.getTotalCodewordsCount=function(e,r){switch(r){case uo.L:return Yu[(e-1)*4+0];case uo.M:return Yu[(e-1)*4+1];case uo.Q:return Yu[(e-1)*4+2];case uo.H:return Yu[(e-1)*4+3];default:return}};var W6={},Jf={};const Qc=new Uint8Array(512),X0=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)Qc[r]=e,X0[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)Qc[r]=Qc[r-255]})();Jf.log=function(e){if(e<1)throw new Error("log("+e+")");return X0[e]};Jf.exp=function(e){return Qc[e]};Jf.mul=function(e,r){return e===0||r===0?0:Qc[X0[e]+X0[r]]};(function(t){const e=Jf;t.mul=function(n,i){const o=new Uint8Array(n.length+i.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=e.mul(n[s],i[a]);return o},t.mod=function(n,i){let o=new Uint8Array(n);for(;o.length-i.length>=0;){const s=o[0];for(let c=0;c<i.length;c++)o[c]^=e.mul(i[c],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},t.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let o=0;o<n;o++)i=t.mul(i,new Uint8Array([1,e.exp(o)]));return i}})(W6);const z6=W6;function n2(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}n2.prototype.initialize=function(e){this.degree=e,this.genPoly=z6.generateECPolynomial(this.degree)};n2.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const n=z6.mod(r,this.genPoly),i=this.degree-n.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(n,i),o}return n};var yS=n2,H6={},Bo={},i2={};i2.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Ai={};const q6="[0-9]+",vS="[A-Z $%*+\\-./:]+";let Ul="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ul=Ul.replace(/u/g,"\\u");const ES="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ul+`)(?:.|[\r
]))+`;Ai.KANJI=new RegExp(Ul,"g");Ai.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Ai.BYTE=new RegExp(ES,"g");Ai.NUMERIC=new RegExp(q6,"g");Ai.ALPHANUMERIC=new RegExp(vS,"g");const xS=new RegExp("^"+Ul+"$"),_S=new RegExp("^"+q6+"$"),CS=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Ai.testKanji=function(e){return xS.test(e)};Ai.testNumeric=function(e){return _S.test(e)};Ai.testAlphanumeric=function(e){return CS.test(e)};(function(t){const e=i2,r=Ai;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},t.getBestModeForData=function(o){return r.testNumeric(o)?t.NUMERIC:r.testAlphanumeric(o)?t.ALPHANUMERIC:r.testKanji(o)?t.KANJI:t.BYTE},t.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},t.isValid=function(o){return o&&o.bit&&o.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(o,s){if(t.isValid(o))return o;try{return n(o)}catch{return s}}})(Bo);(function(t){const e=on,r=Zf,n=Kf,i=Bo,o=i2,s=7973,a=e.getBCHDigit(s);function c(p,b,v){for(let A=1;A<=40;A++)if(b<=t.getCapacity(A,v,p))return A}function l(p,b){return i.getCharCountIndicator(p,b)+4}function u(p,b){let v=0;return p.forEach(function(A){const _=l(A.mode,b);v+=_+A.getBitsLength()}),v}function f(p,b){for(let v=1;v<=40;v++)if(u(p,v)<=t.getCapacity(v,b,i.MIXED))return v}t.from=function(b,v){return o.isValid(b)?parseInt(b,10):v},t.getCapacity=function(b,v,A){if(!o.isValid(b))throw new Error("Invalid QR Code version");typeof A>"u"&&(A=i.BYTE);const _=e.getSymbolTotalCodewords(b),N=r.getTotalCodewordsCount(b,v),P=(_-N)*8;if(A===i.MIXED)return P;const M=P-l(A,b);switch(A){case i.NUMERIC:return Math.floor(M/10*3);case i.ALPHANUMERIC:return Math.floor(M/11*2);case i.KANJI:return Math.floor(M/13);case i.BYTE:default:return Math.floor(M/8)}},t.getBestVersionForData=function(b,v){let A;const _=n.from(v,n.M);if(Array.isArray(b)){if(b.length>1)return f(b,_);if(b.length===0)return 1;A=b[0]}else A=b;return c(A.mode,A.getLength(),_)},t.getEncodedBits=function(b){if(!o.isValid(b)||b<7)throw new Error("Invalid QR Code version");let v=b<<12;for(;e.getBCHDigit(v)-a>=0;)v^=s<<e.getBCHDigit(v)-a;return b<<12|v}})(H6);var G6={};const b1=on,V6=1335,AS=21522,j3=b1.getBCHDigit(V6);G6.getEncodedBits=function(e,r){const n=e.bit<<3|r;let i=n<<10;for(;b1.getBCHDigit(i)-j3>=0;)i^=V6<<b1.getBCHDigit(i)-j3;return(n<<10|i)^AS};var K6={};const SS=Bo;function Ra(t){this.mode=SS.NUMERIC,this.data=t.toString()}Ra.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ra.prototype.getLength=function(){return this.data.length};Ra.prototype.getBitsLength=function(){return Ra.getBitsLength(this.data.length)};Ra.prototype.write=function(e){let r,n,i;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),i=parseInt(n,10),e.put(i,10);const o=this.data.length-r;o>0&&(n=this.data.substr(r),i=parseInt(n,10),e.put(i,o*3+1))};var PS=Ra;const kS=Bo,ih=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ba(t){this.mode=kS.ALPHANUMERIC,this.data=t}Ba.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Ba.prototype.getLength=function(){return this.data.length};Ba.prototype.getBitsLength=function(){return Ba.getBitsLength(this.data.length)};Ba.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let n=ih.indexOf(this.data[r])*45;n+=ih.indexOf(this.data[r+1]),e.put(n,11)}this.data.length%2&&e.put(ih.indexOf(this.data[r]),6)};var TS=Ba,IS=function(e){for(var r=[],n=e.length,i=0;i<n;i++){var o=e.charCodeAt(i);if(o>=55296&&o<=56319&&n>i+1){var s=e.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){r.push(o);continue}if(o<2048){r.push(o>>6|192),r.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){r.push(o>>12|224),r.push(o>>6&63|128),r.push(o&63|128);continue}if(o>=65536&&o<=1114111){r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(o&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const $S=IS,NS=Bo;function La(t){this.mode=NS.BYTE,typeof t=="string"&&(t=$S(t)),this.data=new Uint8Array(t)}La.getBitsLength=function(e){return e*8};La.prototype.getLength=function(){return this.data.length};La.prototype.getBitsLength=function(){return La.getBitsLength(this.data.length)};La.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var MS=La;const OS=Bo,DS=on;function Ua(t){this.mode=OS.KANJI,this.data=t}Ua.getBitsLength=function(e){return e*13};Ua.prototype.getLength=function(){return this.data.length};Ua.prototype.getBitsLength=function(){return Ua.getBitsLength(this.data.length)};Ua.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=DS.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var RS=Ua,Z6={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,n,i){var o={},s={};s[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,p,b,v,A,_;!a.empty();){c=a.pop(),l=c.value,f=c.cost,p=r[l]||{};for(u in p)p.hasOwnProperty(u)&&(b=p[u],v=f+b,A=s[u],_=typeof s[u]>"u",(_||A>v)&&(s[u]=v,a.push(u,v),o[u]=l))}if(typeof i<"u"&&typeof s[i]>"u"){var N=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(N)}return o},extract_shortest_path_from_predecessor_list:function(r,n){for(var i=[],o=n;o;)i.push(o),r[o],o=r[o];return i.reverse(),i},find_path:function(r,n,i){var o=e.single_source_shortest_paths(r,n,i);return e.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(r){var n=e.PriorityQueue,i={},o;r=r||{};for(o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return i.queue=[],i.sorter=r.sorter||n.default_sorter,i},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var i={value:r,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Z6);var BS=Z6.exports;(function(t){const e=Bo,r=PS,n=TS,i=MS,o=RS,s=Ai,a=on,c=BS;function l(N){return unescape(encodeURIComponent(N)).length}function u(N,P,M){const D=[];let R;for(;(R=N.exec(M))!==null;)D.push({data:R[0],index:R.index,mode:P,length:R[0].length});return D}function f(N){const P=u(s.NUMERIC,e.NUMERIC,N),M=u(s.ALPHANUMERIC,e.ALPHANUMERIC,N);let D,R;return a.isKanjiModeEnabled()?(D=u(s.BYTE,e.BYTE,N),R=u(s.KANJI,e.KANJI,N)):(D=u(s.BYTE_KANJI,e.BYTE,N),R=[]),P.concat(M,D,R).sort(function(w,H){return w.index-H.index}).map(function(w){return{data:w.data,mode:w.mode,length:w.length}})}function p(N,P){switch(P){case e.NUMERIC:return r.getBitsLength(N);case e.ALPHANUMERIC:return n.getBitsLength(N);case e.KANJI:return o.getBitsLength(N);case e.BYTE:return i.getBitsLength(N)}}function b(N){return N.reduce(function(P,M){const D=P.length-1>=0?P[P.length-1]:null;return D&&D.mode===M.mode?(P[P.length-1].data+=M.data,P):(P.push(M),P)},[])}function v(N){const P=[];for(let M=0;M<N.length;M++){const D=N[M];switch(D.mode){case e.NUMERIC:P.push([D,{data:D.data,mode:e.ALPHANUMERIC,length:D.length},{data:D.data,mode:e.BYTE,length:D.length}]);break;case e.ALPHANUMERIC:P.push([D,{data:D.data,mode:e.BYTE,length:D.length}]);break;case e.KANJI:P.push([D,{data:D.data,mode:e.BYTE,length:l(D.data)}]);break;case e.BYTE:P.push([{data:D.data,mode:e.BYTE,length:l(D.data)}])}}return P}function A(N,P){const M={},D={start:{}};let R=["start"];for(let W=0;W<N.length;W++){const w=N[W],H=[];for(let X=0;X<w.length;X++){const te=w[X],L=""+W+X;H.push(L),M[L]={node:te,lastCount:0},D[L]={};for(let h=0;h<R.length;h++){const C=R[h];M[C]&&M[C].node.mode===te.mode?(D[C][L]=p(M[C].lastCount+te.length,te.mode)-p(M[C].lastCount,te.mode),M[C].lastCount+=te.length):(M[C]&&(M[C].lastCount=te.length),D[C][L]=p(te.length,te.mode)+4+e.getCharCountIndicator(te.mode,P))}}R=H}for(let W=0;W<R.length;W++)D[R[W]].end=0;return{map:D,table:M}}function _(N,P){let M;const D=e.getBestModeForData(N);if(M=e.from(P,D),M!==e.BYTE&&M.bit<D.bit)throw new Error('"'+N+'" cannot be encoded with mode '+e.toString(M)+`.
 Suggested mode is: `+e.toString(D));switch(M===e.KANJI&&!a.isKanjiModeEnabled()&&(M=e.BYTE),M){case e.NUMERIC:return new r(N);case e.ALPHANUMERIC:return new n(N);case e.KANJI:return new o(N);case e.BYTE:return new i(N)}}t.fromArray=function(P){return P.reduce(function(M,D){return typeof D=="string"?M.push(_(D,null)):D.data&&M.push(_(D.data,D.mode)),M},[])},t.fromString=function(P,M){const D=f(P,a.isKanjiModeEnabled()),R=v(D),W=A(R,M),w=c.find_path(W.map,"start","end"),H=[];for(let X=1;X<w.length-1;X++)H.push(W.table[w[X]].node);return t.fromArray(b(H))},t.rawSplit=function(P){return t.fromArray(f(P,a.isKanjiModeEnabled()))}})(K6);const Yf=on,oh=Kf,LS=mS,US=wS,FS=U6,jS=F6,y1=j6,v1=Zf,WS=yS,Q0=H6,zS=G6,HS=Bo,sh=K6;function qS(t,e){const r=t.size,n=jS.getPositions(e);for(let i=0;i<n.length;i++){const o=n[i][0],s=n[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||r<=o+a))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(o+a,s+c,!0,!0):t.set(o+a,s+c,!1,!0))}}function GS(t){const e=t.size;for(let r=8;r<e-8;r++){const n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function VS(t,e){const r=FS.getPositions(e);for(let n=0;n<r.length;n++){const i=r[n][0],o=r[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(i+s,o+a,!0,!0):t.set(i+s,o+a,!1,!0)}}function KS(t,e){const r=t.size,n=Q0.getEncodedBits(e);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+r-8-3,s=(n>>a&1)===1,t.set(i,o,s,!0),t.set(o,i,s,!0)}function ah(t,e,r){const n=t.size,i=zS.getEncodedBits(e,r);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?t.set(o,8,s,!0):o<8?t.set(o+1,8,s,!0):t.set(n-15+o,8,s,!0),o<8?t.set(8,n-o-1,s,!0):o<9?t.set(8,15-o-1+1,s,!0):t.set(8,15-o-1,s,!0);t.set(n-8,8,1,!0)}function ZS(t,e){const r=t.size;let n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(i,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>o&1)===1),t.set(i,a-c,l),o--,o===-1&&(s++,o=7)}if(i+=n,i<0||r<=i){i-=n,n=-n;break}}}function JS(t,e,r){const n=new LS;r.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),HS.getCharCountIndicator(c.mode,t)),c.write(n)});const i=Yf.getSymbolTotalCodewords(t),o=v1.getTotalCodewordsCount(t,e),s=(i-o)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return YS(n,t,e)}function YS(t,e,r){const n=Yf.getSymbolTotalCodewords(e),i=v1.getTotalCodewordsCount(e,r),o=n-i,s=v1.getBlocksCount(e,r),a=n%s,c=s-a,l=Math.floor(n/s),u=Math.floor(o/s),f=u+1,p=l-u,b=new WS(p);let v=0;const A=new Array(s),_=new Array(s);let N=0;const P=new Uint8Array(t.buffer);for(let w=0;w<s;w++){const H=w<c?u:f;A[w]=P.slice(v,v+H),_[w]=b.encode(A[w]),v+=H,N=Math.max(N,H)}const M=new Uint8Array(n);let D=0,R,W;for(R=0;R<N;R++)for(W=0;W<s;W++)R<A[W].length&&(M[D++]=A[W][R]);for(R=0;R<p;R++)for(W=0;W<s;W++)M[D++]=_[W][R];return M}function XS(t,e,r,n){let i;if(Array.isArray(t))i=sh.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=sh.rawSplit(t);l=Q0.getBestVersionForData(u,r)}i=sh.fromString(t,l||40)}else throw new Error("Invalid data");const o=Q0.getBestVersionForData(i,r);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=JS(e,r,i),a=Yf.getSymbolSize(e),c=new US(a);return qS(c,e),GS(c),VS(c,e),ah(c,r,0),e>=7&&KS(c,e),ZS(c,s),isNaN(n)&&(n=y1.getBestMask(c,ah.bind(null,c,r))),y1.applyMask(n,c),ah(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:i}}B6.create=function(e,r){if(typeof e>"u"||e==="")throw new Error("No input text");let n=oh.M,i,o;return typeof r<"u"&&(n=oh.from(r.errorCorrectionLevel,oh.M),i=Q0.from(r.version),o=y1.from(r.maskPattern),r.toSJISFunc&&Yf.setToSJISFunction(r.toSJISFunc)),XS(e,i,n,o)};var J6={},o2={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(o){return[o,o]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}t.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,o=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},t.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},t.getImageWidth=function(n,i){const o=t.getScale(n,i);return Math.floor((n+i.margin*2)*o)},t.qrToImageData=function(n,i,o){const s=i.modules.size,a=i.modules.data,c=t.getScale(s,o),l=Math.floor((s+o.margin*2)*c),u=o.margin*c,f=[o.color.light,o.color.dark];for(let p=0;p<l;p++)for(let b=0;b<l;b++){let v=(p*l+b)*4,A=o.color.light;if(p>=u&&b>=u&&p<l-u&&b<l-u){const _=Math.floor((p-u)/c),N=Math.floor((b-u)/c);A=f[a[_*s+N]?1:0]}n[v++]=A.r,n[v++]=A.g,n[v++]=A.b,n[v]=A.a}}})(o2);(function(t){const e=o2;function r(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(o,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(o.modules.size,c),f=l.getContext("2d"),p=f.createImageData(u,u);return e.qrToImageData(p.data,o,c),r(f,l,u),f.putImageData(p,0,0),l},t.renderToDataURL=function(o,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=t.render(o,s,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(J6);var Y6={};const QS=o2;function W3(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function ch(t,e,r){let n=t+e;return typeof r<"u"&&(n+=" "+r),n}function eP(t,e,r){let n="",i=0,o=!1,s=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!o&&(o=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(n+=o?ch("M",c+r,.5+l+r):ch("m",i,0),i=0,o=!1),c+1<e&&t[a+1]||(n+=ch("h",s),s=0)):i++}return n}Y6.render=function(e,r,n){const i=QS.getOptions(r),o=e.modules.size,s=e.modules.data,a=o+i.margin*2,c=i.color.light.a?"<path "+W3(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+W3(i.color.dark,"stroke")+' d="'+eP(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,p),p};const tP=pS,E1=B6,X6=J6,rP=Y6;function s2(t,e,r,n,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!tP())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=r,r=e,e=n=void 0):s===3&&(e.getContext&&typeof i>"u"?(i=n,n=void 0):(i=n,n=r,r=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=e,e=n=void 0):s===2&&!e.getContext&&(n=r,r=e,e=void 0),new Promise(function(c,l){try{const u=E1.create(r,n);c(t(u,e,n))}catch(u){l(u)}})}try{const c=E1.create(r,n);i(null,t(c,e,n))}catch(c){i(c)}}xu.create=E1.create;xu.toCanvas=s2.bind(null,X6.render);xu.toDataURL=s2.bind(null,X6.renderToDataURL);xu.toString=s2.bind(null,function(t,e,r){return rP.render(t,r)});const nP=.1,z3=2.5,$i=7;function lh(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+nP}function iP(t,e){const r=Array.prototype.slice.call(xu.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((i,o,s)=>(s%n===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const oP={generate(t,e,r){const n="#141414",i="transparent",s=[],a=iP(t,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:A,y:_})=>{const N=(a.length-$i)*c*A,P=(a.length-$i)*c*_,M=.45;for(let D=0;D<l.length;D+=1){const R=c*($i-D*2);s.push(ve`
            <rect
              fill=${D===2?n:i}
              width=${D===0?R-5:R}
              rx= ${D===0?(R-5)*M:R*M}
              ry= ${D===0?(R-5)*M:R*M}
              stroke=${n}
              stroke-width=${D===0?5:0}
              height=${D===0?R-5:R}
              x= ${D===0?P+c*D+5/2:P+c*D}
              y= ${D===0?N+c*D+5/2:N+c*D}
            />
          `)}});const u=Math.floor((r+25)/c),f=a.length/2-u/2,p=a.length/2+u/2-1,b=[];a.forEach((A,_)=>{A.forEach((N,P)=>{if(a[_][P]&&!(_<$i&&P<$i||_>a.length-($i+1)&&P<$i||_<$i&&P>a.length-($i+1))&&!(_>f&&_<p&&P>f&&P<p)){const M=_*c+c/2,D=P*c+c/2;b.push([M,D])}})});const v={};return b.forEach(([A,_])=>{var N;v[A]?(N=v[A])==null||N.push(_):v[A]=[_]}),Object.entries(v).map(([A,_])=>{const N=_.filter(P=>_.every(M=>!lh(P,M,c)));return[Number(A),N]}).forEach(([A,_])=>{_.forEach(N=>{s.push(ve`<circle cx=${A} cy=${N} fill=${n} r=${c/z3} />`)})}),Object.entries(v).filter(([A,_])=>_.length>1).map(([A,_])=>{const N=_.filter(P=>_.some(M=>lh(P,M,c)));return[Number(A),N]}).map(([A,_])=>{_.sort((P,M)=>P<M?-1:1);const N=[];for(const P of _){const M=N.find(D=>D.some(R=>lh(P,R,c)));M?M.push(P):N.push([P])}return[A,N.map(P=>[P[0],P[P.length-1]])]}).forEach(([A,_])=>{_.forEach(([N,P])=>{s.push(ve`
              <line
                x1=${A}
                x2=${A}
                y1=${N}
                y2=${P}
                stroke=${n}
                stroke-width=${c/(z3/2)}
                stroke-linecap="round"
              />
            `)})}),s}},sP=Me`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var ac=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Po=class extends De{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,pe`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return ve`
      <svg height=${e} width=${e}>
        ${oP.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:pe`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Po.styles=[We,sP];ac([oe()],Po.prototype,"uri",void 0);ac([oe({type:Number})],Po.prototype,"size",void 0);ac([oe()],Po.prototype,"theme",void 0);ac([oe()],Po.prototype,"imageSrc",void 0);ac([oe()],Po.prototype,"alt",void 0);Po=ac([ye("wui-qr-code")],Po);const aP=Me`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var cP=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let x1=class extends De{constructor(){super(...arguments),this.inputComponentRef=T6()}render(){return pe`
      <wui-input-text
        ${I6(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,r=e==null?void 0:e.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};x1.styles=[We,aP];x1=cP([ye("wui-search-bar")],x1);const lP=Me`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Cu=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let bs=class extends De{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return pe`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};bs.styles=[We,lP];Cu([oe()],bs.prototype,"backgroundColor",void 0);Cu([oe()],bs.prototype,"iconColor",void 0);Cu([oe()],bs.prototype,"icon",void 0);Cu([oe()],bs.prototype,"message",void 0);bs=Cu([ye("wui-snackbar")],bs);const uP=Me`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Lo=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let pi=class extends De{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{const n=r===this.activeTab;return pe`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){const n=this.buttons[this.activeTab],i=this.buttons[e],o=n==null?void 0:n.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();n&&o&&!r&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&c&&s&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,i.animate([{width:`${a.width+c.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:r?0:125,delay:r?0:200,fill:"forwards",easing:"ease"}))}};pi.styles=[We,ur,uP];Lo([oe({type:Array})],pi.prototype,"tabs",void 0);Lo([oe()],pi.prototype,"onTabChange",void 0);Lo([oe({type:Array})],pi.prototype,"buttons",void 0);Lo([oe({type:Boolean})],pi.prototype,"disabled",void 0);Lo([Zp()],pi.prototype,"activeTab",void 0);Lo([Zp()],pi.prototype,"localTabWidth",void 0);Lo([Zp()],pi.prototype,"isDense",void 0);pi=Lo([ye("wui-tabs")],pi);const fP=Me`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var a2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Fl=class extends De{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return pe`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Fl.styles=[We,ur,fP];a2([oe()],Fl.prototype,"placement",void 0);a2([oe()],Fl.prototype,"message",void 0);Fl=a2([ye("wui-tooltip")],Fl);const dP=Me`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Xf=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Fa=class extends De{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,pe`${this.templateVisual()}`}templateVisual(){return this.imageSrc?pe`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:pe`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Fa.styles=[We,dP];Xf([oe()],Fa.prototype,"imageSrc",void 0);Xf([oe()],Fa.prototype,"alt",void 0);Xf([oe({type:Boolean})],Fa.prototype,"borderRadiusFull",void 0);Fa=Xf([ye("wui-visual-thumbnail")],Fa);const hP=Me`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var vn=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Zr=class extends De{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ot.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ot.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ot.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ot.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ot.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ot.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ot.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ot.getSpacingStyles(this.margin,3)};
    `,pe`<slot></slot>`}};Zr.styles=[We,hP];vn([oe()],Zr.prototype,"gridTemplateRows",void 0);vn([oe()],Zr.prototype,"gridTemplateColumns",void 0);vn([oe()],Zr.prototype,"justifyItems",void 0);vn([oe()],Zr.prototype,"alignItems",void 0);vn([oe()],Zr.prototype,"justifyContent",void 0);vn([oe()],Zr.prototype,"alignContent",void 0);vn([oe()],Zr.prototype,"columnGap",void 0);vn([oe()],Zr.prototype,"rowGap",void 0);vn([oe()],Zr.prototype,"gap",void 0);vn([oe()],Zr.prototype,"padding",void 0);vn([oe()],Zr.prototype,"margin",void 0);Zr=vn([ye("wui-grid")],Zr);const pP=Me`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Q6=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ef=class extends De{constructor(){super(...arguments),this.text=""}render(){return pe`${this.template()}`}template(){return this.text?pe`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ef.styles=[We,pP];Q6([oe()],ef.prototype,"text",void 0);ef=Q6([ye("wui-separator")],ef);var e4={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(In,function(){var r=1e3,n=6e4,i=36e5,o="millisecond",s="second",a="minute",c="hour",l="day",u="week",f="month",p="quarter",b="year",v="date",A="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(I){var $=["th","st","nd","rd"],O=I%100;return"["+I+($[(O-20)%10]||$[O]||$[0])+"]"}},M=function(I,$,O){var j=String(I);return!j||j.length>=$?I:""+Array($+1-j.length).join(O)+I},D={s:M,z:function(I){var $=-I.utcOffset(),O=Math.abs($),j=Math.floor(O/60),z=O%60;return($<=0?"+":"-")+M(j,2,"0")+":"+M(z,2,"0")},m:function I($,O){if($.date()<O.date())return-I(O,$);var j=12*(O.year()-$.year())+(O.month()-$.month()),z=$.clone().add(j,f),F=O-z<0,y=$.clone().add(j+(F?-1:1),f);return+(-(j+(O-z)/(F?z-y:y-z))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:f,y:b,w:u,d:l,D:v,h:c,m:a,s,ms:o,Q:p}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},R="en",W={};W[R]=P;var w="$isDayjsObject",H=function(I){return I instanceof h||!(!I||!I[w])},X=function I($,O,j){var z;if(!$)return R;if(typeof $=="string"){var F=$.toLowerCase();W[F]&&(z=F),O&&(W[F]=O,z=F);var y=$.split("-");if(!z&&y.length>1)return I(y[0])}else{var S=$.name;W[S]=$,z=S}return!j&&z&&(R=z),z||!j&&R},te=function(I,$){if(H(I))return I.clone();var O=typeof $=="object"?$:{};return O.date=I,O.args=arguments,new h(O)},L=D;L.l=X,L.i=H,L.w=function(I,$){return te(I,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var h=function(){function I(O){this.$L=X(O.locale,null,!0),this.parse(O),this.$x=this.$x||O.x||{},this[w]=!0}var $=I.prototype;return $.parse=function(O){this.$d=function(j){var z=j.date,F=j.utc;if(z===null)return new Date(NaN);if(L.u(z))return new Date;if(z instanceof Date)return new Date(z);if(typeof z=="string"&&!/Z$/i.test(z)){var y=z.match(_);if(y){var S=y[2]-1||0,G=(y[7]||"0").substring(0,3);return F?new Date(Date.UTC(y[1],S,y[3]||1,y[4]||0,y[5]||0,y[6]||0,G)):new Date(y[1],S,y[3]||1,y[4]||0,y[5]||0,y[6]||0,G)}}return new Date(z)}(O),this.init()},$.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},$.$utils=function(){return L},$.isValid=function(){return this.$d.toString()!==A},$.isSame=function(O,j){var z=te(O);return this.startOf(j)<=z&&z<=this.endOf(j)},$.isAfter=function(O,j){return te(O)<this.startOf(j)},$.isBefore=function(O,j){return this.endOf(j)<te(O)},$.$g=function(O,j,z){return L.u(O)?this[j]:this.set(z,O)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(O,j){var z=this,F=!!L.u(j)||j,y=L.p(O),S=function(ne,ae){var ue=L.w(z.$u?Date.UTC(z.$y,ae,ne):new Date(z.$y,ae,ne),z);return F?ue:ue.endOf(l)},G=function(ne,ae){return L.w(z.toDate()[ne].apply(z.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(ae)),z)},U=this.$W,V=this.$M,E=this.$D,J="set"+(this.$u?"UTC":"");switch(y){case b:return F?S(1,0):S(31,11);case f:return F?S(1,V):S(0,V+1);case u:var Q=this.$locale().weekStart||0,ee=(U<Q?U+7:U)-Q;return S(F?E-ee:E+(6-ee),V);case l:case v:return G(J+"Hours",0);case c:return G(J+"Minutes",1);case a:return G(J+"Seconds",2);case s:return G(J+"Milliseconds",3);default:return this.clone()}},$.endOf=function(O){return this.startOf(O,!1)},$.$set=function(O,j){var z,F=L.p(O),y="set"+(this.$u?"UTC":""),S=(z={},z[l]=y+"Date",z[v]=y+"Date",z[f]=y+"Month",z[b]=y+"FullYear",z[c]=y+"Hours",z[a]=y+"Minutes",z[s]=y+"Seconds",z[o]=y+"Milliseconds",z)[F],G=F===l?this.$D+(j-this.$W):j;if(F===f||F===b){var U=this.clone().set(v,1);U.$d[S](G),U.init(),this.$d=U.set(v,Math.min(this.$D,U.daysInMonth())).$d}else S&&this.$d[S](G);return this.init(),this},$.set=function(O,j){return this.clone().$set(O,j)},$.get=function(O){return this[L.p(O)]()},$.add=function(O,j){var z,F=this;O=Number(O);var y=L.p(j),S=function(V){var E=te(F);return L.w(E.date(E.date()+Math.round(V*O)),F)};if(y===f)return this.set(f,this.$M+O);if(y===b)return this.set(b,this.$y+O);if(y===l)return S(1);if(y===u)return S(7);var G=(z={},z[a]=n,z[c]=i,z[s]=r,z)[y]||1,U=this.$d.getTime()+O*G;return L.w(U,this)},$.subtract=function(O,j){return this.add(-1*O,j)},$.format=function(O){var j=this,z=this.$locale();if(!this.isValid())return z.invalidDate||A;var F=O||"YYYY-MM-DDTHH:mm:ssZ",y=L.z(this),S=this.$H,G=this.$m,U=this.$M,V=z.weekdays,E=z.months,J=z.meridiem,Q=function(ae,ue,le,we){return ae&&(ae[ue]||ae(j,F))||le[ue].slice(0,we)},ee=function(ae){return L.s(S%12||12,ae,"0")},ne=J||function(ae,ue,le){var we=ae<12?"AM":"PM";return le?we.toLowerCase():we};return F.replace(N,function(ae,ue){return ue||function(le){switch(le){case"YY":return String(j.$y).slice(-2);case"YYYY":return L.s(j.$y,4,"0");case"M":return U+1;case"MM":return L.s(U+1,2,"0");case"MMM":return Q(z.monthsShort,U,E,3);case"MMMM":return Q(E,U);case"D":return j.$D;case"DD":return L.s(j.$D,2,"0");case"d":return String(j.$W);case"dd":return Q(z.weekdaysMin,j.$W,V,2);case"ddd":return Q(z.weekdaysShort,j.$W,V,3);case"dddd":return V[j.$W];case"H":return String(S);case"HH":return L.s(S,2,"0");case"h":return ee(1);case"hh":return ee(2);case"a":return ne(S,G,!0);case"A":return ne(S,G,!1);case"m":return String(G);case"mm":return L.s(G,2,"0");case"s":return String(j.$s);case"ss":return L.s(j.$s,2,"0");case"SSS":return L.s(j.$ms,3,"0");case"Z":return y}return null}(ae)||y.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(O,j,z){var F,y=this,S=L.p(j),G=te(O),U=(G.utcOffset()-this.utcOffset())*n,V=this-G,E=function(){return L.m(y,G)};switch(S){case b:F=E()/12;break;case f:F=E();break;case p:F=E()/3;break;case u:F=(V-U)/6048e5;break;case l:F=(V-U)/864e5;break;case c:F=V/i;break;case a:F=V/n;break;case s:F=V/r;break;default:F=V}return z?F:L.a(F)},$.daysInMonth=function(){return this.endOf(f).$D},$.$locale=function(){return W[this.$L]},$.locale=function(O,j){if(!O)return this.$L;var z=this.clone(),F=X(O,j,!0);return F&&(z.$L=F),z},$.clone=function(){return L.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},I}(),C=h.prototype;return te.prototype=C,[["$ms",o],["$s",s],["$m",a],["$H",c],["$W",l],["$M",f],["$y",b],["$D",v]].forEach(function(I){C[I[1]]=function($){return this.$g($,I[0],I[1])}}),te.extend=function(I,$){return I.$i||(I($,h,te),I.$i=!0),te},te.locale=X,te.isDayjs=H,te.unix=function(I){return te(1e3*I)},te.en=W[R],te.Ls=W,te.p={},te})})(e4);var gP=e4.exports;const jl=bu(gP);var t4={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(In,function(){return function(r,n,i){i.updateLocale=function(o,s){var a=i.Ls[o];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(t4);var mP=t4.exports;const wP=bu(mP);var r4={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(In,function(){return function(r,n,i){r=r||{};var o=n.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,f,p){return o.fromToBase(l,u,f,p)}i.en.relativeTime=s,o.fromToBase=function(l,u,f,p,b){for(var v,A,_,N=f.$locale().relativeTime||s,P=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],M=P.length,D=0;D<M;D+=1){var R=P[D];R.d&&(v=p?i(l).diff(f,R.d,!0):f.diff(l,R.d,!0));var W=(r.rounding||Math.round)(Math.abs(v));if(_=v>0,W<=R.r||!R.r){W<=1&&D>0&&(R=P[D-1]);var w=N[R.l];b&&(W=b(""+W)),A=typeof w=="string"?w.replace("%d",W):w(W,u,R.l,_);break}}if(u)return A;var H=_?N.future:N.past;return typeof H=="function"?H(A):H.replace("%s",A)},o.to=function(l,u){return a(l,u,this,!0)},o.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?i.utc():i()};o.toNow=function(l){return this.to(c(this),l)},o.fromNow=function(l){return this.from(c(this),l)}}})})(r4);var bP=r4.exports;const yP=bu(bP);jl.extend(yP);jl.extend(wP);jl.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const n4={getYear(t=new Date().toISOString()){return jl(t).year()},getRelativeDateFromNow(t){return jl(t).fromNow(!0)}},vP=3,EP=["receive","deposit","borrow","claim"],xP=["withdraw","repay","burn"],aa={getTransactionGroupTitle(t){const e=n4.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,r]=t,n=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),i=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!n?[this.getTransactionImage(e),this.getTransactionImage(r)]:i?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:aa.getTransactionTransferTokenType(t),url:aa.getTransactionImageURL(t)}},getTransactionImageURL(t){var i,o,s,a,c;let e=null;const r=!!(t!=null&&t.nft_info),n=!!(t!=null&&t.fungible_info);return t&&r?e=(s=(o=(i=t==null?void 0:t.nft_info)==null?void 0:i.content)==null?void 0:o.preview)==null?void 0:s.url:t&&n&&(e=(c=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),e},getTransactionTransferTokenType(t){return t!=null&&t.fungible_info?"FUNGIBLE":t!=null&&t.nft_info?"NFT":null},getTransactionDescriptions(t){var f,p,b;const e=(f=t.metadata)==null?void 0:f.operationType,r=t.transfers,n=((p=t.transfers)==null?void 0:p.length)>0,i=((b=t.transfers)==null?void 0:b.length)>1,o=n&&(r==null?void 0:r.every(v=>!!v.fungible_info)),[s,a]=r;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!n)return(e==="send"||e==="receive")&&o?(c=Ot.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=Ot.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[t.metadata.status];if(i)return r.map(v=>this.getTransferDescription(v));let u="";return EP.includes(e)?u="+":xP.includes(e)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(t){var r;let e="";return t&&(t!=null&&t.nft_info?e=((r=t==null?void 0:t.nft_info)==null?void 0:r.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var n;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(n=t==null?void 0:t.fungible_info)==null?void 0:n.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(vP):null}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b0=globalThis,c2=b0.ShadowRoot&&(b0.ShadyCSS===void 0||b0.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l2=Symbol(),H3=new WeakMap;let i4=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==l2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(c2&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=H3.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&H3.set(r,e))}return e}toString(){return this.cssText}};const _P=t=>new i4(typeof t=="string"?t:t+"",void 0,l2),Fr=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new i4(r,t,l2)},CP=(t,e)=>{if(c2)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=b0.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},q3=c2?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return _P(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:AP,defineProperty:SP,getOwnPropertyDescriptor:PP,getOwnPropertyNames:kP,getOwnPropertySymbols:TP,getPrototypeOf:IP}=Object,yo=globalThis,G3=yo.trustedTypes,$P=G3?G3.emptyScript:"",uh=yo.reactiveElementPolyfillSupport,el=(t,e)=>t,tf={toAttribute(t,e){switch(e){case Boolean:t=t?$P:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},u2=(t,e)=>!AP(t,e),V3={attribute:!0,type:String,converter:tf,reflect:!1,hasChanged:u2};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yo.litPropertyMetadata??(yo.litPropertyMetadata=new WeakMap);class Qs extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=V3){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&SP(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:o}=PP(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??V3}static _$Ei(){if(this.hasOwnProperty(el("elementProperties")))return;const e=IP(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(el("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(el("properties"))){const r=this.properties,n=[...kP(r),...TP(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(q3(i))}else e!==void 0&&r.push(q3(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$E_)==null||r.delete(e)}_$ES(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return CP(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r){var o;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:tf).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var o;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:tf;this._$Em=i,this[i]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,n,i=!1,o){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??u2)(i?o:this[e],r))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$E_)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(e){}firstUpdated(e){}}Qs.elementStyles=[],Qs.shadowRootOptions={mode:"open"},Qs[el("elementProperties")]=new Map,Qs[el("finalized")]=new Map,uh==null||uh({ReactiveElement:Qs}),(yo.reactiveElementVersions??(yo.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tl=globalThis,rf=tl.trustedTypes,K3=rf?rf.createPolicy("lit-html",{createHTML:t=>t}):void 0,o4="$lit$",co=`lit$${(Math.random()+"").slice(9)}$`,s4="?"+co,NP=`<${s4}>`,ys=document,Wl=()=>ys.createComment(""),zl=t=>t===null||typeof t!="object"&&typeof t!="function",a4=Array.isArray,MP=t=>a4(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",fh=`[ 	
\f\r]`,$c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z3=/-->/g,J3=/>/g,Zo=RegExp(`>|${fh}(?:([^\\s"'>=/]+)(${fh}*=${fh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y3=/'/g,X3=/"/g,c4=/^(?:script|style|textarea|title)$/i,OP=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),fe=OP(1),ja=Symbol.for("lit-noChange"),cr=Symbol.for("lit-nothing"),Q3=new WeakMap,rs=ys.createTreeWalker(ys,129);function l4(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return K3!==void 0?K3.createHTML(e):e}const DP=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=$c;for(let a=0;a<r;a++){const c=t[a];let l,u,f=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===$c?u[1]==="!--"?s=Z3:u[1]!==void 0?s=J3:u[2]!==void 0?(c4.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Zo):u[3]!==void 0&&(s=Zo):s===Zo?u[0]===">"?(s=i??$c,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Zo:u[3]==='"'?X3:Y3):s===X3||s===Y3?s=Zo:s===Z3||s===J3?s=$c:(s=Zo,i=void 0);const b=s===Zo&&t[a+1].startsWith("/>")?" ":"";o+=s===$c?c+NP:f>=0?(n.push(l),c.slice(0,f)+o4+c.slice(f)+co+b):c+co+(f===-2?a:b)}return[l4(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Hl{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const a=e.length-1,c=this.parts,[l,u]=DP(e,r);if(this.el=Hl.createElement(l,n),rs.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=rs.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(o4)){const p=u[s++],b=i.getAttribute(f).split(co),v=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:v[2],strings:b,ctor:v[1]==="."?BP:v[1]==="?"?LP:v[1]==="@"?UP:Qf}),i.removeAttribute(f)}else f.startsWith(co)&&(c.push({type:6,index:o}),i.removeAttribute(f));if(c4.test(i.tagName)){const f=i.textContent.split(co),p=f.length-1;if(p>0){i.textContent=rf?rf.emptyScript:"";for(let b=0;b<p;b++)i.append(f[b],Wl()),rs.nextNode(),c.push({type:2,index:++o});i.append(f[p],Wl())}}}else if(i.nodeType===8)if(i.data===s4)c.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(co,f+1))!==-1;)c.push({type:7,index:o}),f+=co.length-1}o++}}static createElement(e,r){const n=ys.createElement("template");return n.innerHTML=e,n}}function Wa(t,e,r=t,n){var s,a;if(e===ja)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=zl(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Wa(t,i._$AS(t,e.values),i,n)),e}let RP=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??ys).importNode(r,!0);rs.currentNode=i;let o=rs.nextNode(),s=0,a=0,c=n[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new f2(o,o.nextSibling,this,e):c.type===1?l=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(l=new FP(o,this,e)),this._$AV.push(l),c=n[++a]}s!==(c==null?void 0:c.index)&&(o=rs.nextNode(),s++)}return rs.currentNode=ys,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},f2=class u4{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=cr,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Wa(this,e,r),zl(e)?e===cr||e==null||e===""?(this._$AH!==cr&&this._$AR(),this._$AH=cr):e!==this._$AH&&e!==ja&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):MP(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==cr&&zl(this._$AH)?this._$AA.nextSibling.data=e:this.$(ys.createTextNode(e)),this._$AH=e}g(e){var o;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Hl.createElement(l4(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new RP(i,this),a=s.u(this.options);s.p(r),this.$(a),this._$AH=s}}_$AC(e){let r=Q3.get(e.strings);return r===void 0&&Q3.set(e.strings,r=new Hl(e)),r}T(e){a4(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new u4(this.k(Wl()),this.k(Wl()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}},Qf=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=cr,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=cr}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Wa(this,e,r,0),s=!zl(e)||e!==this._$AH&&e!==ja,s&&(this._$AH=e);else{const a=e;let c,l;for(e=o[0],c=0;c<o.length-1;c++)l=Wa(this,a[n+c],r,c),l===ja&&(l=this._$AH[c]),s||(s=!zl(l)||l!==this._$AH[c]),l===cr?e=cr:e!==cr&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}s&&!i&&this.O(e)}O(e){e===cr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},BP=class extends Qf{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===cr?void 0:e}};class LP extends Qf{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==cr)}}class UP extends Qf{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=Wa(this,e,r,0)??cr)===ja)return;const n=this._$AH,i=e===cr&&n!==cr||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==cr&&(n===cr||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class FP{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Wa(this,e)}}const dh=tl.litHtmlPolyfillSupport;dh==null||dh(Hl,f2),(tl.litHtmlVersions??(tl.litHtmlVersions=[])).push("3.1.0");const jP=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new f2(e.insertBefore(Wl(),o),o,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ht=class extends Qs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jP(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ja}};var e5;ht._$litElement$=!0,ht.finalized=!0,(e5=globalThis.litElementHydrateSupport)==null||e5.call(globalThis,{LitElement:ht});const hh=globalThis.litElementPolyfillSupport;hh==null||hh({LitElement:ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const WP={attribute:!0,type:String,converter:tf,reflect:!1,hasChanged:u2},zP=(t=WP,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t)},init(a){return a!==void 0&&this.C(s,void 0,t),a}}}if(n==="setter"){const{name:s}=r;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+n)};function fr(t){return(e,r)=>typeof r=="object"?zP(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(t){return fr({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=t=>t??cr;var Ji=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let gi=class extends ht{constructor(){super(),this.unsubscribe=[],this.networkImages=go.state.networkImages,this.disabled=!1,this.balance="show",this.address=St.state.address,this.balanceVal=St.state.balance,this.balanceSymbol=St.state.balanceSymbol,this.profileName=St.state.profileName,this.profileImage=St.state.profileImage,this.network=zt.state.caipNetwork,this.unsubscribe.push(St.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),zt.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""],r=this.balance==="show";return fe`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${pt(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${pt(e)}
        avatarSrc=${pt(this.profileImage)}
        balance=${r?$e.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){gr.open()}};Ji([fr({type:Boolean})],gi.prototype,"disabled",void 0);Ji([fr()],gi.prototype,"balance",void 0);Ji([Le()],gi.prototype,"address",void 0);Ji([Le()],gi.prototype,"balanceVal",void 0);Ji([Le()],gi.prototype,"balanceSymbol",void 0);Ji([Le()],gi.prototype,"profileName",void 0);Ji([Le()],gi.prototype,"profileImage",void 0);Ji([Le()],gi.prototype,"network",void 0);gi=Ji([ye("w3m-account-button")],gi);var ks=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let ko=class extends ht{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=St.state.isConnected,this.unsubscribe.push(St.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?fe`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${pt(this.balance)}
          >
          </w3m-account-button>
        `:fe`
          <w3m-connect-button
            size=${pt(this.size)}
            label=${pt(this.label)}
            loadingLabel=${pt(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ks([fr({type:Boolean})],ko.prototype,"disabled",void 0);ks([fr()],ko.prototype,"balance",void 0);ks([fr()],ko.prototype,"size",void 0);ks([fr()],ko.prototype,"label",void 0);ks([fr()],ko.prototype,"loadingLabel",void 0);ks([Le()],ko.prototype,"isAccount",void 0);ko=ks([ye("w3m-button")],ko);var Au=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let za=class extends ht{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=gr.state.open,this.unsubscribe.push(gr.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return fe`
      <wui-connect-button
        size=${pt(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?gr.close():gr.open()}};Au([fr()],za.prototype,"size",void 0);Au([fr()],za.prototype,"label",void 0);Au([fr()],za.prototype,"loadingLabel",void 0);Au([Le()],za.prototype,"open",void 0);za=Au([ye("w3m-connect-button")],za);const HP=Fr`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var f4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const em="scroll-lock";let ql=class extends ht{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=gr.state.open,this.initializeTheming(),st.prefetch(),this.unsubscribe.push(gr.subscribeKey("open",e=>e?this.onOpen():this.onClose())),Pt.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?fe`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&gr.close()}initializeTheming(){const{themeVariables:e,themeMode:r}=un.state,n=Ot.getColorTheme(r);eC(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,gn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=em,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${em}"]`);e&&e.remove()}onAddKeyboardListener(){var r;this.abortController=new AbortController;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")gr.close();else if(n.key==="Tab"){const{tagName:i}=n.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}};ql.styles=HP;f4([Le()],ql.prototype,"open",void 0);ql=f4([ye("w3m-modal")],ql);const qP=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ql}},Symbol.toStringTag,{value:"Module"}));var ed=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Gl=class extends ht{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=zt.state.caipNetwork,this.connected=St.state.isConnected,this.unsubscribe.push(zt.subscribeKey("caipNetwork",e=>this.network=e),St.subscribeKey("isConnected",e=>this.connected=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return fe`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${pt(nr.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){gr.open({view:"Networks"})}};ed([fr({type:Boolean})],Gl.prototype,"disabled",void 0);ed([Le()],Gl.prototype,"network",void 0);ed([Le()],Gl.prototype,"connected",void 0);Gl=ed([ye("w3m-network-button")],Gl);const GP=Fr`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var d4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let nf=class extends ht{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Ve.state.view,this.unsubscribe.push(Ve.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const r=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:r}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=r}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(r=>r())}render(){return fe`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return fe`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return fe`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return fe`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return fe`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return fe`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return fe`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return fe`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return fe`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return fe`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return fe`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return fe`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return fe`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return fe`<w3m-transactions-view></w3m-transactions-view>`;default:return fe`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:r}=Ve.state;let n=-10,i=10;r.length<this.prevHistoryLength&&(n=10,i=-10),this.prevHistoryLength=r.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};nf.styles=GP;d4([Le()],nf.prototype,"view",void 0);nf=d4([ye("w3m-router")],nf);const VP=Fr`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Uo=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let mi=class extends ht{constructor(){super(),this.usubscribe=[],this.networkImages=go.state.networkImages,this.address=St.state.address,this.profileImage=St.state.profileImage,this.profileName=St.state.profileName,this.balance=St.state.balance,this.balanceSymbol=St.state.balanceSymbol,this.network=zt.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(St.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):gr.close()}),zt.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var r,n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""];return fe`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${pt(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ot.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ot.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${$e.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${pt(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=St.state;return e?fe`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=zt.state,r=e?e.length>1:!1,n=e==null?void 0:e.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return r||!n}onCopyAddress(){try{this.address&&($e.copyToClopboard(this.address),gn.showSuccess("Address copied"))}catch{gn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&Ve.push("Networks")}onTransactions(){Pt.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),Ve.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await yt.disconnect(),Pt.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),gr.close()}catch{Pt.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),gn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=St.state;e&&$e.openHref(e,"_blank")}};mi.styles=VP;Uo([Le()],mi.prototype,"address",void 0);Uo([Le()],mi.prototype,"profileImage",void 0);Uo([Le()],mi.prototype,"profileName",void 0);Uo([Le()],mi.prototype,"balance",void 0);Uo([Le()],mi.prototype,"balanceSymbol",void 0);Uo([Le()],mi.prototype,"network",void 0);Uo([Le()],mi.prototype,"disconecting",void 0);mi=Uo([ye("w3m-account-view")],mi);var h4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let _1=class extends ht{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=$e.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return fe`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?fe`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:fe`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return $e.isMobile()?fe`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Ve.push("ConnectingWalletConnect")}};h4([Le()],_1.prototype,"search",void 0);_1=h4([ye("w3m-all-wallets-view")],_1);const KP=Fr`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var p4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let of=class extends ht{constructor(){super(),this.unsubscribe=[],this.connectors=pn.state.connectors,this.unsubscribe.push(pn.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return fe`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if($e.isMobile())return null;const e=this.connectors.find(r=>r.type==="WALLET_CONNECT");return e?fe`
      <wui-list-wallet
        imageSrc=${pt(nr.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=bt.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(n=>fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:e}=st.state;return e.length?this.filterOutDuplicateWallets(e).map(n=>fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return hn.getRecentWallets().map(r=>fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(r=>r.type==="ANNOUNCED");return this.connectors.map(r=>r.type!=="INJECTED"||!yt.checkInstalled()?null:fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getConnectorImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnector(r)}
          tagLabel=${pt(e?void 0:"installed")}
          tagVariant=${pt(e?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=Math.floor(st.state.count/10)*10;return fe`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=st.state,{customWallets:r,featuredWalletIds:n}=bt.state,{connectors:i}=pn.state,o=hn.getRecentWallets(),s=i.filter(u=>u.type==="ANNOUNCED");if(n||r||!e.length)return null;const a=s.length+o.length,c=Math.max(0,2-a);return this.filterOutDuplicateWallets(e).slice(0,c).map(u=>fe`
        <wui-list-wallet
          imageSrc=${pt(nr.getWalletImage(u))}
          name=${(u==null?void 0:u.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(u)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?$e.isMobile()?Ve.push("AllWallets"):Ve.push("ConnectingWalletConnect"):Ve.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:r}=pn.state,i=hn.getRecentWallets().map(a=>a.id),o=r.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean);return e.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Pt.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Ve.push("AllWallets")}onConnectWallet(e){Ve.push("ConnectingWalletConnect",{wallet:e})}};of.styles=KP;p4([Le()],of.prototype,"connectors",void 0);of=p4([ye("w3m-connect-view")],of);const ZP=Fr`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ts=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};class Xr extends ht{constructor(){var e,r,n,i;super(),this.wallet=(e=Ve.state.data)==null?void 0:e.wallet,this.connector=(r=Ve.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=nr.getWalletImage(this.wallet)??nr.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=yt.state.wcUri,this.error=yt.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(yt.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),yt.subscribeKey("wcError",o=>this.error=o),yt.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),fe`
      <wui-flex
        data-error=${pt(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${pt(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?fe`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,r;this.buffering||(yt.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const e=un.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return fe`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&($e.copyToClopboard(this.uri),gn.showSuccess("Link copied"))}catch{gn.showError("Failed to copy")}}}Xr.styles=ZP;Ts([Le()],Xr.prototype,"uri",void 0);Ts([Le()],Xr.prototype,"error",void 0);Ts([Le()],Xr.prototype,"ready",void 0);Ts([Le()],Xr.prototype,"showRetry",void 0);Ts([Le()],Xr.prototype,"buffering",void 0);Ts([fr({type:Boolean})],Xr.prototype,"isMobile",void 0);Ts([fr()],Xr.prototype,"onRetry",void 0);var JP=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const YP={INJECTED:"browser",ANNOUNCED:"browser"};let tm=class extends Xr{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:YP[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&hn.setConnectedWalletImageUrl(this.connector.imageUrl),await yt.connectExternal(this.connector),gr.close(),Pt.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Pt.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};tm=JP([ye("w3m-connecting-external-view")],tm);var XP=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let rm=class extends ht{constructor(){var e,r;super(...arguments),this.dappUrl=(e=bt.state.metadata)==null?void 0:e.url,this.dappName=(r=bt.state.metadata)==null?void 0:r.name}render(){return fe`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?fe`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&$e.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){Ve.goBack()}};rm=XP([ye("w3m-connecting-siwe-view")],rm);var d2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let sf=class extends ht{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=Ve.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),zc.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),fe`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):fe`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:r}=yt.state;if(e||$e.isPairingExpired(r)){if(yt.connectWalletConnect(),this.wallet){const n=nr.getWalletImage(this.wallet);n&&hn.setConnectedWalletImageUrl(n)}else{const i=pn.state.connectors.find(s=>s.type==="WALLET_CONNECT"),o=nr.getConnectorImage(i);o&&hn.setConnectedWalletImageUrl(o)}await yt.state.wcPromise,this.finalizeConnection(),gr.close()}}catch(r){Pt.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),yt.setWcError(!0),$e.isAllowedRetry(this.lastRetry)&&(gn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:r}=yt.state;e&&hn.setWalletConnectDeepLink(e),r&&hn.setWeb3ModalRecent(r),Pt.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:r,webapp_link:n,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:v})=>v).filter(Boolean),a=o?[o]:s??[],c=a.length,l=e,u=n,f=yt.checkInstalled(a),p=c&&f,b=r&&!$e.isMobile();p&&this.platforms.push("browser"),l&&this.platforms.push($e.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),b&&this.platforms.push("desktop"),!p&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return fe`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return fe`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return fe`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return fe`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return fe`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return fe`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?fe`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};d2([Le()],sf.prototype,"platform",void 0);d2([Le()],sf.prototype,"platforms",void 0);sf=d2([ye("w3m-connecting-wc-view")],sf);var QP=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let nm=class extends ht{constructor(){var e;super(...arguments),this.wallet=(e=Ve.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return fe`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?fe`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?fe`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?fe`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?fe`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&$e.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&$e.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&$e.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&$e.openHref(this.wallet.homepage,"_blank")}};nm=QP([ye("w3m-downloads-view")],nm);var ek=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const tk="https://walletconnect.com/explorer";let im=class extends ht{render(){return fe`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{$e.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:r}=st.state,{customWallets:n}=bt.state;return[...r,...n??[],...e].slice(0,4).map(o=>fe`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${pt(nr.getWalletImage(o))}
          @click=${()=>{$e.openHref(o.homepage??tk,"_blank")}}
        ></wui-list-wallet>
      `)}};im=ek([ye("w3m-get-wallet-view")],im);const rk=Fr`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var td=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Ha=class extends ht{constructor(){var e;super(),this.network=(e=Ve.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=zt.state.caipNetwork,this.unsubscribe.push(zt.subscribeKey("caipNetwork",r=>{var n;(r==null?void 0:r.id)!==((n=this.currentNetwork)==null?void 0:n.id)&&Ve.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",r=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return fe`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${pt(nr.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:fe`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await zt.switchActiveNetwork(this.network),Ve.goBack())}catch{this.error=!0}}};Ha.styles=rk;td([Le()],Ha.prototype,"showRetry",void 0);td([Le()],Ha.prototype,"error",void 0);td([Le()],Ha.prototype,"currentNetwork",void 0);Ha=td([ye("w3m-network-switch-view")],Ha);var g4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let C1=class extends ht{constructor(){super(),this.unsubscribe=[],this.caipNetwork=zt.state.caipNetwork,this.unsubscribe.push(zt.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return fe`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Pt.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Ve.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:r,supportsAllNetworks:n}=zt.state,i=e,o=r;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return fe`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${pt(nr.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!n&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:r}=St.state,{approvedCaipNetworkIds:n,supportsAllNetworks:i,caipNetwork:o}=zt.state;r&&(o==null?void 0:o.id)!==e.id?n!=null&&n.includes(e.id)?await zt.switchActiveNetwork(e):i&&Ve.push("SwitchNetwork",{network:e}):r||(zt.setCaipNetwork(e),Ve.push("Connect"))}};g4([Le()],C1.prototype,"caipNetwork",void 0);C1=g4([ye("w3m-networks-view")],C1);const nk=Fr`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var Is=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const Xu="last-transaction",ik=7;let zi=class extends ht{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=St.state.address,this.transactions=kn.state.transactions,this.transactionsByYear=kn.state.transactionsByYear,this.loading=kn.state.loading,this.empty=kn.state.empty,this.next=kn.state.next,this.unsubscribe.push(St.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,kn.resetTransactions(),kn.fetchTransactions(e.address))}),kn.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&kn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return fe`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((r,n)=>{const i=n===e.length-1,o=parseInt(r,10),s=aa.getTransactionGroupTitle(o),a=this.transactionsByYear[o];return a?fe`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,r){const{date:n,descriptions:i,direction:o,isAllNFT:s,images:a,status:c,transfers:l,type:u}=this.getTransactionListItemProps(e),f=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!s?fe`
        <wui-transaction-list-item
          date=${n}
          direction=${o}
          id=${r&&this.next?Xu:""}
          status=${c}
          type=${u}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:f?l.map((b,v)=>{const A=aa.getTransferDescription(b),_=r&&v===l.length-1;return fe` <wui-transaction-list-item
          date=${n}
          direction=${b.direction}
          id=${_&&this.next?Xu:""}
          status=${c}
          type=${u}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[v]]}
          .descriptions=${[A]}
        ></wui-transaction-list-item>`}):fe`
      <wui-transaction-list-item
        date=${n}
        direction=${o}
        id=${r&&this.next?Xu:""}
        status=${c}
        type=${u}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,r){return e.map((n,i)=>{const o=r&&i===e.length-1;return fe`${this.templateRenderTransaction(n,o)}`})}templateEmpty(){return fe`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(ik).fill(fe` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=bt.state;this.paginationObserver=new IntersectionObserver(([r])=>{r!=null&&r.isIntersecting&&!this.loading&&(kn.fetchTransactions(this.address),Pt.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var r,n,i;(r=this.paginationObserver)==null||r.disconnect();const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Xu}`);e&&((i=this.paginationObserver)==null||i.observe(e))}getTransactionListItemProps(e){var c,l,u,f,p;const r=n4.getRelativeDateFromNow((c=e==null?void 0:e.metadata)==null?void 0:c.minedAt),n=aa.getTransactionDescriptions(e),i=e==null?void 0:e.transfers,o=(l=e==null?void 0:e.transfers)==null?void 0:l[0],s=!!o&&((u=e==null?void 0:e.transfers)==null?void 0:u.every(b=>!!b.nft_info)),a=aa.getTransactionImages(i);return{date:r,direction:o==null?void 0:o.direction,descriptions:n,isAllNFT:s,images:a,status:(f=e.metadata)==null?void 0:f.status,transfers:i,type:(p=e.metadata)==null?void 0:p.operationType}}};zi.styles=nk;Is([Le()],zi.prototype,"address",void 0);Is([Le()],zi.prototype,"transactions",void 0);Is([Le()],zi.prototype,"transactionsByYear",void 0);Is([Le()],zi.prototype,"loading",void 0);Is([Le()],zi.prototype,"empty",void 0);Is([Le()],zi.prototype,"next",void 0);zi=Is([ye("w3m-transactions-view")],zi);var ok=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const sk=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let om=class extends ht{render(){return fe`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${sk}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{$e.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};om=ok([ye("w3m-what-is-a-network-view")],om);var ak=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const ck=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let sm=class extends ht{render(){return fe`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ck}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Pt.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Ve.push("GetWallet")}};sm=ak([ye("w3m-what-is-a-wallet-view")],sm);const lk=Fr`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Su=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const am="local-paginator";let vs=class extends ht{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!st.state.wallets.length,this.wallets=st.state.wallets,this.recommended=st.state.recommended,this.featured=st.state.featured,this.unsubscribe.push(st.subscribeKey("wallets",e=>this.wallets=e),st.subscribeKey("recommended",e=>this.recommended=e),st.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(r=>r()),(e=this.paginationObserver)==null||e.disconnect()}render(){return fe`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-grid");this.initial&&e&&(await st.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,r){return[...Array(e)].map(()=>fe`
        <wui-card-select-loader type="wallet" id=${pt(r)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(r=>fe`
        <wui-card-select
          imageSrc=${pt(nr.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:r,featured:n,count:i}=st.state,o=window.innerWidth<352?3:4,s=e.length+r.length;let c=Math.ceil(s/o)*o-s+o;return c-=e.length?n.length%o:0,i===0||[...n,...e,...r].length<i?this.shimmerTemplate(c,am):null}createPaginationObserver(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${am}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=st.state;s.length<o&&st.fetchWallets({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:r}=pn.state,n=r.find(({explorerId:i})=>i===e.id);n?Ve.push("ConnectingExternal",{connector:n}):Ve.push("ConnectingWalletConnect",{wallet:e})}};vs.styles=lk;Su([Le()],vs.prototype,"initial",void 0);Su([Le()],vs.prototype,"wallets",void 0);Su([Le()],vs.prototype,"recommended",void 0);Su([Le()],vs.prototype,"featured",void 0);vs=Su([ye("w3m-all-wallets-list")],vs);const uk=Fr`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var h2=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Vl=class extends ht{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?fe`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await st.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=st.state;return e.length?fe`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(r=>fe`
            <wui-card-select
              imageSrc=${pt(nr.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:fe`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:r}=pn.state,n=r.find(({explorerId:i})=>i===e.id);n?Ve.push("ConnectingExternal",{connector:n}):Ve.push("ConnectingWalletConnect",{wallet:e})}};Vl.styles=uk;h2([Le()],Vl.prototype,"loading",void 0);h2([fr()],Vl.prototype,"query",void 0);Vl=h2([ye("w3m-all-wallets-search")],Vl);var rd=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let Kl=class extends ht{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(yt.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return fe`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(r=>r==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:r==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:r==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:r==="web"?{label:"Webapp",icon:"browser",platform:"web"}:r==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:r})=>r),e}onTabChange(e){var n;const r=this.platformTabs[e];r&&((n=this.onSelectPlatfrom)==null||n.call(this,r))}};rd([fr({type:Array})],Kl.prototype,"platforms",void 0);rd([fr()],Kl.prototype,"onSelectPlatfrom",void 0);rd([Le()],Kl.prototype,"buffering",void 0);Kl=rd([ye("w3m-connecting-header")],Kl);var fk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let cm=class extends Xr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=pn.state,r=e.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),n=e.find(i=>i.type==="INJECTED");r?await yt.connectExternal(r):n&&await yt.connectExternal(n),gr.close(),Pt.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Pt.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};cm=fk([ye("w3m-connecting-wc-browser")],cm);var dk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let lm=class extends Xr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:r,name:n}=this.wallet,{redirect:i,href:o}=$e.formatNativeUrl(r,this.uri);yt.setWcLinking({name:n,href:o}),yt.setRecentWallet(this.wallet),$e.openHref(i,"_self")}catch{this.error=!0}}};lm=dk([ye("w3m-connecting-wc-desktop")],lm);var hk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let um=class extends Xr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:r,name:n}=this.wallet,{redirect:i,href:o}=$e.formatNativeUrl(r,this.uri);yt.setWcLinking({name:n,href:o}),yt.setRecentWallet(this.wallet),$e.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const e=$e.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(yt.setBuffering(!0),setTimeout(()=>{yt.setBuffering(!1)},5e3))}};um=hk([ye("w3m-connecting-wc-mobile")],um);const pk=Fr`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var gk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let A1=class extends Xr{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),fe`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,r=this.wallet?this.wallet.name:void 0;return yt.setWcLinking(void 0),yt.setRecentWallet(this.wallet),fe`<wui-qr-code
      size=${e}
      theme=${un.state.themeMode}
      uri=${this.uri}
      imageSrc=${pt(nr.getWalletImage(this.wallet))}
      alt=${pt(r)}
    ></wui-qr-code>`}};A1.styles=pk;A1=gk([ye("w3m-connecting-wc-qrcode")],A1);const mk=Fr`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var wk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let S1=class extends ht{constructor(){var e;super(...arguments),this.dappImageUrl=(e=bt.state.metadata)==null?void 0:e.icons,this.walletImageUrl=hn.getConnectedWalletImageUrl()}firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return fe`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,r){e.animate([{transform:"translateX(0px)"},{transform:r}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};S1.styles=mk;S1=wk([ye("w3m-connecting-siwe")],S1);var bk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let fm=class extends ht{constructor(){var e;if(super(),this.wallet=(e=Ve.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return fe`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${pt(nr.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};fm=bk([ye("w3m-connecting-wc-unsupported")],fm);var yk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let dm=class extends Xr{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Pt.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:r,name:n}=this.wallet,{redirect:i,href:o}=$e.formatUniversalUrl(r,this.uri);yt.setWcLinking({name:n,href:o}),yt.setRecentWallet(this.wallet),$e.openHref(i,"_blank")}catch{this.error=!0}}};dm=yk([ye("w3m-connecting-wc-web")],dm);const vk=Fr`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var nd=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};function hm(){var i,o,s,a,c,l;const t=(o=(i=Ve.state.data)==null?void 0:i.connector)==null?void 0:o.name,e=(a=(s=Ve.state.data)==null?void 0:s.wallet)==null?void 0:a.name,r=(l=(c=Ve.state.data)==null?void 0:c.network)==null?void 0:l.name,n=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads",Transactions:"Activity"}}let qa=class extends ht{constructor(){super(),this.unsubscribe=[],this.heading=hm()[Ve.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Ve.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),yt.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return fe`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${gr.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Pt.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Ve.push("WhatIsAWallet")}titleTemplate(){return fe`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=Ve.state,r=e==="Connect";return this.showBack?fe`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${Ve.goBack}
      ></wui-icon-link>`:fe`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?fe`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-text");if(r){const i=hm()[e];await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var n;const{history:e}=Ve.state,r=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");e.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};qa.styles=[vk];nd([Le()],qa.prototype,"heading",void 0);nd([Le()],qa.prototype,"buffering",void 0);nd([Le()],qa.prototype,"showBack",void 0);qa=nd([ye("w3m-header")],qa);var m4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let P1=class extends ht{constructor(){super(...arguments),this.data=[]}render(){return fe`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>fe`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(r=>fe`<wui-visual name=${r}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};m4([fr({type:Array})],P1.prototype,"data",void 0);P1=m4([ye("w3m-help-widget")],P1);const Ek=Fr`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var xk=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let k1=class extends ht{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=bt.state;return!e&&!r?null:fe`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=bt.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=bt.state;return e?fe`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=bt.state;return e?fe`<a href=${e}>Privacy Policy</a>`:null}};k1.styles=[Ek];k1=xk([ye("w3m-legal-footer")],k1);const _k=Fr`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};let af=class extends ht{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:r,play_store:n,chrome_store:i,homepage:o}=this.wallet,s=$e.isMobile(),a=$e.isIos(),c=$e.isAndroid(),l=[r,n,o,i].filter(Boolean).length>1,u=Ot.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?fe`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>Ve.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&o?fe`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:r&&a?fe`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&c?fe`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&$e.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&$e.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&$e.openHref(this.wallet.homepage,"_blank")}};af.styles=[_k];w4([fr({type:Object})],af.prototype,"wallet",void 0);af=w4([ye("w3m-mobile-download-links")],af);const Ck=Fr`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var b4=function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o};const Ak={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let cf=class extends ht{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=gn.state.open,this.unsubscribe.push(gn.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:r}=gn.state,n=Ak[r];return fe`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>gn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};cf.styles=Ck;b4([Le()],cf.prototype,"open",void 0);cf=b4([ye("w3m-snackbar")],cf);let pm=!1;class Sk{constructor(e){this.initPromise=void 0,this.setIsConnected=r=>{St.setIsConnected(r)},this.setCaipAddress=r=>{St.setCaipAddress(r)},this.setBalance=(r,n)=>{St.setBalance(r,n)},this.setProfileName=r=>{St.setProfileName(r)},this.setProfileImage=r=>{St.setProfileImage(r)},this.resetAccount=()=>{St.resetAccount()},this.setCaipNetwork=r=>{zt.setCaipNetwork(r)},this.getCaipNetwork=()=>zt.state.caipNetwork,this.setRequestedCaipNetworks=r=>{zt.setRequestedCaipNetworks(r)},this.getApprovedCaipNetworksData=()=>zt.getApprovedCaipNetworksData(),this.resetNetwork=()=>{zt.resetNetwork()},this.setConnectors=r=>{pn.setConnectors(r)},this.addConnector=r=>{pn.addConnector(r)},this.getConnectors=()=>pn.getConnectors(),this.resetWcConnection=()=>{yt.resetWcConnection()},this.fetchIdentity=r=>l6.fetchIdentity(r),this.setAddressExplorerUrl=r=>{St.setAddressExplorerUrl(r)},this.setSIWENonce=r=>{Jn.setNonce(r)},this.setSIWESession=r=>{Jn.setSession(r)},this.setSIWEStatus=r=>{Jn.setStatus(r)},this.setSIWEMessage=r=>{Jn.setMessage(r)},this.getSIWENonce=()=>Jn.state.nonce,this.getSIWESession=()=>Jn.state.session,this.getSIWEStatus=()=>Jn.state.status,this.getSIWEMessage=()=>Jn.state.message,this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),gr.open(e)}async close(){await this.initOrContinue(),gr.close()}getThemeMode(){return un.state.themeMode}getThemeVariables(){return un.state.themeVariables}setThemeMode(e){un.setThemeMode(e),y6(un.state.themeMode)}setThemeVariables(e){un.setThemeVariables(e),tC(un.state.themeVariables)}subscribeTheme(e){return un.subscribe(e)}getState(){return{...Ta.state}}subscribeState(e){return Ta.subscribe(e)}getEvent(){return{...Pt.state}}subscribeEvents(e){return Pt.subscribe(e)}subscribeSIWEState(e){return Jn.subscribe(e)}initControllers(e){zt.setClient(e.networkControllerClient),zt.setDefaultCaipNetwork(e.defaultChain),bt.setProjectId(e.projectId),bt.setIncludeWalletIds(e.includeWalletIds),bt.setExcludeWalletIds(e.excludeWalletIds),bt.setFeaturedWalletIds(e.featuredWalletIds),bt.setTokens(e.tokens),bt.setTermsConditionsUrl(e.termsConditionsUrl),bt.setPrivacyPolicyUrl(e.privacyPolicyUrl),bt.setCustomWallets(e.customWallets),bt.setEnableAnalytics(e.enableAnalytics),bt.setSdkVersion(e._sdkVersion),yt.setClient(e.connectionControllerClient),e.siweControllerClient&&Jn.setSIWEClient(e.siweControllerClient),e.metadata&&bt.setMetadata(e.metadata),e.themeMode&&un.setThemeMode(e.themeMode),e.themeVariables&&un.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!pm&&$e.isClient()&&(pm=!0,this.initPromise=new Promise(async e=>{await Promise.all([ka(()=>import("./index-POBySCOI.js"),__vite__mapDeps([])),ka(()=>Promise.resolve().then(()=>qP),void 0)]);const r=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",r),e()})),this.initPromise}}const Ze={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.3.2"},es={ConnectorExplorerIds:{[Ze.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Ze.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Ze.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[Ze.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Ze.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Ze.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Ze.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Ze.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Ze.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Ze.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Ze.COINBASE_CONNECTOR_ID]:"Coinbase",[Ze.LEDGER_CONNECTOR_ID]:"Ledger",[Ze.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Ze.INJECTED_CONNECTOR_ID]:"INJECTED",[Ze.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Ze.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},qs={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,n])=>{e[`${Ze.EIP155}:${r}`]=n}),e}};function Pk(t){if(t)return{id:`${Ze.EIP155}:${t.id}`,name:t.name,imageId:es.EIP155NetworkImageIds[t.id]}}const kk="wagmi.wallet";class Tk extends Sk{constructor(e){const{wagmiConfig:r,siweConfig:n,chains:i,defaultChain:o,tokens:s,_sdkVersion:a,...c}=e;if(!r)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!r.connectors.find(f=>f.id===Ze.WALLET_CONNECT_CONNECTOR_ID))throw new Error("web3modal:constructor - WalletConnectConnector is required");const l={switchCaipNetwork:async f=>{const p=qs.caipNetworkIdToNumber(f==null?void 0:f.id);p&&await s6({chainId:p})},async getApprovedCaipNetworksData(){var p,b,v,A;const f=localStorage.getItem(kk);if(f!=null&&f.includes(Ze.WALLET_CONNECT_CONNECTOR_ID)){const _=r.connectors.find(R=>R.id===Ze.WALLET_CONNECT_CONNECTOR_ID);if(!_)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const P=(b=(p=(await _.getProvider()).signer)==null?void 0:p.session)==null?void 0:b.namespaces,M=(v=P==null?void 0:P[Ze.EIP155])==null?void 0:v.methods,D=(A=P==null?void 0:P[Ze.EIP155])==null?void 0:A.chains;return{supportsAllNetworks:M==null?void 0:M.includes(Ze.ADD_CHAIN_METHOD),approvedCaipNetworkIds:D}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async f=>{var v;const p=r.connectors.find(A=>A.id===Ze.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");p.on("message",A=>{A.type==="display_uri"&&(f(A.data),p.removeAllListeners())});const b=qs.caipNetworkIdToNumber((v=this.getCaipNetwork())==null?void 0:v.id);await _3({connector:p,chainId:b})},connectExternal:async({id:f,provider:p,info:b})=>{var _,N;const v=r.connectors.find(P=>P.id===f);if(!v)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&b&&v.id===Ze.EIP6963_CONNECTOR_ID&&((_=v.setEip6963Wallet)==null||_.call(v,{provider:p,info:b}));const A=qs.caipNetworkIdToNumber((N=this.getCaipNetwork())==null?void 0:N.id);await _3({connector:v,chainId:A})},checkInstalled:f=>{const p=this.getConnectors().filter(v=>v.type==="ANNOUNCED"),b=this.getConnectors().find(v=>v.type==="INJECTED");return f?p.length&&f.some(A=>p.some(_=>{var N;return((N=_.info)==null?void 0:N.rdns)===A}))?!0:b&&window!=null&&window.ethereum?f.some(v=>{var A;return!!((A=window.ethereum)!=null&&A[String(v)])}):!1:!!window.ethereum},disconnect:i6};super({networkControllerClient:l,connectionControllerClient:u,siweControllerClient:n,defaultChain:Pk(o),tokens:qs.getCaipTokens(s),_sdkVersion:a??`html-wagmi-${Ze.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(r),this.listenConnectors(r),a6(()=>this.syncAccount()),__(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:qs.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(r=>e({...r,selectedNetworkId:qs.caipNetworkIdToNumber(r.selectedNetworkId)}))}syncRequestedNetworks(e){const r=e==null?void 0:e.map(n=>{var i,o;return{id:`${Ze.EIP155}:${n.id}`,name:n.name,imageId:es.EIP155NetworkImageIds[n.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[n.id]}});this.setRequestedCaipNetworks(r??[])}async syncAccount(){const{address:e,isConnected:r}=Ui(),{chain:n}=Tl();if(this.resetAccount(),r&&e&&n){const i=`${Ze.EIP155}:${n.id}:${e}`;this.setIsConnected(r),this.setCaipAddress(i),await Promise.all([this.syncProfile(e),this.syncBalance(e,n),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!r&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:e,isConnected:r}=Ui(),{chain:n}=Tl();if(n){const c=String(n.id),l=`${Ze.EIP155}:${c}`;if(this.setCaipNetwork({id:l,name:n.name,imageId:es.EIP155NetworkImageIds[n.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[n.id]}),r&&e){const u=`${Ze.EIP155}:${n.id}:${e}`;if(this.setCaipAddress(u),(a=(s=n.blockExplorers)==null?void 0:s.default)!=null&&a.url){const f=`${n.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(f)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,n)}}}async syncProfile(e){try{const{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${Ze.EIP155}:${pa.id}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{const r=await A_({address:e,chainId:pa.id});if(r){this.setProfileName(r);const n=await C_({name:r,chainId:pa.id});n&&this.setProfileImage(n)}}}async syncBalance(e,r){var i,o,s;const n=await x_({address:e,chainId:r.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[r.id])==null?void 0:s.address});this.setBalance(n.formatted,n.symbol)}syncConnectors(e){const r=[];e.connectors.forEach(({id:n,name:i})=>{var o,s;n!==Ze.EIP6963_CONNECTOR_ID&&r.push({id:n,explorerId:es.ConnectorExplorerIds[n],imageId:es.ConnectorImageIds[n],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[n],name:es.ConnectorNamesMap[n]??i,type:es.ConnectorTypesMap[n]??"EXTERNAL"})}),this.setConnectors(r)}eip6963EventHandler(e,r){var n,i;if(r.detail){const{info:o,provider:s}=r.detail;this.getConnectors().find(l=>l.name===o.name)||(this.addConnector({id:Ze.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:o.icon??((i=(n=this.options)==null?void 0:n.connectorImages)==null?void 0:i[Ze.EIP6963_CONNECTOR_ID]),name:o.name,provider:s,info:o}),e.isAuthorized({info:o,provider:s}))}}listenConnectors(e){const r=e.connectors.find(n=>n.id===Ze.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&r){const n=this.eip6963EventHandler.bind(this,r);window.addEventListener(Ze.EIP6963_ANNOUNCE_EVENT,n),window.dispatchEvent(new Event(Ze.EIP6963_REQUEST_EVENT))}}}var Qu=function(t,e,r,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r},e0=function(t,e,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)},y0,no;const ph="connectedRdns";class Ik extends jp{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",y0.set(this,void 0),no.set(this,void 0),Qu(this,y0,this.options.getProvider(),"f")}async connect(e){var n;const r=await super.connect(e);return e0(this,no,"f")&&((n=this.storage)==null||n.setItem(ph,e0(this,no,"f").info.rdns)),r}async disconnect(){var e;await super.disconnect(),(e=this.storage)==null||e.removeItem(ph),Qu(this,no,void 0,"f")}async isAuthorized(e){var n;const r=(n=this.storage)==null?void 0:n.getItem(ph);if(r){if(!e||r!==e.info.rdns)return!0;Qu(this,no,e,"f")}return super.isAuthorized()}async getProvider(){var e;return Promise.resolve(((e=e0(this,no,"f"))==null?void 0:e.provider)??e0(this,y0,"f"))}setEip6963Wallet(e){Qu(this,no,e,"f")}}y0=new WeakMap,no=new WeakMap;var y4={},id={};id.byteLength=Mk;id.toByteArray=Dk;id.fromByteArray=Lk;var ii=[],fn=[],$k=typeof Uint8Array<"u"?Uint8Array:Array,gh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Gs=0,Nk=gh.length;Gs<Nk;++Gs)ii[Gs]=gh[Gs],fn[gh.charCodeAt(Gs)]=Gs;fn[45]=62;fn[95]=63;function v4(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function Mk(t){var e=v4(t),r=e[0],n=e[1];return(r+n)*3/4-n}function Ok(t,e,r){return(e+r)*3/4-r}function Dk(t){var e,r=v4(t),n=r[0],i=r[1],o=new $k(Ok(t,n,i)),s=0,a=i>0?n-4:n,c;for(c=0;c<a;c+=4)e=fn[t.charCodeAt(c)]<<18|fn[t.charCodeAt(c+1)]<<12|fn[t.charCodeAt(c+2)]<<6|fn[t.charCodeAt(c+3)],o[s++]=e>>16&255,o[s++]=e>>8&255,o[s++]=e&255;return i===2&&(e=fn[t.charCodeAt(c)]<<2|fn[t.charCodeAt(c+1)]>>4,o[s++]=e&255),i===1&&(e=fn[t.charCodeAt(c)]<<10|fn[t.charCodeAt(c+1)]<<4|fn[t.charCodeAt(c+2)]>>2,o[s++]=e>>8&255,o[s++]=e&255),o}function Rk(t){return ii[t>>18&63]+ii[t>>12&63]+ii[t>>6&63]+ii[t&63]}function Bk(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),i.push(Rk(n));return i.join("")}function Lk(t){for(var e,r=t.length,n=r%3,i=[],o=16383,s=0,a=r-n;s<a;s+=o)i.push(Bk(t,s,s+o>a?a:s+o));return n===1?(e=t[r-1],i.push(ii[e>>2]+ii[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],i.push(ii[e>>10]+ii[e>>4&63]+ii[e<<2&63]+"=")),i.join("")}var p2={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */p2.read=function(t,e,r,n,i){var o,s,a=i*8-n-1,c=(1<<a)-1,l=c>>1,u=-7,f=r?i-1:0,p=r?-1:1,b=t[e+f];for(f+=p,o=b&(1<<-u)-1,b>>=-u,u+=a;u>0;o=o*256+t[e+f],f+=p,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=n;u>0;s=s*256+t[e+f],f+=p,u-=8);if(o===0)o=1-l;else{if(o===c)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,n),o=o-l}return(b?-1:1)*s*Math.pow(2,o-n)};p2.write=function(t,e,r,n,i,o){var s,a,c,l=o*8-i-1,u=(1<<l)-1,f=u>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:o-1,v=n?1:-1,A=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+f>=1?e+=p/c:e+=p*Math.pow(2,1-f),e*c>=2&&(s++,c/=2),s+f>=u?(a=0,s=u):s+f>=1?(a=(e*c-1)*Math.pow(2,i),s=s+f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[r+b]=a&255,b+=v,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;t[r+b]=s&255,b+=v,s/=256,l-=8);t[r+b-v]|=A*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=id,r=p2,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=P,t.INSPECT_MAX_BYTES=50;const i=2147483647;t.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const B=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(B,g),B.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(B){if(B>i)throw new RangeError('The value "'+B+'" is invalid for option "size"');const g=new Uint8Array(B);return Object.setPrototypeOf(g,a.prototype),g}function a(B,g,x){if(typeof B=="number"){if(typeof g=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(B)}return c(B,g,x)}a.poolSize=8192;function c(B,g,x){if(typeof B=="string")return p(B,g);if(ArrayBuffer.isView(B))return v(B);if(B==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof B);if(Pe(B,ArrayBuffer)||B&&Pe(B.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Pe(B,SharedArrayBuffer)||B&&Pe(B.buffer,SharedArrayBuffer)))return A(B,g,x);if(typeof B=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const q=B.valueOf&&B.valueOf();if(q!=null&&q!==B)return a.from(q,g,x);const Z=_(B);if(Z)return Z;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof B[Symbol.toPrimitive]=="function")return a.from(B[Symbol.toPrimitive]("string"),g,x);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof B)}a.from=function(B,g,x){return c(B,g,x)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(B){if(typeof B!="number")throw new TypeError('"size" argument must be of type number');if(B<0)throw new RangeError('The value "'+B+'" is invalid for option "size"')}function u(B,g,x){return l(B),B<=0?s(B):g!==void 0?typeof x=="string"?s(B).fill(g,x):s(B).fill(g):s(B)}a.alloc=function(B,g,x){return u(B,g,x)};function f(B){return l(B),s(B<0?0:N(B)|0)}a.allocUnsafe=function(B){return f(B)},a.allocUnsafeSlow=function(B){return f(B)};function p(B,g){if((typeof g!="string"||g==="")&&(g="utf8"),!a.isEncoding(g))throw new TypeError("Unknown encoding: "+g);const x=M(B,g)|0;let q=s(x);const Z=q.write(B,g);return Z!==x&&(q=q.slice(0,Z)),q}function b(B){const g=B.length<0?0:N(B.length)|0,x=s(g);for(let q=0;q<g;q+=1)x[q]=B[q]&255;return x}function v(B){if(Pe(B,Uint8Array)){const g=new Uint8Array(B);return A(g.buffer,g.byteOffset,g.byteLength)}return b(B)}function A(B,g,x){if(g<0||B.byteLength<g)throw new RangeError('"offset" is outside of buffer bounds');if(B.byteLength<g+(x||0))throw new RangeError('"length" is outside of buffer bounds');let q;return g===void 0&&x===void 0?q=new Uint8Array(B):x===void 0?q=new Uint8Array(B,g):q=new Uint8Array(B,g,x),Object.setPrototypeOf(q,a.prototype),q}function _(B){if(a.isBuffer(B)){const g=N(B.length)|0,x=s(g);return x.length===0||B.copy(x,0,0,g),x}if(B.length!==void 0)return typeof B.length!="number"||mt(B.length)?s(0):b(B);if(B.type==="Buffer"&&Array.isArray(B.data))return b(B.data)}function N(B){if(B>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return B|0}function P(B){return+B!=B&&(B=0),a.alloc(+B)}a.isBuffer=function(g){return g!=null&&g._isBuffer===!0&&g!==a.prototype},a.compare=function(g,x){if(Pe(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),Pe(x,Uint8Array)&&(x=a.from(x,x.offset,x.byteLength)),!a.isBuffer(g)||!a.isBuffer(x))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(g===x)return 0;let q=g.length,Z=x.length;for(let re=0,ie=Math.min(q,Z);re<ie;++re)if(g[re]!==x[re]){q=g[re],Z=x[re];break}return q<Z?-1:Z<q?1:0},a.isEncoding=function(g){switch(String(g).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(g,x){if(!Array.isArray(g))throw new TypeError('"list" argument must be an Array of Buffers');if(g.length===0)return a.alloc(0);let q;if(x===void 0)for(x=0,q=0;q<g.length;++q)x+=g[q].length;const Z=a.allocUnsafe(x);let re=0;for(q=0;q<g.length;++q){let ie=g[q];if(Pe(ie,Uint8Array))re+ie.length>Z.length?(a.isBuffer(ie)||(ie=a.from(ie)),ie.copy(Z,re)):Uint8Array.prototype.set.call(Z,ie,re);else if(a.isBuffer(ie))ie.copy(Z,re);else throw new TypeError('"list" argument must be an Array of Buffers');re+=ie.length}return Z};function M(B,g){if(a.isBuffer(B))return B.length;if(ArrayBuffer.isView(B)||Pe(B,ArrayBuffer))return B.byteLength;if(typeof B!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof B);const x=B.length,q=arguments.length>2&&arguments[2]===!0;if(!q&&x===0)return 0;let Z=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return x;case"utf8":case"utf-8":return gt(B).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x*2;case"hex":return x>>>1;case"base64":return Se(B).length;default:if(Z)return q?-1:gt(B).length;g=(""+g).toLowerCase(),Z=!0}}a.byteLength=M;function D(B,g,x){let q=!1;if((g===void 0||g<0)&&(g=0),g>this.length||((x===void 0||x>this.length)&&(x=this.length),x<=0)||(x>>>=0,g>>>=0,x<=g))return"";for(B||(B="utf8");;)switch(B){case"hex":return F(this,g,x);case"utf8":case"utf-8":return I(this,g,x);case"ascii":return j(this,g,x);case"latin1":case"binary":return z(this,g,x);case"base64":return C(this,g,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y(this,g,x);default:if(q)throw new TypeError("Unknown encoding: "+B);B=(B+"").toLowerCase(),q=!0}}a.prototype._isBuffer=!0;function R(B,g,x){const q=B[g];B[g]=B[x],B[x]=q}a.prototype.swap16=function(){const g=this.length;if(g%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let x=0;x<g;x+=2)R(this,x,x+1);return this},a.prototype.swap32=function(){const g=this.length;if(g%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let x=0;x<g;x+=4)R(this,x,x+3),R(this,x+1,x+2);return this},a.prototype.swap64=function(){const g=this.length;if(g%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let x=0;x<g;x+=8)R(this,x,x+7),R(this,x+1,x+6),R(this,x+2,x+5),R(this,x+3,x+4);return this},a.prototype.toString=function(){const g=this.length;return g===0?"":arguments.length===0?I(this,0,g):D.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(g){if(!a.isBuffer(g))throw new TypeError("Argument must be a Buffer");return this===g?!0:a.compare(this,g)===0},a.prototype.inspect=function(){let g="";const x=t.INSPECT_MAX_BYTES;return g=this.toString("hex",0,x).replace(/(.{2})/g,"$1 ").trim(),this.length>x&&(g+=" ... "),"<Buffer "+g+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(g,x,q,Z,re){if(Pe(g,Uint8Array)&&(g=a.from(g,g.offset,g.byteLength)),!a.isBuffer(g))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof g);if(x===void 0&&(x=0),q===void 0&&(q=g?g.length:0),Z===void 0&&(Z=0),re===void 0&&(re=this.length),x<0||q>g.length||Z<0||re>this.length)throw new RangeError("out of range index");if(Z>=re&&x>=q)return 0;if(Z>=re)return-1;if(x>=q)return 1;if(x>>>=0,q>>>=0,Z>>>=0,re>>>=0,this===g)return 0;let ie=re-Z,me=q-x;const Ne=Math.min(ie,me),Te=this.slice(Z,re),Oe=g.slice(x,q);for(let Je=0;Je<Ne;++Je)if(Te[Je]!==Oe[Je]){ie=Te[Je],me=Oe[Je];break}return ie<me?-1:me<ie?1:0};function W(B,g,x,q,Z){if(B.length===0)return-1;if(typeof x=="string"?(q=x,x=0):x>2147483647?x=2147483647:x<-2147483648&&(x=-2147483648),x=+x,mt(x)&&(x=Z?0:B.length-1),x<0&&(x=B.length+x),x>=B.length){if(Z)return-1;x=B.length-1}else if(x<0)if(Z)x=0;else return-1;if(typeof g=="string"&&(g=a.from(g,q)),a.isBuffer(g))return g.length===0?-1:w(B,g,x,q,Z);if(typeof g=="number")return g=g&255,typeof Uint8Array.prototype.indexOf=="function"?Z?Uint8Array.prototype.indexOf.call(B,g,x):Uint8Array.prototype.lastIndexOf.call(B,g,x):w(B,[g],x,q,Z);throw new TypeError("val must be string, number or Buffer")}function w(B,g,x,q,Z){let re=1,ie=B.length,me=g.length;if(q!==void 0&&(q=String(q).toLowerCase(),q==="ucs2"||q==="ucs-2"||q==="utf16le"||q==="utf-16le")){if(B.length<2||g.length<2)return-1;re=2,ie/=2,me/=2,x/=2}function Ne(Oe,Je){return re===1?Oe[Je]:Oe.readUInt16BE(Je*re)}let Te;if(Z){let Oe=-1;for(Te=x;Te<ie;Te++)if(Ne(B,Te)===Ne(g,Oe===-1?0:Te-Oe)){if(Oe===-1&&(Oe=Te),Te-Oe+1===me)return Oe*re}else Oe!==-1&&(Te-=Te-Oe),Oe=-1}else for(x+me>ie&&(x=ie-me),Te=x;Te>=0;Te--){let Oe=!0;for(let Je=0;Je<me;Je++)if(Ne(B,Te+Je)!==Ne(g,Je)){Oe=!1;break}if(Oe)return Te}return-1}a.prototype.includes=function(g,x,q){return this.indexOf(g,x,q)!==-1},a.prototype.indexOf=function(g,x,q){return W(this,g,x,q,!0)},a.prototype.lastIndexOf=function(g,x,q){return W(this,g,x,q,!1)};function H(B,g,x,q){x=Number(x)||0;const Z=B.length-x;q?(q=Number(q),q>Z&&(q=Z)):q=Z;const re=g.length;q>re/2&&(q=re/2);let ie;for(ie=0;ie<q;++ie){const me=parseInt(g.substr(ie*2,2),16);if(mt(me))return ie;B[x+ie]=me}return ie}function X(B,g,x,q){return Ie(gt(g,B.length-x),B,x,q)}function te(B,g,x,q){return Ie(nt(g),B,x,q)}function L(B,g,x,q){return Ie(Se(g),B,x,q)}function h(B,g,x,q){return Ie(Ue(g,B.length-x),B,x,q)}a.prototype.write=function(g,x,q,Z){if(x===void 0)Z="utf8",q=this.length,x=0;else if(q===void 0&&typeof x=="string")Z=x,q=this.length,x=0;else if(isFinite(x))x=x>>>0,isFinite(q)?(q=q>>>0,Z===void 0&&(Z="utf8")):(Z=q,q=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const re=this.length-x;if((q===void 0||q>re)&&(q=re),g.length>0&&(q<0||x<0)||x>this.length)throw new RangeError("Attempt to write outside buffer bounds");Z||(Z="utf8");let ie=!1;for(;;)switch(Z){case"hex":return H(this,g,x,q);case"utf8":case"utf-8":return X(this,g,x,q);case"ascii":case"latin1":case"binary":return te(this,g,x,q);case"base64":return L(this,g,x,q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h(this,g,x,q);default:if(ie)throw new TypeError("Unknown encoding: "+Z);Z=(""+Z).toLowerCase(),ie=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function C(B,g,x){return g===0&&x===B.length?e.fromByteArray(B):e.fromByteArray(B.slice(g,x))}function I(B,g,x){x=Math.min(B.length,x);const q=[];let Z=g;for(;Z<x;){const re=B[Z];let ie=null,me=re>239?4:re>223?3:re>191?2:1;if(Z+me<=x){let Ne,Te,Oe,Je;switch(me){case 1:re<128&&(ie=re);break;case 2:Ne=B[Z+1],(Ne&192)===128&&(Je=(re&31)<<6|Ne&63,Je>127&&(ie=Je));break;case 3:Ne=B[Z+1],Te=B[Z+2],(Ne&192)===128&&(Te&192)===128&&(Je=(re&15)<<12|(Ne&63)<<6|Te&63,Je>2047&&(Je<55296||Je>57343)&&(ie=Je));break;case 4:Ne=B[Z+1],Te=B[Z+2],Oe=B[Z+3],(Ne&192)===128&&(Te&192)===128&&(Oe&192)===128&&(Je=(re&15)<<18|(Ne&63)<<12|(Te&63)<<6|Oe&63,Je>65535&&Je<1114112&&(ie=Je))}}ie===null?(ie=65533,me=1):ie>65535&&(ie-=65536,q.push(ie>>>10&1023|55296),ie=56320|ie&1023),q.push(ie),Z+=me}return O(q)}const $=4096;function O(B){const g=B.length;if(g<=$)return String.fromCharCode.apply(String,B);let x="",q=0;for(;q<g;)x+=String.fromCharCode.apply(String,B.slice(q,q+=$));return x}function j(B,g,x){let q="";x=Math.min(B.length,x);for(let Z=g;Z<x;++Z)q+=String.fromCharCode(B[Z]&127);return q}function z(B,g,x){let q="";x=Math.min(B.length,x);for(let Z=g;Z<x;++Z)q+=String.fromCharCode(B[Z]);return q}function F(B,g,x){const q=B.length;(!g||g<0)&&(g=0),(!x||x<0||x>q)&&(x=q);let Z="";for(let re=g;re<x;++re)Z+=Re[B[re]];return Z}function y(B,g,x){const q=B.slice(g,x);let Z="";for(let re=0;re<q.length-1;re+=2)Z+=String.fromCharCode(q[re]+q[re+1]*256);return Z}a.prototype.slice=function(g,x){const q=this.length;g=~~g,x=x===void 0?q:~~x,g<0?(g+=q,g<0&&(g=0)):g>q&&(g=q),x<0?(x+=q,x<0&&(x=0)):x>q&&(x=q),x<g&&(x=g);const Z=this.subarray(g,x);return Object.setPrototypeOf(Z,a.prototype),Z};function S(B,g,x){if(B%1!==0||B<0)throw new RangeError("offset is not uint");if(B+g>x)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(g,x,q){g=g>>>0,x=x>>>0,q||S(g,x,this.length);let Z=this[g],re=1,ie=0;for(;++ie<x&&(re*=256);)Z+=this[g+ie]*re;return Z},a.prototype.readUintBE=a.prototype.readUIntBE=function(g,x,q){g=g>>>0,x=x>>>0,q||S(g,x,this.length);let Z=this[g+--x],re=1;for(;x>0&&(re*=256);)Z+=this[g+--x]*re;return Z},a.prototype.readUint8=a.prototype.readUInt8=function(g,x){return g=g>>>0,x||S(g,1,this.length),this[g]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(g,x){return g=g>>>0,x||S(g,2,this.length),this[g]|this[g+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(g,x){return g=g>>>0,x||S(g,2,this.length),this[g]<<8|this[g+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(g,x){return g=g>>>0,x||S(g,4,this.length),(this[g]|this[g+1]<<8|this[g+2]<<16)+this[g+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(g,x){return g=g>>>0,x||S(g,4,this.length),this[g]*16777216+(this[g+1]<<16|this[g+2]<<8|this[g+3])},a.prototype.readBigUInt64LE=ke(function(g){g=g>>>0,we(g,"offset");const x=this[g],q=this[g+7];(x===void 0||q===void 0)&&xe(g,this.length-8);const Z=x+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24,re=this[++g]+this[++g]*2**8+this[++g]*2**16+q*2**24;return BigInt(Z)+(BigInt(re)<<BigInt(32))}),a.prototype.readBigUInt64BE=ke(function(g){g=g>>>0,we(g,"offset");const x=this[g],q=this[g+7];(x===void 0||q===void 0)&&xe(g,this.length-8);const Z=x*2**24+this[++g]*2**16+this[++g]*2**8+this[++g],re=this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+q;return(BigInt(Z)<<BigInt(32))+BigInt(re)}),a.prototype.readIntLE=function(g,x,q){g=g>>>0,x=x>>>0,q||S(g,x,this.length);let Z=this[g],re=1,ie=0;for(;++ie<x&&(re*=256);)Z+=this[g+ie]*re;return re*=128,Z>=re&&(Z-=Math.pow(2,8*x)),Z},a.prototype.readIntBE=function(g,x,q){g=g>>>0,x=x>>>0,q||S(g,x,this.length);let Z=x,re=1,ie=this[g+--Z];for(;Z>0&&(re*=256);)ie+=this[g+--Z]*re;return re*=128,ie>=re&&(ie-=Math.pow(2,8*x)),ie},a.prototype.readInt8=function(g,x){return g=g>>>0,x||S(g,1,this.length),this[g]&128?(255-this[g]+1)*-1:this[g]},a.prototype.readInt16LE=function(g,x){g=g>>>0,x||S(g,2,this.length);const q=this[g]|this[g+1]<<8;return q&32768?q|4294901760:q},a.prototype.readInt16BE=function(g,x){g=g>>>0,x||S(g,2,this.length);const q=this[g+1]|this[g]<<8;return q&32768?q|4294901760:q},a.prototype.readInt32LE=function(g,x){return g=g>>>0,x||S(g,4,this.length),this[g]|this[g+1]<<8|this[g+2]<<16|this[g+3]<<24},a.prototype.readInt32BE=function(g,x){return g=g>>>0,x||S(g,4,this.length),this[g]<<24|this[g+1]<<16|this[g+2]<<8|this[g+3]},a.prototype.readBigInt64LE=ke(function(g){g=g>>>0,we(g,"offset");const x=this[g],q=this[g+7];(x===void 0||q===void 0)&&xe(g,this.length-8);const Z=this[g+4]+this[g+5]*2**8+this[g+6]*2**16+(q<<24);return(BigInt(Z)<<BigInt(32))+BigInt(x+this[++g]*2**8+this[++g]*2**16+this[++g]*2**24)}),a.prototype.readBigInt64BE=ke(function(g){g=g>>>0,we(g,"offset");const x=this[g],q=this[g+7];(x===void 0||q===void 0)&&xe(g,this.length-8);const Z=(x<<24)+this[++g]*2**16+this[++g]*2**8+this[++g];return(BigInt(Z)<<BigInt(32))+BigInt(this[++g]*2**24+this[++g]*2**16+this[++g]*2**8+q)}),a.prototype.readFloatLE=function(g,x){return g=g>>>0,x||S(g,4,this.length),r.read(this,g,!0,23,4)},a.prototype.readFloatBE=function(g,x){return g=g>>>0,x||S(g,4,this.length),r.read(this,g,!1,23,4)},a.prototype.readDoubleLE=function(g,x){return g=g>>>0,x||S(g,8,this.length),r.read(this,g,!0,52,8)},a.prototype.readDoubleBE=function(g,x){return g=g>>>0,x||S(g,8,this.length),r.read(this,g,!1,52,8)};function G(B,g,x,q,Z,re){if(!a.isBuffer(B))throw new TypeError('"buffer" argument must be a Buffer instance');if(g>Z||g<re)throw new RangeError('"value" argument is out of bounds');if(x+q>B.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(g,x,q,Z){if(g=+g,x=x>>>0,q=q>>>0,!Z){const me=Math.pow(2,8*q)-1;G(this,g,x,q,me,0)}let re=1,ie=0;for(this[x]=g&255;++ie<q&&(re*=256);)this[x+ie]=g/re&255;return x+q},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(g,x,q,Z){if(g=+g,x=x>>>0,q=q>>>0,!Z){const me=Math.pow(2,8*q)-1;G(this,g,x,q,me,0)}let re=q-1,ie=1;for(this[x+re]=g&255;--re>=0&&(ie*=256);)this[x+re]=g/ie&255;return x+q},a.prototype.writeUint8=a.prototype.writeUInt8=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,1,255,0),this[x]=g&255,x+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,2,65535,0),this[x]=g&255,this[x+1]=g>>>8,x+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,2,65535,0),this[x]=g>>>8,this[x+1]=g&255,x+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,4,4294967295,0),this[x+3]=g>>>24,this[x+2]=g>>>16,this[x+1]=g>>>8,this[x]=g&255,x+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,4,4294967295,0),this[x]=g>>>24,this[x+1]=g>>>16,this[x+2]=g>>>8,this[x+3]=g&255,x+4};function U(B,g,x,q,Z){le(g,q,Z,B,x,7);let re=Number(g&BigInt(4294967295));B[x++]=re,re=re>>8,B[x++]=re,re=re>>8,B[x++]=re,re=re>>8,B[x++]=re;let ie=Number(g>>BigInt(32)&BigInt(4294967295));return B[x++]=ie,ie=ie>>8,B[x++]=ie,ie=ie>>8,B[x++]=ie,ie=ie>>8,B[x++]=ie,x}function V(B,g,x,q,Z){le(g,q,Z,B,x,7);let re=Number(g&BigInt(4294967295));B[x+7]=re,re=re>>8,B[x+6]=re,re=re>>8,B[x+5]=re,re=re>>8,B[x+4]=re;let ie=Number(g>>BigInt(32)&BigInt(4294967295));return B[x+3]=ie,ie=ie>>8,B[x+2]=ie,ie=ie>>8,B[x+1]=ie,ie=ie>>8,B[x]=ie,x+8}a.prototype.writeBigUInt64LE=ke(function(g,x=0){return U(this,g,x,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=ke(function(g,x=0){return V(this,g,x,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(g,x,q,Z){if(g=+g,x=x>>>0,!Z){const Ne=Math.pow(2,8*q-1);G(this,g,x,q,Ne-1,-Ne)}let re=0,ie=1,me=0;for(this[x]=g&255;++re<q&&(ie*=256);)g<0&&me===0&&this[x+re-1]!==0&&(me=1),this[x+re]=(g/ie>>0)-me&255;return x+q},a.prototype.writeIntBE=function(g,x,q,Z){if(g=+g,x=x>>>0,!Z){const Ne=Math.pow(2,8*q-1);G(this,g,x,q,Ne-1,-Ne)}let re=q-1,ie=1,me=0;for(this[x+re]=g&255;--re>=0&&(ie*=256);)g<0&&me===0&&this[x+re+1]!==0&&(me=1),this[x+re]=(g/ie>>0)-me&255;return x+q},a.prototype.writeInt8=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,1,127,-128),g<0&&(g=255+g+1),this[x]=g&255,x+1},a.prototype.writeInt16LE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,2,32767,-32768),this[x]=g&255,this[x+1]=g>>>8,x+2},a.prototype.writeInt16BE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,2,32767,-32768),this[x]=g>>>8,this[x+1]=g&255,x+2},a.prototype.writeInt32LE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,4,2147483647,-2147483648),this[x]=g&255,this[x+1]=g>>>8,this[x+2]=g>>>16,this[x+3]=g>>>24,x+4},a.prototype.writeInt32BE=function(g,x,q){return g=+g,x=x>>>0,q||G(this,g,x,4,2147483647,-2147483648),g<0&&(g=4294967295+g+1),this[x]=g>>>24,this[x+1]=g>>>16,this[x+2]=g>>>8,this[x+3]=g&255,x+4},a.prototype.writeBigInt64LE=ke(function(g,x=0){return U(this,g,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=ke(function(g,x=0){return V(this,g,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function E(B,g,x,q,Z,re){if(x+q>B.length)throw new RangeError("Index out of range");if(x<0)throw new RangeError("Index out of range")}function J(B,g,x,q,Z){return g=+g,x=x>>>0,Z||E(B,g,x,4),r.write(B,g,x,q,23,4),x+4}a.prototype.writeFloatLE=function(g,x,q){return J(this,g,x,!0,q)},a.prototype.writeFloatBE=function(g,x,q){return J(this,g,x,!1,q)};function Q(B,g,x,q,Z){return g=+g,x=x>>>0,Z||E(B,g,x,8),r.write(B,g,x,q,52,8),x+8}a.prototype.writeDoubleLE=function(g,x,q){return Q(this,g,x,!0,q)},a.prototype.writeDoubleBE=function(g,x,q){return Q(this,g,x,!1,q)},a.prototype.copy=function(g,x,q,Z){if(!a.isBuffer(g))throw new TypeError("argument should be a Buffer");if(q||(q=0),!Z&&Z!==0&&(Z=this.length),x>=g.length&&(x=g.length),x||(x=0),Z>0&&Z<q&&(Z=q),Z===q||g.length===0||this.length===0)return 0;if(x<0)throw new RangeError("targetStart out of bounds");if(q<0||q>=this.length)throw new RangeError("Index out of range");if(Z<0)throw new RangeError("sourceEnd out of bounds");Z>this.length&&(Z=this.length),g.length-x<Z-q&&(Z=g.length-x+q);const re=Z-q;return this===g&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(x,q,Z):Uint8Array.prototype.set.call(g,this.subarray(q,Z),x),re},a.prototype.fill=function(g,x,q,Z){if(typeof g=="string"){if(typeof x=="string"?(Z=x,x=0,q=this.length):typeof q=="string"&&(Z=q,q=this.length),Z!==void 0&&typeof Z!="string")throw new TypeError("encoding must be a string");if(typeof Z=="string"&&!a.isEncoding(Z))throw new TypeError("Unknown encoding: "+Z);if(g.length===1){const ie=g.charCodeAt(0);(Z==="utf8"&&ie<128||Z==="latin1")&&(g=ie)}}else typeof g=="number"?g=g&255:typeof g=="boolean"&&(g=Number(g));if(x<0||this.length<x||this.length<q)throw new RangeError("Out of range index");if(q<=x)return this;x=x>>>0,q=q===void 0?this.length:q>>>0,g||(g=0);let re;if(typeof g=="number")for(re=x;re<q;++re)this[re]=g;else{const ie=a.isBuffer(g)?g:a.from(g,Z),me=ie.length;if(me===0)throw new TypeError('The value "'+g+'" is invalid for argument "value"');for(re=0;re<q-x;++re)this[re+x]=ie[re%me]}return this};const ee={};function ne(B,g,x){ee[B]=class extends x{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${B}]`,this.stack,delete this.name}get code(){return B}set code(Z){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:Z,writable:!0})}toString(){return`${this.name} [${B}]: ${this.message}`}}}ne("ERR_BUFFER_OUT_OF_BOUNDS",function(B){return B?`${B} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ne("ERR_INVALID_ARG_TYPE",function(B,g){return`The "${B}" argument must be of type number. Received type ${typeof g}`},TypeError),ne("ERR_OUT_OF_RANGE",function(B,g,x){let q=`The value of "${B}" is out of range.`,Z=x;return Number.isInteger(x)&&Math.abs(x)>2**32?Z=ae(String(x)):typeof x=="bigint"&&(Z=String(x),(x>BigInt(2)**BigInt(32)||x<-(BigInt(2)**BigInt(32)))&&(Z=ae(Z)),Z+="n"),q+=` It must be ${g}. Received ${Z}`,q},RangeError);function ae(B){let g="",x=B.length;const q=B[0]==="-"?1:0;for(;x>=q+4;x-=3)g=`_${B.slice(x-3,x)}${g}`;return`${B.slice(0,x)}${g}`}function ue(B,g,x){we(g,"offset"),(B[g]===void 0||B[g+x]===void 0)&&xe(g,B.length-(x+1))}function le(B,g,x,q,Z,re){if(B>x||B<g){const ie=typeof g=="bigint"?"n":"";let me;throw re>3?g===0||g===BigInt(0)?me=`>= 0${ie} and < 2${ie} ** ${(re+1)*8}${ie}`:me=`>= -(2${ie} ** ${(re+1)*8-1}${ie}) and < 2 ** ${(re+1)*8-1}${ie}`:me=`>= ${g}${ie} and <= ${x}${ie}`,new ee.ERR_OUT_OF_RANGE("value",me,B)}ue(q,Z,re)}function we(B,g){if(typeof B!="number")throw new ee.ERR_INVALID_ARG_TYPE(g,"number",B)}function xe(B,g,x){throw Math.floor(B)!==B?(we(B,x),new ee.ERR_OUT_OF_RANGE(x||"offset","an integer",B)):g<0?new ee.ERR_BUFFER_OUT_OF_BOUNDS:new ee.ERR_OUT_OF_RANGE(x||"offset",`>= ${x?1:0} and <= ${g}`,B)}const Ae=/[^+/0-9A-Za-z-_]/g;function rt(B){if(B=B.split("=")[0],B=B.trim().replace(Ae,""),B.length<2)return"";for(;B.length%4!==0;)B=B+"=";return B}function gt(B,g){g=g||1/0;let x;const q=B.length;let Z=null;const re=[];for(let ie=0;ie<q;++ie){if(x=B.charCodeAt(ie),x>55295&&x<57344){if(!Z){if(x>56319){(g-=3)>-1&&re.push(239,191,189);continue}else if(ie+1===q){(g-=3)>-1&&re.push(239,191,189);continue}Z=x;continue}if(x<56320){(g-=3)>-1&&re.push(239,191,189),Z=x;continue}x=(Z-55296<<10|x-56320)+65536}else Z&&(g-=3)>-1&&re.push(239,191,189);if(Z=null,x<128){if((g-=1)<0)break;re.push(x)}else if(x<2048){if((g-=2)<0)break;re.push(x>>6|192,x&63|128)}else if(x<65536){if((g-=3)<0)break;re.push(x>>12|224,x>>6&63|128,x&63|128)}else if(x<1114112){if((g-=4)<0)break;re.push(x>>18|240,x>>12&63|128,x>>6&63|128,x&63|128)}else throw new Error("Invalid code point")}return re}function nt(B){const g=[];for(let x=0;x<B.length;++x)g.push(B.charCodeAt(x)&255);return g}function Ue(B,g){let x,q,Z;const re=[];for(let ie=0;ie<B.length&&!((g-=2)<0);++ie)x=B.charCodeAt(ie),q=x>>8,Z=x%256,re.push(Z),re.push(q);return re}function Se(B){return e.toByteArray(rt(B))}function Ie(B,g,x,q){let Z;for(Z=0;Z<q&&!(Z+x>=g.length||Z>=B.length);++Z)g[Z+x]=B[Z];return Z}function Pe(B,g){return B instanceof g||B!=null&&B.constructor!=null&&B.constructor.name!=null&&B.constructor.name===g.name}function mt(B){return B!==B}const Re=function(){const B="0123456789abcdef",g=new Array(256);for(let x=0;x<16;++x){const q=x*16;for(let Z=0;Z<16;++Z)g[q+Z]=B[x]+B[Z]}return g}();function ke(B){return typeof BigInt>"u"?vt:B}function vt(){throw new Error("BigInt not supported")}})(y4);var t5;typeof window<"u"&&(window.Buffer||(window.Buffer=y4.Buffer),window.global||(window.global=window),window.process||(window.process={}),(t5=window.process)!=null&&t5.env||(window.process={env:{}}));var Hc,ea,Uk=class extends Fp{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Wr(this,Hc,void 0),Wr(this,ea,void 0),this.onAccountsChanged=r=>{r.length===0?this.emit("disconnect"):this.emit("change",{account:Dn(r[0])})},this.onChainChanged=r=>{const n=B0(r),i=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await e.enable(),n=Dn(r[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,o=this.isChainUnsupported(i)),{account:n,chain:{id:i,unsupported:o}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new Gr(e):e}}async disconnect(){if(!Nt(this,ea))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Dn(e[0])}async getChainId(){const t=await this.getProvider();return B0(t.chainId)}async getProvider(){var t;if(!Nt(this,ea)){let e=(await ka(()=>import("./index-6w5Bb1Ur.js").then(s=>s.i),__vite__mapDeps([0,1]))).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),Pl(this,Hc,new e(this.options));const r=(t=Nt(this,Hc).walletExtension)==null?void 0:t.getChainId(),n=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===r)||this.chains[0],i=this.options.chainId||(n==null?void 0:n.id),o=this.options.jsonRpcUrl||(n==null?void 0:n.rpcUrls.default.http[0]);Pl(this,ea,Nt(this,Hc).makeWeb3Provider(o,i))}return Nt(this,ea)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Lp({account:r,chain:n,transport:Mp(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n;const e=await this.getProvider(),r=qe(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(i=>i.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===t);if(!o)throw new Q5({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((n=o.rpcUrls.public)==null?void 0:n.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Gr(s)}throw new Li(i)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}};Hc=new WeakMap;ea=new WeakMap;var g2={},od={},Ke={},E4={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,c){var l=a>>>16&65535,u=a&65535,f=c>>>16&65535,p=c&65535;return u*p+(l*p+u*f<<16>>>0)|0}t.mul=Math.imul||e;function r(a,c){return a+c|0}t.add=r;function n(a,c){return a-c|0}t.sub=n;function i(a,c){return a<<c|a>>>32-c}t.rotl=i;function o(a,c){return a<<32-c|a>>>c}t.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(E4);Object.defineProperty(Ke,"__esModule",{value:!0});var x4=E4;function Fk(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Ke.readInt16BE=Fk;function jk(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Ke.readUint16BE=jk;function Wk(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Ke.readInt16LE=Wk;function zk(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Ke.readUint16LE=zk;function _4(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>8,e[r+1]=t>>>0,e}Ke.writeUint16BE=_4;Ke.writeInt16BE=_4;function C4(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e}Ke.writeUint16LE=C4;Ke.writeInt16LE=C4;function T1(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Ke.readInt32BE=T1;function I1(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Ke.readUint32BE=I1;function $1(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Ke.readInt32LE=$1;function N1(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Ke.readUint32LE=N1;function lf(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>24,e[r+1]=t>>>16,e[r+2]=t>>>8,e[r+3]=t>>>0,e}Ke.writeUint32BE=lf;Ke.writeInt32BE=lf;function uf(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e[r+2]=t>>>16,e[r+3]=t>>>24,e}Ke.writeUint32LE=uf;Ke.writeInt32LE=uf;function Hk(t,e){e===void 0&&(e=0);var r=T1(t,e),n=T1(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Ke.readInt64BE=Hk;function qk(t,e){e===void 0&&(e=0);var r=I1(t,e),n=I1(t,e+4);return r*4294967296+n}Ke.readUint64BE=qk;function Gk(t,e){e===void 0&&(e=0);var r=$1(t,e),n=$1(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Ke.readInt64LE=Gk;function Vk(t,e){e===void 0&&(e=0);var r=N1(t,e),n=N1(t,e+4);return n*4294967296+r}Ke.readUint64LE=Vk;function A4(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),lf(t/4294967296>>>0,e,r),lf(t>>>0,e,r+4),e}Ke.writeUint64BE=A4;Ke.writeInt64BE=A4;function S4(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),uf(t>>>0,e,r),uf(t/4294967296>>>0,e,r+4),e}Ke.writeUint64LE=S4;Ke.writeInt64LE=S4;function Kk(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,o=t/8+r-1;o>=r;o--)n+=e[o]*i,i*=256;return n}Ke.readUintBE=Kk;function Zk(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,o=r;o<r+t/8;o++)n+=e[o]*i,i*=256;return n}Ke.readUintLE=Zk;function Jk(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!x4.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var i=1,o=t/8+n-1;o>=n;o--)r[o]=e/i&255,i*=256;return r}Ke.writeUintBE=Jk;function Yk(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!x4.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var i=1,o=n;o<n+t/8;o++)r[o]=e/i&255,i*=256;return r}Ke.writeUintLE=Yk;function Xk(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e)}Ke.readFloat32BE=Xk;function Qk(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e,!0)}Ke.readFloat32LE=Qk;function eT(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e)}Ke.readFloat64BE=eT;function tT(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e,!0)}Ke.readFloat64LE=tT;function rT(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t),e}Ke.writeFloat32BE=rT;function nT(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t,!0),e}Ke.writeFloat32LE=nT;function iT(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t),e}Ke.writeFloat64BE=iT;function oT(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t,!0),e}Ke.writeFloat64LE=oT;var jn={};Object.defineProperty(jn,"__esModule",{value:!0});function sT(t){for(var e=0;e<t.length;e++)t[e]=0;return t}jn.wipe=sT;Object.defineProperty(od,"__esModule",{value:!0});var Ar=Ke,M1=jn,aT=20;function cT(t,e,r){for(var n=1634760805,i=857760878,o=2036477234,s=1797285236,a=r[3]<<24|r[2]<<16|r[1]<<8|r[0],c=r[7]<<24|r[6]<<16|r[5]<<8|r[4],l=r[11]<<24|r[10]<<16|r[9]<<8|r[8],u=r[15]<<24|r[14]<<16|r[13]<<8|r[12],f=r[19]<<24|r[18]<<16|r[17]<<8|r[16],p=r[23]<<24|r[22]<<16|r[21]<<8|r[20],b=r[27]<<24|r[26]<<16|r[25]<<8|r[24],v=r[31]<<24|r[30]<<16|r[29]<<8|r[28],A=e[3]<<24|e[2]<<16|e[1]<<8|e[0],_=e[7]<<24|e[6]<<16|e[5]<<8|e[4],N=e[11]<<24|e[10]<<16|e[9]<<8|e[8],P=e[15]<<24|e[14]<<16|e[13]<<8|e[12],M=n,D=i,R=o,W=s,w=a,H=c,X=l,te=u,L=f,h=p,C=b,I=v,$=A,O=_,j=N,z=P,F=0;F<aT;F+=2)M=M+w|0,$^=M,$=$>>>16|$<<16,L=L+$|0,w^=L,w=w>>>20|w<<12,D=D+H|0,O^=D,O=O>>>16|O<<16,h=h+O|0,H^=h,H=H>>>20|H<<12,R=R+X|0,j^=R,j=j>>>16|j<<16,C=C+j|0,X^=C,X=X>>>20|X<<12,W=W+te|0,z^=W,z=z>>>16|z<<16,I=I+z|0,te^=I,te=te>>>20|te<<12,R=R+X|0,j^=R,j=j>>>24|j<<8,C=C+j|0,X^=C,X=X>>>25|X<<7,W=W+te|0,z^=W,z=z>>>24|z<<8,I=I+z|0,te^=I,te=te>>>25|te<<7,D=D+H|0,O^=D,O=O>>>24|O<<8,h=h+O|0,H^=h,H=H>>>25|H<<7,M=M+w|0,$^=M,$=$>>>24|$<<8,L=L+$|0,w^=L,w=w>>>25|w<<7,M=M+H|0,z^=M,z=z>>>16|z<<16,C=C+z|0,H^=C,H=H>>>20|H<<12,D=D+X|0,$^=D,$=$>>>16|$<<16,I=I+$|0,X^=I,X=X>>>20|X<<12,R=R+te|0,O^=R,O=O>>>16|O<<16,L=L+O|0,te^=L,te=te>>>20|te<<12,W=W+w|0,j^=W,j=j>>>16|j<<16,h=h+j|0,w^=h,w=w>>>20|w<<12,R=R+te|0,O^=R,O=O>>>24|O<<8,L=L+O|0,te^=L,te=te>>>25|te<<7,W=W+w|0,j^=W,j=j>>>24|j<<8,h=h+j|0,w^=h,w=w>>>25|w<<7,D=D+X|0,$^=D,$=$>>>24|$<<8,I=I+$|0,X^=I,X=X>>>25|X<<7,M=M+H|0,z^=M,z=z>>>24|z<<8,C=C+z|0,H^=C,H=H>>>25|H<<7;Ar.writeUint32LE(M+n|0,t,0),Ar.writeUint32LE(D+i|0,t,4),Ar.writeUint32LE(R+o|0,t,8),Ar.writeUint32LE(W+s|0,t,12),Ar.writeUint32LE(w+a|0,t,16),Ar.writeUint32LE(H+c|0,t,20),Ar.writeUint32LE(X+l|0,t,24),Ar.writeUint32LE(te+u|0,t,28),Ar.writeUint32LE(L+f|0,t,32),Ar.writeUint32LE(h+p|0,t,36),Ar.writeUint32LE(C+b|0,t,40),Ar.writeUint32LE(I+v|0,t,44),Ar.writeUint32LE($+A|0,t,48),Ar.writeUint32LE(O+_|0,t,52),Ar.writeUint32LE(j+N|0,t,56),Ar.writeUint32LE(z+P|0,t,60)}function P4(t,e,r,n,i){if(i===void 0&&(i=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-e.length,o.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=e,s=i}for(var a=new Uint8Array(64),c=0;c<r.length;c+=64){cT(a,o,t);for(var l=c;l<c+64&&l<r.length;l++)n[l]=r[l]^a[l-c];uT(o,0,s)}return M1.wipe(a),i===0&&M1.wipe(o),n}od.streamXOR=P4;function lT(t,e,r,n){return n===void 0&&(n=0),M1.wipe(r),P4(t,e,r,r,n)}od.stream=lT;function uT(t,e,r){for(var n=1;r--;)n=n+(t[e]&255)|0,t[e]=n&255,n>>>=8,e++;if(n>0)throw new Error("ChaCha: counter overflow")}var k4={},Fo={};Object.defineProperty(Fo,"__esModule",{value:!0});function fT(t,e,r){return~(t-1)&e|t-1&r}Fo.select=fT;function dT(t,e){return(t|0)-(e|0)-1>>>31&1}Fo.lessOrEqual=dT;function T4(t,e){if(t.length!==e.length)return 0;for(var r=0,n=0;n<t.length;n++)r|=t[n]^e[n];return 1&r-1>>>8}Fo.compare=T4;function hT(t,e){return t.length===0||e.length===0?!1:T4(t,e)!==0}Fo.equal=hT;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Fo,r=jn;t.DIGEST_LENGTH=16;var n=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=a[0]|a[1]<<8;this._r[0]=c&8191;var l=a[2]|a[3]<<8;this._r[1]=(c>>>13|l<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(l>>>10|u<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(u>>>7|f<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(f>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var b=a[10]|a[11]<<8;this._r[6]=(p>>>14|b<<2)&8191;var v=a[12]|a[13]<<8;this._r[7]=(b>>>11|v<<5)&8065;var A=a[14]|a[15]<<8;this._r[8]=(v>>>8|A<<8)&8191,this._r[9]=A>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,c,l){for(var u=this._fin?0:2048,f=this._h[0],p=this._h[1],b=this._h[2],v=this._h[3],A=this._h[4],_=this._h[5],N=this._h[6],P=this._h[7],M=this._h[8],D=this._h[9],R=this._r[0],W=this._r[1],w=this._r[2],H=this._r[3],X=this._r[4],te=this._r[5],L=this._r[6],h=this._r[7],C=this._r[8],I=this._r[9];l>=16;){var $=a[c+0]|a[c+1]<<8;f+=$&8191;var O=a[c+2]|a[c+3]<<8;p+=($>>>13|O<<3)&8191;var j=a[c+4]|a[c+5]<<8;b+=(O>>>10|j<<6)&8191;var z=a[c+6]|a[c+7]<<8;v+=(j>>>7|z<<9)&8191;var F=a[c+8]|a[c+9]<<8;A+=(z>>>4|F<<12)&8191,_+=F>>>1&8191;var y=a[c+10]|a[c+11]<<8;N+=(F>>>14|y<<2)&8191;var S=a[c+12]|a[c+13]<<8;P+=(y>>>11|S<<5)&8191;var G=a[c+14]|a[c+15]<<8;M+=(S>>>8|G<<8)&8191,D+=G>>>5|u;var U=0,V=U;V+=f*R,V+=p*(5*I),V+=b*(5*C),V+=v*(5*h),V+=A*(5*L),U=V>>>13,V&=8191,V+=_*(5*te),V+=N*(5*X),V+=P*(5*H),V+=M*(5*w),V+=D*(5*W),U+=V>>>13,V&=8191;var E=U;E+=f*W,E+=p*R,E+=b*(5*I),E+=v*(5*C),E+=A*(5*h),U=E>>>13,E&=8191,E+=_*(5*L),E+=N*(5*te),E+=P*(5*X),E+=M*(5*H),E+=D*(5*w),U+=E>>>13,E&=8191;var J=U;J+=f*w,J+=p*W,J+=b*R,J+=v*(5*I),J+=A*(5*C),U=J>>>13,J&=8191,J+=_*(5*h),J+=N*(5*L),J+=P*(5*te),J+=M*(5*X),J+=D*(5*H),U+=J>>>13,J&=8191;var Q=U;Q+=f*H,Q+=p*w,Q+=b*W,Q+=v*R,Q+=A*(5*I),U=Q>>>13,Q&=8191,Q+=_*(5*C),Q+=N*(5*h),Q+=P*(5*L),Q+=M*(5*te),Q+=D*(5*X),U+=Q>>>13,Q&=8191;var ee=U;ee+=f*X,ee+=p*H,ee+=b*w,ee+=v*W,ee+=A*R,U=ee>>>13,ee&=8191,ee+=_*(5*I),ee+=N*(5*C),ee+=P*(5*h),ee+=M*(5*L),ee+=D*(5*te),U+=ee>>>13,ee&=8191;var ne=U;ne+=f*te,ne+=p*X,ne+=b*H,ne+=v*w,ne+=A*W,U=ne>>>13,ne&=8191,ne+=_*R,ne+=N*(5*I),ne+=P*(5*C),ne+=M*(5*h),ne+=D*(5*L),U+=ne>>>13,ne&=8191;var ae=U;ae+=f*L,ae+=p*te,ae+=b*X,ae+=v*H,ae+=A*w,U=ae>>>13,ae&=8191,ae+=_*W,ae+=N*R,ae+=P*(5*I),ae+=M*(5*C),ae+=D*(5*h),U+=ae>>>13,ae&=8191;var ue=U;ue+=f*h,ue+=p*L,ue+=b*te,ue+=v*X,ue+=A*H,U=ue>>>13,ue&=8191,ue+=_*w,ue+=N*W,ue+=P*R,ue+=M*(5*I),ue+=D*(5*C),U+=ue>>>13,ue&=8191;var le=U;le+=f*C,le+=p*h,le+=b*L,le+=v*te,le+=A*X,U=le>>>13,le&=8191,le+=_*H,le+=N*w,le+=P*W,le+=M*R,le+=D*(5*I),U+=le>>>13,le&=8191;var we=U;we+=f*I,we+=p*C,we+=b*h,we+=v*L,we+=A*te,U=we>>>13,we&=8191,we+=_*X,we+=N*H,we+=P*w,we+=M*W,we+=D*R,U+=we>>>13,we&=8191,U=(U<<2)+U|0,U=U+V|0,V=U&8191,U=U>>>13,E+=U,f=V,p=E,b=J,v=Q,A=ee,_=ne,N=ae,P=ue,M=le,D=we,c+=16,l-=16}this._h[0]=f,this._h[1]=p,this._h[2]=b,this._h[3]=v,this._h[4]=A,this._h[5]=_,this._h[6]=N,this._h[7]=P,this._h[8]=M,this._h[9]=D},s.prototype.finish=function(a,c){c===void 0&&(c=0);var l=new Uint16Array(10),u,f,p,b;if(this._leftover){for(b=this._leftover,this._buffer[b++]=1;b<16;b++)this._buffer[b]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,b=2;b<10;b++)this._h[b]+=u,u=this._h[b]>>>13,this._h[b]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,l[0]=this._h[0]+5,u=l[0]>>>13,l[0]&=8191,b=1;b<10;b++)l[b]=this._h[b]+u,u=l[b]>>>13,l[b]&=8191;for(l[9]-=8192,f=(u^1)-1,b=0;b<10;b++)l[b]&=f;for(f=~f,b=0;b<10;b++)this._h[b]=this._h[b]&f|l[b];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,b=1;b<8;b++)p=(this._h[b]+this._pad[b]|0)+(p>>>16)|0,this._h[b]=p&65535;return a[c+0]=this._h[0]>>>0,a[c+1]=this._h[0]>>>8,a[c+2]=this._h[1]>>>0,a[c+3]=this._h[1]>>>8,a[c+4]=this._h[2]>>>0,a[c+5]=this._h[2]>>>8,a[c+6]=this._h[3]>>>0,a[c+7]=this._h[3]>>>8,a[c+8]=this._h[4]>>>0,a[c+9]=this._h[4]>>>8,a[c+10]=this._h[5]>>>0,a[c+11]=this._h[5]>>>8,a[c+12]=this._h[6]>>>0,a[c+13]=this._h[6]>>>8,a[c+14]=this._h[7]>>>0,a[c+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var c=0,l=a.length,u;if(this._leftover){u=16-this._leftover,u>l&&(u=l);for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[c+f];if(l-=u,c+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(l>=16&&(u=l-l%16,this._blocks(a,c,u),c+=u,l-=u),l){for(var f=0;f<l;f++)this._buffer[this._leftover+f]=a[c+f];this._leftover+=l}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return r.wipe(this._buffer),r.wipe(this._r),r.wipe(this._h),r.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=n;function i(s,a){var c=new n(s);c.update(a);var l=c.digest();return c.clean(),l}t.oneTimeAuth=i;function o(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=o})(k4);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=od,r=k4,n=jn,i=Ke,o=Fo;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function c(l){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,l.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(l)}return c.prototype.seal=function(l,u,f,p){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var b=new Uint8Array(16);b.set(l,b.length-l.length);var v=new Uint8Array(32);e.stream(this._key,b,v,4);var A=u.length+this.tagLength,_;if(p){if(p.length!==A)throw new Error("ChaCha20Poly1305: incorrect destination length");_=p}else _=new Uint8Array(A);return e.streamXOR(this._key,b,u,_,4),this._authenticate(_.subarray(_.length-this.tagLength,_.length),v,_.subarray(0,_.length-this.tagLength),f),n.wipe(b),_},c.prototype.open=function(l,u,f,p){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var b=new Uint8Array(16);b.set(l,b.length-l.length);var v=new Uint8Array(32);e.stream(this._key,b,v,4);var A=new Uint8Array(this.tagLength);if(this._authenticate(A,v,u.subarray(0,u.length-this.tagLength),f),!o.equal(A,u.subarray(u.length-this.tagLength,u.length)))return null;var _=u.length-this.tagLength,N;if(p){if(p.length!==_)throw new Error("ChaCha20Poly1305: incorrect destination length");N=p}else N=new Uint8Array(_);return e.streamXOR(this._key,b,u.subarray(0,u.length-this.tagLength),N,4),n.wipe(b),N},c.prototype.clean=function(){return n.wipe(this._key),this},c.prototype._authenticate=function(l,u,f,p){var b=new r.Poly1305(u);p&&(b.update(p),p.length%16>0&&b.update(s.subarray(p.length%16))),b.update(f),f.length%16>0&&b.update(s.subarray(f.length%16));var v=new Uint8Array(8);p&&i.writeUint64LE(p.length,v),b.update(v),i.writeUint64LE(f.length,v),b.update(v);for(var A=b.digest(),_=0;_<A.length;_++)l[_]=A[_];b.clean(),n.wipe(A),n.wipe(v)},c}();t.ChaCha20Poly1305=a})(g2);var I4={},Pu={},m2={};Object.defineProperty(m2,"__esModule",{value:!0});function pT(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}m2.isSerializableHash=pT;Object.defineProperty(Pu,"__esModule",{value:!0});var Yn=m2,gT=Fo,mT=jn,$4=function(){function t(e,r){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var n=new Uint8Array(this.blockSize);r.length>this.blockSize?this._inner.update(r).finish(n).clean():n.set(r);for(var i=0;i<n.length;i++)n[i]^=54;this._inner.update(n);for(var i=0;i<n.length;i++)n[i]^=106;this._outer.update(n),Yn.isSerializableHash(this._inner)&&Yn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),mT.wipe(n)}return t.prototype.reset=function(){if(!Yn.isSerializableHash(this._inner)||!Yn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Yn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Yn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Yn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Yn.isSerializableHash(this._inner)||!Yn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Yn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();Pu.HMAC=$4;function wT(t,e,r){var n=new $4(t,e);n.update(r);var i=n.digest();return n.clean(),i}Pu.hmac=wT;Pu.equal=gT.equal;Object.defineProperty(I4,"__esModule",{value:!0});var gm=Pu,mm=jn,bT=function(){function t(e,r,n,i){n===void 0&&(n=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var o=gm.hmac(this._hash,n,r);this._hmac=new gm.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var r=new Uint8Array(e),n=0;n<r.length;n++)this._bufpos===this._buffer.length&&this._fillBuffer(),r[n]=this._buffer[this._bufpos++];return r},t.prototype.clean=function(){this._hmac.clean(),mm.wipe(this._buffer),mm.wipe(this._counter),this._bufpos=0},t}(),yT=I4.HKDF=bT,sd={},ad={},cd={};Object.defineProperty(cd,"__esModule",{value:!0});cd.BrowserRandomSource=void 0;const wm=65536;class vT{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const r=new Uint8Array(e);for(let n=0;n<r.length;n+=wm)this._crypto.getRandomValues(r.subarray(n,n+Math.min(r.length-n,wm)));return r}}cd.BrowserRandomSource=vT;function ET(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ld={};const xT={},_T=Object.freeze(Object.defineProperty({__proto__:null,default:xT},Symbol.toStringTag,{value:"Module"})),CT=e6(_T);Object.defineProperty(ld,"__esModule",{value:!0});ld.NodeRandomSource=void 0;const AT=jn;class ST{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof ET<"u"){const e=CT;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let r=this._crypto.randomBytes(e);if(r.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const n=new Uint8Array(e);for(let i=0;i<n.length;i++)n[i]=r[i];return(0,AT.wipe)(r),n}}ld.NodeRandomSource=ST;Object.defineProperty(ad,"__esModule",{value:!0});ad.SystemRandomSource=void 0;const PT=cd,kT=ld;class TT{constructor(){if(this.isAvailable=!1,this.name="",this._source=new PT.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new kT.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}ad.SystemRandomSource=TT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=ad,r=Ke,n=jn;t.defaultRandomSource=new e.SystemRandomSource;function i(l,u=t.defaultRandomSource){return u.randomBytes(l)}t.randomBytes=i;function o(l=t.defaultRandomSource){const u=i(4,l),f=(0,r.readUint32LE)(u);return(0,n.wipe)(u),f}t.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(l,u=s,f=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let p="";const b=u.length,v=256-256%b;for(;l>0;){const A=i(Math.ceil(l*256/v),f);for(let _=0;_<A.length&&l>0;_++){const N=A[_];N<v&&(p+=u.charAt(N%b),l--)}(0,n.wipe)(A)}return p}t.randomString=a;function c(l,u=s,f=t.defaultRandomSource){const p=Math.ceil(l/(Math.log(u.length)/Math.LN2));return a(p,u,f)}t.randomStringForEntropy=c})(sd);var ud={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Ke,r=jn;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var n=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){r.wipe(this._buffer),r.wipe(this._temp),this.reset()},a.prototype.update=function(c,l){if(l===void 0&&(l=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=l,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&l>0;)this._buffer[this._bufferLength++]=c[u++],l--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(l>=this.blockSize&&(u=o(this._temp,this._state,c,u,l),l%=this.blockSize);l>0;)this._buffer[this._bufferLength++]=c[u++],l--;return this},a.prototype.finish=function(c){if(!this._finished){var l=this._bytesHashed,u=this._bufferLength,f=l/536870912|0,p=l<<3,b=l%64<56?64:128;this._buffer[u]=128;for(var v=u+1;v<b-8;v++)this._buffer[v]=0;e.writeUint32BE(f,this._buffer,b-8),e.writeUint32BE(p,this._buffer,b-4),o(this._temp,this._state,this._buffer,0,b),this._finished=!0}for(var v=0;v<this.digestLength/4;v++)e.writeUint32BE(this._state[v],c,v*4);return this},a.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(c){r.wipe(c.state),c.buffer&&r.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},a}();t.SHA256=n;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,c,l,u,f){for(;f>=64;){for(var p=c[0],b=c[1],v=c[2],A=c[3],_=c[4],N=c[5],P=c[6],M=c[7],D=0;D<16;D++){var R=u+D*4;a[D]=e.readUint32BE(l,R)}for(var D=16;D<64;D++){var W=a[D-2],w=(W>>>17|W<<15)^(W>>>19|W<<13)^W>>>10;W=a[D-15];var H=(W>>>7|W<<25)^(W>>>18|W<<14)^W>>>3;a[D]=(w+a[D-7]|0)+(H+a[D-16]|0)}for(var D=0;D<64;D++){var w=(((_>>>6|_<<26)^(_>>>11|_<<21)^(_>>>25|_<<7))+(_&N^~_&P)|0)+(M+(i[D]+a[D]|0)|0)|0,H=((p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10))+(p&b^p&v^b&v)|0;M=P,P=N,N=_,_=A+w|0,A=v,v=b,b=p,p=w+H|0}c[0]+=p,c[1]+=b,c[2]+=v,c[3]+=A,c[4]+=_,c[5]+=N,c[6]+=P,c[7]+=M,u+=64,f-=64}return u}function s(a){var c=new n;c.update(a);var l=c.digest();return c.clean(),l}t.hash=s})(ud);var w2={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=sd,r=jn;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function n(D){const R=new Float64Array(16);if(D)for(let W=0;W<D.length;W++)R[W]=D[W];return R}const i=new Uint8Array(32);i[0]=9;const o=n([56129,1]);function s(D){let R=1;for(let W=0;W<16;W++){let w=D[W]+R+65535;R=Math.floor(w/65536),D[W]=w-R*65536}D[0]+=R-1+37*(R-1)}function a(D,R,W){const w=~(W-1);for(let H=0;H<16;H++){const X=w&(D[H]^R[H]);D[H]^=X,R[H]^=X}}function c(D,R){const W=n(),w=n();for(let H=0;H<16;H++)w[H]=R[H];s(w),s(w),s(w);for(let H=0;H<2;H++){W[0]=w[0]-65517;for(let te=1;te<15;te++)W[te]=w[te]-65535-(W[te-1]>>16&1),W[te-1]&=65535;W[15]=w[15]-32767-(W[14]>>16&1);const X=W[15]>>16&1;W[14]&=65535,a(w,W,1-X)}for(let H=0;H<16;H++)D[2*H]=w[H]&255,D[2*H+1]=w[H]>>8}function l(D,R){for(let W=0;W<16;W++)D[W]=R[2*W]+(R[2*W+1]<<8);D[15]&=32767}function u(D,R,W){for(let w=0;w<16;w++)D[w]=R[w]+W[w]}function f(D,R,W){for(let w=0;w<16;w++)D[w]=R[w]-W[w]}function p(D,R,W){let w,H,X=0,te=0,L=0,h=0,C=0,I=0,$=0,O=0,j=0,z=0,F=0,y=0,S=0,G=0,U=0,V=0,E=0,J=0,Q=0,ee=0,ne=0,ae=0,ue=0,le=0,we=0,xe=0,Ae=0,rt=0,gt=0,nt=0,Ue=0,Se=W[0],Ie=W[1],Pe=W[2],mt=W[3],Re=W[4],ke=W[5],vt=W[6],B=W[7],g=W[8],x=W[9],q=W[10],Z=W[11],re=W[12],ie=W[13],me=W[14],Ne=W[15];w=R[0],X+=w*Se,te+=w*Ie,L+=w*Pe,h+=w*mt,C+=w*Re,I+=w*ke,$+=w*vt,O+=w*B,j+=w*g,z+=w*x,F+=w*q,y+=w*Z,S+=w*re,G+=w*ie,U+=w*me,V+=w*Ne,w=R[1],te+=w*Se,L+=w*Ie,h+=w*Pe,C+=w*mt,I+=w*Re,$+=w*ke,O+=w*vt,j+=w*B,z+=w*g,F+=w*x,y+=w*q,S+=w*Z,G+=w*re,U+=w*ie,V+=w*me,E+=w*Ne,w=R[2],L+=w*Se,h+=w*Ie,C+=w*Pe,I+=w*mt,$+=w*Re,O+=w*ke,j+=w*vt,z+=w*B,F+=w*g,y+=w*x,S+=w*q,G+=w*Z,U+=w*re,V+=w*ie,E+=w*me,J+=w*Ne,w=R[3],h+=w*Se,C+=w*Ie,I+=w*Pe,$+=w*mt,O+=w*Re,j+=w*ke,z+=w*vt,F+=w*B,y+=w*g,S+=w*x,G+=w*q,U+=w*Z,V+=w*re,E+=w*ie,J+=w*me,Q+=w*Ne,w=R[4],C+=w*Se,I+=w*Ie,$+=w*Pe,O+=w*mt,j+=w*Re,z+=w*ke,F+=w*vt,y+=w*B,S+=w*g,G+=w*x,U+=w*q,V+=w*Z,E+=w*re,J+=w*ie,Q+=w*me,ee+=w*Ne,w=R[5],I+=w*Se,$+=w*Ie,O+=w*Pe,j+=w*mt,z+=w*Re,F+=w*ke,y+=w*vt,S+=w*B,G+=w*g,U+=w*x,V+=w*q,E+=w*Z,J+=w*re,Q+=w*ie,ee+=w*me,ne+=w*Ne,w=R[6],$+=w*Se,O+=w*Ie,j+=w*Pe,z+=w*mt,F+=w*Re,y+=w*ke,S+=w*vt,G+=w*B,U+=w*g,V+=w*x,E+=w*q,J+=w*Z,Q+=w*re,ee+=w*ie,ne+=w*me,ae+=w*Ne,w=R[7],O+=w*Se,j+=w*Ie,z+=w*Pe,F+=w*mt,y+=w*Re,S+=w*ke,G+=w*vt,U+=w*B,V+=w*g,E+=w*x,J+=w*q,Q+=w*Z,ee+=w*re,ne+=w*ie,ae+=w*me,ue+=w*Ne,w=R[8],j+=w*Se,z+=w*Ie,F+=w*Pe,y+=w*mt,S+=w*Re,G+=w*ke,U+=w*vt,V+=w*B,E+=w*g,J+=w*x,Q+=w*q,ee+=w*Z,ne+=w*re,ae+=w*ie,ue+=w*me,le+=w*Ne,w=R[9],z+=w*Se,F+=w*Ie,y+=w*Pe,S+=w*mt,G+=w*Re,U+=w*ke,V+=w*vt,E+=w*B,J+=w*g,Q+=w*x,ee+=w*q,ne+=w*Z,ae+=w*re,ue+=w*ie,le+=w*me,we+=w*Ne,w=R[10],F+=w*Se,y+=w*Ie,S+=w*Pe,G+=w*mt,U+=w*Re,V+=w*ke,E+=w*vt,J+=w*B,Q+=w*g,ee+=w*x,ne+=w*q,ae+=w*Z,ue+=w*re,le+=w*ie,we+=w*me,xe+=w*Ne,w=R[11],y+=w*Se,S+=w*Ie,G+=w*Pe,U+=w*mt,V+=w*Re,E+=w*ke,J+=w*vt,Q+=w*B,ee+=w*g,ne+=w*x,ae+=w*q,ue+=w*Z,le+=w*re,we+=w*ie,xe+=w*me,Ae+=w*Ne,w=R[12],S+=w*Se,G+=w*Ie,U+=w*Pe,V+=w*mt,E+=w*Re,J+=w*ke,Q+=w*vt,ee+=w*B,ne+=w*g,ae+=w*x,ue+=w*q,le+=w*Z,we+=w*re,xe+=w*ie,Ae+=w*me,rt+=w*Ne,w=R[13],G+=w*Se,U+=w*Ie,V+=w*Pe,E+=w*mt,J+=w*Re,Q+=w*ke,ee+=w*vt,ne+=w*B,ae+=w*g,ue+=w*x,le+=w*q,we+=w*Z,xe+=w*re,Ae+=w*ie,rt+=w*me,gt+=w*Ne,w=R[14],U+=w*Se,V+=w*Ie,E+=w*Pe,J+=w*mt,Q+=w*Re,ee+=w*ke,ne+=w*vt,ae+=w*B,ue+=w*g,le+=w*x,we+=w*q,xe+=w*Z,Ae+=w*re,rt+=w*ie,gt+=w*me,nt+=w*Ne,w=R[15],V+=w*Se,E+=w*Ie,J+=w*Pe,Q+=w*mt,ee+=w*Re,ne+=w*ke,ae+=w*vt,ue+=w*B,le+=w*g,we+=w*x,xe+=w*q,Ae+=w*Z,rt+=w*re,gt+=w*ie,nt+=w*me,Ue+=w*Ne,X+=38*E,te+=38*J,L+=38*Q,h+=38*ee,C+=38*ne,I+=38*ae,$+=38*ue,O+=38*le,j+=38*we,z+=38*xe,F+=38*Ae,y+=38*rt,S+=38*gt,G+=38*nt,U+=38*Ue,H=1,w=X+H+65535,H=Math.floor(w/65536),X=w-H*65536,w=te+H+65535,H=Math.floor(w/65536),te=w-H*65536,w=L+H+65535,H=Math.floor(w/65536),L=w-H*65536,w=h+H+65535,H=Math.floor(w/65536),h=w-H*65536,w=C+H+65535,H=Math.floor(w/65536),C=w-H*65536,w=I+H+65535,H=Math.floor(w/65536),I=w-H*65536,w=$+H+65535,H=Math.floor(w/65536),$=w-H*65536,w=O+H+65535,H=Math.floor(w/65536),O=w-H*65536,w=j+H+65535,H=Math.floor(w/65536),j=w-H*65536,w=z+H+65535,H=Math.floor(w/65536),z=w-H*65536,w=F+H+65535,H=Math.floor(w/65536),F=w-H*65536,w=y+H+65535,H=Math.floor(w/65536),y=w-H*65536,w=S+H+65535,H=Math.floor(w/65536),S=w-H*65536,w=G+H+65535,H=Math.floor(w/65536),G=w-H*65536,w=U+H+65535,H=Math.floor(w/65536),U=w-H*65536,w=V+H+65535,H=Math.floor(w/65536),V=w-H*65536,X+=H-1+37*(H-1),H=1,w=X+H+65535,H=Math.floor(w/65536),X=w-H*65536,w=te+H+65535,H=Math.floor(w/65536),te=w-H*65536,w=L+H+65535,H=Math.floor(w/65536),L=w-H*65536,w=h+H+65535,H=Math.floor(w/65536),h=w-H*65536,w=C+H+65535,H=Math.floor(w/65536),C=w-H*65536,w=I+H+65535,H=Math.floor(w/65536),I=w-H*65536,w=$+H+65535,H=Math.floor(w/65536),$=w-H*65536,w=O+H+65535,H=Math.floor(w/65536),O=w-H*65536,w=j+H+65535,H=Math.floor(w/65536),j=w-H*65536,w=z+H+65535,H=Math.floor(w/65536),z=w-H*65536,w=F+H+65535,H=Math.floor(w/65536),F=w-H*65536,w=y+H+65535,H=Math.floor(w/65536),y=w-H*65536,w=S+H+65535,H=Math.floor(w/65536),S=w-H*65536,w=G+H+65535,H=Math.floor(w/65536),G=w-H*65536,w=U+H+65535,H=Math.floor(w/65536),U=w-H*65536,w=V+H+65535,H=Math.floor(w/65536),V=w-H*65536,X+=H-1+37*(H-1),D[0]=X,D[1]=te,D[2]=L,D[3]=h,D[4]=C,D[5]=I,D[6]=$,D[7]=O,D[8]=j,D[9]=z,D[10]=F,D[11]=y,D[12]=S,D[13]=G,D[14]=U,D[15]=V}function b(D,R){p(D,R,R)}function v(D,R){const W=n();for(let w=0;w<16;w++)W[w]=R[w];for(let w=253;w>=0;w--)b(W,W),w!==2&&w!==4&&p(W,W,R);for(let w=0;w<16;w++)D[w]=W[w]}function A(D,R){const W=new Uint8Array(32),w=new Float64Array(80),H=n(),X=n(),te=n(),L=n(),h=n(),C=n();for(let j=0;j<31;j++)W[j]=D[j];W[31]=D[31]&127|64,W[0]&=248,l(w,R);for(let j=0;j<16;j++)X[j]=w[j];H[0]=L[0]=1;for(let j=254;j>=0;--j){const z=W[j>>>3]>>>(j&7)&1;a(H,X,z),a(te,L,z),u(h,H,te),f(H,H,te),u(te,X,L),f(X,X,L),b(L,h),b(C,H),p(H,te,H),p(te,X,h),u(h,H,te),f(H,H,te),b(X,H),f(te,L,C),p(H,te,o),u(H,H,L),p(te,te,H),p(H,L,C),p(L,X,w),b(X,h),a(H,X,z),a(te,L,z)}for(let j=0;j<16;j++)w[j+16]=H[j],w[j+32]=te[j],w[j+48]=X[j],w[j+64]=L[j];const I=w.subarray(32),$=w.subarray(16);v(I,I),p($,$,I);const O=new Uint8Array(32);return c(O,$),O}t.scalarMult=A;function _(D){return A(D,i)}t.scalarMultBase=_;function N(D){if(D.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const R=new Uint8Array(D);return{publicKey:_(R),secretKey:R}}t.generateKeyPairFromSeed=N;function P(D){const R=(0,e.randomBytes)(32,D),W=N(R);return(0,r.wipe)(R),W}t.generateKeyPair=P;function M(D,R,W=!1){if(D.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(R.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const w=A(D,R);if(W){let H=0;for(let X=0;X<w.length;X++)H|=w[X];if(H===0)throw new Error("X25519: invalid shared key")}return w}t.sharedKey=M})(w2);function b2(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function N4(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?b2(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function bm(t,e){e||(e=t.reduce((i,o)=>i+o.length,0));const r=N4(e);let n=0;for(const i of t)r.set(i,n),n+=i.length;return b2(r)}function IT(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<t.length;i++){var o=t.charAt(i),s=o.charCodeAt(0);if(r[s]!==255)throw new TypeError(o+" is ambiguous");r[s]=i}var a=t.length,c=t.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function f(v){if(v instanceof Uint8Array||(ArrayBuffer.isView(v)?v=new Uint8Array(v.buffer,v.byteOffset,v.byteLength):Array.isArray(v)&&(v=Uint8Array.from(v))),!(v instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(v.length===0)return"";for(var A=0,_=0,N=0,P=v.length;N!==P&&v[N]===0;)N++,A++;for(var M=(P-N)*u+1>>>0,D=new Uint8Array(M);N!==P;){for(var R=v[N],W=0,w=M-1;(R!==0||W<_)&&w!==-1;w--,W++)R+=256*D[w]>>>0,D[w]=R%a>>>0,R=R/a>>>0;if(R!==0)throw new Error("Non-zero carry");_=W,N++}for(var H=M-_;H!==M&&D[H]===0;)H++;for(var X=c.repeat(A);H<M;++H)X+=t.charAt(D[H]);return X}function p(v){if(typeof v!="string")throw new TypeError("Expected String");if(v.length===0)return new Uint8Array;var A=0;if(v[A]!==" "){for(var _=0,N=0;v[A]===c;)_++,A++;for(var P=(v.length-A)*l+1>>>0,M=new Uint8Array(P);v[A];){var D=r[v.charCodeAt(A)];if(D===255)return;for(var R=0,W=P-1;(D!==0||R<N)&&W!==-1;W--,R++)D+=a*M[W]>>>0,M[W]=D%256>>>0,D=D/256>>>0;if(D!==0)throw new Error("Non-zero carry");N=R,A++}if(v[A]!==" "){for(var w=P-N;w!==P&&M[w]===0;)w++;for(var H=new Uint8Array(_+(P-w)),X=_;w!==P;)H[X++]=M[w++];return H}}}function b(v){var A=p(v);if(A)return A;throw new Error(`Non-${e} character`)}return{encode:f,decodeUnsafe:p,decode:b}}var $T=IT,NT=$T;const MT=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},OT=t=>new TextEncoder().encode(t),DT=t=>new TextDecoder().decode(t);class RT{constructor(e,r,n){this.name=e,this.prefix=r,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class BT{constructor(e,r,n){if(this.name=e,this.prefix=r,r.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=n}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return M4(this,e)}}class LT{constructor(e){this.decoders=e}or(e){return M4(this,e)}decode(e){const r=e[0],n=this.decoders[r];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const M4=(t,e)=>new LT({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class UT{constructor(e,r,n,i){this.name=e,this.prefix=r,this.baseEncode=n,this.baseDecode=i,this.encoder=new RT(e,r,n),this.decoder=new BT(e,r,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const fd=({name:t,prefix:e,encode:r,decode:n})=>new UT(t,e,r,n),ku=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:i}=NT(r,e);return fd({prefix:t,name:e,encode:n,decode:o=>MT(i(o))})},FT=(t,e,r,n)=>{const i={};for(let u=0;u<e.length;++u)i[e[u]]=u;let o=t.length;for(;t[o-1]==="=";)--o;const s=new Uint8Array(o*r/8|0);let a=0,c=0,l=0;for(let u=0;u<o;++u){const f=i[t[u]];if(f===void 0)throw new SyntaxError(`Non-${n} character`);c=c<<r|f,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},jT=(t,e,r)=>{const n=e[e.length-1]==="=",i=(1<<r)-1;let o="",s=0,a=0;for(let c=0;c<t.length;++c)for(a=a<<8|t[c],s+=8;s>r;)s-=r,o+=e[i&a>>s];if(s&&(o+=e[i&a<<r-s]),n)for(;o.length*r&7;)o+="=";return o},Er=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>fd({prefix:e,name:t,encode(i){return jT(i,n,r)},decode(i){return FT(i,n,r,t)}}),WT=fd({prefix:"\0",name:"identity",encode:t=>DT(t),decode:t=>OT(t)}),zT=Object.freeze(Object.defineProperty({__proto__:null,identity:WT},Symbol.toStringTag,{value:"Module"})),HT=Er({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),qT=Object.freeze(Object.defineProperty({__proto__:null,base2:HT},Symbol.toStringTag,{value:"Module"})),GT=Er({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),VT=Object.freeze(Object.defineProperty({__proto__:null,base8:GT},Symbol.toStringTag,{value:"Module"})),KT=ku({prefix:"9",name:"base10",alphabet:"0123456789"}),ZT=Object.freeze(Object.defineProperty({__proto__:null,base10:KT},Symbol.toStringTag,{value:"Module"})),JT=Er({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),YT=Er({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),XT=Object.freeze(Object.defineProperty({__proto__:null,base16:JT,base16upper:YT},Symbol.toStringTag,{value:"Module"})),QT=Er({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),eI=Er({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),tI=Er({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),rI=Er({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),nI=Er({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),iI=Er({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),oI=Er({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),sI=Er({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),aI=Er({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),cI=Object.freeze(Object.defineProperty({__proto__:null,base32:QT,base32hex:nI,base32hexpad:oI,base32hexpadupper:sI,base32hexupper:iI,base32pad:tI,base32padupper:rI,base32upper:eI,base32z:aI},Symbol.toStringTag,{value:"Module"})),lI=ku({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),uI=ku({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),fI=Object.freeze(Object.defineProperty({__proto__:null,base36:lI,base36upper:uI},Symbol.toStringTag,{value:"Module"})),dI=ku({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),hI=ku({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),pI=Object.freeze(Object.defineProperty({__proto__:null,base58btc:dI,base58flickr:hI},Symbol.toStringTag,{value:"Module"})),gI=Er({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),mI=Er({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),wI=Er({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),bI=Er({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),yI=Object.freeze(Object.defineProperty({__proto__:null,base64:gI,base64pad:mI,base64url:wI,base64urlpad:bI},Symbol.toStringTag,{value:"Module"})),O4=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),vI=O4.reduce((t,e,r)=>(t[r]=e,t),[]),EI=O4.reduce((t,e,r)=>(t[e.codePointAt(0)]=r,t),[]);function xI(t){return t.reduce((e,r)=>(e+=vI[r],e),"")}function _I(t){const e=[];for(const r of t){const n=EI[r.codePointAt(0)];if(n===void 0)throw new Error(`Non-base256emoji character: ${r}`);e.push(n)}return new Uint8Array(e)}const CI=fd({prefix:"🚀",name:"base256emoji",encode:xI,decode:_I}),AI=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:CI},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const ym={...zT,...qT,...VT,...ZT,...XT,...cI,...fI,...pI,...yI,...AI};function D4(t,e,r,n){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:n}}}const vm=D4("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),mh=D4("ascii","a",t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},t=>{t=t.substring(1);const e=N4(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}),R4={utf8:vm,"utf-8":vm,hex:ym.base16,latin1:mh,ascii:mh,binary:mh,...ym};function Mn(t,e="utf8"){const r=R4[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?b2(globalThis.Buffer.from(t,"utf-8")):r.decoder.decode(`${r.prefix}${t}`)}function Ln(t,e="utf8"){const r=R4[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):r.encoder.encode(t).substring(1)}var Em=function(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},SI=function(){function t(e,r,n){this.name=e,this.version=r,this.os=n,this.type="browser"}return t}(),PI=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),kI=function(){function t(e,r,n,i){this.name=e,this.version=r,this.os=n,this.bot=i,this.type="bot-device"}return t}(),TI=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),II=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),$I=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,NI=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,xm=3,MI=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",$I]],_m=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function OI(t){return t?Cm(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new II:typeof navigator<"u"?Cm(navigator.userAgent):BI()}function DI(t){return t!==""&&MI.reduce(function(e,r){var n=r[0],i=r[1];if(e)return e;var o=i.exec(t);return!!o&&[n,o]},!1)}function Cm(t){var e=DI(t);if(!e)return null;var r=e[0],n=e[1];if(r==="searchbot")return new TI;var i=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);i?i.length<xm&&(i=Em(Em([],i,!0),LI(xm-i.length),!0)):i=[];var o=i.join("."),s=RI(t),a=NI.exec(t);return a&&a[1]?new kI(r,o,s,a[1]):new SI(r,o,s)}function RI(t){for(var e=0,r=_m.length;e<r;e++){var n=_m[e],i=n[0],o=n[1],s=o.exec(t);if(s)return i}return null}function BI(){var t=typeof process<"u"&&process.version;return t?new PI(process.version.slice(1)):null}function LI(t){for(var e=[],r=0;r<t;r++)e.push("0");return e}var as={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var O1=function(t,e){return O1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)n.hasOwnProperty(i)&&(r[i]=n[i])},O1(t,e)};function UI(t,e){O1(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var D1=function(){return D1=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},D1.apply(this,arguments)};function FI(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function jI(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function WI(t,e){return function(r,n){e(r,n,t)}}function zI(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function HI(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})}function qI(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(u){l=[6,u],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function GI(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}function VI(t,e){for(var r in t)r!=="default"&&!e.hasOwnProperty(r)&&(e[r]=t[r])}function R1(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function B4(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),i,o=[],s;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(s)throw s.error}}return o}function KI(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(B4(arguments[e]));return t}function ZI(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function Zl(t){return this instanceof Zl?(this.v=t,this):new Zl(t)}function JI(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(p){n[p]&&(i[p]=function(b){return new Promise(function(v,A){o.push([p,b,v,A])>1||a(p,b)})})}function a(p,b){try{c(n[p](b))}catch(v){f(o[0][3],v)}}function c(p){p.value instanceof Zl?Promise.resolve(p.value.v).then(l,u):f(o[0][2],p)}function l(p){a("next",p)}function u(p){a("throw",p)}function f(p,b){p(b),o.shift(),o.length&&a(o[0][0],o[0][1])}}function YI(t){var e,r;return e={},n("next"),n("throw",function(i){throw i}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(i,o){e[i]=t[i]?function(s){return(r=!r)?{value:Zl(t[i](s)),done:i==="return"}:o?o(s):s}:o}}function XI(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof R1=="function"?R1(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),i(a,c,s.done,s.value)})}}function i(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}function QI(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function e$(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function t$(t){return t&&t.__esModule?t:{default:t}}function r$(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function n$(t,e,r){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,r),r}const i$=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return D1},__asyncDelegator:YI,__asyncGenerator:JI,__asyncValues:XI,__await:Zl,__awaiter:HI,__classPrivateFieldGet:r$,__classPrivateFieldSet:n$,__createBinding:GI,__decorate:jI,__exportStar:VI,__extends:UI,__generator:qI,__importDefault:t$,__importStar:e$,__makeTemplateObject:QI,__metadata:zI,__param:WI,__read:B4,__rest:FI,__spread:KI,__spreadArrays:ZI,__values:R1},Symbol.toStringTag,{value:"Module"})),dd=e6(i$);var wh={},Nc={},Am;function o$(){if(Am)return Nc;Am=1,Object.defineProperty(Nc,"__esModule",{value:!0}),Nc.delay=void 0;function t(e){return new Promise(r=>{setTimeout(()=>{r(!0)},e)})}return Nc.delay=t,Nc}var Jo={},bh={},Yo={},Sm;function s$(){return Sm||(Sm=1,Object.defineProperty(Yo,"__esModule",{value:!0}),Yo.ONE_THOUSAND=Yo.ONE_HUNDRED=void 0,Yo.ONE_HUNDRED=100,Yo.ONE_THOUSAND=1e3),Yo}var yh={},Pm;function a$(){return Pm||(Pm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(yh)),yh}var km;function L4(){return km||(km=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=dd;e.__exportStar(s$(),t),e.__exportStar(a$(),t)}(bh)),bh}var Tm;function c$(){if(Tm)return Jo;Tm=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.fromMiliseconds=Jo.toMiliseconds=void 0;const t=L4();function e(n){return n*t.ONE_THOUSAND}Jo.toMiliseconds=e;function r(n){return Math.floor(n/t.ONE_THOUSAND)}return Jo.fromMiliseconds=r,Jo}var Im;function l$(){return Im||(Im=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=dd;e.__exportStar(o$(),t),e.__exportStar(c$(),t)}(wh)),wh}var Vs={},$m;function u$(){if($m)return Vs;$m=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(r){if(this.timestamps.has(r))throw new Error(`Watch already started for label: ${r}`);this.timestamps.set(r,{started:Date.now()})}stop(r){const n=this.get(r);if(typeof n.elapsed<"u")throw new Error(`Watch already stopped for label: ${r}`);const i=Date.now()-n.started;this.timestamps.set(r,{started:n.started,elapsed:i})}get(r){const n=this.timestamps.get(r);if(typeof n>"u")throw new Error(`No timestamp found for label: ${r}`);return n}elapsed(r){const n=this.get(r);return n.elapsed||Date.now()-n.started}}return Vs.Watch=t,Vs.default=t,Vs}var vh={},Mc={},Nm;function f$(){if(Nm)return Mc;Nm=1,Object.defineProperty(Mc,"__esModule",{value:!0}),Mc.IWatch=void 0;class t{}return Mc.IWatch=t,Mc}var Mm;function d$(){return Mm||(Mm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),dd.__exportStar(f$(),t)}(vh)),vh}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=dd;e.__exportStar(l$(),t),e.__exportStar(u$(),t),e.__exportStar(d$(),t),e.__exportStar(L4(),t)})(as);var Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.getLocalStorage=Lt.getLocalStorageOrThrow=Lt.getCrypto=Lt.getCryptoOrThrow=F4=Lt.getLocation=Lt.getLocationOrThrow=y2=Lt.getNavigator=Lt.getNavigatorOrThrow=U4=Lt.getDocument=Lt.getDocumentOrThrow=Lt.getFromWindowOrThrow=Lt.getFromWindow=void 0;function $s(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Lt.getFromWindow=$s;function cc(t){const e=$s(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Lt.getFromWindowOrThrow=cc;function h$(){return cc("document")}Lt.getDocumentOrThrow=h$;function p$(){return $s("document")}var U4=Lt.getDocument=p$;function g$(){return cc("navigator")}Lt.getNavigatorOrThrow=g$;function m$(){return $s("navigator")}var y2=Lt.getNavigator=m$;function w$(){return cc("location")}Lt.getLocationOrThrow=w$;function b$(){return $s("location")}var F4=Lt.getLocation=b$;function y$(){return cc("crypto")}Lt.getCryptoOrThrow=y$;function v$(){return $s("crypto")}Lt.getCrypto=v$;function E$(){return cc("localStorage")}Lt.getLocalStorageOrThrow=E$;function x$(){return $s("localStorage")}Lt.getLocalStorage=x$;var v2={};Object.defineProperty(v2,"__esModule",{value:!0});var j4=v2.getWindowMetadata=void 0;const Om=Lt;function _$(){let t,e;try{t=Om.getDocumentOrThrow(),e=Om.getLocationOrThrow()}catch{return null}function r(){const f=t.getElementsByTagName("link"),p=[];for(let b=0;b<f.length;b++){const v=f[b],A=v.getAttribute("rel");if(A&&A.toLowerCase().indexOf("icon")>-1){const _=v.getAttribute("href");if(_)if(_.toLowerCase().indexOf("https:")===-1&&_.toLowerCase().indexOf("http:")===-1&&_.indexOf("//")!==0){let N=e.protocol+"//"+e.host;if(_.indexOf("/")===0)N+=_;else{const P=e.pathname.split("/");P.pop();const M=P.join("/");N+=M+"/"+_}p.push(N)}else if(_.indexOf("//")===0){const N=e.protocol+_;p.push(N)}else p.push(_)}}return p}function n(...f){const p=t.getElementsByTagName("meta");for(let b=0;b<p.length;b++){const v=p[b],A=["itemprop","property","name"].map(_=>v.getAttribute(_)).filter(_=>_?f.includes(_):!1);if(A.length&&A){const _=v.getAttribute("content");if(_)return _}}return""}function i(){let f=n("name","og:site_name","og:title","twitter:title");return f||(f=t.title),f}function o(){return n("description","og:description","twitter:description","keywords")}const s=i(),a=o(),c=e.origin,l=r();return{description:a,url:c,icons:l,name:s}}j4=v2.getWindowMetadata=_$;var Jl={},C$=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),W4="%[a-f0-9]{2}",Dm=new RegExp("("+W4+")|([^%]+?)","gi"),Rm=new RegExp("("+W4+")+","gi");function B1(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],B1(r),B1(n))}function A$(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(Dm)||[],r=1;r<e.length;r++)t=B1(e,r).join(""),e=t.match(Dm)||[];return t}}function S$(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=Rm.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch{var n=A$(r[0]);n!==r[0]&&(e[r[0]]=n)}r=Rm.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),o=0;o<i.length;o++){var s=i[o];t=t.replace(new RegExp(s,"g"),e[s])}return t}var P$=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return S$(t)}},k$=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const r=t.indexOf(e);return r===-1?[t]:[t.slice(0,r),t.slice(r+e.length)]},T$=function(t,e){for(var r={},n=Object.keys(t),i=Array.isArray(e),o=0;o<n.length;o++){var s=n[o],a=t[s];(i?e.indexOf(s)!==-1:e(s,a,t))&&(r[s]=a)}return r};(function(t){const e=C$,r=P$,n=k$,i=T$,o=P=>P==null,s=Symbol("encodeFragmentIdentifier");function a(P){switch(P.arrayFormat){case"index":return M=>(D,R)=>{const W=D.length;return R===void 0||P.skipNull&&R===null||P.skipEmptyString&&R===""?D:R===null?[...D,[u(M,P),"[",W,"]"].join("")]:[...D,[u(M,P),"[",u(W,P),"]=",u(R,P)].join("")]};case"bracket":return M=>(D,R)=>R===void 0||P.skipNull&&R===null||P.skipEmptyString&&R===""?D:R===null?[...D,[u(M,P),"[]"].join("")]:[...D,[u(M,P),"[]=",u(R,P)].join("")];case"colon-list-separator":return M=>(D,R)=>R===void 0||P.skipNull&&R===null||P.skipEmptyString&&R===""?D:R===null?[...D,[u(M,P),":list="].join("")]:[...D,[u(M,P),":list=",u(R,P)].join("")];case"comma":case"separator":case"bracket-separator":{const M=P.arrayFormat==="bracket-separator"?"[]=":"=";return D=>(R,W)=>W===void 0||P.skipNull&&W===null||P.skipEmptyString&&W===""?R:(W=W===null?"":W,R.length===0?[[u(D,P),M,u(W,P)].join("")]:[[R,u(W,P)].join(P.arrayFormatSeparator)])}default:return M=>(D,R)=>R===void 0||P.skipNull&&R===null||P.skipEmptyString&&R===""?D:R===null?[...D,u(M,P)]:[...D,[u(M,P),"=",u(R,P)].join("")]}}function c(P){let M;switch(P.arrayFormat){case"index":return(D,R,W)=>{if(M=/\[(\d*)\]$/.exec(D),D=D.replace(/\[\d*\]$/,""),!M){W[D]=R;return}W[D]===void 0&&(W[D]={}),W[D][M[1]]=R};case"bracket":return(D,R,W)=>{if(M=/(\[\])$/.exec(D),D=D.replace(/\[\]$/,""),!M){W[D]=R;return}if(W[D]===void 0){W[D]=[R];return}W[D]=[].concat(W[D],R)};case"colon-list-separator":return(D,R,W)=>{if(M=/(:list)$/.exec(D),D=D.replace(/:list$/,""),!M){W[D]=R;return}if(W[D]===void 0){W[D]=[R];return}W[D]=[].concat(W[D],R)};case"comma":case"separator":return(D,R,W)=>{const w=typeof R=="string"&&R.includes(P.arrayFormatSeparator),H=typeof R=="string"&&!w&&f(R,P).includes(P.arrayFormatSeparator);R=H?f(R,P):R;const X=w||H?R.split(P.arrayFormatSeparator).map(te=>f(te,P)):R===null?R:f(R,P);W[D]=X};case"bracket-separator":return(D,R,W)=>{const w=/(\[\])$/.test(D);if(D=D.replace(/\[\]$/,""),!w){W[D]=R&&f(R,P);return}const H=R===null?[]:R.split(P.arrayFormatSeparator).map(X=>f(X,P));if(W[D]===void 0){W[D]=H;return}W[D]=[].concat(W[D],H)};default:return(D,R,W)=>{if(W[D]===void 0){W[D]=R;return}W[D]=[].concat(W[D],R)}}}function l(P){if(typeof P!="string"||P.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(P,M){return M.encode?M.strict?e(P):encodeURIComponent(P):P}function f(P,M){return M.decode?r(P):P}function p(P){return Array.isArray(P)?P.sort():typeof P=="object"?p(Object.keys(P)).sort((M,D)=>Number(M)-Number(D)).map(M=>P[M]):P}function b(P){const M=P.indexOf("#");return M!==-1&&(P=P.slice(0,M)),P}function v(P){let M="";const D=P.indexOf("#");return D!==-1&&(M=P.slice(D)),M}function A(P){P=b(P);const M=P.indexOf("?");return M===-1?"":P.slice(M+1)}function _(P,M){return M.parseNumbers&&!Number.isNaN(Number(P))&&typeof P=="string"&&P.trim()!==""?P=Number(P):M.parseBooleans&&P!==null&&(P.toLowerCase()==="true"||P.toLowerCase()==="false")&&(P=P.toLowerCase()==="true"),P}function N(P,M){M=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},M),l(M.arrayFormatSeparator);const D=c(M),R=Object.create(null);if(typeof P!="string"||(P=P.trim().replace(/^[?#&]/,""),!P))return R;for(const W of P.split("&")){if(W==="")continue;let[w,H]=n(M.decode?W.replace(/\+/g," "):W,"=");H=H===void 0?null:["comma","separator","bracket-separator"].includes(M.arrayFormat)?H:f(H,M),D(f(w,M),H,R)}for(const W of Object.keys(R)){const w=R[W];if(typeof w=="object"&&w!==null)for(const H of Object.keys(w))w[H]=_(w[H],M);else R[W]=_(w,M)}return M.sort===!1?R:(M.sort===!0?Object.keys(R).sort():Object.keys(R).sort(M.sort)).reduce((W,w)=>{const H=R[w];return H&&typeof H=="object"&&!Array.isArray(H)?W[w]=p(H):W[w]=H,W},Object.create(null))}t.extract=A,t.parse=N,t.stringify=(P,M)=>{if(!P)return"";M=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},M),l(M.arrayFormatSeparator);const D=H=>M.skipNull&&o(P[H])||M.skipEmptyString&&P[H]==="",R=a(M),W={};for(const H of Object.keys(P))D(H)||(W[H]=P[H]);const w=Object.keys(W);return M.sort!==!1&&w.sort(M.sort),w.map(H=>{const X=P[H];return X===void 0?"":X===null?u(H,M):Array.isArray(X)?X.length===0&&M.arrayFormat==="bracket-separator"?u(H,M)+"[]":X.reduce(R(H),[]).join("&"):u(H,M)+"="+u(X,M)}).filter(H=>H.length>0).join("&")},t.parseUrl=(P,M)=>{M=Object.assign({decode:!0},M);const[D,R]=n(P,"#");return Object.assign({url:D.split("?")[0]||"",query:N(A(P),M)},M&&M.parseFragmentIdentifier&&R?{fragmentIdentifier:f(R,M)}:{})},t.stringifyUrl=(P,M)=>{M=Object.assign({encode:!0,strict:!0,[s]:!0},M);const D=b(P.url).split("?")[0]||"",R=t.extract(P.url),W=t.parse(R,{sort:!1}),w=Object.assign(W,P.query);let H=t.stringify(w,M);H&&(H=`?${H}`);let X=v(P.url);return P.fragmentIdentifier&&(X=`#${M[s]?u(P.fragmentIdentifier,M):P.fragmentIdentifier}`),`${D}${H}${X}`},t.pick=(P,M,D)=>{D=Object.assign({parseFragmentIdentifier:!0,[s]:!1},D);const{url:R,query:W,fragmentIdentifier:w}=t.parseUrl(P,D);return t.stringifyUrl({url:R,query:i(W,M),fragmentIdentifier:w},D)},t.exclude=(P,M,D)=>{const R=Array.isArray(M)?W=>!M.includes(W):(W,w)=>!M(W,w);return t.pick(P,R,D)}})(Jl);const I$={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},$$=":";function xF(t){const[e,r]=t.split($$);return{namespace:e,reference:r}}function _F(t,e=[]){const r=[];return Object.keys(t).forEach(n=>{if(e.length&&!e.includes(n))return;const i=t[n];r.push(...i.accounts)}),r}function z4(t,e){return t.includes(":")?[t]:e.chains||[]}const H4="base10",Kr="base16",L1="base64pad",E2="utf8",q4=0,Tu=1,N$=0,Bm=1,U1=12,x2=32;function CF(){const t=w2.generateKeyPair();return{privateKey:Ln(t.secretKey,Kr),publicKey:Ln(t.publicKey,Kr)}}function AF(){const t=sd.randomBytes(x2);return Ln(t,Kr)}function SF(t,e){const r=w2.sharedKey(Mn(t,Kr),Mn(e,Kr),!0),n=new yT(ud.SHA256,r).expand(x2);return Ln(n,Kr)}function PF(t){const e=ud.hash(Mn(t,Kr));return Ln(e,Kr)}function kF(t){const e=ud.hash(Mn(t,E2));return Ln(e,Kr)}function M$(t){return Mn(`${t}`,H4)}function hd(t){return Number(Ln(t,H4))}function TF(t){const e=M$(typeof t.type<"u"?t.type:q4);if(hd(e)===Tu&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof t.senderPublicKey<"u"?Mn(t.senderPublicKey,Kr):void 0,n=typeof t.iv<"u"?Mn(t.iv,Kr):sd.randomBytes(U1),i=new g2.ChaCha20Poly1305(Mn(t.symKey,Kr)).seal(n,Mn(t.message,E2));return O$({type:e,sealed:i,iv:n,senderPublicKey:r})}function IF(t){const e=new g2.ChaCha20Poly1305(Mn(t.symKey,Kr)),{sealed:r,iv:n}=G4(t.encoded),i=e.open(n,r);if(i===null)throw new Error("Failed to decrypt");return Ln(i,E2)}function O$(t){if(hd(t.type)===Tu){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Ln(bm([t.type,t.senderPublicKey,t.iv,t.sealed]),L1)}return Ln(bm([t.type,t.iv,t.sealed]),L1)}function G4(t){const e=Mn(t,L1),r=e.slice(N$,Bm),n=Bm;if(hd(r)===Tu){const a=n+x2,c=a+U1,l=e.slice(n,a),u=e.slice(a,c),f=e.slice(c);return{type:r,sealed:f,iv:u,senderPublicKey:l}}const i=n+U1,o=e.slice(n,i),s=e.slice(i);return{type:r,sealed:s,iv:o}}function $F(t,e){const r=G4(t);return D$({type:hd(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?Ln(r.senderPublicKey,Kr):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function D$(t){const e=(t==null?void 0:t.type)||q4;if(e===Tu){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function NF(t){return t.type===Tu&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var R$=Object.defineProperty,Lm=Object.getOwnPropertySymbols,B$=Object.prototype.hasOwnProperty,L$=Object.prototype.propertyIsEnumerable,Um=(t,e,r)=>e in t?R$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Fm=(t,e)=>{for(var r in e||(e={}))B$.call(e,r)&&Um(t,r,e[r]);if(Lm)for(var r of Lm(e))L$.call(e,r)&&Um(t,r,e[r]);return t};const U$="ReactNative",rn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},F$="js";function V4(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function pd(){return!U4()&&!!y2()&&navigator.product===U$}function _2(){return!V4()&&!!y2()}function Iu(){return pd()?rn.reactNative:V4()?rn.node:_2()?rn.browser:rn.unknown}function j$(t,e){let r=Jl.parse(t);return r=Fm(Fm({},r),e),t=Jl.stringify(r),t}function MF(){return j4()||{name:"",description:"",url:"",icons:[""]}}function W$(){if(Iu()===rn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:r,Version:n}=global.Platform;return[r,n].join("-")}const t=OI();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function z$(){var t;const e=Iu();return e===rn.browser?[e,((t=F4())==null?void 0:t.host)||"unknown"].join(":"):e}function H$(t,e,r){const n=W$(),i=z$();return[[t,e].join("-"),[F$,r].join("-"),n,i].join("/")}function OF({protocol:t,version:e,relayUrl:r,sdkVersion:n,auth:i,projectId:o,useOnCloseEvent:s}){const a=r.split("?"),c=H$(t,e,n),l={auth:i,ua:c,projectId:o,useOnCloseEvent:s||void 0},u=j$(a[1]||"",l);return a[0]+"?"+u}function ns(t,e){return t.filter(r=>e.includes(r)).length===t.length}function DF(t){return Object.fromEntries(t.entries())}function RF(t){return new Map(Object.entries(t))}function BF(t=as.FIVE_MINUTES,e){const r=as.toMiliseconds(t||as.FIVE_MINUTES);let n,i,o;return{resolve:s=>{o&&n&&(clearTimeout(o),n(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(e))},r),n=s,i=a})}}function LF(t,e,r){return new Promise(async(n,i)=>{const o=setTimeout(()=>i(new Error(r)),e);try{const s=await t;n(s)}catch(s){i(s)}clearTimeout(o)})}function K4(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function UF(t){return K4("topic",t)}function FF(t){return K4("id",t)}function jF(t){const[e,r]=t.split(":"),n={id:void 0,topic:void 0};if(e==="topic"&&typeof r=="string")n.topic=r;else if(e==="id"&&Number.isInteger(Number(r)))n.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);return n}function WF(t,e){return as.fromMiliseconds((e||Date.now())+as.toMiliseconds(t))}function zF(t){return Date.now()>=as.toMiliseconds(t)}function HF(t,e){return`${t}${e?`:${e}`:""}`}function Eh(t=[],e=[]){return[...new Set([...t,...e])]}async function qF({id:t,topic:e,wcDeepLink:r}){try{if(!r)return;const n=typeof r=="string"?JSON.parse(r):r;let i=n==null?void 0:n.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${t}&sessionTopic=${e}`,s=Iu();s===rn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===rn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(n){console.error(n)}}const q$="irn";function GF(t){return(t==null?void 0:t.relay)||{protocol:q$}}function VF(t){const e=I$[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var G$=Object.defineProperty,jm=Object.getOwnPropertySymbols,V$=Object.prototype.hasOwnProperty,K$=Object.prototype.propertyIsEnumerable,Wm=(t,e,r)=>e in t?G$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Z$=(t,e)=>{for(var r in e||(e={}))V$.call(e,r)&&Wm(t,r,e[r]);if(jm)for(var r of jm(e))K$.call(e,r)&&Wm(t,r,e[r]);return t};function J$(t,e="-"){const r={},n="relay"+e;return Object.keys(t).forEach(i=>{if(i.startsWith(n)){const o=i.replace(n,""),s=t[i];r[o]=s}}),r}function KF(t){const e=t.indexOf(":"),r=t.indexOf("?")!==-1?t.indexOf("?"):void 0,n=t.substring(0,e),i=t.substring(e+1,r).split("@"),o=typeof r<"u"?t.substring(r):"",s=Jl.parse(o);return{protocol:n,topic:Y$(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:J$(s)}}function Y$(t){return t.startsWith("//")?t.substring(2):t}function X$(t,e="-"){const r="relay",n={};return Object.keys(t).forEach(i=>{const o=r+e+i;t[i]&&(n[o]=t[i])}),n}function ZF(t){return`${t.protocol}:${t.topic}@${t.version}?`+Jl.stringify(Z$({symKey:t.symKey},X$(t.relay)))}var Q$=Object.defineProperty,eN=Object.defineProperties,tN=Object.getOwnPropertyDescriptors,zm=Object.getOwnPropertySymbols,rN=Object.prototype.hasOwnProperty,nN=Object.prototype.propertyIsEnumerable,Hm=(t,e,r)=>e in t?Q$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,iN=(t,e)=>{for(var r in e||(e={}))rN.call(e,r)&&Hm(t,r,e[r]);if(zm)for(var r of zm(e))nN.call(e,r)&&Hm(t,r,e[r]);return t},oN=(t,e)=>eN(t,tN(e));function lc(t){const e=[];return t.forEach(r=>{const[n,i]=r.split(":");e.push(`${n}:${i}`)}),e}function sN(t){const e=[];return Object.values(t).forEach(r=>{e.push(...lc(r.accounts))}),e}function aN(t,e){const r=[];return Object.values(t).forEach(n=>{lc(n.accounts).includes(e)&&r.push(...n.methods)}),r}function cN(t,e){const r=[];return Object.values(t).forEach(n=>{lc(n.accounts).includes(e)&&r.push(...n.events)}),r}function JF(t,e){const r=bN(t,e);if(r)throw new Error(r.message);const n={};for(const[i,o]of Object.entries(t))n[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return n}function Z4(t){return t.includes(":")}function lN(t){return Z4(t)?t.split(":")[0]:t}function J4(t){var e,r,n;const i={};if(!C2(t))return i;for(const[o,s]of Object.entries(t)){const a=Z4(o)?[o]:s.chains,c=s.methods||[],l=s.events||[],u=lN(o);i[u]=oN(iN({},i[u]),{chains:Eh(a,(e=i[u])==null?void 0:e.chains),methods:Eh(c,(r=i[u])==null?void 0:r.methods),events:Eh(l,(n=i[u])==null?void 0:n.events)})}return i}const uN={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},fN={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function lo(t,e){const{message:r,code:n}=fN[t];return{message:e?`${r} ${e}`:r,code:n}}function Ga(t,e){const{message:r,code:n}=uN[t];return{message:e?`${r} ${e}`:r,code:n}}function gd(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function C2(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function cs(t){return typeof t>"u"}function En(t,e){return e&&cs(t)?!0:typeof t=="string"&&!!t.trim().length}function A2(t,e){return e&&cs(t)?!0:typeof t=="number"&&!isNaN(t)}function YF(t,e){const{requiredNamespaces:r}=e,n=Object.keys(t.namespaces),i=Object.keys(r);let o=!0;return ns(i,n)?(n.forEach(s=>{const{accounts:a,methods:c,events:l}=t.namespaces[s],u=lc(a),f=r[s];(!ns(z4(s,f),u)||!ns(f.methods,c)||!ns(f.events,l))&&(o=!1)}),o):!1}function ff(t){return En(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function dN(t){if(En(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const r=e[0]+":"+e[1];return!!e[2]&&ff(r)}}return!1}function XF(t){if(En(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function QF(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function ej(t){return t==null?void 0:t.topic}function tj(t,e){let r=null;return En(t==null?void 0:t.publicKey,!1)||(r=lo("MISSING_OR_INVALID",`${e} controller public key should be a string`)),r}function qm(t){let e=!0;return gd(t)?t.length&&(e=t.every(r=>En(r,!1))):e=!1,e}function hN(t,e,r){let n=null;return gd(e)&&e.length?e.forEach(i=>{n||ff(i)||(n=Ga("UNSUPPORTED_CHAINS",`${r}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):ff(t)||(n=Ga("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),n}function pN(t,e,r){let n=null;return Object.entries(t).forEach(([i,o])=>{if(n)return;const s=hN(i,z4(i,o),`${e} ${r}`);s&&(n=s)}),n}function gN(t,e){let r=null;return gd(t)?t.forEach(n=>{r||dN(n)||(r=Ga("UNSUPPORTED_ACCOUNTS",`${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`))}):r=Ga("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function mN(t,e){let r=null;return Object.values(t).forEach(n=>{if(r)return;const i=gN(n==null?void 0:n.accounts,`${e} namespace`);i&&(r=i)}),r}function wN(t,e){let r=null;return qm(t==null?void 0:t.methods)?qm(t==null?void 0:t.events)||(r=Ga("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):r=Ga("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),r}function Y4(t,e){let r=null;return Object.values(t).forEach(n=>{if(r)return;const i=wN(n,`${e}, namespace`);i&&(r=i)}),r}function rj(t,e,r){let n=null;if(t&&C2(t)){const i=Y4(t,e);i&&(n=i);const o=pN(t,e,r);o&&(n=o)}else n=lo("MISSING_OR_INVALID",`${e}, ${r} should be an object with data`);return n}function bN(t,e){let r=null;if(t&&C2(t)){const n=Y4(t,e);n&&(r=n);const i=mN(t,e);i&&(r=i)}else r=lo("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return r}function yN(t){return En(t.protocol,!0)}function nj(t,e){let r=!1;return e&&!t?r=!0:t&&gd(t)&&t.length&&t.forEach(n=>{r=yN(n)}),r}function ij(t){return typeof t=="number"}function oj(t){return typeof t<"u"&&typeof t!==null}function sj(t){return!(!t||typeof t!="object"||!t.code||!A2(t.code,!1)||!t.message||!En(t.message,!1))}function aj(t){return!(cs(t)||!En(t.method,!1))}function cj(t){return!(cs(t)||cs(t.result)&&cs(t.error)||!A2(t.id,!1)||!En(t.jsonrpc,!1))}function lj(t){return!(cs(t)||!En(t.name,!1))}function uj(t,e){return!(!ff(e)||!sN(t).includes(e))}function fj(t,e,r){return En(r,!1)?aN(t,e).includes(r):!1}function dj(t,e,r){return En(r,!1)?cN(t,e).includes(r):!1}function hj(t,e,r){let n=null;const i=vN(t),o=EN(e),s=Object.keys(i),a=Object.keys(o),c=Gm(Object.keys(t)),l=Gm(Object.keys(e)),u=c.filter(f=>!l.includes(f));return u.length&&(n=lo("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),ns(s,a)||(n=lo("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(f=>{if(!f.includes(":")||n)return;const p=lc(e[f].accounts);p.includes(f)||(n=lo("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`))}),s.forEach(f=>{n||(ns(i[f].methods,o[f].methods)?ns(i[f].events,o[f].events)||(n=lo("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${f}`)):n=lo("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${f}`))}),n}function vN(t){const e={};return Object.keys(t).forEach(r=>{var n;r.includes(":")?e[r]=t[r]:(n=t[r].chains)==null||n.forEach(i=>{e[i]={methods:t[r].methods,events:t[r].events}})}),e}function Gm(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function EN(t){const e={};return Object.keys(t).forEach(r=>{if(r.includes(":"))e[r]=t[r];else{const n=lc(t[r].accounts);n==null||n.forEach(i=>{e[i]={accounts:t[r].accounts.filter(o=>o.includes(`${i}:`)),methods:t[r].methods,events:t[r].events}})}}),e}function pj(t,e){return A2(t,!1)&&t<=e.max&&t>=e.min}function gj(){const t=Iu();return new Promise(e=>{switch(t){case rn.browser:e(xN());break;case rn.reactNative:e(_N());break;case rn.node:e(CN());break;default:e(!0)}})}function xN(){return _2()&&(navigator==null?void 0:navigator.onLine)}async function _N(){if(pd()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function CN(){return!0}function mj(t){switch(Iu()){case rn.browser:AN(t);break;case rn.reactNative:SN(t);break}}function AN(t){!pd()&&_2()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function SN(t){pd()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const xh={};class wj{static get(e){return xh[e]}static set(e,r){xh[e]=r}static delete(e){delete xh[e]}}var X4="eip155",PN="store",Q4="requestedChains",F1="wallet_addEthereumChain",qt,rl,v0,j1,S2,eb,E0,W1,z1,tb,df,P2,ta,qc,hf,k2,pf,T2,gf,I2,kN=class extends Fp{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),Wr(this,v0),Wr(this,S2),Wr(this,E0),Wr(this,z1),Wr(this,df),Wr(this,ta),Wr(this,hf),Wr(this,pf),Wr(this,gf),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Wr(this,qt,void 0),Wr(this,rl,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Dn(e[0])})},this.onChainChanged=e=>{const r=Number(e),n=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:n}})},this.onDisconnect=()=>{pr(this,ta,qc).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},pr(this,v0,j1).call(this)}async connect({chainId:t,pairingTopic:e}={}){var r,n,i,o,s;try{let a=t;if(!a){const v=(r=this.storage)==null?void 0:r.getItem(PN),A=(o=(i=(n=v==null?void 0:v.state)==null?void 0:n.data)==null?void 0:i.chain)==null?void 0:o.id;A&&!this.isChainUnsupported(A)?a=A:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const c=await this.getProvider();pr(this,z1,tb).call(this);const l=pr(this,E0,W1).call(this);if(c.session&&l&&await c.disconnect(),!c.session||l){const v=this.chains.filter(A=>A.id!==a).map(A=>A.id);this.emit("message",{type:"connecting"}),await c.connect({pairingTopic:e,chains:[a],optionalChains:v.length?v:void 0}),pr(this,ta,qc).call(this,this.chains.map(({id:A})=>A))}const u=await c.enable(),f=Dn(u[0]),p=await this.getChainId(),b=this.isChainUnsupported(p);return{account:f,chain:{id:p,unsupported:b}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Gr(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{pr(this,df,P2).call(this),pr(this,ta,qc).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Dn(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return Nt(this,qt)||await pr(this,v0,j1).call(this),t&&await this.switchChain(t),Nt(this,qt)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),n=this.chains.find(i=>i.id===t);if(!e)throw new Error("provider is required.");return Lp({account:r,chain:n,transport:Mp(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),r=pr(this,E0,W1).call(this);if(!t)return!1;if(r&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var r,n;const e=this.chains.find(i=>i.id===t);if(!e)throw new Li(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=pr(this,pf,T2).call(this),s=pr(this,gf,I2).call(this);if(!o.includes(t)&&s.includes(F1)){await i.request({method:F1,params:[{chainId:qe(e.id),blockExplorerUrls:[(n=(r=e.blockExplorers)==null?void 0:r.default)==null?void 0:n.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const c=pr(this,hf,k2).call(this);c.push(t),pr(this,ta,qc).call(this,c)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:qe(t)}]}),e}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Gr(i):new Li(i)}}};qt=new WeakMap;rl=new WeakMap;v0=new WeakSet;j1=async function(){return!Nt(this,rl)&&typeof window<"u"&&Pl(this,rl,pr(this,S2,eb).call(this)),Nt(this,rl)};S2=new WeakSet;eb=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:r}=await ka(()=>import("./index.es-xWmViiA2.js"),__vite__mapDeps([2,1])),[n,...i]=this.chains.map(({id:o})=>o);if(n){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:l}=this.options;Pl(this,qt,await t.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:r,optionalEvents:e,chains:[n],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:c,relayUrl:l}))}};E0=new WeakSet;W1=function(){if(pr(this,gf,I2).call(this).includes(F1)||!this.options.isNewChainsStale)return!1;const e=pr(this,hf,k2).call(this),r=this.chains.map(({id:i})=>i),n=pr(this,pf,T2).call(this);return n.length&&!n.some(i=>r.includes(i))?!1:!r.every(i=>e.includes(i))};z1=new WeakSet;tb=function(){Nt(this,qt)&&(pr(this,df,P2).call(this),Nt(this,qt).on("accountsChanged",this.onAccountsChanged),Nt(this,qt).on("chainChanged",this.onChainChanged),Nt(this,qt).on("disconnect",this.onDisconnect),Nt(this,qt).on("session_delete",this.onDisconnect),Nt(this,qt).on("display_uri",this.onDisplayUri),Nt(this,qt).on("connect",this.onConnect))};df=new WeakSet;P2=function(){Nt(this,qt)&&(Nt(this,qt).removeListener("accountsChanged",this.onAccountsChanged),Nt(this,qt).removeListener("chainChanged",this.onChainChanged),Nt(this,qt).removeListener("disconnect",this.onDisconnect),Nt(this,qt).removeListener("session_delete",this.onDisconnect),Nt(this,qt).removeListener("display_uri",this.onDisplayUri),Nt(this,qt).removeListener("connect",this.onConnect))};ta=new WeakSet;qc=function(t){var e;(e=this.storage)==null||e.setItem(Q4,t)};hf=new WeakSet;k2=function(){var t;return((t=this.storage)==null?void 0:t.getItem(Q4))??[]};pf=new WeakSet;T2=function(){var n,i,o;if(!Nt(this,qt))return[];const t=(n=Nt(this,qt).session)==null?void 0:n.namespaces;return t?((o=(i=J4(t)[X4])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};gf=new WeakSet;I2=function(){var n,i;if(!Nt(this,qt))return[];const t=(n=Nt(this,qt).session)==null?void 0:n.namespaces;return t?((i=J4(t)[X4])==null?void 0:i.methods)??[]:[]};function TN(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const IN=$e.getBlockchainApiUrl();function $N({projectId:t}){return function(r){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(r.id))return null;const i=`${IN}/v1/?chainId=${Ze.EIP155}:${r.id}&projectId=${t}`;return{chain:{...r,rpcUrls:{...r.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function NN(t){return new Tk({...t,_sdkVersion:`html-wagmi-${Ze.VERSION}`})}var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ns(t,e,r){return r={path:e,exports:{},require:function(n,i){return MN(n,i??r.path)}},t(r,r.exports),r.exports}function MN(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var ze=Ns(function(t){(function(e,r){function n(L,h){if(!L)throw new Error(h||"Assertion failed")}function i(L,h){L.super_=h;var C=function(){};C.prototype=h.prototype,L.prototype=new C,L.prototype.constructor=L}function o(L,h,C){if(o.isBN(L))return L;this.negative=0,this.words=null,this.length=0,this.red=null,L!==null&&((h==="le"||h==="be")&&(C=h,h=10),this._init(L||0,h||10,C||"be"))}typeof e=="object"?e.exports=o:r.BN=o,o.BN=o,o.wordSize=26;var s;try{typeof window<"u"&&typeof window.Buffer<"u"?s=window.Buffer:s=null.Buffer}catch{}o.isBN=function(h){return h instanceof o?!0:h!==null&&typeof h=="object"&&h.constructor.wordSize===o.wordSize&&Array.isArray(h.words)},o.max=function(h,C){return h.cmp(C)>0?h:C},o.min=function(h,C){return h.cmp(C)<0?h:C},o.prototype._init=function(h,C,I){if(typeof h=="number")return this._initNumber(h,C,I);if(typeof h=="object")return this._initArray(h,C,I);C==="hex"&&(C=16),n(C===(C|0)&&C>=2&&C<=36),h=h.toString().replace(/\s+/g,"");var $=0;h[0]==="-"&&($++,this.negative=1),$<h.length&&(C===16?this._parseHex(h,$,I):(this._parseBase(h,C,$),I==="le"&&this._initArray(this.toArray(),C,I)))},o.prototype._initNumber=function(h,C,I){h<0&&(this.negative=1,h=-h),h<67108864?(this.words=[h&67108863],this.length=1):h<4503599627370496?(this.words=[h&67108863,h/67108864&67108863],this.length=2):(n(h<9007199254740992),this.words=[h&67108863,h/67108864&67108863,1],this.length=3),I==="le"&&this._initArray(this.toArray(),C,I)},o.prototype._initArray=function(h,C,I){if(n(typeof h.length=="number"),h.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(h.length/3),this.words=new Array(this.length);for(var $=0;$<this.length;$++)this.words[$]=0;var O,j,z=0;if(I==="be")for($=h.length-1,O=0;$>=0;$-=3)j=h[$]|h[$-1]<<8|h[$-2]<<16,this.words[O]|=j<<z&67108863,this.words[O+1]=j>>>26-z&67108863,z+=24,z>=26&&(z-=26,O++);else if(I==="le")for($=0,O=0;$<h.length;$+=3)j=h[$]|h[$+1]<<8|h[$+2]<<16,this.words[O]|=j<<z&67108863,this.words[O+1]=j>>>26-z&67108863,z+=24,z>=26&&(z-=26,O++);return this.strip()};function a(L,h){var C=L.charCodeAt(h);return C>=65&&C<=70?C-55:C>=97&&C<=102?C-87:C-48&15}function c(L,h,C){var I=a(L,C);return C-1>=h&&(I|=a(L,C-1)<<4),I}o.prototype._parseHex=function(h,C,I){this.length=Math.ceil((h.length-C)/6),this.words=new Array(this.length);for(var $=0;$<this.length;$++)this.words[$]=0;var O=0,j=0,z;if(I==="be")for($=h.length-1;$>=C;$-=2)z=c(h,C,$)<<O,this.words[j]|=z&67108863,O>=18?(O-=18,j+=1,this.words[j]|=z>>>26):O+=8;else{var F=h.length-C;for($=F%2===0?C+1:C;$<h.length;$+=2)z=c(h,C,$)<<O,this.words[j]|=z&67108863,O>=18?(O-=18,j+=1,this.words[j]|=z>>>26):O+=8}this.strip()};function l(L,h,C,I){for(var $=0,O=Math.min(L.length,C),j=h;j<O;j++){var z=L.charCodeAt(j)-48;$*=I,z>=49?$+=z-49+10:z>=17?$+=z-17+10:$+=z}return $}o.prototype._parseBase=function(h,C,I){this.words=[0],this.length=1;for(var $=0,O=1;O<=67108863;O*=C)$++;$--,O=O/C|0;for(var j=h.length-I,z=j%$,F=Math.min(j,j-z)+I,y=0,S=I;S<F;S+=$)y=l(h,S,S+$,C),this.imuln(O),this.words[0]+y<67108864?this.words[0]+=y:this._iaddn(y);if(z!==0){var G=1;for(y=l(h,S,h.length,C),S=0;S<z;S++)G*=C;this.imuln(G),this.words[0]+y<67108864?this.words[0]+=y:this._iaddn(y)}this.strip()},o.prototype.copy=function(h){h.words=new Array(this.length);for(var C=0;C<this.length;C++)h.words[C]=this.words[C];h.length=this.length,h.negative=this.negative,h.red=this.red},o.prototype.clone=function(){var h=new o(null);return this.copy(h),h},o.prototype._expand=function(h){for(;this.length<h;)this.words[this.length++]=0;return this},o.prototype.strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},o.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var u=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],f=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],p=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];o.prototype.toString=function(h,C){h=h||10,C=C|0||1;var I;if(h===16||h==="hex"){I="";for(var $=0,O=0,j=0;j<this.length;j++){var z=this.words[j],F=((z<<$|O)&16777215).toString(16);O=z>>>24-$&16777215,O!==0||j!==this.length-1?I=u[6-F.length]+F+I:I=F+I,$+=2,$>=26&&($-=26,j--)}for(O!==0&&(I=O.toString(16)+I);I.length%C!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}if(h===(h|0)&&h>=2&&h<=36){var y=f[h],S=p[h];I="";var G=this.clone();for(G.negative=0;!G.isZero();){var U=G.modn(S).toString(h);G=G.idivn(S),G.isZero()?I=U+I:I=u[y-U.length]+U+I}for(this.isZero()&&(I="0"+I);I.length%C!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}n(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var h=this.words[0];return this.length===2?h+=this.words[1]*67108864:this.length===3&&this.words[2]===1?h+=4503599627370496+this.words[1]*67108864:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-h:h},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(h,C){return n(typeof s<"u"),this.toArrayLike(s,h,C)},o.prototype.toArray=function(h,C){return this.toArrayLike(Array,h,C)},o.prototype.toArrayLike=function(h,C,I){var $=this.byteLength(),O=I||Math.max(1,$);n($<=O,"byte array longer than desired length"),n(O>0,"Requested array length <= 0"),this.strip();var j=C==="le",z=new h(O),F,y,S=this.clone();if(j){for(y=0;!S.isZero();y++)F=S.andln(255),S.iushrn(8),z[y]=F;for(;y<O;y++)z[y]=0}else{for(y=0;y<O-$;y++)z[y]=0;for(y=0;!S.isZero();y++)F=S.andln(255),S.iushrn(8),z[O-y-1]=F}return z},Math.clz32?o.prototype._countBits=function(h){return 32-Math.clz32(h)}:o.prototype._countBits=function(h){var C=h,I=0;return C>=4096&&(I+=13,C>>>=13),C>=64&&(I+=7,C>>>=7),C>=8&&(I+=4,C>>>=4),C>=2&&(I+=2,C>>>=2),I+C},o.prototype._zeroBits=function(h){if(h===0)return 26;var C=h,I=0;return C&8191||(I+=13,C>>>=13),C&127||(I+=7,C>>>=7),C&15||(I+=4,C>>>=4),C&3||(I+=2,C>>>=2),C&1||I++,I},o.prototype.bitLength=function(){var h=this.words[this.length-1],C=this._countBits(h);return(this.length-1)*26+C};function b(L){for(var h=new Array(L.bitLength()),C=0;C<h.length;C++){var I=C/26|0,$=C%26;h[C]=(L.words[I]&1<<$)>>>$}return h}o.prototype.zeroBits=function(){if(this.isZero())return 0;for(var h=0,C=0;C<this.length;C++){var I=this._zeroBits(this.words[C]);if(h+=I,I!==26)break}return h},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(h){return this.negative!==0?this.abs().inotn(h).iaddn(1):this.clone()},o.prototype.fromTwos=function(h){return this.testn(h-1)?this.notn(h).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return this.negative!==0},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(h){for(;this.length<h.length;)this.words[this.length++]=0;for(var C=0;C<h.length;C++)this.words[C]=this.words[C]|h.words[C];return this.strip()},o.prototype.ior=function(h){return n((this.negative|h.negative)===0),this.iuor(h)},o.prototype.or=function(h){return this.length>h.length?this.clone().ior(h):h.clone().ior(this)},o.prototype.uor=function(h){return this.length>h.length?this.clone().iuor(h):h.clone().iuor(this)},o.prototype.iuand=function(h){var C;this.length>h.length?C=h:C=this;for(var I=0;I<C.length;I++)this.words[I]=this.words[I]&h.words[I];return this.length=C.length,this.strip()},o.prototype.iand=function(h){return n((this.negative|h.negative)===0),this.iuand(h)},o.prototype.and=function(h){return this.length>h.length?this.clone().iand(h):h.clone().iand(this)},o.prototype.uand=function(h){return this.length>h.length?this.clone().iuand(h):h.clone().iuand(this)},o.prototype.iuxor=function(h){var C,I;this.length>h.length?(C=this,I=h):(C=h,I=this);for(var $=0;$<I.length;$++)this.words[$]=C.words[$]^I.words[$];if(this!==C)for(;$<C.length;$++)this.words[$]=C.words[$];return this.length=C.length,this.strip()},o.prototype.ixor=function(h){return n((this.negative|h.negative)===0),this.iuxor(h)},o.prototype.xor=function(h){return this.length>h.length?this.clone().ixor(h):h.clone().ixor(this)},o.prototype.uxor=function(h){return this.length>h.length?this.clone().iuxor(h):h.clone().iuxor(this)},o.prototype.inotn=function(h){n(typeof h=="number"&&h>=0);var C=Math.ceil(h/26)|0,I=h%26;this._expand(C),I>0&&C--;for(var $=0;$<C;$++)this.words[$]=~this.words[$]&67108863;return I>0&&(this.words[$]=~this.words[$]&67108863>>26-I),this.strip()},o.prototype.notn=function(h){return this.clone().inotn(h)},o.prototype.setn=function(h,C){n(typeof h=="number"&&h>=0);var I=h/26|0,$=h%26;return this._expand(I+1),C?this.words[I]=this.words[I]|1<<$:this.words[I]=this.words[I]&~(1<<$),this.strip()},o.prototype.iadd=function(h){var C;if(this.negative!==0&&h.negative===0)return this.negative=0,C=this.isub(h),this.negative^=1,this._normSign();if(this.negative===0&&h.negative!==0)return h.negative=0,C=this.isub(h),h.negative=1,C._normSign();var I,$;this.length>h.length?(I=this,$=h):(I=h,$=this);for(var O=0,j=0;j<$.length;j++)C=(I.words[j]|0)+($.words[j]|0)+O,this.words[j]=C&67108863,O=C>>>26;for(;O!==0&&j<I.length;j++)C=(I.words[j]|0)+O,this.words[j]=C&67108863,O=C>>>26;if(this.length=I.length,O!==0)this.words[this.length]=O,this.length++;else if(I!==this)for(;j<I.length;j++)this.words[j]=I.words[j];return this},o.prototype.add=function(h){var C;return h.negative!==0&&this.negative===0?(h.negative=0,C=this.sub(h),h.negative^=1,C):h.negative===0&&this.negative!==0?(this.negative=0,C=h.sub(this),this.negative=1,C):this.length>h.length?this.clone().iadd(h):h.clone().iadd(this)},o.prototype.isub=function(h){if(h.negative!==0){h.negative=0;var C=this.iadd(h);return h.negative=1,C._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(h),this.negative=1,this._normSign();var I=this.cmp(h);if(I===0)return this.negative=0,this.length=1,this.words[0]=0,this;var $,O;I>0?($=this,O=h):($=h,O=this);for(var j=0,z=0;z<O.length;z++)C=($.words[z]|0)-(O.words[z]|0)+j,j=C>>26,this.words[z]=C&67108863;for(;j!==0&&z<$.length;z++)C=($.words[z]|0)+j,j=C>>26,this.words[z]=C&67108863;if(j===0&&z<$.length&&$!==this)for(;z<$.length;z++)this.words[z]=$.words[z];return this.length=Math.max(this.length,z),$!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(h){return this.clone().isub(h)};function v(L,h,C){C.negative=h.negative^L.negative;var I=L.length+h.length|0;C.length=I,I=I-1|0;var $=L.words[0]|0,O=h.words[0]|0,j=$*O,z=j&67108863,F=j/67108864|0;C.words[0]=z;for(var y=1;y<I;y++){for(var S=F>>>26,G=F&67108863,U=Math.min(y,h.length-1),V=Math.max(0,y-L.length+1);V<=U;V++){var E=y-V|0;$=L.words[E]|0,O=h.words[V]|0,j=$*O+G,S+=j/67108864|0,G=j&67108863}C.words[y]=G|0,F=S|0}return F!==0?C.words[y]=F|0:C.length--,C.strip()}var A=function(h,C,I){var $=h.words,O=C.words,j=I.words,z=0,F,y,S,G=$[0]|0,U=G&8191,V=G>>>13,E=$[1]|0,J=E&8191,Q=E>>>13,ee=$[2]|0,ne=ee&8191,ae=ee>>>13,ue=$[3]|0,le=ue&8191,we=ue>>>13,xe=$[4]|0,Ae=xe&8191,rt=xe>>>13,gt=$[5]|0,nt=gt&8191,Ue=gt>>>13,Se=$[6]|0,Ie=Se&8191,Pe=Se>>>13,mt=$[7]|0,Re=mt&8191,ke=mt>>>13,vt=$[8]|0,B=vt&8191,g=vt>>>13,x=$[9]|0,q=x&8191,Z=x>>>13,re=O[0]|0,ie=re&8191,me=re>>>13,Ne=O[1]|0,Te=Ne&8191,Oe=Ne>>>13,Je=O[2]|0,_t=Je&8191,Et=Je>>>13,Si=O[3]|0,Ye=Si&8191,at=Si>>>13,Pi=O[4]|0,et=Pi&8191,xt=Pi>>>13,Wn=O[5]|0,Tt=Wn&8191,Ce=Wn>>>13,dr=O[6]|0,lt=dr&8191,ft=dr>>>13,Rt=O[7]|0,He=Rt&8191,Ct=Rt>>>13,zn=O[8]|0,wt=zn&8191,Xe=zn>>>13,ki=O[9]|0,It=ki&8191,$t=ki>>>13;I.negative=h.negative^C.negative,I.length=19,F=Math.imul(U,ie),y=Math.imul(U,me),y=y+Math.imul(V,ie)|0,S=Math.imul(V,me);var an=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(an>>>26)|0,an&=67108863,F=Math.imul(J,ie),y=Math.imul(J,me),y=y+Math.imul(Q,ie)|0,S=Math.imul(Q,me),F=F+Math.imul(U,Te)|0,y=y+Math.imul(U,Oe)|0,y=y+Math.imul(V,Te)|0,S=S+Math.imul(V,Oe)|0;var Hn=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(Hn>>>26)|0,Hn&=67108863,F=Math.imul(ne,ie),y=Math.imul(ne,me),y=y+Math.imul(ae,ie)|0,S=Math.imul(ae,me),F=F+Math.imul(J,Te)|0,y=y+Math.imul(J,Oe)|0,y=y+Math.imul(Q,Te)|0,S=S+Math.imul(Q,Oe)|0,F=F+Math.imul(U,_t)|0,y=y+Math.imul(U,Et)|0,y=y+Math.imul(V,_t)|0,S=S+Math.imul(V,Et)|0;var Cn=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(Cn>>>26)|0,Cn&=67108863,F=Math.imul(le,ie),y=Math.imul(le,me),y=y+Math.imul(we,ie)|0,S=Math.imul(we,me),F=F+Math.imul(ne,Te)|0,y=y+Math.imul(ne,Oe)|0,y=y+Math.imul(ae,Te)|0,S=S+Math.imul(ae,Oe)|0,F=F+Math.imul(J,_t)|0,y=y+Math.imul(J,Et)|0,y=y+Math.imul(Q,_t)|0,S=S+Math.imul(Q,Et)|0,F=F+Math.imul(U,Ye)|0,y=y+Math.imul(U,at)|0,y=y+Math.imul(V,Ye)|0,S=S+Math.imul(V,at)|0;var qn=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(qn>>>26)|0,qn&=67108863,F=Math.imul(Ae,ie),y=Math.imul(Ae,me),y=y+Math.imul(rt,ie)|0,S=Math.imul(rt,me),F=F+Math.imul(le,Te)|0,y=y+Math.imul(le,Oe)|0,y=y+Math.imul(we,Te)|0,S=S+Math.imul(we,Oe)|0,F=F+Math.imul(ne,_t)|0,y=y+Math.imul(ne,Et)|0,y=y+Math.imul(ae,_t)|0,S=S+Math.imul(ae,Et)|0,F=F+Math.imul(J,Ye)|0,y=y+Math.imul(J,at)|0,y=y+Math.imul(Q,Ye)|0,S=S+Math.imul(Q,at)|0,F=F+Math.imul(U,et)|0,y=y+Math.imul(U,xt)|0,y=y+Math.imul(V,et)|0,S=S+Math.imul(V,xt)|0;var Gn=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(Gn>>>26)|0,Gn&=67108863,F=Math.imul(nt,ie),y=Math.imul(nt,me),y=y+Math.imul(Ue,ie)|0,S=Math.imul(Ue,me),F=F+Math.imul(Ae,Te)|0,y=y+Math.imul(Ae,Oe)|0,y=y+Math.imul(rt,Te)|0,S=S+Math.imul(rt,Oe)|0,F=F+Math.imul(le,_t)|0,y=y+Math.imul(le,Et)|0,y=y+Math.imul(we,_t)|0,S=S+Math.imul(we,Et)|0,F=F+Math.imul(ne,Ye)|0,y=y+Math.imul(ne,at)|0,y=y+Math.imul(ae,Ye)|0,S=S+Math.imul(ae,at)|0,F=F+Math.imul(J,et)|0,y=y+Math.imul(J,xt)|0,y=y+Math.imul(Q,et)|0,S=S+Math.imul(Q,xt)|0,F=F+Math.imul(U,Tt)|0,y=y+Math.imul(U,Ce)|0,y=y+Math.imul(V,Tt)|0,S=S+Math.imul(V,Ce)|0;var _r=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(_r>>>26)|0,_r&=67108863,F=Math.imul(Ie,ie),y=Math.imul(Ie,me),y=y+Math.imul(Pe,ie)|0,S=Math.imul(Pe,me),F=F+Math.imul(nt,Te)|0,y=y+Math.imul(nt,Oe)|0,y=y+Math.imul(Ue,Te)|0,S=S+Math.imul(Ue,Oe)|0,F=F+Math.imul(Ae,_t)|0,y=y+Math.imul(Ae,Et)|0,y=y+Math.imul(rt,_t)|0,S=S+Math.imul(rt,Et)|0,F=F+Math.imul(le,Ye)|0,y=y+Math.imul(le,at)|0,y=y+Math.imul(we,Ye)|0,S=S+Math.imul(we,at)|0,F=F+Math.imul(ne,et)|0,y=y+Math.imul(ne,xt)|0,y=y+Math.imul(ae,et)|0,S=S+Math.imul(ae,xt)|0,F=F+Math.imul(J,Tt)|0,y=y+Math.imul(J,Ce)|0,y=y+Math.imul(Q,Tt)|0,S=S+Math.imul(Q,Ce)|0,F=F+Math.imul(U,lt)|0,y=y+Math.imul(U,ft)|0,y=y+Math.imul(V,lt)|0,S=S+Math.imul(V,ft)|0;var Vn=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(Vn>>>26)|0,Vn&=67108863,F=Math.imul(Re,ie),y=Math.imul(Re,me),y=y+Math.imul(ke,ie)|0,S=Math.imul(ke,me),F=F+Math.imul(Ie,Te)|0,y=y+Math.imul(Ie,Oe)|0,y=y+Math.imul(Pe,Te)|0,S=S+Math.imul(Pe,Oe)|0,F=F+Math.imul(nt,_t)|0,y=y+Math.imul(nt,Et)|0,y=y+Math.imul(Ue,_t)|0,S=S+Math.imul(Ue,Et)|0,F=F+Math.imul(Ae,Ye)|0,y=y+Math.imul(Ae,at)|0,y=y+Math.imul(rt,Ye)|0,S=S+Math.imul(rt,at)|0,F=F+Math.imul(le,et)|0,y=y+Math.imul(le,xt)|0,y=y+Math.imul(we,et)|0,S=S+Math.imul(we,xt)|0,F=F+Math.imul(ne,Tt)|0,y=y+Math.imul(ne,Ce)|0,y=y+Math.imul(ae,Tt)|0,S=S+Math.imul(ae,Ce)|0,F=F+Math.imul(J,lt)|0,y=y+Math.imul(J,ft)|0,y=y+Math.imul(Q,lt)|0,S=S+Math.imul(Q,ft)|0,F=F+Math.imul(U,He)|0,y=y+Math.imul(U,Ct)|0,y=y+Math.imul(V,He)|0,S=S+Math.imul(V,Ct)|0;var hc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(hc>>>26)|0,hc&=67108863,F=Math.imul(B,ie),y=Math.imul(B,me),y=y+Math.imul(g,ie)|0,S=Math.imul(g,me),F=F+Math.imul(Re,Te)|0,y=y+Math.imul(Re,Oe)|0,y=y+Math.imul(ke,Te)|0,S=S+Math.imul(ke,Oe)|0,F=F+Math.imul(Ie,_t)|0,y=y+Math.imul(Ie,Et)|0,y=y+Math.imul(Pe,_t)|0,S=S+Math.imul(Pe,Et)|0,F=F+Math.imul(nt,Ye)|0,y=y+Math.imul(nt,at)|0,y=y+Math.imul(Ue,Ye)|0,S=S+Math.imul(Ue,at)|0,F=F+Math.imul(Ae,et)|0,y=y+Math.imul(Ae,xt)|0,y=y+Math.imul(rt,et)|0,S=S+Math.imul(rt,xt)|0,F=F+Math.imul(le,Tt)|0,y=y+Math.imul(le,Ce)|0,y=y+Math.imul(we,Tt)|0,S=S+Math.imul(we,Ce)|0,F=F+Math.imul(ne,lt)|0,y=y+Math.imul(ne,ft)|0,y=y+Math.imul(ae,lt)|0,S=S+Math.imul(ae,ft)|0,F=F+Math.imul(J,He)|0,y=y+Math.imul(J,Ct)|0,y=y+Math.imul(Q,He)|0,S=S+Math.imul(Q,Ct)|0,F=F+Math.imul(U,wt)|0,y=y+Math.imul(U,Xe)|0,y=y+Math.imul(V,wt)|0,S=S+Math.imul(V,Xe)|0;var pc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(pc>>>26)|0,pc&=67108863,F=Math.imul(q,ie),y=Math.imul(q,me),y=y+Math.imul(Z,ie)|0,S=Math.imul(Z,me),F=F+Math.imul(B,Te)|0,y=y+Math.imul(B,Oe)|0,y=y+Math.imul(g,Te)|0,S=S+Math.imul(g,Oe)|0,F=F+Math.imul(Re,_t)|0,y=y+Math.imul(Re,Et)|0,y=y+Math.imul(ke,_t)|0,S=S+Math.imul(ke,Et)|0,F=F+Math.imul(Ie,Ye)|0,y=y+Math.imul(Ie,at)|0,y=y+Math.imul(Pe,Ye)|0,S=S+Math.imul(Pe,at)|0,F=F+Math.imul(nt,et)|0,y=y+Math.imul(nt,xt)|0,y=y+Math.imul(Ue,et)|0,S=S+Math.imul(Ue,xt)|0,F=F+Math.imul(Ae,Tt)|0,y=y+Math.imul(Ae,Ce)|0,y=y+Math.imul(rt,Tt)|0,S=S+Math.imul(rt,Ce)|0,F=F+Math.imul(le,lt)|0,y=y+Math.imul(le,ft)|0,y=y+Math.imul(we,lt)|0,S=S+Math.imul(we,ft)|0,F=F+Math.imul(ne,He)|0,y=y+Math.imul(ne,Ct)|0,y=y+Math.imul(ae,He)|0,S=S+Math.imul(ae,Ct)|0,F=F+Math.imul(J,wt)|0,y=y+Math.imul(J,Xe)|0,y=y+Math.imul(Q,wt)|0,S=S+Math.imul(Q,Xe)|0,F=F+Math.imul(U,It)|0,y=y+Math.imul(U,$t)|0,y=y+Math.imul(V,It)|0,S=S+Math.imul(V,$t)|0;var gc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(gc>>>26)|0,gc&=67108863,F=Math.imul(q,Te),y=Math.imul(q,Oe),y=y+Math.imul(Z,Te)|0,S=Math.imul(Z,Oe),F=F+Math.imul(B,_t)|0,y=y+Math.imul(B,Et)|0,y=y+Math.imul(g,_t)|0,S=S+Math.imul(g,Et)|0,F=F+Math.imul(Re,Ye)|0,y=y+Math.imul(Re,at)|0,y=y+Math.imul(ke,Ye)|0,S=S+Math.imul(ke,at)|0,F=F+Math.imul(Ie,et)|0,y=y+Math.imul(Ie,xt)|0,y=y+Math.imul(Pe,et)|0,S=S+Math.imul(Pe,xt)|0,F=F+Math.imul(nt,Tt)|0,y=y+Math.imul(nt,Ce)|0,y=y+Math.imul(Ue,Tt)|0,S=S+Math.imul(Ue,Ce)|0,F=F+Math.imul(Ae,lt)|0,y=y+Math.imul(Ae,ft)|0,y=y+Math.imul(rt,lt)|0,S=S+Math.imul(rt,ft)|0,F=F+Math.imul(le,He)|0,y=y+Math.imul(le,Ct)|0,y=y+Math.imul(we,He)|0,S=S+Math.imul(we,Ct)|0,F=F+Math.imul(ne,wt)|0,y=y+Math.imul(ne,Xe)|0,y=y+Math.imul(ae,wt)|0,S=S+Math.imul(ae,Xe)|0,F=F+Math.imul(J,It)|0,y=y+Math.imul(J,$t)|0,y=y+Math.imul(Q,It)|0,S=S+Math.imul(Q,$t)|0;var mc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(mc>>>26)|0,mc&=67108863,F=Math.imul(q,_t),y=Math.imul(q,Et),y=y+Math.imul(Z,_t)|0,S=Math.imul(Z,Et),F=F+Math.imul(B,Ye)|0,y=y+Math.imul(B,at)|0,y=y+Math.imul(g,Ye)|0,S=S+Math.imul(g,at)|0,F=F+Math.imul(Re,et)|0,y=y+Math.imul(Re,xt)|0,y=y+Math.imul(ke,et)|0,S=S+Math.imul(ke,xt)|0,F=F+Math.imul(Ie,Tt)|0,y=y+Math.imul(Ie,Ce)|0,y=y+Math.imul(Pe,Tt)|0,S=S+Math.imul(Pe,Ce)|0,F=F+Math.imul(nt,lt)|0,y=y+Math.imul(nt,ft)|0,y=y+Math.imul(Ue,lt)|0,S=S+Math.imul(Ue,ft)|0,F=F+Math.imul(Ae,He)|0,y=y+Math.imul(Ae,Ct)|0,y=y+Math.imul(rt,He)|0,S=S+Math.imul(rt,Ct)|0,F=F+Math.imul(le,wt)|0,y=y+Math.imul(le,Xe)|0,y=y+Math.imul(we,wt)|0,S=S+Math.imul(we,Xe)|0,F=F+Math.imul(ne,It)|0,y=y+Math.imul(ne,$t)|0,y=y+Math.imul(ae,It)|0,S=S+Math.imul(ae,$t)|0;var qo=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(qo>>>26)|0,qo&=67108863,F=Math.imul(q,Ye),y=Math.imul(q,at),y=y+Math.imul(Z,Ye)|0,S=Math.imul(Z,at),F=F+Math.imul(B,et)|0,y=y+Math.imul(B,xt)|0,y=y+Math.imul(g,et)|0,S=S+Math.imul(g,xt)|0,F=F+Math.imul(Re,Tt)|0,y=y+Math.imul(Re,Ce)|0,y=y+Math.imul(ke,Tt)|0,S=S+Math.imul(ke,Ce)|0,F=F+Math.imul(Ie,lt)|0,y=y+Math.imul(Ie,ft)|0,y=y+Math.imul(Pe,lt)|0,S=S+Math.imul(Pe,ft)|0,F=F+Math.imul(nt,He)|0,y=y+Math.imul(nt,Ct)|0,y=y+Math.imul(Ue,He)|0,S=S+Math.imul(Ue,Ct)|0,F=F+Math.imul(Ae,wt)|0,y=y+Math.imul(Ae,Xe)|0,y=y+Math.imul(rt,wt)|0,S=S+Math.imul(rt,Xe)|0,F=F+Math.imul(le,It)|0,y=y+Math.imul(le,$t)|0,y=y+Math.imul(we,It)|0,S=S+Math.imul(we,$t)|0;var wc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(wc>>>26)|0,wc&=67108863,F=Math.imul(q,et),y=Math.imul(q,xt),y=y+Math.imul(Z,et)|0,S=Math.imul(Z,xt),F=F+Math.imul(B,Tt)|0,y=y+Math.imul(B,Ce)|0,y=y+Math.imul(g,Tt)|0,S=S+Math.imul(g,Ce)|0,F=F+Math.imul(Re,lt)|0,y=y+Math.imul(Re,ft)|0,y=y+Math.imul(ke,lt)|0,S=S+Math.imul(ke,ft)|0,F=F+Math.imul(Ie,He)|0,y=y+Math.imul(Ie,Ct)|0,y=y+Math.imul(Pe,He)|0,S=S+Math.imul(Pe,Ct)|0,F=F+Math.imul(nt,wt)|0,y=y+Math.imul(nt,Xe)|0,y=y+Math.imul(Ue,wt)|0,S=S+Math.imul(Ue,Xe)|0,F=F+Math.imul(Ae,It)|0,y=y+Math.imul(Ae,$t)|0,y=y+Math.imul(rt,It)|0,S=S+Math.imul(rt,$t)|0;var bc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(bc>>>26)|0,bc&=67108863,F=Math.imul(q,Tt),y=Math.imul(q,Ce),y=y+Math.imul(Z,Tt)|0,S=Math.imul(Z,Ce),F=F+Math.imul(B,lt)|0,y=y+Math.imul(B,ft)|0,y=y+Math.imul(g,lt)|0,S=S+Math.imul(g,ft)|0,F=F+Math.imul(Re,He)|0,y=y+Math.imul(Re,Ct)|0,y=y+Math.imul(ke,He)|0,S=S+Math.imul(ke,Ct)|0,F=F+Math.imul(Ie,wt)|0,y=y+Math.imul(Ie,Xe)|0,y=y+Math.imul(Pe,wt)|0,S=S+Math.imul(Pe,Xe)|0,F=F+Math.imul(nt,It)|0,y=y+Math.imul(nt,$t)|0,y=y+Math.imul(Ue,It)|0,S=S+Math.imul(Ue,$t)|0;var An=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(An>>>26)|0,An&=67108863,F=Math.imul(q,lt),y=Math.imul(q,ft),y=y+Math.imul(Z,lt)|0,S=Math.imul(Z,ft),F=F+Math.imul(B,He)|0,y=y+Math.imul(B,Ct)|0,y=y+Math.imul(g,He)|0,S=S+Math.imul(g,Ct)|0,F=F+Math.imul(Re,wt)|0,y=y+Math.imul(Re,Xe)|0,y=y+Math.imul(ke,wt)|0,S=S+Math.imul(ke,Xe)|0,F=F+Math.imul(Ie,It)|0,y=y+Math.imul(Ie,$t)|0,y=y+Math.imul(Pe,It)|0,S=S+Math.imul(Pe,$t)|0;var yc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(yc>>>26)|0,yc&=67108863,F=Math.imul(q,He),y=Math.imul(q,Ct),y=y+Math.imul(Z,He)|0,S=Math.imul(Z,Ct),F=F+Math.imul(B,wt)|0,y=y+Math.imul(B,Xe)|0,y=y+Math.imul(g,wt)|0,S=S+Math.imul(g,Xe)|0,F=F+Math.imul(Re,It)|0,y=y+Math.imul(Re,$t)|0,y=y+Math.imul(ke,It)|0,S=S+Math.imul(ke,$t)|0;var vc=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(vc>>>26)|0,vc&=67108863,F=Math.imul(q,wt),y=Math.imul(q,Xe),y=y+Math.imul(Z,wt)|0,S=Math.imul(Z,Xe),F=F+Math.imul(B,It)|0,y=y+Math.imul(B,$t)|0,y=y+Math.imul(g,It)|0,S=S+Math.imul(g,$t)|0;var Ec=(z+F|0)+((y&8191)<<13)|0;z=(S+(y>>>13)|0)+(Ec>>>26)|0,Ec&=67108863,F=Math.imul(q,It),y=Math.imul(q,$t),y=y+Math.imul(Z,It)|0,S=Math.imul(Z,$t);var Go=(z+F|0)+((y&8191)<<13)|0;return z=(S+(y>>>13)|0)+(Go>>>26)|0,Go&=67108863,j[0]=an,j[1]=Hn,j[2]=Cn,j[3]=qn,j[4]=Gn,j[5]=_r,j[6]=Vn,j[7]=hc,j[8]=pc,j[9]=gc,j[10]=mc,j[11]=qo,j[12]=wc,j[13]=bc,j[14]=An,j[15]=yc,j[16]=vc,j[17]=Ec,j[18]=Go,z!==0&&(j[19]=z,I.length++),I};Math.imul||(A=v);function _(L,h,C){C.negative=h.negative^L.negative,C.length=L.length+h.length;for(var I=0,$=0,O=0;O<C.length-1;O++){var j=$;$=0;for(var z=I&67108863,F=Math.min(O,h.length-1),y=Math.max(0,O-L.length+1);y<=F;y++){var S=O-y,G=L.words[S]|0,U=h.words[y]|0,V=G*U,E=V&67108863;j=j+(V/67108864|0)|0,E=E+z|0,z=E&67108863,j=j+(E>>>26)|0,$+=j>>>26,j&=67108863}C.words[O]=z,I=j,j=$}return I!==0?C.words[O]=I:C.length--,C.strip()}function N(L,h,C){var I=new P;return I.mulp(L,h,C)}o.prototype.mulTo=function(h,C){var I,$=this.length+h.length;return this.length===10&&h.length===10?I=A(this,h,C):$<63?I=v(this,h,C):$<1024?I=_(this,h,C):I=N(this,h,C),I};function P(L,h){this.x=L,this.y=h}P.prototype.makeRBT=function(h){for(var C=new Array(h),I=o.prototype._countBits(h)-1,$=0;$<h;$++)C[$]=this.revBin($,I,h);return C},P.prototype.revBin=function(h,C,I){if(h===0||h===I-1)return h;for(var $=0,O=0;O<C;O++)$|=(h&1)<<C-O-1,h>>=1;return $},P.prototype.permute=function(h,C,I,$,O,j){for(var z=0;z<j;z++)$[z]=C[h[z]],O[z]=I[h[z]]},P.prototype.transform=function(h,C,I,$,O,j){this.permute(j,h,C,I,$,O);for(var z=1;z<O;z<<=1)for(var F=z<<1,y=Math.cos(2*Math.PI/F),S=Math.sin(2*Math.PI/F),G=0;G<O;G+=F)for(var U=y,V=S,E=0;E<z;E++){var J=I[G+E],Q=$[G+E],ee=I[G+E+z],ne=$[G+E+z],ae=U*ee-V*ne;ne=U*ne+V*ee,ee=ae,I[G+E]=J+ee,$[G+E]=Q+ne,I[G+E+z]=J-ee,$[G+E+z]=Q-ne,E!==F&&(ae=y*U-S*V,V=y*V+S*U,U=ae)}},P.prototype.guessLen13b=function(h,C){var I=Math.max(C,h)|1,$=I&1,O=0;for(I=I/2|0;I;I=I>>>1)O++;return 1<<O+1+$},P.prototype.conjugate=function(h,C,I){if(!(I<=1))for(var $=0;$<I/2;$++){var O=h[$];h[$]=h[I-$-1],h[I-$-1]=O,O=C[$],C[$]=-C[I-$-1],C[I-$-1]=-O}},P.prototype.normalize13b=function(h,C){for(var I=0,$=0;$<C/2;$++){var O=Math.round(h[2*$+1]/C)*8192+Math.round(h[2*$]/C)+I;h[$]=O&67108863,O<67108864?I=0:I=O/67108864|0}return h},P.prototype.convert13b=function(h,C,I,$){for(var O=0,j=0;j<C;j++)O=O+(h[j]|0),I[2*j]=O&8191,O=O>>>13,I[2*j+1]=O&8191,O=O>>>13;for(j=2*C;j<$;++j)I[j]=0;n(O===0),n((O&-8192)===0)},P.prototype.stub=function(h){for(var C=new Array(h),I=0;I<h;I++)C[I]=0;return C},P.prototype.mulp=function(h,C,I){var $=2*this.guessLen13b(h.length,C.length),O=this.makeRBT($),j=this.stub($),z=new Array($),F=new Array($),y=new Array($),S=new Array($),G=new Array($),U=new Array($),V=I.words;V.length=$,this.convert13b(h.words,h.length,z,$),this.convert13b(C.words,C.length,S,$),this.transform(z,j,F,y,$,O),this.transform(S,j,G,U,$,O);for(var E=0;E<$;E++){var J=F[E]*G[E]-y[E]*U[E];y[E]=F[E]*U[E]+y[E]*G[E],F[E]=J}return this.conjugate(F,y,$),this.transform(F,y,V,j,$,O),this.conjugate(V,j,$),this.normalize13b(V,$),I.negative=h.negative^C.negative,I.length=h.length+C.length,I.strip()},o.prototype.mul=function(h){var C=new o(null);return C.words=new Array(this.length+h.length),this.mulTo(h,C)},o.prototype.mulf=function(h){var C=new o(null);return C.words=new Array(this.length+h.length),N(this,h,C)},o.prototype.imul=function(h){return this.clone().mulTo(h,this)},o.prototype.imuln=function(h){n(typeof h=="number"),n(h<67108864);for(var C=0,I=0;I<this.length;I++){var $=(this.words[I]|0)*h,O=($&67108863)+(C&67108863);C>>=26,C+=$/67108864|0,C+=O>>>26,this.words[I]=O&67108863}return C!==0&&(this.words[I]=C,this.length++),this},o.prototype.muln=function(h){return this.clone().imuln(h)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(h){var C=b(h);if(C.length===0)return new o(1);for(var I=this,$=0;$<C.length&&C[$]===0;$++,I=I.sqr());if(++$<C.length)for(var O=I.sqr();$<C.length;$++,O=O.sqr())C[$]!==0&&(I=I.mul(O));return I},o.prototype.iushln=function(h){n(typeof h=="number"&&h>=0);var C=h%26,I=(h-C)/26,$=67108863>>>26-C<<26-C,O;if(C!==0){var j=0;for(O=0;O<this.length;O++){var z=this.words[O]&$,F=(this.words[O]|0)-z<<C;this.words[O]=F|j,j=z>>>26-C}j&&(this.words[O]=j,this.length++)}if(I!==0){for(O=this.length-1;O>=0;O--)this.words[O+I]=this.words[O];for(O=0;O<I;O++)this.words[O]=0;this.length+=I}return this.strip()},o.prototype.ishln=function(h){return n(this.negative===0),this.iushln(h)},o.prototype.iushrn=function(h,C,I){n(typeof h=="number"&&h>=0);var $;C?$=(C-C%26)/26:$=0;var O=h%26,j=Math.min((h-O)/26,this.length),z=67108863^67108863>>>O<<O,F=I;if($-=j,$=Math.max(0,$),F){for(var y=0;y<j;y++)F.words[y]=this.words[y];F.length=j}if(j!==0)if(this.length>j)for(this.length-=j,y=0;y<this.length;y++)this.words[y]=this.words[y+j];else this.words[0]=0,this.length=1;var S=0;for(y=this.length-1;y>=0&&(S!==0||y>=$);y--){var G=this.words[y]|0;this.words[y]=S<<26-O|G>>>O,S=G&z}return F&&S!==0&&(F.words[F.length++]=S),this.length===0&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(h,C,I){return n(this.negative===0),this.iushrn(h,C,I)},o.prototype.shln=function(h){return this.clone().ishln(h)},o.prototype.ushln=function(h){return this.clone().iushln(h)},o.prototype.shrn=function(h){return this.clone().ishrn(h)},o.prototype.ushrn=function(h){return this.clone().iushrn(h)},o.prototype.testn=function(h){n(typeof h=="number"&&h>=0);var C=h%26,I=(h-C)/26,$=1<<C;if(this.length<=I)return!1;var O=this.words[I];return!!(O&$)},o.prototype.imaskn=function(h){n(typeof h=="number"&&h>=0);var C=h%26,I=(h-C)/26;if(n(this.negative===0,"imaskn works only with positive numbers"),this.length<=I)return this;if(C!==0&&I++,this.length=Math.min(I,this.length),C!==0){var $=67108863^67108863>>>C<<C;this.words[this.length-1]&=$}return this.strip()},o.prototype.maskn=function(h){return this.clone().imaskn(h)},o.prototype.iaddn=function(h){return n(typeof h=="number"),n(h<67108864),h<0?this.isubn(-h):this.negative!==0?this.length===1&&(this.words[0]|0)<h?(this.words[0]=h-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(h),this.negative=1,this):this._iaddn(h)},o.prototype._iaddn=function(h){this.words[0]+=h;for(var C=0;C<this.length&&this.words[C]>=67108864;C++)this.words[C]-=67108864,C===this.length-1?this.words[C+1]=1:this.words[C+1]++;return this.length=Math.max(this.length,C+1),this},o.prototype.isubn=function(h){if(n(typeof h=="number"),n(h<67108864),h<0)return this.iaddn(-h);if(this.negative!==0)return this.negative=0,this.iaddn(h),this.negative=1,this;if(this.words[0]-=h,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var C=0;C<this.length&&this.words[C]<0;C++)this.words[C]+=67108864,this.words[C+1]-=1;return this.strip()},o.prototype.addn=function(h){return this.clone().iaddn(h)},o.prototype.subn=function(h){return this.clone().isubn(h)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(h,C,I){var $=h.length+I,O;this._expand($);var j,z=0;for(O=0;O<h.length;O++){j=(this.words[O+I]|0)+z;var F=(h.words[O]|0)*C;j-=F&67108863,z=(j>>26)-(F/67108864|0),this.words[O+I]=j&67108863}for(;O<this.length-I;O++)j=(this.words[O+I]|0)+z,z=j>>26,this.words[O+I]=j&67108863;if(z===0)return this.strip();for(n(z===-1),z=0,O=0;O<this.length;O++)j=-(this.words[O]|0)+z,z=j>>26,this.words[O]=j&67108863;return this.negative=1,this.strip()},o.prototype._wordDiv=function(h,C){var I=this.length-h.length,$=this.clone(),O=h,j=O.words[O.length-1]|0,z=this._countBits(j);I=26-z,I!==0&&(O=O.ushln(I),$.iushln(I),j=O.words[O.length-1]|0);var F=$.length-O.length,y;if(C!=="mod"){y=new o(null),y.length=F+1,y.words=new Array(y.length);for(var S=0;S<y.length;S++)y.words[S]=0}var G=$.clone()._ishlnsubmul(O,1,F);G.negative===0&&($=G,y&&(y.words[F]=1));for(var U=F-1;U>=0;U--){var V=($.words[O.length+U]|0)*67108864+($.words[O.length+U-1]|0);for(V=Math.min(V/j|0,67108863),$._ishlnsubmul(O,V,U);$.negative!==0;)V--,$.negative=0,$._ishlnsubmul(O,1,U),$.isZero()||($.negative^=1);y&&(y.words[U]=V)}return y&&y.strip(),$.strip(),C!=="div"&&I!==0&&$.iushrn(I),{div:y||null,mod:$}},o.prototype.divmod=function(h,C,I){if(n(!h.isZero()),this.isZero())return{div:new o(0),mod:new o(0)};var $,O,j;return this.negative!==0&&h.negative===0?(j=this.neg().divmod(h,C),C!=="mod"&&($=j.div.neg()),C!=="div"&&(O=j.mod.neg(),I&&O.negative!==0&&O.iadd(h)),{div:$,mod:O}):this.negative===0&&h.negative!==0?(j=this.divmod(h.neg(),C),C!=="mod"&&($=j.div.neg()),{div:$,mod:j.mod}):this.negative&h.negative?(j=this.neg().divmod(h.neg(),C),C!=="div"&&(O=j.mod.neg(),I&&O.negative!==0&&O.isub(h)),{div:j.div,mod:O}):h.length>this.length||this.cmp(h)<0?{div:new o(0),mod:this}:h.length===1?C==="div"?{div:this.divn(h.words[0]),mod:null}:C==="mod"?{div:null,mod:new o(this.modn(h.words[0]))}:{div:this.divn(h.words[0]),mod:new o(this.modn(h.words[0]))}:this._wordDiv(h,C)},o.prototype.div=function(h){return this.divmod(h,"div",!1).div},o.prototype.mod=function(h){return this.divmod(h,"mod",!1).mod},o.prototype.umod=function(h){return this.divmod(h,"mod",!0).mod},o.prototype.divRound=function(h){var C=this.divmod(h);if(C.mod.isZero())return C.div;var I=C.div.negative!==0?C.mod.isub(h):C.mod,$=h.ushrn(1),O=h.andln(1),j=I.cmp($);return j<0||O===1&&j===0?C.div:C.div.negative!==0?C.div.isubn(1):C.div.iaddn(1)},o.prototype.modn=function(h){n(h<=67108863);for(var C=(1<<26)%h,I=0,$=this.length-1;$>=0;$--)I=(C*I+(this.words[$]|0))%h;return I},o.prototype.idivn=function(h){n(h<=67108863);for(var C=0,I=this.length-1;I>=0;I--){var $=(this.words[I]|0)+C*67108864;this.words[I]=$/h|0,C=$%h}return this.strip()},o.prototype.divn=function(h){return this.clone().idivn(h)},o.prototype.egcd=function(h){n(h.negative===0),n(!h.isZero());var C=this,I=h.clone();C.negative!==0?C=C.umod(h):C=C.clone();for(var $=new o(1),O=new o(0),j=new o(0),z=new o(1),F=0;C.isEven()&&I.isEven();)C.iushrn(1),I.iushrn(1),++F;for(var y=I.clone(),S=C.clone();!C.isZero();){for(var G=0,U=1;!(C.words[0]&U)&&G<26;++G,U<<=1);if(G>0)for(C.iushrn(G);G-- >0;)($.isOdd()||O.isOdd())&&($.iadd(y),O.isub(S)),$.iushrn(1),O.iushrn(1);for(var V=0,E=1;!(I.words[0]&E)&&V<26;++V,E<<=1);if(V>0)for(I.iushrn(V);V-- >0;)(j.isOdd()||z.isOdd())&&(j.iadd(y),z.isub(S)),j.iushrn(1),z.iushrn(1);C.cmp(I)>=0?(C.isub(I),$.isub(j),O.isub(z)):(I.isub(C),j.isub($),z.isub(O))}return{a:j,b:z,gcd:I.iushln(F)}},o.prototype._invmp=function(h){n(h.negative===0),n(!h.isZero());var C=this,I=h.clone();C.negative!==0?C=C.umod(h):C=C.clone();for(var $=new o(1),O=new o(0),j=I.clone();C.cmpn(1)>0&&I.cmpn(1)>0;){for(var z=0,F=1;!(C.words[0]&F)&&z<26;++z,F<<=1);if(z>0)for(C.iushrn(z);z-- >0;)$.isOdd()&&$.iadd(j),$.iushrn(1);for(var y=0,S=1;!(I.words[0]&S)&&y<26;++y,S<<=1);if(y>0)for(I.iushrn(y);y-- >0;)O.isOdd()&&O.iadd(j),O.iushrn(1);C.cmp(I)>=0?(C.isub(I),$.isub(O)):(I.isub(C),O.isub($))}var G;return C.cmpn(1)===0?G=$:G=O,G.cmpn(0)<0&&G.iadd(h),G},o.prototype.gcd=function(h){if(this.isZero())return h.abs();if(h.isZero())return this.abs();var C=this.clone(),I=h.clone();C.negative=0,I.negative=0;for(var $=0;C.isEven()&&I.isEven();$++)C.iushrn(1),I.iushrn(1);do{for(;C.isEven();)C.iushrn(1);for(;I.isEven();)I.iushrn(1);var O=C.cmp(I);if(O<0){var j=C;C=I,I=j}else if(O===0||I.cmpn(1)===0)break;C.isub(I)}while(!0);return I.iushln($)},o.prototype.invm=function(h){return this.egcd(h).a.umod(h)},o.prototype.isEven=function(){return(this.words[0]&1)===0},o.prototype.isOdd=function(){return(this.words[0]&1)===1},o.prototype.andln=function(h){return this.words[0]&h},o.prototype.bincn=function(h){n(typeof h=="number");var C=h%26,I=(h-C)/26,$=1<<C;if(this.length<=I)return this._expand(I+1),this.words[I]|=$,this;for(var O=$,j=I;O!==0&&j<this.length;j++){var z=this.words[j]|0;z+=O,O=z>>>26,z&=67108863,this.words[j]=z}return O!==0&&(this.words[j]=O,this.length++),this},o.prototype.isZero=function(){return this.length===1&&this.words[0]===0},o.prototype.cmpn=function(h){var C=h<0;if(this.negative!==0&&!C)return-1;if(this.negative===0&&C)return 1;this.strip();var I;if(this.length>1)I=1;else{C&&(h=-h),n(h<=67108863,"Number is too big");var $=this.words[0]|0;I=$===h?0:$<h?-1:1}return this.negative!==0?-I|0:I},o.prototype.cmp=function(h){if(this.negative!==0&&h.negative===0)return-1;if(this.negative===0&&h.negative!==0)return 1;var C=this.ucmp(h);return this.negative!==0?-C|0:C},o.prototype.ucmp=function(h){if(this.length>h.length)return 1;if(this.length<h.length)return-1;for(var C=0,I=this.length-1;I>=0;I--){var $=this.words[I]|0,O=h.words[I]|0;if($!==O){$<O?C=-1:$>O&&(C=1);break}}return C},o.prototype.gtn=function(h){return this.cmpn(h)===1},o.prototype.gt=function(h){return this.cmp(h)===1},o.prototype.gten=function(h){return this.cmpn(h)>=0},o.prototype.gte=function(h){return this.cmp(h)>=0},o.prototype.ltn=function(h){return this.cmpn(h)===-1},o.prototype.lt=function(h){return this.cmp(h)===-1},o.prototype.lten=function(h){return this.cmpn(h)<=0},o.prototype.lte=function(h){return this.cmp(h)<=0},o.prototype.eqn=function(h){return this.cmpn(h)===0},o.prototype.eq=function(h){return this.cmp(h)===0},o.red=function(h){return new X(h)},o.prototype.toRed=function(h){return n(!this.red,"Already a number in reduction context"),n(this.negative===0,"red works only with positives"),h.convertTo(this)._forceRed(h)},o.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(h){return this.red=h,this},o.prototype.forceRed=function(h){return n(!this.red,"Already a number in reduction context"),this._forceRed(h)},o.prototype.redAdd=function(h){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,h)},o.prototype.redIAdd=function(h){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,h)},o.prototype.redSub=function(h){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,h)},o.prototype.redISub=function(h){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,h)},o.prototype.redShl=function(h){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,h)},o.prototype.redMul=function(h){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,h),this.red.mul(this,h)},o.prototype.redIMul=function(h){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,h),this.red.imul(this,h)},o.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(h){return n(this.red&&!h.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,h)};var M={k256:null,p224:null,p192:null,p25519:null};function D(L,h){this.name=L,this.p=new o(h,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}D.prototype._tmp=function(){var h=new o(null);return h.words=new Array(Math.ceil(this.n/13)),h},D.prototype.ireduce=function(h){var C=h,I;do this.split(C,this.tmp),C=this.imulK(C),C=C.iadd(this.tmp),I=C.bitLength();while(I>this.n);var $=I<this.n?-1:C.ucmp(this.p);return $===0?(C.words[0]=0,C.length=1):$>0?C.isub(this.p):C.strip!==void 0?C.strip():C._strip(),C},D.prototype.split=function(h,C){h.iushrn(this.n,0,C)},D.prototype.imulK=function(h){return h.imul(this.k)};function R(){D.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}i(R,D),R.prototype.split=function(h,C){for(var I=4194303,$=Math.min(h.length,9),O=0;O<$;O++)C.words[O]=h.words[O];if(C.length=$,h.length<=9){h.words[0]=0,h.length=1;return}var j=h.words[9];for(C.words[C.length++]=j&I,O=10;O<h.length;O++){var z=h.words[O]|0;h.words[O-10]=(z&I)<<4|j>>>22,j=z}j>>>=22,h.words[O-10]=j,j===0&&h.length>10?h.length-=10:h.length-=9},R.prototype.imulK=function(h){h.words[h.length]=0,h.words[h.length+1]=0,h.length+=2;for(var C=0,I=0;I<h.length;I++){var $=h.words[I]|0;C+=$*977,h.words[I]=C&67108863,C=$*64+(C/67108864|0)}return h.words[h.length-1]===0&&(h.length--,h.words[h.length-1]===0&&h.length--),h};function W(){D.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}i(W,D);function w(){D.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}i(w,D);function H(){D.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}i(H,D),H.prototype.imulK=function(h){for(var C=0,I=0;I<h.length;I++){var $=(h.words[I]|0)*19+C,O=$&67108863;$>>>=26,h.words[I]=O,C=$}return C!==0&&(h.words[h.length++]=C),h},o._prime=function(h){if(M[h])return M[h];var C;if(h==="k256")C=new R;else if(h==="p224")C=new W;else if(h==="p192")C=new w;else if(h==="p25519")C=new H;else throw new Error("Unknown prime "+h);return M[h]=C,C};function X(L){if(typeof L=="string"){var h=o._prime(L);this.m=h.p,this.prime=h}else n(L.gtn(1),"modulus must be greater than 1"),this.m=L,this.prime=null}X.prototype._verify1=function(h){n(h.negative===0,"red works only with positives"),n(h.red,"red works only with red numbers")},X.prototype._verify2=function(h,C){n((h.negative|C.negative)===0,"red works only with positives"),n(h.red&&h.red===C.red,"red works only with red numbers")},X.prototype.imod=function(h){return this.prime?this.prime.ireduce(h)._forceRed(this):h.umod(this.m)._forceRed(this)},X.prototype.neg=function(h){return h.isZero()?h.clone():this.m.sub(h)._forceRed(this)},X.prototype.add=function(h,C){this._verify2(h,C);var I=h.add(C);return I.cmp(this.m)>=0&&I.isub(this.m),I._forceRed(this)},X.prototype.iadd=function(h,C){this._verify2(h,C);var I=h.iadd(C);return I.cmp(this.m)>=0&&I.isub(this.m),I},X.prototype.sub=function(h,C){this._verify2(h,C);var I=h.sub(C);return I.cmpn(0)<0&&I.iadd(this.m),I._forceRed(this)},X.prototype.isub=function(h,C){this._verify2(h,C);var I=h.isub(C);return I.cmpn(0)<0&&I.iadd(this.m),I},X.prototype.shl=function(h,C){return this._verify1(h),this.imod(h.ushln(C))},X.prototype.imul=function(h,C){return this._verify2(h,C),this.imod(h.imul(C))},X.prototype.mul=function(h,C){return this._verify2(h,C),this.imod(h.mul(C))},X.prototype.isqr=function(h){return this.imul(h,h.clone())},X.prototype.sqr=function(h){return this.mul(h,h)},X.prototype.sqrt=function(h){if(h.isZero())return h.clone();var C=this.m.andln(3);if(n(C%2===1),C===3){var I=this.m.add(new o(1)).iushrn(2);return this.pow(h,I)}for(var $=this.m.subn(1),O=0;!$.isZero()&&$.andln(1)===0;)O++,$.iushrn(1);n(!$.isZero());var j=new o(1).toRed(this),z=j.redNeg(),F=this.m.subn(1).iushrn(1),y=this.m.bitLength();for(y=new o(2*y*y).toRed(this);this.pow(y,F).cmp(z)!==0;)y.redIAdd(z);for(var S=this.pow(y,$),G=this.pow(h,$.addn(1).iushrn(1)),U=this.pow(h,$),V=O;U.cmp(j)!==0;){for(var E=U,J=0;E.cmp(j)!==0;J++)E=E.redSqr();n(J<V);var Q=this.pow(S,new o(1).iushln(V-J-1));G=G.redMul(Q),S=Q.redSqr(),U=U.redMul(S),V=J}return G},X.prototype.invm=function(h){var C=h._invmp(this.m);return C.negative!==0?(C.negative=0,this.imod(C).redNeg()):this.imod(C)},X.prototype.pow=function(h,C){if(C.isZero())return new o(1).toRed(this);if(C.cmpn(1)===0)return h.clone();var I=4,$=new Array(1<<I);$[0]=new o(1).toRed(this),$[1]=h;for(var O=2;O<$.length;O++)$[O]=this.mul($[O-1],h);var j=$[0],z=0,F=0,y=C.bitLength()%26;for(y===0&&(y=26),O=C.length-1;O>=0;O--){for(var S=C.words[O],G=y-1;G>=0;G--){var U=S>>G&1;if(j!==$[0]&&(j=this.sqr(j)),U===0&&z===0){F=0;continue}z<<=1,z|=U,F++,!(F!==I&&(O!==0||G!==0))&&(j=this.mul(j,$[z]),F=0,z=0)}y=26}return j},X.prototype.convertTo=function(h){var C=h.umod(this.m);return C===h?C.clone():C},X.prototype.convertFrom=function(h){var C=h.clone();return C.red=null,C},o.mont=function(h){return new te(h)};function te(L){X.call(this,L),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}i(te,X),te.prototype.convertTo=function(h){return this.imod(h.ushln(this.shift))},te.prototype.convertFrom=function(h){var C=this.imod(h.mul(this.rinv));return C.red=null,C},te.prototype.imul=function(h,C){if(h.isZero()||C.isZero())return h.words[0]=0,h.length=1,h;var I=h.imul(C),$=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),O=I.isub($).iushrn(this.shift),j=O;return O.cmp(this.m)>=0?j=O.isub(this.m):O.cmpn(0)<0&&(j=O.iadd(this.m)),j._forceRed(this)},te.prototype.mul=function(h,C){if(h.isZero()||C.isZero())return new o(0)._forceRed(this);var I=h.mul(C),$=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),O=I.isub($).iushrn(this.shift),j=O;return O.cmp(this.m)>=0?j=O.isub(this.m):O.cmpn(0)<0&&(j=O.iadd(this.m)),j._forceRed(this)},te.prototype.invm=function(h){var C=this.imod(h._invmp(this.m).mul(this.r2));return C._forceRed(this)}})(t,rb)});const ON="logger/5.6.0";let Vm=!1,Km=!1;const x0={debug:1,default:2,info:2,warning:3,error:4,off:5};let Zm=x0.default,_h=null;function DN(){try{const t=[];if(["NFD","NFC","NFKD","NFKC"].forEach(e=>{try{if("test".normalize(e)!=="test")throw new Error("bad normalize")}catch{t.push(e)}}),t.length)throw new Error("missing "+t.join(", "));if("é".normalize("NFD")!=="é")throw new Error("broken implementation")}catch(t){return t.message}return null}const Jm=DN();var H1;(function(t){t.DEBUG="DEBUG",t.INFO="INFO",t.WARNING="WARNING",t.ERROR="ERROR",t.OFF="OFF"})(H1||(H1={}));var dn;(function(t){t.UNKNOWN_ERROR="UNKNOWN_ERROR",t.NOT_IMPLEMENTED="NOT_IMPLEMENTED",t.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",t.NETWORK_ERROR="NETWORK_ERROR",t.SERVER_ERROR="SERVER_ERROR",t.TIMEOUT="TIMEOUT",t.BUFFER_OVERRUN="BUFFER_OVERRUN",t.NUMERIC_FAULT="NUMERIC_FAULT",t.MISSING_NEW="MISSING_NEW",t.INVALID_ARGUMENT="INVALID_ARGUMENT",t.MISSING_ARGUMENT="MISSING_ARGUMENT",t.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",t.CALL_EXCEPTION="CALL_EXCEPTION",t.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",t.NONCE_EXPIRED="NONCE_EXPIRED",t.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",t.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",t.TRANSACTION_REPLACED="TRANSACTION_REPLACED"})(dn||(dn={}));const Ym="0123456789abcdef";class Y{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,r){const n=e.toLowerCase();x0[n]==null&&this.throwArgumentError("invalid log level name","logLevel",e),!(Zm>x0[n])&&console.log.apply(console,r)}debug(...e){this._log(Y.levels.DEBUG,e)}info(...e){this._log(Y.levels.INFO,e)}warn(...e){this._log(Y.levels.WARNING,e)}makeError(e,r,n){if(Km)return this.makeError("censored error",r,{});r||(r=Y.errors.UNKNOWN_ERROR),n||(n={});const i=[];Object.keys(n).forEach(c=>{const l=n[c];try{if(l instanceof Uint8Array){let u="";for(let f=0;f<l.length;f++)u+=Ym[l[f]>>4],u+=Ym[l[f]&15];i.push(c+"=Uint8Array(0x"+u+")")}else i.push(c+"="+JSON.stringify(l))}catch{i.push(c+"="+JSON.stringify(n[c].toString()))}}),i.push(`code=${r}`),i.push(`version=${this.version}`);const o=e;let s="";switch(r){case dn.NUMERIC_FAULT:{s="NUMERIC_FAULT";const c=e;switch(c){case"overflow":case"underflow":case"division-by-zero":s+="-"+c;break;case"negative-power":case"negative-width":s+="-unsupported";break;case"unbound-bitwise-result":s+="-unbound-result";break}break}case dn.CALL_EXCEPTION:case dn.INSUFFICIENT_FUNDS:case dn.MISSING_NEW:case dn.NONCE_EXPIRED:case dn.REPLACEMENT_UNDERPRICED:case dn.TRANSACTION_REPLACED:case dn.UNPREDICTABLE_GAS_LIMIT:s=r;break}s&&(e+=" [ See: https://links.ethers.org/v5-errors-"+s+" ]"),i.length&&(e+=" ("+i.join(", ")+")");const a=new Error(e);return a.reason=o,a.code=r,Object.keys(n).forEach(function(c){a[c]=n[c]}),a}throwError(e,r,n){throw this.makeError(e,r,n)}throwArgumentError(e,r,n){return this.throwError(e,Y.errors.INVALID_ARGUMENT,{argument:r,value:n})}assert(e,r,n,i){e||this.throwError(r,n,i)}assertArgument(e,r,n,i){e||this.throwArgumentError(r,n,i)}checkNormalize(e){Jm&&this.throwError("platform missing String.prototype.normalize",Y.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:Jm})}checkSafeUint53(e,r){typeof e=="number"&&(r==null&&(r="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(r,Y.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(r,Y.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,r,n){n?n=": "+n:n="",e<r&&this.throwError("missing argument"+n,Y.errors.MISSING_ARGUMENT,{count:e,expectedCount:r}),e>r&&this.throwError("too many arguments"+n,Y.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:r})}checkNew(e,r){(e===Object||e==null)&&this.throwError("missing new",Y.errors.MISSING_NEW,{name:r.name})}checkAbstract(e,r){e===r?this.throwError("cannot instantiate abstract class "+JSON.stringify(r.name)+" directly; use a sub-class",Y.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||e==null)&&this.throwError("missing new",Y.errors.MISSING_NEW,{name:r.name})}static globalLogger(){return _h||(_h=new Y(ON)),_h}static setCensorship(e,r){if(!e&&r&&this.globalLogger().throwError("cannot permanently disable censorship",Y.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),Vm){if(!e)return;this.globalLogger().throwError("error censorship permanent",Y.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}Km=!!e,Vm=!!r}static setLogLevel(e){const r=x0[e.toLowerCase()];if(r==null){Y.globalLogger().warn("invalid log level - "+e);return}Zm=r}static from(e){return new Y(e)}}Y.errors=dn;Y.levels=H1;const RN="bytes/5.6.1",Vt=new Y(RN);function nb(t){return!!t.toHexString}function ba(t){return t.slice||(t.slice=function(){const e=Array.prototype.slice.call(arguments);return ba(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}function $u(t){return Ge(t)&&!(t.length%2)||jo(t)}function Xm(t){return typeof t=="number"&&t==t&&t%1===0}function jo(t){if(t==null)return!1;if(t.constructor===Uint8Array)return!0;if(typeof t=="string"||!Xm(t.length)||t.length<0)return!1;for(let e=0;e<t.length;e++){const r=t[e];if(!Xm(r)||r<0||r>=256)return!1}return!0}function de(t,e){if(e||(e={}),typeof t=="number"){Vt.checkSafeUint53(t,"invalid arrayify value");const r=[];for(;t;)r.unshift(t&255),t=parseInt(String(t/256));return r.length===0&&r.push(0),ba(new Uint8Array(r))}if(e.allowMissingPrefix&&typeof t=="string"&&t.substring(0,2)!=="0x"&&(t="0x"+t),nb(t)&&(t=t.toHexString()),Ge(t)){let r=t.substring(2);r.length%2&&(e.hexPad==="left"?r="0"+r:e.hexPad==="right"?r+="0":Vt.throwArgumentError("hex data is odd-length","value",t));const n=[];for(let i=0;i<r.length;i+=2)n.push(parseInt(r.substring(i,i+2),16));return ba(new Uint8Array(n))}return jo(t)?ba(new Uint8Array(t)):Vt.throwArgumentError("invalid arrayify value","value",t)}function Dt(t){const e=t.map(i=>de(i)),r=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(r);return e.reduce((i,o)=>(n.set(o,i),i+o.length),0),ba(n)}function ci(t){let e=de(t);if(e.length===0)return e;let r=0;for(;r<e.length&&e[r]===0;)r++;return r&&(e=e.slice(r)),e}function nl(t,e){t=de(t),t.length>e&&Vt.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(e);return r.set(t,e-t.length),ba(r)}function Ge(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}const Ch="0123456789abcdef";function ge(t,e){if(e||(e={}),typeof t=="number"){Vt.checkSafeUint53(t,"invalid hexlify value");let r="";for(;t;)r=Ch[t&15]+r,t=Math.floor(t/16);return r.length?(r.length%2&&(r="0"+r),"0x"+r):"0x00"}if(typeof t=="bigint")return t=t.toString(16),t.length%2?"0x0"+t:"0x"+t;if(e.allowMissingPrefix&&typeof t=="string"&&t.substring(0,2)!=="0x"&&(t="0x"+t),nb(t))return t.toHexString();if(Ge(t))return t.length%2&&(e.hexPad==="left"?t="0x0"+t.substring(2):e.hexPad==="right"?t+="0":Vt.throwArgumentError("hex data is odd-length","value",t)),t.toLowerCase();if(jo(t)){let r="0x";for(let n=0;n<t.length;n++){let i=t[n];r+=Ch[(i&240)>>4]+Ch[i&15]}return r}return Vt.throwArgumentError("invalid hexlify value","value",t)}function wi(t){if(typeof t!="string")t=ge(t);else if(!Ge(t)||t.length%2)return null;return(t.length-2)/2}function Xt(t,e,r){return typeof t!="string"?t=ge(t):(!Ge(t)||t.length%2)&&Vt.throwArgumentError("invalid hexData","value",t),e=2+2*e,r!=null?"0x"+t.substring(e,2+2*r):"0x"+t.substring(e)}function Mr(t){let e="0x";return t.forEach(r=>{e+=ge(r).substring(2)}),e}function Nu(t){const e=ib(ge(t,{hexPad:"left"}));return e==="0x"?"0x0":e}function ib(t){typeof t!="string"&&(t=ge(t)),Ge(t)||Vt.throwArgumentError("invalid hex string","value",t),t=t.substring(2);let e=0;for(;e<t.length&&t[e]==="0";)e++;return"0x"+t.substring(e)}function Ft(t,e){for(typeof t!="string"?t=ge(t):Ge(t)||Vt.throwArgumentError("invalid hex string","value",t),t.length>2*e+2&&Vt.throwArgumentError("value out of range","value",arguments[1]);t.length<2*e+2;)t="0x0"+t.substring(2);return t}function Ms(t){const e={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if($u(t)){let r=de(t);r.length===64?(e.v=27+(r[32]>>7),r[32]&=127,e.r=ge(r.slice(0,32)),e.s=ge(r.slice(32,64))):r.length===65?(e.r=ge(r.slice(0,32)),e.s=ge(r.slice(32,64)),e.v=r[64]):Vt.throwArgumentError("invalid signature string","signature",t),e.v<27&&(e.v===0||e.v===1?e.v+=27:Vt.throwArgumentError("signature invalid v byte","signature",t)),e.recoveryParam=1-e.v%2,e.recoveryParam&&(r[32]|=128),e._vs=ge(r.slice(32,64))}else{if(e.r=t.r,e.s=t.s,e.v=t.v,e.recoveryParam=t.recoveryParam,e._vs=t._vs,e._vs!=null){const i=nl(de(e._vs),32);e._vs=ge(i);const o=i[0]>=128?1:0;e.recoveryParam==null?e.recoveryParam=o:e.recoveryParam!==o&&Vt.throwArgumentError("signature recoveryParam mismatch _vs","signature",t),i[0]&=127;const s=ge(i);e.s==null?e.s=s:e.s!==s&&Vt.throwArgumentError("signature v mismatch _vs","signature",t)}if(e.recoveryParam==null)e.v==null?Vt.throwArgumentError("signature missing v and recoveryParam","signature",t):e.v===0||e.v===1?e.recoveryParam=e.v:e.recoveryParam=1-e.v%2;else if(e.v==null)e.v=27+e.recoveryParam;else{const i=e.v===0||e.v===1?e.v:1-e.v%2;e.recoveryParam!==i&&Vt.throwArgumentError("signature recoveryParam mismatch v","signature",t)}e.r==null||!Ge(e.r)?Vt.throwArgumentError("signature missing or invalid r","signature",t):e.r=Ft(e.r,32),e.s==null||!Ge(e.s)?Vt.throwArgumentError("signature missing or invalid s","signature",t):e.s=Ft(e.s,32);const r=de(e.s);r[0]>=128&&Vt.throwArgumentError("signature s out of range","signature",t),e.recoveryParam&&(r[0]|=128);const n=ge(r);e._vs&&(Ge(e._vs)||Vt.throwArgumentError("signature invalid _vs","signature",t),e._vs=Ft(e._vs,32)),e._vs==null?e._vs=n:e._vs!==n&&Vt.throwArgumentError("signature _vs mismatch v and s","signature",t)}return e.yParityAndS=e._vs,e.compact=e.r+e.yParityAndS.substring(2),e}function q1(t){return t=Ms(t),ge(Dt([t.r,t.s,t.recoveryParam?"0x1c":"0x1b"]))}const ob="bignumber/5.6.0";var Yl=ze.BN;const ei=new Y(ob),Ah={},Qm=9007199254740991;function BN(t){return t!=null&&(he.isBigNumber(t)||typeof t=="number"&&t%1===0||typeof t=="string"&&!!t.match(/^-?[0-9]+$/)||Ge(t)||typeof t=="bigint"||jo(t))}let ew=!1;class he{constructor(e,r){ei.checkNew(new.target,he),e!==Ah&&ei.throwError("cannot call constructor directly; use BigNumber.from",Y.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=r,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return jr(ot(this).fromTwos(e))}toTwos(e){return jr(ot(this).toTwos(e))}abs(){return this._hex[0]==="-"?he.from(this._hex.substring(1)):this}add(e){return jr(ot(this).add(ot(e)))}sub(e){return jr(ot(this).sub(ot(e)))}div(e){return he.from(e).isZero()&&ln("division-by-zero","div"),jr(ot(this).div(ot(e)))}mul(e){return jr(ot(this).mul(ot(e)))}mod(e){const r=ot(e);return r.isNeg()&&ln("division-by-zero","mod"),jr(ot(this).umod(r))}pow(e){const r=ot(e);return r.isNeg()&&ln("negative-power","pow"),jr(ot(this).pow(r))}and(e){const r=ot(e);return(this.isNegative()||r.isNeg())&&ln("unbound-bitwise-result","and"),jr(ot(this).and(r))}or(e){const r=ot(e);return(this.isNegative()||r.isNeg())&&ln("unbound-bitwise-result","or"),jr(ot(this).or(r))}xor(e){const r=ot(e);return(this.isNegative()||r.isNeg())&&ln("unbound-bitwise-result","xor"),jr(ot(this).xor(r))}mask(e){return(this.isNegative()||e<0)&&ln("negative-width","mask"),jr(ot(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&ln("negative-width","shl"),jr(ot(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&ln("negative-width","shr"),jr(ot(this).shrn(e))}eq(e){return ot(this).eq(ot(e))}lt(e){return ot(this).lt(ot(e))}lte(e){return ot(this).lte(ot(e))}gt(e){return ot(this).gt(ot(e))}gte(e){return ot(this).gte(ot(e))}isNegative(){return this._hex[0]==="-"}isZero(){return ot(this).isZero()}toNumber(){try{return ot(this).toNumber()}catch{ln("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return ei.throwError("this platform does not support BigInt",Y.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(arguments[0]===10?ew||(ew=!0,ei.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):arguments[0]===16?ei.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",Y.errors.UNEXPECTED_ARGUMENT,{}):ei.throwError("BigNumber.toString does not accept parameters",Y.errors.UNEXPECTED_ARGUMENT,{})),ot(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof he)return e;if(typeof e=="string")return e.match(/^-?0x[0-9a-f]+$/i)?new he(Ah,Xl(e)):e.match(/^-?[0-9]+$/)?new he(Ah,Xl(new Yl(e))):ei.throwArgumentError("invalid BigNumber string","value",e);if(typeof e=="number")return e%1&&ln("underflow","BigNumber.from",e),(e>=Qm||e<=-Qm)&&ln("overflow","BigNumber.from",e),he.from(String(e));const r=e;if(typeof r=="bigint")return he.from(r.toString());if(jo(r))return he.from(ge(r));if(r)if(r.toHexString){const n=r.toHexString();if(typeof n=="string")return he.from(n)}else{let n=r._hex;if(n==null&&r.type==="BigNumber"&&(n=r.hex),typeof n=="string"&&(Ge(n)||n[0]==="-"&&Ge(n.substring(1))))return he.from(n)}return ei.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!!(e&&e._isBigNumber)}}function Xl(t){if(typeof t!="string")return Xl(t.toString(16));if(t[0]==="-")return t=t.substring(1),t[0]==="-"&&ei.throwArgumentError("invalid hex","value",t),t=Xl(t),t==="0x00"?t:"-"+t;if(t.substring(0,2)!=="0x"&&(t="0x"+t),t==="0x")return"0x00";for(t.length%2&&(t="0x0"+t.substring(2));t.length>4&&t.substring(0,4)==="0x00";)t="0x"+t.substring(4);return t}function jr(t){return he.from(Xl(t))}function ot(t){const e=he.from(t).toHexString();return e[0]==="-"?new Yl("-"+e.substring(3),16):new Yl(e.substring(2),16)}function ln(t,e,r){const n={fault:t,operation:e};return r!=null&&(n.value=r),ei.throwError(t,Y.errors.NUMERIC_FAULT,n)}function LN(t){return new Yl(t,36).toString(16)}function UN(t){return new Yl(t,16).toString(36)}const Sr=new Y(ob),il={},sb=he.from(0),ab=he.from(-1);function cb(t,e,r,n){const i={fault:e,operation:r};return n!==void 0&&(i.value=n),Sr.throwError(t,Y.errors.NUMERIC_FAULT,i)}let ol="0";for(;ol.length<256;)ol+=ol;function $2(t){if(typeof t!="number")try{t=he.from(t).toNumber()}catch{}return typeof t=="number"&&t>=0&&t<=256&&!(t%1)?"1"+ol.substring(0,t):Sr.throwArgumentError("invalid decimal size","decimals",t)}function _0(t,e){e==null&&(e=0);const r=$2(e);t=he.from(t);const n=t.lt(sb);n&&(t=t.mul(ab));let i=t.mod(r).toString();for(;i.length<r.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=t.div(r).toString();return r.length===1?t=o:t=o+"."+i,n&&(t="-"+t),t}function Qn(t,e){e==null&&(e=0);const r=$2(e);(typeof t!="string"||!t.match(/^-?[0-9.]+$/))&&Sr.throwArgumentError("invalid decimal value","value",t);const n=t.substring(0,1)==="-";n&&(t=t.substring(1)),t==="."&&Sr.throwArgumentError("missing value","value",t);const i=t.split(".");i.length>2&&Sr.throwArgumentError("too many decimal points","value",t);let o=i[0],s=i[1];for(o||(o="0"),s||(s="0");s[s.length-1]==="0";)s=s.substring(0,s.length-1);for(s.length>r.length-1&&cb("fractional component exceeds decimals","underflow","parseFixed"),s===""&&(s="0");s.length<r.length-1;)s+="0";const a=he.from(o),c=he.from(s);let l=a.mul(r).add(c);return n&&(l=l.mul(ab)),l}class ya{constructor(e,r,n,i){e!==il&&Sr.throwError("cannot use FixedFormat constructor; use FixedFormat.from",Y.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=n,this.decimals=i,this.name=(r?"":"u")+"fixed"+String(n)+"x"+String(i),this._multiplier=$2(i),Object.freeze(this)}static from(e){if(e instanceof ya)return e;typeof e=="number"&&(e=`fixed128x${e}`);let r=!0,n=128,i=18;if(typeof e=="string"){if(e!=="fixed")if(e==="ufixed")r=!1;else{const o=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||Sr.throwArgumentError("invalid fixed format","format",e),r=o[1]!=="u",n=parseInt(o[2]),i=parseInt(o[3])}}else if(e){const o=(s,a,c)=>e[s]==null?c:(typeof e[s]!==a&&Sr.throwArgumentError("invalid fixed format ("+s+" not "+a+")","format."+s,e[s]),e[s]);r=o("signed","boolean",r),n=o("width","number",n),i=o("decimals","number",i)}return n%8&&Sr.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),i>80&&Sr.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new ya(il,r,n,i)}}class sr{constructor(e,r,n,i){Sr.checkNew(new.target,sr),e!==il&&Sr.throwError("cannot use FixedNumber constructor; use FixedNumber.from",Y.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=r,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&Sr.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const r=Qn(this._value,this.format.decimals),n=Qn(e._value,e.format.decimals);return sr.fromValue(r.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const r=Qn(this._value,this.format.decimals),n=Qn(e._value,e.format.decimals);return sr.fromValue(r.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const r=Qn(this._value,this.format.decimals),n=Qn(e._value,e.format.decimals);return sr.fromValue(r.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const r=Qn(this._value,this.format.decimals),n=Qn(e._value,e.format.decimals);return sr.fromValue(r.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");e.length===1&&e.push("0");let r=sr.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(r=r.subUnsafe(tw.toFormat(r.format))),r}ceiling(){const e=this.toString().split(".");e.length===1&&e.push("0");let r=sr.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(r=r.addUnsafe(tw.toFormat(r.format))),r}round(e){e==null&&(e=0);const r=this.toString().split(".");if(r.length===1&&r.push("0"),(e<0||e>80||e%1)&&Sr.throwArgumentError("invalid decimal count","decimals",e),r[1].length<=e)return this;const n=sr.from("1"+ol.substring(0,e),this.format),i=FN.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(i).floor().divUnsafe(n)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(e){if(e==null)return this._hex;e%8&&Sr.throwArgumentError("invalid byte width","width",e);const r=he.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return Ft(r,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return sr.fromString(this._value,e)}static fromValue(e,r,n){return n==null&&r!=null&&!BN(r)&&(n=r,r=null),r==null&&(r=0),n==null&&(n="fixed"),sr.fromString(_0(e,r),ya.from(n))}static fromString(e,r){r==null&&(r="fixed");const n=ya.from(r),i=Qn(e,n.decimals);!n.signed&&i.lt(sb)&&cb("unsigned value cannot be negative","overflow","value",e);let o=null;n.signed?o=i.toTwos(n.width).toHexString():(o=i.toHexString(),o=Ft(o,n.width/8));const s=_0(i,n.decimals);return new sr(il,o,s,n)}static fromBytes(e,r){r==null&&(r="fixed");const n=ya.from(r);if(de(e).length>n.width/8)throw new Error("overflow");let i=he.from(e);n.signed&&(i=i.fromTwos(n.width));const o=i.toTwos((n.signed?0:1)+n.width).toHexString(),s=_0(i,n.decimals);return new sr(il,o,s,n)}static from(e,r){if(typeof e=="string")return sr.fromString(e,r);if(jo(e))return sr.fromBytes(e,r);try{return sr.fromValue(e,0,r)}catch(n){if(n.code!==Y.errors.INVALID_ARGUMENT)throw n}return Sr.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}const tw=sr.from(1),FN=sr.from("0.5"),jN="properties/5.6.0";var WN=window&&window.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};const mf=new Y(jN);function se(t,e,r){Object.defineProperty(t,e,{enumerable:!0,value:r,writable:!1})}function mr(t,e){for(let r=0;r<32;r++){if(t[e])return t[e];if(!t.prototype||typeof t.prototype!="object")break;t=Object.getPrototypeOf(t.prototype).constructor}return null}function Kt(t){return WN(this,void 0,void 0,function*(){const e=Object.keys(t).map(n=>{const i=t[n];return Promise.resolve(i).then(o=>({key:n,value:o}))});return(yield Promise.all(e)).reduce((n,i)=>(n[i.key]=i.value,n),{})})}function N2(t,e){(!t||typeof t!="object")&&mf.throwArgumentError("invalid object","object",t),Object.keys(t).forEach(r=>{e[r]||mf.throwArgumentError("invalid object key - "+r,"transaction:"+r,t)})}function jt(t){const e={};for(const r in t)e[r]=t[r];return e}const zN={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function lb(t){if(t==null||zN[typeof t])return!0;if(Array.isArray(t)||typeof t=="object"){if(!Object.isFrozen(t))return!1;const e=Object.keys(t);for(let r=0;r<e.length;r++){let n=null;try{n=t[e[r]]}catch{continue}if(!lb(n))return!1}return!0}return mf.throwArgumentError(`Cannot deepCopy ${typeof t}`,"object",t)}function HN(t){if(lb(t))return t;if(Array.isArray(t))return Object.freeze(t.map(e=>Rr(e)));if(typeof t=="object"){const e={};for(const r in t){const n=t[r];n!==void 0&&se(e,r,Rr(n))}return e}return mf.throwArgumentError(`Cannot deepCopy ${typeof t}`,"object",t)}function Rr(t){return HN(t)}class Os{constructor(e){for(const r in e)this[r]=Rr(e[r])}}const Mu="abi/5.6.1",ct=new Y(Mu),Es={};let rw={calldata:!0,memory:!0,storage:!0},qN={calldata:!0,memory:!0};function t0(t,e){if(t==="bytes"||t==="string"){if(rw[e])return!0}else if(t==="address"){if(e==="payable")return!0}else if((t.indexOf("[")>=0||t==="tuple")&&qN[e])return!0;return(rw[e]||e==="payable")&&ct.throwArgumentError("invalid modifier","name",e),!1}function GN(t,e){let r=t;function n(a){ct.throwArgumentError(`unexpected character at position ${a}`,"param",t)}t=t.replace(/\s/g," ");function i(a){let c={type:"",name:"",parent:a,state:{allowType:!0}};return e&&(c.indexed=!1),c}let o={type:"",name:"",state:{allowType:!0}},s=o;for(let a=0;a<t.length;a++){let c=t[a];switch(c){case"(":s.state.allowType&&s.type===""?s.type="tuple":s.state.allowParams||n(a),s.state.allowType=!1,s.type=ra(s.type),s.components=[i(s)],s=s.components[0];break;case")":delete s.state,s.name==="indexed"&&(e||n(a),s.indexed=!0,s.name=""),t0(s.type,s.name)&&(s.name=""),s.type=ra(s.type);let l=s;s=s.parent,s||n(a),delete l.parent,s.state.allowParams=!1,s.state.allowName=!0,s.state.allowArray=!0;break;case",":delete s.state,s.name==="indexed"&&(e||n(a),s.indexed=!0,s.name=""),t0(s.type,s.name)&&(s.name=""),s.type=ra(s.type);let u=i(s.parent);s.parent.components.push(u),delete s.parent,s=u;break;case" ":s.state.allowType&&s.type!==""&&(s.type=ra(s.type),delete s.state.allowType,s.state.allowName=!0,s.state.allowParams=!0),s.state.allowName&&s.name!==""&&(s.name==="indexed"?(e||n(a),s.indexed&&n(a),s.indexed=!0,s.name=""):t0(s.type,s.name)?s.name="":s.state.allowName=!1);break;case"[":s.state.allowArray||n(a),s.type+=c,s.state.allowArray=!1,s.state.allowName=!1,s.state.readArray=!0;break;case"]":s.state.readArray||n(a),s.type+=c,s.state.readArray=!1,s.state.allowArray=!0,s.state.allowName=!0;break;default:s.state.allowType?(s.type+=c,s.state.allowParams=!0,s.state.allowArray=!0):s.state.allowName?(s.name+=c,delete s.state.allowArray):s.state.readArray?s.type+=c:n(a)}}return s.parent&&ct.throwArgumentError("unexpected eof","param",t),delete o.state,s.name==="indexed"?(e||n(r.length-7),s.indexed&&n(r.length-7),s.indexed=!0,s.name=""):t0(s.type,s.name)&&(s.name=""),o.type=ra(o.type),o}function C0(t,e){for(let r in e)se(t,r,e[r])}const dt=Object.freeze({sighash:"sighash",minimal:"minimal",full:"full",json:"json"}),VN=new RegExp(/^(.*)\[([0-9]*)\]$/);class ar{constructor(e,r){e!==Es&&ct.throwError("use fromString",Y.errors.UNSUPPORTED_OPERATION,{operation:"new ParamType()"}),C0(this,r);let n=this.type.match(VN);n?C0(this,{arrayLength:parseInt(n[2]||"-1"),arrayChildren:ar.fromObject({type:n[1],components:this.components}),baseType:"array"}):C0(this,{arrayLength:null,arrayChildren:null,baseType:this.components!=null?"tuple":this.type}),this._isParamType=!0,Object.freeze(this)}format(e){if(e||(e=dt.sighash),dt[e]||ct.throwArgumentError("invalid format type","format",e),e===dt.json){let n={type:this.baseType==="tuple"?"tuple":this.type,name:this.name||void 0};return typeof this.indexed=="boolean"&&(n.indexed=this.indexed),this.components&&(n.components=this.components.map(i=>JSON.parse(i.format(e)))),JSON.stringify(n)}let r="";return this.baseType==="array"?(r+=this.arrayChildren.format(e),r+="["+(this.arrayLength<0?"":String(this.arrayLength))+"]"):this.baseType==="tuple"?(e!==dt.sighash&&(r+=this.type),r+="("+this.components.map(n=>n.format(e)).join(e===dt.full?", ":",")+")"):r+=this.type,e!==dt.sighash&&(this.indexed===!0&&(r+=" indexed"),e===dt.full&&this.name&&(r+=" "+this.name)),r}static from(e,r){return typeof e=="string"?ar.fromString(e,r):ar.fromObject(e)}static fromObject(e){return ar.isParamType(e)?e:new ar(Es,{name:e.name||null,type:ra(e.type),indexed:e.indexed==null?null:!!e.indexed,components:e.components?e.components.map(ar.fromObject):null})}static fromString(e,r){function n(i){return ar.fromObject({name:i.name,type:i.type,indexed:i.indexed,components:i.components})}return n(GN(e,!!r))}static isParamType(e){return!!(e!=null&&e._isParamType)}}function Ql(t,e){return ZN(t).map(r=>ar.fromString(r,e))}class si{constructor(e,r){e!==Es&&ct.throwError("use a static from method",Y.errors.UNSUPPORTED_OPERATION,{operation:"new Fragment()"}),C0(this,r),this._isFragment=!0,Object.freeze(this)}static from(e){return si.isFragment(e)?e:typeof e=="string"?si.fromString(e):si.fromObject(e)}static fromObject(e){if(si.isFragment(e))return e;switch(e.type){case"function":return Nn.fromObject(e);case"event":return oi.fromObject(e);case"constructor":return $n.fromObject(e);case"error":return Oi.fromObject(e);case"fallback":case"receive":return null}return ct.throwArgumentError("invalid fragment object","value",e)}static fromString(e){return e=e.replace(/\s/g," "),e=e.replace(/\(/g," (").replace(/\)/g,") ").replace(/\s+/g," "),e=e.trim(),e.split(" ")[0]==="event"?oi.fromString(e.substring(5).trim()):e.split(" ")[0]==="function"?Nn.fromString(e.substring(8).trim()):e.split("(")[0].trim()==="constructor"?$n.fromString(e.trim()):e.split(" ")[0]==="error"?Oi.fromString(e.substring(5).trim()):ct.throwArgumentError("unsupported fragment","value",e)}static isFragment(e){return!!(e&&e._isFragment)}}class oi extends si{format(e){if(e||(e=dt.sighash),dt[e]||ct.throwArgumentError("invalid format type","format",e),e===dt.json)return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(n=>JSON.parse(n.format(e)))});let r="";return e!==dt.sighash&&(r+="event "),r+=this.name+"("+this.inputs.map(n=>n.format(e)).join(e===dt.full?", ":",")+") ",e!==dt.sighash&&this.anonymous&&(r+="anonymous "),r.trim()}static from(e){return typeof e=="string"?oi.fromString(e):oi.fromObject(e)}static fromObject(e){if(oi.isEventFragment(e))return e;e.type!=="event"&&ct.throwArgumentError("invalid event object","value",e);const r={name:eu(e.name),anonymous:e.anonymous,inputs:e.inputs?e.inputs.map(ar.fromObject):[],type:"event"};return new oi(Es,r)}static fromString(e){let r=e.match(tu);r||ct.throwArgumentError("invalid event string","value",e);let n=!1;return r[3].split(" ").forEach(i=>{switch(i.trim()){case"anonymous":n=!0;break;case"":break;default:ct.warn("unknown modifier: "+i)}}),oi.fromObject({name:r[1].trim(),anonymous:n,inputs:Ql(r[2],!0),type:"event"})}static isEventFragment(e){return e&&e._isFragment&&e.type==="event"}}function ub(t,e){e.gas=null;let r=t.split("@");return r.length!==1?(r.length>2&&ct.throwArgumentError("invalid human-readable ABI signature","value",t),r[1].match(/^[0-9]+$/)||ct.throwArgumentError("invalid human-readable ABI signature gas","value",t),e.gas=he.from(r[1]),r[0]):t}function fb(t,e){e.constant=!1,e.payable=!1,e.stateMutability="nonpayable",t.split(" ").forEach(r=>{switch(r.trim()){case"constant":e.constant=!0;break;case"payable":e.payable=!0,e.stateMutability="payable";break;case"nonpayable":e.payable=!1,e.stateMutability="nonpayable";break;case"pure":e.constant=!0,e.stateMutability="pure";break;case"view":e.constant=!0,e.stateMutability="view";break;case"external":case"public":case"":break;default:console.log("unknown modifier: "+r)}})}function db(t){let e={constant:!1,payable:!0,stateMutability:"payable"};return t.stateMutability!=null?(e.stateMutability=t.stateMutability,e.constant=e.stateMutability==="view"||e.stateMutability==="pure",t.constant!=null&&!!t.constant!==e.constant&&ct.throwArgumentError("cannot have constant function with mutability "+e.stateMutability,"value",t),e.payable=e.stateMutability==="payable",t.payable!=null&&!!t.payable!==e.payable&&ct.throwArgumentError("cannot have payable function with mutability "+e.stateMutability,"value",t)):t.payable!=null?(e.payable=!!t.payable,t.constant==null&&!e.payable&&t.type!=="constructor"&&ct.throwArgumentError("unable to determine stateMutability","value",t),e.constant=!!t.constant,e.constant?e.stateMutability="view":e.stateMutability=e.payable?"payable":"nonpayable",e.payable&&e.constant&&ct.throwArgumentError("cannot have constant payable function","value",t)):t.constant!=null?(e.constant=!!t.constant,e.payable=!e.constant,e.stateMutability=e.constant?"view":"payable"):t.type!=="constructor"&&ct.throwArgumentError("unable to determine stateMutability","value",t),e}class $n extends si{format(e){if(e||(e=dt.sighash),dt[e]||ct.throwArgumentError("invalid format type","format",e),e===dt.json)return JSON.stringify({type:"constructor",stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas?this.gas.toNumber():void 0,inputs:this.inputs.map(n=>JSON.parse(n.format(e)))});e===dt.sighash&&ct.throwError("cannot format a constructor for sighash",Y.errors.UNSUPPORTED_OPERATION,{operation:"format(sighash)"});let r="constructor("+this.inputs.map(n=>n.format(e)).join(e===dt.full?", ":",")+") ";return this.stateMutability&&this.stateMutability!=="nonpayable"&&(r+=this.stateMutability+" "),r.trim()}static from(e){return typeof e=="string"?$n.fromString(e):$n.fromObject(e)}static fromObject(e){if($n.isConstructorFragment(e))return e;e.type!=="constructor"&&ct.throwArgumentError("invalid constructor object","value",e);let r=db(e);r.constant&&ct.throwArgumentError("constructor cannot be constant","value",e);const n={name:null,type:e.type,inputs:e.inputs?e.inputs.map(ar.fromObject):[],payable:r.payable,stateMutability:r.stateMutability,gas:e.gas?he.from(e.gas):null};return new $n(Es,n)}static fromString(e){let r={type:"constructor"};e=ub(e,r);let n=e.match(tu);return(!n||n[1].trim()!=="constructor")&&ct.throwArgumentError("invalid constructor string","value",e),r.inputs=Ql(n[2].trim(),!1),fb(n[3].trim(),r),$n.fromObject(r)}static isConstructorFragment(e){return e&&e._isFragment&&e.type==="constructor"}}class Nn extends $n{format(e){if(e||(e=dt.sighash),dt[e]||ct.throwArgumentError("invalid format type","format",e),e===dt.json)return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas?this.gas.toNumber():void 0,inputs:this.inputs.map(n=>JSON.parse(n.format(e))),outputs:this.outputs.map(n=>JSON.parse(n.format(e)))});let r="";return e!==dt.sighash&&(r+="function "),r+=this.name+"("+this.inputs.map(n=>n.format(e)).join(e===dt.full?", ":",")+") ",e!==dt.sighash&&(this.stateMutability?this.stateMutability!=="nonpayable"&&(r+=this.stateMutability+" "):this.constant&&(r+="view "),this.outputs&&this.outputs.length&&(r+="returns ("+this.outputs.map(n=>n.format(e)).join(", ")+") "),this.gas!=null&&(r+="@"+this.gas.toString()+" ")),r.trim()}static from(e){return typeof e=="string"?Nn.fromString(e):Nn.fromObject(e)}static fromObject(e){if(Nn.isFunctionFragment(e))return e;e.type!=="function"&&ct.throwArgumentError("invalid function object","value",e);let r=db(e);const n={type:e.type,name:eu(e.name),constant:r.constant,inputs:e.inputs?e.inputs.map(ar.fromObject):[],outputs:e.outputs?e.outputs.map(ar.fromObject):[],payable:r.payable,stateMutability:r.stateMutability,gas:e.gas?he.from(e.gas):null};return new Nn(Es,n)}static fromString(e){let r={type:"function"};e=ub(e,r);let n=e.split(" returns ");n.length>2&&ct.throwArgumentError("invalid function string","value",e);let i=n[0].match(tu);if(i||ct.throwArgumentError("invalid function signature","value",e),r.name=i[1].trim(),r.name&&eu(r.name),r.inputs=Ql(i[2],!1),fb(i[3].trim(),r),n.length>1){let o=n[1].match(tu);(o[1].trim()!=""||o[3].trim()!="")&&ct.throwArgumentError("unexpected tokens","value",e),r.outputs=Ql(o[2],!1)}else r.outputs=[];return Nn.fromObject(r)}static isFunctionFragment(e){return e&&e._isFragment&&e.type==="function"}}function nw(t){const e=t.format();return(e==="Error(string)"||e==="Panic(uint256)")&&ct.throwArgumentError(`cannot specify user defined ${e} error`,"fragment",t),t}class Oi extends si{format(e){if(e||(e=dt.sighash),dt[e]||ct.throwArgumentError("invalid format type","format",e),e===dt.json)return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(n=>JSON.parse(n.format(e)))});let r="";return e!==dt.sighash&&(r+="error "),r+=this.name+"("+this.inputs.map(n=>n.format(e)).join(e===dt.full?", ":",")+") ",r.trim()}static from(e){return typeof e=="string"?Oi.fromString(e):Oi.fromObject(e)}static fromObject(e){if(Oi.isErrorFragment(e))return e;e.type!=="error"&&ct.throwArgumentError("invalid error object","value",e);const r={type:e.type,name:eu(e.name),inputs:e.inputs?e.inputs.map(ar.fromObject):[]};return nw(new Oi(Es,r))}static fromString(e){let r={type:"error"},n=e.match(tu);return n||ct.throwArgumentError("invalid error signature","value",e),r.name=n[1].trim(),r.name&&eu(r.name),r.inputs=Ql(n[2],!1),nw(Oi.fromObject(r))}static isErrorFragment(e){return e&&e._isFragment&&e.type==="error"}}function ra(t){return t.match(/^uint($|[^1-9])/)?t="uint256"+t.substring(4):t.match(/^int($|[^1-9])/)&&(t="int256"+t.substring(3)),t}const KN=new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");function eu(t){return(!t||!t.match(KN))&&ct.throwArgumentError(`invalid identifier "${t}"`,"value",t),t}const tu=new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");function ZN(t){t=t.trim();let e=[],r="",n=0;for(let i=0;i<t.length;i++){let o=t[i];o===","&&n===0?(e.push(r),r=""):(r+=o,o==="("?n++:o===")"&&(n--,n===-1&&ct.throwArgumentError("unbalanced parenthesis","value",t)))}return r&&e.push(r),e}const M2=new Y(Mu);function hb(t){const e=[],r=function(n,i){if(Array.isArray(i))for(let o in i){const s=n.slice();s.push(o);try{r(s,i[o])}catch(a){e.push({path:s,error:a})}}};return r([],t),e}class Yi{constructor(e,r,n,i){this.name=e,this.type=r,this.localName=n,this.dynamic=i}_throwError(e,r){M2.throwArgumentError(e,this.localName,r)}}class G1{constructor(e){se(this,"wordSize",e||32),this._data=[],this._dataLength=0,this._padding=new Uint8Array(e)}get data(){return Mr(this._data)}get length(){return this._dataLength}_writeData(e){return this._data.push(e),this._dataLength+=e.length,e.length}appendWriter(e){return this._writeData(Dt(e._data))}writeBytes(e){let r=de(e);const n=r.length%this.wordSize;return n&&(r=Dt([r,this._padding.slice(n)])),this._writeData(r)}_getValue(e){let r=de(he.from(e));return r.length>this.wordSize&&M2.throwError("value out-of-bounds",Y.errors.BUFFER_OVERRUN,{length:this.wordSize,offset:r.length}),r.length%this.wordSize&&(r=Dt([this._padding.slice(r.length%this.wordSize),r])),r}writeValue(e){return this._writeData(this._getValue(e))}writeUpdatableValue(){const e=this._data.length;return this._data.push(this._padding),this._dataLength+=this.wordSize,r=>{this._data[e]=this._getValue(r)}}}class wf{constructor(e,r,n,i){se(this,"_data",de(e)),se(this,"wordSize",r||32),se(this,"_coerceFunc",n),se(this,"allowLoose",i),this._offset=0}get data(){return ge(this._data)}get consumed(){return this._offset}static coerce(e,r){let n=e.match("^u?int([0-9]+)$");return n&&parseInt(n[1])<=48&&(r=r.toNumber()),r}coerce(e,r){return this._coerceFunc?this._coerceFunc(e,r):wf.coerce(e,r)}_peekBytes(e,r,n){let i=Math.ceil(r/this.wordSize)*this.wordSize;return this._offset+i>this._data.length&&(this.allowLoose&&n&&this._offset+r<=this._data.length?i=r:M2.throwError("data out-of-bounds",Y.errors.BUFFER_OVERRUN,{length:this._data.length,offset:this._offset+i})),this._data.slice(this._offset,this._offset+i)}subReader(e){return new wf(this._data.slice(this._offset+e),this.wordSize,this._coerceFunc,this.allowLoose)}readBytes(e,r){let n=this._peekBytes(0,e,!!r);return this._offset+=n.length,n.slice(0,e)}readValue(){return he.from(this.readBytes(this.wordSize))}}var JN=Ns(function(t){(function(){var e="input is invalid type",r="finalize already called",n=typeof window=="object",i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&typeof self=="object",s=!i.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;s?i=rb:o&&(i=self);var a=!i.JS_SHA3_NO_COMMON_JS&&!0&&t.exports,c=!i.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",l="0123456789abcdef".split(""),u=[31,7936,2031616,520093696],f=[4,1024,262144,67108864],p=[1,256,65536,16777216],b=[6,1536,393216,100663296],v=[0,8,16,24],A=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],_=[224,256,384,512],N=[128,256],P=["hex","buffer","arrayBuffer","array","digest"],M={128:168,256:136};(i.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(E){return Object.prototype.toString.call(E)==="[object Array]"}),c&&(i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(E){return typeof E=="object"&&E.buffer&&E.buffer.constructor===ArrayBuffer});for(var D=function(E,J,Q){return function(ee){return new G(E,J,E).update(ee)[Q]()}},R=function(E,J,Q){return function(ee,ne){return new G(E,J,ne).update(ee)[Q]()}},W=function(E,J,Q){return function(ee,ne,ae,ue){return I["cshake"+E].update(ee,ne,ae,ue)[Q]()}},w=function(E,J,Q){return function(ee,ne,ae,ue){return I["kmac"+E].update(ee,ne,ae,ue)[Q]()}},H=function(E,J,Q,ee){for(var ne=0;ne<P.length;++ne){var ae=P[ne];E[ae]=J(Q,ee,ae)}return E},X=function(E,J){var Q=D(E,J,"hex");return Q.create=function(){return new G(E,J,E)},Q.update=function(ee){return Q.create().update(ee)},H(Q,D,E,J)},te=function(E,J){var Q=R(E,J,"hex");return Q.create=function(ee){return new G(E,J,ee)},Q.update=function(ee,ne){return Q.create(ne).update(ee)},H(Q,R,E,J)},L=function(E,J){var Q=M[E],ee=W(E,J,"hex");return ee.create=function(ne,ae,ue){return!ae&&!ue?I["shake"+E].create(ne):new G(E,J,ne).bytepad([ae,ue],Q)},ee.update=function(ne,ae,ue,le){return ee.create(ae,ue,le).update(ne)},H(ee,W,E,J)},h=function(E,J){var Q=M[E],ee=w(E,J,"hex");return ee.create=function(ne,ae,ue){return new U(E,J,ae).bytepad(["KMAC",ue],Q).bytepad([ne],Q)},ee.update=function(ne,ae,ue,le){return ee.create(ne,ue,le).update(ae)},H(ee,w,E,J)},C=[{name:"keccak",padding:p,bits:_,createMethod:X},{name:"sha3",padding:b,bits:_,createMethod:X},{name:"shake",padding:u,bits:N,createMethod:te},{name:"cshake",padding:f,bits:N,createMethod:L},{name:"kmac",padding:f,bits:N,createMethod:h}],I={},$=[],O=0;O<C.length;++O)for(var j=C[O],z=j.bits,F=0;F<z.length;++F){var y=j.name+"_"+z[F];if($.push(y),I[y]=j.createMethod(z[F],j.padding),j.name!=="sha3"){var S=j.name+z[F];$.push(S),I[S]=I[y]}}function G(E,J,Q){this.blocks=[],this.s=[],this.padding=J,this.outputBits=Q,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(E<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=Q>>5,this.extraBytes=(Q&31)>>3;for(var ee=0;ee<50;++ee)this.s[ee]=0}G.prototype.update=function(E){if(this.finalized)throw new Error(r);var J,Q=typeof E;if(Q!=="string"){if(Q==="object"){if(E===null)throw new Error(e);if(c&&E.constructor===ArrayBuffer)E=new Uint8Array(E);else if(!Array.isArray(E)&&(!c||!ArrayBuffer.isView(E)))throw new Error(e)}else throw new Error(e);J=!0}for(var ee=this.blocks,ne=this.byteCount,ae=E.length,ue=this.blockCount,le=0,we=this.s,xe,Ae;le<ae;){if(this.reset)for(this.reset=!1,ee[0]=this.block,xe=1;xe<ue+1;++xe)ee[xe]=0;if(J)for(xe=this.start;le<ae&&xe<ne;++le)ee[xe>>2]|=E[le]<<v[xe++&3];else for(xe=this.start;le<ae&&xe<ne;++le)Ae=E.charCodeAt(le),Ae<128?ee[xe>>2]|=Ae<<v[xe++&3]:Ae<2048?(ee[xe>>2]|=(192|Ae>>6)<<v[xe++&3],ee[xe>>2]|=(128|Ae&63)<<v[xe++&3]):Ae<55296||Ae>=57344?(ee[xe>>2]|=(224|Ae>>12)<<v[xe++&3],ee[xe>>2]|=(128|Ae>>6&63)<<v[xe++&3],ee[xe>>2]|=(128|Ae&63)<<v[xe++&3]):(Ae=65536+((Ae&1023)<<10|E.charCodeAt(++le)&1023),ee[xe>>2]|=(240|Ae>>18)<<v[xe++&3],ee[xe>>2]|=(128|Ae>>12&63)<<v[xe++&3],ee[xe>>2]|=(128|Ae>>6&63)<<v[xe++&3],ee[xe>>2]|=(128|Ae&63)<<v[xe++&3]);if(this.lastByteIndex=xe,xe>=ne){for(this.start=xe-ne,this.block=ee[ue],xe=0;xe<ue;++xe)we[xe]^=ee[xe];V(we),this.reset=!0}else this.start=xe}return this},G.prototype.encode=function(E,J){var Q=E&255,ee=1,ne=[Q];for(E=E>>8,Q=E&255;Q>0;)ne.unshift(Q),E=E>>8,Q=E&255,++ee;return J?ne.push(ee):ne.unshift(ee),this.update(ne),ne.length},G.prototype.encodeString=function(E){var J,Q=typeof E;if(Q!=="string"){if(Q==="object"){if(E===null)throw new Error(e);if(c&&E.constructor===ArrayBuffer)E=new Uint8Array(E);else if(!Array.isArray(E)&&(!c||!ArrayBuffer.isView(E)))throw new Error(e)}else throw new Error(e);J=!0}var ee=0,ne=E.length;if(J)ee=ne;else for(var ae=0;ae<E.length;++ae){var ue=E.charCodeAt(ae);ue<128?ee+=1:ue<2048?ee+=2:ue<55296||ue>=57344?ee+=3:(ue=65536+((ue&1023)<<10|E.charCodeAt(++ae)&1023),ee+=4)}return ee+=this.encode(ee*8),this.update(E),ee},G.prototype.bytepad=function(E,J){for(var Q=this.encode(J),ee=0;ee<E.length;++ee)Q+=this.encodeString(E[ee]);var ne=J-Q%J,ae=[];return ae.length=ne,this.update(ae),this},G.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var E=this.blocks,J=this.lastByteIndex,Q=this.blockCount,ee=this.s;if(E[J>>2]|=this.padding[J&3],this.lastByteIndex===this.byteCount)for(E[0]=E[Q],J=1;J<Q+1;++J)E[J]=0;for(E[Q-1]|=2147483648,J=0;J<Q;++J)ee[J]^=E[J];V(ee)}},G.prototype.toString=G.prototype.hex=function(){this.finalize();for(var E=this.blockCount,J=this.s,Q=this.outputBlocks,ee=this.extraBytes,ne=0,ae=0,ue="",le;ae<Q;){for(ne=0;ne<E&&ae<Q;++ne,++ae)le=J[ne],ue+=l[le>>4&15]+l[le&15]+l[le>>12&15]+l[le>>8&15]+l[le>>20&15]+l[le>>16&15]+l[le>>28&15]+l[le>>24&15];ae%E===0&&(V(J),ne=0)}return ee&&(le=J[ne],ue+=l[le>>4&15]+l[le&15],ee>1&&(ue+=l[le>>12&15]+l[le>>8&15]),ee>2&&(ue+=l[le>>20&15]+l[le>>16&15])),ue},G.prototype.arrayBuffer=function(){this.finalize();var E=this.blockCount,J=this.s,Q=this.outputBlocks,ee=this.extraBytes,ne=0,ae=0,ue=this.outputBits>>3,le;ee?le=new ArrayBuffer(Q+1<<2):le=new ArrayBuffer(ue);for(var we=new Uint32Array(le);ae<Q;){for(ne=0;ne<E&&ae<Q;++ne,++ae)we[ae]=J[ne];ae%E===0&&V(J)}return ee&&(we[ne]=J[ne],le=le.slice(0,ue)),le},G.prototype.buffer=G.prototype.arrayBuffer,G.prototype.digest=G.prototype.array=function(){this.finalize();for(var E=this.blockCount,J=this.s,Q=this.outputBlocks,ee=this.extraBytes,ne=0,ae=0,ue=[],le,we;ae<Q;){for(ne=0;ne<E&&ae<Q;++ne,++ae)le=ae<<2,we=J[ne],ue[le]=we&255,ue[le+1]=we>>8&255,ue[le+2]=we>>16&255,ue[le+3]=we>>24&255;ae%E===0&&V(J)}return ee&&(le=ae<<2,we=J[ne],ue[le]=we&255,ee>1&&(ue[le+1]=we>>8&255),ee>2&&(ue[le+2]=we>>16&255)),ue};function U(E,J,Q){G.call(this,E,J,Q)}U.prototype=new G,U.prototype.finalize=function(){return this.encode(this.outputBits,!0),G.prototype.finalize.call(this)};var V=function(E){var J,Q,ee,ne,ae,ue,le,we,xe,Ae,rt,gt,nt,Ue,Se,Ie,Pe,mt,Re,ke,vt,B,g,x,q,Z,re,ie,me,Ne,Te,Oe,Je,_t,Et,Si,Ye,at,Pi,et,xt,Wn,Tt,Ce,dr,lt,ft,Rt,He,Ct,zn,wt,Xe,ki,It,$t,an,Hn,Cn,qn,Gn,_r,Vn;for(ee=0;ee<48;ee+=2)ne=E[0]^E[10]^E[20]^E[30]^E[40],ae=E[1]^E[11]^E[21]^E[31]^E[41],ue=E[2]^E[12]^E[22]^E[32]^E[42],le=E[3]^E[13]^E[23]^E[33]^E[43],we=E[4]^E[14]^E[24]^E[34]^E[44],xe=E[5]^E[15]^E[25]^E[35]^E[45],Ae=E[6]^E[16]^E[26]^E[36]^E[46],rt=E[7]^E[17]^E[27]^E[37]^E[47],gt=E[8]^E[18]^E[28]^E[38]^E[48],nt=E[9]^E[19]^E[29]^E[39]^E[49],J=gt^(ue<<1|le>>>31),Q=nt^(le<<1|ue>>>31),E[0]^=J,E[1]^=Q,E[10]^=J,E[11]^=Q,E[20]^=J,E[21]^=Q,E[30]^=J,E[31]^=Q,E[40]^=J,E[41]^=Q,J=ne^(we<<1|xe>>>31),Q=ae^(xe<<1|we>>>31),E[2]^=J,E[3]^=Q,E[12]^=J,E[13]^=Q,E[22]^=J,E[23]^=Q,E[32]^=J,E[33]^=Q,E[42]^=J,E[43]^=Q,J=ue^(Ae<<1|rt>>>31),Q=le^(rt<<1|Ae>>>31),E[4]^=J,E[5]^=Q,E[14]^=J,E[15]^=Q,E[24]^=J,E[25]^=Q,E[34]^=J,E[35]^=Q,E[44]^=J,E[45]^=Q,J=we^(gt<<1|nt>>>31),Q=xe^(nt<<1|gt>>>31),E[6]^=J,E[7]^=Q,E[16]^=J,E[17]^=Q,E[26]^=J,E[27]^=Q,E[36]^=J,E[37]^=Q,E[46]^=J,E[47]^=Q,J=Ae^(ne<<1|ae>>>31),Q=rt^(ae<<1|ne>>>31),E[8]^=J,E[9]^=Q,E[18]^=J,E[19]^=Q,E[28]^=J,E[29]^=Q,E[38]^=J,E[39]^=Q,E[48]^=J,E[49]^=Q,Ue=E[0],Se=E[1],lt=E[11]<<4|E[10]>>>28,ft=E[10]<<4|E[11]>>>28,ie=E[20]<<3|E[21]>>>29,me=E[21]<<3|E[20]>>>29,qn=E[31]<<9|E[30]>>>23,Gn=E[30]<<9|E[31]>>>23,Wn=E[40]<<18|E[41]>>>14,Tt=E[41]<<18|E[40]>>>14,_t=E[2]<<1|E[3]>>>31,Et=E[3]<<1|E[2]>>>31,Ie=E[13]<<12|E[12]>>>20,Pe=E[12]<<12|E[13]>>>20,Rt=E[22]<<10|E[23]>>>22,He=E[23]<<10|E[22]>>>22,Ne=E[33]<<13|E[32]>>>19,Te=E[32]<<13|E[33]>>>19,_r=E[42]<<2|E[43]>>>30,Vn=E[43]<<2|E[42]>>>30,ki=E[5]<<30|E[4]>>>2,It=E[4]<<30|E[5]>>>2,Si=E[14]<<6|E[15]>>>26,Ye=E[15]<<6|E[14]>>>26,mt=E[25]<<11|E[24]>>>21,Re=E[24]<<11|E[25]>>>21,Ct=E[34]<<15|E[35]>>>17,zn=E[35]<<15|E[34]>>>17,Oe=E[45]<<29|E[44]>>>3,Je=E[44]<<29|E[45]>>>3,x=E[6]<<28|E[7]>>>4,q=E[7]<<28|E[6]>>>4,$t=E[17]<<23|E[16]>>>9,an=E[16]<<23|E[17]>>>9,at=E[26]<<25|E[27]>>>7,Pi=E[27]<<25|E[26]>>>7,ke=E[36]<<21|E[37]>>>11,vt=E[37]<<21|E[36]>>>11,wt=E[47]<<24|E[46]>>>8,Xe=E[46]<<24|E[47]>>>8,Ce=E[8]<<27|E[9]>>>5,dr=E[9]<<27|E[8]>>>5,Z=E[18]<<20|E[19]>>>12,re=E[19]<<20|E[18]>>>12,Hn=E[29]<<7|E[28]>>>25,Cn=E[28]<<7|E[29]>>>25,et=E[38]<<8|E[39]>>>24,xt=E[39]<<8|E[38]>>>24,B=E[48]<<14|E[49]>>>18,g=E[49]<<14|E[48]>>>18,E[0]=Ue^~Ie&mt,E[1]=Se^~Pe&Re,E[10]=x^~Z&ie,E[11]=q^~re&me,E[20]=_t^~Si&at,E[21]=Et^~Ye&Pi,E[30]=Ce^~lt&Rt,E[31]=dr^~ft&He,E[40]=ki^~$t&Hn,E[41]=It^~an&Cn,E[2]=Ie^~mt&ke,E[3]=Pe^~Re&vt,E[12]=Z^~ie&Ne,E[13]=re^~me&Te,E[22]=Si^~at&et,E[23]=Ye^~Pi&xt,E[32]=lt^~Rt&Ct,E[33]=ft^~He&zn,E[42]=$t^~Hn&qn,E[43]=an^~Cn&Gn,E[4]=mt^~ke&B,E[5]=Re^~vt&g,E[14]=ie^~Ne&Oe,E[15]=me^~Te&Je,E[24]=at^~et&Wn,E[25]=Pi^~xt&Tt,E[34]=Rt^~Ct&wt,E[35]=He^~zn&Xe,E[44]=Hn^~qn&_r,E[45]=Cn^~Gn&Vn,E[6]=ke^~B&Ue,E[7]=vt^~g&Se,E[16]=Ne^~Oe&x,E[17]=Te^~Je&q,E[26]=et^~Wn&_t,E[27]=xt^~Tt&Et,E[36]=Ct^~wt&Ce,E[37]=zn^~Xe&dr,E[46]=qn^~_r&ki,E[47]=Gn^~Vn&It,E[8]=B^~Ue&Ie,E[9]=g^~Se&Pe,E[18]=Oe^~x&Z,E[19]=Je^~q&re,E[28]=Wn^~_t&Si,E[29]=Tt^~Et&Ye,E[38]=wt^~Ce&lt,E[39]=Xe^~dr&ft,E[48]=_r^~ki&$t,E[49]=Vn^~It&an,E[0]^=A[ee],E[1]^=A[ee+1]};if(a)t.exports=I;else for(O=0;O<$.length;++O)i[$[O]]=I[$[O]]})()});function Mt(t){return"0x"+JN.keccak_256(de(t))}const YN="rlp/5.6.0",ti=new Y(YN);function iw(t){const e=[];for(;t;)e.unshift(t&255),t>>=8;return e}function ow(t,e,r){let n=0;for(let i=0;i<r;i++)n=n*256+t[e+i];return n}function pb(t){if(Array.isArray(t)){let n=[];if(t.forEach(function(o){n=n.concat(pb(o))}),n.length<=55)return n.unshift(192+n.length),n;const i=iw(n.length);return i.unshift(247+i.length),i.concat(n)}$u(t)||ti.throwArgumentError("RLP object must be BytesLike","object",t);const e=Array.prototype.slice.call(de(t));if(e.length===1&&e[0]<=127)return e;if(e.length<=55)return e.unshift(128+e.length),e;const r=iw(e.length);return r.unshift(183+r.length),r.concat(e)}function xs(t){return ge(pb(t))}function sw(t,e,r,n){const i=[];for(;r<e+1+n;){const o=gb(t,r);i.push(o.result),r+=o.consumed,r>e+1+n&&ti.throwError("child data too short",Y.errors.BUFFER_OVERRUN,{})}return{consumed:1+n,result:i}}function gb(t,e){if(t.length===0&&ti.throwError("data too short",Y.errors.BUFFER_OVERRUN,{}),t[e]>=248){const r=t[e]-247;e+1+r>t.length&&ti.throwError("data short segment too short",Y.errors.BUFFER_OVERRUN,{});const n=ow(t,e+1,r);return e+1+r+n>t.length&&ti.throwError("data long segment too short",Y.errors.BUFFER_OVERRUN,{}),sw(t,e,e+1+r,r+n)}else if(t[e]>=192){const r=t[e]-192;return e+1+r>t.length&&ti.throwError("data array too short",Y.errors.BUFFER_OVERRUN,{}),sw(t,e,e+1,r)}else if(t[e]>=184){const r=t[e]-183;e+1+r>t.length&&ti.throwError("data array too short",Y.errors.BUFFER_OVERRUN,{});const n=ow(t,e+1,r);e+1+r+n>t.length&&ti.throwError("data array too short",Y.errors.BUFFER_OVERRUN,{});const i=ge(t.slice(e+1+r,e+1+r+n));return{consumed:1+r+n,result:i}}else if(t[e]>=128){const r=t[e]-128;e+1+r>t.length&&ti.throwError("data too short",Y.errors.BUFFER_OVERRUN,{});const n=ge(t.slice(e+1,e+1+r));return{consumed:1+r,result:n}}return{consumed:1,result:ge(t[e])}}function md(t){const e=de(t),r=gb(e,0);return r.consumed!==e.length&&ti.throwArgumentError("invalid rlp data","data",t),r.result}var XN=Object.freeze({__proto__:null,encode:xs,decode:md});const QN="address/5.6.0",fo=new Y(QN);function aw(t){Ge(t,20)||fo.throwArgumentError("invalid address","address",t),t=t.toLowerCase();const e=t.substring(2).split(""),r=new Uint8Array(40);for(let i=0;i<40;i++)r[i]=e[i].charCodeAt(0);const n=de(Mt(r));for(let i=0;i<40;i+=2)n[i>>1]>>4>=8&&(e[i]=e[i].toUpperCase()),(n[i>>1]&15)>=8&&(e[i+1]=e[i+1].toUpperCase());return"0x"+e.join("")}const eM=9007199254740991;function tM(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10}const O2={};for(let t=0;t<10;t++)O2[String(t)]=String(t);for(let t=0;t<26;t++)O2[String.fromCharCode(65+t)]=String(10+t);const cw=Math.floor(tM(eM));function mb(t){t=t.toUpperCase(),t=t.substring(4)+t.substring(0,2)+"00";let e=t.split("").map(n=>O2[n]).join("");for(;e.length>=cw;){let n=e.substring(0,cw);e=parseInt(n,10)%97+e.substring(n.length)}let r=String(98-parseInt(e,10)%97);for(;r.length<2;)r="0"+r;return r}function kt(t){let e=null;if(typeof t!="string"&&fo.throwArgumentError("invalid address","address",t),t.match(/^(0x)?[0-9a-fA-F]{40}$/))t.substring(0,2)!=="0x"&&(t="0x"+t),e=aw(t),t.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&e!==t&&fo.throwArgumentError("bad address checksum","address",t);else if(t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(t.substring(2,4)!==mb(t)&&fo.throwArgumentError("bad icap checksum","address",t),e=LN(t.substring(4));e.length<40;)e="0"+e;e=aw("0x"+e)}else fo.throwArgumentError("invalid address","address",t);return e}function rM(t){try{return kt(t),!0}catch{}return!1}function nM(t){let e=UN(kt(t).substring(2)).toUpperCase();for(;e.length<30;)e="0"+e;return"XE"+mb("XE00"+e)+e}function wd(t){let e=null;try{e=kt(t.from)}catch{fo.throwArgumentError("missing from address","transaction",t)}const r=ci(de(he.from(t.nonce).toHexString()));return kt(Xt(Mt(xs([e,r])),12))}function iM(t,e,r){return wi(e)!==32&&fo.throwArgumentError("salt must be 32 bytes","salt",e),wi(r)!==32&&fo.throwArgumentError("initCodeHash must be 32 bytes","initCodeHash",r),kt(Xt(Mt(Dt(["0xff",kt(t),e,r])),12))}class oM extends Yi{constructor(e){super("address","address",e,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(e,r){try{r=kt(r)}catch(n){this._throwError(n.message,r)}return e.writeValue(r)}decode(e){return kt(Ft(e.readValue().toHexString(),20))}}class sM extends Yi{constructor(e){super(e.name,e.type,void 0,e.dynamic),this.coder=e}defaultValue(){return this.coder.defaultValue()}encode(e,r){return this.coder.encode(e,r)}decode(e){return this.coder.decode(e)}}const ca=new Y(Mu);function wb(t,e,r){let n=null;if(Array.isArray(r))n=r;else if(r&&typeof r=="object"){let c={};n=e.map(l=>{const u=l.localName;return u||ca.throwError("cannot encode object for signature with missing names",Y.errors.INVALID_ARGUMENT,{argument:"values",coder:l,value:r}),c[u]&&ca.throwError("cannot encode object for signature with duplicate names",Y.errors.INVALID_ARGUMENT,{argument:"values",coder:l,value:r}),c[u]=!0,r[u]})}else ca.throwArgumentError("invalid tuple value","tuple",r);e.length!==n.length&&ca.throwArgumentError("types/value length mismatch","tuple",r);let i=new G1(t.wordSize),o=new G1(t.wordSize),s=[];e.forEach((c,l)=>{let u=n[l];if(c.dynamic){let f=o.length;c.encode(o,u);let p=i.writeUpdatableValue();s.push(b=>{p(b+f)})}else c.encode(i,u)}),s.forEach(c=>{c(i.length)});let a=t.appendWriter(i);return a+=t.appendWriter(o),a}function bb(t,e){let r=[],n=t.subReader(0);e.forEach(o=>{let s=null;if(o.dynamic){let a=t.readValue(),c=n.subReader(a.toNumber());try{s=o.decode(c)}catch(l){if(l.code===Y.errors.BUFFER_OVERRUN)throw l;s=l,s.baseType=o.name,s.name=o.localName,s.type=o.type}}else try{s=o.decode(t)}catch(a){if(a.code===Y.errors.BUFFER_OVERRUN)throw a;s=a,s.baseType=o.name,s.name=o.localName,s.type=o.type}s!=null&&r.push(s)});const i=e.reduce((o,s)=>{const a=s.localName;return a&&(o[a]||(o[a]=0),o[a]++),o},{});e.forEach((o,s)=>{let a=o.localName;if(!a||i[a]!==1||(a==="length"&&(a="_length"),r[a]!=null))return;const c=r[s];c instanceof Error?Object.defineProperty(r,a,{enumerable:!0,get:()=>{throw c}}):r[a]=c});for(let o=0;o<r.length;o++){const s=r[o];s instanceof Error&&Object.defineProperty(r,o,{enumerable:!0,get:()=>{throw s}})}return Object.freeze(r)}class aM extends Yi{constructor(e,r,n){const i=e.type+"["+(r>=0?r:"")+"]",o=r===-1||e.dynamic;super("array",i,n,o),this.coder=e,this.length=r}defaultValue(){const e=this.coder.defaultValue(),r=[];for(let n=0;n<this.length;n++)r.push(e);return r}encode(e,r){Array.isArray(r)||this._throwError("expected array value",r);let n=this.length;n===-1&&(n=r.length,e.writeValue(r.length)),ca.checkArgumentCount(r.length,n,"coder array"+(this.localName?" "+this.localName:""));let i=[];for(let o=0;o<r.length;o++)i.push(this.coder);return wb(e,i,r)}decode(e){let r=this.length;r===-1&&(r=e.readValue().toNumber(),r*32>e._data.length&&ca.throwError("insufficient data length",Y.errors.BUFFER_OVERRUN,{length:e._data.length,count:r}));let n=[];for(let i=0;i<r;i++)n.push(new sM(this.coder));return e.coerce(this.name,bb(e,n))}}class cM extends Yi{constructor(e){super("bool","bool",e,!1)}defaultValue(){return!1}encode(e,r){return e.writeValue(r?1:0)}decode(e){return e.coerce(this.type,!e.readValue().isZero())}}class yb extends Yi{constructor(e,r){super(e,e,r,!0)}defaultValue(){return"0x"}encode(e,r){r=de(r);let n=e.writeValue(r.length);return n+=e.writeBytes(r),n}decode(e){return e.readBytes(e.readValue().toNumber(),!0)}}class lM extends yb{constructor(e){super("bytes",e)}decode(e){return e.coerce(this.name,ge(super.decode(e)))}}class uM extends Yi{constructor(e,r){let n="bytes"+String(e);super(n,n,r,!1),this.size=e}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(e,r){let n=de(r);return n.length!==this.size&&this._throwError("incorrect data length",r),e.writeBytes(n)}decode(e){return e.coerce(this.name,ge(e.readBytes(this.size)))}}class fM extends Yi{constructor(e){super("null","",e,!1)}defaultValue(){return null}encode(e,r){return r!=null&&this._throwError("not null",r),e.writeBytes([])}decode(e){return e.readBytes(0),e.coerce(this.name,null)}}const vb="0x0000000000000000000000000000000000000000",Eb=he.from(-1),D2=he.from(0),xb=he.from(1),dM=he.from(2),hM=he.from("1000000000000000000"),_b=he.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),pM=he.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),gM=he.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),R2="0x0000000000000000000000000000000000000000000000000000000000000000",mM="Ξ";var wM=Object.freeze({__proto__:null,AddressZero:vb,NegativeOne:Eb,Zero:D2,One:xb,Two:dM,WeiPerEther:hM,MaxUint256:_b,MinInt256:pM,MaxInt256:gM,HashZero:R2,EtherSymbol:mM});class bM extends Yi{constructor(e,r,n){const i=(r?"int":"uint")+e*8;super(i,i,n,!1),this.size=e,this.signed=r}defaultValue(){return 0}encode(e,r){let n=he.from(r),i=_b.mask(e.wordSize*8);if(this.signed){let o=i.mask(this.size*8-1);(n.gt(o)||n.lt(o.add(xb).mul(Eb)))&&this._throwError("value out-of-bounds",r)}else(n.lt(D2)||n.gt(i.mask(this.size*8)))&&this._throwError("value out-of-bounds",r);return n=n.toTwos(this.size*8).mask(this.size*8),this.signed&&(n=n.fromTwos(this.size*8).toTwos(8*e.wordSize)),e.writeValue(n)}decode(e){let r=e.readValue().mask(this.size*8);return this.signed&&(r=r.fromTwos(this.size*8)),e.coerce(this.name,r)}}const yM="strings/5.6.0",Cb=new Y(yM);var bi;(function(t){t.current="",t.NFC="NFC",t.NFD="NFD",t.NFKC="NFKC",t.NFKD="NFKD"})(bi||(bi={}));var qr;(function(t){t.UNEXPECTED_CONTINUE="unexpected continuation byte",t.BAD_PREFIX="bad codepoint prefix",t.OVERRUN="string overrun",t.MISSING_CONTINUE="missing continuation byte",t.OUT_OF_RANGE="out of UTF-8 range",t.UTF16_SURROGATE="UTF-16 surrogate",t.OVERLONG="overlong representation"})(qr||(qr={}));function vM(t,e,r,n,i){return Cb.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`,"bytes",r)}function Ab(t,e,r,n,i){if(t===qr.BAD_PREFIX||t===qr.UNEXPECTED_CONTINUE){let o=0;for(let s=e+1;s<r.length&&r[s]>>6===2;s++)o++;return o}return t===qr.OVERRUN?r.length-e-1:0}function EM(t,e,r,n,i){return t===qr.OVERLONG?(n.push(i),0):(n.push(65533),Ab(t,e,r))}const Sb=Object.freeze({error:vM,ignore:Ab,replace:EM});function B2(t,e){e==null&&(e=Sb.error),t=de(t);const r=[];let n=0;for(;n<t.length;){const i=t[n++];if(!(i>>7)){r.push(i);continue}let o=null,s=null;if((i&224)===192)o=1,s=127;else if((i&240)===224)o=2,s=2047;else if((i&248)===240)o=3,s=65535;else{(i&192)===128?n+=e(qr.UNEXPECTED_CONTINUE,n-1,t,r):n+=e(qr.BAD_PREFIX,n-1,t,r);continue}if(n-1+o>=t.length){n+=e(qr.OVERRUN,n-1,t,r);continue}let a=i&(1<<8-o-1)-1;for(let c=0;c<o;c++){let l=t[n];if((l&192)!=128){n+=e(qr.MISSING_CONTINUE,n,t,r),a=null;break}a=a<<6|l&63,n++}if(a!==null){if(a>1114111){n+=e(qr.OUT_OF_RANGE,n-1-o,t,r,a);continue}if(a>=55296&&a<=57343){n+=e(qr.UTF16_SURROGATE,n-1-o,t,r,a);continue}if(a<=s){n+=e(qr.OVERLONG,n-1-o,t,r,a);continue}r.push(a)}}return r}function er(t,e=bi.current){e!=bi.current&&(Cb.checkNormalize(),t=t.normalize(e));let r=[];for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);if(i<128)r.push(i);else if(i<2048)r.push(i>>6|192),r.push(i&63|128);else if((i&64512)==55296){n++;const o=t.charCodeAt(n);if(n>=t.length||(o&64512)!==56320)throw new Error("invalid utf-8 string");const s=65536+((i&1023)<<10)+(o&1023);r.push(s>>18|240),r.push(s>>12&63|128),r.push(s>>6&63|128),r.push(s&63|128)}else r.push(i>>12|224),r.push(i>>6&63|128),r.push(i&63|128)}return de(r)}function Sh(t){const e="0000"+t.toString(16);return"\\u"+e.substring(e.length-4)}function xM(t,e){return'"'+B2(t,e).map(r=>{if(r<256){switch(r){case 8:return"\\b";case 9:return"\\t";case 10:return"\\n";case 13:return"\\r";case 34:return'\\"';case 92:return"\\\\"}if(r>=32&&r<127)return String.fromCharCode(r)}return r<=65535?Sh(r):(r-=65536,Sh((r>>10&1023)+55296)+Sh((r&1023)+56320))}).join("")+'"'}function V1(t){return t.map(e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10&1023)+55296,(e&1023)+56320))).join("")}function Ds(t,e){return V1(B2(t,e))}function K1(t,e=bi.current){return B2(er(t,e))}function _M(t){const e=er(t);if(e.length>31)throw new Error("bytes32 string must be less than 32 bytes");return ge(Dt([e,R2]).slice(0,32))}function CM(t){const e=de(t);if(e.length!==32)throw new Error("invalid bytes32 - not 32 bytes long");if(e[31]!==0)throw new Error("invalid bytes32 string - no null terminator");let r=31;for(;e[r-1]===0;)r--;return Ds(e.slice(0,r))}function AM(t){if(t.length%4!==0)throw new Error("bad data");let e=[];for(let r=0;r<t.length;r+=4)e.push(parseInt(t.substring(r,r+4),16));return e}function L2(t,e){e||(e=function(i){return[parseInt(i,16)]});let r=0,n={};return t.split(",").forEach(i=>{let o=i.split(":");r+=parseInt(o[0],16),n[r]=e(o[1])}),n}function Pb(t){let e=0;return t.split(",").map(r=>{let n=r.split("-");n.length===1?n[1]="0":n[1]===""&&(n[1]="1");let i=e+parseInt(n[0],16);return e=parseInt(n[1],16),{l:i,h:e}})}function U2(t,e){let r=0;for(let n=0;n<e.length;n++){let i=e[n];if(r+=i.l,t>=r&&t<=r+i.h&&(t-r)%(i.d||1)===0){if(i.e&&i.e.indexOf(t-r)!==-1)continue;return i}}return null}const SM=Pb("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),PM="ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t=>parseInt(t,16)),kM=[{h:25,s:32,l:65},{h:30,s:32,e:[23],l:127},{h:54,s:1,e:[48],l:64,d:2},{h:14,s:1,l:57,d:2},{h:44,s:1,l:17,d:2},{h:10,s:1,e:[2,6,8],l:61,d:2},{h:16,s:1,l:68,d:2},{h:84,s:1,e:[18,24,66],l:19,d:2},{h:26,s:32,e:[17],l:435},{h:22,s:1,l:71,d:2},{h:15,s:80,l:40},{h:31,s:32,l:16},{h:32,s:1,l:80,d:2},{h:52,s:1,l:42,d:2},{h:12,s:1,l:55,d:2},{h:40,s:1,e:[38],l:15,d:2},{h:14,s:1,l:48,d:2},{h:37,s:48,l:49},{h:148,s:1,l:6351,d:2},{h:88,s:1,l:160,d:2},{h:15,s:16,l:704},{h:25,s:26,l:854},{h:25,s:32,l:55915},{h:37,s:40,l:1247},{h:25,s:-119711,l:53248},{h:25,s:-119763,l:52},{h:25,s:-119815,l:52},{h:25,s:-119867,e:[1,4,5,7,8,11,12,17],l:52},{h:25,s:-119919,l:52},{h:24,s:-119971,e:[2,7,8,17],l:52},{h:24,s:-120023,e:[2,7,13,15,16,17],l:52},{h:25,s:-120075,l:52},{h:25,s:-120127,l:52},{h:25,s:-120179,l:52},{h:25,s:-120231,l:52},{h:25,s:-120283,l:52},{h:25,s:-120335,l:52},{h:24,s:-119543,e:[17],l:56},{h:24,s:-119601,e:[17],l:58},{h:24,s:-119659,e:[17],l:58},{h:24,s:-119717,e:[17],l:58},{h:24,s:-119775,e:[17],l:58}],TM=L2("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),IM=L2("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),$M=L2("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",AM),NM=Pb("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");function MM(t){return t.reduce((e,r)=>(r.forEach(n=>{e.push(n)}),e),[])}function OM(t){return!!U2(t,SM)}function DM(t){let e=U2(t,kM);if(e)return[t+e.s];let r=TM[t];if(r)return r;let n=IM[t];if(n)return[t+n[0]];let i=$M[t];return i||null}function RM(t){return!!U2(t,NM)}function bd(t){if(t.match(/^[a-z0-9-]*$/i)&&t.length<=59)return t.toLowerCase();let e=K1(t);e=MM(e.map(n=>{if(PM.indexOf(n)>=0)return[];if(n>=65024&&n<=65039)return[];let i=DM(n);return i||[n]})),e=K1(V1(e),bi.NFKC),e.forEach(n=>{if(RM(n))throw new Error("STRINGPREP_CONTAINS_PROHIBITED")}),e.forEach(n=>{if(OM(n))throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")});let r=V1(e);if(r.substring(0,1)==="-"||r.substring(2,4)==="--"||r.substring(r.length-1)==="-")throw new Error("invalid hyphen");if(r.length>63)throw new Error("too long");return r}class BM extends yb{constructor(e){super("string",e)}defaultValue(){return""}encode(e,r){return super.encode(e,er(r))}decode(e){return Ds(super.decode(e))}}class r0 extends Yi{constructor(e,r){let n=!1;const i=[];e.forEach(s=>{s.dynamic&&(n=!0),i.push(s.type)});const o="tuple("+i.join(",")+")";super("tuple",o,r,n),this.coders=e}defaultValue(){const e=[];this.coders.forEach(n=>{e.push(n.defaultValue())});const r=this.coders.reduce((n,i)=>{const o=i.localName;return o&&(n[o]||(n[o]=0),n[o]++),n},{});return this.coders.forEach((n,i)=>{let o=n.localName;!o||r[o]!==1||(o==="length"&&(o="_length"),e[o]==null&&(e[o]=e[i]))}),Object.freeze(e)}encode(e,r){return wb(e,this.coders,r)}decode(e){return e.coerce(this.name,bb(e,this.coders))}}const Oc=new Y(Mu),LM=new RegExp(/^bytes([0-9]*)$/),UM=new RegExp(/^(u?int)([0-9]*)$/);class yd{constructor(e){Oc.checkNew(new.target,yd),se(this,"coerceFunc",e||null)}_getCoder(e){switch(e.baseType){case"address":return new oM(e.name);case"bool":return new cM(e.name);case"string":return new BM(e.name);case"bytes":return new lM(e.name);case"array":return new aM(this._getCoder(e.arrayChildren),e.arrayLength,e.name);case"tuple":return new r0((e.components||[]).map(n=>this._getCoder(n)),e.name);case"":return new fM(e.name)}let r=e.type.match(UM);if(r){let n=parseInt(r[2]||"256");return(n===0||n>256||n%8!==0)&&Oc.throwArgumentError("invalid "+r[1]+" bit length","param",e),new bM(n/8,r[1]==="int",e.name)}if(r=e.type.match(LM),r){let n=parseInt(r[1]);return(n===0||n>32)&&Oc.throwArgumentError("invalid bytes length","param",e),new uM(n,e.name)}return Oc.throwArgumentError("invalid type","type",e.type)}_getWordSize(){return 32}_getReader(e,r){return new wf(e,this._getWordSize(),this.coerceFunc,r)}_getWriter(){return new G1(this._getWordSize())}getDefaultValue(e){const r=e.map(i=>this._getCoder(ar.from(i)));return new r0(r,"_").defaultValue()}encode(e,r){e.length!==r.length&&Oc.throwError("types/values length mismatch",Y.errors.INVALID_ARGUMENT,{count:{types:e.length,values:r.length},value:{types:e,values:r}});const n=e.map(s=>this._getCoder(ar.from(s))),i=new r0(n,"_"),o=this._getWriter();return i.encode(o,r),o.data}decode(e,r,n){const i=e.map(s=>this._getCoder(ar.from(s)));return new r0(i,"_").decode(this._getReader(de(r),n))}}const kb=new yd;function ho(t){return Mt(er(t))}const Tb="hash/5.6.0",lw=new Y(Tb),Ib=new Uint8Array(32);Ib.fill(0);const FM=new RegExp("^((.*)\\.)?([^.]+)$");function jM(t){try{const e=t.split(".");for(let r=0;r<e.length;r++)if(bd(e[r]).length===0)throw new Error("empty");return!0}catch{}return!1}function sl(t){typeof t!="string"&&lw.throwArgumentError("invalid ENS name; not a string","name",t);let e=t,r=Ib;for(;e.length;){const n=e.match(FM);(n==null||n[2]==="")&&lw.throwArgumentError("invalid ENS address; missing component","name",t);const i=er(bd(n[3]));r=Mt(Dt([r,Mt(i)])),e=n[2]||""}return ge(r)}function $b(t){return ge(Dt(t.split(".").map(e=>{const r=er("_"+bd(e));return r[0]=r.length-1,r})))+"00"}const WM=`Ethereum Signed Message:
`;function F2(t){return typeof t=="string"&&(t=er(t)),Mt(Dt([er(WM),er(String(t.length)),t]))}var zM=window&&window.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};const Ht=new Y(Tb),Nb=new Uint8Array(32);Nb.fill(0);const HM=he.from(-1),Mb=he.from(0),Ob=he.from(1),qM=he.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");function GM(t){const e=de(t),r=e.length%32;return r?Mr([e,Nb.slice(r)]):ge(e)}const VM=Ft(Ob.toHexString(),32),KM=Ft(Mb.toHexString(),32),uw={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},Ph=["name","version","chainId","verifyingContract","salt"];function fw(t){return function(e){return typeof e!="string"&&Ht.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`,`domain.${t}`,e),e}}const ZM={name:fw("name"),version:fw("version"),chainId:function(t){try{return he.from(t).toString()}catch{}return Ht.throwArgumentError('invalid domain value for "chainId"',"domain.chainId",t)},verifyingContract:function(t){try{return kt(t).toLowerCase()}catch{}return Ht.throwArgumentError('invalid domain value "verifyingContract"',"domain.verifyingContract",t)},salt:function(t){try{const e=de(t);if(e.length!==32)throw new Error("bad length");return ge(e)}catch{}return Ht.throwArgumentError('invalid domain value "salt"',"domain.salt",t)}};function kh(t){{const e=t.match(/^(u?)int(\d*)$/);if(e){const r=e[1]==="",n=parseInt(e[2]||"256");(n%8!==0||n>256||e[2]&&e[2]!==String(n))&&Ht.throwArgumentError("invalid numeric width","type",t);const i=qM.mask(r?n-1:n),o=r?i.add(Ob).mul(HM):Mb;return function(s){const a=he.from(s);return(a.lt(o)||a.gt(i))&&Ht.throwArgumentError(`value out-of-bounds for ${t}`,"value",s),Ft(a.toTwos(256).toHexString(),32)}}}{const e=t.match(/^bytes(\d+)$/);if(e){const r=parseInt(e[1]);return(r===0||r>32||e[1]!==String(r))&&Ht.throwArgumentError("invalid bytes width","type",t),function(n){return de(n).length!==r&&Ht.throwArgumentError(`invalid length for ${t}`,"value",n),GM(n)}}}switch(t){case"address":return function(e){return Ft(kt(e),32)};case"bool":return function(e){return e?VM:KM};case"bytes":return function(e){return Mt(e)};case"string":return function(e){return ho(e)}}return null}function dw(t,e){return`${t}(${e.map(({name:r,type:n})=>n+" "+r).join(",")})`}class yr{constructor(e){se(this,"types",Object.freeze(Rr(e))),se(this,"_encoderCache",{}),se(this,"_types",{});const r={},n={},i={};Object.keys(e).forEach(a=>{r[a]={},n[a]=[],i[a]={}});for(const a in e){const c={};e[a].forEach(l=>{c[l.name]&&Ht.throwArgumentError(`duplicate variable name ${JSON.stringify(l.name)} in ${JSON.stringify(a)}`,"types",e),c[l.name]=!0;const u=l.type.match(/^([^\x5b]*)(\x5b|$)/)[1];u===a&&Ht.throwArgumentError(`circular type reference to ${JSON.stringify(u)}`,"types",e),!kh(u)&&(n[u]||Ht.throwArgumentError(`unknown type ${JSON.stringify(u)}`,"types",e),n[u].push(a),r[a][u]=!0)})}const o=Object.keys(n).filter(a=>n[a].length===0);o.length===0?Ht.throwArgumentError("missing primary type","types",e):o.length>1&&Ht.throwArgumentError(`ambiguous primary types or unused types: ${o.map(a=>JSON.stringify(a)).join(", ")}`,"types",e),se(this,"primaryType",o[0]);function s(a,c){c[a]&&Ht.throwArgumentError(`circular type reference to ${JSON.stringify(a)}`,"types",e),c[a]=!0,Object.keys(r[a]).forEach(l=>{n[l]&&(s(l,c),Object.keys(c).forEach(u=>{i[u][l]=!0}))}),delete c[a]}s(this.primaryType,{});for(const a in i){const c=Object.keys(i[a]);c.sort(),this._types[a]=dw(a,e[a])+c.map(l=>dw(l,e[l])).join("")}}getEncoder(e){let r=this._encoderCache[e];return r||(r=this._encoderCache[e]=this._getEncoder(e)),r}_getEncoder(e){{const i=kh(e);if(i)return i}const r=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(r){const i=r[1],o=this.getEncoder(i),s=parseInt(r[3]);return a=>{s>=0&&a.length!==s&&Ht.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",a);let c=a.map(o);return this._types[i]&&(c=c.map(Mt)),Mt(Mr(c))}}const n=this.types[e];if(n){const i=ho(this._types[e]);return o=>{const s=n.map(({name:a,type:c})=>{const l=this.getEncoder(c)(o[a]);return this._types[c]?Mt(l):l});return s.unshift(i),Mr(s)}}return Ht.throwArgumentError(`unknown type: ${e}`,"type",e)}encodeType(e){const r=this._types[e];return r||Ht.throwArgumentError(`unknown type: ${JSON.stringify(e)}`,"name",e),r}encodeData(e,r){return this.getEncoder(e)(r)}hashStruct(e,r){return Mt(this.encodeData(e,r))}encode(e){return this.encodeData(this.primaryType,e)}hash(e){return this.hashStruct(this.primaryType,e)}_visit(e,r,n){if(kh(e))return n(e,r);const i=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(i){const s=i[1],a=parseInt(i[3]);return a>=0&&r.length!==a&&Ht.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",r),r.map(c=>this._visit(s,c,n))}const o=this.types[e];return o?o.reduce((s,{name:a,type:c})=>(s[a]=this._visit(c,r[a],n),s),{}):Ht.throwArgumentError(`unknown type: ${e}`,"type",e)}visit(e,r){return this._visit(this.primaryType,e,r)}static from(e){return new yr(e)}static getPrimaryType(e){return yr.from(e).primaryType}static hashStruct(e,r,n){return yr.from(r).hashStruct(e,n)}static hashDomain(e){const r=[];for(const n in e){const i=uw[n];i||Ht.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(n)}`,"domain",e),r.push({name:n,type:i})}return r.sort((n,i)=>Ph.indexOf(n.name)-Ph.indexOf(i.name)),yr.hashStruct("EIP712Domain",{EIP712Domain:r},e)}static encode(e,r,n){return Mr(["0x1901",yr.hashDomain(e),yr.from(r).hash(n)])}static hash(e,r,n){return Mt(yr.encode(e,r,n))}static resolveNames(e,r,n,i){return zM(this,void 0,void 0,function*(){e=jt(e);const o={};e.verifyingContract&&!Ge(e.verifyingContract,20)&&(o[e.verifyingContract]="0x");const s=yr.from(r);s.visit(n,(a,c)=>(a==="address"&&!Ge(c,20)&&(o[c]="0x"),c));for(const a in o)o[a]=yield i(a);return e.verifyingContract&&o[e.verifyingContract]&&(e.verifyingContract=o[e.verifyingContract]),n=s.visit(n,(a,c)=>a==="address"&&o[c]?o[c]:c),{domain:e,value:n}})}static getPayload(e,r,n){yr.hashDomain(e);const i={},o=[];Ph.forEach(c=>{const l=e[c];l!=null&&(i[c]=ZM[c](l),o.push({name:c,type:uw[c]}))});const s=yr.from(r),a=jt(r);return a.EIP712Domain?Ht.throwArgumentError("types must not contain EIP712Domain type","types.EIP712Domain",r):a.EIP712Domain=o,s.encode(n),{types:a,domain:i,primaryType:s.primaryType,message:s.visit(n,(c,l)=>{if(c.match(/^bytes(\d*)/))return ge(de(l));if(c.match(/^u?int/))return he.from(l).toString();switch(c){case"address":return l.toLowerCase();case"bool":return!!l;case"string":return typeof l!="string"&&Ht.throwArgumentError("invalid string","value",l),l}return Ht.throwArgumentError("unsupported type","type",c)})}}}const Wt=new Y(Mu);class Db extends Os{}class Rb extends Os{}class JM extends Os{}class bf extends Os{static isIndexed(e){return!!(e&&e._isIndexed)}}const YM={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:!0},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"]}};function hw(t,e){const r=new Error(`deferred error during ABI decoding triggered accessing ${t}`);return r.error=e,r}class ru{constructor(e){Wt.checkNew(new.target,ru);let r=[];typeof e=="string"?r=JSON.parse(e):r=e,se(this,"fragments",r.map(n=>si.from(n)).filter(n=>n!=null)),se(this,"_abiCoder",mr(new.target,"getAbiCoder")()),se(this,"functions",{}),se(this,"errors",{}),se(this,"events",{}),se(this,"structs",{}),this.fragments.forEach(n=>{let i=null;switch(n.type){case"constructor":if(this.deploy){Wt.warn("duplicate definition - constructor");return}se(this,"deploy",n);return;case"function":i=this.functions;break;case"event":i=this.events;break;case"error":i=this.errors;break;default:return}let o=n.format();if(i[o]){Wt.warn("duplicate definition - "+o);return}i[o]=n}),this.deploy||se(this,"deploy",$n.from({payable:!1,type:"constructor"})),se(this,"_isInterface",!0)}format(e){e||(e=dt.full),e===dt.sighash&&Wt.throwArgumentError("interface does not support formatting sighash","format",e);const r=this.fragments.map(n=>n.format(e));return e===dt.json?JSON.stringify(r.map(n=>JSON.parse(n))):r}static getAbiCoder(){return kb}static getAddress(e){return kt(e)}static getSighash(e){return Xt(ho(e.format()),0,4)}static getEventTopic(e){return ho(e.format())}getFunction(e){if(Ge(e)){for(const n in this.functions)if(e===this.getSighash(n))return this.functions[n];Wt.throwArgumentError("no matching function","sighash",e)}if(e.indexOf("(")===-1){const n=e.trim(),i=Object.keys(this.functions).filter(o=>o.split("(")[0]===n);return i.length===0?Wt.throwArgumentError("no matching function","name",n):i.length>1&&Wt.throwArgumentError("multiple matching functions","name",n),this.functions[i[0]]}const r=this.functions[Nn.fromString(e).format()];return r||Wt.throwArgumentError("no matching function","signature",e),r}getEvent(e){if(Ge(e)){const n=e.toLowerCase();for(const i in this.events)if(n===this.getEventTopic(i))return this.events[i];Wt.throwArgumentError("no matching event","topichash",n)}if(e.indexOf("(")===-1){const n=e.trim(),i=Object.keys(this.events).filter(o=>o.split("(")[0]===n);return i.length===0?Wt.throwArgumentError("no matching event","name",n):i.length>1&&Wt.throwArgumentError("multiple matching events","name",n),this.events[i[0]]}const r=this.events[oi.fromString(e).format()];return r||Wt.throwArgumentError("no matching event","signature",e),r}getError(e){if(Ge(e)){const n=mr(this.constructor,"getSighash");for(const i in this.errors){const o=this.errors[i];if(e===n(o))return this.errors[i]}Wt.throwArgumentError("no matching error","sighash",e)}if(e.indexOf("(")===-1){const n=e.trim(),i=Object.keys(this.errors).filter(o=>o.split("(")[0]===n);return i.length===0?Wt.throwArgumentError("no matching error","name",n):i.length>1&&Wt.throwArgumentError("multiple matching errors","name",n),this.errors[i[0]]}const r=this.errors[Nn.fromString(e).format()];return r||Wt.throwArgumentError("no matching error","signature",e),r}getSighash(e){if(typeof e=="string")try{e=this.getFunction(e)}catch(r){try{e=this.getError(e)}catch{throw r}}return mr(this.constructor,"getSighash")(e)}getEventTopic(e){return typeof e=="string"&&(e=this.getEvent(e)),mr(this.constructor,"getEventTopic")(e)}_decodeParams(e,r){return this._abiCoder.decode(e,r)}_encodeParams(e,r){return this._abiCoder.encode(e,r)}encodeDeploy(e){return this._encodeParams(this.deploy.inputs,e||[])}decodeErrorResult(e,r){typeof e=="string"&&(e=this.getError(e));const n=de(r);return ge(n.slice(0,4))!==this.getSighash(e)&&Wt.throwArgumentError(`data signature does not match error ${e.name}.`,"data",ge(n)),this._decodeParams(e.inputs,n.slice(4))}encodeErrorResult(e,r){return typeof e=="string"&&(e=this.getError(e)),ge(Dt([this.getSighash(e),this._encodeParams(e.inputs,r||[])]))}decodeFunctionData(e,r){typeof e=="string"&&(e=this.getFunction(e));const n=de(r);return ge(n.slice(0,4))!==this.getSighash(e)&&Wt.throwArgumentError(`data signature does not match function ${e.name}.`,"data",ge(n)),this._decodeParams(e.inputs,n.slice(4))}encodeFunctionData(e,r){return typeof e=="string"&&(e=this.getFunction(e)),ge(Dt([this.getSighash(e),this._encodeParams(e.inputs,r||[])]))}decodeFunctionResult(e,r){typeof e=="string"&&(e=this.getFunction(e));let n=de(r),i=null,o="",s=null,a=null,c=null;switch(n.length%this._abiCoder._getWordSize()){case 0:try{return this._abiCoder.decode(e.outputs,n)}catch{}break;case 4:{const l=ge(n.slice(0,4)),u=YM[l];if(u)s=this._abiCoder.decode(u.inputs,n.slice(4)),a=u.name,c=u.signature,u.reason&&(i=s[0]),a==="Error"?o=`; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(s[0])}`:a==="Panic"&&(o=`; VM Exception while processing transaction: reverted with panic code ${s[0]}`);else try{const f=this.getError(l);s=this._abiCoder.decode(f.inputs,n.slice(4)),a=f.name,c=f.format()}catch{}break}}return Wt.throwError("call revert exception"+o,Y.errors.CALL_EXCEPTION,{method:e.format(),data:ge(r),errorArgs:s,errorName:a,errorSignature:c,reason:i})}encodeFunctionResult(e,r){return typeof e=="string"&&(e=this.getFunction(e)),ge(this._abiCoder.encode(e.outputs,r||[]))}encodeFilterTopics(e,r){typeof e=="string"&&(e=this.getEvent(e)),r.length>e.inputs.length&&Wt.throwError("too many arguments for "+e.format(),Y.errors.UNEXPECTED_ARGUMENT,{argument:"values",value:r});let n=[];e.anonymous||n.push(this.getEventTopic(e));const i=(o,s)=>o.type==="string"?ho(s):o.type==="bytes"?Mt(ge(s)):(o.type==="address"&&this._abiCoder.encode(["address"],[s]),Ft(ge(s),32));for(r.forEach((o,s)=>{let a=e.inputs[s];if(!a.indexed){o!=null&&Wt.throwArgumentError("cannot filter non-indexed parameters; must be null","contract."+a.name,o);return}o==null?n.push(null):a.baseType==="array"||a.baseType==="tuple"?Wt.throwArgumentError("filtering with tuples or arrays not supported","contract."+a.name,o):Array.isArray(o)?n.push(o.map(c=>i(a,c))):n.push(i(a,o))});n.length&&n[n.length-1]===null;)n.pop();return n}encodeEventLog(e,r){typeof e=="string"&&(e=this.getEvent(e));const n=[],i=[],o=[];return e.anonymous||n.push(this.getEventTopic(e)),r.length!==e.inputs.length&&Wt.throwArgumentError("event arguments/values mismatch","values",r),e.inputs.forEach((s,a)=>{const c=r[a];if(s.indexed)if(s.type==="string")n.push(ho(c));else if(s.type==="bytes")n.push(Mt(c));else{if(s.baseType==="tuple"||s.baseType==="array")throw new Error("not implemented");n.push(this._abiCoder.encode([s.type],[c]))}else i.push(s),o.push(c)}),{data:this._abiCoder.encode(i,o),topics:n}}decodeEventLog(e,r,n){if(typeof e=="string"&&(e=this.getEvent(e)),n!=null&&!e.anonymous){let p=this.getEventTopic(e);(!Ge(n[0],32)||n[0].toLowerCase()!==p)&&Wt.throwError("fragment/topic mismatch",Y.errors.INVALID_ARGUMENT,{argument:"topics[0]",expected:p,value:n[0]}),n=n.slice(1)}let i=[],o=[],s=[];e.inputs.forEach((p,b)=>{p.indexed?p.type==="string"||p.type==="bytes"||p.baseType==="tuple"||p.baseType==="array"?(i.push(ar.fromObject({type:"bytes32",name:p.name})),s.push(!0)):(i.push(p),s.push(!1)):(o.push(p),s.push(!1))});let a=n!=null?this._abiCoder.decode(i,Dt(n)):null,c=this._abiCoder.decode(o,r,!0),l=[],u=0,f=0;e.inputs.forEach((p,b)=>{if(p.indexed)if(a==null)l[b]=new bf({_isIndexed:!0,hash:null});else if(s[b])l[b]=new bf({_isIndexed:!0,hash:a[f++]});else try{l[b]=a[f++]}catch(v){l[b]=v}else try{l[b]=c[u++]}catch(v){l[b]=v}if(p.name&&l[p.name]==null){const v=l[b];v instanceof Error?Object.defineProperty(l,p.name,{enumerable:!0,get:()=>{throw hw(`property ${JSON.stringify(p.name)}`,v)}}):l[p.name]=v}});for(let p=0;p<l.length;p++){const b=l[p];b instanceof Error&&Object.defineProperty(l,p,{enumerable:!0,get:()=>{throw hw(`index ${p}`,b)}})}return Object.freeze(l)}parseTransaction(e){let r=this.getFunction(e.data.substring(0,10).toLowerCase());return r?new Rb({args:this._abiCoder.decode(r.inputs,"0x"+e.data.substring(10)),functionFragment:r,name:r.name,signature:r.format(),sighash:this.getSighash(r),value:he.from(e.value||"0")}):null}parseLog(e){let r=this.getEvent(e.topics[0]);return!r||r.anonymous?null:new Db({eventFragment:r,name:r.name,signature:r.format(),topic:this.getEventTopic(r),args:this.decodeEventLog(r,e.data,e.topics)})}parseError(e){const r=ge(e);let n=this.getError(r.substring(0,10).toLowerCase());return n?new JM({args:this._abiCoder.decode(n.inputs,"0x"+r.substring(10)),errorFragment:n,name:n.name,signature:n.format(),sighash:this.getSighash(n)}):null}static isInterface(e){return!!(e&&e._isInterface)}}const XM="abstract-provider/5.6.0";var QM=window&&window.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};const eO=new Y(XM);class tO extends Os{static isForkEvent(e){return!!(e&&e._isForkEvent)}}class To{constructor(){eO.checkAbstract(new.target,To),se(this,"_isProvider",!0)}getFeeData(){return QM(this,void 0,void 0,function*(){const{block:e,gasPrice:r}=yield Kt({block:this.getBlock("latest"),gasPrice:this.getGasPrice().catch(o=>null)});let n=null,i=null;return e&&e.baseFeePerGas&&(i=he.from("1500000000"),n=e.baseFeePerGas.mul(2).add(i)),{maxFeePerGas:n,maxPriorityFeePerGas:i,gasPrice:r}})}addListener(e,r){return this.on(e,r)}removeListener(e,r){return this.off(e,r)}static isProvider(e){return!!(e&&e._isProvider)}}const rO="abstract-signer/5.6.0";var Sn=window&&window.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};const en=new Y(rO),nO=["accessList","ccipReadEnabled","chainId","customData","data","from","gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","nonce","to","type","value"],iO=[Y.errors.INSUFFICIENT_FUNDS,Y.errors.NONCE_EXPIRED,Y.errors.REPLACEMENT_UNDERPRICED];class Wo{constructor(){en.checkAbstract(new.target,Wo),se(this,"_isSigner",!0)}getBalance(e){return Sn(this,void 0,void 0,function*(){return this._checkProvider("getBalance"),yield this.provider.getBalance(this.getAddress(),e)})}getTransactionCount(e){return Sn(this,void 0,void 0,function*(){return this._checkProvider("getTransactionCount"),yield this.provider.getTransactionCount(this.getAddress(),e)})}estimateGas(e){return Sn(this,void 0,void 0,function*(){this._checkProvider("estimateGas");const r=yield Kt(this.checkTransaction(e));return yield this.provider.estimateGas(r)})}call(e,r){return Sn(this,void 0,void 0,function*(){this._checkProvider("call");const n=yield Kt(this.checkTransaction(e));return yield this.provider.call(n,r)})}sendTransaction(e){return Sn(this,void 0,void 0,function*(){this._checkProvider("sendTransaction");const r=yield this.populateTransaction(e),n=yield this.signTransaction(r);return yield this.provider.sendTransaction(n)})}getChainId(){return Sn(this,void 0,void 0,function*(){return this._checkProvider("getChainId"),(yield this.provider.getNetwork()).chainId})}getGasPrice(){return Sn(this,void 0,void 0,function*(){return this._checkProvider("getGasPrice"),yield this.provider.getGasPrice()})}getFeeData(){return Sn(this,void 0,void 0,function*(){return this._checkProvider("getFeeData"),yield this.provider.getFeeData()})}resolveName(e){return Sn(this,void 0,void 0,function*(){return this._checkProvider("resolveName"),yield this.provider.resolveName(e)})}checkTransaction(e){for(const n in e)nO.indexOf(n)===-1&&en.throwArgumentError("invalid transaction key: "+n,"transaction",e);const r=jt(e);return r.from==null?r.from=this.getAddress():r.from=Promise.all([Promise.resolve(r.from),this.getAddress()]).then(n=>(n[0].toLowerCase()!==n[1].toLowerCase()&&en.throwArgumentError("from address mismatch","transaction",e),n[0])),r}populateTransaction(e){return Sn(this,void 0,void 0,function*(){const r=yield Kt(this.checkTransaction(e));r.to!=null&&(r.to=Promise.resolve(r.to).then(i=>Sn(this,void 0,void 0,function*(){if(i==null)return null;const o=yield this.resolveName(i);return o==null&&en.throwArgumentError("provided ENS name resolves to null","tx.to",i),o})),r.to.catch(i=>{}));const n=r.maxFeePerGas!=null||r.maxPriorityFeePerGas!=null;if(r.gasPrice!=null&&(r.type===2||n)?en.throwArgumentError("eip-1559 transaction do not support gasPrice","transaction",e):(r.type===0||r.type===1)&&n&&en.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas","transaction",e),(r.type===2||r.type==null)&&r.maxFeePerGas!=null&&r.maxPriorityFeePerGas!=null)r.type=2;else if(r.type===0||r.type===1)r.gasPrice==null&&(r.gasPrice=this.getGasPrice());else{const i=yield this.getFeeData();if(r.type==null)if(i.maxFeePerGas!=null&&i.maxPriorityFeePerGas!=null)if(r.type=2,r.gasPrice!=null){const o=r.gasPrice;delete r.gasPrice,r.maxFeePerGas=o,r.maxPriorityFeePerGas=o}else r.maxFeePerGas==null&&(r.maxFeePerGas=i.maxFeePerGas),r.maxPriorityFeePerGas==null&&(r.maxPriorityFeePerGas=i.maxPriorityFeePerGas);else i.gasPrice!=null?(n&&en.throwError("network does not support EIP-1559",Y.errors.UNSUPPORTED_OPERATION,{operation:"populateTransaction"}),r.gasPrice==null&&(r.gasPrice=i.gasPrice),r.type=0):en.throwError("failed to get consistent fee data",Y.errors.UNSUPPORTED_OPERATION,{operation:"signer.getFeeData"});else r.type===2&&(r.maxFeePerGas==null&&(r.maxFeePerGas=i.maxFeePerGas),r.maxPriorityFeePerGas==null&&(r.maxPriorityFeePerGas=i.maxPriorityFeePerGas))}return r.nonce==null&&(r.nonce=this.getTransactionCount("pending")),r.gasLimit==null&&(r.gasLimit=this.estimateGas(r).catch(i=>{if(iO.indexOf(i.code)>=0)throw i;return en.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",Y.errors.UNPREDICTABLE_GAS_LIMIT,{error:i,tx:r})})),r.chainId==null?r.chainId=this.getChainId():r.chainId=Promise.all([Promise.resolve(r.chainId),this.getChainId()]).then(i=>(i[1]!==0&&i[0]!==i[1]&&en.throwArgumentError("chainId address mismatch","transaction",e),i[0])),yield Kt(r)})}_checkProvider(e){this.provider||en.throwError("missing provider",Y.errors.UNSUPPORTED_OPERATION,{operation:e||"_checkProvider"})}static isSigner(e){return!!(e&&e._isSigner)}}class nu extends Wo{constructor(e,r){en.checkNew(new.target,nu),super(),se(this,"address",e),se(this,"provider",r||null)}getAddress(){return Promise.resolve(this.address)}_fail(e,r){return Promise.resolve().then(()=>{en.throwError(e,Y.errors.UNSUPPORTED_OPERATION,{operation:r})})}signMessage(e){return this._fail("VoidSigner cannot sign messages","signMessage")}signTransaction(e){return this._fail("VoidSigner cannot sign transactions","signTransaction")}_signTypedData(e,r,n){return this._fail("VoidSigner cannot sign typed data","signTypedData")}connect(e){return new nu(this.address,e)}}var Ou=Bb;function Bb(t,e){if(!t)throw new Error(e||"Assertion failed")}Bb.equal=function(e,r,n){if(e!=r)throw new Error(n||"Assertion failed: "+e+" != "+r)};var oO=Ns(function(t){typeof Object.create=="function"?t.exports=function(r,n){n&&(r.super_=n,r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(r,n){if(n){r.super_=n;var i=function(){};i.prototype=n.prototype,r.prototype=new i,r.prototype.constructor=r}}}),sO=Ns(function(t){try{var e=null;if(typeof e.inherits!="function")throw"";t.exports=e.inherits}catch{t.exports=oO}}),aO=sO;function cO(t,e){return(t.charCodeAt(e)&64512)!==55296||e<0||e+1>=t.length?!1:(t.charCodeAt(e+1)&64512)===56320}function lO(t,e){if(Array.isArray(t))return t.slice();if(!t)return[];var r=[];if(typeof t=="string")if(e){if(e==="hex")for(t=t.replace(/[^a-z0-9]+/gi,""),t.length%2!==0&&(t="0"+t),i=0;i<t.length;i+=2)r.push(parseInt(t[i]+t[i+1],16))}else for(var n=0,i=0;i<t.length;i++){var o=t.charCodeAt(i);o<128?r[n++]=o:o<2048?(r[n++]=o>>6|192,r[n++]=o&63|128):cO(t,i)?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),r[n++]=o>>18|240,r[n++]=o>>12&63|128,r[n++]=o>>6&63|128,r[n++]=o&63|128):(r[n++]=o>>12|224,r[n++]=o>>6&63|128,r[n++]=o&63|128)}else for(i=0;i<t.length;i++)r[i]=t[i]|0;return r}var uO=lO;function fO(t){for(var e="",r=0;r<t.length;r++)e+=Ub(t[r].toString(16));return e}var dO=fO;function Lb(t){var e=t>>>24|t>>>8&65280|t<<8&16711680|(t&255)<<24;return e>>>0}var hO=Lb;function pO(t,e){for(var r="",n=0;n<t.length;n++){var i=t[n];e==="little"&&(i=Lb(i)),r+=Fb(i.toString(16))}return r}var gO=pO;function Ub(t){return t.length===1?"0"+t:t}var mO=Ub;function Fb(t){return t.length===7?"0"+t:t.length===6?"00"+t:t.length===5?"000"+t:t.length===4?"0000"+t:t.length===3?"00000"+t:t.length===2?"000000"+t:t.length===1?"0000000"+t:t}var wO=Fb;function bO(t,e,r,n){var i=r-e;Ou(i%4===0);for(var o=new Array(i/4),s=0,a=e;s<o.length;s++,a+=4){var c;n==="big"?c=t[a]<<24|t[a+1]<<16|t[a+2]<<8|t[a+3]:c=t[a+3]<<24|t[a+2]<<16|t[a+1]<<8|t[a],o[s]=c>>>0}return o}var yO=bO;function vO(t,e){for(var r=new Array(t.length*4),n=0,i=0;n<t.length;n++,i+=4){var o=t[n];e==="big"?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=o&255):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,r[i+1]=o>>>8&255,r[i]=o&255)}return r}var EO=vO;function xO(t,e){return t>>>e|t<<32-e}var _O=xO;function CO(t,e){return t<<e|t>>>32-e}var AO=CO;function SO(t,e){return t+e>>>0}var PO=SO;function kO(t,e,r){return t+e+r>>>0}var TO=kO;function IO(t,e,r,n){return t+e+r+n>>>0}var $O=IO;function NO(t,e,r,n,i){return t+e+r+n+i>>>0}var MO=NO;function OO(t,e,r,n){var i=t[e],o=t[e+1],s=n+o>>>0,a=(s<n?1:0)+r+i;t[e]=a>>>0,t[e+1]=s}var DO=OO;function RO(t,e,r,n){var i=e+n>>>0,o=(i<e?1:0)+t+r;return o>>>0}var BO=RO;function LO(t,e,r,n){var i=e+n;return i>>>0}var UO=LO;function FO(t,e,r,n,i,o,s,a){var c=0,l=e;l=l+n>>>0,c+=l<e?1:0,l=l+o>>>0,c+=l<o?1:0,l=l+a>>>0,c+=l<a?1:0;var u=t+r+i+s+c;return u>>>0}var jO=FO;function WO(t,e,r,n,i,o,s,a){var c=e+n+o+a;return c>>>0}var zO=WO;function HO(t,e,r,n,i,o,s,a,c,l){var u=0,f=e;f=f+n>>>0,u+=f<e?1:0,f=f+o>>>0,u+=f<o?1:0,f=f+a>>>0,u+=f<a?1:0,f=f+l>>>0,u+=f<l?1:0;var p=t+r+i+s+c+u;return p>>>0}var qO=HO;function GO(t,e,r,n,i,o,s,a,c,l){var u=e+n+o+a+l;return u>>>0}var VO=GO;function KO(t,e,r){var n=e<<32-r|t>>>r;return n>>>0}var ZO=KO;function JO(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}var YO=JO;function XO(t,e,r){return t>>>r}var QO=XO;function eD(t,e,r){var n=t<<32-r|e>>>r;return n>>>0}var tD=eD,je={inherits:aO,toArray:uO,toHex:dO,htonl:hO,toHex32:gO,zero2:mO,zero8:wO,join32:yO,split32:EO,rotr32:_O,rotl32:AO,sum32:PO,sum32_3:TO,sum32_4:$O,sum32_5:MO,sum64:DO,sum64_hi:BO,sum64_lo:UO,sum64_4_hi:jO,sum64_4_lo:zO,sum64_5_hi:qO,sum64_5_lo:VO,rotr64_hi:ZO,rotr64_lo:YO,shr64_hi:QO,shr64_lo:tD};function vd(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var rD=vd;vd.prototype.update=function(e,r){if(e=je.toArray(e,r),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){e=this.pending;var n=e.length%this._delta8;this.pending=e.slice(e.length-n,e.length),this.pending.length===0&&(this.pending=null),e=je.join32(e,0,e.length-n,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this};vd.prototype.digest=function(e){return this.update(this._pad()),Ou(this.pending===null),this._digest(e)};vd.prototype._pad=function(){var e=this.pendingTotal,r=this._delta8,n=r-(e+this.padLength)%r,i=new Array(n+this.padLength);i[0]=128;for(var o=1;o<n;o++)i[o]=0;if(e<<=3,this.endian==="big"){for(var s=8;s<this.padLength;s++)i[o++]=0;i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=e>>>24&255,i[o++]=e>>>16&255,i[o++]=e>>>8&255,i[o++]=e&255}else for(i[o++]=e&255,i[o++]=e>>>8&255,i[o++]=e>>>16&255,i[o++]=e>>>24&255,i[o++]=0,i[o++]=0,i[o++]=0,i[o++]=0,s=8;s<this.padLength;s++)i[o++]=0;return i};var Du={BlockHash:rD},li=je.rotr32;function nD(t,e,r,n){if(t===0)return jb(e,r,n);if(t===1||t===3)return zb(e,r,n);if(t===2)return Wb(e,r,n)}var iD=nD;function jb(t,e,r){return t&e^~t&r}var oD=jb;function Wb(t,e,r){return t&e^t&r^e&r}var sD=Wb;function zb(t,e,r){return t^e^r}var aD=zb;function cD(t){return li(t,2)^li(t,13)^li(t,22)}var lD=cD;function uD(t){return li(t,6)^li(t,11)^li(t,25)}var fD=uD;function dD(t){return li(t,7)^li(t,18)^t>>>3}var hD=dD;function pD(t){return li(t,17)^li(t,19)^t>>>10}var gD=pD,Rs={ft_1:iD,ch32:oD,maj32:sD,p32:aD,s0_256:lD,s1_256:fD,g0_256:hD,g1_256:gD},Th=je.rotl32,Dc=je.sum32,mD=je.sum32_5,wD=Rs.ft_1,Hb=Du.BlockHash,bD=[1518500249,1859775393,2400959708,3395469782];function yi(){if(!(this instanceof yi))return new yi;Hb.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}je.inherits(yi,Hb);var yD=yi;yi.blockSize=512;yi.outSize=160;yi.hmacStrength=80;yi.padLength=64;yi.prototype._update=function(e,r){for(var n=this.W,i=0;i<16;i++)n[i]=e[r+i];for(;i<n.length;i++)n[i]=Th(n[i-3]^n[i-8]^n[i-14]^n[i-16],1);var o=this.h[0],s=this.h[1],a=this.h[2],c=this.h[3],l=this.h[4];for(i=0;i<n.length;i++){var u=~~(i/20),f=mD(Th(o,5),wD(u,s,a,c),l,n[i],bD[u]);l=c,c=a,a=Th(s,30),s=o,o=f}this.h[0]=Dc(this.h[0],o),this.h[1]=Dc(this.h[1],s),this.h[2]=Dc(this.h[2],a),this.h[3]=Dc(this.h[3],c),this.h[4]=Dc(this.h[4],l)};yi.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h,"big"):je.split32(this.h,"big")};var Pn=je.sum32,vD=je.sum32_4,ED=je.sum32_5,xD=Rs.ch32,_D=Rs.maj32,CD=Rs.s0_256,AD=Rs.s1_256,SD=Rs.g0_256,PD=Rs.g1_256,qb=Du.BlockHash,kD=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function vi(){if(!(this instanceof vi))return new vi;qb.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=kD,this.W=new Array(64)}je.inherits(vi,qb);var j2=vi;vi.blockSize=512;vi.outSize=256;vi.hmacStrength=192;vi.padLength=64;vi.prototype._update=function(e,r){for(var n=this.W,i=0;i<16;i++)n[i]=e[r+i];for(;i<n.length;i++)n[i]=vD(PD(n[i-2]),n[i-7],SD(n[i-15]),n[i-16]);var o=this.h[0],s=this.h[1],a=this.h[2],c=this.h[3],l=this.h[4],u=this.h[5],f=this.h[6],p=this.h[7];for(Ou(this.k.length===n.length),i=0;i<n.length;i++){var b=ED(p,AD(l),xD(l,u,f),this.k[i],n[i]),v=Pn(CD(o),_D(o,s,a));p=f,f=u,u=l,l=Pn(c,b),c=a,a=s,s=o,o=Pn(b,v)}this.h[0]=Pn(this.h[0],o),this.h[1]=Pn(this.h[1],s),this.h[2]=Pn(this.h[2],a),this.h[3]=Pn(this.h[3],c),this.h[4]=Pn(this.h[4],l),this.h[5]=Pn(this.h[5],u),this.h[6]=Pn(this.h[6],f),this.h[7]=Pn(this.h[7],p)};vi.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h,"big"):je.split32(this.h,"big")};function Hi(){if(!(this instanceof Hi))return new Hi;j2.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}je.inherits(Hi,j2);var TD=Hi;Hi.blockSize=512;Hi.outSize=224;Hi.hmacStrength=192;Hi.padLength=64;Hi.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h.slice(0,7),"big"):je.split32(this.h.slice(0,7),"big")};var ui=je.rotr64_hi,fi=je.rotr64_lo,Gb=je.shr64_hi,Vb=je.shr64_lo,to=je.sum64,Ih=je.sum64_hi,$h=je.sum64_lo,ID=je.sum64_4_hi,$D=je.sum64_4_lo,ND=je.sum64_5_hi,MD=je.sum64_5_lo,Kb=Du.BlockHash,OD=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function Un(){if(!(this instanceof Un))return new Un;Kb.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=OD,this.W=new Array(160)}je.inherits(Un,Kb);var W2=Un;Un.blockSize=1024;Un.outSize=512;Un.hmacStrength=192;Un.padLength=128;Un.prototype._prepareBlock=function(e,r){for(var n=this.W,i=0;i<32;i++)n[i]=e[r+i];for(;i<n.length;i+=2){var o=qD(n[i-4],n[i-3]),s=GD(n[i-4],n[i-3]),a=n[i-14],c=n[i-13],l=zD(n[i-30],n[i-29]),u=HD(n[i-30],n[i-29]),f=n[i-32],p=n[i-31];n[i]=ID(o,s,a,c,l,u,f,p),n[i+1]=$D(o,s,a,c,l,u,f,p)}};Un.prototype._update=function(e,r){this._prepareBlock(e,r);var n=this.W,i=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4],l=this.h[5],u=this.h[6],f=this.h[7],p=this.h[8],b=this.h[9],v=this.h[10],A=this.h[11],_=this.h[12],N=this.h[13],P=this.h[14],M=this.h[15];Ou(this.k.length===n.length);for(var D=0;D<n.length;D+=2){var R=P,W=M,w=jD(p,b),H=WD(p,b),X=DD(p,b,v,A,_),te=RD(p,b,v,A,_,N),L=this.k[D],h=this.k[D+1],C=n[D],I=n[D+1],$=ND(R,W,w,H,X,te,L,h,C,I),O=MD(R,W,w,H,X,te,L,h,C,I);R=UD(i,o),W=FD(i,o),w=BD(i,o,s,a,c),H=LD(i,o,s,a,c,l);var j=Ih(R,W,w,H),z=$h(R,W,w,H);P=_,M=N,_=v,N=A,v=p,A=b,p=Ih(u,f,$,O),b=$h(f,f,$,O),u=c,f=l,c=s,l=a,s=i,a=o,i=Ih($,O,j,z),o=$h($,O,j,z)}to(this.h,0,i,o),to(this.h,2,s,a),to(this.h,4,c,l),to(this.h,6,u,f),to(this.h,8,p,b),to(this.h,10,v,A),to(this.h,12,_,N),to(this.h,14,P,M)};Un.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h,"big"):je.split32(this.h,"big")};function DD(t,e,r,n,i){var o=t&r^~t&i;return o<0&&(o+=4294967296),o}function RD(t,e,r,n,i,o){var s=e&n^~e&o;return s<0&&(s+=4294967296),s}function BD(t,e,r,n,i){var o=t&r^t&i^r&i;return o<0&&(o+=4294967296),o}function LD(t,e,r,n,i,o){var s=e&n^e&o^n&o;return s<0&&(s+=4294967296),s}function UD(t,e){var r=ui(t,e,28),n=ui(e,t,2),i=ui(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function FD(t,e){var r=fi(t,e,28),n=fi(e,t,2),i=fi(e,t,7),o=r^n^i;return o<0&&(o+=4294967296),o}function jD(t,e){var r=ui(t,e,14),n=ui(t,e,18),i=ui(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function WD(t,e){var r=fi(t,e,14),n=fi(t,e,18),i=fi(e,t,9),o=r^n^i;return o<0&&(o+=4294967296),o}function zD(t,e){var r=ui(t,e,1),n=ui(t,e,8),i=Gb(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function HD(t,e){var r=fi(t,e,1),n=fi(t,e,8),i=Vb(t,e,7),o=r^n^i;return o<0&&(o+=4294967296),o}function qD(t,e){var r=ui(t,e,19),n=ui(e,t,29),i=Gb(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}function GD(t,e){var r=fi(t,e,19),n=fi(e,t,29),i=Vb(t,e,6),o=r^n^i;return o<0&&(o+=4294967296),o}function qi(){if(!(this instanceof qi))return new qi;W2.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}je.inherits(qi,W2);var VD=qi;qi.blockSize=1024;qi.outSize=384;qi.hmacStrength=192;qi.padLength=128;qi.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h.slice(0,12),"big"):je.split32(this.h.slice(0,12),"big")};var KD=yD,ZD=TD,JD=j2,YD=VD,XD=W2,QD={sha1:KD,sha224:ZD,sha256:JD,sha384:YD,sha512:XD},n0=je.rotl32,pw=je.sum32,Rc=je.sum32_3,gw=je.sum32_4,Zb=Du.BlockHash;function Ei(){if(!(this instanceof Ei))return new Ei;Zb.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}je.inherits(Ei,Zb);var eR=Ei;Ei.blockSize=512;Ei.outSize=160;Ei.hmacStrength=192;Ei.padLength=64;Ei.prototype._update=function(e,r){for(var n=this.h[0],i=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],c=n,l=i,u=o,f=s,p=a,b=0;b<80;b++){var v=pw(n0(gw(n,mw(b,i,o,s),e[nR[b]+r],tR(b)),oR[b]),a);n=a,a=s,s=n0(o,10),o=i,i=v,v=pw(n0(gw(c,mw(79-b,l,u,f),e[iR[b]+r],rR(b)),sR[b]),p),c=p,p=f,f=n0(u,10),u=l,l=v}v=Rc(this.h[1],o,f),this.h[1]=Rc(this.h[2],s,p),this.h[2]=Rc(this.h[3],a,c),this.h[3]=Rc(this.h[4],n,l),this.h[4]=Rc(this.h[0],i,u),this.h[0]=v};Ei.prototype._digest=function(e){return e==="hex"?je.toHex32(this.h,"little"):je.split32(this.h,"little")};function mw(t,e,r,n){return t<=15?e^r^n:t<=31?e&r|~e&n:t<=47?(e|~r)^n:t<=63?e&n|r&~n:e^(r|~n)}function tR(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function rR(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}var nR=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],iR=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],oR=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],sR=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],aR={ripemd160:eR};function Va(t,e,r){if(!(this instanceof Va))return new Va(t,e,r);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(je.toArray(e,r))}var cR=Va;Va.prototype._init=function(e){e.length>this.blockSize&&(e=new this.Hash().update(e).digest()),Ou(e.length<=this.blockSize);for(var r=e.length;r<this.blockSize;r++)e.push(0);for(r=0;r<e.length;r++)e[r]^=54;for(this.inner=new this.Hash().update(e),r=0;r<e.length;r++)e[r]^=106;this.outer=new this.Hash().update(e)};Va.prototype.update=function(e,r){return this.inner.update(e,r),this};Va.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)};var zr=Ns(function(t,e){var r=e;r.utils=je,r.common=Du,r.sha=QD,r.ripemd=aR,r.hmac=cR,r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160});function uc(t,e,r){return r={path:e,exports:{},require:function(n,i){return lR(n,i??r.path)}},t(r,r.exports),r.exports}function lR(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var z2=Jb;function Jb(t,e){if(!t)throw new Error(e||"Assertion failed")}Jb.equal=function(e,r,n){if(e!=r)throw new Error(n||"Assertion failed: "+e+" != "+r)};var On=uc(function(t,e){var r=e;function n(s,a){if(Array.isArray(s))return s.slice();if(!s)return[];var c=[];if(typeof s!="string"){for(var l=0;l<s.length;l++)c[l]=s[l]|0;return c}if(a==="hex"){s=s.replace(/[^a-z0-9]+/gi,""),s.length%2!==0&&(s="0"+s);for(var l=0;l<s.length;l+=2)c.push(parseInt(s[l]+s[l+1],16))}else for(var l=0;l<s.length;l++){var u=s.charCodeAt(l),f=u>>8,p=u&255;f?c.push(f,p):c.push(p)}return c}r.toArray=n;function i(s){return s.length===1?"0"+s:s}r.zero2=i;function o(s){for(var a="",c=0;c<s.length;c++)a+=i(s[c].toString(16));return a}r.toHex=o,r.encode=function(a,c){return c==="hex"?o(a):a}}),sn=uc(function(t,e){var r=e;r.assert=z2,r.toArray=On.toArray,r.zero2=On.zero2,r.toHex=On.toHex,r.encode=On.encode;function n(c,l,u){var f=new Array(Math.max(c.bitLength(),u)+1);f.fill(0);for(var p=1<<l+1,b=c.clone(),v=0;v<f.length;v++){var A,_=b.andln(p-1);b.isOdd()?(_>(p>>1)-1?A=(p>>1)-_:A=_,b.isubn(A)):A=0,f[v]=A,b.iushrn(1)}return f}r.getNAF=n;function i(c,l){var u=[[],[]];c=c.clone(),l=l.clone();for(var f=0,p=0,b;c.cmpn(-f)>0||l.cmpn(-p)>0;){var v=c.andln(3)+f&3,A=l.andln(3)+p&3;v===3&&(v=-1),A===3&&(A=-1);var _;v&1?(b=c.andln(7)+f&7,(b===3||b===5)&&A===2?_=-v:_=v):_=0,u[0].push(_);var N;A&1?(b=l.andln(7)+p&7,(b===3||b===5)&&v===2?N=-A:N=A):N=0,u[1].push(N),2*f===_+1&&(f=1-f),2*p===N+1&&(p=1-p),c.iushrn(1),l.iushrn(1)}return u}r.getJSF=i;function o(c,l,u){var f="_"+l;c.prototype[l]=function(){return this[f]!==void 0?this[f]:this[f]=u.call(this)}}r.cachedProperty=o;function s(c){return typeof c=="string"?r.toArray(c,"hex"):c}r.parseBytes=s;function a(c){return new ze(c,"hex","le")}r.intFromLE=a}),yf=sn.getNAF,uR=sn.getJSF,vf=sn.assert;function zo(t,e){this.type=t,this.p=new ze(e.p,16),this.red=e.prime?ze.red(e.prime):ze.mont(this.p),this.zero=new ze(0).toRed(this.red),this.one=new ze(1).toRed(this.red),this.two=new ze(2).toRed(this.red),this.n=e.n&&new ze(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Bs=zo;zo.prototype.point=function(){throw new Error("Not implemented")};zo.prototype.validate=function(){throw new Error("Not implemented")};zo.prototype._fixedNafMul=function(e,r){vf(e.precomputed);var n=e._getDoubles(),i=yf(r,1,this._bitLength),o=(1<<n.step+1)-(n.step%2===0?2:1);o/=3;var s=[],a,c;for(a=0;a<i.length;a+=n.step){c=0;for(var l=a+n.step-1;l>=a;l--)c=(c<<1)+i[l];s.push(c)}for(var u=this.jpoint(null,null,null),f=this.jpoint(null,null,null),p=o;p>0;p--){for(a=0;a<s.length;a++)c=s[a],c===p?f=f.mixedAdd(n.points[a]):c===-p&&(f=f.mixedAdd(n.points[a].neg()));u=u.add(f)}return u.toP()};zo.prototype._wnafMul=function(e,r){var n=4,i=e._getNAFPoints(n);n=i.wnd;for(var o=i.points,s=yf(r,n,this._bitLength),a=this.jpoint(null,null,null),c=s.length-1;c>=0;c--){for(var l=0;c>=0&&s[c]===0;c--)l++;if(c>=0&&l++,a=a.dblp(l),c<0)break;var u=s[c];vf(u!==0),e.type==="affine"?u>0?a=a.mixedAdd(o[u-1>>1]):a=a.mixedAdd(o[-u-1>>1].neg()):u>0?a=a.add(o[u-1>>1]):a=a.add(o[-u-1>>1].neg())}return e.type==="affine"?a.toP():a};zo.prototype._wnafMulAdd=function(e,r,n,i,o){var s=this._wnafT1,a=this._wnafT2,c=this._wnafT3,l=0,u,f,p;for(u=0;u<i;u++){p=r[u];var b=p._getNAFPoints(e);s[u]=b.wnd,a[u]=b.points}for(u=i-1;u>=1;u-=2){var v=u-1,A=u;if(s[v]!==1||s[A]!==1){c[v]=yf(n[v],s[v],this._bitLength),c[A]=yf(n[A],s[A],this._bitLength),l=Math.max(c[v].length,l),l=Math.max(c[A].length,l);continue}var _=[r[v],null,null,r[A]];r[v].y.cmp(r[A].y)===0?(_[1]=r[v].add(r[A]),_[2]=r[v].toJ().mixedAdd(r[A].neg())):r[v].y.cmp(r[A].y.redNeg())===0?(_[1]=r[v].toJ().mixedAdd(r[A]),_[2]=r[v].add(r[A].neg())):(_[1]=r[v].toJ().mixedAdd(r[A]),_[2]=r[v].toJ().mixedAdd(r[A].neg()));var N=[-3,-1,-5,-7,0,7,5,1,3],P=uR(n[v],n[A]);for(l=Math.max(P[0].length,l),c[v]=new Array(l),c[A]=new Array(l),f=0;f<l;f++){var M=P[0][f]|0,D=P[1][f]|0;c[v][f]=N[(M+1)*3+(D+1)],c[A][f]=0,a[v]=_}}var R=this.jpoint(null,null,null),W=this._wnafT4;for(u=l;u>=0;u--){for(var w=0;u>=0;){var H=!0;for(f=0;f<i;f++)W[f]=c[f][u]|0,W[f]!==0&&(H=!1);if(!H)break;w++,u--}if(u>=0&&w++,R=R.dblp(w),u<0)break;for(f=0;f<i;f++){var X=W[f];X!==0&&(X>0?p=a[f][X-1>>1]:X<0&&(p=a[f][-X-1>>1].neg()),p.type==="affine"?R=R.mixedAdd(p):R=R.add(p))}}for(u=0;u<i;u++)a[u]=null;return o?R:R.toP()};function xn(t,e){this.curve=t,this.type=e,this.precomputed=null}zo.BasePoint=xn;xn.prototype.eq=function(){throw new Error("Not implemented")};xn.prototype.validate=function(){return this.curve.validate(this)};zo.prototype.decodePoint=function(e,r){e=sn.toArray(e,r);var n=this.p.byteLength();if((e[0]===4||e[0]===6||e[0]===7)&&e.length-1===2*n){e[0]===6?vf(e[e.length-1]%2===0):e[0]===7&&vf(e[e.length-1]%2===1);var i=this.point(e.slice(1,1+n),e.slice(1+n,1+2*n));return i}else if((e[0]===2||e[0]===3)&&e.length-1===n)return this.pointFromX(e.slice(1,1+n),e[0]===3);throw new Error("Unknown point format")};xn.prototype.encodeCompressed=function(e){return this.encode(e,!0)};xn.prototype._encode=function(e){var r=this.curve.p.byteLength(),n=this.getX().toArray("be",r);return e?[this.getY().isEven()?2:3].concat(n):[4].concat(n,this.getY().toArray("be",r))};xn.prototype.encode=function(e,r){return sn.encode(this._encode(r),e)};xn.prototype.precompute=function(e){if(this.precomputed)return this;var r={doubles:null,naf:null,beta:null};return r.naf=this._getNAFPoints(8),r.doubles=this._getDoubles(4,e),r.beta=this._getBeta(),this.precomputed=r,this};xn.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var r=this.precomputed.doubles;return r?r.points.length>=Math.ceil((e.bitLength()+1)/r.step):!1};xn.prototype._getDoubles=function(e,r){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var n=[this],i=this,o=0;o<r;o+=e){for(var s=0;s<e;s++)i=i.dbl();n.push(i)}return{step:e,points:n}};xn.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var r=[this],n=(1<<e)-1,i=n===1?null:this.dbl(),o=1;o<n;o++)r[o]=r[o-1].add(i);return{wnd:e,points:r}};xn.prototype._getBeta=function(){return null};xn.prototype.dblp=function(e){for(var r=this,n=0;n<e;n++)r=r.dbl();return r};var H2=uc(function(t){typeof Object.create=="function"?t.exports=function(r,n){n&&(r.super_=n,r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(r,n){if(n){r.super_=n;var i=function(){};i.prototype=n.prototype,r.prototype=new i,r.prototype.constructor=r}}}),fR=sn.assert;function _n(t){Bs.call(this,"short",t),this.a=new ze(t.a,16).toRed(this.red),this.b=new ze(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=this.a.fromRed().cmpn(0)===0,this.threeA=this.a.fromRed().sub(this.p).cmpn(-3)===0,this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}H2(_n,Bs);var dR=_n;_n.prototype._getEndomorphism=function(e){if(!(!this.zeroA||!this.g||!this.n||this.p.modn(3)!==1)){var r,n;if(e.beta)r=new ze(e.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);r=i[0].cmp(i[1])<0?i[0]:i[1],r=r.toRed(this.red)}if(e.lambda)n=new ze(e.lambda,16);else{var o=this._getEndoRoots(this.n);this.g.mul(o[0]).x.cmp(this.g.x.redMul(r))===0?n=o[0]:(n=o[1],fR(this.g.mul(n).x.cmp(this.g.x.redMul(r))===0))}var s;return e.basis?s=e.basis.map(function(a){return{a:new ze(a.a,16),b:new ze(a.b,16)}}):s=this._getEndoBasis(n),{beta:r,lambda:n,basis:s}}};_n.prototype._getEndoRoots=function(e){var r=e===this.p?this.red:ze.mont(e),n=new ze(2).toRed(r).redInvm(),i=n.redNeg(),o=new ze(3).toRed(r).redNeg().redSqrt().redMul(n),s=i.redAdd(o).fromRed(),a=i.redSub(o).fromRed();return[s,a]};_n.prototype._getEndoBasis=function(e){for(var r=this.n.ushrn(Math.floor(this.n.bitLength()/2)),n=e,i=this.n.clone(),o=new ze(1),s=new ze(0),a=new ze(0),c=new ze(1),l,u,f,p,b,v,A,_=0,N,P;n.cmpn(0)!==0;){var M=i.div(n);N=i.sub(M.mul(n)),P=a.sub(M.mul(o));var D=c.sub(M.mul(s));if(!f&&N.cmp(r)<0)l=A.neg(),u=o,f=N.neg(),p=P;else if(f&&++_===2)break;A=N,i=n,n=N,a=o,o=P,c=s,s=D}b=N.neg(),v=P;var R=f.sqr().add(p.sqr()),W=b.sqr().add(v.sqr());return W.cmp(R)>=0&&(b=l,v=u),f.negative&&(f=f.neg(),p=p.neg()),b.negative&&(b=b.neg(),v=v.neg()),[{a:f,b:p},{a:b,b:v}]};_n.prototype._endoSplit=function(e){var r=this.endo.basis,n=r[0],i=r[1],o=i.b.mul(e).divRound(this.n),s=n.b.neg().mul(e).divRound(this.n),a=o.mul(n.a),c=s.mul(i.a),l=o.mul(n.b),u=s.mul(i.b),f=e.sub(a).sub(c),p=l.add(u).neg();return{k1:f,k2:p}};_n.prototype.pointFromX=function(e,r){e=new ze(e,16),e.red||(e=e.toRed(this.red));var n=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),i=n.redSqrt();if(i.redSqr().redSub(n).cmp(this.zero)!==0)throw new Error("invalid point");var o=i.fromRed().isOdd();return(r&&!o||!r&&o)&&(i=i.redNeg()),this.point(e,i)};_n.prototype.validate=function(e){if(e.inf)return!0;var r=e.x,n=e.y,i=this.a.redMul(r),o=r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);return n.redSqr().redISub(o).cmpn(0)===0};_n.prototype._endoWnafMulAdd=function(e,r,n){for(var i=this._endoWnafT1,o=this._endoWnafT2,s=0;s<e.length;s++){var a=this._endoSplit(r[s]),c=e[s],l=c._getBeta();a.k1.negative&&(a.k1.ineg(),c=c.neg(!0)),a.k2.negative&&(a.k2.ineg(),l=l.neg(!0)),i[s*2]=c,i[s*2+1]=l,o[s*2]=a.k1,o[s*2+1]=a.k2}for(var u=this._wnafMulAdd(1,i,o,s*2,n),f=0;f<s*2;f++)i[f]=null,o[f]=null;return u};function wr(t,e,r,n){Bs.BasePoint.call(this,t,"affine"),e===null&&r===null?(this.x=null,this.y=null,this.inf=!0):(this.x=new ze(e,16),this.y=new ze(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}H2(wr,Bs.BasePoint);_n.prototype.point=function(e,r,n){return new wr(this,e,r,n)};_n.prototype.pointFromJSON=function(e,r){return wr.fromJSON(this,e,r)};wr.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var r=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var n=this.curve,i=function(o){return n.point(o.x.redMul(n.endo.beta),o.y)};e.beta=r,r.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(i)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(i)}}}return r}};wr.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]};wr.fromJSON=function(e,r,n){typeof r=="string"&&(r=JSON.parse(r));var i=e.point(r[0],r[1],n);if(!r[2])return i;function o(a){return e.point(a[0],a[1],n)}var s=r[2];return i.precomputed={beta:null,doubles:s.doubles&&{step:s.doubles.step,points:[i].concat(s.doubles.points.map(o))},naf:s.naf&&{wnd:s.naf.wnd,points:[i].concat(s.naf.points.map(o))}},i};wr.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"};wr.prototype.isInfinity=function(){return this.inf};wr.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(this.x.cmp(e.x)===0)return this.curve.point(null,null);var r=this.y.redSub(e.y);r.cmpn(0)!==0&&(r=r.redMul(this.x.redSub(e.x).redInvm()));var n=r.redSqr().redISub(this.x).redISub(e.x),i=r.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n,i)};wr.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(e.cmpn(0)===0)return this.curve.point(null,null);var r=this.curve.a,n=this.x.redSqr(),i=e.redInvm(),o=n.redAdd(n).redIAdd(n).redIAdd(r).redMul(i),s=o.redSqr().redISub(this.x.redAdd(this.x)),a=o.redMul(this.x.redSub(s)).redISub(this.y);return this.curve.point(s,a)};wr.prototype.getX=function(){return this.x.fromRed()};wr.prototype.getY=function(){return this.y.fromRed()};wr.prototype.mul=function(e){return e=new ze(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)};wr.prototype.mulAdd=function(e,r,n){var i=[this,r],o=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(i,o):this.curve._wnafMulAdd(1,i,o,2)};wr.prototype.jmulAdd=function(e,r,n){var i=[this,r],o=[e,n];return this.curve.endo?this.curve._endoWnafMulAdd(i,o,!0):this.curve._wnafMulAdd(1,i,o,2,!0)};wr.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||this.x.cmp(e.x)===0&&this.y.cmp(e.y)===0)};wr.prototype.neg=function(e){if(this.inf)return this;var r=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var n=this.precomputed,i=function(o){return o.neg()};r.precomputed={naf:n.naf&&{wnd:n.naf.wnd,points:n.naf.points.map(i)},doubles:n.doubles&&{step:n.doubles.step,points:n.doubles.points.map(i)}}}return r};wr.prototype.toJ=function(){if(this.inf)return this.curve.jpoint(null,null,null);var e=this.curve.jpoint(this.x,this.y,this.curve.one);return e};function xr(t,e,r,n){Bs.BasePoint.call(this,t,"jacobian"),e===null&&r===null&&n===null?(this.x=this.curve.one,this.y=this.curve.one,this.z=new ze(0)):(this.x=new ze(e,16),this.y=new ze(r,16),this.z=new ze(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}H2(xr,Bs.BasePoint);_n.prototype.jpoint=function(e,r,n){return new xr(this,e,r,n)};xr.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),r=e.redSqr(),n=this.x.redMul(r),i=this.y.redMul(r).redMul(e);return this.curve.point(n,i)};xr.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)};xr.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var r=e.z.redSqr(),n=this.z.redSqr(),i=this.x.redMul(r),o=e.x.redMul(n),s=this.y.redMul(r.redMul(e.z)),a=e.y.redMul(n.redMul(this.z)),c=i.redSub(o),l=s.redSub(a);if(c.cmpn(0)===0)return l.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var u=c.redSqr(),f=u.redMul(c),p=i.redMul(u),b=l.redSqr().redIAdd(f).redISub(p).redISub(p),v=l.redMul(p.redISub(b)).redISub(s.redMul(f)),A=this.z.redMul(e.z).redMul(c);return this.curve.jpoint(b,v,A)};xr.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var r=this.z.redSqr(),n=this.x,i=e.x.redMul(r),o=this.y,s=e.y.redMul(r).redMul(this.z),a=n.redSub(i),c=o.redSub(s);if(a.cmpn(0)===0)return c.cmpn(0)!==0?this.curve.jpoint(null,null,null):this.dbl();var l=a.redSqr(),u=l.redMul(a),f=n.redMul(l),p=c.redSqr().redIAdd(u).redISub(f).redISub(f),b=c.redMul(f.redISub(p)).redISub(o.redMul(u)),v=this.z.redMul(a);return this.curve.jpoint(p,b,v)};xr.prototype.dblp=function(e){if(e===0)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var r;if(this.curve.zeroA||this.curve.threeA){var n=this;for(r=0;r<e;r++)n=n.dbl();return n}var i=this.curve.a,o=this.curve.tinv,s=this.x,a=this.y,c=this.z,l=c.redSqr().redSqr(),u=a.redAdd(a);for(r=0;r<e;r++){var f=s.redSqr(),p=u.redSqr(),b=p.redSqr(),v=f.redAdd(f).redIAdd(f).redIAdd(i.redMul(l)),A=s.redMul(p),_=v.redSqr().redISub(A.redAdd(A)),N=A.redISub(_),P=v.redMul(N);P=P.redIAdd(P).redISub(b);var M=u.redMul(c);r+1<e&&(l=l.redMul(b)),s=_,c=M,u=P}return this.curve.jpoint(s,u.redMul(o),c)};xr.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()};xr.prototype._zeroDbl=function(){var e,r,n;if(this.zOne){var i=this.x.redSqr(),o=this.y.redSqr(),s=o.redSqr(),a=this.x.redAdd(o).redSqr().redISub(i).redISub(s);a=a.redIAdd(a);var c=i.redAdd(i).redIAdd(i),l=c.redSqr().redISub(a).redISub(a),u=s.redIAdd(s);u=u.redIAdd(u),u=u.redIAdd(u),e=l,r=c.redMul(a.redISub(l)).redISub(u),n=this.y.redAdd(this.y)}else{var f=this.x.redSqr(),p=this.y.redSqr(),b=p.redSqr(),v=this.x.redAdd(p).redSqr().redISub(f).redISub(b);v=v.redIAdd(v);var A=f.redAdd(f).redIAdd(f),_=A.redSqr(),N=b.redIAdd(b);N=N.redIAdd(N),N=N.redIAdd(N),e=_.redISub(v).redISub(v),r=A.redMul(v.redISub(e)).redISub(N),n=this.y.redMul(this.z),n=n.redIAdd(n)}return this.curve.jpoint(e,r,n)};xr.prototype._threeDbl=function(){var e,r,n;if(this.zOne){var i=this.x.redSqr(),o=this.y.redSqr(),s=o.redSqr(),a=this.x.redAdd(o).redSqr().redISub(i).redISub(s);a=a.redIAdd(a);var c=i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),l=c.redSqr().redISub(a).redISub(a);e=l;var u=s.redIAdd(s);u=u.redIAdd(u),u=u.redIAdd(u),r=c.redMul(a.redISub(l)).redISub(u),n=this.y.redAdd(this.y)}else{var f=this.z.redSqr(),p=this.y.redSqr(),b=this.x.redMul(p),v=this.x.redSub(f).redMul(this.x.redAdd(f));v=v.redAdd(v).redIAdd(v);var A=b.redIAdd(b);A=A.redIAdd(A);var _=A.redAdd(A);e=v.redSqr().redISub(_),n=this.y.redAdd(this.z).redSqr().redISub(p).redISub(f);var N=p.redSqr();N=N.redIAdd(N),N=N.redIAdd(N),N=N.redIAdd(N),r=v.redMul(A.redISub(e)).redISub(N)}return this.curve.jpoint(e,r,n)};xr.prototype._dbl=function(){var e=this.curve.a,r=this.x,n=this.y,i=this.z,o=i.redSqr().redSqr(),s=r.redSqr(),a=n.redSqr(),c=s.redAdd(s).redIAdd(s).redIAdd(e.redMul(o)),l=r.redAdd(r);l=l.redIAdd(l);var u=l.redMul(a),f=c.redSqr().redISub(u.redAdd(u)),p=u.redISub(f),b=a.redSqr();b=b.redIAdd(b),b=b.redIAdd(b),b=b.redIAdd(b);var v=c.redMul(p).redISub(b),A=n.redAdd(n).redMul(i);return this.curve.jpoint(f,v,A)};xr.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),r=this.y.redSqr(),n=this.z.redSqr(),i=r.redSqr(),o=e.redAdd(e).redIAdd(e),s=o.redSqr(),a=this.x.redAdd(r).redSqr().redISub(e).redISub(i);a=a.redIAdd(a),a=a.redAdd(a).redIAdd(a),a=a.redISub(s);var c=a.redSqr(),l=i.redIAdd(i);l=l.redIAdd(l),l=l.redIAdd(l),l=l.redIAdd(l);var u=o.redIAdd(a).redSqr().redISub(s).redISub(c).redISub(l),f=r.redMul(u);f=f.redIAdd(f),f=f.redIAdd(f);var p=this.x.redMul(c).redISub(f);p=p.redIAdd(p),p=p.redIAdd(p);var b=this.y.redMul(u.redMul(l.redISub(u)).redISub(a.redMul(c)));b=b.redIAdd(b),b=b.redIAdd(b),b=b.redIAdd(b);var v=this.z.redAdd(a).redSqr().redISub(n).redISub(c);return this.curve.jpoint(p,b,v)};xr.prototype.mul=function(e,r){return e=new ze(e,r),this.curve._wnafMul(this,e)};xr.prototype.eq=function(e){if(e.type==="affine")return this.eq(e.toJ());if(this===e)return!0;var r=this.z.redSqr(),n=e.z.redSqr();if(this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0)!==0)return!1;var i=r.redMul(this.z),o=n.redMul(e.z);return this.y.redMul(o).redISub(e.y.redMul(i)).cmpn(0)===0};xr.prototype.eqXToP=function(e){var r=this.z.redSqr(),n=e.toRed(this.curve.red).redMul(r);if(this.x.cmp(n)===0)return!0;for(var i=e.clone(),o=this.curve.redN.redMul(r);;){if(i.iadd(this.curve.n),i.cmp(this.curve.p)>=0)return!1;if(n.redIAdd(o),this.x.cmp(n)===0)return!0}};xr.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"};xr.prototype.isInfinity=function(){return this.z.cmpn(0)===0};var A0=uc(function(t,e){var r=e;r.base=Bs,r.short=dR,r.mont=null,r.edwards=null}),S0=uc(function(t,e){var r=e,n=sn.assert;function i(a){a.type==="short"?this.curve=new A0.short(a):a.type==="edwards"?this.curve=new A0.edwards(a):this.curve=new A0.mont(a),this.g=this.curve.g,this.n=this.curve.n,this.hash=a.hash,n(this.g.validate(),"Invalid curve"),n(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}r.PresetCurve=i;function o(a,c){Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:function(){var l=new i(c);return Object.defineProperty(r,a,{configurable:!0,enumerable:!0,value:l}),l}})}o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:zr.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:zr.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:zr.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:zr.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:zr.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:zr.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:zr.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});var s;try{s=null.crash()}catch{s=void 0}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:zr.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",s]})});function Io(t){if(!(this instanceof Io))return new Io(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=On.toArray(t.entropy,t.entropyEnc||"hex"),r=On.toArray(t.nonce,t.nonceEnc||"hex"),n=On.toArray(t.pers,t.persEnc||"hex");z2(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,r,n)}var Yb=Io;Io.prototype._init=function(e,r,n){var i=e.concat(r).concat(n);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var o=0;o<this.V.length;o++)this.K[o]=0,this.V[o]=1;this._update(i),this._reseed=1,this.reseedInterval=281474976710656};Io.prototype._hmac=function(){return new zr.hmac(this.hash,this.K)};Io.prototype._update=function(e){var r=this._hmac().update(this.V).update([0]);e&&(r=r.update(e)),this.K=r.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())};Io.prototype.reseed=function(e,r,n,i){typeof r!="string"&&(i=n,n=r,r=null),e=On.toArray(e,r),n=On.toArray(n,i),z2(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(n||[])),this._reseed=1};Io.prototype.generate=function(e,r,n,i){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");typeof r!="string"&&(i=n,n=r,r=null),n&&(n=On.toArray(n,i||"hex"),this._update(n));for(var o=[];o.length<e;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V);var s=o.slice(0,e);return this._update(n),this._reseed++,On.encode(s,r)};var Z1=sn.assert;function Ir(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}var q2=Ir;Ir.fromPublic=function(e,r,n){return r instanceof Ir?r:new Ir(e,{pub:r,pubEnc:n})};Ir.fromPrivate=function(e,r,n){return r instanceof Ir?r:new Ir(e,{priv:r,privEnc:n})};Ir.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}};Ir.prototype.getPublic=function(e,r){return typeof e=="string"&&(r=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),r?this.pub.encode(r,e):this.pub};Ir.prototype.getPrivate=function(e){return e==="hex"?this.priv.toString(16,2):this.priv};Ir.prototype._importPrivate=function(e,r){this.priv=new ze(e,r||16),this.priv=this.priv.umod(this.ec.curve.n)};Ir.prototype._importPublic=function(e,r){if(e.x||e.y){this.ec.curve.type==="mont"?Z1(e.x,"Need x coordinate"):(this.ec.curve.type==="short"||this.ec.curve.type==="edwards")&&Z1(e.x&&e.y,"Need both x and y coordinate"),this.pub=this.ec.curve.point(e.x,e.y);return}this.pub=this.ec.curve.decodePoint(e,r)};Ir.prototype.derive=function(e){return e.validate()||Z1(e.validate(),"public point not validated"),e.mul(this.priv).getX()};Ir.prototype.sign=function(e,r,n){return this.ec.sign(e,this,r,n)};Ir.prototype.verify=function(e,r){return this.ec.verify(e,r,this)};Ir.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var hR=sn.assert;function Ed(t,e){if(t instanceof Ed)return t;this._importDER(t,e)||(hR(t.r&&t.s,"Signature without r or s"),this.r=new ze(t.r,16),this.s=new ze(t.s,16),t.recoveryParam===void 0?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}var xd=Ed;function pR(){this.place=0}function Nh(t,e){var r=t[e.place++];if(!(r&128))return r;var n=r&15;if(n===0||n>4)return!1;for(var i=0,o=0,s=e.place;o<n;o++,s++)i<<=8,i|=t[s],i>>>=0;return i<=127?!1:(e.place=s,i)}function ww(t){for(var e=0,r=t.length-1;!t[e]&&!(t[e+1]&128)&&e<r;)e++;return e===0?t:t.slice(e)}Ed.prototype._importDER=function(e,r){e=sn.toArray(e,r);var n=new pR;if(e[n.place++]!==48)return!1;var i=Nh(e,n);if(i===!1||i+n.place!==e.length||e[n.place++]!==2)return!1;var o=Nh(e,n);if(o===!1)return!1;var s=e.slice(n.place,o+n.place);if(n.place+=o,e[n.place++]!==2)return!1;var a=Nh(e,n);if(a===!1||e.length!==a+n.place)return!1;var c=e.slice(n.place,a+n.place);if(s[0]===0)if(s[1]&128)s=s.slice(1);else return!1;if(c[0]===0)if(c[1]&128)c=c.slice(1);else return!1;return this.r=new ze(s),this.s=new ze(c),this.recoveryParam=null,!0};function Mh(t,e){if(e<128){t.push(e);return}var r=1+(Math.log(e)/Math.LN2>>>3);for(t.push(r|128);--r;)t.push(e>>>(r<<3)&255);t.push(e)}Ed.prototype.toDER=function(e){var r=this.r.toArray(),n=this.s.toArray();for(r[0]&128&&(r=[0].concat(r)),n[0]&128&&(n=[0].concat(n)),r=ww(r),n=ww(n);!n[0]&&!(n[1]&128);)n=n.slice(1);var i=[2];Mh(i,r.length),i=i.concat(r),i.push(2),Mh(i,n.length);var o=i.concat(n),s=[48];return Mh(s,o.length),s=s.concat(o),sn.encode(s,e)};var gR=function(){throw new Error("unsupported")},Xb=sn.assert;function bn(t){if(!(this instanceof bn))return new bn(t);typeof t=="string"&&(Xb(Object.prototype.hasOwnProperty.call(S0,t),"Unknown curve "+t),t=S0[t]),t instanceof S0.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}var mR=bn;bn.prototype.keyPair=function(e){return new q2(this,e)};bn.prototype.keyFromPrivate=function(e,r){return q2.fromPrivate(this,e,r)};bn.prototype.keyFromPublic=function(e,r){return q2.fromPublic(this,e,r)};bn.prototype.genKeyPair=function(e){e||(e={});for(var r=new Yb({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||gR(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),n=this.n.byteLength(),i=this.n.sub(new ze(2));;){var o=new ze(r.generate(n));if(!(o.cmp(i)>0))return o.iaddn(1),this.keyFromPrivate(o)}};bn.prototype._truncateToN=function(e,r){var n=e.byteLength()*8-this.n.bitLength();return n>0&&(e=e.ushrn(n)),!r&&e.cmp(this.n)>=0?e.sub(this.n):e};bn.prototype.sign=function(e,r,n,i){typeof n=="object"&&(i=n,n=null),i||(i={}),r=this.keyFromPrivate(r,n),e=this._truncateToN(new ze(e,16));for(var o=this.n.byteLength(),s=r.getPrivate().toArray("be",o),a=e.toArray("be",o),c=new Yb({hash:this.hash,entropy:s,nonce:a,pers:i.pers,persEnc:i.persEnc||"utf8"}),l=this.n.sub(new ze(1)),u=0;;u++){var f=i.k?i.k(u):new ze(c.generate(this.n.byteLength()));if(f=this._truncateToN(f,!0),!(f.cmpn(1)<=0||f.cmp(l)>=0)){var p=this.g.mul(f);if(!p.isInfinity()){var b=p.getX(),v=b.umod(this.n);if(v.cmpn(0)!==0){var A=f.invm(this.n).mul(v.mul(r.getPrivate()).iadd(e));if(A=A.umod(this.n),A.cmpn(0)!==0){var _=(p.getY().isOdd()?1:0)|(b.cmp(v)!==0?2:0);return i.canonical&&A.cmp(this.nh)>0&&(A=this.n.sub(A),_^=1),new xd({r:v,s:A,recoveryParam:_})}}}}}};bn.prototype.verify=function(e,r,n,i){e=this._truncateToN(new ze(e,16)),n=this.keyFromPublic(n,i),r=new xd(r,"hex");var o=r.r,s=r.s;if(o.cmpn(1)<0||o.cmp(this.n)>=0||s.cmpn(1)<0||s.cmp(this.n)>=0)return!1;var a=s.invm(this.n),c=a.mul(e).umod(this.n),l=a.mul(o).umod(this.n),u;return this.curve._maxwellTrick?(u=this.g.jmulAdd(c,n.getPublic(),l),u.isInfinity()?!1:u.eqXToP(o)):(u=this.g.mulAdd(c,n.getPublic(),l),u.isInfinity()?!1:u.getX().umod(this.n).cmp(o)===0)};bn.prototype.recoverPubKey=function(t,e,r,n){Xb((3&r)===r,"The recovery param is more than two bits"),e=new xd(e,n);var i=this.n,o=new ze(t),s=e.r,a=e.s,c=r&1,l=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate");l?s=this.curve.pointFromX(s.add(this.curve.n),c):s=this.curve.pointFromX(s,c);var u=e.r.invm(i),f=i.sub(o).mul(u).umod(i),p=a.mul(u).umod(i);return this.g.mulAdd(f,s,p)};bn.prototype.getKeyRecoveryParam=function(t,e,r,n){if(e=new xd(e,n),e.recoveryParam!==null)return e.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(t,e,i)}catch{continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")};var wR=uc(function(t,e){var r=e;r.version="6.5.4",r.utils=sn,r.rand=function(){throw new Error("unsupported")},r.curve=A0,r.curves=S0,r.ec=mR,r.eddsa=null}),bR=wR.ec;const yR="signing-key/5.6.1",J1=new Y(yR);let Oh=null;function ri(){return Oh||(Oh=new bR("secp256k1")),Oh}class ls{constructor(e){se(this,"curve","secp256k1"),se(this,"privateKey",ge(e)),wi(this.privateKey)!==32&&J1.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const r=ri().keyFromPrivate(de(this.privateKey));se(this,"publicKey","0x"+r.getPublic(!1,"hex")),se(this,"compressedPublicKey","0x"+r.getPublic(!0,"hex")),se(this,"_isSigningKey",!0)}_addPoint(e){const r=ri().keyFromPublic(de(this.publicKey)),n=ri().keyFromPublic(de(e));return"0x"+r.pub.add(n.pub).encodeCompressed("hex")}signDigest(e){const r=ri().keyFromPrivate(de(this.privateKey)),n=de(e);n.length!==32&&J1.throwArgumentError("bad digest length","digest",e);const i=r.sign(n,{canonical:!0});return Ms({recoveryParam:i.recoveryParam,r:Ft("0x"+i.r.toString(16),32),s:Ft("0x"+i.s.toString(16),32)})}computeSharedSecret(e){const r=ri().keyFromPrivate(de(this.privateKey)),n=ri().keyFromPublic(de(G2(e)));return Ft("0x"+r.derive(n.getPublic()).toString(16),32)}static isSigningKey(e){return!!(e&&e._isSigningKey)}}function Qb(t,e){const r=Ms(e),n={r:de(r.r),s:de(r.s)};return"0x"+ri().recoverPubKey(de(t),n,r.recoveryParam).encode("hex",!1)}function G2(t,e){const r=de(t);if(r.length===32){const n=new ls(r);return e?"0x"+ri().keyFromPrivate(r).getPublic(!0,"hex"):n.publicKey}else{if(r.length===33)return e?ge(r):"0x"+ri().keyFromPublic(r).getPublic(!1,"hex");if(r.length===65)return e?"0x"+ri().keyFromPublic(r).getPublic(!0,"hex"):ge(r)}return J1.throwArgumentError("invalid public or private key","key","[REDACTED]")}const vR="transactions/5.6.0",kr=new Y(vR);var Y1;(function(t){t[t.legacy=0]="legacy",t[t.eip2930=1]="eip2930",t[t.eip1559=2]="eip1559"})(Y1||(Y1={}));function V2(t){return t==="0x"?null:kt(t)}function Pr(t){return t==="0x"?D2:he.from(t)}const ER=[{name:"nonce",maxLength:32,numeric:!0},{name:"gasPrice",maxLength:32,numeric:!0},{name:"gasLimit",maxLength:32,numeric:!0},{name:"to",length:20},{name:"value",maxLength:32,numeric:!0},{name:"data"}],xR={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,type:!0,value:!0};function vo(t){const e=G2(t);return kt(Xt(Mt(Xt(e,1)),12))}function Ru(t,e){return vo(Qb(de(t),e))}function tn(t,e){const r=ci(he.from(t).toHexString());return r.length>32&&kr.throwArgumentError("invalid length for "+e,"transaction:"+e,t),r}function Dh(t,e){return{address:kt(t),storageKeys:(e||[]).map((r,n)=>(wi(r)!==32&&kr.throwArgumentError("invalid access list storageKey",`accessList[${t}:${n}]`,r),r.toLowerCase()))}}function Ho(t){if(Array.isArray(t))return t.map((r,n)=>Array.isArray(r)?(r.length>2&&kr.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${n}]`,r),Dh(r[0],r[1])):Dh(r.address,r.storageKeys));const e=Object.keys(t).map(r=>{const n=t[r].reduce((i,o)=>(i[o]=!0,i),{});return Dh(r,Object.keys(n).sort())});return e.sort((r,n)=>r.address.localeCompare(n.address)),e}function ey(t){return Ho(t).map(e=>[e.address,e.storageKeys])}function ty(t,e){if(t.gasPrice!=null){const n=he.from(t.gasPrice),i=he.from(t.maxFeePerGas||0);n.eq(i)||kr.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:n,maxFeePerGas:i})}const r=[tn(t.chainId||0,"chainId"),tn(t.nonce||0,"nonce"),tn(t.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),tn(t.maxFeePerGas||0,"maxFeePerGas"),tn(t.gasLimit||0,"gasLimit"),t.to!=null?kt(t.to):"0x",tn(t.value||0,"value"),t.data||"0x",ey(t.accessList||[])];if(e){const n=Ms(e);r.push(tn(n.recoveryParam,"recoveryParam")),r.push(ci(n.r)),r.push(ci(n.s))}return Mr(["0x02",xs(r)])}function ry(t,e){const r=[tn(t.chainId||0,"chainId"),tn(t.nonce||0,"nonce"),tn(t.gasPrice||0,"gasPrice"),tn(t.gasLimit||0,"gasLimit"),t.to!=null?kt(t.to):"0x",tn(t.value||0,"value"),t.data||"0x",ey(t.accessList||[])];if(e){const n=Ms(e);r.push(tn(n.recoveryParam,"recoveryParam")),r.push(ci(n.r)),r.push(ci(n.s))}return Mr(["0x01",xs(r)])}function _R(t,e){N2(t,xR);const r=[];ER.forEach(function(s){let a=t[s.name]||[];const c={};s.numeric&&(c.hexPad="left"),a=de(ge(a,c)),s.length&&a.length!==s.length&&a.length>0&&kr.throwArgumentError("invalid length for "+s.name,"transaction:"+s.name,a),s.maxLength&&(a=ci(a),a.length>s.maxLength&&kr.throwArgumentError("invalid length for "+s.name,"transaction:"+s.name,a)),r.push(ge(a))});let n=0;if(t.chainId!=null?(n=t.chainId,typeof n!="number"&&kr.throwArgumentError("invalid transaction.chainId","transaction",t)):e&&!$u(e)&&e.v>28&&(n=Math.floor((e.v-35)/2)),n!==0&&(r.push(ge(n)),r.push("0x"),r.push("0x")),!e)return xs(r);const i=Ms(e);let o=27+i.recoveryParam;return n!==0?(r.pop(),r.pop(),r.pop(),o+=n*2+8,i.v>28&&i.v!==o&&kr.throwArgumentError("transaction.chainId/signature.v mismatch","signature",e)):i.v!==o&&kr.throwArgumentError("transaction.chainId/signature.v mismatch","signature",e),r.push(ge(o)),r.push(ci(de(i.r))),r.push(ci(de(i.s))),xs(r)}function X1(t,e){if(t.type==null||t.type===0)return t.accessList!=null&&kr.throwArgumentError("untyped transactions do not support accessList; include type: 1","transaction",t),_R(t,e);switch(t.type){case 1:return ry(t,e);case 2:return ty(t,e)}return kr.throwError(`unsupported transaction type: ${t.type}`,Y.errors.UNSUPPORTED_OPERATION,{operation:"serializeTransaction",transactionType:t.type})}function ny(t,e,r){try{const n=Pr(e[0]).toNumber();if(n!==0&&n!==1)throw new Error("bad recid");t.v=n}catch{kr.throwArgumentError("invalid v for transaction type: 1","v",e[0])}t.r=Ft(e[1],32),t.s=Ft(e[2],32);try{const n=Mt(r(t));t.from=Ru(n,{r:t.r,s:t.s,recoveryParam:t.v})}catch(n){console.log(n)}}function CR(t){const e=md(t.slice(1));e.length!==9&&e.length!==12&&kr.throwArgumentError("invalid component count for transaction type: 2","payload",ge(t));const r=Pr(e[2]),n=Pr(e[3]),i={type:2,chainId:Pr(e[0]).toNumber(),nonce:Pr(e[1]).toNumber(),maxPriorityFeePerGas:r,maxFeePerGas:n,gasPrice:null,gasLimit:Pr(e[4]),to:V2(e[5]),value:Pr(e[6]),data:e[7],accessList:Ho(e[8])};return e.length===9||(i.hash=Mt(t),ny(i,e.slice(9),ty)),i}function AR(t){const e=md(t.slice(1));e.length!==8&&e.length!==11&&kr.throwArgumentError("invalid component count for transaction type: 1","payload",ge(t));const r={type:1,chainId:Pr(e[0]).toNumber(),nonce:Pr(e[1]).toNumber(),gasPrice:Pr(e[2]),gasLimit:Pr(e[3]),to:V2(e[4]),value:Pr(e[5]),data:e[6],accessList:Ho(e[7])};return e.length===8||(r.hash=Mt(t),ny(r,e.slice(8),ry)),r}function SR(t){const e=md(t);e.length!==9&&e.length!==6&&kr.throwArgumentError("invalid raw transaction","rawTransaction",t);const r={nonce:Pr(e[0]).toNumber(),gasPrice:Pr(e[1]),gasLimit:Pr(e[2]),to:V2(e[3]),value:Pr(e[4]),data:e[5],chainId:0};if(e.length===6)return r;try{r.v=he.from(e[6]).toNumber()}catch(n){return console.log(n),r}if(r.r=Ft(e[7],32),r.s=Ft(e[8],32),he.from(r.r).isZero()&&he.from(r.s).isZero())r.chainId=r.v,r.v=0;else{r.chainId=Math.floor((r.v-35)/2),r.chainId<0&&(r.chainId=0);let n=r.v-27;const i=e.slice(0,6);r.chainId!==0&&(i.push(ge(r.chainId)),i.push("0x"),i.push("0x"),n-=r.chainId*2+8);const o=Mt(xs(i));try{r.from=Ru(o,{r:ge(r.r),s:ge(r.s),recoveryParam:n})}catch(s){console.log(s)}r.hash=Mt(t)}return r.type=null,r}function iy(t){const e=de(t);if(e[0]>127)return SR(e);switch(e[0]){case 1:return AR(e);case 2:return CR(e)}return kr.throwError(`unsupported transaction type: ${e[0]}`,Y.errors.UNSUPPORTED_OPERATION,{operation:"parseTransaction",transactionType:e[0]})}const PR="contracts/5.6.0";var $o=window&&window.__awaiter||function(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(u){try{l(n.next(u))}catch(f){s(f)}}function c(u){try{l(n.throw(u))}catch(f){s(f)}}function l(u){u.done?o(u.value):i(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})};const At=new Y(PR),kR={chainId:!0,data:!0,from:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0,type:!0,accessList:!0,maxFeePerGas:!0,maxPriorityFeePerGas:!0,customData:!0,ccipReadEnabled:!0};function Ef(t,e){return $o(this,void 0,void 0,function*(){const r=yield e;typeof r!="string"&&At.throwArgumentError("invalid address or ENS name","name",r);try{return kt(r)}catch{}t||At.throwError("a provider or signer is needed to resolve ENS names",Y.errors.UNSUPPORTED_OPERATION,{operation:"resolveName"});const n=yield t.resolveName(r);return n==null&&At.throwArgumentError("resolver or addr is not configured for ENS name","name",r),n})}function al(t,e,r){return $o(this,void 0,void 0,function*(){return Array.isArray(r)?yield Promise.all(r.map((n,i)=>al(t,Array.isArray(e)?e[i]:e[n.name],n))):r.type==="address"?yield Ef(t,e):r.type==="tuple"?yield al(t,e,r.components):r.baseType==="array"?Array.isArray(e)?yield Promise.all(e.map(n=>al(t,n,r.arrayChildren))):Promise.reject(At.makeError("invalid value for array",Y.errors.INVALID_ARGUMENT,{argument:"value",value:e})):e})}function _d(t,e,r){return $o(this,void 0,void 0,function*(){let n={};r.length===e.inputs.length+1&&typeof r[r.length-1]=="object"&&(n=jt(r.pop())),At.checkArgumentCount(r.length,e.inputs.length,"passed to contract"),t.signer?n.from?n.from=Kt({override:Ef(t.signer,n.from),signer:t.signer.getAddress()}).then(l=>$o(this,void 0,void 0,function*(){return kt(l.signer)!==l.override&&At.throwError("Contract with a Signer cannot override from",Y.errors.UNSUPPORTED_OPERATION,{operation:"overrides.from"}),l.override})):n.from=t.signer.getAddress():n.from&&(n.from=Ef(t.provider,n.from));const i=yield Kt({args:al(t.signer||t.provider,r,e.inputs),address:t.resolvedAddress,overrides:Kt(n)||{}}),o=t.interface.encodeFunctionData(e,i.args),s={data:o,to:i.address},a=i.overrides;if(a.nonce!=null&&(s.nonce=he.from(a.nonce).toNumber()),a.gasLimit!=null&&(s.gasLimit=he.from(a.gasLimit)),a.gasPrice!=null&&(s.gasPrice=he.from(a.gasPrice)),a.maxFeePerGas!=null&&(s.maxFeePerGas=he.from(a.maxFeePerGas)),a.maxPriorityFeePerGas!=null&&(s.maxPriorityFeePerGas=he.from(a.maxPriorityFeePerGas)),a.from!=null&&(s.from=a.from),a.type!=null&&(s.type=a.type),a.accessList!=null&&(s.accessList=Ho(a.accessList)),s.gasLimit==null&&e.gas!=null){let l=21e3;const u=de(o);for(let f=0;f<u.length;f++)l+=4,u[f]&&(l+=64);s.gasLimit=he.from(e.gas).add(l)}if(a.value){const l=he.from(a.value);!l.isZero()&&!e.payable&&At.throwError("non-payable method cannot override value",Y.errors.UNSUPPORTED_OPERATION,{operation:"overrides.value",value:n.value}),s.value=l}a.customData&&(s.customData=jt(a.customData)),a.ccipReadEnabled&&(s.ccipReadEnabled=!!a.ccipReadEnabled),delete n.nonce,delete n.gasLimit,delete n.gasPrice,delete n.from,delete n.value,delete n.type,delete n.accessList,delete n.maxFeePerGas,delete n.maxPriorityFeePerGas,delete n.customData,delete n.ccipReadEnabled;const c=Object.keys(n).filter(l=>n[l]!=null);return c.length&&At.throwError(`cannot override ${c.map(l=>JSON.stringify(l)).join(",")}`,Y.errors.UNSUPPORTED_OPERATION,{operation:"overrides",overrides:c}),s})}function TR(t,e){return function(...r){return _d(t,e,r)}}function IR(t,e){const r=t.signer||t.provider;return function(...n){return $o(this,void 0,void 0,function*(){r||At.throwError("estimate require a provider or signer",Y.errors.UNSUPPORTED_OPERATION,{operation:"estimateGas"});const i=yield _d(t,e,n);return yield r.estimateGas(i)})}}function oy(t,e){const r=e.wait.bind(e);e.wait=n=>r(n).then(i=>(i.events=i.logs.map(o=>{let s=Rr(o),a=null;try{a=t.interface.parseLog(o)}catch{}return a&&(s.args=a.args,s.decode=(c,l)=>t.interface.decodeEventLog(a.eventFragment,c,l),s.event=a.name,s.eventSignature=a.signature),s.removeListener=()=>t.provider,s.getBlock=()=>t.provider.getBlock(i.blockHash),s.getTransaction=()=>t.provider.getTransaction(i.transactionHash),s.getTransactionReceipt=()=>Promise.resolve(i),s}),i))}function sy(t,e,r){const n=t.signer||t.provider;return function(...i){return $o(this,void 0,void 0,function*(){let o;if(i.length===e.inputs.length+1&&typeof i[i.length-1]=="object"){const c=jt(i.pop());c.blockTag!=null&&(o=yield c.blockTag),delete c.blockTag,i.push(c)}t.deployTransaction!=null&&(yield t._deployed(o));const s=yield _d(t,e,i),a=yield n.call(s,o);try{let c=t.interface.decodeFunctionResult(e,a);return r&&e.outputs.length===1&&(c=c[0]),c}catch(c){throw c.code===Y.errors.CALL_EXCEPTION&&(c.address=t.address,c.args=i,c.transaction=s),c}})}}function $R(t,e){return function(...r){return $o(this,void 0,void 0,function*(){t.signer||At.throwError("sending a transaction requires a signer",Y.errors.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),t.deployTransaction!=null&&(yield t._deployed());const n=yield _d(t,e,r),i=yield t.signer.sendTransaction(n);return oy(t,i),i})}}function bw(t,e,r){return e.constant?sy(t,e,r):$R(t,e)}function ay(t){return t.address&&(t.topics==null||t.topics.length===0)?"*":(t.address||"*")+"@"+(t.topics?t.topics.map(e=>Array.isArray(e)?e.join("|"):e).join(":"):"")}class iu{constructor(e,r){se(this,"tag",e),se(this,"filter",r),this._listeners=[]}addListener(e,r){this._listeners.push({listener:e,once:r})}removeListener(e){let r=!1;this._listeners=this._listeners.filter(n=>r||n.listener!==e?!0:(r=!0,!1))}removeAllListeners(){this._listeners=[]}listeners(){return this._listeners.map(e=>e.listener)}listenerCount(){return this._listeners.length}run(e){const r=this.listenerCount();return this._listeners=this._listeners.filter(n=>{const i=e.slice();return setTimeout(()=>{n.listener.apply(this,i)},0),!n.once}),r}prepareEvent(e){}getEmit(e){return[e]}}class NR extends iu{constructor(){super("error",null)}}class yw extends iu{constructor(e,r,n,i){const o={address:e};let s=r.getEventTopic(n);i?(s!==i[0]&&At.throwArgumentError("topic mismatch","topics",i),o.topics=i.slice()):o.topics=[s],super(ay(o),o),se(this,"address",e),se(this,"interface",r),se(this,"fragment",n)}prepareEvent(e){super.prepareEvent(e),e.event=this.fragment.name,e.eventSignature=this.fragment.format(),e.decode=(r,n)=>this.interface.decodeEventLog(this.fragment,r,n);try{e.args=this.interface.decodeEventLog(this.fragment,e.data,e.topics)}catch(r){e.args=null,e.decodeError=r}}getEmit(e){const r=hb(e.args);if(r.length)throw r[0].error;const n=(e.args||[]).slice();return n.push(e),n}}class vw extends iu{constructor(e,r){super("*",{address:e}),se(this,"address",e),se(this,"interface",r)}prepareEvent(e){super.prepareEvent(e);try{const r=this.interface.parseLog(e);e.event=r.name,e.eventSignature=r.signature,e.decode=(n,i)=>this.interface.decodeEventLog(r.eventFragment,n,i),e.args=r.args}catch{}}}class cy{constructor(e,r,n){At.checkNew(new.target,xf),se(this,"interface",mr(new.target,"getInterface")(r)),n==null?(se(this,"provider",null),se(this,"signer",null)):Wo.isSigner(n)?(se(this,"provider",n.provider||null),se(this,"signer",n)):To.isProvider(n)?(se(this,"provider",n),se(this,"signer",null)):At.throwArgumentError("invalid signer or provider","signerOrProvider",n),se(this,"callStatic",{}),se(this,"estimateGas",{}),se(this,"functions",{}),se(this,"populateTransaction",{}),se(this,"filters",{});{const s={};Object.keys(this.interface.events).forEach(a=>{const c=this.interface.events[a];se(this.filters,a,(...l)=>({address:this.address,topics:this.interface.encodeFilterTopics(c,l)})),s[c.name]||(s[c.name]=[]),s[c.name].push(a)}),Object.keys(s).forEach(a=>{const c=s[a];c.length===1?se(this.filters,a,this.filters[c[0]]):At.warn(`Duplicate definition of ${a} (${c.join(", ")})`)})}if(se(this,"_runningEvents",{}),se(this,"_wrappedEmits",{}),e==null&&At.throwArgumentError("invalid contract address or ENS name","addressOrName",e),se(this,"address",e),this.provider)se(this,"resolvedAddress",Ef(this.provider,e));else try{se(this,"resolvedAddress",Promise.resolve(kt(e)))}catch{At.throwError("provider is required to use ENS name as contract address",Y.errors.UNSUPPORTED_OPERATION,{operation:"new Contract"})}this.resolvedAddress.catch(s=>{});const i={},o={};Object.keys(this.interface.functions).forEach(s=>{const a=this.interface.functions[s];if(o[s]){At.warn(`Duplicate ABI entry for ${JSON.stringify(s)}`);return}o[s]=!0;{const c=a.name;i[`%${c}`]||(i[`%${c}`]=[]),i[`%${c}`].push(s)}this[s]==null&&se(this,s,bw(this,a,!0)),this.functions[s]==null&&se(this.functions,s,bw(this,a,!1)),this.callStatic[s]==null&&se(this.callStatic,s,sy(this,a,!0)),this.populateTransaction[s]==null&&se(this.populateTransaction,s,TR(this,a)),this.estimateGas[s]==null&&se(this.estimateGas,s,IR(this,a))}),Object.keys(i).forEach(s=>{const a=i[s];if(a.length>1)return;s=s.substring(1);const c=a[0];try{this[s]==null&&se(this,s,this[c])}catch{}this.functions[s]==null&&se(this.functions,s,this.functions[c]),this.callStatic[s]==null&&se(this.callStatic,s,this.callStatic[c]),this.populateTransaction[s]==null&&se(this.populateTransaction,s,this.populateTransaction[c]),this.estimateGas[s]==null&&se(this.estimateGas,s,this.estimateGas[c])})}static getContractAddress(e){return wd(e)}static getInterface(e){return ru.isInterface(e)?e:new ru(e)}deployed(){return this._deployed()}_deployed(e){return this._deployedPromise||(this.deployTransaction?this._deployedPromise=this.deployTransaction.wait().then(()=>this):this._deployedPromise=this.provider.getCode(this.address,e).then(r=>(r==="0x"&&At.throwError("contract not deployed",Y.errors.UNSUPPORTED_OPERATION,{contractAddress:this.address,operation:"getDeployed"}),this))),this._deployedPromise}fallback(e){this.signer||At.throwError("sending a transactions require a signer",Y.errors.UNSUPPORTED_OPERATION,{operation:"sendTransaction(fallback)"});const r=jt(e||{});return["from","to"].forEach(function(n){r[n]!=null&&At.throwError("cannot override "+n,Y.errors.UNSUPPORTED_OPERATION,{operation:n})}),r.to=this.resolvedAddress,this.deployed().then(()=>this.signer.sendTransaction(r))}connect(e){typeof e=="string"&&(e=new nu(e,this.provider));const r=new this.constructor(this.address,this.interface,e);return this.deployTransaction&&se(r,"deployTransaction",this.deployTransaction),r}attach(e){return new this.constructor(e,this.interface,this.signer||this.provider)}static isIndexed(e){return bf.isIndexed(e)}_normalizeRunningEvent(e){return this._runningEvents[e.tag]?this._runningEvents[e.tag]:e}_getRunningEvent(e){if(typeof e=="string"){if(e==="error")return this._normalizeRunningEvent(new NR);if(e==="event")return this._normalizeRunningEvent(new iu("event",null));if(e==="*")return this._normalizeRunningEvent(new vw(this.address,this.interface));const r=this.interface.getEvent(e);return this._normalizeRunningEvent(new yw(this.address,this.interface,r))}if(e.topics&&e.topics.length>0){try{const n=e.topics[0];if(typeof n!="string")throw new Error("invalid topic");const i=this.interface.getEvent(n);return this._normalizeRunningEvent(new yw(this.address,this.interface,i,e.topics))}catch{}const r={address:this.address,topics:e.topics};return this._normalizeRunningEvent(new iu(ay(r),r))}return this._normalizeRunningEvent(new vw(this.address,this.interface))}_checkRunningEvents(e){if(e.listenerCount()===0){delete this._runningEvents[e.tag];const r=this._wrappedEmits[e.tag];r&&e.filter&&(this.provider.off(e.filter,r),delete this._wrappedEmits[e.tag])}}_wrapEvent(e,r,n){const i=Rr(r);return i.removeListener=()=>{n&&(e.removeListener(n),this._checkRunningEvents(e))},i.getBlock=()=>this.provider.getBlock(r.blockHash),i.getTransaction=()=>this.provider.getTransaction(r.transactionHash),i.getTransactionReceipt=()=>this.provider.getTransactionReceipt(r.transactionHash),e.prepareEvent(i),i}_addEventListener(e,r,n){if(this.provider||At.throwError("events require a provider or a signer with a provider",Y.errors.UNSUPPORTED_OPERATION,{operation:"once"}),e.addListener(r,n),this._runningEvents[e.tag]=e,!this._wrappedEmits[e.tag]){const i=o=>{let s=this._wrapEvent(e,o,r);if(s.decodeError==null)try{const a=e.getEmit(s);this.emit(e.filter,...a)}catch(a){s.decodeError=a.error}e.filter!=null&&this.emit("event",s),s.decodeError!=null&&this.emit("error",s.decodeError,s)};this._wrappedEmits[e.tag]=i,e.filter!=null&&this.provider.on(e.filter,i)}}queryFilter(e,r,n){const i=this._getRunningEvent(e),o=jt(i.filter);return typeof r=="string"&&Ge(r,32)?(n!=null&&At.throwArgumentError("cannot specify toBlock with blockhash","toBlock",n),o.blockHash=r):(o.fromBlock=r??0,o.toBlock=n??"latest"),this.provider.getLogs(o).then(s=>s.map(a=>this._wrapEvent(i,a,null)))}on(e,r){return this._addEventListener(this._getRunningEvent(e),r,!1),this}once(e,r){return this._addEventListener(this._getRunningEvent(e),r,!0),this}emit(e,...r){if(!this.provider)return!1;const n=this._getRunningEvent(e),i=n.run(r)>0;return this._checkRunningEvents(n),i}listenerCount(e){return this.provider?e==null?Object.keys(this._runningEvents).reduce((r,n)=>r+this._runningEvents[n].listenerCount(),0):this._getRunningEvent(e).listenerCount():0}listeners(e){if(!this.provider)return[];if(e==null){const r=[];for(let n in this._runningEvents)this._runningEvents[n].listeners().forEach(i=>{r.push(i)});return r}return this._getRunningEvent(e).listeners()}removeAllListeners(e){if(!this.provider)return this;if(e==null){for(const n in this._runningEvents){const i=this._runningEvents[n];i.removeAllListeners(),this._checkRunningEvents(i)}return this}const r=this._getRunningEvent(e);return r.removeAllListeners(),this._checkRunningEvents(r),this}off(e,r){if(!this.provider)return this;const n=this._getRunningEvent(e);return n.removeListener(r),this._checkRunningEvents(n),this}removeListener(e,r){return this.off(e,r)}}class xf extends cy{}class MR{constructor(e,r,n){let i=null;typeof r=="string"?i=r:jo(r)?i=ge(r):r&&typeof r.object=="string"?i=r.object:i="!",i.substring(0,2)!=="0x"&&(i="0x"+i),(!Ge(i)||i.length%2)&&At.throwArgumentError("invalid bytecode","bytecode",r),n&&!Wo.isSigner(n)&&At.throwArgumentError("invalid signer","signer",n),se(this,"bytecode",i),se(this,"interface",mr(new.target,"getInterface")(e)),se(this,"signer",n||null)}getDeployTransaction(...e){let r={};if(e.length===this.interface.deploy.inputs.length+1&&typeof e[e.length-1]=="object"){r=jt(e.pop());for(const n in r)if(!kR[n])throw new Error("unknown transaction override "+n)}return["data","from","to"].forEach(n=>{r[n]!=null&&At.throwError("cannot override "+n,Y.errors.UNSUPPORTED_OPERATION,{operation:n})}),r.value&&!he.from(r.value).isZero()&&!this.interface.deploy.payable&&At.throwError("non-payable constructor cannot override value",Y.errors.UNSUPPORTED_OPERATION,{operation:"overrides.value",value:r.value}),At.checkArgumentCount(e.length,this.interface.deploy.inputs.length," in Contract constructor"),r.data=ge(Dt([this.bytecode,this.interface.encodeDeploy(e)])),r}deploy(...e){return $o(this,void 0,void 0,function*(){let r={};e.length===this.interface.deploy.inputs.length+1&&(r=e.pop()),At.checkArgumentCount(e.length,this.interface.deploy.inputs.length," in Contract constructor");const n=yield al(this.signer,e,this.interface.deploy.inputs);n.push(r);const i=this.getDeployTransaction(...n),o=yield this.signer.sendTransaction(i),s=mr(this.constructor,"getContractAddress")(o),a=mr(this.constructor,"getContract")(s,this.interface,this.signer);return oy(a,o),se(a,"deployTransaction",o),a})}attach(e){return this.constructor.getContract(e,this.interface,this.signer)}connect(e){return new this.constructor(this.interface,this.bytecode,e)}static fromSolidity(e,r){e==null&&At.throwError("missing compiler output",Y.errors.MISSING_ARGUMENT,{argument:"compilerOutput"}),typeof e=="string"&&(e=JSON.parse(e));const n=e.abi;let i=null;return e.bytecode?i=e.bytecode:e.evm&&e.evm.bytecode&&(i=e.evm.bytecode),new this(n,i,r)}static getInterface(e){return xf.getInterface(e)}static getContractAddress(e){return wd(e)}static getContract(e,r,n){return new xf(e,r,n)}}class ly{constructor(e){se(this,"alphabet",e),se(this,"base",e.length),se(this,"_alphabetMap",{}),se(this,"_leader",e.charAt(0));for(let r=0;r<e.length;r++)this._alphabetMap[e.charAt(r)]=r}encode(e){let r=de(e);if(r.length===0)return"";let n=[0];for(let o=0;o<r.length;++o){let s=r[o];for(let a=0;a<n.length;++a)s+=n[a]<<8,n[a]=s%this.base,s=s/this.base|0;for(;s>0;)n.push(s%this.base),s=s/this.base|0}let i="";for(let o=0;r[o]===0&&o<r.length-1;++o)i+=this._leader;for(let o=n.length-1;o>=0;--o)i+=this.alphabet[n[o]];return i}decode(e){if(typeof e!="string")throw new TypeError("Expected String");let r=[];if(e.length===0)return new Uint8Array(r);r.push(0);for(let n=0;n<e.length;n++){let i=this._alphabetMap[e[n]];if(i===void 0)throw new Error("Non-base"+this.base+" character");let o=i;for(let s=0;s<r.length;++s)o+=r[s]*this.base,r[s]=o&255,o>>=8;for(;o>0;)r.push(o&255),o>>=8}for(let n=0;e[n]===this._leader&&n<e.length-1;++n)r.push(0);return de(new Uint8Array(r.reverse()))}}new ly("abcdefghijklmnopqrstuvwxyz234567");const Ka=new ly("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");var Za;(function(t){t.sha256="sha256",t.sha512="sha512"})(Za||(Za={}));const OR="sha2/5.6.0",DR=new Y(OR);function uy(t){return"0x"+zr.ripemd160().update(de(t)).digest("hex")}function Gi(t){return"0x"+zr.sha256().update(de(t)).digest("hex")}function RR(t){return"0x"+zr.sha512().update(de(t)).digest("hex")}function ou(t,e,r){return Za[t]||DR.throwError("unsupported algorithm "+t,Y.errors.UNSUPPORTED_OPERATION,{operation:"hmac",algorithm:t}),"0x"+zr.hmac(zr[t],de(e)).update(de(r)).digest("hex")}function K2(t,e,r,n,i){t=de(t),e=de(e);let o,s=1;const a=new Uint8Array(n),c=new Uint8Array(e.length+4);c.set(e);let l,u;for(let f=1;f<=s;f++){c[e.length]=f>>24&255,c[e.length+1]=f>>16&255,c[e.length+2]=f>>8&255,c[e.length+3]=f&255;let p=de(ou(i,t,c));o||(o=p.length,u=new Uint8Array(o),s=Math.ceil(n/o),l=n-(s-1)*o),u.set(p);for(let A=1;A<r;A++){p=de(ou(i,t,p));for(let _=0;_<o;_++)u[_]^=p[_]}const b=(f-1)*o,v=f===s?l:o;a.set(de(u).slice(0,v),b)}return ge(a)}const BR="wordlists/5.6.0",LR=new Y(BR);class fc{constructor(e){LR.checkAbstract(new.target,fc),se(this,"locale",e)}split(e){return e.toLowerCase().split(/ +/g)}join(e){return e.join(" ")}static check(e){const r=[];for(let n=0;n<2048;n++){const i=e.getWord(n);if(n!==e.getWordIndex(i))return"0x";r.push(i)}return ho(r.join(`
`)+`
* sweetalert2 v11.11.0
* Released under the MIT License.
*/(function(t,e){(function(r,n){t.exports=n()})(In,function(){function r(T,d,m){if(typeof T=="function"?T===d:T.has(d))return arguments.length<3?d:m;throw new TypeError("Private element is not present on this object")}function n(T,d,m){return d=_(d),M(T,a()?Reflect.construct(d,m||[],_(T).constructor):d.apply(T,m))}function i(T,d){return T.get(r(T,d))}function o(T,d,m){return T.set(r(T,d),m),m}function s(T,d,m){if(a())return Reflect.construct.apply(null,arguments);var k=[null];k.push.apply(k,d);var K=new(T.bind.apply(T,k));return m&&N(K,m.prototype),K}function a(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(a=function(){return!!T})()}function c(T,d){var m=T==null?null:typeof Symbol<"u"&&T[Symbol.iterator]||T["@@iterator"];if(m!=null){var k,K,ce,Ee,tt=[],it=!0,Gt=!1;try{if(ce=(m=m.call(T)).next,d===0){if(Object(m)!==m)return;it=!1}else for(;!(it=(k=ce.call(m)).done)&&(tt.push(k.value),tt.length!==d);it=!0);}catch(Cc){Gt=!0,K=Cc}finally{try{if(!it&&m.return!=null&&(Ee=m.return(),Object(Ee)!==Ee))return}finally{if(Gt)throw K}}return tt}}function l(T,d){if(typeof T!="object"||!T)return T;var m=T[Symbol.toPrimitive];if(m!==void 0){var k=m.call(T,d||"default");if(typeof k!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(T)}function u(T){var d=l(T,"string");return typeof d=="symbol"?d:d+""}function f(T){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},f(T)}function p(T,d){if(!(T instanceof d))throw new TypeError("Cannot call a class as a function")}function b(T,d){for(var m=0;m<d.length;m++){var k=d[m];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(T,u(k.key),k)}}function v(T,d,m){return d&&b(T.prototype,d),m&&b(T,m),Object.defineProperty(T,"prototype",{writable:!1}),T}function A(T,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(d&&d.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),d&&N(T,d)}function _(T){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(m){return m.__proto__||Object.getPrototypeOf(m)},_(T)}function N(T,d){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,K){return k.__proto__=K,k},N(T,d)}function P(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function M(T,d){if(d&&(typeof d=="object"||typeof d=="function"))return d;if(d!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(T)}function D(T,d){for(;!Object.prototype.hasOwnProperty.call(T,d)&&(T=_(T),T!==null););return T}function R(){return typeof Reflect<"u"&&Reflect.get?R=Reflect.get.bind():R=function(d,m,k){var K=D(d,m);if(K){var ce=Object.getOwnPropertyDescriptor(K,m);return ce.get?ce.get.call(arguments.length<3?d:k):ce.value}},R.apply(this,arguments)}function W(T,d){return X(T)||c(T,d)||L(T,d)||I()}function w(T){return H(T)||te(T)||L(T)||C()}function H(T){if(Array.isArray(T))return h(T)}function X(T){if(Array.isArray(T))return T}function te(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)}function L(T,d){if(T){if(typeof T=="string")return h(T,d);var m=Object.prototype.toString.call(T).slice(8,-1);if(m==="Object"&&T.constructor&&(m=T.constructor.name),m==="Map"||m==="Set")return Array.from(T);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return h(T,d)}}function h(T,d){(d==null||d>T.length)&&(d=T.length);for(var m=0,k=new Array(d);m<d;m++)k[m]=T[m];return k}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(T,d){if(d.has(T))throw new TypeError("Cannot initialize the same private elements twice on an object")}function O(T,d,m){$(T,d),d.set(T,m)}var j=100,z={},F=function(){z.previousActiveElement instanceof HTMLElement?(z.previousActiveElement.focus(),z.previousActiveElement=null):document.body&&document.body.focus()},y=function(d){return new Promise(function(m){if(!d)return m();var k=window.scrollX,K=window.scrollY;z.restoreFocusTimeout=setTimeout(function(){F(),m()},j),window.scrollTo(k,K)})},S="swal2-",G=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],U=G.reduce(function(T,d){return T[d]=S+d,T},{}),V=["success","warning","info","question","error"],E=V.reduce(function(T,d){return T[d]=S+d,T},{}),J="SweetAlert2:",Q=function(d){return d.charAt(0).toUpperCase()+d.slice(1)},ee=function(d){console.warn("".concat(J," ").concat(f(d)==="object"?d.join(" "):d))},ne=function(d){console.error("".concat(J," ").concat(d))},ae=[],ue=function(d){ae.includes(d)||(ae.push(d),ee(d))},le=function(d,m){ue('"'.concat(d,'" is deprecated and will be removed in the next major release. Please use "').concat(m,'" instead.'))},we=function(d){return typeof d=="function"?d():d},xe=function(d){return d&&typeof d.toPromise=="function"},Ae=function(d){return xe(d)?d.toPromise():Promise.resolve(d)},rt=function(d){return d&&Promise.resolve(d)===d},gt=function(){return document.body.querySelector(".".concat(U.container))},nt=function(d){var m=gt();return m?m.querySelector(d):null},Ue=function(d){return nt(".".concat(d))},Se=function(){return Ue(U.popup)},Ie=function(){return Ue(U.icon)},Pe=function(){return Ue(U["icon-content"])},mt=function(){return Ue(U.title)},Re=function(){return Ue(U["html-container"])},ke=function(){return Ue(U.image)},vt=function(){return Ue(U["progress-steps"])},B=function(){return Ue(U["validation-message"])},g=function(){return nt(".".concat(U.actions," .").concat(U.confirm))},x=function(){return nt(".".concat(U.actions," .").concat(U.cancel))},q=function(){return nt(".".concat(U.actions," .").concat(U.deny))},Z=function(){return Ue(U["input-label"])},re=function(){return nt(".".concat(U.loader))},ie=function(){return Ue(U.actions)},me=function(){return Ue(U.footer)},Ne=function(){return Ue(U["timer-progress-bar"])},Te=function(){return Ue(U.close)},Oe=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Je=function(){var d=Se();if(!d)return[];var m=d.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),k=Array.from(m).sort(function(Ee,tt){var it=parseInt(Ee.getAttribute("tabindex")||"0"),Gt=parseInt(tt.getAttribute("tabindex")||"0");return it>Gt?1:it<Gt?-1:0}),K=d.querySelectorAll(Oe),ce=Array.from(K).filter(function(Ee){return Ee.getAttribute("tabindex")!=="-1"});return w(new Set(k.concat(ce))).filter(function(Ee){return Xe(Ee)})},_t=function(){return at(document.body,U.shown)&&!at(document.body,U["toast-shown"])&&!at(document.body,U["no-backdrop"])},Et=function(){var d=Se();return d?at(d,U.toast):!1},Si=function(){var d=Se();return d?d.hasAttribute("data-loading"):!1},Ye=function(d,m){if(d.textContent="",m){var k=new DOMParser,K=k.parseFromString(m,"text/html"),ce=K.querySelector("head");ce&&Array.from(ce.childNodes).forEach(function(tt){d.appendChild(tt)});var Ee=K.querySelector("body");Ee&&Array.from(Ee.childNodes).forEach(function(tt){tt instanceof HTMLVideoElement||tt instanceof HTMLAudioElement?d.appendChild(tt.cloneNode(!0)):d.appendChild(tt)})}},at=function(d,m){if(!m)return!1;for(var k=m.split(/\s+/),K=0;K<k.length;K++)if(!d.classList.contains(k[K]))return!1;return!0},Pi=function(d,m){Array.from(d.classList).forEach(function(k){!Object.values(U).includes(k)&&!Object.values(E).includes(k)&&!Object.values(m.showClass||{}).includes(k)&&d.classList.remove(k)})},et=function(d,m,k){if(Pi(d,m),m.customClass&&m.customClass[k]){if(typeof m.customClass[k]!="string"&&!m.customClass[k].forEach){ee("Invalid type of customClass.".concat(k,'! Expected string or iterable object, got "').concat(f(m.customClass[k]),'"'));return}Ce(d,m.customClass[k])}},xt=function(d,m){if(!m)return null;switch(m){case"select":case"textarea":case"file":return d.querySelector(".".concat(U.popup," > .").concat(U[m]));case"checkbox":return d.querySelector(".".concat(U.popup," > .").concat(U.checkbox," input"));case"radio":return d.querySelector(".".concat(U.popup," > .").concat(U.radio," input:checked"))||d.querySelector(".".concat(U.popup," > .").concat(U.radio," input:first-child"));case"range":return d.querySelector(".".concat(U.popup," > .").concat(U.range," input"));default:return d.querySelector(".".concat(U.popup," > .").concat(U.input))}},Wn=function(d){if(d.focus(),d.type!=="file"){var m=d.value;d.value="",d.value=m}},Tt=function(d,m,k){!d||!m||(typeof m=="string"&&(m=m.split(/\s+/).filter(Boolean)),m.forEach(function(K){Array.isArray(d)?d.forEach(function(ce){k?ce.classList.add(K):ce.classList.remove(K)}):k?d.classList.add(K):d.classList.remove(K)}))},Ce=function(d,m){Tt(d,m,!0)},dr=function(d,m){Tt(d,m,!1)},lt=function(d,m){for(var k=Array.from(d.children),K=0;K<k.length;K++){var ce=k[K];if(ce instanceof HTMLElement&&at(ce,m))return ce}},ft=function(d,m,k){k==="".concat(parseInt(k))&&(k=parseInt(k)),k||parseInt(k)===0?d.style.setProperty(m,typeof k=="number"?"".concat(k,"px"):k):d.style.removeProperty(m)},Rt=function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";d&&(d.style.display=m)},He=function(d){d&&(d.style.display="none")},Ct=function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";d&&new MutationObserver(function(){wt(d,d.innerHTML,m)}).observe(d,{childList:!0,subtree:!0})},zn=function(d,m,k,K){var ce=d.querySelector(m);ce&&ce.style.setProperty(k,K)},wt=function(d,m){var k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";m?Rt(d,k):He(d)},Xe=function(d){return!!(d&&(d.offsetWidth||d.offsetHeight||d.getClientRects().length))},ki=function(){return!Xe(g())&&!Xe(q())&&!Xe(x())},It=function(d){return d.scrollHeight>d.clientHeight},$t=function(d){var m=window.getComputedStyle(d),k=parseFloat(m.getPropertyValue("animation-duration")||"0"),K=parseFloat(m.getPropertyValue("transition-duration")||"0");return k>0||K>0},an=function(d){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,k=Ne();k&&Xe(k)&&(m&&(k.style.transition="none",k.style.width="100%"),setTimeout(function(){k.style.transition="width ".concat(d/1e3,"s linear"),k.style.width="0%"},10))},Hn=function(){var d=Ne();if(d){var m=parseInt(window.getComputedStyle(d).width);d.style.removeProperty("transition"),d.style.width="100%";var k=parseInt(window.getComputedStyle(d).width),K=m/k*100;d.style.width="".concat(K,"%")}},Cn=function(){return typeof window>"u"||typeof document>"u"},qn=`
 <div aria-labelledby="`.concat(U.title,'" aria-describedby="').concat(U["html-container"],'" class="').concat(U.popup,`" tabindex="-1">
   <button type="button" class="`).concat(U.close,`"></button>
   <ul class="`).concat(U["progress-steps"],`"></ul>
   <div class="`).concat(U.icon,`"></div>
   <img class="`).concat(U.image,`" />
   <h2 class="`).concat(U.title,'" id="').concat(U.title,`"></h2>
   <div class="`).concat(U["html-container"],'" id="').concat(U["html-container"],`"></div>
   <input class="`).concat(U.input,'" id="').concat(U.input,`" />
   <input type="file" class="`).concat(U.file,`" />
   <div class="`).concat(U.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(U.select,'" id="').concat(U.select,`"></select>
   <div class="`).concat(U.radio,`"></div>
   <label class="`).concat(U.checkbox,`">
     <input type="checkbox" id="`).concat(U.checkbox,`" />
     <span class="`).concat(U.label,`"></span>
   </label>
   <textarea class="`).concat(U.textarea,'" id="').concat(U.textarea,`"></textarea>
   <div class="`).concat(U["validation-message"],'" id="').concat(U["validation-message"],`"></div>
   <div class="`).concat(U.actions,`">
     <div class="`).concat(U.loader,`"></div>
     <button type="button" class="`).concat(U.confirm,`"></button>
     <button type="button" class="`).concat(U.deny,`"></button>
     <button type="button" class="`).concat(U.cancel,`"></button>
   </div>
   <div class="`).concat(U.footer,`"></div>
   <div class="`).concat(U["timer-progress-bar-container"],`">
     <div class="`).concat(U["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Gn=function(){var d=gt();return d?(d.remove(),dr([document.documentElement,document.body],[U["no-backdrop"],U["toast-shown"],U["has-column"]]),!0):!1},_r=function(){z.currentInstance.resetValidationMessage()},Vn=function(){var d=Se(),m=lt(d,U.input),k=lt(d,U.file),K=d.querySelector(".".concat(U.range," input")),ce=d.querySelector(".".concat(U.range," output")),Ee=lt(d,U.select),tt=d.querySelector(".".concat(U.checkbox," input")),it=lt(d,U.textarea);m.oninput=_r,k.onchange=_r,Ee.onchange=_r,tt.onchange=_r,it.oninput=_r,K.oninput=function(){_r(),ce.value=K.value},K.onchange=function(){_r(),ce.value=K.value}},hc=function(d){return typeof d=="string"?document.querySelector(d):d},pc=function(d){var m=Se();m.setAttribute("role",d.toast?"alert":"dialog"),m.setAttribute("aria-live",d.toast?"polite":"assertive"),d.toast||m.setAttribute("aria-modal","true")},gc=function(d){window.getComputedStyle(d).direction==="rtl"&&Ce(gt(),U.rtl)},mc=function(d){var m=Gn();if(Cn()){ne("SweetAlert2 requires document to initialize");return}var k=document.createElement("div");k.className=U.container,m&&Ce(k,U["no-transition"]),Ye(k,qn);var K=hc(d.target);K.appendChild(k),pc(d),gc(K),Vn()},qo=function(d,m){d instanceof HTMLElement?m.appendChild(d):f(d)==="object"?wc(d,m):d&&Ye(m,d)},wc=function(d,m){d.jquery?bc(m,d):Ye(m,d.toString())},bc=function(d,m){if(d.textContent="",0 in m)for(var k=0;k in m;k++)d.appendChild(m[k].cloneNode(!0));else d.appendChild(m.cloneNode(!0))},An=function(){if(Cn())return!1;var T=document.createElement("div");return typeof T.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof T.style.animation<"u"?"animationend":!1}(),yc=function(d,m){var k=ie(),K=re();!k||!K||(!m.showConfirmButton&&!m.showDenyButton&&!m.showCancelButton?He(k):Rt(k),et(k,m,"actions"),vc(k,K,m),Ye(K,m.loaderHtml||""),et(K,m,"loader"))};function vc(T,d,m){var k=g(),K=q(),ce=x();!k||!K||!ce||(Go(k,"confirm",m),Go(K,"deny",m),Go(ce,"cancel",m),Ec(k,K,ce,m),m.reverseButtons&&(m.toast?(T.insertBefore(ce,k),T.insertBefore(K,k)):(T.insertBefore(ce,d),T.insertBefore(K,d),T.insertBefore(k,d))))}function Ec(T,d,m,k){if(!k.buttonsStyling){dr([T,d,m],U.styled);return}Ce([T,d,m],U.styled),k.confirmButtonColor&&(T.style.backgroundColor=k.confirmButtonColor,Ce(T,U["default-outline"])),k.denyButtonColor&&(d.style.backgroundColor=k.denyButtonColor,Ce(d,U["default-outline"])),k.cancelButtonColor&&(m.style.backgroundColor=k.cancelButtonColor,Ce(m,U["default-outline"]))}function Go(T,d,m){var k=Q(d);wt(T,m["show".concat(k,"Button")],"inline-block"),Ye(T,m["".concat(d,"ButtonText")]||""),T.setAttribute("aria-label",m["".concat(d,"ButtonAriaLabel")]||""),T.className=U[d],et(T,m,"".concat(d,"Button"))}var Xy=function(d,m){var k=Te();k&&(Ye(k,m.closeButtonHtml||""),et(k,m,"closeButton"),wt(k,m.showCloseButton),k.setAttribute("aria-label",m.closeButtonAriaLabel||""))},Qy=function(d,m){var k=gt();k&&(ev(k,m.backdrop),tv(k,m.position),rv(k,m.grow),et(k,m,"container"))};function ev(T,d){typeof d=="string"?T.style.background=d:d||Ce([document.documentElement,document.body],U["no-backdrop"])}function tv(T,d){d&&(d in U?Ce(T,U[d]):(ee('The "position" parameter is not valid, defaulting to "center"'),Ce(T,U.center)))}function rv(T,d){d&&Ce(T,U["grow-".concat(d)])}var Bt={innerParams:new WeakMap,domCache:new WeakMap},nv=["input","file","range","select","radio","checkbox","textarea"],iv=function(d,m){var k=Se();if(k){var K=Bt.innerParams.get(d),ce=!K||m.input!==K.input;nv.forEach(function(Ee){var tt=lt(k,U[Ee]);tt&&(av(Ee,m.inputAttributes),tt.className=U[Ee],ce&&He(tt))}),m.input&&(ce&&ov(m),cv(m))}},ov=function(d){if(d.input){if(!Zt[d.input]){ne("Unexpected type of input! Expected ".concat(Object.keys(Zt).join(" | "),', got "').concat(d.input,'"'));return}var m=fg(d.input),k=Zt[d.input](m,d);Rt(m),d.inputAutoFocus&&setTimeout(function(){Wn(k)})}},sv=function(d){for(var m=0;m<d.attributes.length;m++){var k=d.attributes[m].name;["id","type","value","style"].includes(k)||d.removeAttribute(k)}},av=function(d,m){var k=xt(Se(),d);if(k){sv(k);for(var K in m)k.setAttribute(K,m[K])}},cv=function(d){var m=fg(d.input);f(d.customClass)==="object"&&Ce(m,d.customClass.input)},Rd=function(d,m){(!d.placeholder||m.inputPlaceholder)&&(d.placeholder=m.inputPlaceholder)},xc=function(d,m,k){if(k.inputLabel){var K=document.createElement("label"),ce=U["input-label"];K.setAttribute("for",d.id),K.className=ce,f(k.customClass)==="object"&&Ce(K,k.customClass.inputLabel),K.innerText=k.inputLabel,m.insertAdjacentElement("beforebegin",K)}},fg=function(d){return lt(Se(),U[d]||U.input)},Uu=function(d,m){["string","number"].includes(f(m))?d.value="".concat(m):rt(m)||ee('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(m),'"'))},Zt={};Zt.text=Zt.email=Zt.password=Zt.number=Zt.tel=Zt.url=Zt.search=Zt.date=Zt["datetime-local"]=Zt.time=Zt.week=Zt.month=function(T,d){return Uu(T,d.inputValue),xc(T,T,d),Rd(T,d),T.type=d.input,T},Zt.file=function(T,d){return xc(T,T,d),Rd(T,d),T},Zt.range=function(T,d){var m=T.querySelector("input"),k=T.querySelector("output");return Uu(m,d.inputValue),m.type=d.input,Uu(k,d.inputValue),xc(m,T,d),T},Zt.select=function(T,d){if(T.textContent="",d.inputPlaceholder){var m=document.createElement("option");Ye(m,d.inputPlaceholder),m.value="",m.disabled=!0,m.selected=!0,T.appendChild(m)}return xc(T,T,d),T},Zt.radio=function(T){return T.textContent="",T},Zt.checkbox=function(T,d){var m=xt(Se(),"checkbox");m.value="1",m.checked=!!d.inputValue;var k=T.querySelector("span");return Ye(k,d.inputPlaceholder),m},Zt.textarea=function(T,d){Uu(T,d.inputValue),Rd(T,d),xc(T,T,d);var m=function(K){return parseInt(window.getComputedStyle(K).marginLeft)+parseInt(window.getComputedStyle(K).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var k=parseInt(window.getComputedStyle(Se()).width),K=function(){if(document.body.contains(T)){var Ee=T.offsetWidth+m(T);Ee>k?Se().style.width="".concat(Ee,"px"):ft(Se(),"width",d.width)}};new MutationObserver(K).observe(T,{attributes:!0,attributeFilter:["style"]})}}),T};var lv=function(d,m){var k=Re();k&&(Ct(k),et(k,m,"htmlContainer"),m.html?(qo(m.html,k),Rt(k,"block")):m.text?(k.textContent=m.text,Rt(k,"block")):He(k),iv(d,m))},uv=function(d,m){var k=me();k&&(Ct(k),wt(k,m.footer,"block"),m.footer&&qo(m.footer,k),et(k,m,"footer"))},fv=function(d,m){var k=Bt.innerParams.get(d),K=Ie();if(K){if(k&&m.icon===k.icon){hg(K,m),dg(K,m);return}if(!m.icon&&!m.iconHtml){He(K);return}if(m.icon&&Object.keys(E).indexOf(m.icon)===-1){ne('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(m.icon,'"')),He(K);return}Rt(K),hg(K,m),dg(K,m),Ce(K,m.showClass&&m.showClass.icon)}},dg=function(d,m){for(var k=0,K=Object.entries(E);k<K.length;k++){var ce=W(K[k],2),Ee=ce[0],tt=ce[1];m.icon!==Ee&&dr(d,tt)}Ce(d,m.icon&&E[m.icon]),gv(d,m),dv(),et(d,m,"icon")},dv=function(){var d=Se();if(d)for(var m=window.getComputedStyle(d).getPropertyValue("background-color"),k=d.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),K=0;K<k.length;K++)k[K].style.backgroundColor=m},hv=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,pv=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,hg=function(d,m){if(!(!m.icon&&!m.iconHtml)){var k=d.innerHTML,K="";if(m.iconHtml)K=pg(m.iconHtml);else if(m.icon==="success")K=hv,k=k.replace(/ style=".*?"/g,"");else if(m.icon==="error")K=pv;else if(m.icon){var ce={question:"?",warning:"!",info:"i"};K=pg(ce[m.icon])}k.trim()!==K.trim()&&Ye(d,K)}},gv=function(d,m){if(m.iconColor){d.style.color=m.iconColor,d.style.borderColor=m.iconColor;for(var k=0,K=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];k<K.length;k++){var ce=K[k];zn(d,ce,"background-color",m.iconColor)}zn(d,".swal2-success-ring","border-color",m.iconColor)}},pg=function(d){return'<div class="'.concat(U["icon-content"],'">').concat(d,"</div>")},mv=function(d,m){var k=ke();if(k){if(!m.imageUrl){He(k);return}Rt(k,""),k.setAttribute("src",m.imageUrl),k.setAttribute("alt",m.imageAlt||""),ft(k,"width",m.imageWidth),ft(k,"height",m.imageHeight),k.className=U.image,et(k,m,"image")}},wv=function(d,m){var k=gt(),K=Se();if(!(!k||!K)){if(m.toast){ft(k,"width",m.width),K.style.width="100%";var ce=re();ce&&K.insertBefore(ce,Ie())}else ft(K,"width",m.width);ft(K,"padding",m.padding),m.color&&(K.style.color=m.color),m.background&&(K.style.background=m.background),He(B()),bv(K,m)}},bv=function(d,m){var k=m.showClass||{};d.className="".concat(U.popup," ").concat(Xe(d)?k.popup:""),m.toast?(Ce([document.documentElement,document.body],U["toast-shown"]),Ce(d,U.toast)):Ce(d,U.modal),et(d,m,"popup"),typeof m.customClass=="string"&&Ce(d,m.customClass),m.icon&&Ce(d,U["icon-".concat(m.icon)])},yv=function(d,m){var k=vt();if(k){var K=m.progressSteps,ce=m.currentProgressStep;if(!K||K.length===0||ce===void 0){He(k);return}Rt(k),k.textContent="",ce>=K.length&&ee("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),K.forEach(function(Ee,tt){var it=vv(Ee);if(k.appendChild(it),tt===ce&&Ce(it,U["active-progress-step"]),tt!==K.length-1){var Gt=Ev(m);k.appendChild(Gt)}})}},vv=function(d){var m=document.createElement("li");return Ce(m,U["progress-step"]),Ye(m,d),m},Ev=function(d){var m=document.createElement("li");return Ce(m,U["progress-step-line"]),d.progressStepsDistance&&ft(m,"width",d.progressStepsDistance),m},xv=function(d,m){var k=mt();k&&(Ct(k),wt(k,m.title||m.titleText,"block"),m.title&&qo(m.title,k),m.titleText&&(k.innerText=m.titleText),et(k,m,"title"))},gg=function(d,m){wv(d,m),Qy(d,m),yv(d,m),fv(d,m),mv(d,m),xv(d,m),Xy(d,m),lv(d,m),yc(d,m),uv(d,m);var k=Se();typeof m.didRender=="function"&&k&&m.didRender(k)},_v=function(){return Xe(Se())},mg=function(){var d;return(d=g())===null||d===void 0?void 0:d.click()},Cv=function(){var d;return(d=q())===null||d===void 0?void 0:d.click()},Av=function(){var d;return(d=x())===null||d===void 0?void 0:d.click()},Ls=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wg=function(d){d.keydownTarget&&d.keydownHandlerAdded&&(d.keydownTarget.removeEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!1)},Sv=function(d,m,k){wg(d),m.toast||(d.keydownHandler=function(K){return kv(m,K,k)},d.keydownTarget=m.keydownListenerCapture?window:Se(),d.keydownListenerCapture=m.keydownListenerCapture,d.keydownTarget.addEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!0)},Bd=function(d,m){var k,K=Je();if(K.length){d=d+m,d===K.length?d=0:d===-1&&(d=K.length-1),K[d].focus();return}(k=Se())===null||k===void 0||k.focus()},bg=["ArrowRight","ArrowDown"],Pv=["ArrowLeft","ArrowUp"],kv=function(d,m,k){d&&(m.isComposing||m.keyCode===229||(d.stopKeydownPropagation&&m.stopPropagation(),m.key==="Enter"?Tv(m,d):m.key==="Tab"?Iv(m):[].concat(bg,Pv).includes(m.key)?$v(m.key):m.key==="Escape"&&Nv(m,d,k)))},Tv=function(d,m){if(we(m.allowEnterKey)){var k=xt(Se(),m.input);if(d.target&&k&&d.target instanceof HTMLElement&&d.target.outerHTML===k.outerHTML){if(["textarea","file"].includes(m.input))return;mg(),d.preventDefault()}}},Iv=function(d){for(var m=d.target,k=Je(),K=-1,ce=0;ce<k.length;ce++)if(m===k[ce]){K=ce;break}d.shiftKey?Bd(K,-1):Bd(K,1),d.stopPropagation(),d.preventDefault()},$v=function(d){var m=ie(),k=g(),K=q(),ce=x();if(!(!m||!k||!K||!ce)){var Ee=[k,K,ce];if(!(document.activeElement instanceof HTMLElement&&!Ee.includes(document.activeElement))){var tt=bg.includes(d)?"nextElementSibling":"previousElementSibling",it=document.activeElement;if(it){for(var Gt=0;Gt<m.children.length;Gt++){if(it=it[tt],!it)return;if(it instanceof HTMLButtonElement&&Xe(it))break}it instanceof HTMLButtonElement&&it.focus()}}}},Nv=function(d,m,k){we(m.allowEscapeKey)&&(d.preventDefault(),k(Ls.esc))},Us={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Mv=function(){var d=gt(),m=Array.from(document.body.children);m.forEach(function(k){k.contains(d)||(k.hasAttribute("aria-hidden")&&k.setAttribute("data-previous-aria-hidden",k.getAttribute("aria-hidden")||""),k.setAttribute("aria-hidden","true"))})},yg=function(){var d=Array.from(document.body.children);d.forEach(function(m){m.hasAttribute("data-previous-aria-hidden")?(m.setAttribute("aria-hidden",m.getAttribute("data-previous-aria-hidden")||""),m.removeAttribute("data-previous-aria-hidden")):m.removeAttribute("aria-hidden")})},vg=typeof window<"u"&&!!window.GestureEvent,Ov=function(){if(vg&&!at(document.body,U.iosfix)){var d=document.body.scrollTop;document.body.style.top="".concat(d*-1,"px"),Ce(document.body,U.iosfix),Dv()}},Dv=function(){var d=gt();if(d){var m;d.ontouchstart=function(k){m=Rv(k)},d.ontouchmove=function(k){m&&(k.preventDefault(),k.stopPropagation())}}},Rv=function(d){var m=d.target,k=gt(),K=Re();return!k||!K||Bv(d)||Lv(d)?!1:m===k||!It(k)&&m instanceof HTMLElement&&m.tagName!=="INPUT"&&m.tagName!=="TEXTAREA"&&!(It(K)&&K.contains(m))},Bv=function(d){return d.touches&&d.touches.length&&d.touches[0].touchType==="stylus"},Lv=function(d){return d.touches&&d.touches.length>1},Uv=function(){if(at(document.body,U.iosfix)){var d=parseInt(document.body.style.top,10);dr(document.body,U.iosfix),document.body.style.top="",document.body.scrollTop=d*-1}},Fv=function(){var d=document.createElement("div");d.className=U["scrollbar-measure"],document.body.appendChild(d);var m=d.getBoundingClientRect().width-d.clientWidth;return document.body.removeChild(d),m},Fs=null,jv=function(d){Fs===null&&(document.body.scrollHeight>window.innerHeight||d==="scroll")&&(Fs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Fs+Fv(),"px"))},Wv=function(){Fs!==null&&(document.body.style.paddingRight="".concat(Fs,"px"),Fs=null)};function Eg(T,d,m,k){Et()?_g(T,k):(y(m).then(function(){return _g(T,k)}),wg(z)),vg?(d.setAttribute("style","display:none !important"),d.removeAttribute("class"),d.innerHTML=""):d.remove(),_t()&&(Wv(),Uv(),yg()),zv()}function zv(){dr([document.documentElement,document.body],[U.shown,U["height-auto"],U["no-backdrop"],U["toast-shown"]])}function Qi(T){T=qv(T);var d=Us.swalPromiseResolve.get(this),m=Hv(this);this.isAwaitingPromise?T.isDismissed||(_c(this),d(T)):m&&d(T)}var Hv=function(d){var m=Se();if(!m)return!1;var k=Bt.innerParams.get(d);if(!k||at(m,k.hideClass.popup))return!1;dr(m,k.showClass.popup),Ce(m,k.hideClass.popup);var K=gt();return dr(K,k.showClass.backdrop),Ce(K,k.hideClass.backdrop),Gv(d,m,k),!0};function xg(T){var d=Us.swalPromiseReject.get(this);_c(this),d&&d(T)}var _c=function(d){d.isAwaitingPromise&&(delete d.isAwaitingPromise,Bt.innerParams.get(d)||d._destroy())},qv=function(d){return typeof d>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},d)},Gv=function(d,m,k){var K=gt(),ce=An&&$t(m);typeof k.willClose=="function"&&k.willClose(m),ce?Vv(d,m,K,k.returnFocus,k.didClose):Eg(d,K,k.returnFocus,k.didClose)},Vv=function(d,m,k,K,ce){An&&(z.swalCloseEventFinishedCallback=Eg.bind(null,d,k,K,ce),m.addEventListener(An,function(Ee){Ee.target===m&&(z.swalCloseEventFinishedCallback(),delete z.swalCloseEventFinishedCallback)}))},_g=function(d,m){setTimeout(function(){typeof m=="function"&&m.bind(d.params)(),d._destroy&&d._destroy()})},js=function(d){var m=Se();if(m||new Hu,m=Se(),!!m){var k=re();Et()?He(Ie()):Kv(m,d),Rt(k),m.setAttribute("data-loading","true"),m.setAttribute("aria-busy","true"),m.focus()}},Kv=function(d,m){var k=ie(),K=re();!k||!K||(!m&&Xe(g())&&(m=g()),Rt(k),m&&(He(m),K.setAttribute("data-button-to-replace",m.className),k.insertBefore(K,m)),Ce([d,k],U.loading))},Zv=function(d,m){m.input==="select"||m.input==="radio"?e8(d,m):["text","email","number","tel","textarea"].some(function(k){return k===m.input})&&(xe(m.inputValue)||rt(m.inputValue))&&(js(g()),t8(d,m))},Jv=function(d,m){var k=d.getInput();if(!k)return null;switch(m.input){case"checkbox":return Yv(k);case"radio":return Xv(k);case"file":return Qv(k);default:return m.inputAutoTrim?k.value.trim():k.value}},Yv=function(d){return d.checked?1:0},Xv=function(d){return d.checked?d.value:null},Qv=function(d){return d.files&&d.files.length?d.getAttribute("multiple")!==null?d.files:d.files[0]:null},e8=function(d,m){var k=Se();if(k){var K=function(Ee){m.input==="select"?r8(k,Cg(Ee),m):m.input==="radio"&&n8(k,Cg(Ee),m)};xe(m.inputOptions)||rt(m.inputOptions)?(js(g()),Ae(m.inputOptions).then(function(ce){d.hideLoading(),K(ce)})):f(m.inputOptions)==="object"?K(m.inputOptions):ne("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(f(m.inputOptions)))}},t8=function(d,m){var k=d.getInput();k&&(He(k),Ae(m.inputValue).then(function(K){k.value=m.input==="number"?"".concat(parseFloat(K)||0):"".concat(K),Rt(k),k.focus(),d.hideLoading()}).catch(function(K){ne("Error in inputValue promise: ".concat(K)),k.value="",Rt(k),k.focus(),d.hideLoading()}))};function r8(T,d,m){var k=lt(T,U.select);if(k){var K=function(Ee,tt,it){var Gt=document.createElement("option");Gt.value=it,Ye(Gt,tt),Gt.selected=Ag(it,m.inputValue),Ee.appendChild(Gt)};d.forEach(function(ce){var Ee=ce[0],tt=ce[1];if(Array.isArray(tt)){var it=document.createElement("optgroup");it.label=Ee,it.disabled=!1,k.appendChild(it),tt.forEach(function(Gt){return K(it,Gt[1],Gt[0])})}else K(k,tt,Ee)}),k.focus()}}function n8(T,d,m){var k=lt(T,U.radio);if(k){d.forEach(function(ce){var Ee=ce[0],tt=ce[1],it=document.createElement("input"),Gt=document.createElement("label");it.type="radio",it.name=U.radio,it.value=Ee,Ag(Ee,m.inputValue)&&(it.checked=!0);var Cc=document.createElement("span");Ye(Cc,tt),Cc.className=U.label,Gt.appendChild(it),Gt.appendChild(Cc),k.appendChild(Gt)});var K=k.querySelectorAll("input");K.length&&K[0].focus()}}var Cg=function T(d){var m=[];return d instanceof Map?d.forEach(function(k,K){var ce=k;f(ce)==="object"&&(ce=T(ce)),m.push([K,ce])}):Object.keys(d).forEach(function(k){var K=d[k];f(K)==="object"&&(K=T(K)),m.push([k,K])}),m},Ag=function(d,m){return!!m&&m.toString()===d.toString()},Fu=void 0,i8=function(d){var m=Bt.innerParams.get(d);d.disableButtons(),m.input?Sg(d,"confirm"):Ud(d,!0)},o8=function(d){var m=Bt.innerParams.get(d);d.disableButtons(),m.returnInputValueOnDeny?Sg(d,"deny"):Ld(d,!1)},s8=function(d,m){d.disableButtons(),m(Ls.cancel)},Sg=function(d,m){var k=Bt.innerParams.get(d);if(!k.input){ne('The "input" parameter is needed to be set when using returnInputValueOn'.concat(Q(m)));return}var K=d.getInput(),ce=Jv(d,k);k.inputValidator?a8(d,ce,m):K&&!K.checkValidity()?(d.enableButtons(),d.showValidationMessage(k.validationMessage||K.validationMessage)):m==="deny"?Ld(d,ce):Ud(d,ce)},a8=function(d,m,k){var K=Bt.innerParams.get(d);d.disableInput();var ce=Promise.resolve().then(function(){return Ae(K.inputValidator(m,K.validationMessage))});ce.then(function(Ee){d.enableButtons(),d.enableInput(),Ee?d.showValidationMessage(Ee):k==="deny"?Ld(d,m):Ud(d,m)})},Ld=function(d,m){var k=Bt.innerParams.get(d||Fu);if(k.showLoaderOnDeny&&js(q()),k.preDeny){d.isAwaitingPromise=!0;var K=Promise.resolve().then(function(){return Ae(k.preDeny(m,k.validationMessage))});K.then(function(ce){ce===!1?(d.hideLoading(),_c(d)):d.close({isDenied:!0,value:typeof ce>"u"?m:ce})}).catch(function(ce){return kg(d||Fu,ce)})}else d.close({isDenied:!0,value:m})},Pg=function(d,m){d.close({isConfirmed:!0,value:m})},kg=function(d,m){d.rejectPromise(m)},Ud=function(d,m){var k=Bt.innerParams.get(d||Fu);if(k.showLoaderOnConfirm&&js(),k.preConfirm){d.resetValidationMessage(),d.isAwaitingPromise=!0;var K=Promise.resolve().then(function(){return Ae(k.preConfirm(m,k.validationMessage))});K.then(function(ce){Xe(B())||ce===!1?(d.hideLoading(),_c(d)):Pg(d,typeof ce>"u"?m:ce)}).catch(function(ce){return kg(d||Fu,ce)})}else Pg(d,m)};function ju(){var T=Bt.innerParams.get(this);if(T){var d=Bt.domCache.get(this);He(d.loader),Et()?T.icon&&Rt(Ie()):c8(d),dr([d.popup,d.actions],U.loading),d.popup.removeAttribute("aria-busy"),d.popup.removeAttribute("data-loading"),d.confirmButton.disabled=!1,d.denyButton.disabled=!1,d.cancelButton.disabled=!1}}var c8=function(d){var m=d.popup.getElementsByClassName(d.loader.getAttribute("data-button-to-replace"));m.length?Rt(m[0],"inline-block"):ki()&&He(d.actions)};function Tg(){var T=Bt.innerParams.get(this),d=Bt.domCache.get(this);return d?xt(d.popup,T.input):null}function Ig(T,d,m){var k=Bt.domCache.get(T);d.forEach(function(K){k[K].disabled=m})}function $g(T,d){var m=Se();if(!(!m||!T))if(T.type==="radio")for(var k=m.querySelectorAll('[name="'.concat(U.radio,'"]')),K=0;K<k.length;K++)k[K].disabled=d;else T.disabled=d}function Ng(){Ig(this,["confirmButton","denyButton","cancelButton"],!1)}function Mg(){Ig(this,["confirmButton","denyButton","cancelButton"],!0)}function Og(){$g(this.getInput(),!1)}function Dg(){$g(this.getInput(),!0)}function Rg(T){var d=Bt.domCache.get(this),m=Bt.innerParams.get(this);Ye(d.validationMessage,T),d.validationMessage.className=U["validation-message"],m.customClass&&m.customClass.validationMessage&&Ce(d.validationMessage,m.customClass.validationMessage),Rt(d.validationMessage);var k=this.getInput();k&&(k.setAttribute("aria-invalid","true"),k.setAttribute("aria-describedby",U["validation-message"]),Wn(k),Ce(k,U.inputerror))}function Bg(){var T=Bt.domCache.get(this);T.validationMessage&&He(T.validationMessage);var d=this.getInput();d&&(d.removeAttribute("aria-invalid"),d.removeAttribute("aria-describedby"),dr(d,U.inputerror))}var Ws={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},l8=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],u8={},f8=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Lg=function(d){return Object.prototype.hasOwnProperty.call(Ws,d)},Ug=function(d){return l8.indexOf(d)!==-1},Fg=function(d){return u8[d]},d8=function(d){Lg(d)||ee('Unknown parameter "'.concat(d,'"'))},h8=function(d){f8.includes(d)&&ee('The parameter "'.concat(d,'" is incompatible with toasts'))},p8=function(d){var m=Fg(d);m&&le(d,m)},g8=function(d){d.backdrop===!1&&d.allowOutsideClick&&ee('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var m in d)d8(m),d.toast&&h8(m),p8(m)};function jg(T){var d=Se(),m=Bt.innerParams.get(this);if(!d||at(d,m.hideClass.popup)){ee("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var k=m8(T),K=Object.assign({},m,k);gg(this,K),Bt.innerParams.set(this,K),Object.defineProperties(this,{params:{value:Object.assign({},this.params,T),writable:!1,enumerable:!0}})}var m8=function(d){var m={};return Object.keys(d).forEach(function(k){Ug(k)?m[k]=d[k]:ee("Invalid parameter to update: ".concat(k))}),m};function Wg(){var T=Bt.domCache.get(this),d=Bt.innerParams.get(this);if(!d){zg(this);return}T.popup&&z.swalCloseEventFinishedCallback&&(z.swalCloseEventFinishedCallback(),delete z.swalCloseEventFinishedCallback),typeof d.didDestroy=="function"&&d.didDestroy(),w8(this)}var w8=function(d){zg(d),delete d.params,delete z.keydownHandler,delete z.keydownTarget,delete z.currentInstance},zg=function(d){d.isAwaitingPromise?(Fd(Bt,d),d.isAwaitingPromise=!0):(Fd(Us,d),Fd(Bt,d),delete d.isAwaitingPromise,delete d.disableButtons,delete d.enableButtons,delete d.getInput,delete d.disableInput,delete d.enableInput,delete d.hideLoading,delete d.disableLoading,delete d.showValidationMessage,delete d.resetValidationMessage,delete d.close,delete d.closePopup,delete d.closeModal,delete d.closeToast,delete d.rejectPromise,delete d.update,delete d._destroy)},Fd=function(d,m){for(var k in d)d[k].delete(m)},b8=Object.freeze({__proto__:null,_destroy:Wg,close:Qi,closeModal:Qi,closePopup:Qi,closeToast:Qi,disableButtons:Mg,disableInput:Dg,disableLoading:ju,enableButtons:Ng,enableInput:Og,getInput:Tg,handleAwaitingPromise:_c,hideLoading:ju,rejectPromise:xg,resetValidationMessage:Bg,showValidationMessage:Rg,update:jg}),y8=function(d,m,k){d.toast?v8(d,m,k):(x8(m),_8(m),C8(d,m,k))},v8=function(d,m,k){m.popup.onclick=function(){d&&(E8(d)||d.timer||d.input)||k(Ls.close)}},E8=function(d){return!!(d.showConfirmButton||d.showDenyButton||d.showCancelButton||d.showCloseButton)},Wu=!1,x8=function(d){d.popup.onmousedown=function(){d.container.onmouseup=function(m){d.container.onmouseup=function(){},m.target===d.container&&(Wu=!0)}}},_8=function(d){d.container.onmousedown=function(m){m.target===d.container&&m.preventDefault(),d.popup.onmouseup=function(k){d.popup.onmouseup=function(){},(k.target===d.popup||k.target instanceof HTMLElement&&d.popup.contains(k.target))&&(Wu=!0)}}},C8=function(d,m,k){m.container.onclick=function(K){if(Wu){Wu=!1;return}K.target===m.container&&we(d.allowOutsideClick)&&k(Ls.backdrop)}},A8=function(d){return f(d)==="object"&&d.jquery},Hg=function(d){return d instanceof Element||A8(d)},S8=function(d){var m={};return f(d[0])==="object"&&!Hg(d[0])?Object.assign(m,d[0]):["title","html","icon"].forEach(function(k,K){var ce=d[K];typeof ce=="string"||Hg(ce)?m[k]=ce:ce!==void 0&&ne("Unexpected type of ".concat(k,'! Expected "string" or "Element", got ').concat(f(ce)))}),m};function P8(){for(var T=this,d=arguments.length,m=new Array(d),k=0;k<d;k++)m[k]=arguments[k];return s(T,m)}function k8(T){var d=function(m){function k(){return p(this,k),n(this,k,arguments)}return A(k,m),v(k,[{key:"_main",value:function(ce,Ee){return R(_(k.prototype),"_main",this).call(this,ce,Object.assign({},T,Ee))}}])}(this);return d}var T8=function(){return z.timeout&&z.timeout.getTimerLeft()},qg=function(){if(z.timeout)return Hn(),z.timeout.stop()},Gg=function(){if(z.timeout){var d=z.timeout.start();return an(d),d}},I8=function(){var d=z.timeout;return d&&(d.running?qg():Gg())},$8=function(d){if(z.timeout){var m=z.timeout.increase(d);return an(m,!0),m}},N8=function(){return!!(z.timeout&&z.timeout.isRunning())},Vg=!1,jd={};function M8(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";jd[T]=this,Vg||(document.body.addEventListener("click",O8),Vg=!0)}var O8=function(d){for(var m=d.target;m&&m!==document;m=m.parentNode)for(var k in jd){var K=m.getAttribute(k);if(K){jd[k].fire({template:K});return}}},D8=Object.freeze({__proto__:null,argsToParams:S8,bindClickHandler:M8,clickCancel:Av,clickConfirm:mg,clickDeny:Cv,enableLoading:js,fire:P8,getActions:ie,getCancelButton:x,getCloseButton:Te,getConfirmButton:g,getContainer:gt,getDenyButton:q,getFocusableElements:Je,getFooter:me,getHtmlContainer:Re,getIcon:Ie,getIconContent:Pe,getImage:ke,getInputLabel:Z,getLoader:re,getPopup:Se,getProgressSteps:vt,getTimerLeft:T8,getTimerProgressBar:Ne,getTitle:mt,getValidationMessage:B,increaseTimer:$8,isDeprecatedParameter:Fg,isLoading:Si,isTimerRunning:N8,isUpdatableParameter:Ug,isValidParameter:Lg,isVisible:_v,mixin:k8,resumeTimer:Gg,showLoading:js,stopTimer:qg,toggleTimer:I8}),R8=function(){function T(d,m){p(this,T),this.callback=d,this.remaining=m,this.running=!1,this.start()}return v(T,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(m){var k=this.running;return k&&this.stop(),this.remaining+=m,k&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}])}(),Kg=["swal-title","swal-html","swal-footer"],B8=function(d){var m=typeof d.template=="string"?document.querySelector(d.template):d.template;if(!m)return{};var k=m.content;q8(k);var K=Object.assign(L8(k),U8(k),F8(k),j8(k),W8(k),z8(k),H8(k,Kg));return K},L8=function(d){var m={},k=Array.from(d.querySelectorAll("swal-param"));return k.forEach(function(K){Vo(K,["name","value"]);var ce=K.getAttribute("name"),Ee=K.getAttribute("value");typeof Ws[ce]=="boolean"?m[ce]=Ee!=="false":f(Ws[ce])==="object"?m[ce]=JSON.parse(Ee):m[ce]=Ee}),m},U8=function(d){var m={},k=Array.from(d.querySelectorAll("swal-function-param"));return k.forEach(function(K){var ce=K.getAttribute("name"),Ee=K.getAttribute("value");m[ce]=new Function("return ".concat(Ee))()}),m},F8=function(d){var m={},k=Array.from(d.querySelectorAll("swal-button"));return k.forEach(function(K){Vo(K,["type","color","aria-label"]);var ce=K.getAttribute("type");m["".concat(ce,"ButtonText")]=K.innerHTML,m["show".concat(Q(ce),"Button")]=!0,K.hasAttribute("color")&&(m["".concat(ce,"ButtonColor")]=K.getAttribute("color")),K.hasAttribute("aria-label")&&(m["".concat(ce,"ButtonAriaLabel")]=K.getAttribute("aria-label"))}),m},j8=function(d){var m={},k=d.querySelector("swal-image");return k&&(Vo(k,["src","width","height","alt"]),k.hasAttribute("src")&&(m.imageUrl=k.getAttribute("src")),k.hasAttribute("width")&&(m.imageWidth=k.getAttribute("width")),k.hasAttribute("height")&&(m.imageHeight=k.getAttribute("height")),k.hasAttribute("alt")&&(m.imageAlt=k.getAttribute("alt"))),m},W8=function(d){var m={},k=d.querySelector("swal-icon");return k&&(Vo(k,["type","color"]),k.hasAttribute("type")&&(m.icon=k.getAttribute("type")),k.hasAttribute("color")&&(m.iconColor=k.getAttribute("color")),m.iconHtml=k.innerHTML),m},z8=function(d){var m={},k=d.querySelector("swal-input");k&&(Vo(k,["type","label","placeholder","value"]),m.input=k.getAttribute("type")||"text",k.hasAttribute("label")&&(m.inputLabel=k.getAttribute("label")),k.hasAttribute("placeholder")&&(m.inputPlaceholder=k.getAttribute("placeholder")),k.hasAttribute("value")&&(m.inputValue=k.getAttribute("value")));var K=Array.from(d.querySelectorAll("swal-input-option"));return K.length&&(m.inputOptions={},K.forEach(function(ce){Vo(ce,["value"]);var Ee=ce.getAttribute("value"),tt=ce.innerHTML;m.inputOptions[Ee]=tt})),m},H8=function(d,m){var k={};for(var K in m){var ce=m[K],Ee=d.querySelector(ce);Ee&&(Vo(Ee,[]),k[ce.replace(/^swal-/,"")]=Ee.innerHTML.trim())}return k},q8=function(d){var m=Kg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(d.children).forEach(function(k){var K=k.tagName.toLowerCase();m.includes(K)||ee("Unrecognized element <".concat(K,">"))})},Vo=function(d,m){Array.from(d.attributes).forEach(function(k){m.indexOf(k.name)===-1&&ee(['Unrecognized attribute "'.concat(k.name,'" on <').concat(d.tagName.toLowerCase(),">."),"".concat(m.length?"Allowed attributes are: ".concat(m.join(", ")):"To set the value, use HTML within the element.")])})},Zg=10,G8=function(d){var m=gt(),k=Se();typeof d.willOpen=="function"&&d.willOpen(k);var K=window.getComputedStyle(document.body),ce=K.overflowY;J8(m,k,d),setTimeout(function(){K8(m,k)},Zg),_t()&&(Z8(m,d.scrollbarPadding,ce),Mv()),!Et()&&!z.previousActiveElement&&(z.previousActiveElement=document.activeElement),typeof d.didOpen=="function"&&setTimeout(function(){return d.didOpen(k)}),dr(m,U["no-transition"])},V8=function T(d){var m=Se();if(!(d.target!==m||!An)){var k=gt();m.removeEventListener(An,T),k.style.overflowY="auto"}},K8=function(d,m){An&&$t(m)?(d.style.overflowY="hidden",m.addEventListener(An,V8)):d.style.overflowY="auto"},Z8=function(d,m,k){Ov(),m&&k!=="hidden"&&jv(k),setTimeout(function(){d.scrollTop=0})},J8=function(d,m,k){Ce(d,k.showClass.backdrop),k.animation?(m.style.setProperty("opacity","0","important"),Rt(m,"grid"),setTimeout(function(){Ce(m,k.showClass.popup),m.style.removeProperty("opacity")},Zg)):Rt(m,"grid"),Ce([document.documentElement,document.body],U.shown),k.heightAuto&&k.backdrop&&!k.toast&&Ce([document.documentElement,document.body],U["height-auto"])},Jg={email:function(d,m){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(d)?Promise.resolve():Promise.resolve(m||"Invalid email address")},url:function(d,m){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(d)?Promise.resolve():Promise.resolve(m||"Invalid URL")}};function Y8(T){T.inputValidator||(T.input==="email"&&(T.inputValidator=Jg.email),T.input==="url"&&(T.inputValidator=Jg.url))}function X8(T){(!T.target||typeof T.target=="string"&&!document.querySelector(T.target)||typeof T.target!="string"&&!T.target.appendChild)&&(ee('Target parameter is not valid, defaulting to "body"'),T.target="body")}function Q8(T){Y8(T),T.showLoaderOnConfirm&&!T.preConfirm&&ee(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),X8(T),typeof T.title=="string"&&(T.title=T.title.split(`
`).join("<br />")),mc(T)}var Kn,zu=new WeakMap,Jt=function(){function T(){if(p(this,T),O(this,zu,void 0),!(typeof window>"u")){Kn=this;for(var d=arguments.length,m=new Array(d),k=0;k<d;k++)m[k]=arguments[k];var K=Object.freeze(this.constructor.argsToParams(m));this.params=K,this.isAwaitingPromise=!1,o(zu,this,this._main(Kn.params))}}return v(T,[{key:"_main",value:function(m){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(g8(Object.assign({},k,m)),z.currentInstance){var K=Us.swalPromiseResolve.get(z.currentInstance),ce=z.currentInstance.isAwaitingPromise;z.currentInstance._destroy(),ce||K({isDismissed:!0}),_t()&&yg()}z.currentInstance=Kn;var Ee=t7(m,k);Q8(Ee),Object.freeze(Ee),z.timeout&&(z.timeout.stop(),delete z.timeout),clearTimeout(z.restoreFocusTimeout);var tt=r7(Kn);return gg(Kn,Ee),Bt.innerParams.set(Kn,Ee),e7(Kn,tt,Ee)}},{key:"then",value:function(m){return i(zu,this).then(m)}},{key:"finally",value:function(m){return i(zu,this).finally(m)}}])}(),e7=function(d,m,k){return new Promise(function(K,ce){var Ee=function(it){d.close({isDismissed:!0,dismiss:it})};Us.swalPromiseResolve.set(d,K),Us.swalPromiseReject.set(d,ce),m.confirmButton.onclick=function(){i8(d)},m.denyButton.onclick=function(){o8(d)},m.cancelButton.onclick=function(){s8(d,Ee)},m.closeButton.onclick=function(){Ee(Ls.close)},y8(k,m,Ee),Sv(z,k,Ee),Zv(d,k),G8(k),n7(z,k,Ee),i7(m,k),setTimeout(function(){m.container.scrollTop=0})})},t7=function(d,m){var k=B8(d),K=Object.assign({},Ws,m,k,d);return K.showClass=Object.assign({},Ws.showClass,K.showClass),K.hideClass=Object.assign({},Ws.hideClass,K.hideClass),K.animation===!1&&(K.showClass={backdrop:"swal2-noanimation"},K.hideClass={}),K},r7=function(d){var m={popup:Se(),container:gt(),actions:ie(),confirmButton:g(),denyButton:q(),cancelButton:x(),loader:re(),closeButton:Te(),validationMessage:B(),progressSteps:vt()};return Bt.domCache.set(d,m),m},n7=function(d,m,k){var K=Ne();He(K),m.timer&&(d.timeout=new R8(function(){k("timer"),delete d.timeout},m.timer),m.timerProgressBar&&(Rt(K),et(K,m,"timerProgressBar"),setTimeout(function(){d.timeout&&d.timeout.running&&an(m.timer)})))},i7=function(d,m){if(!m.toast){if(!we(m.allowEnterKey)){s7();return}o7(d,m)||Bd(-1,1)}},o7=function(d,m){return m.focusDeny&&Xe(d.denyButton)?(d.denyButton.focus(),!0):m.focusCancel&&Xe(d.cancelButton)?(d.cancelButton.focus(),!0):m.focusConfirm&&Xe(d.confirmButton)?(d.confirmButton.focus(),!0):!1},s7=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Yg=new Date,Xg=localStorage.getItem("swal-initiation");Xg?(Yg.getTime()-Date.parse(Xg))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var T=document.createElement("audio");T.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",T.loop=!0,document.body.appendChild(T),setTimeout(function(){T.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Yg))}Jt.prototype.disableButtons=Mg,Jt.prototype.enableButtons=Ng,Jt.prototype.getInput=Tg,Jt.prototype.disableInput=Dg,Jt.prototype.enableInput=Og,Jt.prototype.hideLoading=ju,Jt.prototype.disableLoading=ju,Jt.prototype.showValidationMessage=Rg,Jt.prototype.resetValidationMessage=Bg,Jt.prototype.close=Qi,Jt.prototype.closePopup=Qi,Jt.prototype.closeModal=Qi,Jt.prototype.closeToast=Qi,Jt.prototype.rejectPromise=xg,Jt.prototype.update=jg,Jt.prototype._destroy=Wg,Object.assign(Jt,D8),Object.keys(b8).forEach(function(T){Jt[T]=function(){if(Kn&&Kn[T]){var d;return(d=Kn)[T].apply(d,arguments)}return null}}),Jt.DismissReason=Ls,Jt.version="11.11.0";var Hu=Jt;return Hu.default=Hu,Hu}),typeof In<"u"&&In.Sweetalert2&&(In.swal=In.sweetAlert=In.Swal=In.SweetAlert=In.Sweetalert2),typeof document<"u"&&function(r,n){var i=r.createElement("style");if(r.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=n);else try{i.innerHTML=n}catch{i.innerText=n}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(Hy);var pL=Hy.exports;const oa=bu(pL);function Hh(t,e){let r;oa.fire({title:t,html:`${e} <b></b>`,timer:2e3,timerProgressBar:!0,didOpen:()=>{oa.showLoading();const n=oa.getPopup().querySelector("b");r=setInterval(()=>{n.textContent=`${oa.getTimerLeft()}`},100)},willClose:()=>{clearInterval(r)}}).then(n=>{n.dismiss===oa.DismissReason.timer&&console.log("")})}function ut(t,e,r,n){oa.fire({icon:r,title:t,text:e,showClass:{popup:`
        animate__animated
        animate__jello
        animate__faster
      `},hideClass:{popup:`
        animate__animated
        animate__fadeOutDown
        animate__faster
      `}})}const ig="91f3c79a170a4fd822c062bd880f8b6e",Jr=new Ut.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Jp68VtVIMNhMDN9NJpZqdvh5ehFEwL8j"),Xw={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},{chains:p0,publicClient:gL}=r_([pa],[$N({projectId:ig}),TN()]),mL=g_({autoConnect:!1,connectors:[new kN({chains:p0,options:{projectId:ig,showQrModal:!1,metadata:Xw}}),new Ik({chains:p0}),new jp({chains:p0,options:{shimDisconnect:!0}}),new Uk({chains:p0,options:{appName:Xw.name}})],publicClient:gL}),au=NN({wagmiConfig:mL,projectId:ig,defaultChain:pa,themeVariables:{"--w3m-z-index":1e3},themeMode:"light"});au.getState();const _a=document.getElementById("open-connect-modal"),Nd=document.getElementById("account"),Md=document.getElementById("accountOne"),qy=document.getElementById("purchaseButton"),Od=document.getElementById("purchaseButtonUSDT"),wL=document.getElementById("bnbInput"),cu=document.getElementById("novisInput"),ni=document.getElementById("approveButton"),bL=document.getElementById("ETHbutton"),yL=document.getElementById("USDTbutton"),og=document.getElementById("claimTokens"),Ca=document.getElementById("connecClaimtButton");_a.onclick=Dd;Ca.onclick=Dd;ni.onclick=PL;og.onclick=TL;qy.onclick=function(){SL()};Od.onclick=function(){kL()};let _s=!1,lu="ETH";var Sf=!1,ap;let fa=null;bL.onclick=function(){Gy("ETH")};yL.onclick=function(){Gy("USDT")};Nd.addEventListener("click",function(){_s==!1?Dd():Jy()});Md.addEventListener("click",function(){_s==!1?Dd():Jy()});function Gy(t){var e=document.getElementById("change-logo");t==="ETH"?(e.innerHTML='<img id="logo-currency" style="width: 40px" src="new-img/ethlogo.png" alt="ETH">',lu="ETH",Sf=!1,Ky(),_s===!0&&(xL(),Od.style.display="none"),fa!=null&&cp(fa)):t==="USDT"&&(e.innerHTML='<img id="logo-currency" style="width: 40px" src="new-img/usdt logo.png" alt="USDT">',lu="USDT",Sf=!0,_s===!0&&(Vy(),Zy()),fa!=null&&cp(fa))}async function cp(t){try{if(lu==="ETH"){const[e,r,n]=await Promise.all([sg(),cg(),ag()]),i=t*parseFloat(e)*parseFloat(r)/parseFloat(n);cu.value=i.toFixed(2),vL()}if(lu=="USDT"){const[e,r]=await Promise.all([lg(),ug()]),n=t*parseFloat(e)/parseFloat(r);cu.value=n.toFixed(2)}}catch(e){console.error(e)}}function vL(){const t=EL(async()=>{if(lu==="ETH")try{const[e,r,n]=await Promise.all([sg(),cg(),ag()]),i=bnbAmount*parseFloat(e)*parseFloat(r)/parseFloat(n);cu.value=i.toFixed(2)}catch(e){console.error("Error fetching values for debounced update:",e)}},100);cu.addEventListener("keyup",t)}function EL(t,e){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{t.apply(this,n)},e)}}document.addEventListener("DOMContentLoaded",async()=>{await _L(),await AL(),a6(t=>{if(console.log("Account changed:",t),_s&&t.address!==ap){const e=t.address;console.log("User is trying to change their account!");const r=`${e.substring(0,5)}...${e.slice(-3)}`;Nd.innerHTML=r,Md.innerHTML=r,ap=t.address,Yy()}})});wL.addEventListener("input",t=>{const e=parseFloat(t.target.value);isNaN(e)?(cu.value="",fa=null):(fa=e,cp(e))});function Vy(){var t=document.getElementById("purchaseButton");t.style.display="none"}function xL(){var t=document.getElementById("purchaseButton");t.style.display="block"}function Ky(){var t=document.getElementById("approveButton");t.style.display="none"}function Zy(){var t=document.getElementById("approveButton");t.style.display="block"}async function Dd(){for(await i6(),await au.open();au.getState().open;)await new Promise(o=>setTimeout(o,100));const t=Ui();if(console.log(t.address),t.isConnected==!1){ut("Please Connect Wallet","","warning");return}const e=Tl();console.log(e.chain.id),e.chain.id!=1&&(ut("Connect to ETH","","success"),await s6({chainId:1})),await Yy(),_s=!0,_a.innerHTML="Connecting...",Ca.innerHTML="Connecting...",_a.innerHTML="Connected",_a.style.display="none",Ca.innerHTML="Connected",Ca.style.display="none",og.style.display="block",Sf==!0&&Zy(),Sf==!1&&(qy.style.display="block");const n=t.address;ap=n;const i=`${n.substring(0,5)}...${n.slice(-3)}`;Nd.innerHTML=i,Md.innerHTML=i}async function Jy(){if(_s===!1)return;for(await au.open();au.getState().open;)await new Promise(e=>setTimeout(e,100));const t=Ui();console.log(t),t.address||(console.log("Disconnected"),_a.style.display="block",Ca.style.display="block",_a.innerHTML="Connect",Ca.innerHTML="See Your Claimable Tokens",og.style.display="none",Vy(),Ky(),Nd.innerHTML="Connect",Md.innerHTML="Connect")}async function _L(){const t=new Ut.Contract(ir,Lr,Jr);try{const e=await t.progressETH(),r=document.getElementById("progress"),n=document.getElementById("progressTwo"),i=Ut.utils.formatUnits(e),o=await t.getETHPriceInUSD(),s=parseFloat(i)*parseFloat(o);console.log(s);const a=await t.progressUSDT(),c=parseFloat(a)/10**6;console.log(c);const l=parseFloat(s)+parseFloat(c),u=parseFloat(l).toFixed(2);r.innerHTML=parseFloat(u).toLocaleString(),n.innerHTML=parseFloat(u).toLocaleString(),console.log(u),CL(u)}catch(e){console.log(e),ut(e.message,"","error")}}async function CL(t){const e=document.getElementById("progressBarRect"),n=document.querySelector(".section2__progressBarContainer").offsetWidth-4,i=parseFloat(t.replace(",","")),o=0,s=1e6,a=Math.max(0,Math.min((i-o)/(s-o),1));e.style.width=a*n+"px"}async function AL(){const t=new Ut.Contract(ir,Lr,Jr);try{const e=await t.soldTokens(),r=document.getElementById("tokens-sold"),n=Ut.utils.formatUnits(e),i=parseFloat(n).toFixed(1);r.innerHTML=parseFloat(i).toLocaleString()}catch(e){console.log(e),ut(e.message,"","error")}}async function sg(){const t=new Ut.Contract(ir,Lr,Jr);try{return await t.getETHPriceInUSD()}catch(e){throw new Error(e.message)}}async function ag(){const t=new Ut.Contract(ir,Lr,Jr);try{return await t.getTokenUsdPrice()}catch(e){throw new Error(e.message)}}async function cg(){const t=new Ut.Contract(ir,Lr,Jr);try{return await t.getDivider()}catch(e){throw new Error(e.message)}}async function lg(){const t=new Ut.Contract(ir,Lr,Jr);try{return(await t.getUsdtRate()).toString()}catch(e){throw new Error(e.message)}}async function ug(){const t=new Ut.Contract(ir,Lr,Jr);try{return await t.getUsdtDivider()}catch(e){throw new Error(e.message)}}async function SL(){console.log("running...");const t=document.getElementById("bnbInput").value;if(t>=.001){console.log(`Funding with ${t}...`),console.log("Buying with ETH"),ut("Please wait for wallet confirmation. ","Remember to confirm transaction inside your wallet","info");const e=new Ut.Contract(ir,Lr,Jr);try{if(await e.checkPresaleStatus()==!0){if(await e.checkPresaleEnd()==!0){ut("Presale has ended","","warning");return}const o=Ui().address,s=await Jr.getBalance(o);if(Ut.utils.formatEther(s)>=t){const c=await e.getClaimableTokens(),l=Ut.utils.formatUnits(c),[u,f,p]=await Promise.all([sg(),cg(),ag()]),b=t*parseFloat(u)*parseFloat(f)/parseFloat(p);if(console.log(l),l>=b){const{hash:v}=await ga({address:ir,abi:Lr,functionName:"buyTokens",value:dx(t)}),A=await ma({confirmations:2,hash:v});console.log(A),console.log("Done"),ut("Tokens Bought! Kindly wait for claim period to start.","You may refresh page to see your updated claimable tokens","success")}else ut("not enought tokens availible to be sold at this moment","","error")}else ut("you do not have enough ETH","","error")}else ut("Presale not started","","warning")}catch(r){console.log(r),ut(r.message,"","error");return}}else ut("Oops!","Please enter amount more than 0.001 ETH","warning")}async function PL(){const t=document.getElementById("bnbInput").value,e=Ut.utils.parseUnits(t,6);if(t>=1){console.log("approving..."),ut("Approve Tokens in your Wallet!","Please approve tokens inside your wallet","info");const r=new Ut.Contract(d0,h0,Jr),n=new Ut.Contract(ir,Lr,Jr);try{if(await n.checkPresaleStatus()==!1){ut("Presale not started","","warning");return}if(await n.checkPresaleEnd()==!0){ut("Presale has ended","","warning");return}const s=await n.getClaimableTokens(),a=Ut.utils.formatUnits(s),[c,l]=await Promise.all([lg(),ug()]),u=parseFloat(t)*parseFloat(c)/parseFloat(l);if(console.log(a),console.log(u),a>=u){const p=Ui().address,b=await r.balanceOf(p),v=Ut.utils.formatUnits(b,6),A=parseFloat(v);if(console.log(A),console.log(t),A>=t){const _=await r.allowance(p,ir);if(_==0){console.log("first approve");const{hash:P}=await ga({address:d0,abi:h0,functionName:"approve",args:[ir,e]});Hh("approving...",""),ni.innerHTML="Approving..";const M=await ma({confirmations:2,hash:P});console.log(M),console.log("Done")}if(_.lt(e)&&_!=0){console.log("second approve"),ut("Will now Reset USDT allowance. USDT ERC20 requires resetting approval when spending limits are too low. Please let your wallet approve USDT as 0","","info");const{hash:P}=await ga({address:d0,abi:h0,functionName:"approve",args:[ir,"0"]});Hh("approving...",""),ni.innerHTML="Approving..";const M=await ma({confirmations:2,hash:P});console.log(M),ut("Will now approve your desired amount","","success")}if(await r.allowance(p,ir)==0){const{hash:P}=await ga({address:d0,abi:h0,functionName:"approve",args:[ir,e]});Hh("approving...",""),ni.innerHTML="Approving..";const M=await ma({confirmations:2,hash:P});console.log(M),console.log("Done"),console.log("Done")}Od.style.display="block",ni.innerHTML="Approved",ni.style.backgroundColor="#00FF00",ni.style.color="#000000",ut("Approved!","","success")}else ut("You do not have enough balance","","warning")}else ut("Not Enough tokens availaible at the moment","","warning")}catch(i){console.log(i),ut(i.message,"","error");return}}else ut("Please enter amount more than 1 USDT!","","warning")}async function kL(){const t=document.getElementById("bnbInput").value,e=Ut.utils.parseUnits(t,6);if(t>=1){console.log(`Funding with ${t}...`),console.log("Buying with USDT"),ut("Please wait for wallet confirmation.","Remember to confirm transaction inside your wallet","info");const r=new Ut.Contract(ir,Lr,Jr);try{if(await r.checkPresaleStatus()==!0){if(await r.checkPresaleEnd()==!0){ut("Presale has ended","","warning");return}const o=await r.getClaimableTokens(),s=Ut.utils.formatUnits(o),[a,c]=await Promise.all([lg(),ug()]),l=parseFloat(t)*parseFloat(a)/parseFloat(c);if(console.log(s),console.log(l),s>=l){const{hash:u}=await ga({address:ir,abi:Lr,functionName:"buyTokensWithUSDT",args:[e]}),f=await ma({confirmations:2,hash:u});console.log(f),console.log("Done"),ut("Tokens Bought! Kindly wait for claim period to start.","You may refresh page to see your updated claimable tokens","success"),Od.style.display="none",ni.style.backgroundColor="#1fa2ed",ni.innerHTML="Approve",ni.style.color="#f7f7f7"}else ut("Not enough tokens availible to be sold at this moment","","warning")}else ut("Presale not started","","warning")}catch(n){console.log(n),ut(n.message,"","error");return}}else ut("Please enter amount more than 1 USDT !","","warning")}async function TL(){console.log("claiming Tokens"),ut("Please wait for wallet confirmation","","info");const t=new Ut.Contract(ir,Lr,Jr);try{if(await t.checkPresaleStatus()==!0)if(await t.checkPresaleEnd()==!0){const i=Ui().address;if((await t.Customer(i.toString())).tokensBought==0){ut("No tokens left to be claimed","","error");return}const{hash:a}=await ga({address:ir,abi:Lr,functionName:"claimTokens"}),c=await ma({confirmations:2,hash:a});console.log(c),ut("Tokens claimed. Please import address 0x645cA24e957d25D02557f34b6eBCFdE70662d8Aa into your wallet","","success")}else ut("Presale has not ended","","warning");else ut("Presale has not started","","warning")}catch(e){console.log(e)}}async function Yy(){const t=new Ut.Contract(ir,Lr,Jr);try{const r=Ui().address,n=await t.Customer(r.toString()),i=document.getElementById("tokens-claim"),o=document.getElementById("bonus-claim"),s=n.tokensBought,a=n.customBonus,c=Ut.utils.formatUnits(s);let l=Ut.utils.formatUnits(a),u=0;parseFloat(c)>0?u=parseFloat(c)-parseFloat(l):(u=parseFloat(c),l=0),i.innerText=parseFloat(u).toFixed(2),o.innerText=parseFloat(l).toFixed(2)}catch(e){console.log(e)}}export{VE as $,ji as A,Rl as B,mn as C,hi as D,w1 as E,wn as F,Bl as G,J0 as H,Ll as I,ms as J,Y0 as K,Po as L,x1 as M,bs as N,pi as O,Z0 as P,Fl as Q,Wi as R,Fa as S,aa as T,Ot as U,gs as V,p1 as W,Br as X,Zr as Y,ef as Z,OE as _,tC as a,jF as a$,KE as a0,ZE as a1,j5 as a2,ME as a3,g0 as a4,bu as a5,Ur as a6,Do as a7,$L as a8,ka as a9,CF as aA,AF as aB,SF as aC,PF as aD,D$ as aE,NF as aF,TF as aG,$F as aH,IF as aI,G4 as aJ,hd as aK,Kr as aL,LF as aM,gj as aN,OF as aO,mj as aP,Tu as aQ,WF as aR,ZF as aS,KF as aT,BF as aU,HF as aV,Ga as aW,zF as aX,oj as aY,XF as aZ,En as a_,be as aa,Pf as ab,Dr as ac,Aa as ad,fl as ae,L9 as af,uu as ag,Bi as ah,Bf as ai,Kc as aj,di as ak,xu as al,e6 as am,dd as an,as as ao,Ke as ap,jn as aq,sd as ar,Mn as as,Ln as at,bm as au,In as av,cs as aw,QF as ax,ej as ay,lo as az,$a as b,UF as b0,FF as b1,pd as b2,_2 as b3,V4 as b4,DF as b5,RF as b6,kF as b7,GF as b8,VF as b9,_F as bA,CT as bB,y4 as bC,UI as bD,gd as ba,MF as bb,C2 as bc,JF as bd,qF as be,YF as bf,wj as bg,nj as bh,rj as bi,bN as bj,hj as bk,sj as bl,yN as bm,tj as bn,uj as bo,aj as bp,fj as bq,pj as br,cj as bs,lj as bt,dj as bu,ij as bv,lN as bw,Z4 as bx,Eh as by,xF as bz,ye as c,Ml as d,g1 as e,Ol as f,j0 as g,Na as h,eC as i,Ma as j,W0 as k,Fi as l,z0 as m,Oa as n,Co as o,H0 as p,Ao as q,So as r,y6 as s,Dl as t,Da as u,G0 as v,Bn as w,ws as x,V0 as y,K0 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-6w5Bb1Ur.js","assets/events-zFXpSggJ.js","assets/index.es-xWmViiA2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}