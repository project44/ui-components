import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StickyNav.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default class StickyNav extends Component {
  static propTypes = {
    mode: PropTypes.string,
    menuItems: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      currentView: props.menuItems[0].link,
      refs: []
    };
    this.props = props;
  }

  handleScroll = () => {
    let activeTab;

    this.state.refs.some((item, index) => {
      if (window.scrollY < this.state.refs[0].offsetTop) {
        activeTab = this.props.menuItems[0].link;
      } else if (window.scrollY + 200 > item.offsetTop) {
        activeTab = this.props.menuItems[index].link;
      }
    });

    this.setState(() => {
      return {
        currentView: activeTab
      };
    });
  };

  navigateToHash = location => {
    this.setState(() => {
      return {
        currentView: location
      };
    });
  };

  componentDidMount() {
    if (this.props.mode === 'follow') {
      let refs = [];
      this.props.menuItems.forEach(item => {
        const itemRef = document.getElementById(item.link);
        refs.push(itemRef);
      });

      this.setState(() => {
        return {
          refs: refs
        };
      });
      return window.addEventListener('scroll', this.handleScroll, true);
    }
  }

  componentWillUnmount() {
    if (this.props.mode === 'follow') {
      return window.removeEventListener('scroll', this.handleScroll, true);
    }
  }

  render() {
    const { menuItems, mode = 'follow' } = this.props;
    return (
      <div className='sticky-nav'>
        { menuItems.map((item, index) => {
          return (
            <div key={index} className={
              this.state.currentView === item.link
                ? 'sticky-nav__item selected'
                : 'sticky-nav__item'
            }>
              <Link
                to={mode === 'follow' ? `#${item.link}` : item.link}
                smooth
                onClick={mode === 'follow' ? () => this.navigateToHash(item.link) : () => { return false; }}
              >
                { item.icon &&
                <i className='material-icons sticky-nav__icon'>{item.icon}</i>
                }
                { item.label &&
                <span className='stick-nav__label'>
                  {item.label}
                </span>
                }
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};
