"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15537],{150005:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-573e591c","path":"/devices/WV704R0A0902.html","title":"Schneider Electric WV704R0A0902 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WV704R0A0902 control via MQTT","description":"Integrate your Schneider Electric WV704R0A0902 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-07T20:09:53.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Device pairing/installation","slug":"device-pairing-installation","link":"#device-pairing-installation","children":[]},{"level":3,"title":"Calibrate","slug":"calibrate","link":"#calibrate","children":[]},{"level":3,"title":"Device hard reset","slug":"device-hard-reset","link":"#device-hard-reset","children":[]},{"level":3,"title":"Controlling","slug":"controlling","link":"#controlling","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696320795000},"filePathRelative":"devices/WV704R0A0902.md"}')},132957:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(166252);const a=(0,i._)("h1",{id:"schneider-electric-wv704r0a0902",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#schneider-electric-wv704r0a0902","aria-hidden":"true"},"#"),(0,i.Uk)(" Schneider Electric WV704R0A0902")],-1),s=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),o=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"WV704R0A0902")],-1),l=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wiser radiator thermostat")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"climate (occupied_heating_setpoint, local_temperature, running_state, pi_heating_demand), linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WV704R0A0902.jpg",alt:"Schneider Electric WV704R0A0902"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-pairing-installation" tabindex="-1"><a class="header-anchor" href="#device-pairing-installation" aria-hidden="true">#</a> Device pairing/installation</h3><p>To put the TRV in installation mode twist and hold the cap in the <strong>+</strong> direction until the central LED flashes green. The device is ready for joining when:</p><ul><li>left/right LEDs flash red/blue</li><li>central LED shows a solid orange</li></ul><p>If central light shows a solid green, your TRV has been paired and is connected to the zigbee network.</p><p>If blinking with yellow, then your TRV is not paired or can&#39;t connect to the zigbee network. If Zigbee2MQTT is running and accepting new devices the valve should join the network. Sometimes you may need to twist and hold the cap in the <strong>+</strong> direction for 3 seconds before it will try to join.</p><p><strong>Note:</strong> Zigbee2MQTT might not be able to correctly configure the TRV until you have <a href="#calibrate">calibrated</a> it.</p><p>If the valve is not recognized, you can turn the boost button to positive and hold it; the red light starts to blink slowly. Release the button once the red light stops blinking.</p><h3 id="calibrate" tabindex="-1"><a class="header-anchor" href="#calibrate" aria-hidden="true">#</a> Calibrate</h3><p>After installing the TRV twist the cap in the <strong>-</strong> direction and hold for 2 seconds until the blue LED lights up.</p><h3 id="device-hard-reset" tabindex="-1"><a class="header-anchor" href="#device-hard-reset" aria-hidden="true">#</a> Device hard reset</h3><p>If the device fails to pair/join the network (<code>red:yellow:blue</code> on pairing mode) or you changed the network id/channel, connect to another network, bought the TRV second hand, you can perform a factory reset to start fresh.</p><ol><li>Make sure that the TRV is NOT in pairing mode.</li><li>Twist the cap in the <strong>-</strong> direction and hold till blue light turns off and then center light blinks red (about 15 seconds).</li><li>Release the button, you should see a <code>red:green:blue</code> short flash; the valve will go into installation mode.</li></ol><h3 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling" aria-hidden="true">#</a> Controlling</h3><p>Valve sometimes fails to respond/acknowledge a setting, just send the command again.</p><ul><li><p>Get local temperature in degrees Celsius.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;local_temperature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get or set occupied heating setpoint to <em>&lt;temperature&gt;</em> in degrees Celsius. Possible values: 7 to 30 by default; leave empty to read.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;temperature&gt;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get or set the keypad lock, i.e. enable/disable twist-top boost. Possible values: &quot;unlock&quot;, &quot;lock1&quot;. <strong>WARNING</strong> Setting the keypad to lock (i.e. &quot;lock1&quot;) disables the twist-top boost button which impedes setting the valve to installation mode or hard-reseting it.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;keypad_lockout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the battery level, in percentage. Possible values 0 to 100 (%). The level corresponds voltages in the range 2.2 V (0%) to 3.0 V (100%). The levels where chosen so a 0% indicates that batteries must be replaced, but the valve will still work.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;battery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the battery voltage. Possible values 0.0 to 3.0 (V). This is a direct measure of the battery voltage.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;voltage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the (latest) twist-top boost state. Possible values:</p><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Boost up</td></tr><tr><td>0</td><td>No boost</td></tr><tr><td>-1</td><td>Boost down</td></tr></tbody></table><p>Note that the valve will not automatically toggle the value to 0 after some time, i.e. configuration/automation logic is needed to use the value. E.g. in Home Assistant the <code>expire_after</code> setting can be used to handle this.</p></li><li><p>Get the valve position / heating demand. Will report the valve position or heating amount depending. Possible values 0 to 100 (%).</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;pi_heating_demand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the valve motor state. Possible values: &quot;Stall&quot;, others. String description of the motor state. Seems to change when the motor is moving.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;MOT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Get the Zigbee link quality. Possible values 0 to 100 (%).</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;linkquality&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>',16),p=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),g={},v=(0,n(983744).Z)(g,[["render",function(e,t){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[s,(0,i._)("tbody",null,[o,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.w5)((()=>[(0,i.Uk)("Schneider Electric")])),_:1})])]),d,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),p,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);