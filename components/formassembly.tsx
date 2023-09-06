import React from "react";
import Script from "next/script";

function _dispatchDOMContent () {
  console.log(`script loaded correctly, window,FB has been populated`);
  const domContentLoadedEvent = document.createEvent('Event');
  domContentLoadedEvent.initEvent('DOMContentLoaded', true, true);
  window.document.dispatchEvent(domContentLoadedEvent);
}

export default function FormAssembly() {

  return (
    <>
      <Script
        src="https://jnjdev.tfaforms.net/publish/1111"
        strategy="lazyOnload"
        data-qp-target-id="form-1111-nextjs"
        onLoad={() =>_dispatchDOMContent ()}
      />
      <div id="form-1111-nextjs"></div>
    </>
  );
}
