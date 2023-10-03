"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32464],{803386:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-27744710","path":"/devices/GS361A-H04.html","title":"Siterwell GS361A-H04 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Siterwell GS361A-H04 control via MQTT","description":"Integrate your Siterwell GS361A-H04 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Installing the TRV","slug":"installing-the-trv","link":"#installing-the-trv","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Valve detection (switch)","slug":"valve-detection-switch","link":"#valve-detection-switch","children":[]},{"level":3,"title":"Position (numeric)","slug":"position-numeric","link":"#position-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696320795000},"filePathRelative":"devices/GS361A-H04.md"}')},992625:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const l=(0,o._)("h1",{id:"siterwell-gs361a-h04",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#siterwell-gs361a-h04","aria-hidden":"true"},"#"),(0,o.Uk)(" Siterwell GS361A-H04")],-1),d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"GS361A-H04")],-1),a=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Radiator valve with thermostat")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"lock (state), switch (state), battery, position, climate (current_heating_setpoint, local_temperature, system_mode, running_state), linkquality")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/GS361A-H04.jpg",alt:"Siterwell GS361A-H04"})])],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Essentials 120112, TuYa GTZ02, Revolt NX-4911, Unitec 30946, Tesla Smart TSL-TRV-GS361A, Nedis ZBHTR10WT, TCP Smart TBUWTRV, Brennenstuhl HT CZ 01, Appartme APRM-04-001")],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="installing-the-trv" tabindex="-1"><a class="header-anchor" href="#installing-the-trv" aria-hidden="true">#</a> Installing the TRV</h3><ul><li>open battery cover (twist and slide)</li><li>insert batteries (a orange wrench should appear)</li><li>close battery cover (slide and twist)</li><li>press front button until <code>F1₁</code> is displayed</li><li>install TRV</li><li>press front button until <code>F1₂</code> is displayed (after 10-30 seconds the TRV should be able to pair)</li><li>to recall same menu on already installed valve - long-press the front button until F1 is shown (ignore lock symbol appear and disappear). Then turn right until F4 appears and confirm by short-pressing the front button</li></ul><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ul><li>press front button 3x to enter pairing mode (LED will flash green)</li></ul><p>If you get a warning that the model is undefined, which might happen after removing the device. Try removing it from the network again while in pairing mode.</p>',6),p=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch" aria-hidden="true">#</a> Window detection (switch)</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="valve-detection-switch" tabindex="-1"><a class="header-anchor" href="#valve-detection-switch" aria-hidden="true">#</a> Valve detection (switch)</h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>TRV valve position in %.. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),g={},m=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),l,(0,o._)("table",null,[d,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[a,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Siterwell"},{default:(0,o.w5)((()=>[(0,o.Uk)("Siterwell")])),_:1})])]),c,s,r,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),p])}]])}}]);