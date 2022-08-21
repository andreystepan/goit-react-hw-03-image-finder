import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handelKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeydown);
  }

  handelKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, query } = this.props;
    return createPortal(
      <Overlay onClick={this.handelBackdropClick}>
        <ModalWindow>
          <img src={largeImg} alt={query} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
