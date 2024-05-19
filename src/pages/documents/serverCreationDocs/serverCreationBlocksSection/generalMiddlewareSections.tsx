import "./serverCreationBlocksSection.css";

export const ServerHelmetDescription = () => (
  <div>
    <p className="BESC">
      The Server Helmet Guard block helps secure your Express applications by
      setting a variety of HTTP response headers. This middleware is crucial for
      enhancing the security of your web application by mitigating several
      common security vulnerabilities. By default, the Helmet Guard sets the
      following headers:
    </p>

    <ul className="BESC">
      <li className="BESC">
        <b>Content-Security-Policy</b>: This header defines a powerful
        allow-list of what can happen on your page, which helps to mitigate many
        types of attacks, including Cross-Site Scripting (XSS) and data
        injection attacks.
      </li>
      <li className="BESC">
        <b>Cross-Origin-Opener-Policy</b>: This header helps to process-isolate
        your page, which can prevent certain types of cross-origin attacks and
        improve your app's security posture.
      </li>
      <li className="BESC">
        <b>Cross-Origin-Resource-Policy</b>: This header blocks other sites from
        loading your resources cross-origin, providing an additional layer of
        security against data theft.
      </li>
      <li className="BESC">
        <b>Origin-Agent-Cluster</b>: This header changes process isolation to be
        origin-based, enhancing the security by better isolating different parts
        of your web application.
      </li>
      <li className="BESC">
        <b>Referrer-Policy</b>: Controls the Referer header, which determines
        how much referrer information is included with requests.
      </li>
      <li className="BESC">
        <b>Strict-Transport-Security</b>: Instructs browsers to prefer HTTPS,
        ensuring that communications between the server and the client are
        encrypted and secure.
      </li>
      <li className="BESC">
        <b>X-Content-Type-Options</b>: This header prevents MIME sniffing by
        ensuring that browsers adhere to the declared content type.
      </li>
      <li className="BESC">
        <b>X-DNS-Prefetch-Control</b>: Controls DNS prefetching, helping to
        prevent DNS leaks and related privacy issues.
      </li>
      <li className="BESC">
        <b>X-Download-Options</b>: Forces downloads to be saved rather than
        executed (Internet Explorer only), which helps prevent certain types of
        attacks.
      </li>
      <li className="BESC">
        <b>X-Frame-Options</b>: This legacy header mitigates clickjacking
        attacks by controlling whether the site can be framed.
      </li>
      <li className="BESC">
        <b>X-Permitted-Cross-Domain-Policies</b>: Controls cross-domain behavior
        for Adobe products, like Acrobat, to prevent unauthorized data access.
      </li>
      <li className="BESC">
        <b>X-Powered-By</b>: This header provides information about the web
        server. Helmet removes it because it could be used in simple attacks.
      </li>
      <li className="BESC">
        <b>X-XSS-Protection</b>: This legacy header tries to mitigate XSS
        attacks but can cause more harm than good, so Helmet disables it by
        default.
      </li>
    </ul>

    <p className="BESC">
      This block includes an input section that allows users to override these
      default options. If you wish to customize the headers set by Helmet, you
      can do so by providing new options as a stringified object. For detailed
      information on the available options and how to configure them, please
      refer to the Helmet documentation.
    </p>
    <p className="BESC">
      {" "}
      By using the Server Helmet Guard block, you can significantly enhance the
      security of your Express application with minimal configuration effort.
    </p>
  </div>
);

export const CompressResponsesMIddleware = () => (
  <>
    <p className="BESC">
      The Compress Responses Middleware block helps improve the performance of
      your Express application by compressing HTTP responses. This middleware
      utilizes the compression library to reduce the size of the response body,
      which can significantly decrease the time required for the client to
      download the resources, especially over slower networks.
    </p>

    <p className="BESC">
      By default, the Compress Responses middleware uses standard compression
      settings, but it also provides an option to override these defaults. You
      can customize the compression behavior by supplying an options object as a
      string. This allows you to tailor the compression settings to meet the
      specific needs of your application.
    </p>

    <p className="BESC">
      To override the default options, input the desired configuration as a
      stringified object in the provided input section. For more details on the
      available options and how to configure them, please refer to the{" "}
      <a
        className="BESC"
        href="https://www.npmjs.com/package/compression"
        target="_blank"
      >
        compression library documentation
      </a>
      .
    </p>

    <p className="BESC">
      By integrating the Compress Responses middleware block, you can enhance
      the efficiency of your Express application, ensuring faster load times and
      a better user experience.
    </p>
  </>
);

