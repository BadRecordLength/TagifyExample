let whitelist = [
    {id: "0", value: "Apples"},
    {id: "1", value: "Oranges"},
    {id: "2", value: "Bananas"},
    {id: "3", value: "Peaches"},
    {id: "4", value: "Strawberries"},
    {id: "5", value: "Pears"}
];

//Init code based on the mix mode demo from the Tagify demo page

let input = document.querySelector("[name=mix]"),
tagify = new Tagify(input, {
    mode: 'mix',
    pattern: /@/,
    whitelist: whitelist,
    enforceWhitelist: true,
    dropdown : {
        enabled: 1,
        position: "text",
        highlightFirst: true,
        maxItems: 5
    },
    callbacks: {
        add: console.log,
        remove: console.log
    }
});

tagify.on('add', function(e){
    console.log(e)
});