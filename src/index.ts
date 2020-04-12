interface iVEvent {
	description: string;
	duration: iDuration;
	location: string;
	subject: string;
	timeEnd: iDate;
	timeStart: iDate;
}

type iDuration = {
	hours: number;
	seconds: number;
}

type iDate = {
	day: number;
	month: number;
	year: number;
}

const iCalx = (vEvent: iVEvent): string => {
	console.log('ho')

	const retVal: string[] = [
		'BEGIN:VCALENDAR',
		'VERSION: 2.0'
	]


	return vEvent.subject
};

export {iCalx};
