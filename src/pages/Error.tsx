import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import Layout from '../components/Layout';

export default function ErrorPage() {
  const error = useRouteError();

  let title = 'Unexpected Error';
  let message = 'An unknown error has occurred.';

  if (isRouteErrorResponse(error)) {
    title = 'Oops! Something went wrong';
    message = `${error.status} - ${error.statusText}`;

    if (error.data) {
      message += `\n${error.data}`;
    }
  } else if (error instanceof Error) {
    title = 'Oops! An error has occurred';
    message = error.message;
  }

  return (
    <Layout>
      <section
        role="alert"
        className="m-auto flex h-full min-h-screen flex-col items-center justify-center space-y-4 text-center"
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text text-muted-foreground text-sm whitespace-pre">
          {message}
        </p>
      </section>
    </Layout>
  );
}
