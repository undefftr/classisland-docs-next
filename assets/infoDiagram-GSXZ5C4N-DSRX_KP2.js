import{_ as e,l as s,K as n,k as i,L as p}from"./mermaid.core-D3DxeIpq.js";import{p as g}from"./gitGraph-F2EDSAW4-DbyGQXk8.js";import"./app-C7S6J-X9.js";import"./baseUniq-Cw-h2z9m.js";import"./basePickBy-f5PdeKra.js";import"./clone-CJ5wloUC.js";var v={parse:e(async r=>{const a=await g("info",r);s.debug(a)},"parse")},d={version:p},m=e(()=>d.version,"getVersion"),c={getVersion:m},l=e((r,a,o)=>{s.debug(`rendering info diagram
`+r);const t=n(a);i(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`)},"draw"),f={draw:l},z={parser:v,db:c,renderer:f};export{z as diagram};