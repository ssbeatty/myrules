// 规则
const newRules = [
      "RULE-SET,mydirect,DIRECT",
      "RULE-SET,myblack,Proxies",
      "RULE-SET,applications,DIRECT",
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

    // 将新的规则添加到现有的规则中
    config.rules = newRules.concat(oldRules);

    config["dns"]["nameserver"].unshift("system");
	
    // 返回修改后的配置
    return config;
}