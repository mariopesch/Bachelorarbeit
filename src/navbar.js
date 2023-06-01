import React, { useState } from 'react';
import MapComponent from './MapComponent';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Blocks');

  const handleClick = (tab) => {
    if (tab === 'Map') {
      // Handle click event for the "Map" tab
      // You can add your code here to open the map or perform any desired action
      console.log('Open Map');
    } else {
      // Handle click event for other tabs
      // You can add your code here to handle the respective tab
      console.log(`Tab clicked: ${tab}`);
    }

    setActiveTab(tab);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td colSpan={2}>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr id="tabRow" style={{ height: '1em' }}>
                  <td className="tabmin tab_collapse">&nbsp;</td>
                  <td
                    id="tab_blocks"
                    className={`taboff tab_collapse ${activeTab === 'Blocks' ? 'tabon' : ''}`}
                    //onClick={() => handleClick('Blocks')}
                  >
                    Blocks
                  </td>
                  <td className="tabmin tab_collapse">&nbsp;</td>
                  <td
                    id="tab_map"
                    className={`taboff tab_collapse ${activeTab === 'Map' ? 'tabon' : ''}`}
                    onClick={() => handleClick('Map')}
                  >
                    Map
                  </td>
                  <td className="tabmin tab_collapse">&nbsp;</td>
                  <td
                    id="tab_R"
                    className={`taboff tab_collapse ${activeTab === 'R' ? 'tabon' : ''}`}
                    //onClick={() => handleClick('R')}
                  >
                    R
                  </td>
                  <td className="tabmin">&nbsp;</td>
                  <td id="tab_code" className="taboff">
                    <select id="code_menu"></select>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div style={{ height: '200px' }}>
              {/*
                Render the MapComponent conditionally based on the active tab
              */}
              {activeTab === 'Map' && <MapComponent />}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Navbar;
