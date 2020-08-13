const subjects = [
	"Artes",
	"Biologia",
	"Ciencias",
	"Educacao Fisica",
	"Fisica",
	"Geografia",
	"Historia",
	"Matematica",
	"Portugues",
	"Quimica",
];

const weekdays = [
	"Domingo",
	"Segunda-feira",
	"Terca-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sabado",
];

// Funcionalidades
function getSubject(subjectNumber) {
	const position = +subjectNumber - 1;
	return subjects[position];
}

function convertHoursToMinutes(time) {
	const [hour, minutes] = time.split(":");
	return Number(hour * 60 + minutes);
}

module.exports = {
	subjects,
	weekdays,
	getSubject,
	convertHoursToMinutes,
};
