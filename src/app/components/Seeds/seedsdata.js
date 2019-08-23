
const seedsData = [
    {
        id: 1,
        key: 0,
        imgPath: "./images/seeds/Gerste.jpg",
        name: "Gerste",
        breeding: "Baumbrüter",
        aussaat: "März-April",
        winter: "September",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 2,
        key: 1,
        imgPath: "./images/seeds/gras.jpg",
        name: "Gras",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Gleitstoßgreifer"
    },
    {
        id: 3,
        key: 2,
        imgPath: "./images/seeds/hafer.jpg",
        name: "Hafer",
        aussaat: "März-April",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 4,
        key: 3,
        imgPath: "./images/seeds/klee.jpg",
        name: "Klee",
        breeding: "Baum-Felsen-Bodenbrüter",
        nests: "begrünt",
        eggs: "3-5",
        type: "Gleitstoßgreifer"
    },
    {
        id: 5,
        key: 4,
        imgPath: "./images/seeds/lupine.jpg",
        name: "Lupine",
        breeding: "Felsenbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 6,
        key: 5,
        imgPath: "./images/seeds/raps.jpg",
        name: "Raps",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 7,
        key: 6,
        imgPath: "./images/seeds/roggen-klee.jpg",
        name: "Roggen-Klee",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "3-5",
        type: "Pirsch-Startfluggreifer"
    },
    {
        id: 8,
        key: 7,
        imgPath: "./images/seeds/ruebsen.jpg",
        name: "Rübsen",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Pirsch-Startfluggreifer"
    },
    {
        id: 9,
        key: 8,
        imgPath: "./images/seeds/saatgerste.jpg",
        name: "Saatgerste",
        breeding: "Boden-Baumbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 10,
        key: 9,
        imgPath: "./images/seeds/saatmais.jpg",
        name: "Saatmais",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "2-4",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 11,
        key: 10,
        imgPath: "./images/seeds/schneckenkorn.jpg",
        name: "Schneckenkorn",
        breeding: "Baum-Felsenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Späh-Stoßfluggreifer"
    },
    {
        id: 12,
        key: 11,
        imgPath: "./images/seeds/walzhafer.jpg",
        name: "Walzhafer",
        breeding: "Baumbrüter",
        nests: "begrünt",
        eggs: "2-3",
        type: "Gleitstoßgreifer"
    },
    {
        id: 13,
        key: 12,
        imgPath: "./images/seeds/weizen.jpg",
        name: "Weizen",
        breeding: "Baumbrüter",
        aussaat: "März-April",
        winter: "Oktober-November",
        nests: "begrünt",
        eggs: "3-4",
        type: "Gleitstoßgreifer"
    },
    {
        id: 14,
        key: 13,
        imgPath: "./images/seeds/wicken.jpg",
        name: "Wicken",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 15,
        key: 14,
        imgPath: "./images/seeds/hafer2.jpg",
        name: "Hafer",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 16,
        key: 15,
        imgPath: "./images/seeds/weizen2.jpg",
        name: "Weizen",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 17,
        key: 16,
        imgPath: "./images/seeds/roggen2.jpg",
        name: "Roggen",
        aussaat: "März-April",
        winter: "September-Oktober",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 18,
        key: 17,
        imgPath: "./images/seeds/gerste2.jpg",
        name: "Gerste",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 19,
        key: 18,
        imgPath: "./images/seeds/mais.jpg",
        name: "Mais",
        aussaat: "Apil-Mai",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
    {
        id: 20,
        key: 19,
        imgPath: "./images/seeds/waldstaudenroggen.jpg",
        name: "Waldstaudenroggen",
        breeding: "Bodenbrüter",
        nests: "begrünt",
        eggs: "4-6",
        type: "Gleitstoßgreifer"
    },
]

export const seedsNames = [
    {
        id: 1,
        key: 0,
        name: "Gerste",
   },
    {
        id: 2,
        key: 1,
        name: "Gras",
    },
    {
        id: 3,
        key: 2,
        name: "Hafer",
    },
    {
        id: 4,
        key: 3,
        name: "Klee",
    },
    {
        id: 5,
        key: 4,
        name: "Lupine",
    },
    {
        id: 6,
        key: 5,
        name: "Raps",
    },
    {
        id: 7,
        key: 6,
        name: "Roggen-Klee",
    },
    {
        id: 8,
        key: 7,
        name: "Rübsen",
    },
    {
        id: 9,
        key: 8,
        name: "Saatgerste",
   },
    {
        id: 10,
        key: 9,
        name: "Saatmais",
    },
    {
        id: 11,
        key: 10,
        name: "Schneckenkorn",
    },
    {
        id: 12,
        key: 11,
        name: "Walzhafer",
    },
    {
        id: 13,
        key: 12,
        name: "Weizen",
    },
    {
        id: 14,
        key: 13,
        name: "Wicken",
    },
    {
        id: 15,
        key: 14,
        name: "Mais",
    },
    {
        id: 16,
        key: 15,
        name: "Waldstaudenroggen",
    },
    {
        id: 17,
        key: 16,
        name: "Roggen",
    },
]


export default seedsData;