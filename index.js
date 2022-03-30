function trackRobot(...steps) {
	var coordinates = [0,0];
	var directionNow = 0;
			for(i = 0; i< steps.length; i++){
				switch(directionNow){
					case 0:
						coordinates[1] += steps[i];
						directionNow++
						break;
					case 1:
						coordinates[0] += steps[i];
						directionNow++
						break;
					case 2:
						coordinates[1] -= steps[i];
						directionNow++
						break;
					case 3:
						coordinates[0] -= steps[i];
						directionNow = 0;
						break;
				}
			}	
	return 	coordinates
}