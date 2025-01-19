import {Calendar} from "@heroui/react";
import {today, getLocalTimeZone} from "@internationalized/date";

 function Calendars() {
  return <Calendar isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />;
}
export default Calendars;