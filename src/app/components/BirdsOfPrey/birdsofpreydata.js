
const birdsofpreyData = [
    {
        id: 1,
        key: 0,
        imgPath: "./assets/images/birdsofprey/baumfalke.jpg",
        name: "Baumfalke",
        breeding: "Baumbrüter",
        nests: "Elstern, Krähen",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 2,
        key: 1,
        imgPath: "./assets/images/birdsofprey/bussard.jpg",
        name: "Bussard",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Gleitstoßgreifer"
    },
    {
        id: 3,
        key: 2,
        imgPath: "./assets/images/birdsofprey/fischadler.jpg",
        name: "Fischadler",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 4,
        key: 3,
        imgPath: "./assets/images/birdsofprey/rauhfussbussard.jpg",
        name: "Rauhfußbussard",
        breeding: "Baum-Felsen-Bodenbrüter",
        nests: "begrünt",
        eggs: "3-5",
        type: "Gleitstoßgreifer"
    },
    {
        id: 5,
        key: 4,
        imgPath: "./assets/images/birdsofprey/steinadler.jpg",
        name: "Steinadler",
        breeding: "Felsenbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 6,
        key: 5,
        imgPath: "./assets/images/birdsofprey/seeadler.jpg",
        name: "Seeadler",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 7,
        key: 6,
        imgPath: "./assets/images/birdsofprey/habicht.jpg",
        name: "Habicht",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "3-5",
        type: "Pirsch-Startfluggreifer"
    },
    {
        id: 8,
        key: 7,
        imgPath: "./assets/images/birdsofprey/sperberfrau.jpg",
        name: "Sperber",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Pirsch-Startfluggreifer"
    },
    {
        id: 9,
        key: 8,
        imgPath: "./assets/images/birdsofprey/merlin.jpg",
        name: "Merlin",
        breeding: "Boden-Baumbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 10,
        key: 9,
        imgPath: "./assets/images/birdsofprey/wanderfalke.jpg",
        name: "Wanderfalke",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 11,
        key: 10,
        imgPath: "./assets/images/birdsofprey/turmfalke.jpg",
        name: "Turmfalke",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 12,
        key: 11,
        imgPath: "./assets/images/birdsofprey/schwarzmilan.jpg",
        name: "Schwarzmilan",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 13,
        key: 12,
        imgPath: "./assets/images/birdsofprey/rotmilan.jpg",
        name: "Rotmilan",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "3-4",
        type: "Gleitstoßgreifer"
    },
    {
        id: 14,
        key: 13,
        imgPath: "./assets/images/birdsofprey/kornweihe.jpg",
        name: "Kornweihe",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 15,
        key: 14,
        imgPath: "./assets/images/birdsofprey/steppenweihe.jpg",
        name: "Steppenweihe",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "3-5",
        type: "Gleitstoßgreifer"
    },
    {
        id: 16,
        key: 15,
        imgPath: "./assets/images/birdsofprey/wiesenweihe.jpg",
        name: "Wiesenweihe",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 17,
        key: 16,
        imgPath: "./assets/images/birdsofprey/rohrweihe.jpg",
        name: "Rohrweihe",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 18,
        key: 17,
        imgPath: "./assets/images/birdsofprey/wespenbussard.jpg",
        name: "Wespenbussard",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
]

export const statePrototype = {
    name: "",
    flightType: "",
    breeding: "",
    eggs: ""
}

export const birdsofpreyNames = [
    {
        id: 1,
        key: 0,
        name: "Baumfalke",
    },
    {
        id: 2,
        key: 1,
        name: "Bussard",
    },
    {
        id: 3,
        key: 2,
        name: "Fischadler",
    },
    {
        id: 4,
        key: 3,
        name: "Rauhfußbussard",
    },
    {
        id: 5,
        key: 4,
        name: "Steinadler",
    },
    {
        id: 6,
        key: 5,
        name: "Seeadler",
    },
    {
        id: 7,
        key: 6,
        name: "Habicht",
    },
    {
        id: 8,
        key: 7,
        name: "Sperber",
    },
    {
        id: 9,
        key: 8,
        name: "Merlin",
    },
    {
        id: 10,
        key: 9,
        name: "Wanderfalke",
    },
    {
        id: 11,
        key: 10,
        name: "Turmfalke",
    },
    {
        id: 12,
        key: 11,
        name: "Schwarzmilan",
    },
    {
        id: 13,
        key: 12,
        name: "Rotmilan",
    },
    {
        id: 14,
        key: 13,
        name: "Kornweihe",
    },
    {
        id: 15,
        key: 14,
        name: "Steppenweihe",
    },
    {
        id: 16,
        key: 15,
        name: "Wiesenweihe",
    },
    {
        id: 17,
        key: 16,
        name: "Rohrweihe",
    },
    {
        id: 18,
        key: 17,
        name: "Wespenbussard",
    },
]


export default birdsofpreyData;