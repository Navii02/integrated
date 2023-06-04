import React, { useState } from "react";
import ReactDOM from "react-dom";
import './error.css';

function ErrorPage() {
  const [error, setError] = useState(null);

  return (
    <div>
      {error && (
        <div className="error-page">
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
