import{r as B}from"./index-BBkUAzwr.js";var x={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=B,E=Symbol.for("react.element"),O=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,R=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function W(t,r,o){var e,a={},n=null,m=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(m=r.ref);for(e in r)q.call(r,e)&&!T.hasOwnProperty(e)&&(a[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)a[e]===void 0&&(a[e]=r[e]);return{$$typeof:E,type:t,key:n,ref:m,props:a,_owner:R.current}}d.Fragment=O;d.jsx=W;d.jsxs=W;x.exports=d;var j=x.exports;const F="_button_qiymg_1",N="_primary_qiymg_14",$="_secondary_qiymg_21",k="_fullWidth_qiymg_28",c={button:F,primary:N,secondary:$,fullWidth:k},S=t=>{const{as:r="button",className:o,fullWidth:e,variant:a="primary",...n}=t;return j.jsx(r,{className:`${c.button} ${c[a]} ${e?c.fullWidth:""} ${o}`,...n})};S.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"T"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""}}};const C={argTypes:{variant:{control:{type:"radio"},options:["primary","secondary"]}},component:S,tags:["autodocs"],title:"Components/Button"},s={args:{children:"Primary Button",disabled:!1,variant:"primary"}},i={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},l={args:{children:"Full Width Primary Button",disabled:!1,fullWidth:!0,variant:"primary"}};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,_,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var v,g,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary'
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const I=["Primary","Secondary","FullWidth"];export{l as FullWidth,s as Primary,i as Secondary,I as __namedExportsOrder,C as default};
