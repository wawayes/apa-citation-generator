import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitationForm from '../CitationForm';

describe('CitationForm', () => {
  const mockOnSave = jest.fn();

  beforeEach(() => {
    mockOnSave.mockClear();
  });

  // 测试错误处理
  describe('Error Handling', () => {
    it('should handle invalid year format', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      const yearInput = screen.getByPlaceholderText(/Publication year/i);
      await userEvent.type(yearInput, 'invalid');
      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Please enter a valid year')).toBeInTheDocument();
      });
    });

    it('should handle invalid page numbers', async () => {
      render(<CitationForm onSave={mockOnSave} />);
      
      // 找到包含 Journal Article 文本的按钮
      const buttons = screen.getAllByRole('button');
      const journalButton = buttons.find(button => 
        within(button).queryByText('Journal Article') !== null
      );
      if (!journalButton) throw new Error('Journal Article button not found');
      fireEvent.click(journalButton);

      const pagesInput = screen.getByPlaceholderText(/e.g., 45-67/i);
      await userEvent.type(pagesInput, 'abc-xyz');
      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Please enter valid page numbers')).toBeInTheDocument();
      });
    });
  });

  // 测试日期格式验证
  describe('Date Format Validation', () => {
    it('should validate website access date format', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      // 找到包含 Website 文本的按钮
      const buttons = screen.getAllByRole('button');
      const websiteButton = buttons.find(button => 
        within(button).queryByText('Website') !== null
      );
      if (!websiteButton) throw new Error('Website button not found');
      fireEvent.click(websiteButton);

      const dateInput = screen.getByPlaceholderText(/e.g., January 15/i);
      await userEvent.type(dateInput, 'Invalid Date');
      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Please enter a valid date')).toBeInTheDocument();
      });
    });
  });

  // 测试多作者处理
  describe('Multiple Authors Handling', () => {
    it('should correctly format multiple authors', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      // 找到包含 Book 文本的按钮
      const buttons = screen.getAllByRole('button');
      const bookButton = buttons.find(button => 
        within(button).queryByText('Book') !== null
      );
      if (!bookButton) throw new Error('Book button not found');
      fireEvent.click(bookButton);

      const authorsInput = screen.getByPlaceholderText(/e.g., Smith, J. D./i);
      await userEvent.type(authorsInput, 'Smith, J. D., Johnson, M. R., & Brown, A. B.');
      await userEvent.type(screen.getByPlaceholderText(/Enter the title/i), 'Test Title');
      await userEvent.type(screen.getByPlaceholderText(/Publication year/i), '2024');
      await userEvent.type(screen.getByPlaceholderText(/Publisher name/i), 'Test Publisher');

      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        const citationText = screen.getByText((content) => {
          return content.includes('Smith') && 
                 content.includes('Test Title') &&
                 content.includes('2024') &&
                 content.includes('Test Publisher');
        });
        expect(citationText).toBeInTheDocument();
      });
    });

    it('should handle et al. for more than three authors', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      // 找到包含 Book 文本的按钮
      const buttons = screen.getAllByRole('button');
      const bookButton = buttons.find(button => 
        within(button).queryByText('Book') !== null
      );
      if (!bookButton) throw new Error('Book button not found');
      fireEvent.click(bookButton);

      const authorsInput = screen.getByPlaceholderText(/e.g., Smith, J. D./i);
      await userEvent.type(authorsInput, 'Smith, J., Johnson, M., Brown, A., Davis, R., & Wilson, E.');
      await userEvent.type(screen.getByPlaceholderText(/Enter the title/i), 'Test Title');
      await userEvent.type(screen.getByPlaceholderText(/Publication year/i), '2024');
      await userEvent.type(screen.getByPlaceholderText(/Publisher name/i), 'Test Publisher');

      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        const citationText = screen.getByText((content) => {
          return content.includes('et al.') && 
                 content.includes('Test Title') &&
                 content.includes('2024') &&
                 content.includes('Test Publisher');
        });
        expect(citationText).toBeInTheDocument();
      });
    });
  });

  // 测试表单验证
  describe('Form Validation', () => {
    it('should show error messages for required fields', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      // 不填写任何字段直接提交
      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Authors are required')).toBeInTheDocument();
        expect(screen.getByText('Title is required')).toBeInTheDocument();
        expect(screen.getByText('Year is required')).toBeInTheDocument();
      });
    });

    it('should validate resource-specific required fields', async () => {
      render(<CitationForm onSave={mockOnSave} />);

      // 找到包含 Journal Article 文本的按钮
      const buttons = screen.getAllByRole('button');
      const journalButton = buttons.find(button => 
        within(button).queryByText('Journal Article') !== null
      );
      if (!journalButton) throw new Error('Journal Article button not found');
      fireEvent.click(journalButton);

      // 只填写基本字段
      await userEvent.type(screen.getByPlaceholderText(/e.g., Smith, J. D./i), 'Smith, J.');
      await userEvent.type(screen.getByPlaceholderText(/Enter the title/i), 'Test Title');
      await userEvent.type(screen.getByPlaceholderText(/Publication year/i), '2024');

      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Journal title is required')).toBeInTheDocument();
      });
    });
  });

  // 测试复制功能
  describe('Copy Functionality', () => {
    it('should copy citation to clipboard', async () => {
      const mockClipboard = {
        writeText: jest.fn().mockResolvedValue(undefined)
      };
      Object.assign(navigator, {
        clipboard: mockClipboard
      });

      render(<CitationForm onSave={mockOnSave} />);

      // 找到包含 Book 文本的按钮
      const buttons = screen.getAllByRole('button');
      const bookButton = buttons.find(button => 
        within(button).queryByText('Book') !== null
      );
      if (!bookButton) throw new Error('Book button not found');
      fireEvent.click(bookButton);

      // 生成一个简单的引用
      await userEvent.type(screen.getByPlaceholderText(/e.g., Smith, J. D./i), 'Smith, J.');
      await userEvent.type(screen.getByPlaceholderText(/Enter the title/i), 'Test Title');
      await userEvent.type(screen.getByPlaceholderText(/Publication year/i), '2024');
      await userEvent.type(screen.getByPlaceholderText(/Publisher name/i), 'Test Publisher');

      fireEvent.click(screen.getByText('Generate Citation'));

      await waitFor(() => {
        expect(screen.getByText('Copy')).toBeInTheDocument();
      });

      // 点击复制按钮
      const copyButton = screen.getByText('Copy');
      await userEvent.click(copyButton);

      // 验证复制功能被调用
      await waitFor(() => {
        expect(mockClipboard.writeText).toHaveBeenCalled();
      });
    });
  });
});