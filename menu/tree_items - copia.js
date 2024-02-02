/* --- menu items --- */
var TREE_ITEMS = [

	[' FranchiseConnect', '../main/home_page.htm',
		[' Portada', '../main/home_page.htm'],
		[' Laburpen Posterra', '../Proiektua/Memoria/Posterra.pdf'],
		[' Aurkezpena', '../Proiektua/Aurkezpena.pptx'],
		[' Bideo-tutoriala', '../proiektua/BideoTutotiala.mp4'],
		[' Aurkibide orokorra', '../Proiektua/Memoria/AurkibideOrokorra.pdf'],				
		[' Memoria', '../Proiektua/Memoria/Memoria.pdf',
			['Egitura', '../Proiektua/Memoria/MemoriarenEgitura.htm'],
			['Portada', '../Proiektua/Memoria/0_Portada.pdf'],
			[' 1 Sarrera', '../Proiektua/Memoria/1_Sarrera.pdf'],
			[' 2 Helburuak', '../Proiektua/Memoria/2_Helburuak.pdf'],
			[' 3 Aurrekariak', '../Proiektua/Memoria/3_Aurrekariak.pdf'],
			[' 4 Egungo egoera', '../Proiektua/Memoria/4_EgungoEgoera.pdf'],
		    [' 5 Arauak eta erreferentziak', '../Proiektua/Memoria/5_ArauakEtaErreferentziak.pdf'],
			[' 6 Definizionak eta laburdurak', '../Proiektua/Memoria/6_DefinizioakEtaLaburdurak.pdf'],
			[' 7 Hasierako betekizunak', '../Proiektua/Memoria/7_HasierakoBetekizunak.pdf'],
			[' 8 Irismena', '../Proiektua/Memoria/8_Irismena.pdf'],
			[' 9 Hipotesiak eta Murriztapenak', '../Proiektua/Memoria/9_HipotesiakEtaMurriztapenak.pdf'],
			[' 10 Hautabideak eta egingarritasuna', '../Proiektua/Memoria/10_HautabideakEtaEgingarritasuna.pdf'],
			[' 11 Proposamenaren deskribapena', '../Proiektua/Memoria/11_ProposamenarenDeskribapena.pdf'],
	        [' 12 Proposamenaren arriskuak', '../Proiektua/Memoria/12_ProposamenarenArriskuak.pdf'],
	        [' 13 Proposamenaren antolaketa eta kudeaketa', '../Proiektua/Memoria/13_ProposamenarenKudekaeta.pdf'],
	        [' 14 Proposamenaren denbora planifikazioa', '../Proiektua/Memoria/14_ProposamenarenDenboraPlanifikazioa.pdf'],
	        [' 15 Aurrekontuaren laburpena', '../Proiektua/Memoria/15_AurrekontuarenLaburpena.pdf'],
			[' 16 Oinarrizko dokumentuen ordena', '../Proiektua/Memoria/16_Dokumentuen ordena.pdf']
	    ],

		[' Memoriaren eranskinak',null,
			[' A1 - Sarrerako Dokumentazioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/Sarrerako_dokumentazioa.pdf',
				['Request for proposals (RFP)','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/rfp-template-government-model.pdf']
			],
			[' A2 - Analisi eta Diseinua','../Proiektua/MemoriarenEranskinak/4_analisis-diseno.htm',
				['Diseinua',null,
					['Teknologien ebaluazioa', null,],
				],
				[' Arkitektura', null,
					['Arkitektura dokumentua','../Proiektua/MemoriarenEranskinak/ArchitectureNotebook.pdf'],
				],
				['Analisia eredua','../Proiektua/MemoriarenEranskinak/RupAnalisiEreduaWeb/index.html']

			],
			[' A3 - Tamaina eta Esfortzu Estimazioa','../Proiektua/MemoriarenEranskinak/TamainaEtaEsfortzuEstimazioak.pdf'],
			[' A4 - Kudeaketa Plana','../Proiektua/MemoriarenEranskinak/KudeaketaPlana.pdf',
				[' Integrazioaren Kudeaketa',null,],
				[' Irismenaren Kudeaketa',null,],
				[' Epeen Kudeaketa',null,],
				[' Produktuaren Kostuen Kudeaketa',null,],
				[' Kalitate Kudeaketa',null,],
				[' Giza Baliabideen Kudeaketa',null,],
				[' Komunikazioen Kudeaketa',null,],
				[' Arriskuen Kudeaketa',null,],
				[' Erosketen Kudeaketa',null,],
				[' Interesatuen Kudeaketa',null,],
			],
			[' A5 - Segurtasun Plana','../Proiektua/MemoriarenEranskinak/SegurtasunPlana.pdf'],
			[' A6 - Gainerako Eranskinak', null,
				[' Hedapena', null,
					[' Erabiltzaile dokumentazioa', null, ],		
					[' Backout Plana', null, ],
					[' Hedapen Plana', null, ],
					[' Azpiegitura', null, ],
				],
				[' Garapena', null,
					[' Build', null, ],
					[' Build - ZIP Folder' , null, ],
					[' Garatzaileen Probak', null, ],
					[' Diseinua', null, ],
				],
				['Environment', null,
					[' Tresnak', null, ],
					[' Garapen Kasua', null, ],
				],
				[' Inplementazioa', null, 
					[' Inplementazio osoa', null,],

				],
				[' Test' , null,
					[' Proba Kasuak', null,],
					[' Proba Log-a', null,],
					[' Proba Script-a', null,]
				],
			]
		],

		[' Sistemaren Espezifikazioa',null,
			[' Glosarioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/rup_glossary.pdf'],
			[' Bisioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/Vision.pdf'],
			[' Betebeharren Espezifikazioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/System-Wide_Requirements_Specification.pdf'],

			[' Erabilpen kasuak eta jarduera diagramak', null,
				[' Centralized Platform',null,],
				[' Financial Management',null,],
				[' Manage menu',null,],
				[' Process Order',null,],
				[' Standardized Processes and Practices',null,],
			],
			[' Erabilpen Kasuen Eredua','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/WebErabilpenKasuak/index.html']
		],
		
		[' Aurrekontua', null,
			[' Orokortasunak', null,],
			[' Edukia', null,]
		],

		[' Bestek egindako lanak', null,
			[' Orokortasunak', null,],
			[' Edukia', null,]
		]
	],

	['FranchiseConnect: Barne Kudeaketa', null,
		[' Proiektuaren Barne Kudeaketa', null,
		[' Iterazio Plana' , null,
			[' Proiektu Plana', null,],
			[' Arrisku Zerrenda', null,],
			[' Lan-Atazen Zerrenda', null,],
			[' Barne Kudeaketa', null,],
			[' Trebatzeko Materialak', null,],
			[' Hizkuntza Hitzarmena', null,],
			[' Bilera Aktak', , null,
				['2023.02.06', null, ],

			],
			['Environment', null,
				['BPM PDF', null,],
				['.bpm Fitxategia', null,],
				['Plangintza Txostena', null,],
				['Inplementazio ideiak', null,],
				['Erabakien justifikazio txostena', null,],
			],
		]
		]					
	]
];
/* --- end menu items --- */
// Path: menu/tree_items%20-%20copia.js
// Compare this snippet from menu/tree_items%20-%20copia%20%282%29.js:
// 		[' Sistemaren Espezifikazioa',null,
// 			[' Glosarioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/rup_glossary.pdf'],
// 			[' Bisioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/Vision.pdf'],
// 			[' Betebeharren Espezifikazioa','../Proiektua/MemoriarenEranskinak/Especificacion del sistema/Requisitos/System-Wide_Requirements_Specification.pdf'],
//
// 			[' Erabilpen kasuak (jarduera diagramekin)', null,
// 				[' Centralized Platform',null,],
// 				[' Centralized Platform (UML)',null,],
// 				[' Financial Management',null,],
