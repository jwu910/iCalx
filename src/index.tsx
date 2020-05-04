import ICAL from 'ical.js';
import React from 'react';

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


	return vEvent.subject
};

export {iCalx};
