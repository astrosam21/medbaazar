export function getStaticData() {
    var json = {
        list: [
            {
                id: "1",
                title: "",
                items: [
                    { id: "1", name: "All", path: "all" },
                    { id: "2", name: "Important", path: "important" }
                ]
            }
        ]
    };
    return json;
}