export const CorsMiddleware = () => (
  <>
    <p className="BESC">
      The CORS (Cross-Origin Resource Sharing) Middleware block enables your
      Express application to handle cross-origin requests, which is essential
      for allowing your server to be accessed from different domains. By
      default, this block works without any inputs, using standard settings that
      permit requests from any origin. However, if you want to customize the
      behavior, you have several options to override the defaults:
    </p>
    <ul className="BESC">
      <li className="BESC">
        <b>Origin:</b> You can specify the allowed domains for cross-origin
        requests. If you want to allow a single domain, you can pass it as a
        string (e.g., 'https://example.com'). For multiple domains, pass an
        array of domains (e.g., ['https://example.com',
        'https://anotherdomain.com']). If left unspecified, the default value is
        '*', which allows requests from any domain.
      </li>

      <li className="BESC">
        <b>Methods:</b> By default, the middleware allows the HTTP methods GET,
        PUT, POST, and DELETE. You can override this by passing an array of
        allowed methods (e.g., ['GET', 'POST']).
      </li>

      <li className="BESC">
        <b>Custom Options:</b> For more advanced configurations, you can
        override all default behaviors by providing a custom options object.
        This allows you to fine-tune the CORS settings according to your
        specific requirements.
      </li>
    </ul>
    <p className="BESC">
      To get a detailed understanding of the format and available options,
      please refer to the{" "}
      <a
        className="BESC"
        href="https://www.npmjs.com/package/cors"
        target="_blank"
      >
        CORS library documentation
      </a>
      . This library is used under the hood by our application to handle CORS
      configurations.
    </p>

    <p className="BESC">
      By utilizing the CORS Middleware block, you can control which domains can
      access your server and specify the allowed HTTP methods, thereby enhancing
      the security and functionality of your Express application.{" "}
    </p>
  </>
);

export const ExpressJSONMiddleware = () => (
  <>
    <p className="BESC">
      The Express JSON Middleware block is used to parse incoming requests with
      JSON payloads. By default, it uses standard settings to handle JSON data
      efficiently. However, if you wish to customize the parsing behavior, you
      can provide a custom options object. Filling in the custom options will
      override the default settings, allowing you to tailor the JSON parsing to
      your specific needs.
    </p>

    <p className="BESC">
      For more details on the available options and how to configure them,
      please refer to the{" "}
      <a
        className="BESC"
        href="https://expressjs.com/en/4x/api.html#express.json"
        target="_blank"
      >
        Express JSON documentation
      </a>
      .
    </p>
  </>
);

export const ExpressURLEncodedMiddleware = () => (
  <>
    <p className="BESC">
      The Express URL Encoded Middleware block is designed to parse incoming
      requests with URL-encoded payloads, typically used in HTML form
      submissions. By default, it uses standard settings to handle URL-encoded
      data. If you need to customize this behavior, you can provide a custom
      options object. These custom settings will override the defaults, enabling
      you to adjust the middleware to fit your requirements.
    </p>

    <p className="BESC">
      For more information on the available options and how to configure them,
      please refer to the{" "}
      <a
        className="BESC"
        href="https://expressjs.com/en/4x/api.html#express.json"
        target="_blank"
      >
        Express URL Encoded documentation.
      </a>
      .
    </p>
  </>
);

export const ExpressTextMiddleware = () => (
  <>
    <p className="BESC">
      The Express Text Middleware block parses incoming requests with text
      payloads. It is useful for handling plain text data. By default, it uses
      standard settings to manage text data. If you want to customize the text
      parsing behavior, you can provide a custom options object. This will
      override the default settings, allowing you to fine-tune the middleware
      according to your needs.
    </p>

    <p className="BESC">
      For further details on the available options and how to configure them,
      please refer to the{" "}
      <a
        className="BESC"
        href="https://expressjs.com/en/4x/api.html#express.text"
        target="_blank"
      >
        Express Text documentation.
      </a>
      .
    </p>
  </>
);

export const ExpressRawMiddleware = () => (
  <>
    <p className="BESC">
      The Express Raw Middleware block is used to parse incoming requests with
      raw payloads, which means it will accept requests with a Buffer object. By
      default, it uses standard settings to handle raw data. If you wish to
      modify this behavior, you can provide a custom options object. Providing
      these custom settings will override the defaults, enabling you to
      configure the middleware to suit your specific use case.
    </p>

    <p className="BESC">
      For more information on the available options and how to configure them,
      please refer to the{" "}
      <a
        className="BESC"
        href="https://expressjs.com/en/4x/api.html#express.raw"
        target="_blank"
      >
        Express Raw documentation.
      </a>
      .
    </p>
  </>
);

