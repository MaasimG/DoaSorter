dataSetVersion = "2020-08-24"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Main cast", key: "DOA" },
	  { name: "Xtreme", key: "XVV" },
	  { name: "Include Secondary Characters", key: "DOS" },
	  { name: "Include Final bosses", key: "DOF" },
	  { name: "Include Guest characters", key: "DOG" },
      
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kasumi",
    img: "IQD8tKe.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Zack",
    img: "hBehrhI.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Ryu Hayabusa",
    img: "VPYDU33.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Bayman",
    img: "UmIghjq.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Leifang",
    img: "vCJFl1V.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Gen Fu",
    img: "n944mVW.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Tina Armstrong",
    img: "HVlXnUj.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Jann Lee",
    img: "MmtiFud.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Bass Armstrong/Mr. Strong",
    img: "o9iT413.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Ayane",
    img: "hTcm05v.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Helena Douglas",
    img: "HBBDLYY.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Leon",
    img: "qg5wo1Q.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Ein",
    img: "gFrYknt.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Hayate",
    img: "G2zM5em.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Hitomi",
    img: "k0Gq8RH.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Brad Wong",
    img: "nEII0bJ.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Christie",
    img: "Q3sHcsy.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "La Mariposa/Lisa Hamilton",
    img: "lMEj6up.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Kokoro",
    img: "LZX0aGZ.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Eliot",
    img: "pENNhXG.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Rig",
    img: "rviSf1G.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Mila",
    img: "R5gdN1Q.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Momiji",
    img: "4uvKMBq.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Rachel",
    img: "DsPnMVl.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Marie Rose",
    img: "pCN6380.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Phase 4",
    img: "mOVWKQ5.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Nyotengu",
    img: "i5r6eO3.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Honoka",
    img: "6rMEqPq.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Tamaki",
    img: "RTZEELX.png",
    opts: {
      series: [ "DOA", "XVV" ]
    }
  },
  {
    name: "Diego",
    img: "Co9mqlf.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "NiCO",
    img: "ocmEfvV.png",
    opts: {
      series: [ "DOA" ]
    }
  },
  {
    name: "Kasumi α",
    img: "ywACAay.png?1",
    opts: {
      series: [ "DOS" ]
    }
  },
  {
    name: "Shiden",
    img: "6BBdhkP.jpg?1",
    opts: {
      series: [ "DOS" ]
    }
  },
  {
    name: "False Kasumi",
    img: "ftT333y.png?1",
    opts: {
      series: [ "DOS" ]
    }
  },
  {
    name: "Raidou",
    img: "DtUpBEQ.png",
    opts: {
      series: [ "DOF" ]
    }
  },
  {
    name: "Bankotsubo",
    img: "rfE0yOo.jpg",
    opts: {
      series: [ "DOF" ]
    }
  },
  {
    name: "Genra",
    img: "c7HkSbA.jpg",
    opts: {
      series: [ "DOF" ]
    }
  },
  {
    name: "Alpha-152",
    img: "OeoqY4C.png",
    opts: {
      series: [ "DOF" ]
    }
  },
  {
    name: "Misaki",
    img: "DPKMOLk.png?1",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Luna",
    img: "X0b9BAS.jpg",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Fiona",
    img: "RFLZTzw.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Nagisa",
    img: "YHadjCP.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Kanna",
    img: "AgIkgbL.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Monica",
    img: "RhxN6lW.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Sayuri",
    img: "0g7Xnhl.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Patty",
    img: "V97ZlUr.png",
    opts: {
      series: [ "XVV" ]
    }
  },
{
    name: "Tsukushi",
    img: "SFE7GBq.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "SPARTAN-458",
    img: "GhAOqd9.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Rio",
    img: "787SkkP.jpg",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Akira Yuki",
    img: "Z5sA8CI.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Sarah Bryant",
    img: "Y4UuosH.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Pai Chan",
    img: "riidpeo.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Jacky Bryant",
    img: "OnARNH1.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Naotora Ii",
    img: "a8xIOzA.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Mai Shiranui",
    img: "9qcs0kT.png",
    opts: {
      series: [ "DOG" ]
    }
  },
  {
    name: "Kula Diamond",
    img: "2jLB347.png",
    opts: {
      series: [ "DOG" ]
    }
  },
{
    name: "Lobelia",
    img: "dT2jJJN.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  {
    name: "Nanami",
    img: "tEaW41K.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  
    {
    name: "Elise",
    img: "5oz1CEq.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  
      {
    name: "Koharu",
    img: "sKiSoq6.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  
        {
    name: "Amy",
    img: "OyYRI70.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  
         {
    name: "Shandy",
    img: "ar6CwMN.png",
    opts: {
      series: [ "XVV" ]
    }
  },
  
           {
    name: "Yukino",
    img: "tDCYbz3.png",
    opts: {
      series: [ "XVV" ]
    }
  }
  
  
  
];


