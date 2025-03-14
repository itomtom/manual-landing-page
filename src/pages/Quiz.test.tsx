import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Quiz } from './Quiz';

vi.mock('html-react-parser', () => ({
  default: (content: string) => content,
}));

const mockQuestions = {
  questionss: [
    {
      question: 'Question 1?',
      type: 'ChoiceType',
      options: [
        { display: 'Option 1', value: 'option1', isRejection: false },
        { display: 'Option 2', value: 'option2', isRejection: true },
      ],
    },
    {
      question: 'Question 2?',
      type: 'ChoiceType',
      options: [
        { display: 'Option 3', value: 'option3', isRejection: false },
        { display: 'Option 4', value: 'option4', isRejection: false },
      ],
    },
  ],
};

describe('Quiz Component', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    fetchMock.resetMocks();
  });

  it('should render loading state initially', () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should fetch and display the first question', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  it('should navigate to the next question when a non-rejection option is selected', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 1' }));

    await waitFor(() => {
      expect(screen.getByText('Question 2?')).toBeInTheDocument();
    });
  });

  it('should show rejection message when a rejection option is selected', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 2' }));

    await waitFor(() => {
      expect(screen.getByText(/unfortunately/i)).toBeInTheDocument();
    });
  });

  it('should show success message when completing the quiz', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 1' }));

    await waitFor(() => {
      expect(screen.getByText('Question 2?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 3' }));

    await waitFor(() => {
      expect(screen.getByText(/great news/i)).toBeInTheDocument();
    });
  });

  it('should handle back navigation correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 1' }));

    await waitFor(() => {
      expect(screen.getByText('Question 2?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Back' }));

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });
  });

  it('should handle API fetch errors', async () => {
    fetchMock.mockRejectOnce(new Error('API error'));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch quiz/i)).toBeInTheDocument();
    });
  });

  it('should close and reset quiz when close button is clicked on result screen', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockQuestions));
    render(<Quiz onClose={mockOnClose} />);

    await waitFor(() => {
      expect(screen.getByText('Question 1?')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Option 2' }));

    await waitFor(() => {
      expect(screen.getByText(/unfortunately/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
