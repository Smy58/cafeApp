export default {
	cafes: [
		{
			id: 1,
			name: 'First cafe',
			address: 'address 1',
			startWorkTime: '9:00',
			endWorkTime: '18:00',
			waitingTime: 20,
			menu: [
				{
					id: 11,
					name: 'Паста',
					positions: [
						{
							id: 1101,
							name: 'Паста Балоньез',
							cost: 3190
						},
						{
							id: 1102,
							name: 'Паста Карбонара',
							cost: 3290
						},
						{
							id: 1103,
							name: 'Паста Альфредо с семгой',
							cost: 3390
						},
						{
							id: 1104,
							name: 'Паста Альфредо с курицей',
							cost: 3490
						},
					]
				},
				{
					id: 12,
					name: 'Салаты',
					positions: [
						{
							id: 1201,
							name: 'Салат Цезарь с курицей',
							cost: 2190
						},
						{
							id: 1202,
							name: 'Салат из морепродуктов',
							cost: 2290
						},
						{
							id: 1203,
							name: 'Салат Свежий',
							cost: 2390
						},
					]
				},
				{
					id: 13,
					name: 'Кофе',
					positions: [
						{
							id: 1301,
							name: 'Капучино',
							info: 'Эспрессо с молочной пенкой',
							cost: 1190,
							addons: [
								{
									id: 1401,
									name: 'Шоколадный сироп',
									cost: 30
								},
								{
									id: 1402,
									name: 'Клюквенный сироп',
									cost: 30
								},
								{
									id: 1403,
									name: 'Лед',
									cost: 0
								},
							],
							ingredients: [
								{
									id: 115,
									name: 'Молоко',
									list: [
										{
											id: 11501,
											name: 'Классическое молоко',
											cost: 0
										},
										{
											id: 11502,
											name: 'Соевое молоко',
											cost: 100
										},
										{
											id: 11503,
											name: 'Кокосовое молоко',
											cost: 200
										},
									]
								}
							]
						},
						{
							id: 1302,
							name: 'Медовый Раф',
							cost: 1290
						},
					]
				},
			]
		},
		{
			id: 2,
			name: 'Second cafe',
			address: 'address 2',
			startWorkTime: '14:00',
			endWorkTime: '22:00',
			waitingTime: 30,
			menu: [],
		},
		{
			id: 3,
			name: '3rd cafe',
			address: 'address 3',
			startWorkTime: '18:00',
			endWorkTime: '4:00',
			waitingTime: 10,
			menu: [],
		},
		{
			id: 4,
			name: '4th cafe',
			address: 'address 4',
			startWorkTime: '9:00',
			endWorkTime: '18:00',
			waitingTime: 15,
			menu: []
		},
	],
	order: {
		cafeID: 1,
		cafeName: 'First cafe',
		busket: [
			{
				id: 1301,
				name: 'Капучино',
				cost: 1190,
				count: 1,
				totalCost: 1320,
				addons: [
					{
						id: 1402,
						name: 'Клюквенный сироп',
						cost: 30
					},
					{
						id: 1403,
						name: 'Лед',
						cost: 0
					},
				],
				ingredients: [
					{
						id: 11502,
						name: 'Соевое молоко',
						cost: 100
					},
				],
			},
			{
				id: 1101,
				name: 'Паста Балоньез',
				cost: 3190,
				count: 1,
				totalCost: 3190,
				addons: [],
				ingredients: []
			},
			
		],
	},
	orders: [
		{
			id: 901,
			cafeID: 1,
			cafeName: 'First cafe',
			totalCost: 4510,
			waitingTime: 20,
			busket: [
				{
					id: 1301,
					name: 'Капучино',
					cost: 1190,
					count: 1,
					totalCost: 1320,
					addons: [
						{
							id: 1402,
							name: 'Клюквенный сироп',
							cost: 30
						},
						{
							id: 1403,
							name: 'Лед',
							cost: 0
						},
					],
					ingredients: [
						{
							id: 11502,
							name: 'Соевое молоко',
							cost: 100
						},
					],
				},
				{
					id: 1101,
					name: 'Паста Балоньез',
					cost: 3190,
					count: 1,
					totalCost: 3190,
					addons: [],
					ingredients: []
				},
				
			],
		},
		
	],
	coffee: {
		id: 1301,
		name: 'Капучино',
		info: 'Эспрессо с молочной пенкой',
		cost: 1190,
		addons: [
			{
				id: 1401,
				name: 'Шоколадный сироп',
				cost: 30
			},
			{
				id: 1402,
				name: 'Клюквенный сироп',
				cost: 30
			},
			{
				id: 1403,
				name: 'Лед',
				cost: 0
			},
		],
		ingredients: [
			{
				id: 115,
				name: 'Молоко',
				list: [
					{
						id: 11501,
						name: 'Классическое молоко',
						cost: 0
					},
					{
						id: 11502,
						name: 'Соевое молоко',
						cost: 100
					},
					{
						id: 11503,
						name: 'Кокосовое молоко',
						cost: 200
					},
				]
			}
		]
	},
}