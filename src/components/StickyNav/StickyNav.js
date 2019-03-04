import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { ThemeContext, defaultThemeShape } from '../../styles/theme';

import './StickyNav.scss';

const StyledNavItem = styled.div`
  &.selected {
    color: ${props => props.theme.primaryColor};
    background-color: var(--white);
    border-right: 8px solid ${props => props.theme.primaryColor};
    svg g {
      fill: ${props => props.theme.primaryColor};
    }
    i {
      color: ${props => props.theme.primaryColor};
    }
    span {
      color: ${props => props.theme.primaryColor};
      font-weight: bold;
    }
  }
`;
export default class StickyNav extends Component {
  static propTypes = {
    mode: PropTypes.string,
    menuItems: PropTypes.array,
    theme: PropTypes.shape(defaultThemeShape),
  };

  static defaultProps = {
    mode: 'follow',
  };

  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      currentView: props.menuItems[0].link,
      refs: [],
    };
    this.props = props;
  }

  componentDidMount() {
    if (this.props.mode === 'follow') {
      let refs = [];
      this.props.menuItems.forEach(item => {
        const itemRef = document.getElementById(item.link);
        refs.push(itemRef);
      });

      this.setState(() => {
        return {
          refs: refs,
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

  handleScroll = ev => {
    let activeTab = this.state.currentView;

    this.state.refs.forEach((item, index) => {
      if (ev.target.scrollTop < this.state.refs[0].offsetTop) {
        activeTab = this.props.menuItems[0].link;
      } else if (ev.target.scrollTop + 200 > item.offsetTop) {
        activeTab = this.props.menuItems[index].link;
      }
    });

    this.setState(() => {
      return {
        currentView: activeTab,
      };
    });
  };

  render() {
    const { menuItems, mode } = this.props;
    return (
      <div className="sticky-nav">
        {menuItems.map((item, index) => {
          return (
            <StyledNavItem
              key={index}
              theme={this.props.theme || this.context}
              className={this.state.currentView === item.link ? 'sticky-nav__item selected' : 'sticky-nav__item'}
            >
              <Link to={mode === 'follow' ? `#${item.link}` : item.link} smooth>
                {item.icon && <i className="material-icons sticky-nav__icon">{item.icon}</i>}
                {item.label && <span className="stick-nav__label">{item.label}</span>}
              </Link>
            </StyledNavItem>
          );
        })}
      </div>
    );
  }
}
