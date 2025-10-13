# FB Post Analytics Dashboard

This is a [Next.js](https://nextjs.org) project for analyzing Facebook post analytics and community engagement data for Sierra Leone.

## Features

- Community engagement analytics and visualization
- Facebook post performance metrics
- Winner showcase with interactive carousel
- Responsive design with Tailwind CSS
- Static export support with configurable base path

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
```

This will create an `out` directory with static files ready for deployment.

## Base Path Configuration

This project supports deployment with a base path prefix for platforms like GitHub Pages or subdirectory hosting.

### Environment Variables

- `NEXT_PUBLIC_BASE_PATH`: Sets the base path for the application
  - Set to your desired path (e.g., `/fb_post_analytics`)
  - Leave empty for root domain deployment
  - Works the same in development and production

### Configuration Files

- `.env.example`: Template with comprehensive configuration options
- `.env`: environment (gitignored)

### Quick Setup

#### Manual Configuration

1. **Copy the environment template:**
```bash
cp .env.example .env
```

2. **Configure for your deployment:**
```bash
# For GitHub Pages (edit .env)
NEXT_PUBLIC_BASE_PATH=/your-repo-name

# For root domain deployment
NEXT_PUBLIC_BASE_PATH=
```

3. **Build and deploy:**
```bash
npm run build
# Deploy the `out` folder to your hosting platform
```

See [BASEPATH.md](./BASEPATH.md) for detailed documentation on base path configuration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
