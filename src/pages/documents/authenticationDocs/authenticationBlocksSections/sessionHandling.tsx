export const SessionMiddleware = () => (
  <>
    <p>
      The Session Middleware Block sets up the session handling middleware in
      your Express application.
    </p>

    <ul>
      <li>
        Secret: This input section requires a string that acts as a secret for
        signing the session ID cookie.
      </li>

      <li>
        Options: This input allows you to provide an options object for the
        express-session middleware, customizing session behavior such as cookie
        settings, session duration, and more.
      </li>
    </ul>
  </>
);

export const SessionCerate = () => (
  <>
    <p>
      The <b>Session Middleware</b> Block is used to set up the session handling
      middleware in your Express application. This block requires a secret,
      which is a string used for signing the session ID cookie. Additionally, it
      allows you to provide an options object to customize various aspects of
      the session middleware, such as cookie settings and session duration.
    </p>
  </>
);

export const SessionSetToAVariable = () => (
  <p>
    The <b>Session Create</b> Block is used to create a session for a user. This
    block takes a user details object and assigns it to the session. This is
    useful for storing user-specific information in the session, such as
    authentication status or user preferences.
  </p>
);

export const SaveSession = () => (
  <p>
    The
    <b>Save Session Block </b> ensures that the session is saved. This block is
    used to explicitly save the session after making changes to it, ensuring
    that the session data is stored correctly.
  </p>
);

export const EndSession = () => (
  <p>
    The <b>End Session Block</b> is used to end or destroy the session. This
    block is useful for logging out users by terminating their session, which
    removes all session data.
  </p>
);

export const IsSessionAvailable = () => (
  <p>
    The <b>Is Session Available Block</b> checks if a session is available. This
    block allows you to input two blocks: one to run if the session is available
    and another to run if the session is not available. This is useful for
    conditionally executing code based on the presence of a session.
  </p>
);
