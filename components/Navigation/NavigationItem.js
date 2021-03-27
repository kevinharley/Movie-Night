import Link from 'next/link';
import { useRouter } from 'next/router'
import { NavigationListItem } from './NavigationStyles';

function NavigationItem(props) {
  const { href, title } = props;
  const router = useRouter();

  return (
    <NavigationListItem
      className={router.pathname === href ? '__current' : ''}
    >
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </NavigationListItem>
  )
}

export default NavigationItem;