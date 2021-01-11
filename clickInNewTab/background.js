chrome.contextMenus.create({
    title: "Open JS Thing",
    contexts:["all"],
    onclick: function(info, tab ){
        var duping = chrome.tabs.duplicate(tab.id,function(duped){
            chrome.tabs.sendMessage(tab.id,{op : 'open'});
            chrome.tabs.highlight({'tabs': tab.index});
        });
    }
});