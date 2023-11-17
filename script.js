
let ids = ["awkward",
                "healing",
                "fire resistance",
                "regeneration",
                "strength",
                "swiftness",
                "night vision",
                "invisibility",
                "water breathing",
                "leaping",
                "slow falling",
                "poison",
                "weakness",
                "harming",
                "slowness",
]

function search(inputValue) {
    for (id of ids) {
        check(id, inputValue.toLowerCase());
    }
}

function check(id, inputValue) {
    let element = document.getElementById(id);
    if (id.includes(inputValue)) {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
        console.log(id)
    }
}