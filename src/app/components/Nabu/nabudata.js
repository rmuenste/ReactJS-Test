const huntingPeriods = [
    {
        id: 1,
        key: 0,
        imgPath: "./images/rehbock.jpg",
        name: "Rehbock",
        begin: "01-05",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Alterbestimmung beim ausgewachsenen Rehbock schwierig"
                    },
                    {
                        value: "Einzelgänger, Zusammenhalt zwischen Ricke/Kitz"
                    },
                    {
                        value: "Im Winter größere Gruppen(Sprünge) als Zweckgemeinschaft"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: Juli-August"
                    },
                    {
                        value: "Setzzeit: Mai bis Anfang Juni"
                    },
                    {
                        value: "Tragzeit: 8-9M (4.5M Keimruhe)"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Konzentratselektierer, leicht verdauliche Pflanzenteile"
                    },
                    {
                      value: "Im Winter vermehrt Laub- und Nadelholztriebe"
                    }
                ]
            }
        }
    },
    {
        id: 2,
        key: 1,
        imgPath: "./images/keiler.jpg",
        name: "Schwarzwild",
        begin: "01-08",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Allesfressergebiss mit 44 Zähnen"
                    },
                    {
                        value: "Trophäe: Hauer & Haderer, Saubart"
                    },
                    {
                        value: "Bei intensiver Bejagung nachtaktiv"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Rauschzeit: November-Januar"
                    },
                    {
                        value: "2-9 Frischlinge"
                    },
                    {
                        value: "Tragzeit 3M 3W 3T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Gräser, Kräuter, Waldfrüchte, Insekten, Wurzeln"
                    },
                    {
                      value: "Kulturpflanzen, Hackfrüchte, Getreide ab Milchreife"
                    }
                ]
            }
        }
    },
    {
        id: 3,
        key: 2,
        imgPath: "./images/dam-sika.jpg",
        name: "Dam- und Sikawild",
        begin: "01-08",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Leben in Kahlwildrudeln und Hirschrudeln"
                    },
                    {
                        value: "Tagaktiv, oft auf Feldern"
                    },
                    {
                        value: "&#9794;  Spießer, Knieper, Löffler, HSchaufler, VSchaufler"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: Oktober-November"
                    },
                    {
                        value: "Setzzeit: Juni/Juli"
                    },
                    {
                        value: "Tragzeit: 7.5M"
                    },
                    {
                        value: "1 Kalb (selten 2)"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Intermediärtyp, zum Graser tendierend"
                    },
                    {
                      value: "Zwergsträucher, Laub, Feldfrüchte"
                    }
                ]
            }
        }
    },
    {
        id: 4,
        key: 3,
        imgPath: "./images/feldhase.jpg",
        name: "Feldhase",
        begin: "16-10",
        end: "31-12",
        infos: {
            general: {
                items: [
                    {
                        value: "Hasentiere habe Stiftzähne"
                    },
                    {
                        value: "Schwarze Löffelspitzen"
                    },
                    {
                        value: "Verbirgt sich in der Sasse"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Rammelzeit: Januar-August, 3 Würfe"
                    },
                    {
                        value: "2 - 5 Junge (sehend, behaart)"
                    },
                    {
                        value: "Tragzeit 42T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Gräser, Kräuter, Blätter, Knospen, Rinde"
                    },
                    {
                      value: "Kulturpflanzen, Holztriebe, Zökotrohpie"
                    }
                ]
            }
        }
    },
    {
        id: 5,
        key: 4,
        imgPath: "./images/wildkaninchen.jpg",
        name: "Wildkaninchen",
        begin: "16-10",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Lebt in Gruppen mit Rangordnung"
                    },
                    {
                        value: "Tagsüber meist im Bau"
                    },
                    {
                        value: "Anfällig für Myxomatose, RHD"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Rammelzeit: Februar-September"
                    },
                    {
                        value: "5 - 10 Junge (blind, nackt)"
                    },
                    {
                        value: "Tragzeit 30T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Gräser, Kräuter, Blätter, Knospen, Rinde"
                    },
                    {
                      value: "Kulturpflanzen, Holztriebe, Zökotrohpie"
                    }
                ]
            }
        }
    },
    {
        id: 6,
        key: 5,
        imgPath: "./images/steinmarder.jpg",
        name: "Steinmarder",
        begin: "16-10",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 38 Zähnen"
                    },
                    {
                        value: "Kulturfolger"
                    },
                    {
                        value: "Gehört zu den Mardern"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit: Juli/August"
                    },
                    {
                        value: "3 - 5 Junge (blind, fast nackt)"
                    },
                    {
                        value: "Tragzeit 8-9 Monate mit Keimruhe"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kleinnager, Kaninchen, Junghasen, Eier, Vögel"
                    },
                    {
                      value: "Beeren, Obst, Weintrauben"
                    }
                ]
            }
        }
    },
    {
        id: 7,
        key: 6,
        imgPath: "./images/iltis.jpg",
        name: "Iltis",
        begin: "16-10",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 34 Zähnen"
                    },
                    {
                        value: "klettert und schwimmt"
                    },
                    {
                        value: "Stinkmarder"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit: März-Juni"
                    },
                    {
                        value: "3 - 7 Junge (blind, fast nackt)"
                    },
                    {
                        value: "Tragzeit 40-41T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kleinnager, Aas, Eier"
                    },
                    {
                      value: "Beeren, Früchte(eher selten)"
                    }
                ]
            }
        }
    },
    {
        id: 8,
        key: 7,
        imgPath: "./images/hermelin.jpg",
        name: "Hermelin",
        begin: "01-09",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 34 Zähnen"
                    },
                    {
                        value: "klettert und schwimmt"
                    },
                    {
                        value: "Gehört zu den Stinkmardern"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit variabel (Februar bis Juli)"
                    },
                    {
                        value: "4 - 7 Junge (blind, fast nackt)"
                    },
                    {
                        value: "Tragzeit variabel 63T bis 8-9M"
                    },
                    {
                        value: "Keimruhe"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kleinnager bis Kaninchen, Junghasen"
                    },
                    {
                      value: "Vögel bis Fasanengröße, Beeren"
                    }
                ]
            }
        }
    },
    {
        id: 9,
        key: 8,
        imgPath: "./images/dachs.jpg",
        name: "Dachs",
        begin: "01-09",
        end: "31-12",
        infos: {
            general: {
                items: [
                    {
                        value: "Polstert seinen Bau aus"
                    },
                    {
                        value: "Baut 'Dachstoiletten'"
                    },
                    {
                        value: "Gehört zu den Mardern"
                    }

                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Saisonehe"
                    },
                    {
                        value: "7 - 14 Eier"
                    },
                    {
                        value: "Brutdauer: 26T"
                    },
                    {
                        value: "Bodenbrüter oder in hohlen Bäumen"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kleinnager, Insekten, Weichtiere, Lurche"
                    },
                    {
                      value: "Eier, Beeren, Früchte, Pilze"
                    },
                    {
                      value: "Wurzeln, Feldfrüchte"
                    }

                ]
            }
        }
    },
    {
        id: 10,
        key: 9,
        imgPath: "./images/fuchs.jpg",
        name: "Fuchs",
        begin: "16-07",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Mehrere Farbvarianten"
                    },
                    {
                        value: "Rotfuchs"
                    },
                    {
                        value: "Kohlfuchs, Kreuzfuchs (dunkel)"
                    },
                    {
                        value: "Birkfuchs (hell)"
                    }

                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit: Januar/Februar"
                    },
                    {
                        value: "4 - 6 Welpen (blind, behaart)"
                    },
                    {
                        value: "Tragzeit 51-53T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Nahrungsgeneratlist"
                    },
                    {
                      value: "Kleinnager, Schalenwild bis krankes Rehwild"
                    },
                    {
                      value: "Hausgeflügel, Aas, Insekten, Lurche, Obst"
                    }
                ]
            }
        }
    },
    {
        id: 11,
        key: 10,
        imgPath: "./images/mink.jpg",
        name: "Mink",
        begin: "16-10",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 34 Zähnen"
                    },
                    {
                        value: "klettert und schwimmt"
                    },
                    {
                        value: "Gehört zu den Mardern"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit meist März"
                    },
                    {
                        value: "3 - 6 Junge (blind, fast nackt)"
                    },
                    {
                        value: "Tragzeit 40-75T"
                    },
                    {
                        value: "Keimruhe"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kleinnager(Bisam), Fische, Krebse"
                    },
                    {
                      value: "Wasserinsekten, Reptilien, Vögel, Gelege"
                    }
                ]
            }
        }
    },
    {
        id: 12,
        key: 11,
        imgPath: "./images/waschbaer.jpg",
        name: "Waschbär",
        begin: "01-08",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 40 Zähnen"
                    },
                    {
                        value: "Hält Winterruhe"
                    },
                    {
                        value: "Gehört zu den Kleinbären"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit: Januar-März"
                    },
                    {
                        value: "2 - 4 Junge (blind, behaart)"
                    },
                    {
                        value: "Tragzeit 63T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Kleinnager, Eier, Jungvögel, Fische"
                    },
                    {
                      value: "Haustiere bis Huhn, Obst, Beeren, Waldfrüchte"
                    }
                ]
            }
        }
    },
    {
        id: 13,
        key: 12,
        imgPath: "./images/marderhund.jpg",
        name: "Marderhund",
        begin: "01-09",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Raubtiergebiss mit 42 Zähnen"
                    },
                    {
                        value: "Hält Winterruhe"
                    },
                    {
                        value: "Kann schwimmen"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Ranzzeit: Februar/März"
                    },
                    {
                        value: "5 - 8 Junge (blind, behaart)"
                    },
                    {
                        value: "Tragzeit 60-63T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Insekten, Lurche, Nager, Eier, Jungvögel"
                    },
                    {
                      value: "Haustiere, Fische, Beeren, Früchte (bis 80% pflanzlich)"
                    }
                ]
            }
        }
    },
    {
        id: 14,
        key: 13,
        imgPath: "./images/rebhuhn.jpg",
        name: "Rebhuhn",
        begin: "01-09",
        end: "15-12",
        infos: {
            general: {
                items: [
                    {
                        value: "Lebt in 'Ketten'"
                    },
                    {
                        value: "Mehrere Ketten bilden ein Volk"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Monogam"
                    },
                    {
                        value: "12-20 Eier"
                    },
                    {
                        value: "Brutdauer: 24T"
                    },
                    {
                        value: "Junge: Nestflüchter"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Küken anfangs nur Insekten"
                    },
                    {
                      value: "Würmer, Blattteile, Knospen, Blüten"
                    },
                    {
                      value: "Grassamen, Wildkräuter"
                    },
                    {
                      value: "landwirtschaftl. Kulturpflanzen"
                    }
                ]
            }
        }
    },
    {
        id: 15,
        key: 14,
        imgPath: "./images/fasan.jpg",
        name: "Fasan",
        begin: "16-10",
        end: "15-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Pickschnabel"
                    },
                    {
                        value: "Nächtigt auf Bäumen"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Polygam"
                    },
                    {
                        value: "8-12 Eier"
                    },
                    {
                        value: "Brutdauer: 24T, Bodenbrüter"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Küken anfangs nur Insekten, dann Keimlinge, junge Blätter"
                    },
                    {
                      value: "Weichtiere, Sämereien, Getreide, Beeren Eicheln"
                    }
                ]
            }
        }
    },
    {
        id: 16,
        key: 15,
        imgPath: "./images/wildtruhthahn.jpg",
        name: "Wildtruthahn",
        begin: "16-03",
        end: "30-04",
        infos: {
            general: {
                items: [
                    {
                        value: "Gewicht bis zu 10kg"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Monogam"
                    },
                    {
                        value: "6-14 Eier"
                    },
                    {
                        value: "Bodenbrüter"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Pflanzen, Insekten, Reptilien"
                    }
                ]
            }
        }
    },
    {
        id: 17,
        key: 16,
        imgPath: "./images/ringeltaube.jpg",
        name: "Ringeltaube",
        begin: "01-11",
        end: "20-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Jungtauben ohne Halsring"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Monogam"
                    },
                    {
                        value: "2 Eier"
                    },
                    {
                        value: "Brutdauer: 18T"
                    },
                    {
                        value: "Baumbrüter"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Kräuter, Gräser, Blätter"
                    },
                    {
                      value: "Erbsen, Getreide, Eicheln, Bucheckern"
                    },
                    {
                      value: "Kulturpflanzen"
                    }
                ]
            }
        }
    },
    {
        id: 18,
        key: 17,
        imgPath: "./images/hoeckerschwan.jpg",
        name: "Höckerschwan",
        begin: "01-11",
        end: "20-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Stand- und Strichvögel"
                    },
                    {
                        value: "Geschlechter sehen gleich aus"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Monogam"
                    },
                    {
                        value: "5-8 Eier"
                    },
                    {
                        value: "Brutdauer: 35-41T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Wasser- uns Sumpfpflanzen"
                    },
                    {
                      value: "Getreidesaaten"
                    },
                    {
                      value: "landwirtschaftl. Kulturpflanzen"
                    }
                ]
            }
        }
    },
    {
        id: 19,
        key: 18,
        imgPath: "./images/kanadagans.jpg",
        name: "Grau-Kanada-Nilgänse",
        begin: "16-07",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Stand- und Strichvögel"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Dauerehe"
                    },
                    {
                        value: "4-9 Eier"
                    },
                    {
                        value: "Brutdauer: 28T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Gräser, Kräuter"
                    },
                    {
                      value: "landwirtschaftl. Kulturpflanzen"
                    }
                ]
            }
        }
    },
    {
        id: 20,
        key: 19,
        imgPath: "./images/stockente.jpg",
        name: "Stockente",
        begin: "16-09",
        end: "15-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Blauer Spiegel"
                    },
                    {
                        value: "Stand- und Strichvogel"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Saisonehe"
                    },
                    {
                        value: "7 - 14 Eier"
                    },
                    {
                        value: "Brutdauer: 26T"
                    },
                    {
                        value: "Bodenbrüter oder in hohlen Bäumen"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Insekten, Weichtiere, Amphibien, Krebse"
                    },
                    {
                      value: "Wasserpflanzen, Sämereien, Eicheln"
                    }

                ]
            }
        }
    },
    {
        id: 21,
        key: 20,
        imgPath: "./images/waldschnepfe.jpg",
        name: "Waldschnepfe",
        begin: "16-10",
        end: "15-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Überwiegend Zugvogel"
                    },
                    {
                        value: "In milden Gebieten Strich- und Standvogel"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Polygam"
                    },
                    {
                        value: "4 Eier"
                    },
                    {
                        value: "Brutdauer: 22T"
                    },
                    {
                        value: "Bodenbrüter in Erdmulden"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Weichtiere und Wirbeltiere im Boden"
                    },
                    {
                      value: "Teilweise Sämereien, Beeren, Keimlinge"
                    }
                ]
            }
        }
    },
    {
        id: 22,
        key: 21,
        imgPath: "./images/rabenkraehe.jpg",
        name: "Rabenkrähe",
        begin: "01-08",
        end: "10-03",
        infos: {
            general: {
                items: [
                    {
                        value: "Hier: Standvogel"
                    },
                    {
                        value: "Weiter östlich Zugvogel"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Dauerehe"
                    },
                    {
                        value: "2-6 Eier"
                    },
                    {
                        value: "Brutdauer: 18-20T"
                    },
                    {
                        value: "Baumbrüten"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Aas, Eier, Müll"
                    }
                ]
            }
        }
    },
    {
        id: 23,
        key: 22,
        imgPath: "./images/elster.jpg",
        name: "Elster",
        begin: "01-08",
        end: "28-02",
        infos: {
            general: {
                items: [
                    {
                        value: "Standvogel"
                    },
                    {
                        value: "Bauen Horstmulde mit Lehm, Kugelnest"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Jahres- und Dauerehe"
                    },
                    {
                        value: "5-7 Eier"
                    },
                    {
                        value: "Brutdauer: 18T"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Allesfresser"
                    },
                    {
                      value: "Insekten, Kleintiere, Eier"
                    },
                    {
                      value: "Winter: Sämereien, Früchte, Aas"
                    }

                ]
            }
        }
    },
    {
        id: 24,
        key: 23,
        imgPath: "./images/rothirsch.jpg",
        name: "Rotwild",
        begin: "01-08",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Leben in Kahlwildrudeln und Hirschrudeln"
                    },
                    {
                        value: "Grandeln im Oberkiefer"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: September/Oktober"
                    },
                    {
                        value: "Setzzeit: Juni"
                    },
                    {
                        value: "Tragzeit: 34W"
                    },
                    {
                        value: "1 Kalb (sehr selten 2)"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Intermediärtyp - Gräser/Kräuter"
                    },
                    {
                      value: "Triebe, Knospen, Blätter, Nadeln, Rinde, Hackfrüchte"
                    },
                    {
                      value: "Reifendes Getreide, Raps, Erbsen"
                    }

                ]
            }
        }
    },
    {
        id: 25,
        key: 24,
        imgPath: "./images/muffelwild.jpg",
        name: "Muffelwild",
        begin: "01-08",
        end: "31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Stark wechselnde Rudelzusammensetzung"
                    },
                    {
                        value: "&#9792; hornlos"
                    },
                    {
                        value: "Bei &#9794; Hornwachstum ab dem 5. Lebensjahr gering"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: Oktober-Dezember"
                    },
                    {
                        value: "Setzzeit: April bis Mai"
                    },
                    {
                        value: "Tragzeit: 5-5.5M"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Hauptsächlich Gräser, Wildstauden (z.B Brennessel)"
                    },
                    {
                      value: "Kulturpflanzen, Triebe, Rinde"
                    }
                ]
            }
        }
    },
    {
        id: 26,
        key: 25,
        imgPath: "./images/schmaltier-rot.jpg",
        name: "Schmaltiere/spießer",
        begin: "01-05",
        end: "31-05",
        infos: {
            general: {
                items: [
                    {
                        value: "Leben in Kahlwildrudeln und Hirschrudeln"
                    },
                    {
                        value: "Grandeln im Oberkiefer"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: September/Oktober"
                    },
                    {
                        value: "Setzzeit: Juni"
                    },
                    {
                        value: "Tragzeit: 34W"
                    },
                    {
                        value: "1 Kalb (sehr selten 2)"
                    }

                ]
            },
            food: {
                items: [
                    {
                      value: "Intermediärtyp - Gräser/Kräuter"
                    },
                    {
                      value: "Triebe, Knospen, Blätter, Nadeln, Rinde, Hackfrüchte"
                    },
                    {
                      value: "Reifendes Getreide, Raps, Erbsen"
                    }

                ]
            }
        }
    },
    {
        id: 27,
        key: 26,
        imgPath: "./images/schmalreh.jpg",
        name: "Schmalrehe/spießer",
        begin: "01-05,01-09",
        end: "31-05,31-01",
        infos: {
            general: {
                items: [
                    {
                        value: "Alterbestimmung beim ausgewachsenen Rehbock schwierig"
                    },
                    {
                        value: "Einzelgänger, Zusammenhalt zwischen Ricke/Kitz"
                    },
                    {
                        value: "Im Winter größere Gruppen(Sprünge) als Zweckgemeinschaft"
                    }
                ]
            },
            reproduction: {
                items: [
                    {
                        value: "Brunftzeit: Juli-August"
                    },
                    {
                        value: "Setzzeit: Mai bis Anfang Juni"
                    },
                    {
                        value: "Tragzeit: 8-9M (4.5M Keimruhe)"
                    }
                ]
            },
            food: {
                items: [
                    {
                      value: "Konzentratselektierer, leicht verdauliche Pflanzenteile"
                    },
                    {
                      value: "Im Winter vermehrt Laub- und Nadelholztriebe"
                    }
                ]
            }
        }
    }

];

export default huntingPeriods;
