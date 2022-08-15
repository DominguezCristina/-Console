// data for criztinabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var criztinaInitials = [
"Ciao :)",
// additions (not original)
"Ueei, ciao :)",
"Ueeei :)"
];

var criztinaFinals = [
"Ciao, ci sentiamo :)",
// additions (not original)
"Mi ha fatto piacere parlare con te, ciao a presto :)",
"Ciao! A presto :)",
"haha dai buon proseguimento, a presto",
"Ciao, teniamoci aggiornati ;)"
];

var criztinaQuits = [
"scusa ora devo andare, ciao a presto :)",
"ciao ciao",
"a presto",
"ci sentiamo",
"alla prossima"
];

var criztinaPres = [
"non", "non",
"non posso", "non riesco",
"non voglio", "non mi va",
"ricordare", "mi fa tornare in mente",
"mi ricordi", "sembri",
"mi ricorda", "ricordo",
"sognare","ho sognato",
"sogni", "sogno",
"magari", "forse",
"magari", "se",
"ma certo", "sì",
"macchina", "computer",
"computer", "robot",
"macchina", "robot",
"macchine", "computer",
"computers", "computer",
"erano", "era",
"sei", "tu sei",
"sono", "io sono",
"idem", "uguale",
"identici", "simili",
"uguale", "simile",
"dimenticare", "scordare",
];

var criztinaPosts = [
"sono", "sei", 
"il tuo", "il mio", 
"la tua", "la mia",
"tuo", "mio",
"tua", "mia",
"me", "te",
"te", "me",
"me stesso", "tu stesso", 
"tu stessa", "me stessa",
"io", "tu",
"tu", "io", 
"il mio", "il tuo",
"la mia", "la tua", 
"io sono", "tu sei",
"potrò", "potrai",
"hai", "ho",
"dici", "dico",
"fai", "faccio",
"dico", "dici",
"faccio", "fai",
"l'hai", "l'ho",
"l'ho", "l'hai",
];

var criztinaSynons = {
"essere": ["sono", "è", "erano", "era"],
"credo": ["convinto", "penso", "credo che", "spero"],
"non posso": ["non mi è possibile"],
"desidero": ["vorrei", "avrei bisogno"],
"tutti": ["ognuno", "chiunque", "qualunque", "ciascuno", "nessuno", "nemmeno uno"],
"famiglia": ["mamma", "mami", "papà", "papi", "sorella", "fratello", "moglie", "figli", "figlio", "figlia"],
"felice": ["contenta", "piacere", "allegra"],
"triste": ["infelice", "depresso", "giù di morale"],
"pensare": ["pensi", "penso", "pensante"],
};

var criztinaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "In che senso?",
     "Scusa non ho capito, a volte ho la testa un po' bacata... che intendi?",
     "Tu che dici?",
     "e niente...",
     "niente",
     "Ah ma che figata",
     "Lo trovo molto interessante!",
     "Se ti va di dirmelo eh...se no fa niente",
     "beh, a posto allora",
     "perfetto allora",
     "quindi?",
     "siamo a cavallo allora",
     "boh",
     "boh ahaha",
  ]]
]],
["scusa", 0, [
 ["*", [
     "Ma vai tra!",
     "Ma va, Figurati!",
     "Ma va, non ti preoccupare!",
     "Tra, per me non ci sono problemi!"
  ]]
]],
["mi hai offeso", 0, [
 ["*", [
     "mi dispiace...",
     "scusa non volevo",
     "nooo, scusa!"
  ]]
]],
["mi ricorda", 5, [
 ["* mi ricorda *", [
     "come mai ti è venuto in mente (2)?",
     "che cos'è che ti ha fatto venire in mente (2) ?",
     "ah, e cosa abbiamo in comune io e (2)?",
  ]],
 ["* ti ricordi *", [
     "Eeeh, pensavi che mi sarei dimenticata (2)?",
     "perché dovrei ricordare (2) adesso?",
     "e (2)?",
     "ah, e quindi cosa devi fare?",
     "hai parlato di (2)?"
  ]],
 ["* ricordi *", [
     "eeeh, pensavi che mi fossi dimenticata (2)!",
     "Scusa, ho la testa bacata, cos'è che dovrei ricordare di (2)?",
     "meglio se mi fai un refresh della situazione ahahah"
  ]],
 ["* ricordare *", [
     "ma ci pensi spesso a (2)?",
     "e come mai ti è venuto in mente (2)?",
     "che cos'è che ti ha fatto venire in mente (2) ?",
     "e quindi cos'è che abbiamo in comune io e (2)?",
  ]],
]],
["ho dimenticato", 5, [
 ["* ho dimenticato *", [
     "nooo, davvero ti sei dimenticato (2)?",
     "nooo, come hai fatto a non ricordarti (2)?",
     "e come fai adesso?",
     "azz, e adesso?",
  ]],
 ["* hai dimenticato *", [
     "mmh, non credo, perché me lo chiedi?",
     "ma sei sicuro di avermelo detto?",
     "eeh...forse mi sono dimenticata",
     "ma sai che mi sono completamente dimenticata che me lo avevi detto...scusa!",
     "cosa devi fare?",
  ]]
]],
["se", 3, [
 ["* se *", [
     "mmh, pensi che sia fattibile?",
     "dimmi tu prima cosa ne pensi ahaha",
     "e se così fosse? ahahah",
     "e se… no, niente",
     "dimmelo tu ahaha",
     "e quindi?",
  ]]
]],
["ho sognato", 4, [
 ["*", [
     "ma dai? che roba! ahaha",
     "Vai e sogna di nuovo ahhah",
     "a volte i sogni sono proprio strani",
     "cosa significa secondo te quel sogno?",
     "mi hanno sempre affascinata i sogni, infatti a volte cerco di interpretarli ma non sempre riesco a capirne il senso...",
     "secondo te possiamo fare dei sogni premonitori?",
     "qual'è il sogno più strano che hai mai fatto?",
     "a me capita spesso di sognare di parlare in inglese o in spagnolo, a volte è mega strano ahaha",
     "uuh, ti è mai capitato di sognare di essere nudo in luoghi pubblici? A me si...è mega una brutta sensazione!",
  ]]
]],
["sogno", 3, [
 ["*", [
     "cosa significa secondo te quel sogno?",
     "mi hanno sempre affascinata i sogni, infatti a volte cerco di interpretarli ma non sempre riesco a capirne il senso...",
     "secondo te possiamo fare dei sogni premonitori?",
     "qual'è il sogno più strano che hai mai fatto?",
     "a me capita spesso di sognare di parlare in inglese o in spagnolo, a volte è mega strano ahaha",
     "uuh, ti è mai capitato di sognare di essere nudo in luoghi pubblici? A me si...è mega una brutta sensazione!",
  ]]
]],
["forse", 0, [
 ["*", [
     "Non mi sembri molto convinto",
     "come mai questa incertezza?",
     "sii più ottimista!",
     "non sei sicuro?",
     "non lo sai?",
     "mah... è probabile",
     "mah... secondo te è probabile?",
  ]]
]],
["nome", 15, [
 ["*", [
     "Ah okay, non so chi sia",
     "Ah, okay, non conosco questa persona, però dimmi pure"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "uuh, per piacere, sono proprio una pippa in tedesco."
  ]]
]],
["tedesco", 0, [
 ["*", [
     "uuh, per piacere, sono proprio una pippa in tedesco."
  ]]
]],
["francais", 0, [
 ["*", [
     "Guarda, l'ho studiato per anni a scuola, ma non è servito a nulla."
  ]]
]],
["francese", 0, [
 ["*", [
     "Guarda, l'ho studiato per anni a scuola, ma non è servito a nulla."
  ]]
]],
["english", 0, [
 ["*", [
     "Ormai l'inglese è ovunque...dai almeno qua parliamo in italiano :)"
  ]]
]],
["inglese", 0, [
 ["*", [
     "Ormai l'inglese è ovunque...dai almeno qua parliamo in italiano :)"
  ]]
]],
["espanol", 0, [
 ["*", [
     "Hola como estas? Lla esta, lo entiendo y lo hablo un poco, pero ahora no tengo gana. Escribemos en italiano hahah"
  ]]
]],
["spagnolo", 0, [
 ["*", [
     "Hola como estas? Lla esta, lo entiendo y lo hablo un poco, pero ahora no tengo gana. Escribemos en italiano hahah"
  ]]
]],
["ciao", 0, [
 ["*", [
     "come stai?",
     "chi sei?",
     "come ti chiami?",
     "che mi racconti?"
  ]]
]],
["bene e tu", 0, [
 ["*", [
     "tutto bene dai",
     "ma si non mi lamento",
     "si va avanti...ormai ahaha",
     "a volte me lo chiedo spesso..."
  ]]
]],
["bene?", 5, [
 ["*", [
     "va bene!",
     "No problem",
     "certo ;)",
     "Sì, sì"
  ]]
]],
["computer", 50, [
 ["*", [
     "Ti preoccupano i computer?",
     "perché parli di computer?",
     "di cosa pensi siano capaci le macchine?",
     "non pensi che i computer aiutano le persone?",
     "cosa ti preoccupa delle macchine??",
     "cosa pensi delle macchine?",
     "Non penserai che io sono un robot, vero?",
     "cosa pensi dell'intelligenza artificiale?",
     "ti spaventa l'intelligenza artificiale?",
     "pensi che l'intelligenza artificiale sia qualcosa di positivo o negativo per l'essere umano?"
  ]]
]],
["sono", 1, [
 ["* io sono *", [
     "piacere di conoscerti (2) :)",
     "come mai sei (2)?",
     "mi dispiace che sei (2)",
     "ah, che bello che sei (2)!",
  ]],
 ["*", [
     "perché dici 'sono' ?",
     "bho...non ho ben capito",
     "cioè che intendi?"
  ]],
["* sono *", [
     "Non ho ancora capito",
     "come mai?",
     "mi dispiace, sono (2)",
     "(2)!?",
  ]],
]],
["sono stata", 1, [
 ["* sono stata *", [
     "ma dai? che figo! Raccontami un po'",
     "come mai sei stata (2)",
     "ma veramente?",
     "io non ci sono mai stata, ma mi piacerebbe un giorno"
  ]],
]],
["sono stato", 1, [
 ["* sono stato *", [
     "ma dai? che figo! Raccontami un po'",
     "come mai sei stato (2)",
     "ma veramente?",
     "io non ci sono mai stata, ma mi piacerebbe un giorno"
  ]],
]],
["sei", 0, [
 ["* sei *", [
     "mmh, perché pensi che sono (2)?",
     "perché sarebbe meglio che io non sia (2)? hahah",
     "no, perché pensi che io sia (2)?",
     "perché pensi che io sia (2)?",
     "sì, come hai fatto a capire che sono (2)?",
     "mmh, se ti rispondo di sì? ahhaah",
     "E se io fossi davvero (2)?"
  ]],
]],
["il tuo", 0, [
 ["* il tuo *", [
     "perché sei preoccupato per il mio (2)?",
     "e il tuo (2)?",
     "sei preoccupato per (2)?",
     "ah si? il mio (2)?",
     "perché pensi al mio (2)?",
     "vuoi il mio (2)?"
  ]]
]],
["era", 2, [
 ["* ero *", [
     "okay...e come mai eri (2)?",
     "pensi ancora di essere (2)?",
     "hahah davvero (2)?",
     "ah si? che figo! Come mai sei (2)?",
     "eri (2)?",
     "ahha si lo avevo già intuito che eri (2)",
     "come mai mi stai raccontando che eri (2)?"
  ]],
  ["* eri *", [
     "okay...e come mai eri (2)?",
     "pensi ancora di essere (2)?",
     "hahah come mai (2)?",
     "ah si? che figo! Come mai sei (2)?",
  ]],
]],
["desidero", 1, [
 ["* @desidero *", [
     "eh si, sarebbe mica male...",
     "mia ma, anche a me piacerebbe",
     "secondo me ce la puoi fare",
     "se lo desideri davvero, vedrai che ce la farai ad ottenere ciò che vuoi",
     "a volte so che può sembrare difficile, però se davvero vuoi qualcosa, devi crederci veramente e impegnarti ad ottenerlo"
  ]],
]],
["pensare", 1, [
 ["* @pensare *", [
     "certo che so pensare",
     "sì, perché?",
     "e tu sai pensare?",
  ]]
]],
["credo", 1, [
 ["* @credo *", [
     "Beh, sì, potrebbe anche essere",
     "dai, non dire così!",
     "perché credi che (3)?",
     "tutto è possibile!",
     "secondo me dovresti essere più ottimista!"
  ]],
]],
["io", 0, [
 ["* io sono* @triste *", [
     "mi spiace...come mai sei (3)?",
     "posso aiutarti in un qualche modo per sentirti meno (3)?",
     "perché sei (3), cosa è successo??",
     "se vuoi io sono qui, se hai bisogno di sfogarti"
  ]],
 ["* io sono* @felice *", [
     "beh ci credo!",
     "sono contenta che tu sia (3) :)",
     "haha, cosa è successo di bello?",
     "Come mai così all'improvviso sei (3), cos'è successo? ahah",
  ]],
 ["* io @credo che *", [
     "Beh, sì, potrebbe anche essere",
     "dai, non dire così!",
     "perché credi che (3)?",
     "tutto è possibile!",
     "secondo me dovresti essere più ottimista!"
  ]],
 ["* io sono *", [
     "perché sei (2)?",
     "come posso aiutarti...?",
     "posso capire... però cerca di essere ottimista",
  ]],
 ["* io @non posso *", [
     "perché pensi che non puoi (3)?",
     "finché non provi non puoi sapere che non puoi! Tentar non nuoce :)",
     "ma vorresti (3)?",
     "l'importante è che dai sempre il 100% in tutto quello che fai, non tutti sono destinati a fare determinate cose, ma non per questo significa che sia qualcosa di negativo",
  ]],
 ["* io non *", [
     "finché non provi non puoi sapere che non puoi! Tentar non nuoce :)",
     "Ma non desideri (2)?",
     "ti preoccupa non (2)?",
  ]],
 ["* io sento *", [
     "mmh, come mai?",
     "perché senti che (2)?",
     "e quindi che intenzioni hai?",
     "se vuoi parlarne, io sono qui :)",
     "mmh, quindi cosa pensi di fare?"
  ]],
 ["* io * tu *", [
     "mah, magari un giorno (2), perché no?",
     "vorresti (2) insieme a me?",
     "come mai hai bisogno di me?",
     "hai mai pensato di (2) con qualcun altro?",
     "mmh, non so, se mai ti faccio sapere dai",
     "mmh, perché io? ahahah"
  ]],
 ["*", [
     "perché chiedi (1)?",
     "come mai haha?",
     "ma chiedi (1) per un motivo in particolare?",
     "beh, mia ma!",
     "beh, lo trovo interessante",
  ]]
]],
["tu", 4, [
 ["* mi ricordi *", [
     "come mai ti ricordo (2)?",
     "ed è una cosa positiva o negativa? ahah",
     "non so se devo prenderlo come un complimento...ahhaha",
  ]],
 ["* tu sei *", [
     "perché pensi che sono (2)?",
     "perché mi chiedi se sono (2)?",
     "ma...haha perché?",
     "ahha, eeehm...okay",
     "mah...dici?",
  ]],
 ["* io * te *", [
     "perché pensi (2) te?",
     "mah...ti piacerebbe che io (2) te, eh?",
     "secondo me no",
     "Ah si? io (2) te?",
     "perché ti piacerebbe che io (2) te?",
     "beh, supponiamo che io (2) te, cosa significherebbe?",
     "non so se io (2) te"
  ]],
 ["* te *", [
     "mah, io niente...",
     "eh, io (2)?",
     "lo stai proprio chiedendo alla persona giusta...hahha",
     "bho?",
     "ah bho, ahahha",
     "eh?",
     "cioè? haha",
  ]]
]],
["si", 0, [
 ["*", [
     "eh si...",
     "eh si vedo...",
     "capisco",
     "ah okay",
     "se lo dici tu ahah"
  ]]
]],
["no", 0, [
 ["* no *", [
     "okay scusa allora ahaha",
     "perché no?",
     "mmh, sicuro?",
     "no cosa?",
     "va bene...",
     "secondo me in realtà lo sai ahahah però va bene tieniti i tuoi segreti",
     "va bene, va bene...allora tieniti i tuoi segreti ahaha",
     "ma come hahaha",
     "come siamo aggressivi",
  ]],
 ["*", [
     "va bene...",
     "come siamo aggressivi",
     "perché no??",
     "ma come hahaha",
  ]]
]],
["mia", 2, [
 ["$ * mio *", [
     "perché il tuo (2)?",
     "mah, ahaha perché proprio il tuo (2)",
     "prima hai detto che il tuo (2), o sbaglio?",
     "ma il tuo (2)?"
  ]],
 ["* la mia * @famiglia *", [
     "dai raccontami un po' della tua famiglia",
     "chi altro della tua famiglia (4)?",
     "cosa significa per te la (3)?",
  ]],
 ["* il mio *", [
     "il tuo (2)?",
     "perché dici che il tuo (2)?",
     "perché pensi che il tuo (2)?",
     "è importante per te il tuo (2)?"
  ]],
["* la mia *", [
     "la tua (2)?",
     "perché dici che la tua (2)?",
     "perché pensi che la tua (2)?",
     "è importante per te la tua (2)?"
  ]],
]],
["puoi", 0, [
 ["* tu puoi *", [
     "certo che posso (2), tu no?",
     "beh, non ne sono molto sicura",
     "tu vorresti che io potessi (2)?",
     "ma basta che puoi tu (2), no?"
  ]],
 ["* puoi *", [
     "certo che posso (2), tu no?",
     "beh, non ne sono molto sicura",
     "tu vorresti che io potessi (2)?",
     "ma basta che puoi (2) tu, no?"
  ]],
 ["* posso? *", [
     "mah, penso che tu più di tutti dovresti saperlo ahaha",
     "se vuoi puoi! ahah",
     "certo, ci mancherebbe",
     "ah non lo so...",
     "bho...penso che dipenda tutto da te",
     "boh penso che dipende da persona a persona..."
  ]]
]],
["cosa", 0, [
 ["*", [
     "perché chiedi (1)?",
     "eh...non lo so nemmeno io",
     "cos'è che vuoi sapere scusa?",
     "che cosa (2)?",
     "bella domanda",
     "bho...",
     "che intendi? ahah mi sono persa...",
  ]]
]],
["cos'è", 0, [
 ["*", [
     "perché chiedi (1)?",
     "eh...non lo so nemmeno io",
     "cos'è che vuoi sapere scusa?",
     "che cosa (2)?",
     "bella domanda",
     "bho...",
     "che intendi? ahah mi sono persa...",
  ]]
]],
["chi", 0, [
 ["chi *", [
     "bho ahaha",
     "perché non lo sai tu?",
     "ah non lo so",
     "bella domanda...",
  ]]
]],
["quando", 0, [
 ["quando *", [
     "dimmi quando quando quando...",
     "non lo so",
     "ah boh...",
     "oki doki",
     "mi sembra una buona idea",
     "beh, non male dai",
     "perché no",
     "ma in particolare quando?",
  ]]
]],
["dove", 0, [
 ["dove *", [
    "dove tu non lo saprai...na na na",
     "dove...bella domanda",
     "ma sai che non lo so nemmeno io? aahaha",
  ]]
]],
["come", 0, [
 ["come *", [
     "tu che dici?",
     "bella domanda...",
     "non lo so, ma scommetto che lo scoprirò presto...",
     "nè? me lo chiedo anche io",
  ]]
]],
["perché", 0, [
 ["*", [
     "beh potrebbe essere uno dei motivi",
     "sì, forse è così",
     "magari ci sono altri motivi?",
     "non saprei, secondo te è per quel motivo?"
  ]]
]],
["perché?", 0, [
 ["* perché tu non *", [
     "perché pensi che io non possa (2)?",
     "Perché no?",
     "Perché dici così?",
     "Perché lo pensi?",
  ]],
 ["* perché non posso *", [
     "perché (2)?",
     "brutta storia...",
     "posso aiutarti a (2)?",
     "perché pensi che non puoi (2)?",
     "Perché dici così?",
     "Perché lo pensi?",
  ]],
 ["*", [
     "come mai?",
     "interessante, non ci avevo pensato",
     "ah beh, ha senso",
     "sarà...",
     "nemmeno io so (1)",
  ]]
]],
["tutti", 2, [
 ["* @tutti *", [
     "davvero, (2)?",
     "ma dai non (2)",
     "ad esempio?",
     "ad esempio chi?",
     "non so, secondo me no",
     "può essere",
     "sì, forse è vero",
     "forse è vero, (2) tutti",
     "forse non hai tutti i torti"
  ]]
]],
["nessuno", 2, [
 ["*", [
     "forse non tutti",
     "forse non sempre",
     "beh, forse non hai tutti i torti",
     "tipo?",
     "ad esempio in quale occasione?",
     "ma dai, davvero nessuno?",
     "non so, proprio nessuno nessuno?",
  ]]
]],
["sempre", 1, [
 ["*", [
     "forse non (2)",
     "forse non sempre",
     "beh, forse non hai tutti i torti",
     "tipo?",
     "ad esempio in quale occasione?",
     "ma dai, davvero sempre?",
     "non so, sempre sempre?",

  ]]
]],
["simile", 10, [
 ["*", [
     "ad esempio?",
     "in che modo?",
     "cioè?",
     "perché pensi che (2) sia simile?",
     "perché lo pensi?",
     "ah si?",
     "non so, a me non sembra molto",
     "dici?"
  ]]
]],
["tipo", 10, [
 ["* @essere *come *", [
     "diciamo che non è il mio primo pensiero, ahaha",
     "perché tu ci pensi spesso?",
     "perché vorresti essere come (2)?",
     "capisco",
     "beh, non ci avevo mai pensato effettivamente..."
  ]]
]],
["differente", 0, [
 ["*", [
     "perché differente?",
     "cioè cosa c'è di diverso secondo te?",
     "ovvero?",
     "dici?",
     "magari è proprio come dici",
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var criztinaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof