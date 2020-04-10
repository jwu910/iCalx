interface iVEvent {
	description: String;
	location: String;
	timeStart: Date;
	timeEnd: Date;
	subject: String;
}

const ics = (vEvent: iVEvent): string => {
	return "";
};

export {ics};
