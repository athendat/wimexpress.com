"use strict";(self.webpackChunkwimexpress=self.webpackChunkwimexpress||[]).push([[592],{7231:(C,d,t)=>{t.d(d,{C:()=>r});var o=t(529),h=t(2340),l=t(4650);const _=h.N.API_URL;let r=(()=>{class i{constructor(E){this._httpClient=E}uploadImage(E,u){const M=new FormData;return M.append("image",u,u.name),this._httpClient.post(`${_}/cloudinary/upload/${E}`,M)}removeImage(E){const u=E.slice(E.indexOf("wirepharma"),E.length).split(".")[0],M=(new o.LE).set("public_id",u);return this._httpClient.delete(`${_}/cloudinary/remove`,{params:M})}}return i.\u0275fac=function(E){return new(E||i)(l.LFG(o.eN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},6428:(C,d,t)=>{t.d(d,{B:()=>l});const l=(0,t(9653).P1)(_=>_.pagination,_=>_.pagination)},2077:(C,d,t)=>{t.d(d,{O:()=>l,R:()=>_});var o=t(4650),h=t(6912);let l=(()=>{class r{constructor(a){this._couriersService=a}resolve(a,E){return this._couriersService.getCouriers()}}return r.\u0275fac=function(a){return new(a||r)(o.LFG(h.M))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),_=(()=>{class r{constructor(a){this._couriersService=a}resolve(a,E){const u=a.paramMap.get("courierId");if("new"!==u)return this._couriersService.getCourierById(u)}}return r.\u0275fac=function(a){return new(a||r)(o.LFG(h.M))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1635:(C,d,t)=>{t.d(d,{bX:()=>l,gJ:()=>_});var o=t(9653);const h=r=>r.couriers,l=(0,o.P1)(h,r=>r.courier),_=(0,o.P1)(h,r=>r.couriers)},6912:(C,d,t)=>{t.d(d,{M:()=>g});var o=t(529),h=t(5698),l=t(3900),_=t(8505),r=t(4004),i=t(5714),a=t(7693),E=t(2340),u=t(1635),M=t(4650),P=t(9653);const O=E.N.API_URL;let g=(()=>{class v{constructor(e,n){this._httpClient=e,this.store=n}createCourier(e){return this.store.select(u.gJ).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.post(`${O}/couriers/`,e).pipe((0,_.b)(c=>{const p=[...n];this.store.dispatch((0,a.er)({couriers:[...p,c.courier]}))}))))}getCouriers(e=0,n=10,c="orderNo",p="asc",D=""){const I=(new o.LE).append("page",e.toString()).append("size",n.toString()).append("sort",c).append("order",p).append("search",D);return this._httpClient.get(`${O}/couriers/`,{params:I}).pipe((0,_.b)(({pagination:m,couriers:R})=>{this.store.dispatch((0,i.Jr)({pagination:m})),this.store.dispatch((0,a.er)({couriers:R}))}))}getCourierById(e){if(null!==e)return this._httpClient.get(`${O}/couriers/${e}`).pipe((0,r.U)(({courier:n})=>(this.store.dispatch((0,a.dI)({courier:n})),n)))}updateCourier(e){return this.store.select(u.gJ).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.patch(`${O}/couriers/${e._id}`,e).pipe((0,r.U)(c=>{const p=[...n],D=p.findIndex(I=>I._id===e._id);return p[D]=c.courier,this.store.dispatch((0,a.er)({couriers:p})),c}))))}deleteCourier(e){return this.store.select(u.gJ).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.delete(`${O}/couriers/${e}`).pipe((0,r.U)(c=>{const p=[...n],D=n.findIndex(I=>I._id===e);return p.splice(D,1),this.store.dispatch((0,a.er)({couriers:p})),c}))))}}return v.\u0275fac=function(e){return new(e||v)(M.LFG(o.eN),M.LFG(P.yh))},v.\u0275prov=M.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},6691:(C,d,t)=>{t.d(d,{JT:()=>_});var o=t(9653);const h=r=>r.freights,_=((0,o.P1)(h,r=>r.freight),(0,o.P1)(h,r=>r.freights))},8342:(C,d,t)=>{t.d(d,{H:()=>g});var o=t(529),h=t(5698),l=t(3900),_=t(8505),r=t(4004),i=t(6691),a=t(3730),E=t(5714),u=t(2340),M=t(4650),P=t(9653);const O=u.N.API_URL;let g=(()=>{class v{constructor(e,n){this._httpClient=e,this.store=n}createFreight(e){return this.store.select(i.JT).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.post(`${O}/freights`,e).pipe((0,_.b)(c=>{const p=[...n];this.store.dispatch((0,a.eX)({freights:[c.freight,...p]}))}))))}getFreights(e=0,n=10,c="createdAt",p="desc"){const D=(new o.LE).append("page",e.toString()).append("size",n.toString()).append("sort",c).append("order",p);return this._httpClient.get(`${O}/freights/`,{params:D}).pipe((0,_.b)(({pagination:I,freights:m})=>{this.store.dispatch((0,E.Jr)({pagination:I})),this.store.dispatch((0,a.eX)({freights:m}))}))}getFreightById(e){if(null!==e)return this._httpClient.get(`${O}/freights/${e}`).pipe((0,_.b)(({freight:n})=>{this.store.dispatch((0,a.$0)({freight:n}))}))}getFreightByShippingType(e){if(null!==e)return this._httpClient.get(`${O}/freights/current-freights-shipping-type/${e}`).pipe((0,r.U)(({freight:n})=>n))}updateFreight(e){return this.store.select(i.JT).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.patch(`${O}/freights/${e._id}`,e).pipe((0,_.b)(c=>{const p=[...n],D=p.findIndex(I=>I._id===e._id);p[D]=c.freight,this.store.dispatch((0,a.eX)({freights:p}))}))))}deleteFreight(e){return this.store.select(i.JT).pipe((0,h.q)(1),(0,l.w)(n=>this._httpClient.delete(`${O}/freights/${e}`).pipe((0,_.b)(()=>{const c=[...n],p=c.findIndex(D=>D._id===e);c.splice(p,1),this.store.dispatch((0,a.eX)({freights:c}))}))))}}return v.\u0275fac=function(e){return new(e||v)(M.LFG(o.eN),M.LFG(P.yh))},v.\u0275prov=M.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},2911:(C,d,t)=>{t.d(d,{K:()=>l,d:()=>_});var o=t(4650),h=t(9851);let l=(()=>{class r{constructor(a){this._merchantsService=a}resolve(a,E){return this._merchantsService.getMerchants()}}return r.\u0275fac=function(a){return new(a||r)(o.LFG(h.S))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),_=(()=>{class r{constructor(a){this._merchantsService=a}resolve(a,E){const u=a.paramMap.get("merchantId");if("new"!==u)return this._merchantsService.getMerchantById(u)}}return r.\u0275fac=function(a){return new(a||r)(o.LFG(h.S))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1910:(C,d,t)=>{t.d(d,{Qs:()=>l,UV:()=>_});var o=t(9653);const h=r=>r.merchants,l=(0,o.P1)(h,r=>r.merchant),_=(0,o.P1)(h,r=>r.merchants)},9851:(C,d,t)=>{t.d(d,{S:()=>O});var o=t(1135),h=t(8505),l=t(5698),_=t(3900),r=t(4004),i=t(2112),a=t(2340),E=t(4650),u=t(529),M=t(9653);const P=a.N.API_URL;let O=(()=>{class g{constructor(s,e){this._httpClient=s,this.store=e,this._merchant=new o.X(null),this._merchants=new o.X([]),this._domains=new o.X([]),this._states=new o.X([])}get merchant$(){return this._merchant.asObservable()}get merchants$(){return this._merchants.asObservable()}get domains$(){return this._domains.asObservable()}get states$(){return this._states.asObservable()}getMerchants(){return this._httpClient.get(`${P}/merchants`).pipe((0,h.b)(({merchants:s})=>{this.store.dispatch((0,i.ZE)({merchants:s}))}))}getMerchantById(s){return this._httpClient.get(`${P}/merchants/${s}`).pipe((0,l.q)(1),(0,h.b)(({merchant:e})=>{this.store.dispatch((0,i.p5)({merchant:e}))}))}createMerchant(s){return this.merchants$.pipe((0,l.q)(1),(0,_.w)(e=>this._httpClient.post(`${P}/merchants`,s).pipe((0,r.U)(n=>(this._merchants.next([n.merchant,...e]),this.store.dispatch((0,i.nw)({merchant:n.merchant,merchants:[n.merchant,...e]})),n)))))}updateMerchant(s){return this.merchants$.pipe((0,l.q)(1),(0,_.w)(e=>this._httpClient.patch(`${P}/merchants/${s._id}`,s).pipe((0,r.U)(n=>{const c=e.findIndex(p=>p._id===s._id);return e[c]=n.merchant,this._merchants.next(e),this.store.dispatch((0,i.nw)({merchant:n.merchant,merchants:e})),n.merchant}))))}deleteMerchant(s){return this.merchants$.pipe((0,l.q)(1),(0,_.w)(e=>this._httpClient.delete(`${P}/merchants/${s}`).pipe((0,r.U)(n=>{const c=e.findIndex(p=>p._id===s);return e.splice(c,1),this._merchants.next(e),this.store.dispatch((0,i.ZE)({merchants:e})),n}))))}}return g.\u0275fac=function(s){return new(s||g)(E.LFG(u.eN),E.LFG(M.yh))},g.\u0275prov=E.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},1349:(C,d,t)=>{t.d(d,{N:()=>O});var o=t(1135),h=t(2843),l=t(9646),_=t(5698),r=t(3900),i=t(4004),a=t(8505),E=t(2340),u=t(4650),M=t(529);const P=E.N.API_URL;let O=(()=>{class g{constructor(s){this._httpClient=s,this._singleRole=new o.X(null),this._roles=new o.X(null),this._permissions=new o.X(null)}get singleRole$(){return this._singleRole.asObservable()}get roles$(){return this._roles.asObservable()}get permissions$(){return this._permissions.asObservable()}createRole(s){return this.roles$.pipe((0,_.q)(1),(0,r.w)(e=>this._httpClient.post(`${P}/roles/`,s).pipe((0,i.U)(n=>(this._roles.next([n.role,...e]),n.role)))))}getRoles(){return this._httpClient.get(`${P}/roles/`).pipe((0,a.b)(s=>{this._roles.next(s.roles)}))}getPermissions(){return this._httpClient.get(`${P}/roles/permissions/`).pipe((0,a.b)(s=>{this._permissions.next(s.permissions)}))}getByUserId(s){return this._httpClient.get(`${P}/users/${s}/roles`).pipe((0,i.U)(e=>e.roles))}getRoleById(s){return this._roles.pipe((0,_.q)(1),(0,i.U)(e=>{const n=e.find(c=>c._id===s)||null;return this._singleRole.next(n),n}),(0,r.w)(e=>e?(0,l.of)(e):(0,h._)("No existe un rol con el:"+s+"!")))}updateRole(s){return this.roles$.pipe((0,_.q)(1),(0,r.w)(e=>this._httpClient.patch(`${P}/roles/${s._id}`,s).pipe((0,i.U)(n=>{const c=e.findIndex(p=>p._id===s._id);return e[c]=n.updatedRole,this._roles.next(e),n.updatedRole}))))}deleteRole(s){return this.roles$.pipe((0,_.q)(1),(0,r.w)(e=>this._httpClient.delete(`${P}/roles/${s} `).pipe((0,i.U)(n=>{const c=e.findIndex(p=>p._id===s);return e.splice(c,1),this._roles.next(e),n}))))}}return g.\u0275fac=function(s){return new(s||g)(u.LFG(M.eN))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},6443:(C,d,t)=>{t.d(d,{Ql:()=>_,bo:()=>r});var o=t(9653);const h=i=>i.weights,_=((0,o.P1)(h,i=>i.weight),(0,o.P1)(h,i=>i.weights)),r=(0,o.P1)(h,i=>i.summariesWeights)},3758:(C,d,t)=>{t.d(d,{g:()=>O});var o=t(529),h=t(5698),l=t(3900),_=t(8505),r=t(6443),i=t(6617),a=t(5714),E=t(2340),u=t(4650),M=t(9653);const P=E.N.API_URL;let O=(()=>{class g{constructor(s,e){this._httpClient=s,this.store=e}createWeight(s){return this.store.select(r.Ql).pipe((0,h.q)(1),(0,l.w)(e=>this._httpClient.post(`${P}/weights`,s).pipe((0,_.b)(n=>{const c=[...e];this.store.dispatch((0,i.gU)({weights:[n.weight,...c]}))}))))}getWeights(s=0,e=10,n="month",c="desc"){const p=(new o.LE).append("page",s.toString()).append("size",e.toString()).append("sort",n).append("order",c);return this._httpClient.get(`${P}/weights/`,{params:p}).pipe((0,_.b)(({pagination:D,weights:I})=>{this.store.dispatch((0,a.Jr)({pagination:D})),this.store.dispatch((0,i.gU)({weights:I}))}))}getWeightById(s){if(null!==s)return this._httpClient.get(`${P}/weights/${s}`).pipe((0,_.b)(({weight:e})=>{this.store.dispatch((0,i.SG)({weight:e}))}))}getSummariesWeightsByCouriers(s){if(null!==s)return this._httpClient.get(`${P}/weights/summaries-weights/${s}`).pipe((0,_.b)(({summariesWeights:e})=>{console.log("SummariesWeights:",e),this.store.dispatch((0,i.wW)({summariesWeights:e}))}))}updateWeight(s){return this.store.select(r.Ql).pipe((0,h.q)(1),(0,l.w)(e=>this._httpClient.patch(`${P}/weights/${s._id}`,s).pipe((0,_.b)(n=>{const c=[...e],p=c.findIndex(D=>D._id===s._id);c[p]=n.weight,this.store.dispatch((0,i.gU)({weights:c}))}))))}deleteWeight(s){return this.store.select(r.Ql).pipe((0,h.q)(1),(0,l.w)(e=>this._httpClient.delete(`${P}/weights/${s}`).pipe((0,_.b)(()=>{const n=[...e],c=n.findIndex(p=>p._id===s);n.splice(c,1),this.store.dispatch((0,i.gU)({weights:n}))}))))}}return g.\u0275fac=function(s){return new(s||g)(u.LFG(o.eN),u.LFG(M.yh))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);