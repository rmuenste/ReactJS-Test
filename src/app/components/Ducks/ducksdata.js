
const ducksData = [
    {
        id: 1,
        key: 0,
        imgPath: "./images/ducks/stockente.jpg",
        name: "Stockente",
        breeding: "Bodenbrüter",
        eggs: "8-14",
        type: "Schwimmente"
    },
    {
        id: 2,
        key: 1,
        imgPath: "./images/ducks/bergente.jpg",
        name: "Bergente",
        breeding: "Bodenbrüter",
        eggs: "6-10",
        type: "Tauchente"
    },
    {
        id: 3,
        key: 2,
        imgPath: "./images/ducks/brandgans.jpg",
        name: "Brandgans",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Schwimmente"
    },
    {
        id: 4,
        key: 3,
        imgPath: "./images/ducks/eiderente.jpg",
        name: "Eiderente",
        breeding: "Bodenbrüter",
        eggs: "4-6",
        type: "Meeresente"
    },
    {
        id: 5,
        key: 4,
        imgPath: "./images/ducks/eisente.jpg",
        name: "Eisente",
        breeding: "Bodenbrüter",
        eggs: "5-8",
        type: "Meeresente"
    },
    {
        id: 6,
        key: 5,
        imgPath: "./images/ducks/knaekente.jpg",
        name: "Knäckente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Schwimmente"
    },
    {
        id: 7,
        key: 6,
        imgPath: "./images/ducks/kolbenente.jpg",
        name: "Kolbenente",
        breeding: "Bodenbrüter",
        eggs: "6-12",
        type: "Tauchente"
    },
    {
        id: 8,
        key: 7,
        imgPath: "./images/ducks/krickente.jpg",
        name: "Krickente",
        breeding: "Bodenbrüter",
        eggs: "8-10",
        type: "Schwimmente"
    },
    {
        id: 9,
        key: 8,
        imgPath: "./images/ducks/loeffelente.jpg",
        name: "Löffelente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Schwimmente"
    },
    {
        id: 10,
        key: 9,
        imgPath: "./images/ducks/pfeifente.jpg",
        name: "Pfeifente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Schwimmente"
    },
    {
        id: 11,
        key: 10,
        imgPath: "./images/ducks/reiherente.jpg",
        name: "Reiherente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Tauchente"
    },
    {
        id: 12,
        key: 11,
        imgPath: "./images/ducks/samtente.jpg",
        name: "Samtente",
        breeding: "Bodenbrüter",
        eggs: "6-10",
        type: "Meeresente"
    },
    {
        id: 13,
        key: 12,
        imgPath: "./images/ducks/schellente.jpg",
        name: "Schellente",
        breeding: "Bodenbrüter",
        eggs: "6-10",
        type: "Meeresente"
    },
    {
        id: 14,
        key: 13,
        imgPath: "./images/ducks/schnatterente.jpg",
        name: "Schnatterente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Schwimmente"
    },
    {
        id: 15,
        key: 14,
        imgPath: "./images/ducks/spiessente.jpg",
        name: "Spießente",
        breeding: "Bodenbrüter",
        eggs: "7-10",
        type: "Schwimmente"
    },
    {
        id: 16,
        key: 15,
        imgPath: "./images/ducks/tafelente.jpg",
        name: "Tafelente",
        breeding: "Bodenbrüter",
        eggs: "6-9",
        type: "Tauchente"
    },
    {
        id: 17,
        key: 16,
        imgPath: "./images/ducks/trauerente.jpg",
        name: "Trauerente",
        breeding: "Bodenbrüter",
        eggs: "5-8",
        type: "Meeresente"
    },
    {
        id: 18,
        key: 17,
        imgPath: "./images/ducks/moorente.jpg",
        name: "Moorente",
        breeding: "Bodenbrüter",
        eggs: "8-12",
        type: "Tauchente"
    }

]

export const duckNames = [
    {
        id: 2,
        key: 1,
        name: "Bergente",
    },
    {
        id: 3,
        key: 2,
        name: "Brandgans",
    },
    {
        id: 4,
        key: 3,
        name: "Eiderente",
    },
    {
        id: 5,
        key: 4,
        name: "Eisente",
    },
    {
        id: 6,
        key: 5,
        name: "Knäckente",
    },
    {
        id: 7,
        key: 6,
        name: "Kolbenente",
    },
    {
        id: 8,
        key: 7,
        name: "Krickente",
    },
    {
        id: 9,
        key: 8,
        name: "Löffelente",
    },
    {
        id: 18,
        key: 17,
        name: "Moorente",
    },
    {
        id: 10,
        key: 9,
        name: "Pfeifente",
    },
    {
        id: 11,
        key: 10,
        name: "Reiherente",
    },
    {
        id: 12,
        key: 11,
        name: "Samtente",
    },
    {
        id: 13,
        key: 12,
        name: "Schellente",
    },
    {
        id: 14,
        key: 13,
        name: "Schnatterente",
    },
    {
        id: 15,
        key: 14,
        name: "Spießente",
    },
    {
        id: 1,
        key: 0,
        name: "Stockente",
    },
    {
        id: 16,
        key: 15,
        name: "Tafelente",
    },
    {
        id: 17,
        key: 16,
        name: "Trauerente",
    }
]

export const ducksGameInfo = {
    gameTitle: "Enten",
    gameDescLevel: [
        {
          subTitle: "Spielregeln Level 1",
          gameGoals: [
              "Erkennen Sie die Entenart",
              "Zufällige Antworten vorgegeben",
              "Meistern Sie 18 Tierarten"
          ]
        },
        {
          subTitle: "Spielregeln Level 2",
          gameGoals: [
              "Erkennen Sie die Entenart",
              "Zufällige Antworten vorgegeben",
              "Unterscheiden Sie Schwimm- Tauch- und Meeresenten",
              "Geben Sie den Brutort an",
              "Bestimmen Sie die Größe des Geleges",
              "Meistern Sie 18 Tierarten"
          ]
        },
    ]

};

export default ducksData;