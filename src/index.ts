
import { useStateLogger } from './prod/dev/useStateLogger';
import { useStateLoggerDebug } from './dev/dev/useStateLoggerDebug';

import { useOnMount } from './prod/reactplus/useOnMount';
import { useOnMountDebug } from './dev/reactplus/useOnMountDebug';

import { useOnUnmount } from './prod/reactplus/useOnUnmount';
import { useOnUnmountDebug } from './dev/reactplus/useOnUnmountDebug';

import { useOnUpdate } from './prod/reactplus/useOnUpdate';
import { useOnUpdateDebug } from './dev/reactplus/useOnUpdateDebug';

import { useBoolean } from './prod/booleans/useBoolean';
import { useBooleanDebug } from './dev/booleans/useBooleanDebug';

import { useToggle } from './prod/booleans/useToggle';
import { useToggleDebug } from './dev/booleans/useToggleDebug';

import { useVisibility } from './prod/booleans/useVisibility';
import { useVisibilityDebug } from './dev/booleans/useVisibilityDebug';

import { useHidden } from './prod/booleans/useHidden';
import { useHiddenDebug } from './dev/booleans/useHiddenDebug';

import { useCounter } from './prod/numbers/useCounter';
import { useCounterDebug } from './dev/numbers/useCounterDebug';

import { useDegree } from './prod/numbers/useDegree';
import { useDegreeDebug } from './dev/numbers/useDegreeDebug';

import { useDigit } from './prod/numbers/useDigit';
import { useDigitDebug } from './dev/numbers/useDigitDebug';

import { useInteger } from './prod/numbers/useInteger';
import { useIntegerDebug } from './dev/numbers/useIntegerDebug';

import { useNumber } from './prod/numbers/useNumber';
import { useNumberDebug } from './dev/numbers/useNumberDebug';

import { usePercent } from './prod/numbers/usePercent';
import { usePercentDebug } from './dev/numbers/usePercentDebug';

import { useRandom } from './prod/numbers/useRandom';
import { useRandomDebug } from './dev/numbers/useRandomDebug';

import { useTime } from './prod/datetime/useTime';
import { useTimeDebug } from './dev/datetime/useTimeDebug';

import { useDate } from './prod/datetime/useDate';
import { useDateDebug } from './dev/datetime/useDateDebug';

import { useDateTime } from './prod/datetime/useDateTime';
import { useDateTimeDebug } from './dev/datetime/useDateTimeDebug';

import { useDayOfMonth } from './prod/datetime/useDayOfMonth';
import { useDayOfMonthDebug } from './dev/datetime/useDayOfMonthDebug';

import { useDayOfWeek } from './prod/datetime/useDayOfWeek';
import { useDayOfWeekDebug } from './dev/datetime/useDayOfWeekDebug';

import { useMonth } from './prod/datetime/useMonth';
import { useMonthDebug } from './dev/datetime/useMonthDebug';

import { useYear } from './prod/datetime/useYear';
import { useYearDebug } from './dev/datetime/useYearDebug';

import { useString } from './prod/strings/useString';
import { useStringDebug } from './dev/strings/useStringDebug';

import { useText } from './prod/strings/useText';
import { useTextDebug } from './dev/strings/useTextDebug';

import { useArray } from './prod/arrays/useArray';
import { useArrayDebug } from './dev/arrays/useArrayDebug';

import { useArrayIndex } from './prod/arrays/useArrayIndex';
import { useArrayIndexDebug } from './dev/arrays/useArrayIndexDebug';

import { useObject } from './prod/objects/useObject';
import { useObjectDebug } from './dev/objects/useObjectDebug';

import { useEnum } from './prod/misc/useEnum';
import { useEnumDebug } from './dev/misc/useEnumDebug';

import { useTable } from './prod/misc/useTable';
import { useTableDebug } from './dev/misc/useTableDebug';

import { useColor } from './prod/css/useColor';
import { useColorDebug } from './dev/css/useColorDebug';

import { useFetch } from './prod/fetch/useFetch';
import { useFetchDebug } from './dev/fetch/useFetchDebug';

import { useFetchJSON } from './prod/fetch/useFetchJSON';
import { useFetchJSONDebug } from './dev/fetch/useFetchJSONDebug';

import { useFetchXML } from './prod/fetch/useFetchXML';
import { useFetchXMLDebug } from './dev/fetch/useFetchXMLDebug';

