// 高优先级
const newFirstRules = [
    "RULE-SET,custom-claude,Claude",
    "DOMAIN-SUFFIX,servd-anthropic-website.b-cdn.net,Claude",
    "DOMAIN-SUFFIX,anthropic.com,Claude",
    "DOMAIN-SUFFIX,claude.ai,Claude",
    "DOMAIN-SUFFIX,claudeusercontent.com,Claude",
    "DOMAIN-SUFFIX,intercomcdn.com,Claude",
    "DOMAIN-SUFFIX,cdn.usefathom.com,Claude",
    "RULE-SET,ai-suite,AI",
    "RULE-SET,myblack-classical,Proxies",
    "RULE-SET,myblack-domain,Proxies",
    "RULE-SET,mydirect-domain,DIRECT",
    "RULE-SET,myai-domain,AI",
    "RULE-SET,applications,DIRECT",
];


// 低优先级
const newLastRules = [
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,icloud,DIRECT",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,google,Proxies",
    "RULE-SET,proxy,Proxies",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,telegramcidr,Proxies",
    "GEOIP,LAN,DIRECT",
];




// 程序入口
function main(config) {
    let oldRules = config.rules;

    let temp = oldRules.concat(newLastRules);
    config.rules = newFirstRules.concat(temp);

    config["dns"]["nameserver"].unshift("system");
    // config["dns"]["nameserver"].push("192.168.130.20");

    // 返回修改后的配置
    return config;
}