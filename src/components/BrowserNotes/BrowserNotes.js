import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span>Animated background works best in <b>Chrome!</b></span>
      </Browser>
      <Browser only firefox>
        <span>Animated background is disabled in FireFox. Try in <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;