import React, { Component } from 'react'
import './Chips.scss';
import PropTypes from 'prop-types';

export default class Chips extends Component {

  // static propTypes = {
  //   listData: PropTypes.array.required
  // }

  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }

  toggleChipsDisplay = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  }

  render() {
    const { listData, showCount, deleteFn, layout = 'row' } = this.props;

    return (
      <div className="chips">
        <div className={layout}>
          { listData.map((item, index) => {
            return  !showCount || this.state.showAll || index < showCount ?
              <div className="chip" key={index}>
                <span className="chip__label">{item}</span>
                <i className="chip__delete material-icons" onClick={() => deleteFn(index)}>close</i>
              </div> : null
          })}
        </div>
        { showCount && (listData.length > showCount) &&
        <div className="chips__show-all animated fadeIn" onClick={this.toggleChipsDisplay}>
          { this.state.showAll &&
          <span className="text_action">SHOW LESS <i className="material-icons">arrow_drop_down</i></span>
          }
          { !this.state.showAll &&
          <span className="text_action">SHOW ALL <i className="material-icons">arrow_drop_up</i></span>
          }
        </div>
        }
      </div>

    )
  }
};

