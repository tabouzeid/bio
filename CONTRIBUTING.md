# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/bio.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Start dev server: `npm run dev`

## Development Workflow

### Making Changes

1. Make your changes in your feature branch
2. Write or update tests as needed
3. Ensure all tests pass: `npm run test:coverage`
4. Build the project: `npm run build`
5. Commit your changes with a descriptive message

### Commit Messages

Follow conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add contact form component
fix: resolve navigation link active state
docs: update README with new scripts
```

### Code Style

- Use functional components with hooks
- Follow existing code formatting (2 spaces indentation)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Testing

- Write tests for new features
- Update tests when modifying existing features
- Ensure all tests pass before submitting PR
- Aim for good test coverage

## Pull Request Process

1. Update documentation if needed (README, CLAUDE.md, etc.)
2. Ensure CI checks pass (tests, build)
3. Request review from maintainers
4. Address any feedback
5. Once approved, your PR will be merged

## Project Structure Guidelines

- **Components**: One component per directory with `index.js` and `style.css`
- **Data**: Keep static data in `/src/data` directory
- **Styles**: Component-specific styles in component directory, global styles in root
- **Assets**: Static files in `/public/assets`

## Questions or Issues?

- Open an issue for bugs or feature requests
- Use discussions for questions and ideas
- Be respectful and constructive in all interactions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
