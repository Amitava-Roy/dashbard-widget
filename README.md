# Dashboard Amitava

This project is a modern React dashboard template built with TypeScript and Vite. It provides a solid foundation for building scalable, maintainable, and high-performance web applications.

## Features

- ⚡️ **Vite** for fast development and build
- ⚛️ **React** with **TypeScript** for type safety and productivity
- ♻️ **Hot Module Replacement** (HMR) for instant feedback
- 🧹 **ESLint** with recommended and type-aware rules
- 🎨 Easily customizable and extendable

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Build for production:**

```bash
npm run build
```

## Linting and Code Quality

This template uses ESLint with recommended and type-aware rules. For production apps, update your ESLint config as follows:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // ...tseslint.configs.strictTypeChecked, // for stricter rules
    // ...tseslint.configs.stylisticTypeChecked, // for stylistic rules
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also add [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules.

## Learn More

- [Live Demo](https://tangerine-panda-ff76fa.netlify.app/)

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)

---

Feel free to customize this template to fit your project's needs!
