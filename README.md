# Hyperscan Developer Documentation

This repository contains the developer documentation for Hyperscan projects, built with [Vocs](https://vocs.dev/).

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Documentation Structure

- **Code Conventions** - Language-specific standards for TypeScript, Python, Go, and Dart
- **Code Review** - Guidelines for effective code reviews
- **Version Control** - Git workflow and branch management

## Configuration

The site is configured in `vocs.config.ts`, which defines the sidebar structure and site metadata.

## Contributing

1. Create a branch: `git checkout -b feature/your-feature-name`
2. Make your changes to the documentation in `/docs/pages/`
3. Preview with `npm run dev`
4. Submit a pull request

All documentation should use MDX with proper headings, examples, and code highlighting.

## Resources

- [Vocs Documentation](https://vocs.dev)
- [MDX Documentation](https://mdxjs.com/)