import { useAddEventListener } from './prod/events/useAddEventListener';
import { useAddEventListenerDebug } from './dev/events/useAddEventListenerDebug';

import { useEvent } from './prod/events/useEvent';
import { useEventDebug } from './dev/events/useEventDebug';

import { useWindowEvent } from './prod/events/useWindowEvent';
import { useWindowEventDebug } from './dev/events/useWindowEventDebug';

import { useKeyDownEvent } from './prod/events/useKeyDownEvent';
import { useKeyDownEventDebug } from './dev/events/useKeyDownEventDebug';

import { useWheelEvent } from './prod/events/useWheelEvent';
import { useWheelEventDebug } from './dev/events/useWheelEventDebug';

import { useSetInterval } from './prod/events/useSetInterval';
import { useSetIntervalDebug } from './dev/events/useSetIntervalDebug';

import { useSetTimeout } from './prod/events/useSetTimeout';
import { useSetTimeoutDebug } from './dev/events/useSetTimeoutDebug';

import { useWindowSize } from './prod/window/useWindowSize';
import { useWindowSizeDebug } from './dev/window/useWindowSizeDebug';

import { useWindowHeight } from './prod/window/useWindowHeight';
import { useWindowHeightDebug } from './dev/window/useWindowHeightDebug';

import { useWindowWidth } from './prod/window/useWindowWidth';
import { useWindowWidthDebug } from './dev/window/useWindowWidthDebug';

import { useMousePosition } from './prod/mouse/useMousePosition';
import { useMousePositionDebug } from './dev/mouse/useMousePositionDebug';

import { useHoverIn } from './prod/mouse/useHoverIn';
import { useHoverInDebug } from './dev/mouse/useHoverInDebug';

import { useHoverOut } from './prod/mouse/useHoverOut';
import { useHoverOutDebug } from './dev/mouse/useHoverOutDebug';

import { useClickIn } from './prod/mouse/useClickIn';
import { useClickInDebug } from './dev/mouse/useClickInDebug';

import { useClickOut } from './prod/mouse/useClickOut';
import { useClickOutDebug } from './dev/mouse/useClickOutDebug';



const Awesome = {

	useStateLogger,
	useStateLoggerDebug,

	useOnMount,
	useOnMountDebug,

	useOnUnmount,
	useOnUnmountDebug,

	useOnUpdate,
	useOnUpdateDebug,

	useBoolean,
	useBooleanDebug,

	useToggle,
	useToggleDebug,

	useVisibility,
	useVisibilityDebug,

	useHidden,
	useHiddenDebug,

	useCounter,
	useCounterDebug,

	useDegree,
	useDegreeDebug,

	useDigit,
	useDigitDebug,

	useInteger,
	useIntegerDebug,

	useNumber,
	useNumberDebug,

	usePercent,
	usePercentDebug,

	useRandom,
	useRandomDebug,

	useTime,
	useTimeDebug,

	useDate,
	useDateDebug,

	useDateTime,
	useDateTimeDebug,

	useDayOfMonth,
	useDayOfMonthDebug,

	useDayOfWeek,
	useDayOfWeekDebug,

	useMonth,
	useMonthDebug,

	useYear,
	useYearDebug,

	useString,
	useStringDebug,

	useText,
	useTextDebug,

	useArray,
	useArrayDebug,

	useArrayIndex,
	useArrayIndexDebug,

	useObject,
	useObjectDebug,

	useEnum,
	useEnumDebug,

	useTable,
	useTableDebug,

	useColor,
	useColorDebug,

	useFetch,
	useFetchDebug,

	useFetchJSON,
	useFetchJSONDebug,

	useFetchXML,
	useFetchXMLDebug,

	useAddEventListener,
	useAddEventListenerDebug,

	useEvent,
	useEventDebug,

	useWindowEvent,
	useWindowEventDebug,

	useKeyDownEvent,
	useKeyDownEventDebug,

	useWheelEvent,
	useWheelEventDebug,

	useSetInterval,
	useSetIntervalDebug,

	useSetTimeout,
	useSetTimeoutDebug,

	useWindowSize,
	useWindowSizeDebug,

	useWindowHeight,
	useWindowHeightDebug,

	useWindowWidth,
	useWindowWidthDebug,

	useMousePosition,
	useMousePositionDebug,

	useHoverIn,
	useHoverInDebug,

	useHoverOut,
	useHoverOutDebug,

	useClickIn,
	useClickInDebug,

	useClickOut,
	useClickOutDebug,

};

export default Awesome;
