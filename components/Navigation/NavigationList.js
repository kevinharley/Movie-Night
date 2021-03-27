import NavigationItem from './NavigationItem';
import {
  NavigationListContainer
} from './NavigationStyles';

function NavigationList() {
  return (
    <NavigationListContainer>
      <NavigationItem
        href="/"
        title="Home"
      />
      <NavigationItem
        href="/liked"
        title="Favorites"
      />
    </NavigationListContainer>
  )
}

export default NavigationList