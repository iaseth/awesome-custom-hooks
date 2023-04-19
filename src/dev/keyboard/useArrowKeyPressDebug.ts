import React from 'react';



export const useArrowKeyPressDebug = (callback: any) => {
	React.useEffect(() => {
		function handkeKeyDown (e: any) {
			switch (e.key) {
				case "ArrowDown": callback("down"); break;
				case "ArrowLeft": callback("left"); break;
				case "ArrowRight": callback("right"); break;
				case "ArrowUp": callback("up"); break;
			}
		}

		window.addEventListener("keydown", handkeKeyDown);
		return () => window.removeEventListener("keydown", handkeKeyDown);
	}, [callback]);

	return 0;
};
