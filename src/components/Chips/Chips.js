import React, { Component } from 'react'
import './Chips.scss';
import PropTypes from 'prop-types';

export default class Chips extends Component {

  static propTypes = {
    listData: PropTypes.array.required
  }

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
    console.log(this.props)
    const { listData, showCount, deleteFn } = this.props;

    return (
      <div className="chips">
        { listData.map((item, index) => {
          return  !showCount || this.state.showAll || index < showCount ?
            <div className="chip__item" key={index}>
              <span className="chip__label">{item}</span>
              <i className="chip__delete material-icons" onClick={() => deleteFn(index)}>close</i>
            </div> : null
        })}
        { showCount && (listData.length > showCount) &&
          <div className="chips__show-all animated fadeIn" onClick={this.toggleChipsDisplay}>
            { this.state.showAll &&
              <span className="text_action">SHOW ALL &nbsp; &#x25BC;</span>
            }
            { !this.state.showAll &&
              <span className="text_action">SHOW LESS &nbsp; &#x25B2;</span>
            }
          </div>
        }
      </div>
    )
  }
};

