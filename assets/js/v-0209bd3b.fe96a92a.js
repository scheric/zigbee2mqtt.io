"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78508],{633071:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-0209bd3b","path":"/guide/adapters/flashing/flashing_the_cc2531.html","title":"Flashing the CC2531 USB stick","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Required hardware","slug":"required-hardware","link":"#required-hardware","children":[]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"Linux or MacOS","slug":"linux-or-macos","link":"#linux-or-macos","children":[]}],"git":{"updatedTime":1696320795000},"filePathRelative":"guide/adapters/flashing/flashing_the_cc2531.md"}')},973578:(e,n,a)=>{a.r(n),a.d(n,{default:()=>O});var t=a(166252),s=a(122743),o=a(654256);const r=a.p+"assets/img/connected.843d662a.jpg",l=a.p+"assets/img/smartrf.f6080d0e.png",i=(0,t._)("h1",{id:"flashing-the-cc2531-usb-stick",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#flashing-the-cc2531-usb-stick","aria-hidden":"true"},"#"),(0,t.Uk)(" Flashing the CC2531 USB stick")],-1),u=(0,t._)("em",null,"CC Debugger",-1),c=(0,t._)("em",null,"Raspberry Pi",-1),d=(0,t._)("em",null,"Arduino Uno",-1),A=(0,t._)("em",null,"ESP8266",-1),p=(0,t._)("strong",null,"NOTE 1",-1),h=(0,t._)("strong",null,"NOTE 2",-1),g={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},k=(0,t._)("strong",null,"NOTE 3",-1),b={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default",target:"_blank",rel:"noopener noreferrer"},m=(0,t.uE)('<h2 id="required-hardware" tabindex="-1"><a class="header-anchor" href="#required-hardware" aria-hidden="true">#</a> Required hardware</h2><p>The following additional hardware is required in order to flash the CC2531:</p><table><thead><tr><th>Name</th><th>Price</th><th>Picture</th></tr></thead><tbody><tr><td>CC debugger</td><td>+-9$ on AliExpress</td><td><img src="'+s+'" alt="CC debugger"></td></tr><tr><td>CC2531 downloader cable</td><td>+-2$ on AliExpress</td><td><img src="'+o+'" alt="Downloader cable CC2531"></td></tr></tbody></table><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2>',4),f={href:"http://www.ti.com/tool/flash-programmer",target:"_blank",rel:"noopener noreferrer"},v=(0,t._)("strong",null,"NOT V2",-1),w={href:"https://www.ti.com/tool/CC-DEBUGGER",target:"_blank",rel:"noopener noreferrer"},C={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.youtube.com/watch?v=jyKrxxXOvQY",target:"_blank",rel:"noopener noreferrer"},_=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,t.Uk)(".")],-1),S=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("strong",null,"BOTH"),(0,t.Uk)(" the "),(0,t._)("code",null,"CC2531 USB sniffer"),(0,t.Uk)(" and the "),(0,t._)("code",null,"CC debugger"),(0,t.Uk)(" to your PC using USB.")],-1),E={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},x=(0,t._)("img",{src:r,alt:"How to connect"},null,-1),q={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},F=(0,t._)("li",null,[(0,t.Uk)("Start SmartRF Flash Programmer, setup as shown below and press "),(0,t._)("code",null,"Perform actions"),(0,t.Uk)(". Make sure to select the "),(0,t._)("code",null,".hex"),(0,t.Uk)(" file, not the "),(0,t._)("code",null,".bin"),(0,t.Uk)(" file! "),(0,t._)("img",{src:l,alt:"SmartRF Flash Programmer"})],-1),B=(0,t._)("h2",{id:"linux-or-macos",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#linux-or-macos","aria-hidden":"true"},"#"),(0,t.Uk)(" Linux or MacOS")],-1),Q={href:"https://github.com/frans-Willem",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/dashesy/cc-tool",target:"_blank",rel:"noopener noreferrer"},y={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},H=(0,t.uE)('<ul><li>Ubuntu (version &gt;= 20.04): install cc-tool with <code>sudo apt install cc-tool</code> &amp; go on with 3.</li><li>Ubuntu/Debian: libusb-1.0-0-dev, libboost-all-dev, autoconf, libtool</li><li>Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++</li><li>Archlinux: dh-autoreconf, libusb, boost</li><li>macOS: <code>brew install autoconf automake libusb boost pkgconfig libtool</code></li><li>Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev</li></ul><ol start="2"><li>Build cc-tool</li></ol><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>\n<span class="token function">git</span> clone https://github.com/dashesy/cc-tool.git\n<span class="token builtin class-name">cd</span> cc-tool\n\n<span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include&quot;</span> <span class="token punctuation">\\</span>\n ./bootstrap\n\n<span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/opt/boost@1.76/include&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">CXXFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-std=c++0x&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/usr/local/opt/boost@1.76/lib&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LIBUSB_CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include/libusb-1.0&quot;</span> <span class="token punctuation">\\</span>\n ./configure\n\n<span class="token function">make</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>\n<span class="token function">git</span> clone https://github.com/dashesy/cc-tool.git\n<span class="token builtin class-name">cd</span> cc-tool\n\n<span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span>\n ./bootstrap\n\n<span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">CXXFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-std=c++0x&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/opt/homebrew/lib&quot;</span> <span class="token punctuation">\\</span>\n<span class="token assign-left variable">LIBUSB_CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span>\n ./configure\n\n<span class="token function">make</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),R={start:"3"},I=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,t.Uk)(".")],-1),L=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("strong",null,"BOTH"),(0,t.Uk)(" the "),(0,t._)("code",null,"CC2531 USB sniffer"),(0,t.Uk)(" and the "),(0,t._)("code",null,"CC debugger"),(0,t.Uk)(" to your PC using USB.")],-1),M={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},D=(0,t._)("img",{src:r,alt:"How to connect"},null,-1),T={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},J=(0,t._)("li",null,"Flash your firmware:",-1),W=(0,t.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ./cc-tool -e -w CC2531ZNP-Prod.hex\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version" aria-hidden="true">#</a> How-to check the installed firmware version</h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>',5),G={},O=(0,a(983744).Z)(G,[["render",function(e,n){const a=(0,t.up)("RouterLink"),s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[i,(0,t._)("p",null,[(0,t.Uk)("The firmware can be flashed with multiple devices. The easiest but most expensive option is with the "),u,(0,t.Uk)(" from Texas Instruments, which is described on this page. However, you can also use a "),c,(0,t.Uk)(" or a MCU like the "),d,(0,t.Uk)(" or the cheap "),A,(0,t.Uk)(" with four dupont cables and optionally a downloader cable. Information about these methods can be found here: "),(0,t.Wm)(a,{to:"/guide/adapters/flashing/alternative_flashing_methods.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Alternative firmware flashing methods")])),_:1}),(0,t.Uk)(".")]),(0,t._)("p",null,[p,(0,t.Uk)(": In case you are already running a Zigbee network: reflashing does not require repairing of all devices, see "),(0,t.Wm)(a,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,t.w5)((()=>[(0,t.Uk)("What does and does not require repairing of all devices?")])),_:1})]),(0,t._)("p",null,[h,(0,t.Uk)(": In this tutorial we will flash the default firmware. For larger network (20+) or when experiencing stability problems the "),(0,t._)("a",g,[(0,t.Uk)("source routing firmware"),(0,t.Wm)(s)]),(0,t.Uk)(" is recommended. This firmware has a limitation of 5 direct children so make sure to have enough routers in your network.")]),(0,t._)("p",null,[k,(0,t.Uk)(": The CC2531 USB dongle can be flashed also with the "),(0,t._)("a",b,[(0,t.Uk)("CC2530 firmware"),(0,t.Wm)(s)]),(0,t.Uk)(" to be operated via the P0.2/P0.3 serial pins (which are the first one and the second one of the IO expansion port). Be careful when using the CC2531 in association with an ESP8266 (as if it were the "),(0,t.Wm)(a,{to:"/guide/adapters/flashing/connecting_cc2530.html#via-an-esp8266"},{default:(0,t.w5)((()=>[(0,t.Uk)("CC2530")])),_:1}),(0,t.Uk)("): the onboard USB power supply may not be able to power an additional ESP8266 without overheating/failing.")]),m,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("Install "),(0,t._)("a",f,[(0,t.Uk)("SmartRF Flash programmer"),(0,t.Wm)(s)]),(0,t.Uk)(" ("),v,(0,t.Uk)("). This software is free but requires a Texas Instruments account in order to download.")]),(0,t._)("li",null,[(0,t.Uk)("Install the "),(0,t._)("a",w,[(0,t.Uk)("CC debugger driver"),(0,t.Wm)(s)]),(0,t.Uk)(" on your PC (Windows only). Before continuing, verify that the CC Debugger driver has been installed correctly. See "),(0,t._)("a",C,[(0,t.Uk)("Figure 1. Verify Correct Driver Installation @ Chapter 5.1"),(0,t.Wm)(s)]),(0,t.Uk)(". In case the CC Debugger is not recognized correctly "),(0,t._)("a",U,[(0,t.Uk)("install the driver manually"),(0,t.Wm)(s)]),(0,t.Uk)(".")]),_,S,(0,t._)("li",null,[(0,t.Uk)("If the light on the CC debugger is RED press set reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not use "),(0,t._)("a",E,[(0,t.Uk)("CC debugger user guide"),(0,t.Wm)(s)]),(0,t.Uk)(" to troubleshoot your problem. "),x]),(0,t._)("li",null,[(0,t.Uk)("Download the firmware "),(0,t._)("a",q,[(0,t.Uk)("CC2531_DEFAULT_20211115.zip"),(0,t.Wm)(s)])]),F]),B,(0,t._)("p",null,[(0,t.Uk)("Credits to "),(0,t._)("a",Q,[(0,t.Uk)("@Frans-Willem"),(0,t.Wm)(s)]),(0,t.Uk)(" for majority of instructions.")]),(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("Install prerequisites for "),(0,t._)("a",P,[(0,t.Uk)("CC-Tool"),(0,t.Wm)(s)]),(0,t.Uk)(" using a package manager (e.g. "),(0,t._)("a",y,[(0,t.Uk)("Homebrew"),(0,t.Wm)(s)]),(0,t.Uk)(" for macOS)")])]),H,(0,t._)("ol",R,[I,L,(0,t._)("li",null,[(0,t.Uk)("If the light on the CC debugger is RED, press the Reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not, try to reboot and retry or follow the "),(0,t._)("a",M,[(0,t.Uk)("CC debugger user guide"),(0,t.Wm)(s)]),(0,t.Uk)(" to troubleshoot your problem. "),D]),(0,t._)("li",null,[(0,t.Uk)("Download the firmware "),(0,t._)("a",T,[(0,t.Uk)("CC2531_DEFAULT_20211115.zip"),(0,t.Wm)(s)]),(0,t.Uk)(".")]),J]),W])}]])},122743:e=>{e.exports="data:image/jpeg;base64,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"},654256:(e,n,a)=>{e.exports=a.p+"assets/img/downloader_cable.720e6aa2.png"}}]);