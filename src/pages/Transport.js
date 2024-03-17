import React from 'react';

function Transport() {
  return (
    <div>
      <h2>Welcome to the Transporter's Page</h2>
      {/* <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=srm%20easwari%20engineering%20college%20chennai+(Trader%20Locator)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div> */}
<div style={{ width: '100%' }}>
  <iframe
    width="100%"
    height="600"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=srm%20easwari%20engineering%20college%20chennai+(Trader%20Locator)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    <a href="https://www.gps.ie/">gps devices</a>
  </iframe>
</div>

      <p>
        Join us on this journey as we navigate through the exciting realm of transportation. Safe travels!
      </p>
    </div>
  );
}

export default Transport;
