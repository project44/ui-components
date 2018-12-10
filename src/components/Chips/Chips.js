import React, { Component } from 'react';
import './Chips.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Chips extends Component {
  static propTypes = {
    listData: PropTypes.array,
    showCount: PropTypes.bool,
    deleteFn: PropTypes.func,
    layout: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  toggleChipsDisplay = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  }

  render() {
    const { 
      listData, 
      showCount, 
      deleteFn, 
      layout = 'row' 
    } = this.props;
    
    const hasChips = listData.length > 0;

    return (
      <div className='chips'>
        <div className={classNames({
          'chips__row': layout === 'row' && hasChips,
          'chips__column': layout === 'column'
        })}>
          {listData.map((item, index) => {
            if (!showCount || this.state.showAll || index < showCount) {
              return (
                <div className='chip' key={item}>
                  <span className='chip__label'>{item}</span>
                  <i className='chip__delete material-icons' onClick={() => deleteFn(item)}>close</i>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        {showCount && (listData.length > showCount) &&
          <div className='chips__show-all animated fadeIn' onClick={this.toggleChipsDisplay}>
            {this.state.showAll &&
              <span className='text_action'>SHOW LESS <i className='material-icons'>arrow_drop_down</i></span>
            }
            {!this.state.showAll &&
              <span className='text_action'>SHOW ALL <i className='material-icons'>arrow_drop_up</i></span>
            }
          </div>
        }
      </div>
    );
  }
}
