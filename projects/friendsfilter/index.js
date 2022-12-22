import './index.html';
import './main.css';
import FriendsFilter from './friendsFilter';

new FriendsFilter(
  document.querySelector('.friends'),
  document.querySelector('.friends-list')
);
