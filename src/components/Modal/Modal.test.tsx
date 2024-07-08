import Modal from '@/components/Modal/Modal';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const onClose = vi.fn();
const Component = (
  <Modal opened={true} title="Title" onClose={onClose}>
    Test
  </Modal>
);

describe('Modal', () => {
  render(Component);

  it('should render the modal opened', () => {
    screen.getByTestId('modal');
  });

  it('should render the title', () => {
    screen.getByText('Title');
  });

  it('should render the children', () => {
    screen.getByText('Test');
  });

  it('should call onClose when close button is clicked', () => {
    screen.getByTestId('modal-close').click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should not render the modal when opened is false', () => {
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
