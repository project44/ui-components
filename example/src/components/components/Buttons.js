import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';
import { Button } from 'ui-components';
import './Buttons.scss';

export default (props) => {
  return (
    <div className="p44-ui__page">
      <div className="page-header">
        <h1>Buttons</h1>
      </div>
      <div className="page-content">
        <p className="page-intro">
          A button indicates an action upon touch or click and is typically labeled using text, an icon, or both.
        </p>
        <p className="mb-8">Note that you can add any class name from the list of <a href="/ui-components/colors">colors</a> and the theme will be overwritten.</p>
        <section className="page-section">
          <h3 className="section-title">Primary Brand Button</h3>
          <p>The primary brand button is to indicate app level primary actions. The brand color can be overwritten for theme specific usage.</p>
          <p>The Brand button generally should only be used once per component screen at any one time. It is used when there is an action that
            is clearly more important than the other actions and you need to draw attention to it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action.
          </p>
          <div className="example__render flex items-end">
            <Button className="p44-btn__primary large">Primary brand LG</Button>
            <Button className="p44-btn__primary medium">Primary brand MD</Button>
            <Button className="p44-btn__primary small">Primary brand SM</Button>
            <Button className="p44-btn__primary x-small">Primary brand XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__primary large">Primary brand LG</Button>
<Button className="p44-btn__primary medium">Primary brand MD</Button>
<Button className="p44-btn__primary small">Primary brand SM</Button>
<Button className="p44-btn__primary x-small">Primary brand XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Ink Button</h3>
          <p>The primary ink button is to indicate section or page level actions.</p>
          <p>
            The Ink Button can be used multiple times per screen. It is used when there are primary actions associated with the current application screen
            or content section. An example is when you have a “Apply” button in the filter panel. This button is associated with the section in which it’s contained.
          </p>
          <div className="example__render flex items-end">
            <Button className="p44-btn__primary-ink large">Primary ink LG</Button>
            <Button className="p44-btn__primary-ink medium">Primary ink MD</Button>
            <Button className="p44-btn__primary-ink small">Primary ink SM</Button>
            <Button className="p44-btn__primary-ink x-small">Primary ink XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__primary-ink large">Primary ink LG</Button>
<Button className="p44-btn__primary-ink medium">Primary ink MD</Button>
<Button className="p44-btn__primary-ink small">Primary ink SM</Button>
<Button className="p44-btn__primary-ink x-small">Primary ink XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Primary Ink + Icon Button</h3>
          <p>The primary ink button is to indicate section or page level actions.</p>
          <p>
            The Ink + Icon Button can be used multiple times per screen. It is used when there are actionable tasks associated with the current application screen or
            content section. An example would be item level actions like “Share Link” or “Manage Notifications”. This button is associated with the section in which it’s contained.
          </p>
          <div className="example__render flex items-end">
            <Button className="p44-btn__primary-ink large"><i className="material-icons left">settings</i>Primary ink LG</Button>
            <Button className="p44-btn__primary-ink medium"><i className="material-icons left">settings</i>Primary ink MD</Button>
            <Button className="p44-btn__primary-ink small"><i className="material-icons left">settings</i>Primary ink SM</Button>
            <Button className="p44-btn__primary-ink x-small"><i className="material-icons left">settings</i>Primary ink XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__primary-ink large"><i className="material-icons left">settings</i>Primary ink LG</Button>
<Button className="p44-btn__primary-ink medium"><i className="material-icons left">settings</i>Primary ink MD</Button>
<Button className="p44-btn__primary-ink small"><i className="material-icons left">settings</i>Primary ink SM</Button>
<Button className="p44-btn__primary-ink x-small"><i className="material-icons left">settings</i>Primary ink XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Secondary Gray-40 Button</h3>
          <p>The Secondary Gray-40 button is to indicate “nevermind”.</p>
          <p>
            The Secondary Button generally should only be used to provide another option if the primary button action isn’t the users’ choice. An example is when you have a primary
            “Save” button but instead the user would like to “Cancel”. This button is associated with the section in which it’s contained.
          </p>
          <div className="example__render flex items-end">
            <Button className="p44-btn__secondary large">Tertiary Gray-40 LG</Button>
            <Button className="p44-btn__secondary medium">Tertiary Gray-40 MD</Button>
            <Button className="p44-btn__secondary small">Tertiary Gray-40 SM</Button>
            <Button className="p44-btn__secondary x-small">Tertiary Gray-40 XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__secondary large">Tertiary Gray-40 LG</Button>
<Button className="p44-btn__secondary medium">Tertiary Gray-40 MD</Button>
<Button className="p44-btn__secondary small">Tertiary Gray-40 SM</Button>
<Button className="p44-btn__secondary x-small">Tertiary Gray-40 XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Destructive Outline</h3>
          <p>The Destructive Outline Button is used to indicate a destructive action to the user. Like permanently deleting data.</p>
          <p>
            This button is typically used at a page or item level and spans the width of the application.
          </p>
          <div className="example__render">
            <Button className="p44-btn__destructive large mb-4">Destructive Outline LG</Button>
            <Button className="p44-btn__destructive medium mb-4">Destructive Outline MD</Button>
            <Button className="p44-btn__destructive small mb-4">Destructive Outline SM</Button>
            <Button className="p44-btn__destructive x-small mb-4">Destructive Outline XS</Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__destructive large">Destructive Outline LG</Button>
<Button className="p44-btn__destructive medium">Destructive Outline MD</Button>
<Button className="p44-btn__destructive small">Destructive Outline SM</Button>
<Button className="p44-btn__destructive x-small">Destructive Outline XS</Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
        <section className="page-section">
          <h3 className="section-title">Destructive Text-Icon</h3>
          <p>The Destructive Text-Icon Button is used to indicate a destructive action to the user. Like permanently deleting data.</p>
          <p>
            This button is typically used in place of the Destructive Outline Button when the action is on a smaller scale (i.e. inline, row-level, etc.)
          </p>
          <div className="example__render flex flex items-end">
            <Button className="p44-btn__basic new-fruit large">Destructive Tex-Icon LG<i className="material-icons right">delete</i></Button>
            <Button className="p44-btn__basic new-fruit medium">Destructive Tex-Icon MD<i className="material-icons right">delete</i></Button>
            <Button className="p44-btn__basic new-fruit small">Destructive Tex-Icon SM<i className="material-icons right">delete</i></Button>
            <Button className="p44-btn__basic new-fruit x-small">Destructive Tex-Icon XS<i className="material-icons right">delete</i></Button>
          </div>
          <div className="component__usage mt-8">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
<Button className="p44-btn__basic new-fruit large">Destructive Tex-Icon LG<i className="material-icons right">delete</i></Button>
<Button className="p44-btn__basic new-fruit medium">Destructive Tex-Icon MD<i className="material-icons right">delete</i></Button>
<Button className="p44-btn__basic new-fruit small">Destructive Tex-Icon SM<i className="material-icons right">delete</i></Button>
<Button className="p44-btn__basic new-fruit x-small">Destructive Tex-Icon XS<i className="material-icons right">delete</i></Button>`}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  )
}
