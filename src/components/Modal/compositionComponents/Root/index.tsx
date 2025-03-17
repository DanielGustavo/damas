import React, {
  MouseEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import FeatherIcon from 'feather-icons-react';

import { Background, BackgroundBlur, Container, Header } from './styles';

export type TModal = {
  children?: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

export type TModalRef = {
  open: () => void;
  close: () => void;
};

const Modal: React.ForwardRefRenderFunction<TModalRef, TModal> = (
  { children, onClose, className },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keepInDOM, setKeepInDOM] = useState(false);

  const fadeMilliseconds = 300;

  function open() {
    setIsOpen(true);
    setKeepInDOM(true);
  }

  function close() {
    setIsOpen(false);
    if (onClose) onClose();

    setTimeout(() => setKeepInDOM(false), fadeMilliseconds);
  }

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }

    window.addEventListener('keyup', handleEsc);

    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, []);

  const handleBackgroundClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const clickIsOnlyOnBackground = event.currentTarget === event.target;

    if (clickIsOnlyOnBackground) close();
  };

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  const Component = (
    <Background>
      <BackgroundBlur
        onClick={handleBackgroundClick}
        fadeMilliseconds={fadeMilliseconds}
        open={isOpen}
      >
        <Container className={className}>
          <Header>
            <button type="button" onClick={close}>
              <FeatherIcon strokeWidth="2px" icon="x" />
            </button>
          </Header>

          {children}
        </Container>
      </BackgroundBlur>
    </Background>
  );

  if (!keepInDOM) return;

  return createPortal(Component, document.body);
};

export default forwardRef(Modal);
