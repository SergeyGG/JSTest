Web.STATION = "1-100";
Web.SUN = "1-5+0";
Web.HOUSE = "1-400ap";

function Web (STATION, SUN, HOUSE) {
	var value = 0;

	value += STATION;
	value += SUN;
	value -= HOUSE;

	return value;
}

