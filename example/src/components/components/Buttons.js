import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';
import { Button } from 'ui-components';
import './Buttons.scss';

const ButtonExample = () => {
  return (
    <div className="p44-ui__page">
      <div className="page-header">
        <h1>Buttons</h1>
      </div>
      <div className="page-content">
        <p className="page-intro">
          A button indicates an action upon touch or click and is typically labeled using text, an icon, or both.
        </p>
        <p className="mb-8">
          Note that you can add any class name from the list of <a href="/ui-components/colors">colors</a>
          and the theme will be overwritten. You can add any classNames necessary to the component, and have full access
          to the{' '}
          <a href="https://ant.design/components/button/" target="_blank" rel="noopener noreferrer">
            Ant Button API
          </a>
          .
        </p>
        <section className="page-section">
          <h3 className="section-title">Primary Brand Button</h3>
          <p>
            The primary brand button is to indicate app level primary actions. The brand color can be overwritten for
            theme specific usage.
          </p>
          <p>
            The Brand button generally should only be used once per component screen at any one time. It is used when
            there is an action that is clearly more important than the other actions and you need to draw attention to
            it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action.
          </p>
          <div className="example__render flex items-end">
            <Button type="primary" size="lg">
              Primary brand LG
            </Button>
            <Button type="primary">Primary brand Default</Button>
            <Button type="primary" size="sm">
              Primary brand SM
            </Button>
            <Button type="primary" size="xsm">
              Primary brand XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="primary" size="lg">Primary brand LG</Button>
<Button type="primary">Primary brand MD</Button>
<Button type="primary" size="sm">Primary brand SM</Button>
<Button type="primary" size="xsm">Primary brand XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Transparent Button</h3>
          <div className="example__render flex items-end">
            <Button type="primary-transparent" size="lg">
              Primary Transparent LG
            </Button>
            <Button type="primary-transparent">Primary Transparent Default</Button>
            <Button type="primary-transparent" size="sm">
              Primary Transparent SM
            </Button>
            <Button type="primary-transparent" size="xsm">
              Primary Transparent XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="primary-transparent" size="lg">Primary Transparent LG</Button>
<Button type="primary-transparent">Primary Transparent MD</Button>
<Button type="primary-transparent" size="sm">Primary Transparent SM</Button>
<Button type="primary-transparent" size="xsm">Primary Transparent XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Transparent Text Button</h3>
          <div className="example__render flex items-end">
            <Button type="primary-transparent-text" size="lg">
              Primary Transparent Text LG
            </Button>
            <Button type="primary-transparent-text">Primary Transparent Text Default</Button>
            <Button type="primary-transparent-text" size="sm">
              Primary Transparent Text SM
            </Button>
            <Button type="primary-transparent-text" size="xsm">
              Primary Transparent Text XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="primary-transparent-text" size="lg">Primary Transparent Text LG</Button>
<Button type="primary-transparent-text">Primary Transparent Text MD</Button>
<Button type="primary-transparent-text" size="sm">Primary Transparent Text SM</Button>
<Button type="primary-transparent-text" size="xsm">Primary Transparent Text XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Ink Button</h3>
          <p>The primary ink button is to indicate section or page level actions.</p>
          <p>
            The Ink Button can be used multiple times per screen, and can be thought of as the default button option. It
            is used when there are primary actions associated with the current application screen or content section. An
            example is when you have a “Apply” button in the filter panel. This button is associated with the section in
            which it’s contained.
          </p>
          <div className="example__render flex items-end">
            <Button size="lg">Primary ink LG</Button>
            <Button size="med">Primary ink MD</Button>
            <Button size="sm">Primary ink SM</Button>
            <Button size="xsm">Primary ink XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button size="lg">Primary ink LG</Button>
<Button>Primary ink MD</Button>
<Button size="sm">Primary ink SM</Button>
<Button size="xsm">Primary ink XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Ink + Icon Button</h3>
          <p>The primary ink button is to indicate section or page level actions.</p>
          <p>
            The Ink + Icon Button can be used multiple times per screen. It is used when there are actionable tasks
            associated with the current application screen or content section. An example would be item level actions
            like “Share Link” or “Manage Notifications”. This button is associated with the section in which it’s
            contained.
          </p>
          <div className="example__render flex items-end">
            <Button size="lg">
              <i className="material-icons left">settings</i>Primary ink LG
            </Button>
            <Button>
              <i className="material-icons left">settings</i>Primary ink MD
            </Button>
            <Button size="sm">
              <i className="material-icons left">settings</i>Primary ink SM
            </Button>
            <Button size="xsm">
              <i className="material-icons left">settings</i>Primary ink XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button size="lg"><i className="material-icons left">settings</i>Primary ink LG</Button>
<Button><i className="material-icons left">settings</i>Primary ink MD</Button>
<Button size="sm"><i className="material-icons left">settings</i>Primary ink SM</Button>
<Button size="xsm"><i className="material-icons left">settings</i>Primary ink XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Secondary Gray-40 Button</h3>
          <p>The Secondary Gray-40 button is to indicate “nevermind”.</p>
          <p>
            The Secondary Button generally should only be used to provide another option if the primary button action
            isn’t the users’ choice. An example is when you have a primary “Save” button but instead the user would like
            to “Cancel”. This button is associated with the section in which it’s contained.
          </p>
          <div className="example__render flex items-end">
            <Button type="secondary" size="lg">
              Tertiary Gray-40 LG
            </Button>
            <Button type="secondary">Tertiary Gray-40 MD</Button>
            <Button type="secondary" size="sm">
              Tertiary Gray-40 SM
            </Button>
            <Button type="secondary" size="xsm">
              Tertiary Gray-40 XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="secondary" size="lg">Tertiary Gray-40 LG</Button>
<Button type="secondary">Tertiary Gray-40 MD</Button>
<Button type="secondary" size="sm">Tertiary Gray-40 SM</Button>
<Button type="secondary" size="xsm">Tertiary Gray-40 XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Destructive Outline</h3>
          <p>
            The Destructive Outline Button is used to indicate a destructive action to the user. Like permanently
            deleting data.
          </p>
          <p>This button is typically used at a page or item level and spans the width of the application.</p>
          <div className="example__render">
            <Button type="destructive" size="lg" className="mb-4">
              Destructive Outline LG
            </Button>
            <Button type="destructive" className="mb-4">
              Destructive Outline MD
            </Button>
            <Button type="destructive" size="sm" className="mb-4">
              Destructive Outline SM
            </Button>
            <Button type="destructive" size="xsm" className="mb-4">
              Destructive Outline XS
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="destructive" size="lg">Destructive Outline LG</Button>
<Button type="destructive">Destructive Outline MD</Button>
<Button type="destructive" size="sm">Destructive Outline SM</Button>
<Button type="destructive" size="xsm">Destructive Outline XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Destructive Text-Icon</h3>
          <p>
            The Destructive Text-Icon Button is used to indicate a destructive action to the user. Like permanently
            deleting data.
          </p>
          <p>
            This button is typically used in place of the Destructive Outline Button when the action is on a smaller
            scale (i.e. inline, row-level, etc.)
          </p>
          <div className="example__render flex flex items-end">
            <Button type="destructive-text" size="lg">
              Destructive Tex-Icon LG<i className="material-icons right">delete</i>
            </Button>
            <Button type="destructive-text">
              Destructive Tex-Icon MD<i className="material-icons right">delete</i>
            </Button>
            <Button type="destructive-text" size="sm">
              Destructive Tex-Icon SM<i className="material-icons right">delete</i>
            </Button>
            <Button type="destructive-text" size="xsm">
              Destructive Tex-Icon XS<i className="material-icons right">delete</i>
            </Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language="jsx" style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button type="destructive-text" size="lg">Destructive Text-Icon LG<i className="material-icons right">delete</i></Button>
<Button type="destructive-text">Destructive Text-Icon MD<i className="material-icons right">delete</i></Button>
<Button type="destructive-text" size="sm">Destructive Text-Icon SM<i className="material-icons right">delete</i></Button>
<Button type="destructive-text" size="xsm">Destructive Text-Icon XS<i className="material-icons right">delete</i></Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonExample;
