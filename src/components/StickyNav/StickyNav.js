import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import { ThemeContext, defaultThemeShape } from '../../styles/theme';
import colors from '../../styles/colors';

const StyleNav = styled.div`
  width: 68px;
  left: 0;
  position: fixed;
  top: 200px;
  border-radius: 0;
  transition-duration: 0.3s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  z-index: 94449;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    width: 242px;
    a {
      text-decoration: none;
    }
  }
`;

const StyledNavItem = styled.div`
  height: 60px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0px 18px !important;
  display: flex;
  overflow: hidden;

  align-items: center;
  text-decoration: none;

  @media (max-width: 992px) {
    width: 54px;
    left: -12px;
  }

  color: ${props => (props.currentView === props.link ? props.theme.primaryColor : colors.secondaryTextColor)};
  border-right: 8px solid ${props => (props.currentView === props.link ? props.theme.primaryColor : `transparent`)};
  svg g {
    fill: ${props => (props.currentView === props.link ? props.theme.primaryColor : colors.secondaryTextColor)};
  }
  i {
    color: ${props => (props.currentView === props.link ? props.theme.primaryColor : colors.secondaryTextColor)};
  }
  span {
    color: ${props => (props.currentView === props.link ? props.theme.primaryColor : colors.secondaryTextColor)};
    font-weight: ${props => (props.currentView === props.link ? `bold` : `normal`)};
    padding-left: 30px;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${props => (props.currentView === props.link ? `transparent` : `#ebebeb`)};
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
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
      const scrollPos = get(ev, ['target', 'scrollTop'], window.scrollY);

      if (scrollPos < this.state.refs[0].offsetTop) {
        activeTab = this.props.menuItems[0].link;
      } else if (item && scrollPos + 200 > item.offsetTop) {
        activeTab = this.props.menuItems[index].link;
      }
    });

    this.setState(() => {
      return {
        currentView: activeTab,
      };
    });
  };

  scrollToElement = destination => {
    const el = document.getElementById(destination);
    el.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { menuItems } = this.props;
    return (
      <StyleNav>
        {menuItems.map(item => {
          return (
            <StyledNavItem
              key={item.link}
              theme={this.props.theme || this.context}
              currentView={this.state.currentView}
              link={item.link}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={() => this.scrollToElement(item.link)}
            >
              {item.icon && <i className="material-icons sticky-nav__icon">{item.icon}</i>}
              {item.label && <span className="stick-nav__label">{item.label}</span>}
            </StyledNavItem>
          );
        })}
      </StyleNav>
    );
  }
}
