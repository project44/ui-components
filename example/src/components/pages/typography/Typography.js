import React from 'react';

import './Typography.scss';

export default (props) => {
  return (
    <div className="p44-ui__page">
      <div className="page-header">
        <h1>Typography</h1>
      </div>
      <div className="page-content">
        <p className="page-intro">
          Text is our primary source for data consumption. Our application uses
          minimal blocks of text or content Our primary use of text is for
          labels, data reference and date/time fields. Differentiation of fonts,
          styles and weights to create a hierarchical data system is priority
          within the application.
        </p>

        {/* ROBOTO */}
        <section className="page-section">
          <h3 className="section-title">Roboto</h3>
          <div className="font-example roboto">
            <span>
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </span>
            <span>
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </span>
          </div>
          <div className="font-weights roboto">
            <div className="font-weights__example">
              <div className="example light">
                Aa
              </div>
              <div className="title">
                <span>Light</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example regular">
                Aa
              </div>
              <div className="title">
                <span>Regular</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example medium">
                Aa
              </div>
              <div className="title">
                <span>Medium</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example bold">
                Aa
              </div>
              <div className="title">
                <span>Bold</span>
              </div>
            </div>
          </div>
        </section>

        {/* ROBOTO MONO */}
        <section className="page-section">
          <h3 className="section-title">Roboto Mono <span className="aside">• Used for Numeric data</span></h3>
          <div className="font-example roboto-mono">
            <span>
              0 1 2 3 4 5 6 7 8 9
            </span>
          </div>
          <div className="font-weights roboto-mono">
            <div className="font-weights__example">
              <div className="example light">
                01
              </div>
              <div className="title">
                <span>Light</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example regular">
                01
              </div>
              <div className="title">
                <span>Regular</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example medium">
                01
              </div>
              <div className="title">
                <span>Medium</span>
              </div>
            </div>
            <div className="font-weights__example">
              <div className="example bold">
                01
              </div>
              <div className="title">
                <span>Bold</span>
              </div>
            </div>
          </div>
        </section>

        {/* BODY FONTS */}
        <section className="page-section">
          <h3 className="section-title">Body Font</h3>
          <div className="body-fonts">
            <div className="body-fonts__example--12">
              <p className="details">
                Body - 12px Regular - Gray | Line-height:20px
              </p>
              <p>
                Lorem pot dolizzle sit amizzle, crackalackin adipiscing elit.
                Nullizzle shit velit, shut the shizzle up volutpizzle, suscipit
                things, bling bling vizzle, funky fresh. Pellentesque crackalackin
                tortizzle. Sizzle erizzle. Fusce izzle check it out stuff
                turpizzle tempizzle pimpin'. The bizzle pellentesque dawg fo
                turpis. Ass izzle gangsta. Pellentesque eleifend rhoncizzle
                gangster. In bling bling crackalackin boofron hizzle. Phat
                dapibus. Curabitizzle tellus urna, pretizzle tellivizzle,
                mattizzle boom shackalack, eleifend fo shizzle my nizzle, nunc.
                suscipizzle. Integer semper velit nizzle fo shizzle.
              </p>
            </div>
            <div className="body-fonts__example--16">
              <p className="details">
                Body - 16px Regular - Gray | Line-height:24px
              </p>
              <p>
                Lorem pot dolizzle sit amizzle, crackalackin adipiscing elit.
                Nullizzle shit velit, shut the shizzle up volutpizzle, suscipit
                things, bling bling vizzle, funky fresh. Pellentesque crackalackin
                tortizzle. Sizzle erizzle. Fusce izzle check it out stuff turpizzle
                tempizzle pimpin'. The bizzle pellentesque dawg fo turpis. Ass
                izzle gangsta. Pellentesque eleifend rhoncizzle gangster. In bling
                bling crackalackin boofron hizzle. Phat dapibus. Curabitizzle
                tellus urna, pretizzle tellivizzle, mattizzle boom shackalack,
                eleifend fo shizzle my nizzle, nunc. suscipizzle. Integer semper
                velit nizzle fo shizzle.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h3 className="section-title">Headings</h3>
          <div className="headings">
            <div className="headings__example">
              <div className="example">
                <h1 className="hero">Hero - 46px - White - 500</h1>
              </div>
              <div className="description">
                <ul>
                  <li>Login Screen</li>
                  <li>Landing Page</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h1 className="page-title">h1(500) - Page Title - 28px - Gray</h1>
              </div>
              <div className="description">
                <ul>
                  <li>Stand-alone Page Title</li>
                  <li>Page Title Data</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h1 className="page-title--light">h1(300) - Page Title - 28px - Gray</h1>
              </div>
              <div className="description">
                <ul>
                  <li>Label in Page Title (i.e. “Order#”)</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h2 className="section-title">h2(500) - Section Title - 21px - Gray</h2>
              </div>
              <div className="description">
                <ul>
                  <li>Page Section Title</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h2 className="section-title--light">h2(400) - Section Title - 21px - Gray - 400</h2>
              </div>
              <div className="description">
                <ul>
                  <li>Status Card Status</li>
                  <li>Carrier Card Carrier Name</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h3 className="card-title uppercase">h3(Uppercase) - Card Title - 16px - Gray - 500</h3>
              </div>
              <div className="description">
                <ul>
                  <li>Card Title Info</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h3 className="section-title--light">h3 - Company Name - 16px - Gray - 500</h3>
              </div>
              <div className="description">
                <ul>
                  <li>Company Name Info</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h4 className="carrier-name">h4 - Carrier Name - 14px - Gray-40 - 500</h4>
              </div>
              <div className="description">
                <ul>
                  <li>Carrier Name on Shipment Listing Card</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h5 className="eta">h5 - ETA - 14px - Gray - 400</h5>
              </div>
              <div className="description">
                <ul>
                  <li>ETA/DEPARTED Time</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h6 className="form-header">h6(500) - Form Content Section Header - 12px - Gray-80 - Uppercase </h6>
              </div>
              <div className="description">
                <ul>
                  <li>Form Section Headers</li>
                  <li>Timeline Status Updates</li>
                </ul>
              </div>
            </div>

            <div className="headings__example">
              <div className="example">
                <h6 className="section-label">h6(400) - Content Section Label - 12px - Gray-80 - Uppercase </h6>
              </div>
              <div className="description">
                <ul>
                  <li>Appointment Window Label</li>
                  <li>Pickup/Delivery/Origin/Destination</li>
                  <li>Timeline Status Updates Details</li>
                  <li>Timeline Status Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h3 className="section-title">Links and Labels</h3>
          <div className="example">
            <a className="link" href={null}>Hyperlink - Inline - 12px Regular - p44 Blue</a>
          </div>
          <div className="example">
            <a className="link uppercase" href={null}>Hyperlink - Standalone - 12px Bold - Uppercase - p44 Blue</a>
          </div>
          <div className="label">
            <label>Input Label - 12px Light - Gray-80</label>
          </div>
        </section>
      </div>
    </div>
  );
}
