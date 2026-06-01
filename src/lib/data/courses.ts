export interface Course {
	id: string;
	title: string;
	description: string;
	fullDescription: string;
	ageGroup: '5-8' | '8-12' | '5-12';
	price: string;
	duration: string;
	icon: string;
	highlights: string[];
}

export const courses: Course[] = [
	{
		id: '3d-print',
		title: '3D Печат — от идея до обект',
		description:
			'Децата проектират свои обекти с 3D моделиращ софтуер и ги принтират на реален 3D принтер.',
		fullDescription:
			'Учат се да мислят пространствено, да решават проблеми и да виждат как дигиталното се превръща в реално. Всяко дете си прибира своя отпечатан обект!',
		ageGroup: '8-12',
		price: '€45 / курс', // TODO: замени с реална цена
		duration: '8 занятия × 90 мин.',
		icon: 'printer',
		highlights: ['3D моделиране', 'Реален принтер', 'Вземи обекта си', 'Пространствено мислене']
	},
	{
		id: 'lego-robotics',
		title: 'Lego Роботика — строй, програмирай, победи',
		description:
			'С Lego Mindstorms / Lego Spike комплекти децата строят роботи и ги програмират да изпълняват задачи.',
		fullDescription:
			'Учат основи на програмирането, логиката и teamwork. Финалът включва мини-турнир между роботите!',
		ageGroup: '8-12',
		price: '€45 / курс', // TODO: замени с реална цена
		duration: '8 занятия × 90 мин.',
		icon: 'cpu',
		highlights: ['Lego Mindstorms', 'Програмиране', 'Teamwork', 'Мини-турнир']
	},
	{
		id: 'infento',
		title: 'Infento — Построй си превозно средство',
		description:
			'Infento е модулна конструкторска система за реални, карани превозни средства — велосипеди, скутери, колички.',
		fullDescription:
			'Децата учат механика и инженерно мислене по най-директния начин. В края на курса децата се возят на това, което са построили сами!',
		ageGroup: '5-12',
		price: '€45 / курс', // TODO: замени с реална цена
		duration: '8 занятия × 90 мин.',
		icon: 'bike',
		highlights: ['Реална механика', 'Инженерно мислене', 'Карай го сам', 'Модулна система']
	}
];
