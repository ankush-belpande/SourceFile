import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export default class Navigation extends React.Component<any> {
  public render(): React.ReactElement<any> {
    return (
      <div>
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          ariaLabel="Nav basic example"
          styles={{
            link: {
              background: "#EC971F",
              color: "#fff",
              borderRadius: 5
            },
            root: {
              background: "#EC971F",
              width: 208,
              height: "auto",
              boxSizing: 'border-box',
              overflowY: 'auto'
            }

          }}
          groups={
            [
              {
                links: [
                  {
                    iconClassName: styles.button,
                    name: 'Results',
                    url: '#/',
                    key: 'key2',
                    isExpanded: true,
                    
                  },
                  {
                    name: 'Payslips',
                    url: '#/Apps',
                    key: 'key3',
                    isExpanded: true,

                  },
                  
                  {
                    name: 'Input',
                    url: '#/Pages',
                    key: 'key4',
                  }
                ]
              }
            ]}
        />
      </div>
    );
  }
}
