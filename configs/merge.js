// 高优先级
const newFirstRules = [
    "RULE-SET,myblack-domain,Proxies",
    "RULE-SET,mydirect-domain,DIRECT",
    "RULE-SET,myai-domain,AI",
    "RULE-SET,myblack-classical,Proxies",
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

    // 返回修改后的配置
    return config;
}