export const DeclareJSONObjectBlock = () => (
  <>
    <p>
      The <b>Declare JSON Object Block</b> is used to declare a new JSON object.
      This block allows you to specify the variable name for the JSON object and
      choose the type of variable declaration (const, let, or var).
    </p>

    <ul>
      <li>
        <b>Variable Name:</b> You can input the name that should be used for the
        JSON object.
      </li>
      <li>
        <b>Declaration Type:</b> A dropdown menu lets you select whether the
        variable should be a const, let, or var.
      </li>
    </ul>

    <p>
      As a example: If you choose const and name the variable myObject, the
      block will create a new JSON object declared as const myObject = {};.
    </p>

    <p>
      This block is essential for initializing a JSON object that you can later
      manipulate or add data to.
    </p>
  </>
);

export const ValueOfBlock = () => (
  <>
    <p>
      The <b>Value Of Block</b> allows you to extract values from JSON objects.
      This block works in conjunction with the <b>Key Chain Block</b> to access
      deeply nested values within a JSON object.
    </p>

    <ul>
      <li>
        <b>Variable Selection:</b> Select the variable from which a value should
        be extracted.
      </li>
      <li>
        <b>Key Chain:</b> Accepts a Key Chain Block to specify the key path. The
        key chain can be nested to access deeply nested values.
      </li>
    </ul>

    <p>
      <b>Example:</b> <br />
      If you want to set the value John for myObject.user.name, you can use the
      Set Value Block with the value John and a Key Chain Block specifying the
      keys user and name.
    </p>
  </>
);

export const SetValueBlock = () => (
  <>
    <p>
      The Set Value Block is used to set a value within a JSON object. This
      block accepts two inputs:
    </p>

    <ul>
      <li>
        <b>Value to Set:</b> The value that you want to assign to a specific key
        in the JSON object.
      </li>
      <li>
        <b>Key Chain:</b> Uses the Key Chain Block to specify where in the JSON
        object the value should be set.
      </li>

      <p>
        <b>Example:</b> If you want to set the value John for
        myObject.user.name, you can use the Set Value Block with the value John
        and a Key Chain Block specifying the keys user and name.
      </p>
    </ul>
  </>
);

export const KeyChainBlock = () => (
  <>
    <p>
      The Key Chain Block is a fundamental block for accessing and setting
      values in nested JSON objects. It accepts:
    </p>

    <ul>
      <li>
        <b>Variable Name of the Key:</b> The key within the JSON object.
      </li>
      <li>
        <b>Next Key Chain Block:</b> Another Key Chain Block if you need to
        access deeper nested values.
      </li>
    </ul>

    <p>
      This block can be chained as much as necessary to reach deeply nested
      properties within a JSON object.
    </p>

    <p>
      <b>Example: </b> To access myObject.user.profile.age, you would use a Key
      Chain Block for user, connected to another Key Chain Block for profile,
      and another for age.
    </p>

    <p>
      By using these JSON handler blocks, you can efficiently manage JSON
      objects in your application. Whether you need to declare new objects,
      extract values, or set values in nested structures, these blocks provide a
      powerful and intuitive way to handle JSON data.
    </p>
  </>
);

export const StatementOutputBlock = () => (
  <>
    <p>
      The Statement Output Block acts as a placeholder for custom code that is
      intended to be used as a statement within other blocks. This block is
      useful for inserting custom logic or statements into the flow of your
      code.
    </p>

    <ul>
      <li>
        <b>Purpose:</b> This block allows you to write any custom code and have
        it integrated as a statement within the block-based code structure.
      </li>
      <li>
        <b>Usage:</b> You can place any valid code within this block. The code
        will be executed in sequence with other statement blocks.
      </li>
    </ul>

    <p>
      <b>Example:</b> If you need to log a message to the console, you can write
      <b>console.log('Hello, World!');</b> inside this block. This block can
      then be used as part of a larger sequence of statements in your
      application.
    </p>
  </>
);

export const ValueOutputBlock = () => (
  <>
    <p>
      The Value Output Block is designed to return a value from custom code,
      which can then be used as input for other blocks. This block is essential
      for creating custom expressions or calculations that produce a value to be
      used elsewhere in the code.
    </p>

    <ul>
      <li>
        <b>Purpose:</b> This block allows you to write any custom code that
        returns a value, which can be utilized by other blocks as input.
      </li>
      <li>
        <b>Usage:</b> You can place any valid code that returns a value inside
        this block. The resulting value can be used wherever a value input is
        required.
      </li>
    </ul>

    <p>
      <b>Example:</b> If you need to compute the sum of two numbers, you can
      write return a + b; inside this block. This block can then be connected to
      other blocks that require the resulting sum as input.
    </p>
  </>
);
