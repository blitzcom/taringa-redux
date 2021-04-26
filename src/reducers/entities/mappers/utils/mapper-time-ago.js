import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.locale('es');

export default function timeAgoMapper(current, value) {
  const created = current?.created ?? value.created;

  if (typeof created === 'undefined') {
    return '';
  }

  return dayjs(created).fromNow();
}
